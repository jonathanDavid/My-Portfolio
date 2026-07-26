import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CardCarousel } from '../../components/card-carousel/card-carousel';
import { Icon } from '../../components/icon/icon';
import { TechChip } from '../../components/tech-chip/tech-chip';
import { Starfield } from '../../components/starfield/starfield';
import { RevealDirective } from '../../core/reveal.directive';
import { CountUpDirective } from '../../core/count-up.directive';
import { SeoService } from '../../core/seo.service';
import { site } from '../../data/site';
import { featuredProjects } from '../../data/projects';
import { experience } from '../../data/experience';
import { profilePageNode } from '../../core/structured-data';

@Component({
  selector: 'app-home',
  imports: [
    RouterLink,
    CardCarousel,
    Icon,
    TechChip,
    Starfield,
    RevealDirective,
    CountUpDirective,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  protected readonly site = site;
  protected readonly featured = featuredProjects;
  protected readonly roles = experience;

  constructor() {
    inject(SeoService).update({
      title: site.role,
      description: site.tagline,
      path: '',
      type: 'profile',
      structuredData: [profilePageNode()],
    });
  }
}
