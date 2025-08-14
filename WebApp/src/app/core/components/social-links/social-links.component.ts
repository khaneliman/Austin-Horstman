import {
  ChangeDetectionStrategy,
  Component,
  Input,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialLinksService } from '../../services';

@Component({
  standalone: true,
  imports: [CommonModule],
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
