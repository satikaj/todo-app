import { Priority } from './app.service';

export class TodoDto {
    title: string;
    notes: string;
    dueDate: string;
    priority: Priority;
    category: string;
}