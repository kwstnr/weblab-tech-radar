import { Mutation } from 'apollo-angular';
import { Injectable } from '@angular/core';

import { EDIT_TECHNOLOGY } from '../documents/edit-technology.graphql';
import { Technology } from '../../types/technology.type';

export type EditTechnologyInput = Omit<Technology, 'created' | 'published' | 'changed'>;

@Injectable({
  providedIn: 'root',
})
export class EditTechnologyMutation extends Mutation<{ editTechnology: Technology }, { input: EditTechnologyInput }> {
  document = EDIT_TECHNOLOGY;
}
