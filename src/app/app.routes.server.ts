import { RenderMode, ServerRoute } from '@angular/ssr';

/**
 * Static site generation: every route is prerendered to HTML at build time,
 * producing a fully static bundle deployable to GitHub Pages.
 */
export const serverRoutes: ServerRoute[] = [
  { path: '', renderMode: RenderMode.Prerender },
  { path: 'projects', renderMode: RenderMode.Prerender },
  { path: 'projects/digital-signage', renderMode: RenderMode.Prerender },
  { path: 'projects/retail-serverless', renderMode: RenderMode.Prerender },
  { path: 'projects/ga-allocation-services', renderMode: RenderMode.Prerender },
  { path: 'projects/colombia-conflict-atlas', renderMode: RenderMode.Prerender },
  { path: 'projects/art-pomodoro', renderMode: RenderMode.Prerender },
  { path: 'projects/route-graph-neo4j', renderMode: RenderMode.Prerender },
  { path: 'experience', renderMode: RenderMode.Prerender },
  { path: '**', renderMode: RenderMode.Prerender },
];
