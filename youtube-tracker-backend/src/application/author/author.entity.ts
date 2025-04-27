import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Media } from '../media/media.entity';
import { User } from '../user/user.entity';

@Entity()
export class Author {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, { eager: true })
  @Index('user_index')
  @Index('user_media_index', ['user', 'media'])
  user: User;

  @ManyToOne(() => Media, { eager: true })
  media: Media;

  @Column({ default: 1 })
  views: number;

  @CreateDateColumn()
  lastViewedAt: Date;
}
