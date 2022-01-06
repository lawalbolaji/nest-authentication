import { Injectable } from '@nestjs/common';
import { User } from './interfaces/user.interface';

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    {
      userId: 1,
      email: 'lawalabdulrasheedbolaji@gmail.com',
      password: 'climate01',
    },
    {
      userId: 2,
      email: 'rasheed@bonango.io',
      password: 'password123',
    },
  ];

  // createUser(user: User): string {
  //   this.users.push(user);
  //   return 'User successfully created';
  // }

  findAllUsers(): User[] {
    return this.users;
  }

  async findOne(email: string): Promise<User | undefined> {
    return this.users.find((user) => user.email === email);
  }
}
