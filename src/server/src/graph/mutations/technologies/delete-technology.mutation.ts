import { GraphQLError } from 'graphql';

import { TechnologyService } from '../../../data/service';
import { DeleteTechnologyInput } from '../inputs/delete-technology.input';
import { DeleteResponse } from '../outputs/delete-response.output';
import { AuthInformation, Role } from '../../../data/model';

export async function deleteTechnology(_: any,
  { input }: { input: DeleteTechnologyInput },
  { technologyService, authInformation }: {
    technologyService: TechnologyService,
    authInformation: AuthInformation
  }): Promise<DeleteResponse> {
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

  const successful = await technologyService.deleteTechnology(input.id);
  return { successful };
}
