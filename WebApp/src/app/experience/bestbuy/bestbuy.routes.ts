import { Routes } from '@angular/router';
import { BestbuyComponent } from './bestbuy.component';

export const BESTBUY_ROUTES: Routes = [
  {
    path: '',
    title: 'Best Buy Experience | Austin Horstman',
    data: { description: 'Austin Horstman’s professional experience at Best Buy.' },
    component: BestbuyComponent,
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
