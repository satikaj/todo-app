import { Injectable } from '@nestjs/common';
import { TodoDto } from './todo.dto';

export enum Priority {
  high,
  medium,
  low
}

export interface TodoObj {
  id: number;
  title: string;
  notes: string;
  dueDate: string;
  priority: Priority;
  category: string;
  isCompleted: boolean;
}

var todos: Array<TodoObj> = [
  null,
  null,
  null,
  null,
  null
];

var todoNum = 0;

@Injectable()
export class AppService {

  getAllTodos(): Array<TodoObj> {
    return todos;
  }

  addTodo(todoDto: TodoDto): TodoObj {
    this.setTodo(todoNum, todoDto);
    return todos[todoNum++];
  }

  getTodoById(id: number): TodoObj {
    for (let i = 0; i < todos.length; i++) {
      if (todos[i]['id'] == id) return todos[i];
    }
  }

  updateTodo(id: number, todoDto: TodoDto): TodoObj {
    this.setTodo(id, todoDto);
    return todos[id];
  }

  deleteTodo(id: number): void {
    todos[id] = null;
  }

  completeTodo(id: number): void {
    todos[id].isCompleted = true;
  }

  private setTodo(id: number, todoDto: TodoDto): void {
    var todo: TodoObj = {
      id: id,
      title: todoDto.title,
      notes: todoDto.notes,
      dueDate: todoDto.dueDate,
      priority: todoDto.priority,
      category: todoDto.category,
      isCompleted: false
    }
    todos[id] = todo;
  }
}
