import { ChangeDetectionStrategy, Component } from '@angular/core';
import { site } from '../../data/site';

@Component({
  selector: 'app-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  protected readonly site = site;
  protected readonly year = new Date().getFullYear();
}
