import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmploymentRoutingModule } from './employment-routing.module';
import { EmploymentComponent } from './employment.component';

import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [EmploymentComponent],
  imports: [CommonModule, SharedModule, EmploymentRoutingModule],
})
export class EmploymentModule {}
