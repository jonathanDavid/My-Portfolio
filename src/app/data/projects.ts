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
  /** Hosted API documentation (Swagger UI), if the project has an API. */
  docs?: RepoLink;
  /** Collage size on the all-projects grid: lg spans 2 columns with a longer
   *  summary, sm keeps a short one. Default is a regular 1-column card. */
  size?: 'lg' | 'sm';
  /** Screenshot shown on the collage card — always on lg cards, revealed on
   *  hover for the rest. */
  preview?: string;
  /** Representative UI icon for the project card (fallback). */
  icon?: IconName;
  /** The real web-app's own brand icon (favicon), shown on the card/hero when
   *  the project has a live app. Path under `public/`. Falls back to `icon`. */
  appIcon?: string;
}

export const projects: Project[] = [
  {
    slug: 'digital-signage',
    docs: { label: 'API docs (Swagger)', href: 'https://jonathandavid.github.io/signage-api/', icon: 'globe' },
    preview: 'assets/screenshots/editor.png',
    size: 'lg',
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
    docs: { label: 'API docs (Swagger)', href: 'https://jonathandavid.github.io/retail-serverless-api/', icon: 'globe' },
    preview: 'assets/case/retail-product.png',
    title: 'Retail Serverless Backend',
    tagline: '20+ Lambdas and 100+ endpoints powering enterprise retail',
    summary:
      'Production AWS serverless backend serving retail customers across LATAM (Casaideas, Privilege, Komax, EFE). I rebuilt its core as an open-source, event-driven demo: API Gateway → Lambda → SQS → DynamoDB → SNS, with a live order dashboard and Terraform-managed infrastructure.',
    tech: ['AWS Lambda', 'API Gateway', 'SQS', 'SNS', 'DynamoDB', 'Terraform', 'esbuild', 'TypeScript'],
    status: 'shipped',
    featured: false,
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
    docs: { label: 'API docs (Swagger)', href: 'https://jonathandavid.github.io/genetic-visualizer-api/', icon: 'globe' },
    preview: 'assets/case/genetic-visualizer.png',
    title: 'Genetic-Algorithm Allocation Services',
    tagline: 'ML that optimizes store-item allocation — now interactive',
    summary:
      'FastAPI genetic-algorithm services that optimize how items are allocated across stores. I rebuilt them as an interactive visualizer: a numpy GA that streams every generation over WebSocket to an animated 60fps frontend where you tune the parameters and watch the population converge.',
    tech: ['FastAPI', 'Python', 'NumPy', 'Genetic Algorithms', 'WebSockets', 'Canvas', 'React'],
    status: 'shipped',
    featured: false,
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
    preview: 'assets/case/atlas-conflict-2002.png',
    size: 'lg',
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
    preview: 'assets/case/pomodoro-reveal.png',
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
    slug: 'gamedev-copilot',
    preview: 'assets/case/copilot-docs.png',
    size: 'lg',
    title: 'Research Copilot',
    tagline: 'A local research copilot for any subject — the domain is a swappable profile',
    summary:
      'Tell it "be an expert in Svelte" and an agent searches the web, finds the official docs, crawls and indexes them, then answers your questions from that corpus with citations — any subject, switchable mid-conversation. A LangGraph router decides docs / video / chat, a retriever grounds answers in the subject\'s own Chroma index, a key-less YouTube tool finds tutorials, and layered memory keeps decisions across sessions. Every LLM call runs locally on Ollama + Mistral — private, free, no cloud API. 20 hermetic tests run the entire graph against deterministic fakes: discovery, crawling, grounding, and that a custom subject leaves no residue of the demo domain.',
    tech: ['LangGraph', 'Python', 'RAG', 'ChromaDB', 'Ollama', 'Mistral 7B', 'pytest'],
    status: 'shipped',
    featured: true,
    caseStudy: true,
    year: '2026',
    icon: 'bot',
    appIcon: 'assets/app-icons/copilot.svg',
    repos: [
      { label: 'research-copilot', href: 'https://github.com/jonathanDavid/research-copilot', icon: 'bot' },
    ],
  },
  {
    slug: 'vision-copilot',
    size: 'lg',
    preview: 'assets/case/vision-session.png',
    title: 'Vision Copilot',
    tagline: 'Talk to an image — descriptions grounded by hybrid tiled detection, 100% local',
    summary:
      'Load a photo and a full 7-section report runs automatically — scene, people, objects, text, relationships, mood, oddities — led by a deterministic VERIFIED SCAN line; then chat to drill down, or --once for image-in → report-out pipelines. LLaVA narrates while a hybrid YOLO11 scan grounds every count (full-image anchors + full-resolution tiles, so seam-cut fragments never become phantom people). The code states the numbers — a 7B repeats them unreliably. 17 hermetic tests, no models needed.',
    tech: ['LangGraph', 'Python', 'YOLO11', 'LLaVA', 'Ollama', 'Pillow', 'pytest'],
    status: 'shipped',
    featured: true,
    caseStudy: true,
    year: '2026',
    icon: 'monitor',
    appIcon: 'assets/app-icons/vision.svg',
    repos: [
      { label: 'vision-copilot', href: 'https://github.com/jonathanDavid/vision-copilot', icon: 'monitor' },
    ],
  },
  {
    slug: 'theclo-set',
    appIcon: 'assets/app-icons/closet.svg',
    preview: 'assets/case/closet-outfits.png',
    size: 'sm',
    title: 'TheCloset — 2019 app, revived',
    tagline: 'Expo SDK 30 → 57 in one jump: my oldest side project, redesigned',
    summary:
      'A digital closet: garments with photos or color swatches, outfits composed from them, laundry tracking, and a hand-rolled month-grid planner. The 2019 original (Expo SDK 30, native-base, react-navigation 2, Firebase) had zero surviving dependencies — the revival is a fresh Expo 57 + TypeScript + React Navigation 7 app, rebuilt local-first (AsyncStorage behind one reducer, no accounts or keys) with a dark-first design system, optional photos, and deliberate empty states. Before/after screenshots in the repo tell the seven-year story.',
    tech: ['React Native', 'Expo', 'TypeScript', 'React Navigation', 'AsyncStorage'],
    status: 'shipped',
    featured: false,
    caseStudy: true,
    year: '2018–2026',
    icon: 'layers',
    repos: [
      { label: 'Theclo-set', href: 'https://github.com/jonathanDavid/Theclo-set', icon: 'repo' },
    ],
  },
  {
    slug: 'bomberman',
    appIcon: 'assets/app-icons/bomberman.svg',
    preview: 'https://user-images.githubusercontent.com/17170498/117526895-a8130380-af8d-11eb-830f-32a8d7e214be.png',
    size: 'sm',
    title: 'Bomberman — Java, no engine',
    tagline: 'University game: hand-rolled render loop, sprites, audio and pathfinding',
    summary:
      'A complete Bomberman in plain Java (AWT Canvas) with no engine and no libraries: layered rendering, a sprite animation framework, WAV audio, menus, and enemies that hunt the player by modeling the board as a graph and searching for a route. Levels are a documented text format — edit Niveles.txt and the game picks it up, data-driven design before I knew its name. The code is intentionally frozen as a time capsule; the README is the design doc.',
    tech: ['Java', 'AWT', 'Ant', 'Graphs'],
    status: 'shipped',
    featured: false,
    caseStudy: true,
    year: '2021',
    icon: 'gamepad',
    repos: [
      { label: 'Bomberman', href: 'https://github.com/jonathanDavid/Bomberman', icon: 'gamepad' },
    ],
  },
  {
    slug: 'mongo-showdown',
    preview: 'assets/case/mongo-showdown.png',
    title: 'Mongo Showdown',
    tagline: 'Mongoose vs the native driver — one contract, fairness-tested, measured',
    summary:
      'The same retail domain modeled twice behind one interface. A fairness suite proves both implementations return identical results — including multi-document transaction rollback — and only then does the benchmark time them: native is 1.3–1.5× faster where the driver does the work (bulk casting, reads, updates) but just 1.12× where the server does (aggregation). The comparison site shows the recorded numbers next to the verbatim code both sides ran, with a verdict per operation and honest caveats.',
    tech: ['MongoDB', 'Mongoose', 'TypeScript', 'Docker', 'Vitest', 'React'],
    status: 'shipped',
    featured: false,
    caseStudy: true,
    year: '2026',
    icon: 'database',
    link: { label: 'Try it live', href: 'https://jonathandavid.github.io/mongo-showdown-web/', icon: 'external-link' },
    repos: [
      { label: 'mongo-showdown-api', href: 'https://github.com/jonathanDavid/mongo-showdown-api', icon: 'database' },
      { label: 'mongo-showdown-web', href: 'https://github.com/jonathanDavid/mongo-showdown-web', icon: 'gauge' },
    ],
  },
  {
    slug: 'goflow',
    preview: 'assets/case/goflow-dashboard.png',
    title: 'goflow — Go L7 Load Balancer',
    tagline: 'Health checks, safe retries and a live traffic dashboard — zero dependencies',
    summary:
      'An L7 load balancer in pure Go stdlib: round-robin and least-connections over atomically-stated backends, active health checks with hysteresis (three fails eject, two passes readmit), retries that never replay a consumed body or a real 5xx, and per-backend p50/p95 from a latency ring buffer. The dashboard is embedded with go:embed and streamed over Server-Sent Events. One command — go run . demo — spins up three synthetic backends (one health-flapping) plus bursty traffic, so you watch ejection, redistribution and recovery live. go.mod has no require block at all.',
    tech: ['Go', 'net/http', 'httputil', 'SSE', 'go:embed'],
    status: 'shipped',
    featured: false,
    caseStudy: true,
    year: '2026',
    icon: 'gauge',
    repos: [
      { label: 'goflow', href: 'https://github.com/jonathanDavid/goflow', icon: 'zap' },
    ],
  },
  {
    slug: 'route-graph-neo4j',
    size: 'lg',
    preview: 'assets/case/routegraph-explorer.png',
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
