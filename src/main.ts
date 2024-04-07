import { NestFactory } from '@nestjs/core';
import { AppModule } from '@/app.module';
import { ValidationPipe } from '@nestjs/common';

const SERVER_PORT = process.env.PORT;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(SERVER_PORT);
  console.log(`☕ server started at http://localhost:${SERVER_PORT}`);
}

bootstrap();