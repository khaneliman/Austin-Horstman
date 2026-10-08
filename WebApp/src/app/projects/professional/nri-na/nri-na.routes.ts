import { Routes } from '@angular/router';
import { caseStudyRoute } from '../case-study';

export const NRI_NA_ROUTES: Routes = [
  caseStudyRoute('doitbest', {
    project: 'doitbest-platform',
    overrides: {
      backRoute: '/experience/nri-na',
      backLabel: 'Back to NRI-NA Experience',
      companyKey: 'nri-na',
    },
  }),
  caseStudyRoute('ai-resource-staffing', { project: 'ai-resource-staffing' }),
  caseStudyRoute('tax-document-analysis', { project: 'tax-document-analysis' }),
  caseStudyRoute('mulesoft-migrator', { project: 'mulesoft-migrator' }),
  caseStudyRoute('underwriting-workbench', { project: 'underwriting-workbench' }),
  caseStudyRoute('farmlink-modernization', { project: 'farmlink-modernization' }),
  caseStudyRoute('accident-health', { project: 'accident-health' }),
  { path: '**', redirectTo: '/experience/nri-na' },
];
