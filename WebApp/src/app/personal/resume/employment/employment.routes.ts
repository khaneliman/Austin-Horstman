import { Routes } from '@angular/router';

export const EMPLOYMENT_ROUTES: Routes = [
  {
    path: 'bestbuy',
    redirectTo: '/experience/bestbuy',
    pathMatch: 'full',
  },
  {
    path: 'corebts',
    redirectTo: '/experience/corebts',
    pathMatch: 'full',
  },
  {
    path: 'skyline',
    redirectTo: '/experience/skyline',
    pathMatch: 'full',
  },
  {
    path: 'nri-na',
    redirectTo: '/experience/nri-na',
    pathMatch: 'full',
  },
  {
    path: 'west',
    redirectTo: '/experience/west',
    pathMatch: 'full',
  },
  { path: '**', redirectTo: '/personal/resume', pathMatch: 'full' },
];
