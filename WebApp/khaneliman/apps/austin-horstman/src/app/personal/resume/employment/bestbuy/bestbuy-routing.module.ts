import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BestbuyComponent } from './bestbuy.component';

const routes: Routes = [{ path: '', component: BestbuyComponent },
{ path: '**', redirectTo: '', pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BestbuyRoutingModule { }
