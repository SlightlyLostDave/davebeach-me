# davebeach.me

My personal portfolio site — built with [Astro](https://astro.build) and React, featuring a shader-driven 3D Earth hero, an interactive globe, and a CV-driven content system.

**[davebeach.me →](https://davebeach.me)**

## About

I'm a software engineer and geospatial practitioner focused on exploration, documentation, and making complex systems understandable. This site is where that comes together: code, maps, and fieldwork, presented as a fast, immersive, single-page portfolio.

## Highlights

- **Custom WebGL Earth** — a hand-written GLSL shader (day/night textures, specular clouds, atmosphere) rendered with [Three.js](https://threejs.org)/[React Three Fiber](https://docs.pmnd.rs/react-three-fiber) as the hero centerpiece
- **Interactive tech globe** — an animated globe (via [cobe](https://cobe.vercel.app)) highlighting where I work from and the stack I use
- **CV as data** — all copy (bio, experience, projects, social links) is driven from a single [`cv.json`](./cv.json), following the [JSON Resume](https://jsonresume.org) shape, keeping content and presentation cleanly separated
- **Motion throughout** — [GSAP](https://gsap.com) timelines and [Motion](https://motion.dev) power the experience timeline, transitions, and micro-interactions
- **Islands architecture** — Astro ships static HTML by default and hydrates only the interactive React components (`client:load`) that need it
- **Performance-conscious analytics** — Google Analytics is loaded off the main thread via [Partytown](https://partytown.builder.io)

## Tech stack

| Layer | Tools |
| --- | --- |
| Framework | [Astro](https://astro.build) 6, [React](https://react.dev) 19 |
| 3D / Graphics | [Three.js](https://threejs.org), [React Three Fiber](https://docs.pmnd.rs/react-three-fiber), [drei](https://github.com/pmndrs/drei), custom GLSL shaders, [cobe](https://cobe.vercel.app) |
| Styling | [Tailwind CSS](https://tailwindcss.com) 4 |
| Animation | [GSAP](https://gsap.com), [Motion](https://motion.dev) |
| Contact form | [EmailJS](https://www.emailjs.com) |
| Hosting | [Vercel](https://vercel.com) |

## Project structure

```text
/
├── cv.json                      # Site content (bio, social links, projects, experience)
├── public/                      # Static assets
└── src/
    ├── assets/                  # Images, logos, hero textures
    ├── components/
    │   ├── common/               # Navbar, alerts, loading screen
    │   └── home/
    │       ├── hero/              # 3D Earth + shaders
    │       ├── about/             # Bio, frameworks, orbiting circles, globe
    │       ├── projects/          # Project cards + details
    │       ├── experience/        # Animated timeline
    │       └── contact/           # Contact form + particles background
    ├── layouts/                  # Base HTML layout
    ├── pages/                    # Astro routes (index.astro)
    └── styles/                   # Global styles
```

## Getting started

```sh
npm install
npm run dev
```

The site runs at `localhost:4321`.

| Command | Action |
| --- | --- |
| `npm install` | Install dependencies |
| `npm run dev` | Start the local dev server |
| `npm run build` | Build the production site to `./dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run commit` | Commit via Commitizen (conventional commits) |

## Content

Nearly all visible copy — bio, social links, projects, work experience — lives in [`cv.json`](./cv.json) rather than being hardcoded into components. Updating the site's content is usually just an edit to that file.

## Deployment

Deployed on [Vercel](https://vercel.com) via the `@astrojs/vercel` adapter, with automatic deployments from the `main` branch.
