import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TechnologyRoutingModule } from './technology-routing.module';
import { TechnologyComponent } from './technology.component';
import { CsharpComponent } from './csharp/csharp.component';


@NgModule({
  declarations: [
    TechnologyComponent,
    CsharpComponent
  ],
  imports: [
    CommonModule,
    TechnologyRoutingModule
  ]
})
export class TechnologyModule { }
