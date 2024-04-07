import { Test, TestingModule } from '@nestjs/testing';

import { AppModule } from '@/app.module';
import { TodoController } from '@/controllers/todo.controller';

describe('Controller Test', () => {
  let test: TestingModule;

  beforeAll(async () => {
    test = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();
  });

  describe('getHello', () => {
    it('should return "Hello World!"', () => {
      const todoController = test.get(TodoController);
      expect(todoController.getHello()).toBe('Hello World!');
    });
  });
  
  afterAll(async () => {
    await test.close();
  });
});
