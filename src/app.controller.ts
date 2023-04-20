import { Controller, Get, Param } from '@nestjs/common';
import { AppService, TodoObj } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('todo/:id')
  getTodo(@Param('id') id: number): TodoObj {
    return this.appService.getTodo(id);
  }
}
