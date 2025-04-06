import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GoogleApi } from 'src/infrastructure/google.api';
import { MediaController } from './media.controller';
import { Media } from './media.entity';
import { MediaService } from './media.service';

@Module({
  imports: [TypeOrmModule.forFeature([Media])],
  providers: [MediaService, GoogleApi],
  controllers: [MediaController],
  exports: [MediaService],
})
export class MediaModule {}
