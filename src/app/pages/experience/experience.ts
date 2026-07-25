import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SeoService } from '../../core/seo.service';
import { Icon } from '../../components/icon/icon';
import { TechChip } from '../../components/tech-chip/tech-chip';
import { RevealDirective } from '../../core/reveal.directive';
import { experience } from '../../data/experience';
import { timeline } from '../../data/timeline';
import { site } from '../../data/site';
import { breadcrumb } from '../../core/structured-data';

@Component({
  selector: 'app-experience',
  imports: [Icon, TechChip, RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience {
  protected readonly roles = experience;
  protected readonly timeline = timeline;
  protected readonly site = site;

  constructor() {
    inject(SeoService).update({
      title: 'Experience',
      description:
        '7+ years across UDT/Havrion, Omnix IA and Xpectrum — Smart TV apps, real-time streaming, serverless AWS backends, Terraform infrastructure and ML services.',
      path: 'experience',
      structuredData: [
        breadcrumb([
          { name: 'Home', path: '' },
          { name: 'Experience', path: 'experience' },
        ]),
      ],
    });
  }
}
