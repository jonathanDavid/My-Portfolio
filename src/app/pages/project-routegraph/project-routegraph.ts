import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../core/seo.service';
import { Icon } from '../../components/icon/icon';
import { TechChip } from '../../components/tech-chip/tech-chip';
import { RevealDirective } from '../../core/reveal.directive';
import { projectBySlug } from '../../data/projects';
import { breadcrumb, caseStudyCreativeWork } from '../../core/structured-data';

@Component({
  selector: 'app-project-routegraph',
  imports: [RouterLink, Icon, TechChip, RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './project-routegraph.html',
  styleUrl: './project-routegraph.scss',
})
export class ProjectRoutegraph {
  protected readonly project = projectBySlug('route-graph-neo4j')!;

  constructor() {
    inject(SeoService).update({
      title: 'Colombia Route Graph',
      description:
        'Case study: the Colombian highway network as a Neo4j property graph — real DANE cities, Ruta Nacional edges with OSRM road polylines, and an explorer that runs the same Cypher two ways: key-less client-side Dijkstra and live Neo4j over bolt-in-WebSocket from the browser.',
      path: 'projects/route-graph-neo4j',
      type: 'article',
      structuredData: [
        caseStudyCreativeWork({
          slug: 'route-graph-neo4j',
          name: 'Colombia Route Graph',
          headline: 'Why a graph database fits routing — shown, not told',
          description:
            'A two-repo build: an ETL that curates Colombia\'s intercity highway network into Neo4j (real DANE cities, INVIAS corridors, OSRM metrics and polylines) and a MapLibre explorer with dual engines — client-side Dijkstra for the key-less demo, live Neo4j over bolt-in-WebSocket for the real thing — pinned to identical answers.',
          languages: ['TypeScript', 'Cypher'],
          tech: this.project.tech,
        }),
        breadcrumb([
          { name: 'Home', path: '' },
          { name: 'Projects', path: 'projects' },
          { name: 'Colombia Route Graph', path: 'projects/route-graph-neo4j' },
        ]),
      ],
    });
  }
}
