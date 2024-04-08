import { Routes } from '@angular/router';
import { ResumeComponent } from './resume.component';

export const RESUME_ROUTES: Routes = [
  { path: '', component: ResumeComponent },
  {
    path: 'employment',
    loadChildren: () =>
      import('./employment/employment.routes').then((m) => m.EMPLOYMENT_ROUTES),
  },
  {
    path: 'education',
    loadChildren: () =>
      import('./education/education.routes').then((m) => m.EDUCATION_ROUTES),
  },
  {
    path: 'projects',
    loadChildren: () =>
      import('./projects/projects.routes').then((m) => m.PROJECTS_ROUTES),
  },
  {
    path: 'technology',
    loadChildren: () =>
      import('./technology/technology.routes').then((m) => m.TECHNOLOGY_ROUTES),
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
