import { ChangeDetectionStrategy, Component, Input, inject } from '@angular/core';
import { bootstrapLinkedin } from '@ng-icons/bootstrap-icons';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { simpleFacebook, simpleGithub, simpleGitlab, simpleInstagram, simpleX } from '@ng-icons/simple-icons';
import { SocialLinksService } from '../../services';

@Component({
  standalone: true,
  imports: [NgIconComponent],
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
      bootstrapLinkedin,
    }),
  ],
})
export class SocialLinksComponent {
  @Input() location: string | undefined;

  private socialLinksService = inject(SocialLinksService);
  protected socialLinks = this.socialLinksService.socialLinks$;
}
