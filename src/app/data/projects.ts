export interface RepoLink {
  label: string;
  href: string;
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
    repos: [
      { label: 'signage-web', href: 'https://github.com/jonathanDavid/signage-web' },
      { label: 'signage-api', href: 'https://github.com/jonathanDavid/signage-api' },
      { label: 'signage-tv', href: 'https://github.com/jonathanDavid/signage-tv' },
      { label: 'signage-infra', href: 'https://github.com/jonathanDavid/signage-infra' },
    ],
  },
  {
    slug: 'retail-serverless',
    title: 'Retail Serverless Backend',
    tagline: '20+ Lambdas and 100+ endpoints powering enterprise retail',
    summary:
      'Production AWS serverless backend serving retail customers across LATAM (Casaideas, Privilege, Komax, EFE). API Gateway + Lambda + Node.js, with esbuild-optimized deploy packages.',
    tech: ['AWS Lambda', 'API Gateway', 'Node.js', 'esbuild', 'MongoDB', 'Neo4j'],
    status: 'shipped',
    featured: true,
    year: '2021–2022',
  },
  {
    slug: 'ga-allocation-services',
    title: 'Genetic-Algorithm Allocation Services',
    tagline: 'ML services that optimize store-item allocation',
    summary:
      'FastAPI services exposing genetic-algorithm models that optimize how items are allocated across stores, backed by Neo4j graph data and integrated through Node-RED automation.',
    tech: ['FastAPI', 'Python', 'Genetic Algorithms', 'Neo4j', 'Node-RED'],
    status: 'shipped',
    featured: true,
    year: '2019–2021',
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
  },
  {
    slug: 'route-graph-neo4j',
    title: 'Neo4j Route-Graph App',
    tagline: 'Shortest-path routing over a property graph',
    summary:
      'A routing app modelling a road network as a Neo4j property graph, with Cypher-driven shortest-path queries exposed through a small NestJS API and an interactive map UI.',
    tech: ['Neo4j', 'Cypher', 'NestJS', 'TypeScript'],
    status: 'in-progress',
    featured: false,
    year: '2026',
  },
  {
    slug: 'event-driven-pipeline',
    title: 'Event-Driven Serverless Pipeline',
    tagline: 'SNS/SQS fan-out with Terraform-managed infra',
    summary:
      'An event-driven ingestion pipeline: API Gateway to Lambda to SNS/SQS to downstream consumers, fully described in Terraform. A sandbox for idempotency, DLQs and replay.',
    tech: ['AWS Lambda', 'SNS', 'SQS', 'Terraform', 'TypeScript'],
    status: 'in-progress',
    featured: false,
    year: '2026',
  },
  {
    slug: 'ga-visualizer',
    title: 'Genetic-Algorithm Visualizer',
    tagline: 'Watch a genetic algorithm converge in the browser',
    summary:
      'An interactive visualizer that animates selection, crossover and mutation generation by generation — turning the allocation work from Xpectrum into something you can watch and tune.',
    tech: ['TypeScript', 'Canvas', 'Angular', 'Web Workers'],
    status: 'in-progress',
    featured: false,
    year: '2026',
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
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const inProgressProjects = projects.filter((p) => p.status === 'in-progress');

export function projectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
