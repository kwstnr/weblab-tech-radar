import { Query } from 'apollo-angular';
import { Injectable } from '@angular/core';

import { Technology } from '../../types/technology.type';
import { TECHNOLOGIES } from '../documents/technologies.graphql';

export type TechnologiesQueryResult = Omit<Technology, 'description' | 'circleDescription' | 'created' | 'published' | 'changed'>;

@Injectable({
  providedIn: 'root'
})
export class TechnologiesQuery extends Query<{ technologies: TechnologiesQueryResult[] }> {
  document = TECHNOLOGIES;
}
