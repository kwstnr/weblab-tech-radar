import { v4 as uuidv4 } from 'uuid';
import { GraphQLError } from 'graphql';

import { EditTechnologyInput } from '../../graph/mutations/inputs/edit-technology.input';
import { DbContext } from '../db';
import { Technology, TechnologyStatus } from '../model';

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

  async updateTechnology(editTechnologyInput: EditTechnologyInput): Promise<Technology | undefined> {
    const technologies = this.context.technologies();

    if (!technologies) {
      return undefined;
    }

    const existingTechnology = await this.getTechnologyById(editTechnologyInput.id);

    if (!existingTechnology) {
      return undefined;
    }

    var updatePayload: Partial<Technology> = {};
    const isTechnologyBeingPublished = this.isTechnologyBeingPublished(existingTechnology, editTechnologyInput);

    if (isTechnologyBeingPublished && !this.canTechnologyBePublished(existingTechnology, editTechnologyInput)) {
      throw new GraphQLError('Invalid Input. Published Technologies must have the circleDescription', {
        extensions: {
          code: 'INVALID_INPUT',
        },
      });
    }

    if (isTechnologyBeingPublished) {
      updatePayload.published = new Date();
    }

    updatePayload.changed = new Date();

    updatePayload = {
      ...updatePayload,
      ...this.filterOutUndefined(editTechnologyInput)
    }

    try {
      const updatedTechnology = await technologies.findOneAndUpdate(
        { _id: editTechnologyInput.id },
        updatePayload,
        { new: true },
      );

      return updatedTechnology ?? undefined;
    } catch (error) {
      throw new GraphQLError('Internal Server Error', {
        extensions: {
          code: 'INTERNAL_SERVER_ERROR',
        },
      });
    }
  }

  async deleteTechnology(id: string): Promise<boolean> {
    const technologies = this.context.technologies();

    if (!technologies) {
      return false;
    }

    try {
      const deleteResult = await technologies.deleteOne({ _id: id });
      return deleteResult.deletedCount === 1;
    } catch (error) {
      console.error('Error deleting technology: ', error);
      return false
    }
  }

  private canTechnologyBePublished(existingTechnology: Technology, editTechnologyInput: EditTechnologyInput): boolean {
    var updatedTechnologyCircleAndStatus = {
      ...{
        circle: existingTechnology.circle,
        circleDescription: existingTechnology.circleDescription,
      },
      ...this.filterOutUndefined({
        circle: editTechnologyInput.circle,
        circleDescription: editTechnologyInput.circleDescription
      }),
    }

    return !!updatedTechnologyCircleAndStatus.circle && !!updatedTechnologyCircleAndStatus.circleDescription;
  }

  private filterOutUndefined(obj: object): object {
    return Object.entries(obj).reduce((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = value;
      }
      return acc;
    }, {} as any);
  }

  private isTechnologyBeingPublished(existingTechnology: Technology, editTechnologyInput: EditTechnologyInput): boolean {
    return existingTechnology.status === TechnologyStatus.DRAFTED && editTechnologyInput.status === TechnologyStatus.PUBLISHED;
  }
}
