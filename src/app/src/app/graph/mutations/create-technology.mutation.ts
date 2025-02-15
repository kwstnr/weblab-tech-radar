import { Mutation } from 'apollo-angular';
import { Injectable } from '@angular/core';

import { CREATE_TECHNOLOGY } from '../documents/create-technology.graphql';
import { Technology } from '../../types/technology.type';

export type CreateTechnologyInput = Omit<Technology, 'id' | 'created' | 'published' | 'changed'>;

@Injectable({
  providedIn: 'root',
})
export class CreateTechnologyMutation extends Mutation<{ createTechnology: Technology }, { input: CreateTechnologyInput }> {
  document = CREATE_TECHNOLOGY;
}
