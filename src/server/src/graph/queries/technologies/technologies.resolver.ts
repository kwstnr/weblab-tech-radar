import { DbContext } from '../../../data/db-context';
import { Technology } from '../../../data/model/technology.type';
import { TechnologyStatus } from '../../../data/model/technology-status.enum';

export async function technologies(_: any, __: any, { dbContext }: { dbContext: DbContext }): Promise<Technology[]> {
  const allTechnologies = await dbContext.getTechnologies();
  return allTechnologies.filter((technology: Technology) => technology.status == TechnologyStatus.PUBLISHED);
}
