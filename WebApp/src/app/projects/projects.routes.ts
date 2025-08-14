import { Routes } from '@angular/router';
import { ProjectsComponent } from './projects.component';

export const PROJECTS_ROUTES: Routes = [
  { path: '', component: ProjectsComponent },
  {
    path: 'professional',
    loadChildren: () =>
      import('./professional/professional.routes').then(
        m => m.PROFESSIONAL_ROUTES
      ),
  },
  {
    path: 'personal',
    loadChildren: () =>
      import('./personal/personal.routes').then(
        m => m.PERSONAL_PROJECTS_ROUTES
      ),
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
