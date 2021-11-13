import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WestRoutingModule } from './west-routing.module';
import { WestComponent } from './west.component';


@NgModule({
  declarations: [
    WestComponent
  ],
  imports: [
    CommonModule,
    WestRoutingModule
  ]
})
export class WestModule { }
