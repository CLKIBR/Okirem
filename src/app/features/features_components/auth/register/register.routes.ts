import { Routes } from '@angular/router';
import { RegisterWizard, RegisterWelcome } from './register-components';

export const registerRoutes: Routes = [
  { path: 'welcome', component: RegisterWelcome },
  { path: 'wizard', component: RegisterWizard,},
];
