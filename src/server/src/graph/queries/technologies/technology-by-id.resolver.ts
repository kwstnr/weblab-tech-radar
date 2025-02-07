import { GraphQLError } from 'graphql';

import { TechnologyService } from '../../../data/service';
import { 
  Technology,
  TechnologyStatus,
  AuthInformation, 
  Role 
} from '../../../data/model';

export async function technologyById(_: any,
  { id }: { id: string },
  { technologyService, authInformation }: {
    technologyService: TechnologyService,
    authInformation: AuthInformation,
  }): Promise<Technology |  undefined> {
  if (!authInformation) {
    throw new GraphQLError("Anonymous access denied.", {
      extensions: {
        code: 'ANONYMOUS_ACCESS'
      }
    })
  }

  var isAdmin = authInformation.role == Role.ADMIN;

  var technology = await technologyService.getTechnologyById(id);

  if (!technology) {
    return undefined;
  }

  if (!isAdmin && technology.status == TechnologyStatus.DRAFTED) {
    return undefined;
  }

  return technology;
}
