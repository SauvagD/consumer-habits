import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Content } from '../content/content.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  username: string;

  @OneToMany(() => Content, (content) => content.user)
  contents: Content[];

  @Column({ default: new Date() })
  createdAt: Date;
}
