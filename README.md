# musa-zhanchao.github.io

MUSA portfolio website for **Zhanchao Yang** , built with **React + Vite**.

Live: https://musa-zhanchao.github.io/

## Develop

```bash
npm install
npm run dev      # local dev server
npm run build    # production build -> dist/
npm run preview  # preview the build
npm run lint     # ESLint (npm run lint:fix to auto-fix)
```

## Edit content

All text, projects, talks, and courses live in [`src/data/content.js`](src/data/content.js).
Add a project by appending an object to `projects` (set `featured: true` to highlight it,
and `category` to one or more of `transport`, `stats`, `geoai`, `policy`).

## CI / Deploy

`.github/workflows/ci.yml` runs **lint** and **build** on every push and pull request.
On pushes to `main`, once both pass, it publishes `dist/` to GitHub Pages.
One-time setup: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
