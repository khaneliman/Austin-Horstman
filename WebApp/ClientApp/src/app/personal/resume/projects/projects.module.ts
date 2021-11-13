import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import { CorebtsComponent } from './corebts/corebts.component';
import { GeeksquadComponent } from './geeksquad/geeksquad.component';
import { PersonalComponent } from './personal/personal.component';
import { SkylineComponent } from './skyline/skyline.component';


@NgModule({
  declarations: [
    ProjectsComponent,
    CorebtsComponent,
    GeeksquadComponent,
    PersonalComponent,
    SkylineComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule
  ]
})
export class ProjectsModule { }
