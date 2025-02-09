import { GraphQLError } from 'graphql';

import { UserService } from '../../../data/service';
import { User, AuthInformation } from '../../../data/model';

export async function me(_: any,
  __: any,
  { userService, authInformation }: {
    userService: UserService,
    authInformation: AuthInformation
  }): Promise<User | undefined> {
  if (!authInformation) {
    throw new GraphQLError("Anonymous access denied.", {
      extensions: {
        code: 'ANONYMOUS_ACCESS'
      }
    })
  }

    return await userService.getUserById(authInformation.id);
  }
