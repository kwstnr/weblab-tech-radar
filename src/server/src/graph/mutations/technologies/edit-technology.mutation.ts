import { GraphQLError } from 'graphql';

import { AuthInformation, Technology, Role } from '../../../data/model';
import { EditTechnologyInput } from '../inputs/edit-technology.input';
import { TechnologyService } from '../../../data/service';

export async function editTechnology(_: any,
  { input }: { input: EditTechnologyInput },
  { technologyService, authInformation }: {
    technologyService: TechnologyService,
    authInformation: AuthInformation,
  }): Promise<Technology> {
  if (!authInformation) {
    throw new GraphQLError('Anonymous access denied.', {
      extensions: {
        code: 'ANONYMOUS_ACCESS'
      }
    })
  }

  var isAdmin = authInformation.role == Role.ADMIN;

  if (!isAdmin) {
    throw new GraphQLError('Unauthorized access denied.', {
      extensions: {
        code: 'NOT_AUTHORIZED'
      }
    })
  }

  var updatedTechnology = await technologyService.updateTechnology(input);
  if (!updatedTechnology) {
    throw new GraphQLError('Technology not found.', {
                           
      extensions: {
        code: 'NOT_FOUND',
      },
    });
  }

  return updatedTechnology;
}
