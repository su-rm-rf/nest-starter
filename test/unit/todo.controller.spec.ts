import { Test, TestingModule } from '@nestjs/testing';
import { TodoController } from '@/controllers/todo.controller';
import { TodoService } from '@/services/todo.service';

describe('TodoController', () => {
  let todo: TestingModule;

  beforeAll(async () => {
    todo = await Test.createTestingModule({
      controllers: [TodoController],
      providers: [TodoService],
    }).compile();
  });

  // describe('getHello', () => {
  //   it('should return "Hello 你好"', () => {
  //     const todoController = todo.get(TodoController);
  //     expect(todoController.getHello()).toBe('Hello World!');
  //   });
  // });
});
