import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  afterNextRender,
  inject,
  input,
  signal,
  viewChild,
  viewChildren,
} from '@angular/core';
import { ProjectCard } from '../project-card/project-card';
import { Icon } from '../icon/icon';
import { Project } from '../../data/projects';

/**
 * Responsive project-card container. On desktop it is the familiar multi-column
 * grid; below the md breakpoint it becomes a swipeable, snapping carousel with
 * a card-game feel — one card centered, neighbours dimmed/smaller, with dot
 * pagination and prev/next affordances.
 *
 * All interactivity (active-index tracking, programmatic scroll, keyboard) is
 * client-only via afterNextRender; the prerendered HTML renders every card, so
 * it stays SSG/SEO-safe. Swiping uses native CSS scroll-snap — no drag library.
 */
@Component({
  selector: 'app-card-carousel',
  imports: [ProjectCard, Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div
      class="cc"
      role="group"
      aria-roledescription="carousel"
      [attr.aria-label]="label()"
    >
      <div
        #viewport
        class="cc__viewport"
        tabindex="0"
        (keydown)="onKeydown($event)"
      >
        <ul class="cc__track">
          @for (p of projects(); track p.slug; let i = $index) {
            <li #item class="cc__item" [class.is-active]="i === active()">
              <app-project-card [project]="p" />
            </li>
          }
        </ul>
      </div>

      <div class="cc__controls">
        <button
          type="button"
          class="cc__arrow"
          (click)="prev()"
          [disabled]="active() === 0"
          aria-label="Previous project"
        >
          <app-icon name="chevron-right" class="flip" [size]="18" />
        </button>

        <div class="cc__dots" role="tablist" aria-label="Choose a project">
          @for (p of projects(); track p.slug; let i = $index) {
            <button
              type="button"
              class="cc__dot"
              [class.is-active]="i === active()"
              [attr.aria-current]="i === active() ? 'true' : null"
              [attr.aria-label]="'Show ' + p.title"
              (click)="goTo(i)"
            ></button>
          }
        </div>

        <button
          type="button"
          class="cc__arrow"
          (click)="next()"
          [disabled]="active() === projects().length - 1"
          aria-label="Next project"
        >
          <app-icon name="chevron-right" [size]="18" />
        </button>
      </div>
    </div>
  `,
  styleUrl: './card-carousel.scss',
})
export class CardCarousel {
  readonly projects = input.required<Project[]>();
  readonly label = input('Projects');

  private readonly viewportRef =
    viewChild.required<ElementRef<HTMLElement>>('viewport');
  private readonly itemRefs = viewChildren<ElementRef<HTMLElement>>('item');
  private readonly destroyRef = inject(DestroyRef);

  protected readonly active = signal(0);

  constructor() {
    afterNextRender(() => {
      const vp = this.viewportRef().nativeElement;
      let raf = 0;
      const onScroll = () => {
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(() => {
          const center = vp.scrollLeft + vp.clientWidth / 2;
          let best = 0;
          let bestD = Infinity;
          this.itemRefs().forEach((it, i) => {
            const el = it.nativeElement;
            const c = el.offsetLeft + el.offsetWidth / 2;
            const d = Math.abs(c - center);
            if (d < bestD) {
              bestD = d;
              best = i;
            }
          });
          this.active.set(best);
        });
      };
      vp.addEventListener('scroll', onScroll, { passive: true });
      this.destroyRef.onDestroy(() => {
        vp.removeEventListener('scroll', onScroll);
        cancelAnimationFrame(raf);
      });
    });
  }

  protected goTo(i: number): void {
    const items = this.itemRefs();
    const clamped = Math.max(0, Math.min(items.length - 1, i));
    const vp = this.viewportRef().nativeElement;
    const el = items[clamped]?.nativeElement;
    if (!el) return;
    const left = el.offsetLeft - (vp.clientWidth - el.offsetWidth) / 2;
    const reduced =
      typeof matchMedia !== 'undefined' &&
      matchMedia('(prefers-reduced-motion: reduce)').matches;
    vp.scrollTo({ left, behavior: reduced ? 'auto' : 'smooth' });
    this.active.set(clamped);
  }

  protected prev(): void {
    this.goTo(this.active() - 1);
  }

  protected next(): void {
    this.goTo(this.active() + 1);
  }

  protected onKeydown(e: KeyboardEvent): void {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      this.next();
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      this.prev();
    }
  }
}
