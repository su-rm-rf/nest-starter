import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';

import { AppModule } from '@/app.module';

const SERVER_PORT = process.env.PORT;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(SERVER_PORT);
  console.log(`☕ server started at http://localhost:${SERVER_PORT}`);
}

bootstrap();