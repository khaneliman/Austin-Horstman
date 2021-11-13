import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TechnologyModule } from './technology/technology.module';
import { ProjectsModule } from './projects/projects.module';
import { EducationModule } from './education/education.module';
import { EmploymentModule } from './employment/employment.module';
import { ResumeComponent } from './resume.component';
import { ResumeRoutingModule } from './resume-routing.module';



@NgModule({
  declarations: [
    ResumeComponent
  ],
  imports: [
    CommonModule,
    ResumeRoutingModule,
    TechnologyModule,
    ProjectsModule,
    EducationModule,
    EmploymentModule
  ],
  exports: [
    ResumeComponent
  ]
})
export class ResumeModule { }
