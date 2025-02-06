import mongoose, { Model } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

import { hashPassword } from '../../utils/password-hashing';

import { User } from './model/user.type';
import { UserSchema } from './schema/user.schema';

import { Technology } from './model/technology.type';
import { TechnologySchema } from './schema/technology.schema';

export class DbContext {
  private technologies?: Model<Technology>;

  private users?: Model<User>;

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

  async init(): Promise<void> {
    await this.connectToDatabase();

    this.technologies = mongoose.model<Technology>('Technology', TechnologySchema);
    this.users = mongoose.model<User>('User', UserSchema);
  }

  async getUserById(id: string): Promise<User | null | undefined> {
    if (!this.users) {
      console.error('User model is not initialized.');
      return null;
    }

    return this.users?.findOne({ _id: id });
  }

  async addUser(user: Omit<User, "id">): Promise<User | null> {
    if (!this.users) {
      console.error('User model is not initialized.');
      return null;
    }
    
    try {
      const newUser = new this.users({
        id: uuidv4(),
        ...user,
        password: hashPassword(user.password),
      });
      await newUser.save();
      return newUser;
    } catch (error) {
      console.error('Error saving user: ', error);
      return null;
    }
  }

  async getTechnologies(): Promise<Technology[]> {
    if (!this.technologies) {
      console.error('Technology model is not initialized.');
    }
  
    const technologies = await this.technologies?.find();
    return technologies ?? [];
  }

  async getTechnologyById(id: string): Promise<Technology | null | undefined> {
    if (!this.technologies) {
      console.error('Technology model is not initialized.');
      return null;
    }

    return await this.technologies?.findOne({ _id: id });
  }

  async addTechnology(technology: Omit<Technology, "id">): Promise<Technology | null> {
    if (!this.technologies) {
      console.error('Technology model is not initialized.');
      return null;
    }

    try {
      const newTechnology = new this.technologies({
        id: uuidv4(),
        ...technology,
      });
      await newTechnology.save();
      return newTechnology;
    } catch (error) {
      console.error('Error saving technology: ', error);
      return null;
    }
  }
}
