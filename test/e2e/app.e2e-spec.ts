import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { AppModule } from '@/modules/app.module';
import { INestApplication } from '@nestjs/common';

describe('App.Module (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('/order (GET)', () => {
    return request(app.getHttpServer())
      .get('/order')
      .expect(200)
      .expect('Hello World!');
  });
  it('/cart (GET)', () => {
    return request(app.getHttpServer())
      .get('/cart?a=1')
      .expect(200)
      .expect('Hello 1');
  });
});
