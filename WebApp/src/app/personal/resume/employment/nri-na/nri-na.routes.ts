import { Routes } from '@angular/router';
import { NriNaComponent } from './nri-na.component';

export const NRI_NA_ROUTES: Routes = [
  {
    path: '',
    component: NriNaComponent,
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
