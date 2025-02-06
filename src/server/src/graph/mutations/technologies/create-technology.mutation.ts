import { DbContext } from '../../../data/db-context';
import { Technology } from '../../../data/model/technology.type';
import { CreateTechnologyInput } from '../inputs/create-technology.input';

export async function createTechnology(_: any, { input }: { input: CreateTechnologyInput }, { dbContext }: { dbContext: DbContext }): Promise<Technology | null> {
  return await dbContext.addTechnology({
    ...input,
    created: new Date(),
  })
}
