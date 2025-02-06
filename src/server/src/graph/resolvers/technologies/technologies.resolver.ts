import { DbContext } from '../../../data/db-context';
import { ITechnology } from '../../../data/model/itechnology';

export async function getTechnologies(context: DbContext): Promise<ITechnology[]> {
  return await context.getTechnologies();
}
