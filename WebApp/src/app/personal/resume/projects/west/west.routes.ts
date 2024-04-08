import { Routes } from '@angular/router';
import { WestComponent } from './west.component';
import { DatabaseToolComponent } from './database-tool/database-tool.component';
import { ItPortalComponent } from './it-portal/it-portal.component';
import { QuickLaunchComponent } from './quick-launch/quick-launch.component';

export const WEST_ROUTES: Routes = [
  {
    path: '',
    component: WestComponent,
    children: [
      { path: 'database-tool', component: DatabaseToolComponent },
      { path: 'it-portal', component: ItPortalComponent },
      { path: 'quick-launch', component: QuickLaunchComponent },
    ],
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
