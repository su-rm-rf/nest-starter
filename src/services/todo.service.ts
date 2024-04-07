import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';

import { Todo } from '@/entities/todo.entity';
import moment from 'moment';

@Injectable()
export class TodoService {
  
  constructor(
    @InjectRepository(Todo)
    private todoRepository: Repository<Todo>,
    // private dataSource: DataSource,
  ) {}

  async saveOrUpdate(todo: Todo) {
    this.todoRepository.save(todo)
  }

  async findOne(id: number): Promise<Todo | null> {
    const res = await this.todoRepository.findOneBy({ id })
    return res
  }

  async findAll(params): Promise<Todo[]> {
    return this.todoRepository.findBy(params)
  }

  async remove(id: number): Promise<void> {
    // await this.todoRepository.delete(id)
    this.todoRepository.update(id, {
      'deleted_flag': true,
      // 'deleted_time': moment().format()
    })
  }

  getHello(): string {
    return 'Hello World!';
  }
}
