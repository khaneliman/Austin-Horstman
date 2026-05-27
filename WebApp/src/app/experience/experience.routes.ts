import { Routes } from '@angular/router';

export const EXPERIENCE_ROUTES: Routes = [
  {
    path: 'bestbuy',
    loadChildren: () => import('../personal/resume/employment/bestbuy/bestbuy.routes').then((m) => m.BESTBUY_ROUTES),
  },
  {
    path: 'corebts',
    loadChildren: () => import('../personal/resume/employment/corebts/corebts.routes').then((m) => m.COREBTS_ROUTES),
  },
  {
    path: 'nri-na',
    loadChildren: () => import('../personal/resume/employment/nri-na/nri-na.routes').then((m) => m.NRI_NA_ROUTES),
  },
  {
    path: 'skyline',
    loadChildren: () => import('../personal/resume/employment/skyline/skyline.routes').then((m) => m.SKYLINE_ROUTES),
  },
  {
    path: 'west',
    loadChildren: () => import('../personal/resume/employment/west/west.routes').then((m) => m.WEST_ROUTES),
  },
  { path: '**', redirectTo: 'nri-na', pathMatch: 'full' },
];
