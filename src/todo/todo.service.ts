import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from './model/todo.entity';
import { TodoDto } from './dto/todo.dto';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private todoRepository: Repository<Todo>,
  ) {}

  async create(todoDto: TodoDto) {
    const todo = new Todo();
    todo.title = todoDto.title;
    todo.notes = todoDto.notes;
    todo.dueDate = todoDto.dueDate;
    todo.priority = todoDto.priority;
    todo.category = todoDto.category;
    todo.isCompleted = todoDto.isCompleted;

    return this.todoRepository.save(todo);
  }

  async findAll() {
    return this.todoRepository.find();
  }

  async findOne(id: number) {
    const todo: Todo = await this.todoRepository.findOneBy({ id });
    if (!todo) throw new BadRequestException('Todo does not exist.');
    return todo;
  }

  async update(id: number, todoDto: Partial<TodoDto>) {
    const todo: Todo = await this.todoRepository.findOneBy({ id });
    if (!todo) throw new BadRequestException('Todo does not exist.');
    return this.todoRepository.save({ ...todo, ...todoDto });
  }

  async remove(id: number) {
    if (!(await this.todoRepository.findOneBy({ id })))
      throw new BadRequestException('Todo does not exist.');
    await this.todoRepository.delete(id);
  }
}
