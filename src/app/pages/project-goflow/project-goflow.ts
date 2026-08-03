import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../core/seo.service';
import { Icon } from '../../components/icon/icon';
import { TechChip } from '../../components/tech-chip/tech-chip';
import { RevealDirective } from '../../core/reveal.directive';
import { projectBySlug } from '../../data/projects';
import { breadcrumb, caseStudyCreativeWork } from '../../core/structured-data';

@Component({
  selector: 'app-project-goflow',
  imports: [RouterLink, Icon, TechChip, RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './project-goflow.html',
  styleUrl: './project-goflow.scss',
})
export class ProjectGoflow {
  protected readonly project = projectBySlug('goflow')!;

  constructor() {
    inject(SeoService).update({
      title: 'goflow — Go L7 Load Balancer',
      description:
        'Case study: an L7 load balancer in pure Go stdlib with zero dependencies — round-robin and least-connections, health checks with hysteresis, safe retries, and a live SSE traffic dashboard.',
      path: 'projects/goflow',
      type: 'article',
      structuredData: [
        caseStudyCreativeWork({
          slug: 'goflow',
          name: 'goflow — Go L7 Load Balancer',
          headline: 'Everything a load balancer must get right, in stdlib only',
          description:
            'Round-robin + least-connections over atomically-stated backends, hysteresis health checks, mark-don\'t-write retry semantics, p50/p95 latency rings, and a go:embed dashboard streamed over Server-Sent Events. go.mod has no require block.',
          languages: ['Go'],
          tech: this.project.tech,
        }),
        breadcrumb([
          { name: 'Home', path: '' },
          { name: 'Projects', path: 'projects' },
          { name: 'goflow', path: 'projects/goflow' },
        ]),
      ],
    });
  }
}
