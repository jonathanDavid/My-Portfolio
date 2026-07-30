import type { IconName } from '../components/icon/icon-registry';

export interface Role {
  company: string;
  title: string;
  period: string;
  location?: string;
  current?: boolean;
  summary: string;
  highlights: string[];
  tech: string[];
  /** Surface icon for the role. */
  icon?: IconName;
}

export const experience: Role[] = [
  {
    company: 'UDT / Havrion',
    title: 'Full Stack Developer',
    period: 'Oct 2022 — Nov 2025',
    icon: 'tv',
    summary:
      'Owned the Digital Signage Platform — three client surfaces plus the cloud infrastructure behind them.',
    highlights: [
      'Built three Samsung Smart TV apps: a legacy JS player, a React SSSP app and a Tizen VXT app.',
      'Led the Angular 9 → 16 migration, modernizing the front-end architecture and maintainability.',
      'Cut live-video latency with WebSocket streaming between the Samsung SSSP player and the front end.',
      'Managed AWS + Azure infrastructure with 11+ Terraform modules across multiple enterprise projects.',
    ],
    tech: [
      'React',
      'Angular',
      'NestJS',
      'Tizen / SSSP',
      'WebSockets',
      'Terraform',
      'AWS',
      'Azure',
    ],
  },
  {
    company: 'Omnix IA',
    title: 'Back End Developer',
    period: 'Apr 2021 — Oct 2022',
    icon: 'cloud',
    summary:
      'Shipped serverless retail backends for enterprise customers across Chile and Peru.',
    highlights: [
      'Built and maintained 20+ AWS Lambda functions powering production retail solutions.',
      'Designed 100+ REST endpoints on Amazon API Gateway + Node.js for Casaideas, Privilege, Komax and EFE.',
      'Shrank Lambda deploy packages with esbuild, improving cold starts and deployment efficiency.',
    ],
    tech: ['AWS Lambda', 'API Gateway', 'Node.js', 'esbuild', 'MongoDB', 'Neo4j', 'S3'],
  },
  {
    company: 'Xpectrum',
    title: 'Back End Developer',
    period: 'Jan 2019 — Apr 2021',
    icon: 'terminal',
    summary:
      'Started as an intern on the Omnix product and grew into a full-time backend engineer.',
    highlights: [
      'Designed 100+ REST endpoints with NestJS following modern software-architecture principles.',
      'Built FastAPI services exposing genetic-algorithm ML models to optimize store-item allocation.',
      'Delivered 5 enterprise web apps in React and Angular; automated workflows with Node-RED.',
    ],
    tech: ['NestJS', 'FastAPI', 'Python', 'React', 'Angular', 'Neo4j', 'MongoDB'],
  },
];
