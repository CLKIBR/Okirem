import { Routes } from "@angular/router";
import { TeacherDashboard } from "./teacher_components";

export const teacherRoutes: Routes = [
     { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: TeacherDashboard },
];