import { Routes } from '@angular/router';
import { DoItBestComponent } from './doitbest/doitbest.component';
import { KrogerComponent } from './kroger/kroger.component';

export const COREBTS_ROUTES: Routes = [
  {
    path: 'kroger',
    component: KrogerComponent,
  },
  {
    path: 'doitbest',
    component: DoItBestComponent,
  },
  { path: '**', redirectTo: '/experience/corebts' },
];
