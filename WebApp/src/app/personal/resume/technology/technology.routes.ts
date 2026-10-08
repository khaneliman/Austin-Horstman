import { Routes } from '@angular/router';
import { CsharpComponent } from './csharp/csharp.component';
import { TechnologyComponent } from './technology.component';

export const TECHNOLOGY_ROUTES: Routes = [
  {
    path: '',
    title: 'Technology | Austin Horstman',
    data: { description: 'Technologies used by Austin Horstman.' },
    component: TechnologyComponent,
    children: [
      {
        path: 'csharp',
        title: 'C# | Austin Horstman',
        data: { description: 'Austin Horstman’s C# development experience.' },
        component: CsharpComponent,
      },
    ],
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
