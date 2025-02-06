import { DbContext } from '../../../data/db-context';
import { Technology } from '../../../data/model/technology.type';

export async function getTechnologies(context: DbContext): Promise<Technology[]> {
  return await context.getTechnologies();
}
