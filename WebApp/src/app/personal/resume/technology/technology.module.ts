import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TechnologyRoutingModule } from './technology-routing.module';
import { TechnologyComponent } from './technology.component';
import { CsharpComponent } from './csharp/csharp.component';

@NgModule({
    imports: [CommonModule, TechnologyRoutingModule, TechnologyComponent, CsharpComponent],
})
export class TechnologyModule {}
