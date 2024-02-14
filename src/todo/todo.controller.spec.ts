import { Test, TestingModule } from '@nestjs/testing';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';
import { TodoDto } from './dto/todo.dto';
import { plainToInstance } from 'class-transformer';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Todo } from './model/todo.entity';

describe('TodoController', () => {
  let todoController: TodoController;

  const todoDto = plainToInstance(TodoDto, { title: 'test' });
  let result = {
    title: 'test',
    notes: null,
    dueDate: null,
    priority: null,
    category: null,
    id: 1,
    isCompleted: false,
  };

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forFeature([Todo]),
        TypeOrmModule.forRoot({
          type: 'sqlite',
          database: ':memory:',
          entities: [Todo],
          dropSchema: true,
          synchronize: true,
          logging: true,
        }),
      ],
      controllers: [TodoController],
      providers: [TodoService],
    }).compile();

    todoController = app.get<TodoController>(TodoController);
  });

  describe('create', () => {
    it('should return the created todo', async () => {
      expect(await todoController.create(todoDto)).toEqual(result);
    });
  });

  describe('findAll', () => {
    it('should return all todos', async () => {
      await todoController.create(todoDto);
      expect(await todoController.findAll()).toEqual([result]);
    });
  });

  describe('findOne', () => {
    it('should return the todo with id 1', async () => {
      await todoController.create(todoDto);
      expect(await todoController.findOne(1)).toEqual(result);
    });
  });

  describe('update', () => {
    it('should return the updated todo with id 1', async () => {
      await todoController.create(todoDto);
      result = { ...result, notes: 'unit tests' };
      expect(await todoController.update(1, { notes: 'unit tests' })).toEqual(
        result,
      );
    });
  });

  describe('remove', () => {
    it('should delete the todo with id 1', async () => {
      await todoController.create(todoDto);
      await todoController.remove(1);
      expect(await todoController.findAll()).toEqual([]);
    });
  });
});
