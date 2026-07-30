import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../core/seo.service';
import { Icon } from '../../components/icon/icon';
import { TechChip } from '../../components/tech-chip/tech-chip';
import { RevealDirective } from '../../core/reveal.directive';
import { projectBySlug } from '../../data/projects';
import { breadcrumb, caseStudyCreativeWork } from '../../core/structured-data';

@Component({
  selector: 'app-project-closet',
  imports: [RouterLink, Icon, TechChip, RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './project-closet.html',
  styleUrl: './project-closet.scss',
})
export class ProjectCloset {
  protected readonly project = projectBySlug('theclo-set')!;

  constructor() {
    inject(SeoService).update({
      title: 'TheCloset — a 2019 app, revived',
      description:
        'Case study: reviving a 2019 React Native app — Expo SDK 30 to 57 in one jump, every dependency dead, rebuilt local-first with a dark-first design system, optional photos, and deliberate empty states.',
      path: 'projects/theclo-set',
      type: 'article',
      structuredData: [
        caseStudyCreativeWork({
          slug: 'theclo-set',
          name: 'TheCloset — a 2019 app, revived',
          headline: 'Seven years of platform drift, absorbed in one jump',
          description:
            'Expo SDK 30 → 57: react-navigation v2, native-base and Firebase v5 all dead — rebuilt as a fresh Expo 57 + TypeScript app, local-first AsyncStorage behind one reducer, hand-rolled month planner, dark-first design system with deliberate empty states.',
          languages: ['TypeScript'],
          tech: this.project.tech,
        }),
        breadcrumb([
          { name: 'Home', path: '' },
          { name: 'Projects', path: 'projects' },
          { name: 'TheCloset', path: 'projects/theclo-set' },
        ]),
      ],
    });
  }
}
