# musa-zhanchao.github.io

Personal academic website for **Zhanchao Yang** (MCP / MUSA, University of Pennsylvania), built with **React + Vite**.

Live: https://musa-zhanchao.github.io/

## Develop

```bash
npm install
npm run dev      # local dev server
npm run build    # production build -> dist/
npm run preview  # preview the build
```

## Edit content

All text, projects, talks, and courses live in [`src/data/content.js`](src/data/content.js).
Add a project by appending an object to `projects` (set `featured: true` to highlight it,
and `category` to one or more of `transport`, `stats`, `geoai`, `policy`).

## Deploy

`.github/workflows/deploy.yml` builds and publishes `dist/` on every push to `main`.
One-time setup: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
