import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../core/seo.service';
import { Icon } from '../../components/icon/icon';
import { TechChip } from '../../components/tech-chip/tech-chip';
import { RevealDirective } from '../../core/reveal.directive';
import { projectBySlug } from '../../data/projects';
import { breadcrumb, caseStudyCreativeWork } from '../../core/structured-data';

@Component({
  selector: 'app-project-mongo',
  imports: [RouterLink, Icon, TechChip, RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './project-mongo.html',
  styleUrl: './project-mongo.scss',
})
export class ProjectMongo {
  protected readonly project = projectBySlug('mongo-showdown')!;

  constructor() {
    inject(SeoService).update({
      title: 'Mongo Showdown',
      description:
        'Case study: Mongoose (ODM) vs the native MongoDB driver — one contract, a fairness suite proving identical work, then measured benchmarks. The ODM tax lives in the driver, not the database.',
      path: 'projects/mongo-showdown',
      type: 'article',
      structuredData: [
        caseStudyCreativeWork({
          slug: 'mongo-showdown',
          name: 'Mongo Showdown',
          headline: 'Benchmarks are marketing until a fairness suite makes them measurement',
          description:
            'The same retail domain behind one interface, implemented with Mongoose 8 and the native driver 6. Six fairness tests prove identical results (including transaction rollback); the measured verdict: native 1.3–1.5× where the driver works, 1.12× where the server does.',
          languages: ['TypeScript'],
          tech: this.project.tech,
        }),
        breadcrumb([
          { name: 'Home', path: '' },
          { name: 'Projects', path: 'projects' },
          { name: 'Mongo Showdown', path: 'projects/mongo-showdown' },
        ]),
      ],
    });
  }
}
