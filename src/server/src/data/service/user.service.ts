import jwt from 'jsonwebtoken';
import { hashSync } from 'bcrypt-ts';

import { DbContext } from '../db';
import { User, AuthInformation } from '../model';

export class UserService {
  constructor(private context: DbContext, private jwtSecret: string) {}

  async getUserById(id: string): Promise<User | undefined> {
    const user = await this.context.users()?.findOne({ _id: id });
    return user ?? undefined;
  }

  async isValidUserLogin(email: string, password: string): Promise<{ successful: boolean, jwtToken?: string }> {
    var matchingUser = await this.context.users()?.findOne({ email });

    if (!matchingUser) {
      return { successful: false };
    }
    
    const matchingPassword = matchingUser.password == hashSync(password, matchingUser.salt);

    if (matchingPassword) {
      
      var jwtToken = jwt.sign({ id: matchingUser.id }, this.jwtSecret, { expiresIn: "1h" });
      return { successful: true, jwtToken };
    }

    return { successful: false };
  }

  async getAuthInformationByJwtToken(jwtToken: string): Promise<AuthInformation | undefined> {
    let decoded;
    try {
      decoded = jwt.verify(jwtToken, this.jwtSecret);
    } catch (error) {
      console.error("Invalid Token received.");
      return undefined;
    }

    var userId = (decoded as any).id;
    var user = await this.getUserById(userId);

    return user && { id: user!.id, role: user!.role };
  }
}
