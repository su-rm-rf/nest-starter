import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` })
const SERVER_PORT = process.env.PORT

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(SERVER_PORT);
  console.log(`☕ server started at http://localhost:${SERVER_PORT}`)
}
bootstrap();
