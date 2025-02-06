import { TechnologyService } from '../../../data/service/technology.service';
import { Technology } from '../../../data/model/technology.type';

export async function technologyById(_: any, { id }: { id: string }, { technologyService }: { technologyService: TechnologyService }): Promise<Technology | null | undefined> {
  return await technologyService.getTechnologyById(id);
}
