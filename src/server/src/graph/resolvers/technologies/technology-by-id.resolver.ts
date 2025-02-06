import { DbContext } from '../../../data/db-context';
import { Technology } from '../../../data/model/technology.type';

export async function getTechnologyById(context: DbContext, id: string): Promise<Technology | null | undefined> {
  return await context.getTechnologyById(id);
}
