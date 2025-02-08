import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { first, tap, map } from 'rxjs/operators';

import { LoginMutation } from '../../graph/mutations/login.mutation';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private readonly loginMutation: LoginMutation) { }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('jwtToken');
  }

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
}
