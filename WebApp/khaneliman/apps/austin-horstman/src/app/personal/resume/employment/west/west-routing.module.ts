import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WestComponent } from './west.component';

const routes: Routes = [
  { path: '', component: WestComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WestRoutingModule {}
