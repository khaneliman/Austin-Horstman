import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CorebtsRoutingModule } from './corebts-routing.module';
import { CorebtsComponent } from './corebts.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { KrogerComponent } from './kroger/kroger.component';


@NgModule({
  declarations: [
    CorebtsComponent,
    KrogerComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CorebtsRoutingModule
  ]
})
export class CorebtsModule { }
