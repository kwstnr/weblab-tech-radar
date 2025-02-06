import { DbContext } from '../../../data/db-context';
import { Technology } from '../../../data/model/technology.type';

export async function technologies(_: any, __: any, { dbContext }: { dbContext: DbContext }): Promise<Technology[]> {
  return await dbContext.getTechnologies();
}
