import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GoogleApi } from 'src/infrastructure/google.api';
import { AuthModule } from '../auth/auth.module';
import { MediaModule } from '../media/media.module';
import { ContentController } from './content.controller';
import { Content } from './content.entity';
import { ContentService } from './content.service';

@Module({
  imports: [MediaModule, AuthModule, TypeOrmModule.forFeature([Content])],
  providers: [ContentService, GoogleApi],
  controllers: [ContentController],
})
export class ContentModule {}
