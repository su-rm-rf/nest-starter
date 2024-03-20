import { Test, TestingModule } from '@nestjs/testing';
import { OrderController } from '@/controllers/order.controller';
import { OrderService } from '@/services/order.service';

describe('OrderController', () => {
  let order: TestingModule;

  beforeAll(async () => {
    order = await Test.createTestingModule({
      controllers: [OrderController],
      providers: [OrderService],
    }).compile();
  });

  describe('getHello', () => {
    it('should return "Hello World!"', () => {
      const orderController = order.get(OrderController);
      expect(orderController.getHello()).toBe('Hello World!');
    });
  });
});
