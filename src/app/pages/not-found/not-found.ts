import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../core/seo.service';
import { Icon } from '../../components/icon/icon';

@Component({
  selector: 'app-not-found',
  imports: [RouterLink, Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="section">
      <div class="container nf">
        <span class="nf__icon"><app-icon name="radio" [size]="36" /></span>
        <p class="nf__code gradient-text">404</p>
        <h1 class="nf__title">Page not found</h1>
        <p class="lead">That route doesn't exist. Let's get you back on track.</p>
        <div class="nf__actions">
          <a class="btn btn--primary" routerLink="/">
            <app-icon name="arrow-right" [size]="18" /> Back home
          </a>
          <a class="btn btn--ghost" routerLink="/projects">
            <app-icon name="boxes" [size]="18" /> See projects
          </a>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .nf {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        padding-block: clamp(3rem, 10vw, 7rem);
      }
      .nf__icon {
        display: inline-grid;
        place-items: center;
        width: 74px;
        height: 74px;
        border-radius: 22px;
        color: var(--accent-3);
        background: color-mix(in srgb, var(--accent-3) 12%, transparent);
        border: 1px solid color-mix(in srgb, var(--accent-3) 26%, var(--border));
        box-shadow: 0 0 28px color-mix(in srgb, var(--accent-3) 26%, transparent);
        margin-bottom: 1.4rem;
      }
      .nf__code {
        font-size: clamp(4.5rem, 18vw, 9rem);
        font-weight: 800;
        letter-spacing: -0.04em;
        line-height: 0.9;
        margin: 0 0 0.4rem;
        font-feature-settings: 'tnum';
      }
      .nf__title { margin-bottom: 0.6rem; }
      .lead { margin-inline: auto; }
      .nf__actions { display: flex; gap: 0.7rem; justify-content: center; margin-top: 1.6rem; flex-wrap: wrap; }
    `,
  ],
})
export class NotFound {
  constructor() {
    inject(SeoService).update({
      title: 'Page not found',
      description: 'The page you were looking for does not exist.',
      path: '404',
    });
  }
}
