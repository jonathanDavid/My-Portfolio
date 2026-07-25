import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProjectCard } from '../../components/project-card/project-card';
import { SeoService } from '../../core/seo.service';
import { site } from '../../data/site';
import { featuredProjects } from '../../data/projects';
import { experience } from '../../data/experience';

@Component({
  selector: 'app-home',
  imports: [RouterLink, ProjectCard],
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
    });
  }
}
