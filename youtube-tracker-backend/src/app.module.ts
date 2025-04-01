import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './application/auth/auth.module';
import { Content } from './application/content/content.entity';
import { ContentModule } from './application/content/content.module';
import { Media } from './application/media/media.entity';
import { MediaModule } from './application/media/media.module';
import { User } from './application/user/user.entity';
import { UserModule } from './application/user/user.module';
@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      autoLoadEntities: true,
      synchronize: true,
      entities: [Media, Content, User],
      logging: true,
    }),
    UserModule,
    AuthModule,
    MediaModule,
    ContentModule,
  ],
  providers: [JwtService],
})
export class AppModule {}
