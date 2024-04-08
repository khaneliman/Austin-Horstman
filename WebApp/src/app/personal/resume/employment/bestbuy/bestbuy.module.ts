import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BestbuyRoutingModule } from './bestbuy-routing.module';
import { BestbuyComponent } from './bestbuy.component';

@NgModule({
    imports: [CommonModule, BestbuyRoutingModule, BestbuyComponent],
})
export class BestbuyModule {}
