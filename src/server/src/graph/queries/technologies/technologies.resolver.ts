import { GraphQLError } from 'graphql';

import { TechnologyService } from '../../../data/service';
import { Technology, TechnologyStatus, AuthInformation, Role } from '../../../data/model';

export async function technologies(_: any,
  __: any,
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
  return isAdmin ? 
    allTechnologies : 
    allTechnologies.filter((technology: Technology) => technology.status == TechnologyStatus.PUBLISHED);
}
