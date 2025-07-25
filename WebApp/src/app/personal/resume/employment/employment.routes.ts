import { Routes } from '@angular/router';
import { EmploymentComponent } from './employment.component';

export const EMPLOYMENT_ROUTES: Routes = [
  {
    path: '',
    component: EmploymentComponent,
    children: [
      {
        path: 'bestbuy',
        loadChildren: () =>
          import('./bestbuy/bestbuy.routes').then(m => m.BESTBUY_ROUTES),
      },
      {
        path: 'corebts',
        loadChildren: () =>
          import('./corebts/corebts.routes').then(m => m.COREBTS_ROUTES),
      },
      {
        path: 'skyline',
        loadChildren: () =>
          import('./skyline/skyline.routes').then(m => m.SKYLINE_ROUTES),
      },
      {
        path: 'west',
        loadChildren: () =>
          import('./west/west.routes').then(m => m.WEST_ROUTES),
      },
    ],
  },

  { path: '**', redirectTo: '', pathMatch: 'full' },
];
