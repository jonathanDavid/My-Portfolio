import type { IconName } from '../components/icon/icon-registry';

export interface RepoLink {
  label: string;
  href: string;
  /** Surface icon for the repo. */
  icon?: IconName;
}

export interface Project {
  /** URL slug; used for the case-study route when `caseStudy` is true. */
  slug: string;
  title: string;
  tagline: string;
  /** Short blurb used on cards. */
  summary: string;
  tech: string[];
  status: 'shipped' | 'in-progress';
  featured: boolean;
  /** When true, has a dedicated /projects/:slug case study page. */
  caseStudy?: boolean;
  year: string;
  repos?: RepoLink[];
  /** External demo/live link, if any. */
  link?: RepoLink;
  /** Representative UI icon for the project card (fallback). */
  icon?: IconName;
  /** The real web-app's own brand icon (favicon), shown on the card/hero when
   *  the project has a live app. Path under `public/`. Falls back to `icon`. */
  appIcon?: string;
}

export const projects: Project[] = [
  {
    slug: 'digital-signage',
    title: 'Digital Signage Platform',
    tagline: 'A four-surface, real-time content platform for Smart TVs',
    summary:
      'End-to-end digital signage: a web control plane, a NestJS API, a Tizen/SSSP Smart TV player, and Terraform-managed AWS infrastructure — all kept in sync over WebSockets.',
    tech: [
      'NestJS',
      'React',
      'Tizen / SSSP',
      'WebSockets',
      'Prisma',
      'PostgreSQL',
      'Terraform',
      'AWS ECS',
    ],
    status: 'shipped',
    featured: true,
    caseStudy: true,
    year: '2022–2025',
    icon: 'tv',
    appIcon: 'assets/app-icons/signage.svg',
    repos: [
      { label: 'signage-web', href: 'https://github.com/jonathanDavid/signage-web', icon: 'panels' },
      { label: 'signage-api', href: 'https://github.com/jonathanDavid/signage-api', icon: 'server' },
      { label: 'signage-tv', href: 'https://github.com/jonathanDavid/signage-tv', icon: 'tv' },
      { label: 'signage-infra', href: 'https://github.com/jonathanDavid/signage-infra', icon: 'cloud' },
    ],
  },
  {
    slug: 'retail-serverless',
    title: 'Retail Serverless Backend',
    tagline: '20+ Lambdas and 100+ endpoints powering enterprise retail',
    summary:
      'Production AWS serverless backend serving retail customers across LATAM (Casaideas, Privilege, Komax, EFE). I rebuilt its core as an open-source, event-driven demo: API Gateway → Lambda → SQS → DynamoDB → SNS, with a live order dashboard and Terraform-managed infrastructure.',
    tech: ['AWS Lambda', 'API Gateway', 'SQS', 'SNS', 'DynamoDB', 'Terraform', 'esbuild', 'TypeScript'],
    status: 'shipped',
    featured: true,
    caseStudy: true,
    year: '2021–2022',
    icon: 'cloud',
    appIcon: 'assets/app-icons/retail.svg',
    link: { label: 'Try it live', href: 'https://jonathandavid.github.io/retail-serverless-web/', icon: 'external-link' },
    repos: [
      { label: 'retail-serverless-web', href: 'https://github.com/jonathanDavid/retail-serverless-web', icon: 'gauge' },
      { label: 'retail-serverless-api', href: 'https://github.com/jonathanDavid/retail-serverless-api', icon: 'server' },
      { label: 'retail-serverless-infra', href: 'https://github.com/jonathanDavid/retail-serverless-infra', icon: 'cloud' },
    ],
  },
  {
    slug: 'ga-allocation-services',
    title: 'Genetic-Algorithm Allocation Services',
    tagline: 'ML that optimizes store-item allocation — now interactive',
    summary:
      'FastAPI genetic-algorithm services that optimize how items are allocated across stores. I rebuilt them as an interactive visualizer: a numpy GA that streams every generation over WebSocket to an animated 60fps frontend where you tune the parameters and watch the population converge.',
    tech: ['FastAPI', 'Python', 'NumPy', 'Genetic Algorithms', 'WebSockets', 'Canvas', 'React'],
    status: 'shipped',
    featured: true,
    caseStudy: true,
    year: '2019–2021',
    icon: 'activity',
    appIcon: 'assets/app-icons/genetic.svg',
    link: { label: 'Try it live', href: 'https://jonathandavid.github.io/genetic-visualizer-web/', icon: 'external-link' },
    repos: [
      { label: 'genetic-visualizer-api', href: 'https://github.com/jonathanDavid/genetic-visualizer-api', icon: 'server' },
      { label: 'genetic-visualizer-web', href: 'https://github.com/jonathanDavid/genetic-visualizer-web', icon: 'sparkles' },
    ],
  },
  {
    slug: 'colombia-conflict-atlas',
    title: 'Colombia Conflict & Security Atlas',
    tagline: 'A timeline-first map of Colombia built from real public data',
    summary:
      'Scrub 1947→2026 across all 1,122 Colombian municipalities and watch nine real data layers evolve: five police crime datasets, three CNMH armed-conflict datasets with perpetrator attribution, and UNODC coca cultivation — with per-100k normalization and a 2016 peace-accord marker. A build-time ETL joins every source to DANE geometry by DIVIPOLA; a key-less MapLibre GL front end animates it. Bilingual ES/EN.',
    tech: ['MapLibre GL', 'React', 'TypeScript', 'Vite', 'ETL / Socrata', 'TopoJSON', 'Zustand', 'Vitest'],
    status: 'shipped',
    featured: true,
    caseStudy: true,
    year: '2026',
    icon: 'map-pin',
    appIcon: 'assets/app-icons/atlas.svg',
    repos: [
      { label: 'colombia-conflict-atlas', href: 'https://github.com/jonathanDavid/colombia-conflict-atlas', icon: 'map-pin' },
    ],
    link: { label: 'Try it live', href: 'https://jonathandavid.github.io/colombia-conflict-atlas/' },
  },
  {
    slug: 'art-pomodoro',
    title: 'Art Pomodoro',
    tagline: 'A focus timer where a masterpiece reveals itself as you work',
    summary:
      'Each focus block starts with a public-domain painting hidden; an always-connected organic reveal (ink-blot propagation via Dijkstra arrival fields) uncovers it in lockstep with real elapsed time, finishing exactly at 00:00. The museum frame is the progress bar — it draws itself in brass around the artwork. Art streams key-less from The Met and Art Institute of Chicago open APIs with bundled fallbacks; breaks keep your finished piece as the reward.',
    tech: ['React', 'TypeScript', 'PWA', 'Canvas 2D', 'Web Audio', 'Met / AIC APIs', 'Vitest'],
    status: 'shipped',
    featured: true,
    caseStudy: true,
    year: '2026',
    icon: 'sparkles',
    appIcon: 'assets/app-icons/pomodoro.svg',
    link: { label: 'Try it live', href: 'https://jonathandavid.github.io/art-pomodoro/', icon: 'external-link' },
    repos: [
      { label: 'art-pomodoro', href: 'https://github.com/jonathanDavid/art-pomodoro', icon: 'sparkles' },
    ],
  },
  {
    slug: 'live-dashboard-go',
    title: 'Go + WebSocket Live Dashboard',
    tagline: 'A low-latency metrics dashboard in Go',
    summary:
      'A real-time metrics dashboard: a Go WebSocket hub fanning out live updates to an Angular front end. Exploring back-pressure, reconnection and clean concurrency patterns in Go.',
    tech: ['Go', 'WebSockets', 'Angular', 'Docker'],
    status: 'in-progress',
    featured: false,
    year: '2026',
    icon: 'gauge',
  },
  {
    slug: 'route-graph-neo4j',
    title: 'Colombia Route Graph',
    tagline: 'Shortest paths over real highways, with the Cypher always visible',
    summary:
      'The Colombian intercity road network as a Neo4j property graph: 56 real cities (DANE codes), 69 curated Ruta Nacional edges enriched with OSRM driving distances and real road polylines. The explorer answers fewest-legs / shortest-km / fastest-time with two engines — a key-less client-side Dijkstra and live Neo4j over bolt-in-WebSocket straight from the browser — pinned to identical answers. The roadless Amazon capitals are shown honestly: no road exists, and the app says so.',
    tech: ['Neo4j', 'Cypher', 'APOC', 'MapLibre GL', 'React', 'TypeScript', 'OSRM', 'Docker', 'Vitest'],
    status: 'shipped',
    featured: true,
    caseStudy: true,
    year: '2026',
    icon: 'route',
    appIcon: 'assets/app-icons/routegraph.svg',
    link: { label: 'Try it live', href: 'https://jonathandavid.github.io/routegraph-web/', icon: 'external-link' },
    repos: [
      { label: 'routegraph-db', href: 'https://github.com/jonathanDavid/routegraph-db', icon: 'server' },
      { label: 'routegraph-web', href: 'https://github.com/jonathanDavid/routegraph-web', icon: 'route' },
    ],
  },
  {
    slug: 'road-trip-agent',
    title: 'AI Road-Trip Planner Agent',
    tagline: 'A tool-using LLM agent that plans trips',
    summary:
      'An autonomous planning agent that composes routing, weather and points-of-interest tools to build a road-trip itinerary — an experiment in reliable tool orchestration and guardrails.',
    tech: ['TypeScript', 'LLM Agents', 'Tool Use', 'Node.js'],
    status: 'in-progress',
    featured: false,
    year: '2026',
    icon: 'bot',
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const inProgressProjects = projects.filter((p) => p.status === 'in-progress');

export function projectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
