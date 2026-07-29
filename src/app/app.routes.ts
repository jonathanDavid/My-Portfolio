import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
    title: 'Jonathan Ilias · Senior Full Stack & Cloud Engineer',
  },
  {
    path: 'projects',
    loadComponent: () => import('./pages/projects/projects').then((m) => m.Projects),
    title: 'Projects · Jonathan Ilias',
  },
  {
    path: 'projects/digital-signage',
    loadComponent: () =>
      import('./pages/project-signage/project-signage').then((m) => m.ProjectSignage),
    title: 'Digital Signage Platform · Jonathan Ilias',
  },
  {
    path: 'projects/retail-serverless',
    loadComponent: () =>
      import('./pages/project-retail/project-retail').then((m) => m.ProjectRetail),
    title: 'Retail Serverless Backend · Jonathan Ilias',
  },
  {
    path: 'projects/ga-allocation-services',
    loadComponent: () =>
      import('./pages/project-genetic/project-genetic').then((m) => m.ProjectGenetic),
    title: 'Genetic-Algorithm Visualizer · Jonathan Ilias',
  },
  {
    path: 'projects/colombia-conflict-atlas',
    loadComponent: () =>
      import('./pages/project-atlas/project-atlas').then((m) => m.ProjectAtlas),
    title: 'Colombia Conflict & Security Atlas · Jonathan Ilias',
  },
  {
    path: 'projects/art-pomodoro',
    loadComponent: () =>
      import('./pages/project-pomodoro/project-pomodoro').then((m) => m.ProjectPomodoro),
    title: 'Art Pomodoro · Jonathan Ilias',
  },
  {
    path: 'projects/route-graph-neo4j',
    loadComponent: () =>
      import('./pages/project-routegraph/project-routegraph').then((m) => m.ProjectRoutegraph),
    title: 'Colombia Route Graph · Jonathan Ilias',
  },
  {
    path: 'projects/gamedev-copilot',
    loadComponent: () =>
      import('./pages/project-copilot/project-copilot').then((m) => m.ProjectCopilot),
    title: 'Game-Dev Research Copilot · Jonathan Ilias',
  },
  {
    path: 'projects/vision-copilot',
    loadComponent: () =>
      import('./pages/project-vision/project-vision').then((m) => m.ProjectVision),
    title: 'Vision Copilot · Jonathan Ilias',
  },
  {
    path: 'experience',
    loadComponent: () => import('./pages/experience/experience').then((m) => m.Experience),
    title: 'Experience · Jonathan Ilias',
  },
  {
    path: '**',
    loadComponent: () => import('./pages/not-found/not-found').then((m) => m.NotFound),
    title: 'Not found · Jonathan Ilias',
  },
];
