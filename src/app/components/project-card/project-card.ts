import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  afterNextRender,
  inject,
  input,
  signal,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { Project } from '../../data/projects';
import { Icon } from '../icon/icon';
import { TechChip } from '../tech-chip/tech-chip';

@Component({
  selector: 'app-project-card',
  imports: [RouterLink, Icon, TechChip],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { '[class.is-flipped]': 'flipped()' },
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss',
})
export class ProjectCard {
  readonly project = input.required<Project>();

  /** Tap-driven flip state (touch/no-hover only; desktop uses hover). */
  protected readonly flipped = signal(false);
  private readonly host = inject(ElementRef<HTMLElement>);

  /**
   * Force the card back to its front face. The carousel calls this on every
   * card when the active slide changes, so navigating never reveals a back
   * face left flipped from a previous card.
   */
  resetFlip(): void {
    this.flipped.set(false);
  }

  constructor() {
    afterNextRender(() => {
      // Only wire tap-to-flip where there is no hover (touch). On desktop the
      // CSS hover/focus-within flip stays in charge.
      if (typeof matchMedia === 'undefined' || !matchMedia('(hover: none)').matches) {
        return;
      }
      const el = this.host.nativeElement as HTMLElement;
      let sx = 0;
      let sy = 0;
      let moved = false;

      el.addEventListener(
        'pointerdown',
        (e: PointerEvent) => {
          sx = e.clientX;
          sy = e.clientY;
          moved = false;
        },
        { passive: true },
      );
      el.addEventListener(
        'pointermove',
        (e: PointerEvent) => {
          // A carousel swipe moves the finger; a tap barely moves.
          if (Math.abs(e.clientX - sx) > 10 || Math.abs(e.clientY - sy) > 10) {
            moved = true;
          }
        },
        { passive: true },
      );
      el.addEventListener('click', (e: MouseEvent) => {
        if (moved) return; // it was a swipe/drag, not a tap
        // Let links (title, repos, CTA) do their job instead of flipping.
        if ((e.target as HTMLElement).closest('a')) return;
        this.flipped.update((v) => !v);
      });
    });
  }
}
