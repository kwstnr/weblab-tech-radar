import mongoose, { Model } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';
import { genSaltSync, hashSync } from 'bcrypt-ts';

import { users } from '../seed';
import { User, Technology } from '../model';
import { UserSchema, TechnologySchema } from '../schema';

export class DbContext {
  private _technologies?: Model<Technology>;

  private _users?: Model<User>;

  constructor(private connectionString: string, private testPassword: string) {}

  private async connectToDatabase(): Promise<void> {
    try {
      await mongoose.connect(this.connectionString, {
        authSource: 'admin',
      });
      console.log('Connected to MongoDB');
    } catch (error) {
      console.error('Error connecting to MongoDB', error);
      process.exit(1);
    }
  }

  private async seedTestUsers(): Promise<void> {
    if (!this._users) {
      console.error('Error seeding users, user model is not initialized.');
      process.exit(1);
    }

    const existingUser = await this._users.findOne({ name: 'Mitarbeiter' });
    if (existingUser != undefined) {
      console.log('Users already seeded, aborting');
      return;
    }
    
    try {
      users.forEach((user: Omit<User, "id" | "password" | "salt">) => {
        const salt = genSaltSync(10);
        const newUser = new this._users!({
          ...user,
          id: uuidv4(),
          salt,
          password: hashSync(this.testPassword, salt),
        });
        newUser.save();
      });
    } catch (error) {
      console.error('Error seeding users: ', error);
    }
  }

  technologies(): Model<Technology> | undefined {
    if (!this._technologies) {
      console.error('Technology model is not initialized.');
      return undefined;
    }
    return this._technologies;
  }

  users(): Model<User> | undefined {
    if (!this._users) {
      console.error('User model is not initialized.');
      return undefined;
    }
    return this._users;
  }

  async init(): Promise<void> {
    await this.connectToDatabase();

    this._technologies = mongoose.model<Technology>('Technology', TechnologySchema);
    this._users = mongoose.model<User>('User', UserSchema);

    await this.seedTestUsers();
  }
}
