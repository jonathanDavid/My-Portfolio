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
