import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeeksquadRoutingModule } from './geeksquad-routing.module';
import { GeeksquadComponent } from './geeksquad.component';

@NgModule({
    imports: [CommonModule, GeeksquadRoutingModule, GeeksquadComponent],
})
export class GeeksquadModule {}
