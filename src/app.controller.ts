import { Controller, Get, Query } from '@nestjs/common';
import { AppService, KeyValuePair } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getJsonGreeting(@Query('name') name: string): KeyValuePair {
    return this.appService.getJsonGreeting(name);
  }
}
