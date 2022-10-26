import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CorebtsComponent } from './corebts.component';

const routes: Routes = [
  { path: '', component: CorebtsComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CorebtsRoutingModule {}
