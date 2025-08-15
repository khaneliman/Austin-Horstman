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
        data: { autoScroll: true },
      },
      {
        path: 'ai-resource-staffing',
        loadComponent: () =>
          import('./ai-resource-staffing/ai-resource-staffing.component').then(
            m => m.AiResourceStaffingComponent
          ),
        data: { autoScroll: true },
      },
      {
        path: 'tax-document-analysis',
        loadComponent: () =>
          import(
            './tax-document-analysis/tax-document-analysis.component'
          ).then(m => m.TaxDocumentAnalysisComponent),
        data: { autoScroll: true },
      },
      {
        path: 'mulesoft-migrator',
        loadComponent: () =>
          import('./mulesoft-migrator/mulesoft-migrator.component').then(
            m => m.MuleSoftMigratorComponent
          ),
        data: { autoScroll: true },
      },
    ],
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
