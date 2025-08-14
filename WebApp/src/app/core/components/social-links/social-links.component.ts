import {
  ChangeDetectionStrategy,
  Component,
  Input,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  simpleFacebook,
  simpleX,
  simpleInstagram,
  simpleGithub,
  simpleGitlab,
} from '@ng-icons/simple-icons';
import { heroBriefcase } from '@ng-icons/heroicons/outline';
import { SocialLinksService } from '../../services';

@Component({
  standalone: true,
  imports: [CommonModule, NgIconComponent],
  selector: 'app-social-links',
  templateUrl: './social-links.component.html',
  styleUrls: ['./social-links.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    provideIcons({
      simpleFacebook,
      simpleX,
      simpleInstagram,
      simpleGithub,
      simpleGitlab,
      heroBriefcase,
    }),
  ],
})
export class SocialLinksComponent {
  @Input() location: string | undefined;

  private socialLinksService = inject(SocialLinksService);
  protected socialLinks = this.socialLinksService.socialLinks$;
}
