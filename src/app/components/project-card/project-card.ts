import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Project } from '../../data/projects';
import { Icon } from '../icon/icon';
import { TechChip } from '../tech-chip/tech-chip';

@Component({
  selector: 'app-project-card',
  imports: [RouterLink, Icon, TechChip],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss',
})
export class ProjectCard {
  readonly project = input.required<Project>();
}
