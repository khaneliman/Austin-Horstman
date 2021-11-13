import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TechnologyRoutingModule } from './technology-routing.module';
import { TechnologyComponent } from './technology.component';
import { CsharpComponent } from './csharp/csharp.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    TechnologyComponent,
    CsharpComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    TechnologyRoutingModule
  ]
})
export class TechnologyModule { }
