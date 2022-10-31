import { Injectable } from '@nestjs/common';
import { ExamType, ExamType2, ExamType3 } from './type';

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

const dummy2: ExamType2 = [
  {
    lang: 'react',
    country: 'ko',
  },
  {
    lang: 'nextJs',
    country: 'us',
  },
];

const dummy3: ExamType3 = {
  name: 'jihoon',
  email: 'jihoon@naver.com',
};

@Injectable()
export class AppService {
  getHello(): ExamType {
    return dummy;
  }

  getJob(): ExamType2 {
    return dummy2;
  }

  getUser(id: string) {
    return dummy3;
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
