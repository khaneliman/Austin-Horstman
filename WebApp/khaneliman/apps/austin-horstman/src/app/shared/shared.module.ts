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
import { CardComponent } from './card/card.component';
import { SeparatorComponent } from './separator/separator.component';
import { FloatingCardComponent } from './floating-card/floating-card.component';

@NgModule({
  declarations: [SocialLinksComponent, CardComponent, SeparatorComponent, FloatingCardComponent],
  imports: [CommonModule, RouterModule, NgbModule],
  exports: [
    SocialLinksComponent,
    CardComponent,
    SeparatorComponent,
    FloatingCardComponent,
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
