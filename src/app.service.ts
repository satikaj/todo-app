import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHomePage(): string {
    return 'Welcome to the todo app!';
  }
}
