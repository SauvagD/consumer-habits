import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { MediaOrigin, MediaType } from './media.entity.type';

@Entity()
export class Media {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  origin: MediaOrigin; // youtube, spotify, etc.

  @Column()
  resource_id: string; // ID de la vidéo/musique sur la plateforme

  @Column({ nullable: true })
  image: string;

  @Column()
  type: MediaType; // music, movie, anime, etc.
}
