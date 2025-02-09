import { Injectable, inject } from '@angular/core';

import { Observable } from 'rxjs';
import { first, tap, map } from 'rxjs/operators';

import { LoginMutation } from '../../graph/mutations/login.mutation';
import { MeQuery } from '../../graph/queries/me.query';
import { User } from '../../types/user.type';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly loginMutation = inject(LoginMutation);
  private readonly meQuery = inject(MeQuery);

  login(email: string, password: string): Observable<boolean> {
    return this.loginMutation
      .mutate({
        input: { email, password },
      })
      .pipe(
        first(),
        tap(({ data }) => {
          if (data?.login?.successful) {
            localStorage.setItem('jwtToken', data.login.jwtToken);
          }
        }),
        map(({ data }) => !!data && !!data.login?.successful),
      );
  }

  logout(): void {
    localStorage.removeItem('jwtToken');
  }

  getMe(): Observable<User> {
    return this.meQuery.watch().valueChanges.pipe(map(({ data }) => data.me));
  }
}
