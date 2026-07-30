import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { Icon } from '../icon/icon';
import { CO_DEPTS, CO_MARKERS, CO_VIEW } from '../../data/colombia-map';
import { CO_NOTES } from '../../data/colombia-notes';

/** Footer map of Colombia: every department clickable for one line of its
 *  beauty; markers pin where I'm from (Camarones, La Guajira) and where I
 *  live (Barranquilla). San Andrés sits 260 km offshore, so it renders as a
 *  small inset circle instead of stretching the projection. */
@Component({
  selector: 'app-colombia-map',
  imports: [Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './colombia-map.html',
  styleUrl: './colombia-map.scss',
})
export class ColombiaMap {
  protected readonly view = CO_VIEW;
  protected readonly depts = CO_DEPTS;
  protected readonly markers = CO_MARKERS;

  protected readonly selected = signal<string | null>(null);

  protected readonly info = computed(() => {
    const id = this.selected();
    if (!id) return null;
    const dept = id === 'san-andres-y-providencia'
      ? { id, name: 'San Andrés y Providencia' }
      : this.depts.find((d) => d.id === id);
    const note = CO_NOTES[id];
    if (!dept || !note) return null;
    const marker = this.markers.find((m) => m.dept === id);
    return { name: dept.name, ...note, place: marker?.place };
  });

  protected pick(id: string): void {
    this.selected.set(this.selected() === id ? null : id);
  }
}
