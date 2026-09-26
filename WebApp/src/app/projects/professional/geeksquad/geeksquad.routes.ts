import { Routes } from '@angular/router';
import { StatTrackerComponent } from './stat-tracker/stat-tracker.component';

export const GEEKSQUAD_ROUTES: Routes = [
  {
    path: 'stat-tracker',
    component: StatTrackerComponent,
  },
  { path: '**', redirectTo: '/experience/bestbuy' },
];
