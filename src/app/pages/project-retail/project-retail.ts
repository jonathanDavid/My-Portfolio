import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../core/seo.service';
import { Icon } from '../../components/icon/icon';
import { TechChip } from '../../components/tech-chip/tech-chip';
import { RevealDirective } from '../../core/reveal.directive';
import { projectBySlug } from '../../data/projects';
import { breadcrumb, caseStudyCreativeWork } from '../../core/structured-data';

@Component({
  selector: 'app-project-retail',
  imports: [RouterLink, Icon, TechChip, RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './project-retail.html',
  styleUrl: './project-retail.scss',
})
export class ProjectRetail {
  protected readonly project = projectBySlug('retail-serverless')!;

  constructor() {
    inject(SeoService).update({
      title: 'Retail Serverless Backend',
      description:
        'Case study: an event-driven AWS serverless retail backend — API Gateway → Lambda → SQS → DynamoDB → SNS with a DLQ, esbuild-optimized cold starts and Terraform infra, plus a live order dashboard and an optional genetic pickup optimizer.',
      path: 'projects/retail-serverless',
      type: 'article',
      structuredData: [
        caseStudyCreativeWork({
          slug: 'retail-serverless',
          name: 'Retail Serverless Backend',
          headline: 'An event-driven, async AWS serverless retail order pipeline',
          description:
            'Accept retail orders fast (202) and process them asynchronously: API Gateway → ingest Lambda → SQS → process Lambda → DynamoDB + SNS, with a dead-letter queue, esbuild-bundled handlers and Terraform-managed infrastructure. A React dashboard tracks each order live, with an optional cross-project genetic pickup optimizer.',
          languages: ['TypeScript', 'JavaScript'],
          tech: this.project.tech,
        }),
        breadcrumb([
          { name: 'Home', path: '' },
          { name: 'Projects', path: 'projects' },
          { name: 'Retail Serverless Backend', path: 'projects/retail-serverless' },
        ]),
      ],
    });
  }
}
