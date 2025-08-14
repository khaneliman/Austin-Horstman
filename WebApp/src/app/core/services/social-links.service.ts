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
      faClass: 'fa-facebook-square',
      tooltip: 'Follow me on Facebook',
    },
    {
      platform: 'twitter',
      link: 'https://twitter.com/khaneliman12',
      btnClass: 'btn-twitter',
      faClass: 'fa-twitter',
      tooltip: 'Follow me on Twitter',
    },
    {
      platform: 'instagram',
      link: 'https://instagram.com/khaneliman',
      btnClass: 'btn-instagram',
      faClass: 'fa-instagram',
      tooltip: 'Follow me on Instagram',
    },
    {
      platform: 'github',
      link: 'https://github.com/khaneliman',
      btnClass: 'btn-github',
      faClass: 'fa-github',
      tooltip: 'Star on GitHub',
    },
    {
      platform: 'gitlab',
      link: 'https://gitlab.com/khaneliman',
      btnClass: 'btn-gitlab',
      faClass: 'fa-gitlab',
      tooltip: 'Follow on GitLab',
    },
    {
      platform: 'linkedin',
      link: 'https://linkedin.com/in/austin-horstman-94963a76',
      btnClass: 'btn-linkedin',
      faClass: 'fa-linkedin',
      tooltip: 'Connect on LinkedIn',
    },
  ]);

  readonly socialLinks$ = this.socialLinks.asReadonly();

  getSocialLinks(): SocialLink[] {
    return this.socialLinks();
  }
}
