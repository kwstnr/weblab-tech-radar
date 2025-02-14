import { Mutation } from 'apollo-angular';
import { ApolloCache } from '@apollo/client/cache';
import { Injectable } from '@angular/core';

import { DELETE_TECHNOLOGY } from '../documents/delete-technology.graphql';

@Injectable({
  providedIn: 'root',
})
export class DeleteTechnologyMutation extends Mutation<{ deleteTechnology: { successful: boolean } }, { input: { id: string } }> {
  document = DELETE_TECHNOLOGY;

  override mutate(variables: { input: { id: string } }, options?: any) {
    return super.mutate(variables, {
      ...options,
      update: (cache, _) => {
        this.delete(cache, variables.input.id, 'Technology');
      }
    })
  }

  private delete(cache: ApolloCache<any>, id: string, __typename: string) {
    cache.evict({
      id: cache.identify({
        id,
        __typename
      })
    });
    cache.gc();
  }
}
