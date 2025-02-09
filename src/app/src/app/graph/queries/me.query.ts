import { Query } from 'apollo-angular';
import { Injectable } from '@angular/core';

import { User } from '../../types/user.type';
import { ME } from '../documents/me.graphql';

@Injectable({
  providedIn: 'root'
})
export class MeQuery extends Query<{ me: User }> {
  document = ME;
}
