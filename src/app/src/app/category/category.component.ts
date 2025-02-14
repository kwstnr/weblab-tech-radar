import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Observable, BehaviorSubject } from 'rxjs';
import { filter, switchMap, map } from 'rxjs/operators';

import { HeaderComponent } from '../shared/header/header.component';
import { LogoutComponent } from '../shared/logout/logout.component';
import { TechnologyComponent } from '../technology/technology.component';
import { TechnologiesService } from '../services/technologies/technologies.service';
import { AuthService } from '../services/auth/auth.service';
import { TechnologiesOfCategoryQueryResult } from '../graph/queries/technologies-of-category.query';

import { Role } from '../types/role.enum';
import { TechnologyCategory } from '../types/technology-category.enum';
import { TechnologyCircle } from '../types/technology-circle.enum';
import { TechnologyStatus } from '../types/technology-status.enum';

@Component({
  selector: 'app-category',
  imports: [
    HeaderComponent,
    LogoutComponent,
    TechnologyComponent,
    CommonModule,
  ],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent {
    private readonly technologiesService = inject(TechnologiesService);
    private readonly authService = inject(AuthService);

    private readonly _categorySubject = new BehaviorSubject<string | undefined>(undefined)

    category$: Observable<string> = this._categorySubject.pipe(filter((category) => !!category)) as Observable<string>;

    @Input()
    set category(value: any) {
      this._categorySubject.next(value);
    }

    isAdmin$ = this.authService.getMe().pipe(map(user => user.role === Role.ADMIN));

    technologies$?: Observable<{[circle: string]: TechnologiesOfCategoryQueryResult[], drafted: TechnologiesOfCategoryQueryResult[] }> = this.category$.pipe(
      switchMap((category) => this.technologiesService.getTechnologiesOfCategory(this.castToTechnologyCategory(category))),
      map((technologies) => technologies.reduce((acc, technology: TechnologiesOfCategoryQueryResult) => ({
        ...acc,
        ...(technology.circle ? { [technology.circle]: [...acc[technology.circle], technology] } : {}),
        drafted: [...acc.drafted, ...(technology.status === TechnologyStatus.DRAFTED ? [technology] : [])],
      }), {
        [TechnologyCircle.ASSESS]: [],
        [TechnologyCircle.TRIAL]: [],
        [TechnologyCircle.ADOPT]: [],
        [TechnologyCircle.HOLD]: [],
        drafted: [],
      } as { [circle: string]: TechnologiesOfCategoryQueryResult[], drafted: TechnologiesOfCategoryQueryResult[] }))
    );

    private castToTechnologyCategory(value: string): TechnologyCategory {
      return value.toUpperCase() as TechnologyCategory;
    }
}
