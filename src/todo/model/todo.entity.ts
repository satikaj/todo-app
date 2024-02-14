import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Priority } from './type/priority.enum';
import { Category } from './type/category.enum';

@Entity()
export class Todo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ nullable: true })
  notes: string;

  @Column({ nullable: true })
  dueDate: Date;

  @Column({ nullable: true })
  priority: Priority;

  @Column({ nullable: true })
  category: Category;

  @Column({ default: false })
  isCompleted: boolean;
}
