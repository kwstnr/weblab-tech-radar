import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BehaviorSubject, Observable } from 'rxjs';
import { filter, switchMap, first } from 'rxjs/operators';

import { Technology } from '../types/technology.type';
import { TechnologiesService } from '../services/technologies/technologies.service';

@Component({
  selector: 'app-technology',
  imports: [CommonModule],
  templateUrl: './technology.component.html',
  styleUrl: './technology.component.scss'
})
export class TechnologyComponent {
  private readonly technologiesService = inject(TechnologiesService);

  private readonly technologyIdSubject = new BehaviorSubject<string | undefined>(undefined);
  private readonly technologyId$: Observable<string> = this.technologyIdSubject.pipe(filter(id => !!id)) as Observable<string>;

  @Input() set technologyId(value: any) {
    if (typeof(value) === 'string') {
      this.technologyIdSubject.next(value);
    }
  }

  technology$: Observable<Technology> = this.technologyId$.pipe(switchMap((id) => this.technologiesService.getTechnology(id)));

  deleteTechnology(id: string): void {
    this.technologiesService.deleteTechnology(id).pipe(first()).subscribe();
  }
}
