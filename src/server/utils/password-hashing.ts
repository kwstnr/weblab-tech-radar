import { genSaltSync, hashSync } from 'bcrypt-ts';

export function hashPassword(password: string): string {
  return hashSync(password, genSaltSync(10));
}
