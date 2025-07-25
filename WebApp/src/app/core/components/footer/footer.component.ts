import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { SocialLinksComponent } from '../social-links/social-links.component';

@Component({
  imports: [CommonModule, SocialLinksComponent],
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  test: Date = new Date();
  private router = inject(Router);

  getPath(): string {
    return this.router.url;
  }
}
