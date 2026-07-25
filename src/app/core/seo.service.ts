import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';
import { site } from '../data/site';

export interface SeoData {
  title: string;
  description: string;
  /** Route path without leading slash, e.g. 'projects'. Empty for home. */
  path?: string;
  image?: string;
}

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly doc = inject(DOCUMENT);

  update(data: SeoData): void {
    const fullTitle = data.path
      ? `${data.title} · ${site.name}`
      : `${site.name} · ${site.role}`;
    const url = `${site.origin}${site.baseHref}${data.path ?? ''}`;
    const image = `${site.origin}${site.baseHref}${data.image ?? 'assets/og-image.svg'}`;

    this.title.setTitle(fullTitle);
    this.setMeta('description', data.description);

    this.setMeta('og:title', fullTitle, 'property');
    this.setMeta('og:description', data.description, 'property');
    this.setMeta('og:type', 'website', 'property');
    this.setMeta('og:url', url, 'property');
    this.setMeta('og:image', image, 'property');
    this.setMeta('og:site_name', site.name, 'property');

    this.setMeta('twitter:card', 'summary_large_image');
    this.setMeta('twitter:title', fullTitle);
    this.setMeta('twitter:description', data.description);
    this.setMeta('twitter:image', image);

    this.setCanonical(url);
  }

  private setMeta(name: string, content: string, attr: 'name' | 'property' = 'name'): void {
    this.meta.updateTag({ [attr]: name, content } as Record<string, string>, `${attr}='${name}'`);
  }

  private setCanonical(url: string): void {
    let link = this.doc.head.querySelector<HTMLLinkElement>("link[rel='canonical']");
    if (!link) {
      link = this.doc.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.doc.head.appendChild(link);
    }
    link.setAttribute('href', url);
  }
}
