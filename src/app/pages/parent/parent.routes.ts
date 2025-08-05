import { Routes } from '@angular/router';
import { ParentDashboard } from './parent_components';

export const parentRoutes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: ParentDashboard },
];
