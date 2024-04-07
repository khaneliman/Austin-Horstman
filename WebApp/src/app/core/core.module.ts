import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [FooterComponent, NavbarComponent],
  imports: [CommonModule, RouterModule],
  exports: [FooterComponent, NavbarComponent],
})
export class CoreModule {}
