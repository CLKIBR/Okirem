import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'panel', pathMatch: 'full' },
  { path: 'login', loadComponent: () => import('./features/auth/login/login').then(m => m.LoginComponent) },
  { path: 'register', loadComponent: () => import('./features/auth/register/register').then(m => m.RegisterComponent) },
  { path: 'reset-password', loadComponent: () => import('./features/auth/reset-password/reset-password').then(m => m.ResetPasswordComponent) },
  { path: 'profile', loadComponent: () => import('./features/user/profile/profile').then(m => m.ProfileComponent) },
  { path: 'role-management', loadComponent: () => import('./features/user/role-management/role-management').then(m => m.RoleManagementComponent) },
  { path: 'lessons', loadComponent: () => import('./features/lesson/lesson-list/lesson-list').then(m => m.LessonListComponent) },
  { path: 'lesson/:id', loadComponent: () => import('./features/lesson/lesson-detail/lesson-detail').then(m => m.LessonDetailComponent) },
  { path: 'tasks', loadComponent: () => import('./features/task/task-list/task-list').then(m => m.TaskListComponent) },
  { path: 'task/:id', loadComponent: () => import('./features/task/task-play/task-play').then(m => m.TaskPlayComponent) },
  { path: 'rewards', loadComponent: () => import('./features/reward/reward-store/reward-store').then(m => m.RewardStoreComponent) },
  { path: 'reward-history', loadComponent: () => import('./features/reward/reward-history/reward-history').then(m => m.RewardHistoryComponent) },
  { path: 'panel', loadComponent: () => import('./features/panel/student-panel/student-panel').then(m => m.StudentPanelComponent) },
  { path: 'teacher-panel', loadComponent: () => import('./features/panel/teacher-panel/teacher-panel').then(m => m.TeacherPanelComponent) },
  { path: 'parent-panel', loadComponent: () => import('./features/panel/parent-panel/parent-panel').then(m => m.ParentPanelComponent) },
  { path: 'leaderboard', loadComponent: () => import('./features/leaderboard/leaderboard-list/leaderboard-list').then(m => m.LeaderboardListComponent) },
  { path: '**', redirectTo: 'panel' }
];
