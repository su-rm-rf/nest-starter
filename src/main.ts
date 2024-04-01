import { NestFactory } from '@nestjs/core';
import { configDotenv } from 'dotenv';
import { AppModule } from '@/app.module';

configDotenv({
  path: `.env.${process.env.NODE_ENV}`,
});
const SERVER_PORT = process.env.PORT;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(SERVER_PORT);
  console.log(`☕ server started at http://localhost:${SERVER_PORT}`);
}
bootstrap();
