
import { v4 as uuidv4 } from 'uuid';

import { hashPassword } from '../../../utils/password-hashing';
import { DbContext } from '../db-context';
import { User } from '../model/user.type';

export class UserService {
  constructor(private context: DbContext) {}

  async getUserById(id: string): Promise<User | undefined> {
    const user = await this.context.users()?.findOne({ _id: id });
    return user ?? undefined;
  }

  async addUser(user: Omit<User, "id">): Promise<User | undefined> {
    const users = this.context.users();

    if (!users) {
      return undefined;
    }

    try {
      const newUser = new users({
        id: uuidv4(),
        ...user,
        password: hashPassword(user.password),
      });
      
      await newUser.save();
      return newUser;
    } catch (error) {
      console.error('Error saving user: ', error);
      return undefined;
    }
  }
}
