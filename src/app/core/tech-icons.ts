import {
  siReact,
  siAngular,
  siNestjs,
  siNodedotjs,
  siExpress,
  siFastapi,
  siTerraform,
  siDocker,
  siKubernetes,
  siPostgresql,
  siMongodb,
  siNeo4j,
  siTypescript,
  siJavascript,
  siGo,
  siPython,
  siSamsung,
  siIonic,
  siRedis,
  siGraphql,
  siPrisma,
  siServerless,
  siSocketdotio,
  siEsbuild,
  siNodered,
  siLangchain,
  siGithub,
} from 'simple-icons';
import type { IconName } from '../components/icon/icon-registry';

/**
 * A tech/brand badge resolves either to a real brand logo (Simple Icons — 24×24
 * single-path SVG + brand hex) or, when no trademarked logo exists, to a
 * self-hosted Lucide UI glyph. Every skill/tech string therefore renders a real
 * icon rather than plain text.
 */
export interface TechBadge {
  label: string;
  /** Brand logo: a single SVG path drawn at 24×24. */
  brandPath?: string;
  /** Brand hex (no leading #). Omitted for UI-glyph fallbacks. */
  hex?: string;
  /** Render in `currentColor` instead of `hex` (dark/near-black marks). */
  mono?: boolean;
  /** Fallback Lucide glyph when there is no brand logo. */
  ui?: IconName;
}

type Brand = { path: string; hex: string };

// LinkedIn's logo was removed from Simple Icons for trademark reasons; keep the
// canonical path inline so contact links still get a real brand mark.
const linkedin: Brand = {
  path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
  hex: '0A66C2',
};

function brand(b: Brand, label: string, mono = false): TechBadge {
  return { label, brandPath: b.path, hex: b.hex, mono };
}
function glyph(ui: IconName, label: string): TechBadge {
  return { label, ui };
}

/** Normalized-name → badge. Keys are lowercased/trimmed. */
const MAP: Record<string, TechBadge> = {
  // Languages
  typescript: brand(siTypescript, 'TypeScript'),
  javascript: brand(siJavascript, 'JavaScript'),
  python: brand(siPython, 'Python'),
  go: brand(siGo, 'Go'),
  cypher: glyph('share', 'Cypher'),

  // Frameworks / libraries
  react: brand(siReact, 'React'),
  angular: brand(siAngular, 'Angular'),
  ionic: brand(siIonic, 'Ionic'),
  'node.js': brand(siNodedotjs, 'Node.js'),
  nestjs: brand(siNestjs, 'NestJS'),
  express: brand(siExpress, 'Express', true),
  fastapi: brand(siFastapi, 'FastAPI'),
  prisma: brand(siPrisma, 'Prisma', true),
  graphql: brand(siGraphql, 'GraphQL'),
  esbuild: brand(siEsbuild, 'esbuild'),
  'node-red': brand(siNodered, 'Node-RED'),

  // Real-time / platform
  websockets: glyph('radio', 'WebSockets'),
  'socket.io': brand(siSocketdotio, 'Socket.io', true),
  'tizen / sssp': glyph('tv', 'Tizen / SSSP'),
  'tizen/sssp': glyph('tv', 'Tizen / SSSP'),

  // Cloud (AWS/Azure marks are no longer in Simple Icons → expressive glyphs)
  aws: glyph('cloud', 'AWS'),
  azure: glyph('cloud', 'Azure'),
  'aws ecs': glyph('container', 'AWS ECS'),
  'aws lambda': glyph('zap', 'AWS Lambda'),
  'api gateway': glyph('network', 'API Gateway'),
  s3: glyph('boxes', 'Amazon S3'),
  sns: glyph('radio', 'Amazon SNS'),
  sqs: glyph('layers', 'Amazon SQS'),
  serverless: brand(siServerless, 'Serverless'),
  terraform: brand(siTerraform, 'Terraform'),
  docker: brand(siDocker, 'Docker'),
  kubernetes: brand(siKubernetes, 'Kubernetes'),

  // Data
  postgresql: brand(siPostgresql, 'PostgreSQL'),
  mongodb: brand(siMongodb, 'MongoDB'),
  neo4j: brand(siNeo4j, 'Neo4j'),
  redis: brand(siRedis, 'Redis'),

  // AI / misc
  'genetic algorithms': glyph('activity', 'Genetic Algorithms'),
  'llm agents': brand(siLangchain, 'LLM Agents'),
  'tool use': glyph('workflow', 'Tool Use'),
  canvas: glyph('monitor', 'Canvas'),
  'web workers': glyph('cpu', 'Web Workers'),
  samsung: brand(siSamsung, 'Samsung'),

  // Social / contact
  github: brand(siGithub, 'GitHub', true),
  linkedin: brand(linkedin, 'LinkedIn'),
};

/** Resolve a tech/brand string to a renderable badge (glyph fallback if unknown). */
export function techBadge(name: string): TechBadge {
  const key = name.trim().toLowerCase();
  return MAP[key] ?? { label: name, ui: 'sparkles' };
}
