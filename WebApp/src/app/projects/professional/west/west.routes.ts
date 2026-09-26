import { Routes } from '@angular/router';
import { DatabaseToolComponent } from './database-tool/database-tool.component';
import { ItPortalComponent } from './it-portal/it-portal.component';
import { QuickLaunchComponent } from './quick-launch/quick-launch.component';

export const WEST_ROUTES: Routes = [
  {
    path: 'database-tool',
    component: DatabaseToolComponent,
    data: { autoScroll: true },
  },
  {
    path: 'it-portal',
    component: ItPortalComponent,
    data: { autoScroll: true },
  },
  {
    path: 'quick-launch',
    component: QuickLaunchComponent,
    data: { autoScroll: true },
  },
  { path: '**', redirectTo: '/experience/west' },
];
