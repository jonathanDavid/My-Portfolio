import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../core/seo.service';
import { Icon } from '../../components/icon/icon';
import { TechChip } from '../../components/tech-chip/tech-chip';
import { RevealDirective } from '../../core/reveal.directive';
import { projectBySlug } from '../../data/projects';
import { breadcrumb, caseStudyCreativeWork } from '../../core/structured-data';

@Component({
  selector: 'app-project-genetic',
  imports: [RouterLink, Icon, TechChip, RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './project-genetic.html',
  styleUrl: './project-genetic.scss',
})
export class ProjectGenetic {
  protected readonly project = projectBySlug('ga-allocation-services')!;

  constructor() {
    inject(SeoService).update({
      title: 'Genetic-Algorithm Visualizer',
      description:
        'Case study: a FastAPI + numpy genetic algorithm that streams every generation over WebSocket to a 60fps canvas frontend — evolving a cheaper, shorter grocery-pickup route and proving it beats naive Random and Greedy strategies.',
      path: 'projects/ga-allocation-services',
      type: 'article',
      structuredData: [
        caseStudyCreativeWork({
          slug: 'ga-allocation-services',
          name: 'Genetic-Algorithm Visualizer',
          headline: 'A streaming, interactive genetic algorithm for store-item optimization',
          description:
            'A FastAPI + numpy genetic algorithm streams every generation over a WebSocket to a requestAnimationFrame-buffered 60fps canvas frontend. The flagship "pickup" scenario evolves a cheaper, shorter multi-store shopping route and compares the result against Random and Greedy baselines.',
          languages: ['Python', 'TypeScript'],
          tech: this.project.tech,
        }),
        breadcrumb([
          { name: 'Home', path: '' },
          { name: 'Projects', path: 'projects' },
          { name: 'Genetic-Algorithm Visualizer', path: 'projects/ga-allocation-services' },
        ]),
      ],
    });
  }
}
