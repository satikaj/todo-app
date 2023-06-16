import { Priority } from '../priority.enum'

export class TodoDto {
    title: string;
    notes: string;
    dueDate: string;
    priority: Priority;
    category: string;
}