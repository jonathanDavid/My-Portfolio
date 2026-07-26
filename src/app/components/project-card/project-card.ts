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
  host: { '[class.is-flipped]': 'flipped()', '[class.is-active]': 'active()' },
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss',
})
export class ProjectCard {
  readonly project = input.required<Project>();

  /** Whether this card is the centered/active one in the mobile carousel.
   *  Drives the glow indicator on touch so it follows swipes, rather than a
   *  stuck :focus-within (see project-card.scss). Ignored on desktop grid. */
  readonly active = input(false);

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

  /** Explicit "show stack & links" control on the front face. */
  protected flipToBack(): void {
    this.flipped.set(true);
  }

  /** Explicit "back to summary" control on the back face. */
  protected flipToFront(): void {
    this.flipped.set(false);
  }

  constructor() {
    afterNextRender(() => {
      // Only wire tap-anywhere-to-flip where there is no hover (touch). On
      // desktop the CSS hover/focus-within flip stays in charge. The explicit
      // flip buttons in the template work on every device regardless.
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
      // Bonus tap-anywhere toggle. Fires on pointerup (more reliable on touch
      // than click after a 3D transform). Interactive targets — the flip
      // buttons and the repo/case-study links — handle their own taps, so we
      // skip them here and never double-fire or swallow a navigation.
      el.addEventListener('pointerup', (e: PointerEvent) => {
        if (moved) return; // it was a swipe/drag, not a tap
        if ((e.target as HTMLElement).closest('a, button')) return;
        this.flipped.update((v) => !v);
      });
    });
  }
}
