import { ApplicationConfig, provideZoneChangeDetection, inject } from '@angular/core';
import { provideRouter, Router, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideApollo } from 'apollo-angular';
import { ApolloLink } from '@apollo/client/link/core';
import { HttpLink } from 'apollo-angular/http';
import { onError } from '@apollo/client/link/error';
import { setContext } from '@apollo/client/link/context';
import { InMemoryCache } from '@apollo/client/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes, withComponentInputBinding()), provideHttpClient(), provideApollo(() => {
      const httpLink = inject(HttpLink);
      const router = inject(Router);

      const errorLink = onError(({ graphQLErrors }) => {
        if (graphQLErrors?.find(err => err.extensions?.['code'] === 'ANONYMOUS_ACCESS')) {
          router.navigate(['/']);
        }
      });
      const graphqlLink = httpLink.create({
          uri: 'http://localhost:4000/graphql',
      });
      const auth = setContext((operation, context) => {
        const token = localStorage.getItem('jwtToken');

        if (token === null) {
          return {}
        } else {
          return {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          };
        }
      })

      const link = ApolloLink.from([
        errorLink,
        auth,
        graphqlLink,
      ]);

      return {
        link,
        cache: new InMemoryCache({
          typePolicies: {
            User: {
              fields: {
                name: {
                  merge: () => undefined,
                },
                email: {
                  merge: () => undefined,
                },
                role: {
                  merge: () => undefined,
                },
              }
            }
          }
        }),
      };
    }), provideAnimationsAsync()]
};
