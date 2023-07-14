import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeeksquadComponent } from './geeksquad.component';
import { StatTrackerComponent } from './stat-tracker/stat-tracker.component';

const routes: Routes = [
  {
    path: '',
    component: GeeksquadComponent,
    children: [{ path: 'stat-tracker', component: StatTrackerComponent }],
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GeeksquadRoutingModule {}
