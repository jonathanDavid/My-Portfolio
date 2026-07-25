import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../core/seo.service';
import { projectBySlug } from '../../data/projects';

@Component({
  selector: 'app-project-signage',
  imports: [RouterLink],
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
    });
  }
}
