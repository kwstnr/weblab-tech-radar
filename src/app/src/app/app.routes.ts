import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TechRadarComponent } from './tech-radar/tech-radar.component';
import { CategoryComponent } from './category/category.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'tech-radar', component: TechRadarComponent },
  { path: 'category/:category', component: CategoryComponent },
];
