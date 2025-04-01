import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Media } from '../media/media.entity';
import { User } from '../user/user.entity';

@Entity()
export class Content {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, { eager: true })
  user: User;

  @ManyToOne(() => Media, { eager: true })
  media: Media;

  @Column({ default: 1 })
  views: number;

  @CreateDateColumn()
  lastViewedAt: Date;
}
