import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GoogleApi } from 'src/infrastructure/google.api';
import { Media } from './media.entity';
import { MediaService } from './media.service';

@Module({
  imports: [TypeOrmModule.forFeature([Media])],
  providers: [MediaService, GoogleApi],
  controllers: [],
  exports: [MediaService],
})
export class MediaModule {}
