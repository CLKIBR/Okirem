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
import { Home, Login, Register, registerRoutes } from './features';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },

  // Admin
  {
    path: 'admin',
    component: Admin,
    children: adminRoutes,
    //canActivate: [authGuard],
  },

  //Student
  {
    path: 'student',
    component: Student,
    children: studentRoutes,
    //canActivate: [authGuard],
  },

  //Teacher
  {
    path: 'teacher',
    component: Teacher,
    children: teacherRoutes,
    //canActivate: [authGuard],
  },

  //Parent
  {
    path: 'parent',
    component: Parent,
    children: parentRoutes,
    //canActivate: [authGuard],
  },
  
  {
    path: 'login',
    component: Login,
  },
  { path: 'register', 
    component: Register, 
    children: registerRoutes 
  },
];
