import { Routes } from '@angular/router';

export const NRI_NA_ROUTES: Routes = [
  {
    path: 'doitbest',
    loadComponent: () => import('./doitbest/doitbest.component').then((m) => m.NriNaDoItBestComponent),
  },
  {
    path: 'ai-resource-staffing',
    loadComponent: () =>
      import('./ai-resource-staffing/ai-resource-staffing.component').then((m) => m.AiResourceStaffingComponent),
  },
  {
    path: 'tax-document-analysis',
    loadComponent: () =>
      import('./tax-document-analysis/tax-document-analysis.component').then((m) => m.TaxDocumentAnalysisComponent),
  },
  {
    path: 'mulesoft-migrator',
    loadComponent: () =>
      import('./mulesoft-migrator/mulesoft-migrator.component').then((m) => m.MuleSoftMigratorComponent),
  },
  {
    path: 'farmlink-modernization',
    loadComponent: () =>
      import('./farmlink-modernization/farmlink-modernization.component').then((m) => m.FarmLinkModernizationComponent),
  },
  {
    path: 'underwriting-workbench',
    loadComponent: () =>
      import('./underwriting-workbench/underwriting-workbench.component').then((m) => m.UnderwritingWorkbenchComponent),
  },
  { path: '**', redirectTo: '/experience/nri-na' },
];
