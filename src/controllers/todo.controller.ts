import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { TodoService } from '@/services/todo.service';
import { TodoDto } from '@/dto/todo.dto'
import { Todo } from '@/entities/todo.entity';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Post('add')
  async add(@Body() todoDto: TodoDto) {
    this.todoService.add(todoDto)
  }

  @Get('list')
  // findAll(): Promise<Todo[]> {
  async findAll(@Query() query: any) {
    console.log(query)
    const res = await this.todoService.findAll({
      content: query.content
    })
    return {
      data: res
    }
  }

  @Get(':id')
  findOne(@Param() id: number): Promise<Todo> {
    return this.todoService.findOne(id)
  }

  @Get()
  getHello(): string {
    return this.todoService.getHello();
  }
}
