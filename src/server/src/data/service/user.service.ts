
import { hashPassword } from '../../../utils';
import { DbContext } from '../db';
import { User } from '../model';

export class UserService {
  constructor(private context: DbContext) {}

  async getUserById(id: string): Promise<User | undefined> {
    const user = await this.context.users()?.findOne({ _id: id });
    return user ?? undefined;
  }
}
