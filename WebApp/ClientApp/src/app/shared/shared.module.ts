import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// Custom components 
import { SocialLinksComponent } from './social-links/social-links.component';

@NgModule({
  declarations: [
    SocialLinksComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule
  ],
  exports: [
    SocialLinksComponent
  ]
})
export class SharedModule {

 }
