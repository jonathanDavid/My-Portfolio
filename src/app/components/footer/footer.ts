import { ChangeDetectionStrategy, Component } from '@angular/core';
import { site } from '../../data/site';
import { Icon } from '../icon/icon';
import { TechChip } from '../tech-chip/tech-chip';
import { RevealDirective } from '../../core/reveal.directive';
import { ColombiaMap } from '../colombia-map/colombia-map';

@Component({
  selector: 'app-footer',
  imports: [Icon, TechChip, RevealDirective, ColombiaMap],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  protected readonly site = site;
  protected readonly year = new Date().getFullYear();
}
