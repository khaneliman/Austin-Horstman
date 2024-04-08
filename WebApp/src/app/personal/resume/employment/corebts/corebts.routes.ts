import { Routes } from '@angular/router';
import { CorebtsComponent } from '../../projects/corebts/corebts.component';

export const COREBTS_ROUTES: Routes = [
  { path: '', component: CorebtsComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
