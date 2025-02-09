import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { TechnologiesQuery, TechnologiesQueryResult } from '../../graph/queries/technologies.query';
import { TechnologiesOfCategoryQuery, TechnologiesOfCategoryQueryResult } from '../../graph/queries/technologies-of-category.query';
import { TechnologyCategory } from '../../types/technology-category.enum';

@Injectable({
  providedIn: 'root'
})
export class TechnologiesService {

  private readonly technologiesQuery = inject(TechnologiesQuery);
  private readonly technologiesOfCategoryQuery = inject(TechnologiesOfCategoryQuery);

  getTechnologies(): Observable<TechnologiesQueryResult[]> {
    return this.technologiesQuery.watch().valueChanges.pipe(
      map(({data}) => data.technologies)
    );
  }

  getTechnologiesOfCategory(category: TechnologyCategory): Observable<TechnologiesOfCategoryQueryResult[]> {
    return this.technologiesOfCategoryQuery.watch().valueChanges.pipe(
      map(({ data }) => data.technologies)
    );
  }
}
