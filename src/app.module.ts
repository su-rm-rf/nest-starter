import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CartController } from '@/controllers/cart.controller';
import { AppService } from './app.service';
import { CartService } from './services/cart.service';

@Module({
  imports: [],
  controllers: [
    AppController, CartController,
  ],
  providers: [
    AppService, CartService,
  ],
})
export class AppModule {}
