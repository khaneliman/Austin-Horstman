import { Routes } from '@angular/router';
import { BestbuyComponent } from './bestbuy.component';
import { StatTrackerComponent } from './stat-tracker/stat-tracker.component';

export const BESTBUY_ROUTES: Routes = [
  {
    path: '',
    component: BestbuyComponent,
    children: [
      {
        path: 'stat-tracker',
        component: StatTrackerComponent,
      },
    ],
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
