import type { IconName } from '../components/icon/icon-registry';

export interface TimelineEntry {
  year: string;
  title: string;
  content: string;
  link?: { label: string; href: string };
  icon?: IconName;
}

/**
 * The authentic personal story, mined from the original portfolio timeline.
 * Kept intentionally human — the résumé covers the professional detail.
 */
export const timeline: TimelineEntry[] = [
  {
    year: '2015',
    icon: 'graduation-cap',
    title: 'Started university at 15',
    content:
      'Began Systems Engineering at Universidad del Norte at age 15, on a scholarship granted by the government.',
    link: { label: 'Universidad del Norte', href: 'https://www.uninorte.edu.co' },
  },
  {
    year: '2018',
    icon: 'gamepad',
    title: 'First Global Game Jam',
    content: 'Built and shipped my first public video game, Uplink, in 48 hours.',
    link: { label: 'GGJ — Uplink', href: 'https://globalgamejam.org/2018/games/uplink' },
  },
  {
    year: '2019',
    icon: 'briefcase',
    title: 'Internship at Xpectrum',
    content:
      'In my 9th semester I joined Xpectrum as an intern, working on the Omnix product.',
    link: {
      label: 'Xpectrum',
      href: 'https://www.linkedin.com/company/xpectrumtech',
    },
  },
  {
    year: '2020',
    icon: 'rocket',
    title: 'Intern → engineer, and a degree',
    content:
      'After a six-month internship I was hired onto the Omnix team as a software developer, graduated as a Systems Engineer, and shipped a second Game Jam title, Otto.',
    link: { label: 'GGJ — Otto', href: 'https://globalgamejam.org/2020/games/otto-5' },
  },
  {
    year: '2021',
    icon: 'building',
    title: 'Omnix becomes a company',
    content:
      'The Omnix product consolidated into its own company, Omnix IA, and I continued my professional path with the team.',
    link: { label: 'Omnix', href: 'https://omnixcorp.com/' },
  },
  {
    year: '2022 — 2025',
    icon: 'tv',
    title: 'Digital Signage at UDT / Havrion',
    content:
      'Owned a four-surface Smart TV signage platform end to end — Tizen/SSSP players, WebSocket streaming, a NestJS API and Terraform-managed AWS/Azure infrastructure.',
  },
  {
    year: '2026',
    icon: 'rocket',
    title: 'The portfolio sprint',
    content:
      'Rebuilt my public work from scratch: eight shipped projects — a conflict atlas, an art Pomodoro, a Neo4j route graph, two local-AI copilots and more — each with tests, a case study and an honest README.',
  },
];
