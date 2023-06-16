import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Priority } from './priority.enum'

@Entity()
export class Todo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  notes: string;

  @Column()
  dueDate: string;

  @Column()
  priority: Priority;

  @Column()
  category: string;

  @Column({ default: false })
  isCompleted: boolean;
}