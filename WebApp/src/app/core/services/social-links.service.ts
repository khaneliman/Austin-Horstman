import { Injectable, signal } from '@angular/core';
import { SocialLink } from '../../shared/types';

export const SOCIAL_PROFILES = {
  website: 'https://austinhorstman.dev',
  twitterHandle: '@khaneliman12',
  links: {
    facebook: 'https://facebook.com/khaneliman',
    twitter: 'https://twitter.com/khaneliman12',
    instagram: 'https://instagram.com/khaneliman',
    github: 'https://github.com/khaneliman',
    gitlab: 'https://gitlab.com/khaneliman',
    linkedin: 'https://linkedin.com/in/austin-horstman-94963a76',
  },
} as const;

@Injectable({
  providedIn: 'root',
})
export class SocialLinksService {
  private static readonly navPlatforms = new Set(['github', 'linkedin']);

  private readonly socialLinks = signal<SocialLink[]>([
    {
      platform: 'facebook',
      link: SOCIAL_PROFILES.links.facebook,
      btnClass: 'btn-facebook',
      iconName: 'simpleFacebook',
      tooltip: 'Follow me on Facebook',
    },
    {
      platform: 'twitter',
      link: SOCIAL_PROFILES.links.twitter,
      btnClass: 'btn-twitter',
      iconName: 'simpleX',
      tooltip: 'Follow me on Twitter',
    },
    {
      platform: 'instagram',
      link: SOCIAL_PROFILES.links.instagram,
      btnClass: 'btn-instagram',
      iconName: 'simpleInstagram',
      tooltip: 'Follow me on Instagram',
    },
    {
      platform: 'github',
      link: SOCIAL_PROFILES.links.github,
      btnClass: 'btn-github',
      iconName: 'simpleGithub',
      tooltip: 'View GitHub profile',
    },
    {
      platform: 'gitlab',
      link: SOCIAL_PROFILES.links.gitlab,
      btnClass: 'btn-gitlab',
      iconName: 'simpleGitlab',
      tooltip: 'Follow on GitLab',
    },
    {
      platform: 'linkedin',
      link: SOCIAL_PROFILES.links.linkedin,
      btnClass: 'btn-linkedin',
      iconName: 'bootstrapLinkedin',
      tooltip: 'Connect on LinkedIn',
    },
  ]);

  readonly socialLinks$ = this.socialLinks.asReadonly();

  getSocialLinks(): SocialLink[] {
    return this.socialLinks();
  }

  getNavSocialLinks(): SocialLink[] {
    return this.socialLinks().filter((site) => SocialLinksService.navPlatforms.has(site.platform));
  }

  getStructuredDataLinks(): string[] {
    return [SOCIAL_PROFILES.links.linkedin, SOCIAL_PROFILES.links.github, SOCIAL_PROFILES.links.gitlab];
  }
}
