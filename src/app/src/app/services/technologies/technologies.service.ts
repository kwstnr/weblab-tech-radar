import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { TechnologiesQuery, TechnologiesQueryResult } from '../../graph/queries/technologies.query';
import { TechnologiesOfCategoryQuery, TechnologiesOfCategoryQueryResult } from '../../graph/queries/technologies-of-category.query';
import { TechnologyQuery } from '../../graph/queries/technology.query';
import { TechnologyCategory } from '../../types/technology-category.enum';
import { Technology } from '../../types/technology.type';

@Injectable({
  providedIn: 'root'
})
export class TechnologiesService {

  private readonly technologiesQuery = inject(TechnologiesQuery);
  private readonly technologiesOfCategoryQuery = inject(TechnologiesOfCategoryQuery);
  private readonly technologyQuery = inject(TechnologyQuery);

  getTechnologies(): Observable<TechnologiesQueryResult[]> {
    return this.technologiesQuery.watch().valueChanges.pipe(
      map(({data}) => data.technologies)
    );
  }

  getTechnologiesOfCategory(category: TechnologyCategory): Observable<TechnologiesOfCategoryQueryResult[]> {
    return this.technologiesOfCategoryQuery.watch({ category }).valueChanges.pipe(
      map(({ data }) => data.technologies)
    );
  }

  getTechnology(id: string): Observable<Technology> {
    return this.technologyQuery.watch({id}).valueChanges.pipe(
      map(({ data }) => data.technologyById)
    );
  }
}
