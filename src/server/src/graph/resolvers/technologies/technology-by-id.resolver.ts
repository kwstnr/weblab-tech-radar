import { DbContext } from '../../../data/db-context';
import { ITechnology } from '../../../data/model/itechnology';

export async function getTechnologyById(context: DbContext, id: string): Promise<ITechnology | null | undefined> {
  return await context.getTechnologyById(id);
}
