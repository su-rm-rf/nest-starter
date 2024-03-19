import { Controller, Get, Query } from '@nestjs/common';
import { CartService } from '@/services/cart.service';

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Get()
  getCart(@Query('a') aa: string): string {
    // console.log( aa )
    return this.cartService.getCart(aa);
  }
}
