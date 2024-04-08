import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmploymentRoutingModule } from './employment-routing.module';
import { EmploymentComponent } from './employment.component';

@NgModule({
    imports: [CommonModule, EmploymentRoutingModule, EmploymentComponent],
})
export class EmploymentModule {}
