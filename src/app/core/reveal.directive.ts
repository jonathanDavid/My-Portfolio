import {
  Directive,
  ElementRef,
  afterNextRender,
  inject,
  input,
} from '@angular/core';

/**
 * Scroll-reveal. The hidden start state is applied purely in CSS, gated by
 * `html.reveal-ready` (set before first paint only when JS is present and the
 * user has not requested reduced motion). This directive just toggles `.in`
 * via IntersectionObserver — so prerendered HTML stays fully visible for
 * crawlers, and there is no flash-of-hidden-content.
 */
@Directive({
  selector: '[appReveal]',
  host: { '[attr.data-reveal]': 'variant()' },
})
export class RevealDirective {
  private readonly el = inject(ElementRef<HTMLElement>);

  /** 'up' (default) | 'left' | 'right' | 'scale' */
  readonly variant = input<'up' | 'left' | 'right' | 'scale'>('up', {
    alias: 'appReveal',
  });
  /** Stagger delay in ms, applied as a CSS custom property. */
  readonly delay = input(0, { alias: 'revealDelay' });

  constructor() {
    afterNextRender(() => {
      const node = this.el.nativeElement;
      const ready = document.documentElement.classList.contains('reveal-ready');
      if (!ready || typeof IntersectionObserver === 'undefined') {
        node.classList.add('in');
        return;
      }
      if (this.delay()) node.style.setProperty('--reveal-delay', `${this.delay()}ms`);

      const io = new IntersectionObserver(
        (entries) => {
          for (const e of entries) {
            if (e.isIntersecting) {
              node.classList.add('in');
              io.unobserve(node);
            }
          }
        },
        { threshold: 0.14, rootMargin: '0px 0px -8% 0px' },
      );
      io.observe(node);
    });
  }
}
