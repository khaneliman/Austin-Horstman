import { Routes } from '@angular/router';
import { TechnologyComponent } from './technology.component';
import { CsharpComponent } from './csharp/csharp.component';

export const TECHNOLOGY_ROUTES: Routes = [
  {
    path: '',
    component: TechnologyComponent,
    children: [{ path: 'csharp', component: CsharpComponent }],
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
