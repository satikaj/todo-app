import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from './todo.entity';
import { TodoDto } from './dto/todo.dto'

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private todoRepository: Repository<Todo>,
  ) {}

  findAll(): Promise<Todo[]> {
    return this.todoRepository.find();
  }

  create(todoDto: TodoDto): Promise<Todo> {
    const todo = new Todo();
    todo.title = todoDto.title;
    todo.notes = todoDto.notes;
    todo.dueDate = todoDto.dueDate;
    todo.priority = todoDto.priority;
    todo.category = todoDto.category;

    return this.todoRepository.save(todo);
  }

  findOne(id: number): Promise<Todo | null> {
    return this.todoRepository.findOneBy({ id });
  }

  update(id: number, todoDto: TodoDto): Promise<Todo> {
    const todo = new Todo();
    todo.id = id;
    todo.title = todoDto.title;
    todo.notes = todoDto.notes;
    todo.dueDate = todoDto.dueDate;
    todo.priority = todoDto.priority;
    todo.category = todoDto.category;

    return this.todoRepository.save(todo);
  }

  async remove(id: number): Promise<void> {
    await this.todoRepository.delete(id);
  }

  async complete(id: number): Promise<void> {
    await this.todoRepository.update(id, { isCompleted: true })
  }
}
