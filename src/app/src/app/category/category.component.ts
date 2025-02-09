import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from '../shared/header/header.component';
import { LogoutComponent } from '../shared/logout/logout.component';
import { TechnologiesService } from '../services/technologies/technologies.service';

@Component({
  selector: 'app-category',
  imports: [
    HeaderComponent,
    LogoutComponent,
    CommonModule,
  ],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent {
    private readonly technologyService = inject(TechnologiesService);

    @Input() category?: string;
}
