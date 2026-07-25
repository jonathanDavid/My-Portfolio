import {
  Directive,
  ElementRef,
  afterNextRender,
  inject,
  input,
} from '@angular/core';

/**
 * Animated number counter that runs once when scrolled into view.
 * The element's prerendered text is the final value (good for SEO/no-JS);
 * in the browser it counts up from 0. Reduced-motion and no-IO both leave
 * the final value untouched.
 */
@Directive({ selector: '[appCountUp]' })
export class CountUpDirective {
  private readonly el = inject(ElementRef<HTMLElement>);

  /** Target value to count to. */
  readonly target = input.required<number>({ alias: 'appCountUp' });
  readonly prefix = input('');
  readonly suffix = input('');
  readonly duration = input(1600);

  constructor() {
    afterNextRender(() => {
      const node = this.el.nativeElement;
      const reduced =
        typeof matchMedia !== 'undefined' &&
        matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reduced || typeof IntersectionObserver === 'undefined') return;

      const render = (v: number) => {
        node.textContent = `${this.prefix()}${v}${this.suffix()}`;
      };
      render(0);

      const io = new IntersectionObserver(
        (entries) => {
          for (const e of entries) {
            if (!e.isIntersecting) continue;
            io.unobserve(node);
            this.run(render);
          }
        },
        { threshold: 0.4 },
      );
      io.observe(node);
    });
  }

  private run(render: (v: number) => void): void {
    const to = this.target();
    const dur = this.duration();
    const start = performance.now();
    const step = (now: number) => {
      const t = Math.min(1, (now - start) / dur);
      // easeOutExpo for a snappy, settling count
      const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
      render(Math.round(eased * to));
      if (t < 1) requestAnimationFrame(step);
      else render(to);
    };
    requestAnimationFrame(step);
  }
}
