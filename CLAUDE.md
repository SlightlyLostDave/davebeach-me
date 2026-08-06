# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```sh
npm install       # install dependencies
npm run dev        # start local dev server at localhost:4321
npm run build      # build production site to ./dist/
npm run preview    # preview the production build locally
npm run commit      # commit via Commitizen (conventional commits) — use for creating commits
```

There is no test suite or linter configured in this repo.

## Architecture

This is an Astro 6 + React 19 single-page portfolio site (davebeach.me).

- **Islands architecture**: `src/pages/index.astro` composes the page from Astro components; interactive pieces are React components hydrated with `client:load`/`client:visible` directives. Keep non-interactive UI as `.astro` components and only reach for React when interactivity/state is needed.
- **Content lives in `cv.json`, not components**: bio, social links, projects, and work experience are all data-driven from a single [JSON Resume](https://jsonresume.org)-shaped `cv.json` at the repo root, imported via the `@cv` path alias. When asked to change site copy, edit `cv.json` rather than hardcoding text into a component.
- **Path aliases** (see `tsconfig.json`): `@/*` → `src/*`, `@cv` → `./cv.json`, `@styles/*`, `@layouts/*`, `@components/*`.
- **Component layout** under `src/components/`:
  - `common/` — Navbar, alerts, loading screen (shared chrome)
  - `home/hero/` — custom hand-written GLSL shader Earth (day/night textures, specular clouds, atmosphere) rendered via Three.js/React Three Fiber
  - `home/about/` — bio, frameworks, orbiting circles, and an interactive `cobe` globe
  - `home/projects/` — project cards (`Project.jsx`) and detail views (`ProjectDetails.jsx`), sourced from `cv.json`'s `projects` array
  - `home/experience/` — animated timeline (GSAP)
  - `home/contact/` — contact form (EmailJS) with a particles background
- **Styling**: Tailwind CSS 4 via `@tailwindcss/vite` (no separate Tailwind config file — configured through the Vite plugin in `astro.config.mjs`).
- **Shaders**: `.glsl` files are imported directly thanks to `vite-plugin-glsl`, used by the hero Earth component.
- **Analytics**: Google Analytics is loaded off the main thread via `@astrojs/partytown` (see `forward: ['dataLayer.push']` in `astro.config.mjs`).
- **Deployment**: Vercel, via the `@astrojs/vercel` adapter (`astro.config.mjs`); `astro.config.vercel.mjs` exists alongside the default config for Vercel-specific builds. Auto-deploys from `main`.
