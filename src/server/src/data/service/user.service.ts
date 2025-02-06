import { hashSync } from 'bcrypt-ts';

import { DbContext } from '../db';
import { User } from '../model';

export class UserService {
  constructor(private context: DbContext) {}

  async getUserById(id: string): Promise<User | undefined> {
    const user = await this.context.users()?.findOne({ _id: id });
    return user ?? undefined;
  }

  async isValidUserLogin(email: string, password: string): Promise<{ success: boolean, userId?: string}> {
    var matchingUser = await this.context.users()?.findOne({ email });

    console.log(matchingUser);

    if (!matchingUser) {
      return { success: false };
    }
    
    const matchingPassword = matchingUser.password == hashSync(password, matchingUser.salt);

    if (matchingPassword) {
      return { success: true, userId: matchingUser.id };
    }

    return { success: false };
  }
}
