import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
} from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ICONS, IconName } from './icon-registry';

function esc(v: string): string {
  return v
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/**
 * Self-hosted, stroke-based UI icon (Lucide geometry inlined — no CDN, SSR-safe).
 * The complete <svg> markup is assembled as a string and set via [innerHTML] on
 * a plain <span> (an HTML element). Binding innerHTML directly on an <svg>
 * (namespaced) element throws NotYetImplemented in the prerender DOM, so we
 * avoid that entirely — icons still land in the static HTML for SEO / no-JS.
 */
@Component({
  selector: 'app-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<span class="i" [innerHTML]="html()"></span>`,
  styles: [
    `
      :host {
        display: inline-flex;
        line-height: 0;
      }
      .i {
        display: inline-flex;
        line-height: 0;
      }
      ::ng-deep svg {
        display: block;
        flex: none;
      }
    `,
  ],
})
export class Icon {
  private readonly sanitizer = inject(DomSanitizer);

  readonly name = input.required<IconName>();
  readonly size = input(20);
  readonly strokeWidth = input(2);
  readonly ariaLabel = input<string | null>(null);

  protected readonly html = computed<SafeHtml>(() => {
    const inner = ICONS[this.name()] ?? ICONS['sparkles'];
    const label = this.ariaLabel();
    const a11y = label
      ? `role="img" aria-label="${esc(label)}"`
      : 'aria-hidden="true"';
    const svg =
      `<svg width="${this.size()}" height="${this.size()}" viewBox="0 0 24 24" ` +
      `fill="none" stroke="currentColor" stroke-width="${this.strokeWidth()}" ` +
      `stroke-linecap="round" stroke-linejoin="round" ${a11y}>${inner}</svg>`;
    return this.sanitizer.bypassSecurityTrustHtml(svg);
  });
}
