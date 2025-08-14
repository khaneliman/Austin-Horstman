import { Routes } from '@angular/router';
import { NriNaComponent } from './nri-na.component';

export const NRI_NA_ROUTES: Routes = [
  {
    path: '',
    component: NriNaComponent,
  },
  {
    path: 'kroger',
    loadComponent: () =>
      import('../corebts/kroger/kroger.component').then(m => m.KrogerComponent),
  },
  {
    path: 'doitbest',
    loadComponent: () =>
      import('../corebts/doitbest/doitbest.component').then(
        m => m.DoItBestComponent
      ),
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
