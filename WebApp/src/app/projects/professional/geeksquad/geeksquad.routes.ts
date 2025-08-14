import { Routes } from '@angular/router';
import { GeeksquadComponent } from './geeksquad.component';
import { StatTrackerComponent } from './stat-tracker/stat-tracker.component';

export const GEEKSQUAD_ROUTES: Routes = [
  {
    path: '',
    component: GeeksquadComponent,
    children: [{ path: 'stat-tracker', component: StatTrackerComponent }],
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
