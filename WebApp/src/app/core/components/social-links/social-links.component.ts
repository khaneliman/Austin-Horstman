import { ChangeDetectionStrategy, Component, Input, inject } from '@angular/core';
import { SocialLink } from '../../../shared/types';
import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { SocialLinksService } from '../../services';

@Component({
  imports: [NgbTooltip, CommonModule],
  selector: 'app-social-links',
  templateUrl: './social-links.component.html',
  styleUrls: ['./social-links.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SocialLinksComponent {
  @Input() location: string | undefined;

  private socialLinksService = inject(SocialLinksService);
  socialLinks: SocialLink[] = this.socialLinksService.getSocialLinks();

  trackBySocialLink(index: number, socialLink: SocialLink): string {
    return socialLink.platform;
  }
}
