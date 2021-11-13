import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmploymentRoutingModule } from './employment-routing.module';
import { EmploymentComponent } from './employment.component';
import { WestComponent } from './west/west.component';
import { SkylineComponent } from './skyline/skyline.component';
import { BestbuyComponent } from './bestbuy/bestbuy.component';
import { CorebtsComponent } from './corebts/corebts.component';


@NgModule({
  declarations: [
    EmploymentComponent,
    WestComponent,
    SkylineComponent,
    BestbuyComponent,
    CorebtsComponent
  ],
  imports: [
    CommonModule,
    EmploymentRoutingModule
  ]
})
export class EmploymentModule { }
