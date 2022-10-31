import { Controller, Get, Param, Put } from '@nestjs/common';
import { AppService } from './app.service';
import { ExamType } from './type';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): ExamType {
    return this.appService.getHello();
  }

  @Put('/modify/:name')
  putEmail(@Param('name') name: string): string {
    return this.appService.putEmail(name);
  }
}
