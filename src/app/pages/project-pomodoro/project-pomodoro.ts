import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../core/seo.service';
import { Icon } from '../../components/icon/icon';
import { TechChip } from '../../components/tech-chip/tech-chip';
import { RevealDirective } from '../../core/reveal.directive';
import { projectBySlug } from '../../data/projects';
import { breadcrumb, caseStudyCreativeWork } from '../../core/structured-data';

@Component({
  selector: 'app-project-pomodoro',
  imports: [RouterLink, Icon, TechChip, RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './project-pomodoro.html',
  styleUrl: './project-pomodoro.scss',
})
export class ProjectPomodoro {
  protected readonly project = projectBySlug('art-pomodoro')!;

  constructor() {
    inject(SeoService).update({
      title: 'Art Pomodoro',
      description:
        'Case study: a Pomodoro timer where a public-domain masterpiece is progressively revealed by an always-connected organic propagation, in exact lockstep with elapsed time — art from The Met and AIC open APIs, key-less, pure client-side.',
      path: 'projects/art-pomodoro',
      type: 'article',
      structuredData: [
        caseStudyCreativeWork({
          slug: 'art-pomodoro',
          name: 'Art Pomodoro',
          headline: 'A focus timer where the artwork is the interface',
          description:
            'Each focus block hides a public-domain painting behind a veil that an organic, always-connected propagation removes in lockstep with real elapsed time. A pure timer reducer, seeded deterministic canvas reveals, a Dijkstra arrival field for connectivity, and key-less open museum APIs with bundled fallbacks.',
          languages: ['TypeScript'],
          tech: this.project.tech,
        }),
        breadcrumb([
          { name: 'Home', path: '' },
          { name: 'Projects', path: 'projects' },
          { name: 'Art Pomodoro', path: 'projects/art-pomodoro' },
        ]),
      ],
    });
  }
}
