import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';

import { Todo } from '@/entities/todo.entity';
import moment from 'moment';
// import { TodoInterface } from '@/interfaces/todo.interface';

@Injectable()
export class TodoService {
  // private readonly todos: TodoInterface[] = []

  constructor(
    @InjectRepository(Todo)
    private todoRepository: Repository<Todo>,
    private dataSource: DataSource,
  ) {}

  add(todo: Todo) {
    // this.todoRepository.create(todo)
    this.todoRepository.save(todo)
  }

  findOne(id: number): Promise<Todo | null> {
    return this.todoRepository.findOneBy({ id })
  }

  findAll(params): Promise<Todo[]> {
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
