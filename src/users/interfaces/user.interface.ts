import { Role } from 'src/auth/roles.enum';

export interface User {
  userId: number;
  email: string;
  password: string;
  roles: Role[];
}
