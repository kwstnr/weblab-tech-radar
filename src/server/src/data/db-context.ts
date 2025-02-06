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

  async getTechnologies(): Promise<ITechnology[]> {
    if (!this.technologies) {
      console.error('Technology model is not initialized.');
    }
  
    const technologies = await this.technologies?.find();
    return technologies ?? [];
  }

  async getTechnologyById(id: string): Promise<ITechnology | null | undefined> {
    if (!this.technologies) {
      console.error('Technology model is not initialized.');
      return null;
    }

    return await this.technologies?.findOne({ _id: id });
  }

  async saveTechnology(technology: Partial<ITechnology>): Promise<ITechnology | null> {
    if (!this.technologies) {
      console.error('Technology model is not initialized.');
      return null;
    }

    try {
      const existingTechnology = await this.technologies.findOne({ _id: technology.id });

      if (existingTechnology) {
        const updatedTechnology = await this.technologies.findOneAndUpdate(
          { _id: technology.id },
          technology,
          { new: true }
        );
        console.log(`Updated Technology: ${updatedTechnology}`);
        return updatedTechnology;
      } else {
        const newTechnology = new this.technologies(technology);
        await newTechnology.save();
        console.log(`Created New Technology: ${newTechnology}`);
        return newTechnology;
      }
    } catch (error) {
      console.error('Error saving technology:', error);
      return null;
    }
  }
}
