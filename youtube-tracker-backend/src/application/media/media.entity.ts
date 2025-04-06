import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';
import { MediaOrigin, MediaType } from './media.entity.type';

@Entity()
export class Media {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  @Index()
  @Index('media_origin_index', ['origin', 'resource_id'])
  origin: MediaOrigin; // youtube, spotify, etc.

  @Column()
  @Index()
  resource_id: string; // ID de la vidéo/musique sur la plateforme

  @Column({ nullable: true })
  resource_author: string;

  @Column({ nullable: true })
  image: string;

  @Column()
  type: MediaType; // music, movie, anime, etc.
}
