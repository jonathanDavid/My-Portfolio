import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ProjectCard } from '../../components/project-card/project-card';
import { SeoService } from '../../core/seo.service';
import { projects } from '../../data/projects';

@Component({
  selector: 'app-projects',
  imports: [ProjectCard],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  protected readonly shipped = projects.filter((p) => p.status === 'shipped');
  protected readonly inProgress = projects.filter((p) => p.status === 'in-progress');

  constructor() {
    inject(SeoService).update({
      title: 'Projects',
      description:
        'Shipped production systems and in-progress experiments — from a real-time Smart TV signage platform to serverless AWS backends and ML allocation services.',
      path: 'projects',
    });
  }
}
