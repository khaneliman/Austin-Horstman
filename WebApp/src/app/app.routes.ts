import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'personal',
    loadChildren: () =>
      import('./personal/personal.routes').then((m) => m.PERSONAL_ROUTES),
  },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];
