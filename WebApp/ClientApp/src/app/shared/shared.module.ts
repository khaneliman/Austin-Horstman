import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// Custom components
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SocialLinksComponent } from './social-links/social-links.component';

@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,
    SocialLinksComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SocialLinksComponent
  ]
})
export class SharedModule {

 }
