import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgbCollapse, NgbModule, NgbPopover } from '@ng-bootstrap/ng-bootstrap';
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
    SocialLinksComponent,
    NgbPopover,
    NgbCollapse
  ]
})
export class SharedModule {

 }
