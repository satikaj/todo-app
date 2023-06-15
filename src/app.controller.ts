import { Controller, Get, Post, Put, Delete, Patch, Body, Param } from '@nestjs/common';
import { AppService, TodoObj } from './app.service';
import { TodoDto } from './todo.dto';

@Controller('todo')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAllTodos(): Array<TodoObj> {
    return this.appService.getAllTodos();
  }

  @Post()
  addTodo(@Body() todoDto: TodoDto): TodoObj {
    return this.appService.addTodo(todoDto);
  }

  @Get(':id')
  getTodoById(@Param('id') id: number): TodoObj {
    return this.appService.getTodoById(id);
  }

  @Put(':id')
  updateTodo(@Param('id') id: number, @Body() todoDto: TodoDto): TodoObj {
    return this.appService.updateTodo(id, todoDto);
  }

  @Delete(':id')
  deleteTodo(@Param('id') id: number): void {
    return this.appService.deleteTodo(id);
  }

  @Patch(':id/complete')
  completeTodo(@Param('id') id: number): void {
    return this.appService.completeTodo(id);
  }
}
