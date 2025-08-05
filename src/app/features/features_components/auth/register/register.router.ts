import { Routes } from '@angular/router';

export const registerRoutes: Routes = [
  {
    path: 'wolcome',
    loadComponent: () => import('./').then((m) => m.RegisterWolcome),
  },
  {
    path: 'wizard',
    loadComponent: () => import('./').then((m) => m.RegisterWizard),
  },
];
