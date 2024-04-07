import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';

import { TodoService } from '@/services/todo.service';
import { TodoDto } from '@/dto/todo.dto';
import { Todo } from '@/entities/todo.entity';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Post('add')
  async add(@Body() todoDto: TodoDto) {
    this.todoService.saveOrUpdate(todoDto)
  }
  @Post('update')
  async update(@Body() todoDto: TodoDto) {
    this.todoService.saveOrUpdate(todoDto)
  }

  @Get('list')
  // async findAll(@Query() query: any): Promise<Todo[]> {
  async findAll(@Query() query: any) {
    const res = await this.todoService.findAll({
      content: query.content
    })
    return {
      data: res
    }
  }

  @Get(':id')
  // async findOne(@Param() id: number): Promise<Todo> {
  async findOne(@Param() params: any) {
    const { id } = params
    const res = await this.todoService.findOne(id)
    return {
      data: res
    }
  }

  @Post('delete')
  async remove(@Body() todoDto: TodoDto) {
    this.todoService.remove(todoDto.id)
  }

  @Get()
  getHello(): string {
    return this.todoService.getHello();
  }
}
