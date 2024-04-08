import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeComponent } from './resume.component';
import { ResumeRoutingModule } from './resume-routing.module';
import { CardComponent } from '../../core/components/card/card.component';
import { SeparatorComponent } from '../../core/components/separator/separator.component';
import { FloatingCardComponent } from '../../core/components/floating-card/floating-card.component';

@NgModule({
  imports: [
    CommonModule,
    CardComponent,
    SeparatorComponent,
    FloatingCardComponent,
    ResumeRoutingModule,
    ResumeComponent,
  ],
  exports: [ResumeComponent],
})
export class ResumeModule {}
