import { User, Role } from '../model';

export const users: Omit<User, "id" | "password" | "salt">[] = [
  {
    name: 'Mitarbeiter',
    email: 'mitarbeiter@company.com',
    role: Role.EMPLOYEE,
  },
  {
    name: 'Administrator',
    email: 'administrator@company.com',
    role: Role.ADMIN,
  },
];
