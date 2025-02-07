import { UserService } from '../../../data/service';
import { User, Role, AuthInformation } from '../../../data/model';

export async function me(_: any,
  __: any,
  { userService, authInformation }: {
    userService: UserService,
    authInformation: AuthInformation
  }): Promise<User | undefined> {
    if (!authInformation) {
      return undefined;
    }

    return await userService.getUserById(authInformation.id);
  }
