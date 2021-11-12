import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-links',
  templateUrl: './social-links.component.html',
  styleUrls: ['./social-links.component.scss',]
})
export class SocialLinksComponent {

  constructor() { }

  @Input() location: string;

  socialLinks: any = [
    {
      platform: 'facebook',
      link: 'https://facebook.com/khaneliman',
      btnClass: 'btn-facebook',
      faClass: 'fa-facebook-square',
      tooltip: 'Follow me on Facebook'
    },
    {
      platform: 'twitter',
      link: 'https://twitter.com/khaneliman12',
      btnClass: 'btn-twitter',
      faClass: 'fa-twitter',
      tooltip: 'Follow me on Twitter'
    },
    {
      platform: 'instagram',
      link: 'https://instagram.com/khaneliman',
      btnClass: 'btn-instagram',
      faClass: 'fa-instagram',
      tooltip: 'Follow me on Instagram'
    },
    {
      platform: 'github',
      link: 'https://github.com/khaneliman',
      btnClass: 'btn-github',
      faClass: 'fa-github',
      tooltip: 'Star on GitHub'
    },
    {
      platform: 'linkedin',
      link: 'https://linkedin.com/in/austin-horstman-94963a76',
      btnClass: 'btn-linkedin',
      faClass: 'fa-linkedin',
      tooltip: 'Star on linkedin'
    }
  ];

}
