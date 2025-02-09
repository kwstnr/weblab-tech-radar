import { Component, OnInit, inject } from '@angular/core';

import { first } from 'rxjs/operators';

import { HeaderComponent } from '../shared/header/header.component';
import { LogoutComponent } from '../shared/logout/logout.component';
import { TechnologiesService } from '../services/technologies/technologies.service';

@Component({
  selector: 'app-tech-radar',
  imports: [HeaderComponent, LogoutComponent],
  templateUrl: './tech-radar.component.html',
  styleUrl: './tech-radar.component.scss'
})
export class TechRadarComponent implements OnInit {

  private readonly technologiesService = inject(TechnologiesService);

  technologies$ = this.technologiesService.getTechnologies();

  ngOnInit(): void {
    this.technologies$.pipe(first()).subscribe(console.log)
  }
}
