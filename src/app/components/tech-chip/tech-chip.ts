import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
} from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Icon } from '../icon/icon';
import { techBadge } from '../../core/tech-icons';

/**
 * A skill/tech badge with its real brand logo (Simple Icons) in brand colour,
 * or a self-hosted Lucide glyph when no trademarked logo exists.
 * `bare` renders just the coloured logo (no chip frame) for dense logo rows.
 *
 * Brand SVGs are assembled as complete <svg> strings and bound via [innerHTML]
 * on a <span> (never directly on an <svg> element) so prerendering stays
 * SSR-safe and the logos are baked into the static HTML.
 */
@Component({
  selector: 'app-tech-chip',
  imports: [Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @let b = badge();
    <span class="tech" [class.tech--bare]="bare()" [attr.style]="styleAttr()">
      <span class="tech__logo">
        @if (b.brandPath) {
          <span class="tech__svg" [innerHTML]="logoHtml()"></span>
        } @else {
          <app-icon [name]="b.ui ?? 'sparkles'" [size]="size()" [strokeWidth]="1.9" />
        }
      </span>
      @if (!bare()) { <span class="tech__label">{{ b.label }}</span> }
    </span>
  `,
  styleUrl: './tech-chip.scss',
})
export class TechChip {
  private readonly sanitizer = inject(DomSanitizer);

  readonly name = input.required<string>();
  readonly size = input(15);
  readonly bare = input(false);

  protected readonly badge = computed(() => techBadge(this.name()));

  protected readonly brandColor = computed(() => {
    const b = this.badge();
    return b.brandPath && b.hex && !b.mono ? `#${b.hex}` : 'currentColor';
  });

  /**
   * Set the CSS custom property via the whole `style` attribute. Angular's
   * `[style.--brand]` binding calls `style.setProperty`, which the SSR DOM
   * (Domino) does not implement for custom properties — so we render the
   * attribute string, which prerenders cleanly and the browser parses.
   */
  protected readonly styleAttr = computed(() => `--brand:${this.brandColor()}`);

  protected readonly logoHtml = computed<SafeHtml>(() => {
    const b = this.badge();
    if (!b.brandPath) return this.sanitizer.bypassSecurityTrustHtml('');
    const svg =
      `<svg viewBox="0 0 24 24" width="${this.size()}" height="${this.size()}" ` +
      `aria-hidden="true"><path fill="currentColor" d="${b.brandPath}"/></svg>`;
    return this.sanitizer.bypassSecurityTrustHtml(svg);
  });
}
