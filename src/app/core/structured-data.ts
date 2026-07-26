import { site } from '../data/site';

/**
 * schema.org JSON-LD builders. Emitted into a single `@graph` script that is
 * serialized into every prerendered page, so search engines see structured
 * Person / WebSite / ProfilePage data in the static HTML.
 */

const BASE = `${site.origin}${site.baseHref}`; // https://…/My-Portfolio/
const PERSON_ID = `${BASE}#person`;
const SITE_ID = `${BASE}#website`;
const OG_IMAGE = `${BASE}assets/og-image.svg`;
const AVATAR = `${BASE}3DIcon.png`;

export function personNode(): Record<string, unknown> {
  return {
    '@type': 'Person',
    '@id': PERSON_ID,
    name: site.name,
    jobTitle: 'Senior Full Stack & Cloud Engineer',
    description: site.summary,
    url: BASE,
    image: AVATAR,
    email: `mailto:${site.email}`,
    sameAs: site.social
      .filter((s) => s.kind !== 'email')
      .map((s) => s.href),
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Barranquilla',
      addressCountry: 'CO',
    },
    knowsAbout: [
      'Full Stack Development',
      'Cloud Engineering',
      'TypeScript',
      'Angular',
      'React',
      'NestJS',
      'Node.js',
      'Go',
      'Python',
      'AWS',
      'Azure',
      'Terraform',
      'Docker',
      'Kubernetes',
      'WebSockets',
      'Samsung Tizen / SSSP',
      'PostgreSQL',
      'MongoDB',
      'Neo4j',
    ],
  };
}

export function webSiteNode(): Record<string, unknown> {
  return {
    '@type': 'WebSite',
    '@id': SITE_ID,
    url: BASE,
    name: `${site.name} · Portfolio`,
    description: site.tagline,
    inLanguage: 'en',
    author: { '@id': PERSON_ID },
    publisher: { '@id': PERSON_ID },
  };
}

/** Person + WebSite — present on every page. */
export function baseGraph(): Record<string, unknown>[] {
  return [personNode(), webSiteNode()];
}

export function profilePageNode(): Record<string, unknown> {
  return {
    '@type': 'ProfilePage',
    '@id': `${BASE}#profilepage`,
    url: BASE,
    name: `${site.name} · ${site.role}`,
    isPartOf: { '@id': SITE_ID },
    about: { '@id': PERSON_ID },
    primaryImageOfPage: OG_IMAGE,
    inLanguage: 'en',
  };
}

export function breadcrumb(
  trail: { name: string; path: string }[],
): Record<string, unknown> {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((t, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: t.name,
      item: `${BASE}${t.path}`,
    })),
  };
}

/** Case study for the Digital Signage platform. */
export function signageCreativeWork(
  tech: string[],
): Record<string, unknown> {
  return {
    '@type': 'SoftwareSourceCode',
    '@id': `${BASE}projects/digital-signage#project`,
    name: 'Digital Signage Platform',
    headline: 'A four-surface, real-time content platform for Smart TVs',
    description:
      'End-to-end digital signage: a React control plane, a NestJS API, a Samsung Tizen/SSSP Smart TV player and Terraform-managed AWS infrastructure, kept in sync over WebSockets.',
    url: `${BASE}projects/digital-signage`,
    author: { '@id': PERSON_ID },
    creator: { '@id': PERSON_ID },
    programmingLanguage: ['TypeScript', 'JavaScript'],
    keywords: tech.join(', '),
    isPartOf: { '@id': SITE_ID },
    inLanguage: 'en',
  };
}

/**
 * Generic SoftwareSourceCode builder for a case study, used by the retail and
 * genetic pages so each prerendered page carries a rich project node.
 */
export function caseStudyCreativeWork(opts: {
  slug: string;
  name: string;
  headline: string;
  description: string;
  languages: string[];
  tech: string[];
}): Record<string, unknown> {
  return {
    '@type': 'SoftwareSourceCode',
    '@id': `${BASE}projects/${opts.slug}#project`,
    name: opts.name,
    headline: opts.headline,
    description: opts.description,
    url: `${BASE}projects/${opts.slug}`,
    author: { '@id': PERSON_ID },
    creator: { '@id': PERSON_ID },
    programmingLanguage: opts.languages,
    keywords: opts.tech.join(', '),
    isPartOf: { '@id': SITE_ID },
    inLanguage: 'en',
  };
}
