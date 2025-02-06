import { v4 as uuidv4 } from 'uuid';

import { DbContext } from '../db-context';
import { Technology } from '../model/technology.type';

export class TechnologyService {
  constructor(private context: DbContext) {}

  async getTechnologies(): Promise<Technology[]> {
    const technologies = await this.context.technologies()?.find();
    return technologies ?? [];
  }

  async getTechnologyById(id: string): Promise<Technology | undefined> {
    const technology = await this.context.technologies()?.findOne({ _id: id });
    return technology ?? undefined;
  }

  async addTechnology(technology: Omit<Technology, 'id'>): Promise<Technology | undefined> {
    const technologies = this.context.technologies();

    if (!technologies) {
      return undefined;
    }

    try {
      const newTechnology = new technologies({
        id: uuidv4(),
        ...technology,
      });
      await newTechnology.save();
      return newTechnology;
    } catch (error) {
      console.error('Error saving technology: ', error);
      return undefined;
    }
  }
}
