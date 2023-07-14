import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatabaseToolComponent } from './database-tool/database-tool.component';
import { ItPortalComponent } from './it-portal/it-portal.component';
import { QuickLaunchComponent } from './quick-launch/quick-launch.component';
import { WestComponent } from './west.component';

const routes: Routes = [
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

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WestRoutingModule {}
