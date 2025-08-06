import { Routes } from '@angular/router';
import { RegisterWizard, RegisterWolcome } from './register-components';

export const registerRoutes: Routes = [
  { path: '', component: RegisterWolcome },
  { path: 'wizard', component: RegisterWizard,},
];
