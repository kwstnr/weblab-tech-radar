import { DbContext } from '../../../data/db-context';
import { Technology } from '../../../data/model/technology.type';
import { CreateTechnologyInput } from '../inputs/create-technology.input';

export async function createTechnology(context: DbContext, input: CreateTechnologyInput): Promise<Technology | null> {
  return await context.addTechnology({
    ...input,
    created: new Date(),
  })
}
