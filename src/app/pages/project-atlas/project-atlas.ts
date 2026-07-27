import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../core/seo.service';
import { Icon } from '../../components/icon/icon';
import { TechChip } from '../../components/tech-chip/tech-chip';
import { RevealDirective } from '../../core/reveal.directive';
import { projectBySlug } from '../../data/projects';
import { breadcrumb, caseStudyCreativeWork } from '../../core/structured-data';

@Component({
  selector: 'app-project-atlas',
  imports: [RouterLink, Icon, TechChip, RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './project-atlas.html',
  styleUrl: './project-atlas.scss',
})
export class ProjectAtlas {
  protected readonly project = projectBySlug('colombia-conflict-atlas')!;

  constructor() {
    inject(SeoService).update({
      title: 'Colombia Conflict & Security Atlas',
      description:
        'Case study: a timeline-first choropleth of Colombia (1947–2026) built entirely from real public data — Policía Nacional crime, CNMH armed-conflict victims with perpetrator attribution, UNODC coca — joined by DIVIPOLA at build time and animated key-less with MapLibre GL.',
      path: 'projects/colombia-conflict-atlas',
      type: 'article',
      structuredData: [
        caseStudyCreativeWork({
          slug: 'colombia-conflict-atlas',
          name: 'Colombia Conflict & Security Atlas',
          headline: 'A timeline-first map of Colombia built entirely from real public data',
          description:
            'Nine data layers across 1,122 municipalities and eight decades: five Policía Nacional crime datasets, three CNMH armed-conflict datasets with perpetrator attribution, and UNODC coca cultivation. A build-time ETL normalizes DIVIPOLA codes, measures join orphans, and emits sparse time-indexed JSON that a key-less MapLibre GL front end animates with a scrubbable timeline.',
          languages: ['TypeScript'],
          tech: this.project.tech,
        }),
        breadcrumb([
          { name: 'Home', path: '' },
          { name: 'Projects', path: 'projects' },
          { name: 'Colombia Conflict & Security Atlas', path: 'projects/colombia-conflict-atlas' },
        ]),
      ],
    });
  }
}
