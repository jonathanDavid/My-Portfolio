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
      title: 'Research Copilot',
      description:
        'Case study: a local research copilot for any subject — say "be an expert in X" and an agent finds the official docs on the web, indexes them, and answers with citations. LangGraph routing, per-subject Chroma indexes, all inference local via Ollama + Mistral; the whole graph testable without any model.',
      path: 'projects/gamedev-copilot',
      type: 'article',
      structuredData: [
        caseStudyCreativeWork({
          slug: 'gamedev-copilot',
          name: 'Research Copilot',
          headline: 'An agent you can read, test, run without the cloud — and point at any subject',
          description:
            'LangGraph router → RAG retrieve / YouTube tool / direct chat → grounded generation → memory update. The subject is a swappable DomainProfile (demo: 226 chunks across 12 game frameworks in Chroma); Ollama + Mistral for every LLM call; deterministic fakes make the whole graph hermetically testable.',
          languages: ['Python'],
          tech: this.project.tech,
        }),
        breadcrumb([
          { name: 'Home', path: '' },
          { name: 'Projects', path: 'projects' },
          { name: 'Research Copilot', path: 'projects/gamedev-copilot' },
        ]),
      ],
    });
  }
}
