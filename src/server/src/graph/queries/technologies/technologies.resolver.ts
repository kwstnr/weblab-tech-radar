import { GraphQLError } from 'graphql';

import { TechnologyService } from '../../../data/service';
import { Technology, TechnologyStatus, TechnologyCategory, AuthInformation, Role } from '../../../data/model';

export async function technologies(_: any,
  { category }: { category?: TechnologyCategory },
  { technologyService, authInformation }: { 
    technologyService: TechnologyService,
    authInformation: AuthInformation,
  }): Promise<Technology[]> {
  if (!authInformation) {
    throw new GraphQLError("Anonymous access denied.", {
      extensions: {
        code: 'ANONYMOUS_ACCESS'
      }
    })
  }

  var isAdmin = authInformation.role == Role.ADMIN;

  const allTechnologies = await technologyService.getTechnologies();
  const filteredTechnologies = isAdmin ? 
    allTechnologies : 
    allTechnologies.filter((technology: Technology) => technology.status == TechnologyStatus.PUBLISHED);

  if (category) {
    return filteredTechnologies.filter((technology: Technology) => technology.category === category);
  }
  return filteredTechnologies;
}
