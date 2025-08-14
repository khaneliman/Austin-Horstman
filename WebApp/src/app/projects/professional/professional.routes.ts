import { Routes } from '@angular/router';
import { ProfessionalProjectsComponent } from './professional.component';

export const PROFESSIONAL_ROUTES: Routes = [
  { path: '', component: ProfessionalProjectsComponent },
  {
    path: 'corebts',
    loadChildren: () =>
      import('../../personal/resume/projects/corebts/corebts.routes').then(
        m => m.COREBTS_ROUTES
      ),
  },
  {
    path: 'skyline',
    loadChildren: () =>
      import('../../personal/resume/projects/skyline/skyline.routes').then(
        m => m.SKYLINE_ROUTES
      ),
  },
  {
    path: 'west',
    loadChildren: () =>
      import('../../personal/resume/projects/west/west.routes').then(
        m => m.WEST_ROUTES
      ),
  },
  {
    path: 'geeksquad',
    loadChildren: () =>
      import('../../personal/resume/projects/geeksquad/geeksquad.routes').then(
        m => m.GEEKSQUAD_ROUTES
      ),
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
