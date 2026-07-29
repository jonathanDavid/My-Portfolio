import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../core/seo.service';
import { Icon } from '../../components/icon/icon';
import { TechChip } from '../../components/tech-chip/tech-chip';
import { RevealDirective } from '../../core/reveal.directive';
import { projectBySlug } from '../../data/projects';
import { breadcrumb, caseStudyCreativeWork } from '../../core/structured-data';

@Component({
  selector: 'app-project-copilot',
  imports: [RouterLink, Icon, TechChip, RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './project-copilot.html',
  styleUrl: './project-copilot.scss',
})
export class ProjectCopilot {
  protected readonly project = projectBySlug('gamedev-copilot')!;

  constructor() {
    inject(SeoService).update({
      title: 'Game-Dev Research Copilot',
      description:
        'Case study: a LangGraph agent that routes questions to RAG over 12 game frameworks (Chroma), a key-less YouTube tool, or direct chat — all inference local via Ollama + Mistral, and the whole graph testable in one second without any model.',
      path: 'projects/gamedev-copilot',
      type: 'article',
      structuredData: [
        caseStudyCreativeWork({
          slug: 'gamedev-copilot',
          name: 'Game-Dev Research Copilot',
          headline: 'An agent you can read, test, and run without the cloud',
          description:
            'LangGraph router → RAG retrieve / YouTube tool / direct chat → grounded generation → memory update. 226 chunks of real docs across 12 frameworks in Chroma; Ollama + Mistral for every LLM call; deterministic fakes make the whole graph hermetically testable.',
          languages: ['Python'],
          tech: this.project.tech,
        }),
        breadcrumb([
          { name: 'Home', path: '' },
          { name: 'Projects', path: 'projects' },
          { name: 'Game-Dev Research Copilot', path: 'projects/gamedev-copilot' },
        ]),
      ],
    });
  }
}
