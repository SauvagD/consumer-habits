import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
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
}
