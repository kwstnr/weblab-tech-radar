import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { TechnologiesQuery, TechnologiesQueryResult } from '../../graph/queries/technologies.query';

@Injectable({
  providedIn: 'root'
})
export class TechnologiesService {

  constructor(private readonly technologiesQuery: TechnologiesQuery) { }

  getTechnologies(): Observable<TechnologiesQueryResult[]> {
    return this.technologiesQuery.watch().valueChanges.pipe(
      map(({data}) => data.technologies)
    );
  }
}
