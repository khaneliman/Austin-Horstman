import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EducationRoutingModule } from './education-routing.module';
import { EducationComponent } from './education.component';
import { FoxvalleyComponent } from './foxvalley/foxvalley.component';
import { SharedModule } from '../../../shared/shared.module';


@NgModule({
  declarations: [
    EducationComponent,
    FoxvalleyComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    EducationRoutingModule
  ]
})
export class EducationModule { }
