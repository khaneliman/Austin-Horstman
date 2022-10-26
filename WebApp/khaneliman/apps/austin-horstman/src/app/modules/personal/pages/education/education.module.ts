import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '@shared/shared.module';
import { FoxvalleyComponent } from './pages/foxvalley/foxvalley.component';
import { EducationRoutingModule } from './education-routing.module';
import { EducationComponent } from './education.component';

@NgModule({
  declarations: [EducationComponent, FoxvalleyComponent],
  imports: [CommonModule, RouterModule, SharedModule, EducationRoutingModule],
})
export class EducationModule {}
