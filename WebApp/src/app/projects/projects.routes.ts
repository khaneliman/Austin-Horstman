import { Routes } from '@angular/router';
import { ProjectsComponent } from './projects.component';

export const PROJECTS_ROUTES: Routes = [
  {
    path: '',
    component: ProjectsComponent,
    children: [
      {
        path: 'personal',
        loadChildren: () =>
          import('./personal/personal.routes').then((m) => m.PERSONAL_ROUTES),
      },
    ],
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
