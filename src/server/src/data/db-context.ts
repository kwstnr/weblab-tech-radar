import mongoose, { Model } from 'mongoose';

import { ITechnology } from './model/itechnology';
import { TechnologySchema } from './schema/technology.schema';

export class DbContext {
  private technologies?: Model<ITechnology>;

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

    this.technologies = mongoose.model<ITechnology>('Technology', TechnologySchema);
  }

  async getAllTechnologies(): Promise<ITechnology[]> {
    const technologies = await this.technologies?.find();
    return technologies ?? [];
  }
}
