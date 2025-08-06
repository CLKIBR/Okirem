import { Routes } from '@angular/router';
import { HomePage, ResetPassword } from './home_Components';

export const homeRoutes: Routes = [
  { path: 'homePage', component: HomePage },
  { path: 'reset-password', component: ResetPassword },
];
