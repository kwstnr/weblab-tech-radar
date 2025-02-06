import { Technology } from '../../../data/model';
import { TechnologyService } from '../../../data/service';
import { CreateTechnologyInput } from '../inputs/create-technology.input';

export async function createTechnology(_: any, { input }: { input: CreateTechnologyInput }, { technologyService }: { technologyService: TechnologyService }): Promise<Technology | undefined> {
  return await technologyService.addTechnology({
    ...input,
    created: new Date(),
  })
}
