import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../core/seo.service';
import { Icon } from '../../components/icon/icon';
import { TechChip } from '../../components/tech-chip/tech-chip';
import { RevealDirective } from '../../core/reveal.directive';
import { projectBySlug } from '../../data/projects';
import { breadcrumb, signageCreativeWork } from '../../core/structured-data';

@Component({
  selector: 'app-project-signage',
  imports: [RouterLink, Icon, TechChip, RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './project-signage.html',
  styleUrl: './project-signage.scss',
})
export class ProjectSignage {
  protected readonly project = projectBySlug('digital-signage')!;

  constructor() {
    inject(SeoService).update({
      title: 'Digital Signage Platform',
      description:
        'Case study: a four-surface real-time digital signage platform — React control plane, NestJS API, Tizen/SSSP Smart TV player and Terraform-managed AWS infrastructure, kept in sync over WebSockets.',
      path: 'projects/digital-signage',
      type: 'article',
      structuredData: [
        signageCreativeWork(this.project.tech),
        breadcrumb([
          { name: 'Home', path: '' },
          { name: 'Projects', path: 'projects' },
          { name: 'Digital Signage Platform', path: 'projects/digital-signage' },
        ]),
      ],
    });
  }
}
