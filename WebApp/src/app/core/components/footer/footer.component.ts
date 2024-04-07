import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SocialLinksComponent } from '../../../shared/social-links/social-links.component';
import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap';

@Component({
  standalone: true,
  imports: [CommonModule, SocialLinksComponent, NgbTooltip],
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  test: Date = new Date();

  constructor(private router: Router) {}

  getPath(): string {
    return this.router.url;
  }
}
