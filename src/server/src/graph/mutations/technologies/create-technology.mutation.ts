import { DbContext } from '../../../data/db-context';
import { ITechnology } from '../../../data/model/itechnology';
import { CreateTechnologyInput } from '../inputs/create-technology.input';

export async function createTechnology(context: DbContext, input: CreateTechnologyInput): Promise<ITechnology | null> {
  return await context.addTechnology({
    ...input,
    created: new Date(),
  })
}
