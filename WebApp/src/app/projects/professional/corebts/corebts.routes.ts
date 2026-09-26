import { Routes } from '@angular/router';
import { DoItBestComponent } from './doitbest/doitbest.component';
import { KrogerComponent } from './kroger/kroger.component';

export const COREBTS_ROUTES: Routes = [
  {
    path: 'kroger',
    component: KrogerComponent,
    data: { autoScroll: true },
  },
  {
    path: 'doitbest',
    component: DoItBestComponent,
    data: { autoScroll: true },
  },
  { path: '**', redirectTo: '/experience/corebts' },
];
