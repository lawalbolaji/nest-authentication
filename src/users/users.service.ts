import { Injectable } from '@nestjs/common';
import { Role } from 'src/auth/roles.enum';
import { User } from './interfaces/user.interface';

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    {
      userId: 1,
      email: 'lawalabdulrasheedbolaji@gmail.com',
      password: 'climate01',
      roles: [Role.Admin, Role.User],
    },
    {
      userId: 2,
      email: 'rasheed@bonango.io',
      password: 'password123',
      roles: [Role.User],
    },
  ];

  findAllUsers(): User[] {
    return this.users;
  }

  async findOne(email: string): Promise<User | undefined> {
    return this.users.find((user) => user.email === email);
  }
}
