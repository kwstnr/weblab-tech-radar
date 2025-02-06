import jwt from 'jsonwebtoken';

import { LoginInput } from '../inputs/login.input';
import { UserService } from '../../../data/service';
import { LoginOutput } from '../outputs/login.output';

export async function login(_: any, { input }: { input: LoginInput }, { userService }: { userService: UserService }): Promise<LoginOutput> {
  const {success, userId } = await userService.isValidUserLogin(input.email, input.password);

  if (!success) {
    return {
      successful: false
    };
  }

  var token = jwt.sign({ id: userId }, "test", { expiresIn: "1h" });
  
  return {
    successful: true,
    jwtToken: token
  };
}

