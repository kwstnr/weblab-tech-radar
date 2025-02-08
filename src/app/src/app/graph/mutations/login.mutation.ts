import { Mutation } from 'apollo-angular';
import { Injectable } from '@angular/core';

import { LoginInput } from '../../types/login-input.type';
import { LoginOutput } from '../../types/login-output.type';
import { LOGIN } from '../documents/login.graphql';

@Injectable({
  providedIn: 'root',
})
export class LoginMutation extends Mutation<{ login: LoginOutput }, { input: LoginInput }> {
  document = LOGIN;
}
