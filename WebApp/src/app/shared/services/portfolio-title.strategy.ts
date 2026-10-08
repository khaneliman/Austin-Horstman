import { DOCUMENT } from '@angular/common';
import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';
import { resolveRouteMetadata, SHARING_IMAGE } from './route-metadata';

@Injectable()
export class PortfolioTitleStrategy extends TitleStrategy {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly document = inject(DOCUMENT);

  override updateTitle(snapshot: RouterStateSnapshot): void {
    const { title, description, canonical } = resolveRouteMetadata(snapshot);
    this.title.setTitle(title);
    this.meta.updateTag({ name: 'description', content: description });
    for (const [property, content] of Object.entries({
      'og:title': title,
      'og:description': description,
      'og:url': canonical,
      'og:type': 'website',
      'og:image': SHARING_IMAGE,
      'og:image:alt': 'Austin Horstman',
    })) {
      this.meta.updateTag({ property, content });
    }
    for (const [name, content] of Object.entries({
      'twitter:card': 'summary_large_image',
      'twitter:title': title,
      'twitter:description': description,
      'twitter:image': SHARING_IMAGE,
      'twitter:image:alt': 'Austin Horstman',
    })) {
      this.meta.updateTag({ name, content });
    }
    let link = this.document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = this.document.createElement('link');
      link.rel = 'canonical';
      this.document.head.appendChild(link);
    }
    link.href = canonical;
  }
}
