import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import {
  AuthenticatedRequest,
  JwtAuthGuard,
} from 'src/infrastructure/jwt-auth.guard';
import { MediaOrigin } from '../media/media.entity.type';
import { ContentService } from './content.service';

export type TrackContentOptions = {
  origin: MediaOrigin;
  resourceId: string;
};

@Controller('content')
export class ContentController {
  constructor(private readonly contentService: ContentService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async trackContent(
    @Req() req: AuthenticatedRequest,
    @Body() mediaData: TrackContentOptions,
  ) {
    return this.contentService.addOrUpdateContent(req.user, mediaData);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async listContent(@Req() req: AuthenticatedRequest) {
    return await this.contentService.listContent(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('youtube')
  async listYoutubeContent(@Req() req: AuthenticatedRequest) {
    return await this.contentService.listYoutubeContentGroupedByChannel(
      req.user,
    );
  }

  @UseGuards(JwtAuthGuard)
  @Get('top-channels')
  async getUserTopChannels(
    @Req() req: AuthenticatedRequest,
    @Query('limit') limit: number,
    @Query('page') page: number,
  ) {
    return await this.contentService.getTopChannels({
      page,
      limit,
      user: req.user,
    });
  }

  @UseGuards(JwtAuthGuard)
  @Get('author/:authorId')
  async getUserTopAuthors(
    @Req() req: AuthenticatedRequest,
    @Param('authorId') authorId: string,
  ) {
    return await this.contentService.getChannelContents({
      user: req.user,
      authorId,
    });
  }
}
