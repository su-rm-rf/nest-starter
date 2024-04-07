import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { ConfigModule } from '@nestjs/config';

import { TodoModule } from '@/modules/todo.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.env.${process.env.NODE_ENV}`
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '123456',
      database: 'dev_24',
      // entities: ['entities/**/*.entity{.ts,.js}'],
      entities: [],
      synchronize: true,
      retryAttempts: 10, // 尝试连接数据库的次数
      retryDelay: 3000, // 连接重试尝试之间的延迟（毫秒）
      autoLoadEntities: true, // 如果是 true，实体将自动加载
    }),
    TodoModule
  ],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
