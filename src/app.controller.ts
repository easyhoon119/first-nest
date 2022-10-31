import { Controller, Get, Param, Put } from '@nestjs/common';
import { AppService } from './app.service';
import { ExamType, ExamType2, ExamType3 } from './type';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): ExamType {
    return this.appService.getHello();
  }

  @Get('/job')
  getJob(): ExamType2 {
    return this.appService.getJob();
  }

  @Get('/:id')
  getOneUser(@Param('id') id: string): ExamType3 {
    return this.appService.getUser(id);
  }

  @Put('/modify/:name')
  putEmail(@Param('name') name: string): string {
    return this.appService.putEmail(name);
  }
}
