# soydianapinto.github.io

Personal website for Diana Pinto, built with Astro and Tailwind CSS.
The interface uses a minimal dark theme inspired by terminal interfaces and
developer-focused websites.

[![Site status](https://img.shields.io/badge/site-running-2ea44f?style=flat-square)](https://soydianapinto.github.io/)

## Features

- Mobile-first and responsive design.
- Static [LinkTree](./src/components/LinkTree.astro) component.
- Terminal-style [About Me](./src/components/AboutMe.astro) section.
- Responsive [Projects](./src/components/Projects.astro) grid.
- Links to LinkedIn, AWS Community Builder, Women Who Code, Next Review, and
  Dieciséis Brew.
- No client-side JavaScript.
- Static follower total updated manually when needed.
- Automatic deployment to GitHub Pages after every `push` to `main`.

## Requirements

- Node.js `>=22.12.0`
- npm

## Local development

Install the dependencies:

```sh
npm install
```

Start the development server:

```sh
npm run dev
```

The site will be available at `http://localhost:4321`.

## Available commands

| Command | Description |
| --- | --- |
| `npm install` | Install the project's dependencies. |
| `npm run dev` | Start the local development server. |
| `npm run build` | Generate the static site in `dist/`. |
| `npm run preview` | Serve the production build locally. |
| `npm run astro ...` | Run Astro CLI commands. |

## Project structure

```text
.
├── .github/
│   └── workflows/
│       └── deploy.yml       # GitHub Pages workflow
├── public/                  # Static assets
├── src/
│   ├── components/
│   │   ├── AboutMe.astro    # Terminal-style profile overview
│   │   ├── LinkTree.astro   # Profile and links list
│   │   └── Projects.astro   # Project cards
│   ├── pages/
│   │   └── index.astro      # Main page
│   └── styles/
│       └── global.css       # Tailwind and base styles
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## Deployment

The [deploy.yml](./.github/workflows/deploy.yml) workflow runs automatically in
GitHub Actions whenever a `push` is made to the `main` branch.

The pipeline:

1. Sets up Node.js 22.
2. Installs dependencies with `npm install`.
3. Runs `npm run build`.
4. Uploads the `dist/` directory as a Pages artifact.
5. Publishes the artifact to GitHub Pages.

The follower total is hardcoded in
[FollowerBadge.astro](./src/components/FollowerBadge.astro) and includes a
comment with its last manual update date. No social network APIs or tokens are
required.

In the repository settings, GitHub Pages must use **GitHub Actions** as the
deployment source:

**Settings → Pages → Build and deployment → Source → GitHub Actions**

If GitHub runs `actions/jekyll-build-pages@v1` or the `pages-build-deployment` workflow, the repository is still configured to deploy from a branch. Change the Pages source to **GitHub Actions** and disable any branch-based Pages deployment. The Astro workflow above is the only workflow that should publish this site.

## Documentation

- [Astro documentation](https://docs.astro.build)
- [Tailwind CSS documentation](https://tailwindcss.com/docs)
- [GitHub Pages documentation](https://docs.github.com/en/pages)
