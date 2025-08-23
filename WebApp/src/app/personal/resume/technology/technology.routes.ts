import { Routes } from '@angular/router';
import { CsharpComponent } from './csharp/csharp.component';
import { TechnologyComponent } from './technology.component';

export const TECHNOLOGY_ROUTES: Routes = [
  {
    path: '',
    component: TechnologyComponent,
    children: [{ path: 'csharp', component: CsharpComponent }],
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
