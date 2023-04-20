import { Injectable } from '@nestjs/common';

export interface TodoObj {
  id: number;
  todo: string;
}

const todos: Array<TodoObj> = [
  { id: 1, todo: 'Todo item 1' },
  { id: 2, todo: 'Todo item 2' },
  { id: 3, todo: 'Todo item 3' },
];

@Injectable()
export class AppService {
  getTodo(idNo: number): TodoObj {
    for (let i = 0; i < todos.length; i++) {
      if (todos[i]['id'] == idNo) return todos[i];
    }
  }
}
