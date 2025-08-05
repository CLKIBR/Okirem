import { Routes } from '@angular/router';
import { AdminDashboard } from './admin_components';

export const adminRoutes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: AdminDashboard },
];
