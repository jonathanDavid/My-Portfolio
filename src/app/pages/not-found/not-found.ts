import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../core/seo.service';

@Component({
  selector: 'app-not-found',
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="section">
      <div class="container nf">
        <p class="eyebrow">404</p>
        <h1>Page not found</h1>
        <p class="lead">That route doesn't exist. Let's get you back on track.</p>
        <div class="nf__actions">
          <a class="btn btn--primary" routerLink="/">Back home</a>
          <a class="btn" routerLink="/projects">See projects</a>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .nf { text-align: center; padding-block: clamp(3rem, 10vw, 7rem); }
      .nf__actions { display: flex; gap: 0.7rem; justify-content: center; margin-top: 1.5rem; flex-wrap: wrap; }
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
