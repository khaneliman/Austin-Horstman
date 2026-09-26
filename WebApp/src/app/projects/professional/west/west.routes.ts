import { Routes } from '@angular/router';
import { DatabaseToolComponent } from './database-tool/database-tool.component';
import { ItPortalComponent } from './it-portal/it-portal.component';
import { QuickLaunchComponent } from './quick-launch/quick-launch.component';

export const WEST_ROUTES: Routes = [
  {
    path: 'database-tool',
    component: DatabaseToolComponent,
  },
  {
    path: 'it-portal',
    component: ItPortalComponent,
  },
  {
    path: 'quick-launch',
    component: QuickLaunchComponent,
  },
  { path: '**', redirectTo: '/experience/west' },
];
