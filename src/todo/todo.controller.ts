import { Controller, Get, Post, Put, Delete, Patch, Param, Body, ParseIntPipe } from '@nestjs/common';
import { TodoDto } from './dto/todo.dto';
import { Todo } from './todo.entity';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  getAllTodos(): Promise<Todo[]> {
    return this.todoService.findAll();
  }

  @Post()
  addTodo(@Body() todoDto: TodoDto): Promise<Todo> {
    return this.todoService.create(todoDto);
  }

  @Get(':id')
  getTodoById(@Param('id', ParseIntPipe) id: number): Promise<Todo> {
    return this.todoService.findOne(id);
  }

  @Put(':id')
  updateTodo(@Param('id', ParseIntPipe) id: number, @Body() todoDto: TodoDto): Promise<Todo> {
    return this.todoService.update(id, todoDto);
  }

  @Delete(':id')
  deleteTodo(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.todoService.remove(id);
  }

  @Patch(':id/complete')
  completeTodo(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.todoService.complete(id);
  }
}