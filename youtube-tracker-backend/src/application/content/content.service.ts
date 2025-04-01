import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
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
}
