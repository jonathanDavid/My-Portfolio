import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../core/seo.service';
import { Icon } from '../../components/icon/icon';
import { TechChip } from '../../components/tech-chip/tech-chip';
import { RevealDirective } from '../../core/reveal.directive';
import { projectBySlug } from '../../data/projects';
import { breadcrumb, caseStudyCreativeWork } from '../../core/structured-data';

@Component({
  selector: 'app-project-bomberman',
  imports: [RouterLink, Icon, TechChip, RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './project-bomberman.html',
  styleUrl: './project-bomberman.scss',
})
export class ProjectBomberman {
  protected readonly project = projectBySlug('bomberman')!;

  constructor() {
    inject(SeoService).update({
      title: 'Bomberman — Java, no engine',
      description:
        'Case study: a university Bomberman in plain Java AWT — hand-rolled render layers, sprite animation, WAV audio, graph-based enemy pathfinding, and a data-driven text level format. Code intentionally frozen.',
      path: 'projects/bomberman',
      type: 'article',
      structuredData: [
        caseStudyCreativeWork({
          slug: 'bomberman',
          name: 'Bomberman — Java, no engine',
          headline: 'Everything an engine gives you, built by hand once',
          description:
            'Plain Java AWT Canvas: render loop, layered sprites, animation framework, menus, WAV audio, Grafo/Nodo enemy pathfinding, and Niveles.txt — a documented text level format. ~2,750 lines, 21 classes, intentionally frozen.',
          languages: ['Java'],
          tech: this.project.tech,
        }),
        breadcrumb([
          { name: 'Home', path: '' },
          { name: 'Projects', path: 'projects' },
          { name: 'Bomberman', path: 'projects/bomberman' },
        ]),
      ],
    });
  }
}
