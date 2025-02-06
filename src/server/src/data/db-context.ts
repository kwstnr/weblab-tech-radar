import mongoose, { Model } from 'mongoose';

import { User } from './model/user.type';
import { UserSchema } from './schema/user.schema';

import { Technology } from './model/technology.type';
import { TechnologySchema } from './schema/technology.schema';

export class DbContext {
  private _technologies?: Model<Technology>;

  private _users?: Model<User>;

  constructor(private connectionString: string) {}

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
  }
}
