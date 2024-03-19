import { Injectable } from '@nestjs/common';

@Injectable()
export class CartService {
  getCart(aa: string): string {
    return `Hello ${aa}`;
  }
}
