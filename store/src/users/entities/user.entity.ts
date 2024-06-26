import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'users' })
export class UserEntity {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  id: string;
  @Column({ name: 'name', length: 100, nullable: false })
  name: string;
  @Column({ name: 'name', length: 70, nullable: false })
  email: string;
  @Column({ name: 'name', length: 255, nullable: false })
  password: string;
  @CreateDateColumn({ name: 'created_at' })
  createdAt: string;
  @CreateDateColumn({ name: 'updated_at' })
  updatedAt: string;
  @CreateDateColumn({ name: 'deleted_at' })
  deletedAt: string;
}
