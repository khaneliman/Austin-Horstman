import { Routes } from '@angular/router';
import { ProfessionalProjectsComponent } from './professional.component';

export const PROFESSIONAL_ROUTES: Routes = [
  { path: '', component: ProfessionalProjectsComponent },
  {
    path: 'nri-na',
    loadChildren: () => import('./nri-na/nri-na.routes').then((m) => m.NRI_NA_ROUTES),
  },
  {
    path: 'corebts',
    loadChildren: () => import('./corebts/corebts.routes').then((m) => m.COREBTS_ROUTES),
  },
  {
    path: 'skyline',
    loadChildren: () => import('./skyline/skyline.routes').then((m) => m.SKYLINE_ROUTES),
  },
  {
    path: 'west',
    loadChildren: () => import('./west/west.routes').then((m) => m.WEST_ROUTES),
  },
  {
    path: 'geeksquad',
    loadChildren: () => import('./geeksquad/geeksquad.routes').then((m) => m.GEEKSQUAD_ROUTES),
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
