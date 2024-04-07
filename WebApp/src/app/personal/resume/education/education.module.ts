import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EducationRoutingModule } from './education-routing.module';
import { EducationComponent } from './education.component';
import { FoxvalleyComponent } from './foxvalley/foxvalley.component';

@NgModule({
    imports: [CommonModule, EducationRoutingModule, EducationComponent, FoxvalleyComponent],
})
export class EducationModule {}
