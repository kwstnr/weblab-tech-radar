import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TechRadarComponent } from './tech-radar/tech-radar.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'tech-radar', component: TechRadarComponent },
];
