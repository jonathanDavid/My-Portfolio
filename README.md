# Jonathan Ilias — Portfolio

Personal portfolio for **Jonathan Ilias**, Senior Full Stack & Cloud Engineer.
Built with **Angular 22** (standalone components, signals, zoneless), **statically prerendered (SSG)**
and deployed to **GitHub Pages**.

Live: https://jonathanDavid.github.io/My-Portfolio/

## Stack

- Angular 22 — standalone components only, signals, new control flow (`@if` / `@for`)
- Static Site Generation via `outputMode: "static"` (every route prerendered to HTML)
- Self-hosted Inter (variable) font — no external CDNs
- Dark-first theme with a light theme via `prefers-color-scheme` + manual toggle

## Routes

| Route | Page |
| --- | --- |
| `/` | Hero, featured projects, condensed experience strip |
| `/projects` | All projects (shipped + honest work-in-progress) |
| `/projects/digital-signage` | Full case study of the flagship Digital Signage Platform |
| `/experience` | Career timeline + personal story |

Content lives in typed files under `src/app/data/` (`projects.ts`, `experience.ts`, `timeline.ts`,
`site.ts`) so content edits never touch components.

## Develop

```bash
npm install
npm start          # dev server at http://localhost:4200
```

## Build

```bash
npm run build          # static build to dist/portfolio/browser
npm run build:pages    # same, with --base-href=/My-Portfolio/ (production Pages build)
```

The production build prerenders all routes to static HTML in `dist/portfolio/browser`, ready to
deploy to any static host.

## Deploy

Pushing to `master` (or `main`) runs `.github/workflows/deploy-pages.yml`, which builds with the
correct base href, adds a `404.html` SPA fallback and `.nojekyll`, then publishes to GitHub Pages.
