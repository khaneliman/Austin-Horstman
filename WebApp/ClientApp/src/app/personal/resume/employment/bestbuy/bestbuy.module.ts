import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BestbuyRoutingModule } from './bestbuy-routing.module';
import { BestbuyComponent } from './bestbuy.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    BestbuyComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    BestbuyRoutingModule
  ]
})
export class BestbuyModule { }
