import { Routes } from '@angular/router';
import { CorebtsComponent } from './corebts.component';

export const COREBTS_ROUTES: Routes = [
  { path: '', component: CorebtsComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
