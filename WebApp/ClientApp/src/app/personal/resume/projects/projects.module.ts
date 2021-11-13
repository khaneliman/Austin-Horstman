import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';

import { WestModule } from './west/west.module';
import { SkylineModule } from './skyline/skyline.module';
import { PersonalModule } from './personal/personal.module';
import { GeeksquadModule } from './geeksquad/geeksquad.module';
import { CorebtsModule } from './corebts/corebts.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ProjectsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProjectsRoutingModule
  ]
})
export class ProjectsModule { }
