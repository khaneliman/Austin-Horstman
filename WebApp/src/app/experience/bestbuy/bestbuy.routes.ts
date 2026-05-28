import { Routes } from '@angular/router';
import { BestbuyComponent } from './bestbuy.component';

export const BESTBUY_ROUTES: Routes = [
  { path: '', component: BestbuyComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
