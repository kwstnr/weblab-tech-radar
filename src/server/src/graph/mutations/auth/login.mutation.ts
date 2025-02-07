import { LoginInput } from '../inputs/login.input';
import { UserService } from '../../../data/service';
import { LoginOutput } from '../outputs/login.output';

export async function login(_: any, { input }: { input: LoginInput }, { userService }: { userService: UserService }): Promise<LoginOutput> {
  const { successful, jwtToken, userId} = await userService.isValidUserLogin(input.email, input.password);
  if (successful) {
    await userService.logLogin(userId!);
  }

  return { successful, jwtToken };
}

