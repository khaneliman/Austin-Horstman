import { Routes } from '@angular/router';
import { ProjectsComponent } from './projects.component';

export const PROJECTS_ROUTES: Routes = [
  { path: '', component: ProjectsComponent },
  {
    path: 'professional',
    loadChildren: () =>
      import('../personal/resume/projects/projects.routes').then(
        m => m.PROJECTS_ROUTES
      ),
  },
  {
    path: 'personal',
    loadChildren: () =>
      import('../personal/resume/projects/personal/personal.routes').then(
        m => m.PERSONAL_PROJECTS_ROUTES
      ),
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
