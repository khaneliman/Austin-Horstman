import { Routes } from '@angular/router';
import { SkylineComponent } from './skyline.component';

export const SKYLINE_ROUTES: Routes = [
  { path: '', component: SkylineComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
