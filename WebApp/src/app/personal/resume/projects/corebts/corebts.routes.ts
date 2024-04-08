import { Routes } from '@angular/router';
import { CorebtsComponent } from './corebts.component';
import { KrogerComponent } from './kroger/kroger.component';
import { DoItBestComponent } from './doitbest/doitbest.component';

export const COREBTS_ROUTES: Routes = [
  {
    path: '',
    component: CorebtsComponent,
    children: [
      { path: 'kroger', component: KrogerComponent },
      { path: 'doitbest', component: DoItBestComponent },
    ],
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
