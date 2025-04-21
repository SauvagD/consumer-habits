import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GoogleApi } from 'src/infrastructure/google.api';
import { Repository } from 'typeorm';
import { MediaService } from '../media/media.service';
import { User } from '../user/user.entity';
import { TrackContentOptions } from './content.controller';
import { Content } from './content.entity';

@Injectable()
export class ContentService {
  constructor(
    @InjectRepository(Content)
    private readonly contentRepository: Repository<Content>,
    private readonly mediaService: MediaService,
    private readonly googleApi: GoogleApi,
  ) {}

  async addOrUpdateContent(
    user: User,
    mediaData: TrackContentOptions,
  ): Promise<Content> {
    const media =
      await this.mediaService.findMediaOrCreateFromOrigin(mediaData);

    // Vérifier si l'utilisateur a déjà un content lié à ce media
    let content = await this.contentRepository.findOne({
      where: { user: { id: user.id }, media: { id: media.id } },
      relations: ['media', 'user'],
    });

    if (!content) {
      // Si le content n'existe pas, on le crée avec 1 vue
      content = this.contentRepository.create({
        user,
        media,
        views: 1,
        lastViewedAt: new Date(),
      });
    } else {
      // Sinon, on met à jour le nombre de vues et la date
      content.views += 1;
      content.lastViewedAt = new Date();
    }

    return this.contentRepository.save(content);
  }

  async listContent(user: User) {
    return await this.contentRepository.find({
      where: {
        user: {
          id: user.id,
        },
      },
      order: {
        views: 'DESC',
      },
      relations: ['media'],
    });
  }

  async listYoutubeContentGroupedByChannel(user: User) {
    const youtubeMusics = await this.contentRepository.find({
      where: {
        user: {
          id: user.id,
        },
        media: {
          origin: 'youtube',
        },
      },
      relations: ['media'],
    });

    for (const music of youtubeMusics) {
      music.media.resource_author;
    }

    return [];
  }

  async getTopChannels({
    page = 1,
    limit = 30,
    user,
  }: {
    page: number;
    limit: number;
    user: User;
  }): Promise<any[]> {
    const offset = (page - 1) * limit;

    const result = await this.contentRepository
      .createQueryBuilder('content')
      .innerJoin('content.media', 'media')
      .select('media.resource_author', 'author')
      .addSelect('SUM(content.views)', 'totalViews')
      .where('media.origin = :origin', { origin: 'youtube' })
      .andWhere('content.userId = :userId', { userId: user.id })
      .andWhere('media.resource_author IS NOT NULL')
      .groupBy('media.resource_author')
      .orderBy('SUM(content.views)', 'DESC')
      .offset(offset)
      .limit(limit)
      .getRawMany();

    const channelIds = result.map((item) => item.author);
    const channels = await this.googleApi.getYouTubeChannelDetails(channelIds);

    const channelsWithViews = channels.map((channel) => {
      const views = result.find(
        (item) => item.author === channel.id,
      )?.totalViews;
      return {
        ...channel,
        views,
      };
    });
    channelsWithViews.sort((a, b) => b.views - a.views);
    return channelsWithViews;
  }

  async getChannelContents({
    authorId,
    user,
  }: {
    authorId: string;
    user: User;
  }) {
    const contents = await this.contentRepository.find({
      where: {
        user: {
          id: user.id,
        },
        media: {
          resource_author: authorId,
        },
      },
    });
    return contents;
  }

  async getMusicSummary({ user }) {
    const lastTenMusicPromise = this.contentRepository.find({
      where: {
        user: {
          id: user.id,
        },
      },
      order: {
        lastViewedAt: 'DESC',
      },
      take: 10,
    });
    const topArtistsPromise = this.contentRepository
      .createQueryBuilder('content')
      .leftJoin('content.media', 'media')
      .select('media.resource_author', 'artist')
      .addSelect('media.image', 'image')
      .addSelect('media.origin', 'origin')
      .addSelect('media.resource_author', 'name')
      .addSelect('COUNT(*)', 'views') // ou SUM(content.views) si tu as une colonne `views`
      .where('media.origin = :origin', { origin: 'youtube' }) // optionnel
      .andWhere('media.resource_author IS NOT NULL')
      .groupBy('media.resource_author')
      .addGroupBy('media.image')
      .addGroupBy('media.origin')
      .orderBy('views', 'DESC')
      .limit(3)
      .getRawMany();
    const [music, artists] = await Promise.all([
      lastTenMusicPromise,
      topArtistsPromise,
    ]);
    return { music, artists };
  }
}
