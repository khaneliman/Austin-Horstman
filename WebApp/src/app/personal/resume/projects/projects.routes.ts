import { Routes } from '@angular/router';
import { ProjectsComponent } from './projects.component';

export const PROJECTS_ROUTES: Routes = [
  {
    path: '',
    component: ProjectsComponent,
    children: [
      {
        path: 'west',
        loadChildren: () =>
          import('./west/west.routes').then(m => m.WEST_ROUTES),
      },
      {
        path: 'skyline',
        loadChildren: () =>
          import('./skyline/skyline.routes').then(m => m.SKYLINE_ROUTES),
      },
      {
        path: 'personal',
        loadChildren: () =>
          import('./personal/personal.routes').then(
            m => m.PERSONAL_PROJECTS_ROUTES
          ),
      },
      {
        path: 'geeksquad',
        loadChildren: () =>
          import('./geeksquad/geeksquad.routes').then(m => m.GEEKSQUAD_ROUTES),
      },
      {
        path: 'nri-na',
        loadChildren: () =>
          import('./nri-na/nri-na.routes').then(m => m.NRI_NA_ROUTES),
      },
      {
        path: 'corebts',
        loadChildren: () =>
          import('./corebts/corebts.routes').then(m => m.COREBTS_ROUTES),
      },
    ],
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
