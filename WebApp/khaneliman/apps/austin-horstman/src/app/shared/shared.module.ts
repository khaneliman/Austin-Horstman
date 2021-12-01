import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {
  NgbCollapse,
  NgbDropdown,
  NgbDropdownItem,
  NgbDropdownMenu,
  NgbDropdownToggle,
  NgbModule,
  NgbNav,
  NgbNavLink,
  NgbPopover,
  NgbTooltip,
} from '@ng-bootstrap/ng-bootstrap';
// Custom components
import { SocialLinksComponent } from './social-links/social-links.component';

@NgModule({
  declarations: [SocialLinksComponent],
  imports: [CommonModule, RouterModule, NgbModule],
  exports: [
    SocialLinksComponent,
    NgbPopover,
    NgbCollapse,
    NgbNav,
    NgbDropdown,
    NgbDropdownItem,
    NgbDropdownToggle,
    NgbDropdownMenu,
    NgbTooltip,
    NgbNavLink,
  ],
})
export class SharedModule {}
