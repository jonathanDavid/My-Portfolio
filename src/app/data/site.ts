import type { IconName } from '../components/icon/icon-registry';

export interface SocialLink {
  label: string;
  href: string;
  kind: 'github' | 'linkedin' | 'email';
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
  icon: IconName;
}

export const site = {
  name: 'Jonathan Ilias',
  role: 'Senior Full Stack & Cloud Engineer',
  location: 'Barranquilla, Colombia',
  email: 'jdavid.ilias@gmail.com',
  /** Absolute production base used for SEO/OpenGraph/sitemap. */
  origin: 'https://jonathanDavid.github.io',
  baseHref: '/My-Portfolio/',
  tagline:
    'I build scalable SaaS products and cloud-native platforms — from Samsung Smart TV apps and real-time WebSocket streaming to serverless AWS backends and Terraform-managed infrastructure.',
  summary:
    '7+ years shipping production software across the stack: TypeScript, Python and Go on the code side; React, Angular and NestJS on the app side; AWS, Azure, Terraform, Docker and Kubernetes on the platform side.',
  /** Grounded in the experience highlights — shown as animated counters. */
  stats: [
    { value: 7, suffix: '+', label: 'Years shipping', icon: 'calendar' },
    { value: 100, suffix: '+', label: 'REST endpoints', icon: 'network' },
    { value: 20, suffix: '+', label: 'AWS Lambdas', icon: 'zap' },
    { value: 11, suffix: '+', label: 'Terraform modules', icon: 'cloud' },
  ] as Stat[],
  social: [
    { label: 'GitHub', href: 'https://github.com/jonathanDavid', kind: 'github' },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/jonathan-ilias',
      kind: 'linkedin',
    },
    { label: 'Email', href: 'mailto:jdavid.ilias@gmail.com', kind: 'email' },
  ] as SocialLink[],
  stacks: [
    'TypeScript',
    'JavaScript',
    'Python',
    'Go',
    'React',
    'Angular',
    'Ionic',
    'Node.js',
    'NestJS',
    'Express',
    'FastAPI',
    'AWS',
    'Azure',
    'Terraform',
    'Docker',
    'Kubernetes',
    'PostgreSQL',
    'MongoDB',
    'Neo4j',
  ],
};
