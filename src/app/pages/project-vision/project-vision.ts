import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../core/seo.service';
import { Icon } from '../../components/icon/icon';
import { TechChip } from '../../components/tech-chip/tech-chip';
import { RevealDirective } from '../../core/reveal.directive';
import { projectBySlug } from '../../data/projects';
import { breadcrumb, caseStudyCreativeWork } from '../../core/structured-data';

@Component({
  selector: 'app-project-vision',
  imports: [RouterLink, Icon, TechChip, RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './project-vision.html',
  styleUrl: './project-vision.scss',
})
export class ProjectVision {
  protected readonly project = projectBySlug('vision-copilot')!;

  constructor() {
    inject(SeoService).update({
      title: 'Vision Copilot',
      description:
        'Case study: a local image-understanding agent — LLaVA describes, a tiled YOLO scan silently grounds every count (IoU+IOS merging for large images), and the code states the numbers because a 7B repeats them unreliably. Testable in under a second without any model.',
      path: 'projects/vision-copilot',
      type: 'article',
      structuredData: [
        caseStudyCreativeWork({
          slug: 'vision-copilot',
          name: 'Vision Copilot',
          headline: 'Detector counts, model narrates — an honest division of labor',
          description:
            'LangGraph routes describe vs inspect; tiled full-resolution YOLO grounds LLaVA answers; deterministic counts from code; IoU+IOS NMS merges tile-cut fragments. All local via Ollama; 14 hermetic tests.',
          languages: ['Python'],
          tech: this.project.tech,
        }),
        breadcrumb([
          { name: 'Home', path: '' },
          { name: 'Projects', path: 'projects' },
          { name: 'Vision Copilot', path: 'projects/vision-copilot' },
        ]),
      ],
    });
  }
}
