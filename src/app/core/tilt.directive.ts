import {
  Directive,
  ElementRef,
  afterNextRender,
  inject,
  input,
} from '@angular/core';

/**
 * Subtle pointer-driven 3D tilt. Browser-only, pointer-only (skipped on touch
 * and under reduced motion). Writes --rx/--ry custom properties consumed by the
 * `.tilt` CSS class; leaves the element untouched otherwise, so it is SSR-safe.
 */
@Directive({
  selector: '[appTilt]',
  host: { class: 'tilt' },
})
export class TiltDirective {
  private readonly el = inject(ElementRef<HTMLElement>);
  /** Max rotation in degrees. */
  readonly max = input(6, { alias: 'tiltMax' });

  constructor() {
    afterNextRender(() => {
      const node = this.el.nativeElement;
      const reduced = matchMedia?.('(prefers-reduced-motion: reduce)').matches;
      const fine = matchMedia?.('(pointer: fine)').matches;
      if (reduced || !fine) return;

      const max = this.max();
      const onMove = (e: PointerEvent) => {
        const r = node.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        node.style.setProperty('--ry', `${px * max}deg`);
        node.style.setProperty('--rx', `${-py * max}deg`);
        node.style.setProperty('--ty', '-4px');
      };
      const reset = () => {
        node.style.setProperty('--rx', '0deg');
        node.style.setProperty('--ry', '0deg');
        node.style.setProperty('--ty', '0');
      };
      node.addEventListener('pointermove', onMove);
      node.addEventListener('pointerleave', reset);
    });
  }
}
