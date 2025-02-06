import { DbContext } from '../../../data/db-context';
import { Technology } from '../../../data/model/technology.type';

export async function technologyById(_: any, { id }: { id: string }, { dbContext }: { dbContext: DbContext }): Promise<Technology | null | undefined> {
  return await dbContext.getTechnologyById(id);
}
