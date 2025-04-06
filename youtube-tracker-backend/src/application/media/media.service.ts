import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GoogleApi } from 'src/infrastructure/google.api';
import { Repository } from 'typeorm';
import { TrackContentOptions } from '../content/content.controller';
import { Media } from './media.entity';

@Injectable()
export class MediaService {
  constructor(
    @InjectRepository(Media)
    private readonly mediaRepository: Repository<Media>,
    private readonly googleApi: GoogleApi,
  ) {}

  async findMediaOrCreateFromOrigin({
    resourceId,
    origin,
  }: TrackContentOptions) {
    console.log('[findMediaOrCreateFromOrigin] :: Passed');
    // Vérifier si le média existe déjà
    let media = await this.mediaRepository.findOne({
      where: { resource_id: resourceId, origin: origin },
    });

    if (!media) {
      if (origin === 'youtube') {
        const youtubeVideoDetails =
          await this.googleApi.getVideoDetails(resourceId);
        const videoSnippet = youtubeVideoDetails.items[0].snippet;
        console.log('videoSnippet.categoryId', videoSnippet.categoryId);
        if (Number(videoSnippet.categoryId) !== 10) {
          console.log('passfdqsgds');
          throw new BadRequestException('Is not music category.');
        }
        const mediaBody = {
          title: videoSnippet.title,
          image: videoSnippet.thumbnails.default.url,
        };
        media = this.mediaRepository.create({
          resource_id: resourceId,
          origin,
          type: 'music',
          ...mediaBody,
        });
        await this.mediaRepository.save(media);
      }
    }
    return media as Media;
  }

  async assignAuthorToMedia() {
    const medias = await this.mediaRepository.find();

    for (const media of medias) {
      if (media.origin === 'youtube' && media.resource_author === null) {
        const channelId = await this.getYoutubeChannelIdFromVideoId(
          media.resource_id,
        );
        console.log('channelId', channelId);
        media.resource_author = channelId;

        await this.mediaRepository.save(media);
      }
    }
  }

  private async getYoutubeChannelIdFromVideoId(
    videoId: string,
  ): Promise<string> {
    const response = await this.googleApi.getVideoDetails(videoId);

    return response.items[0].snippet.channelId;
  }
}
