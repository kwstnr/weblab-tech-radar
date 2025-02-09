import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


import * as echarts from 'echarts/core';
import { NgxEchartsDirective, provideEchartsCore } from 'ngx-echarts';
import { PieChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';
echarts.use([CanvasRenderer, PieChart]);

import { HeaderComponent } from '../shared/header/header.component';
import { LogoutComponent } from '../shared/logout/logout.component';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-tech-radar',
  imports: [HeaderComponent, LogoutComponent, NgxEchartsDirective, CommonModule],
  templateUrl: './tech-radar.component.html',
  styleUrl: './tech-radar.component.scss',
  providers: [provideEchartsCore({ echarts })],
})
export class TechRadarComponent {

  private readonly authService = inject(AuthService);

  private readonly router = inject(Router);

  me$ = this.authService.getMe();

  chartOptions = {
    color: ['#dedede', '#d4d4d4', '#e6e6e6'],
    series: [
      {
        name: 'Tech-Radar',
        type: 'pie',
        radius: '70%',
        data: [
          { value: 20, name: 'Techniques' },
          { value: 20, name: 'Tools' },
          { value: 20, name: 'Platforms' },
          { value: 20, name: 'Languages' },
          { value: 20, name: 'Frameworks' }
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };
}
