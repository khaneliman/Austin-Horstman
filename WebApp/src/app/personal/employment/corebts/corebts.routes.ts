import { Routes } from '@angular/router';
import { DoItBestComponent } from './doitbest/doitbest.component';
import { KrogerComponent } from './kroger/kroger.component';
import { CorebtsComponent } from './corebts.component';

export const COREBTS_ROUTES: Routes = [
  {
    path: '',
    component: CorebtsComponent,
    children: [
      { path: 'doitbest', component: DoItBestComponent },
      { path: 'kroger', component: KrogerComponent },
    ],
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
