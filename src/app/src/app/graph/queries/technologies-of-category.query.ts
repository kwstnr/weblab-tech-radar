import { Query } from 'apollo-angular';
import { Injectable } from '@angular/core';

import { Technology } from '../../types/technology.type';
import { TechnologyCategory } from '../../types/technology-category.enum';
import { TECHNOLOGIES_OF_CATEGORY } from '../documents/technologies-of-category.graphql';

export type TechnologiesOfCategoryQueryResult = Omit<Technology, 'description' | 'circleDescription' | 'category' | 'created' | 'published' | 'changed'>;

@Injectable({
  providedIn: 'root'
})
export class TechnologiesOfCategoryQuery extends Query<{ technologies: TechnologiesOfCategoryQueryResult[] }, { category: TechnologyCategory }> {
  document = TECHNOLOGIES_OF_CATEGORY;
}
