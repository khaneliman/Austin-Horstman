import {
  ChangeDetectionStrategy,
  Component,
  Input,
  inject,
} from '@angular/core';
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
  protected socialLinks = this.socialLinksService.socialLinks$;
}
