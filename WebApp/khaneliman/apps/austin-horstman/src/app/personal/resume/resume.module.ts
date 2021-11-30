import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeComponent } from './resume.component';
import { ResumeRoutingModule } from './resume-routing.module';

import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [ResumeComponent],
  imports: [CommonModule, SharedModule, ResumeRoutingModule],
  exports: [ResumeComponent],
})
export class ResumeModule {}
