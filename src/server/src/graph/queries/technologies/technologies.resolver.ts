import { TechnologyService } from '../../../data/service/technology.service';
import { Technology } from '../../../data/model/technology.type';
import { TechnologyStatus } from '../../../data/model/technology-status.enum';

export async function technologies(_: any, __: any, { technologyService }: { technologyService: TechnologyService }): Promise<Technology[]> {
  const allTechnologies = await technologyService.getTechnologies();
  return allTechnologies.filter((technology: Technology) => technology.status == TechnologyStatus.PUBLISHED);
}
