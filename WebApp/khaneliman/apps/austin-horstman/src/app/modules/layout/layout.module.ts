import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PageLayoutComponent } from './components/page-layout/page-layout.component';
import { SharedModule } from '@shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [FooterComponent, NavbarComponent, PageLayoutComponent],
  imports: [CommonModule, SharedModule, RouterModule],
  exports: [FooterComponent, NavbarComponent, PageLayoutComponent],
})
export class LayoutModule {}
