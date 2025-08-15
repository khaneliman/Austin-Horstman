import { Routes } from '@angular/router';
import { NriNaComponent } from './nri-na.component';

export const NRI_NA_ROUTES: Routes = [
  {
    path: '',
    component: NriNaComponent,
    children: [
      {
        path: 'doitbest',
        loadComponent: () =>
          import('./doitbest/doitbest.component').then(
            m => m.NriNaDoItBestComponent
          ),
      },
      {
        path: 'ai-resource-staffing',
        loadComponent: () =>
          import('./ai-resource-staffing/ai-resource-staffing.component').then(
            m => m.AiResourceStaffingComponent
          ),
      },
    ],
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
