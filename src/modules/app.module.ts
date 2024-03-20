import { Module } from '@nestjs/common';
import { OrderModule } from '@/modules/order.module';
import { CartModule } from '@/modules/cart.module';

@Module({
  imports: [OrderModule, CartModule],
})
export class AppModule {}
