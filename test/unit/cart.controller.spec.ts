import { Test, TestingModule } from '@nestjs/testing';
import { CartController } from '@/controllers/cart.controller';
import { CartService } from '@/services/cart.service';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [CartController],
      providers: [CartService],
    }).compile();
  });

  describe('getHello', () => {
    it('should return "Hello 你好"', () => {
      const cartController = app.get(CartController);
      expect(cartController.getCart('你好')).toBe('Hello 你好');
    });
  });
});
