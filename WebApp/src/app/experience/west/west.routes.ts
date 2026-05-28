import { Routes } from '@angular/router';
import { WestComponent } from './west.component';

export const WEST_ROUTES: Routes = [
  { path: '', component: WestComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
