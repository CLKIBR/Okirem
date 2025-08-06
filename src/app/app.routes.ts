import { Routes } from '@angular/router';
import {
  Admin,
  adminRoutes,
  Parent,
  parentRoutes,
  Student,
  studentRoutes,
  Teacher,
  teacherRoutes,
} from './pages';
import { Login, loginRoutes, Register, registerRoutes } from './features';
import { LoginGuard } from './core';
import { Home, homeRoutes } from './features/features_components/home';

export const routes: Routes = [
  { path: '', redirectTo: 'homePage', pathMatch: 'full' },

  // Home
  { 
    path: '', 
    component: Home, 
    children: homeRoutes 
  },

  // Admin
  {
    path: 'admin',
    component: Admin,
    children: adminRoutes,
    canActivate: [LoginGuard],
  },

  //Student
  {
    path: 'student',
    component: Student,
    children: studentRoutes,
    canActivate: [LoginGuard],
  },

  //Teacher
  {
    path: 'teacher',
    component: Teacher,
    children: teacherRoutes,
    canActivate: [LoginGuard],
  },

  //Parent
  {
    path: 'parent',
    component: Parent,
    children: parentRoutes,
    canActivate: [LoginGuard],
  },

  //Login
  {
    path: 'login',
    component: Login,
    children: loginRoutes,
  },

  //Register
  { path: 'register', component: Register, children: registerRoutes },
];
