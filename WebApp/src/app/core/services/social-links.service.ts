import { Injectable, signal } from '@angular/core';
import { SocialLink } from '../../shared/types';

@Injectable({
  providedIn: 'root',
})
export class SocialLinksService {
  private readonly socialLinks = signal<SocialLink[]>([
    {
      platform: 'facebook',
      link: 'https://facebook.com/khaneliman',
      btnClass: 'btn-facebook',
      iconName: 'simpleFacebook',
      tooltip: 'Follow me on Facebook',
    },
    {
      platform: 'twitter',
      link: 'https://twitter.com/khaneliman12',
      btnClass: 'btn-twitter',
      iconName: 'simpleX',
      tooltip: 'Follow me on Twitter',
    },
    {
      platform: 'instagram',
      link: 'https://instagram.com/khaneliman',
      btnClass: 'btn-instagram',
      iconName: 'simpleInstagram',
      tooltip: 'Follow me on Instagram',
    },
    {
      platform: 'github',
      link: 'https://github.com/khaneliman',
      btnClass: 'btn-github',
      iconName: 'simpleGithub',
      tooltip: 'Star on GitHub',
    },
    {
      platform: 'gitlab',
      link: 'https://gitlab.com/khaneliman',
      btnClass: 'btn-gitlab',
      iconName: 'simpleGitlab',
      tooltip: 'Follow on GitLab',
    },
    {
      platform: 'linkedin',
      link: 'https://linkedin.com/in/austin-horstman-94963a76',
      btnClass: 'btn-linkedin',
      iconName: 'heroBriefcase',
      tooltip: 'Connect on LinkedIn',
    },
  ]);

  readonly socialLinks$ = this.socialLinks.asReadonly();

  getSocialLinks(): SocialLink[] {
    return this.socialLinks();
  }
}
