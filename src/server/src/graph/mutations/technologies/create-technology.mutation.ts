import { GraphQLError } from 'graphql';

import { Technology, AuthInformation, Role } from '../../../data/model';
import { TechnologyService } from '../../../data/service';
import { CreateTechnologyInput } from '../inputs/create-technology.input';

export async function createTechnology(_: any,
  { input }: { input: CreateTechnologyInput },
  { technologyService, authInformation }: {
    technologyService: TechnologyService,
    authInformation: AuthInformation,
  }): Promise<Technology | undefined> {
  if (!authInformation) {
    throw new GraphQLError("Anonymous access denied.", {
      extensions: {
        code: 'ANONYMOUS_ACCESS'
      }
    })
  }

  var isAdmin = authInformation.role == Role.ADMIN;

  if (!isAdmin) {
    throw new GraphQLError("Unauthorized access denied.", {
      extensions: {
        code: 'NOT_AUTHORIZED'
      }
    })
  }

  return await technologyService.addTechnology({
    ...input,
    created: new Date(),
  })
}
