import { Query } from 'apollo-angular';
import { Injectable } from '@angular/core';

import { TechnologyCategory } from '../../types/technology-category.enum';
import { TechnologyCircle } from '../../types/technology-circle.enum';
import { TechnologyStatus } from '../../types/technology-status.enum';
import { TECHNOLOGIES_OF_CATEGORY } from '../documents/technologies-of-category.graphql';

export type TechnologiesOfCategoryQueryResult = { id: string, circle: TechnologyCircle, status: TechnologyStatus }

@Injectable({
  providedIn: 'root'
})
export class TechnologiesOfCategoryQuery extends Query<{ technologies: TechnologiesOfCategoryQueryResult[] }, { category: TechnologyCategory }> {
  document = TECHNOLOGIES_OF_CATEGORY;
}
