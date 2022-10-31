import { Injectable } from '@nestjs/common';
import { ExamType } from './type';

let dummy: ExamType = [
  {
    name: 'jihoon',
    email: 'jihoon@gmail.com',
  },
  {
    name: 'jay',
    email: 'jay@gmail.com',
  },
];

@Injectable()
export class AppService {
  getHello(): ExamType {
    return dummy;
  }

  putEmail(name: string): string {
    dummy = dummy.map((item) => {
      return item.name === name
        ? { ...item, email: `${item.name}@naver.com` }
        : item;
    });
    return name;
  }
}
