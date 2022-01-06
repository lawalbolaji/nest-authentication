import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello User, this page is about figuring out authentication and authorization in nestjs';
  }
}
