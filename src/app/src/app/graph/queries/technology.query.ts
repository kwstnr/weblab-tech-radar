import { Query } from 'apollo-angular';
import { Injectable } from '@angular/core';

import { Technology } from '../../types/technology.type';
import { TECHNOLOGY } from '../documents/technology.graph';

@Injectable({
  providedIn: 'root'
})
export class TechnologyQuery extends Query<{ technologyById: Technology }, { id: string }> {
  document = TECHNOLOGY;
}
