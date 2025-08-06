import { Routes } from '@angular/router';
import { ForgotPassword, LoginWelcome } from './login-components';

export const loginRoutes: Routes = [
  { path: '', component: LoginWelcome },
  { path: 'forgot-password', component: ForgotPassword},
];
