import { Injectable } from '@nestjs/common';

export interface KeyValuePair{
  [key: string]: string;
}

@Injectable()
export class AppService {
  getJsonGreeting(name: string): KeyValuePair {
    return {'greet': name};
  }
}
