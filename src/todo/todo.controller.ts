import {
  Controller,
  Get,
  Post,
  Delete,
  Patch,
  Param,
  Body,
} from '@nestjs/common';
import { TodoDto } from './dto/todo.dto';
import { TodoService } from './todo.service';
import { ApiBody, ApiTags } from '@nestjs/swagger';

@ApiTags('todo')
@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Post()
  @ApiBody({ type: TodoDto })
  async create(@Body() todoDto: TodoDto) {
    return this.todoService.create(todoDto);
  }

  @Get()
  async findAll() {
    return this.todoService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.todoService.findOne(id);
  }

  @Patch(':id')
  @ApiBody({ type: TodoDto })
  async update(@Param('id') id: number, @Body() todoDto: Partial<TodoDto>) {
    return this.todoService.update(id, todoDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this.todoService.remove(id);
  }
}
