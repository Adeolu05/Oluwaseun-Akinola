# Oluwaseun Akinola — Portfolio

Personal brand site: React 19, Vite 6, Tailwind CSS 4, and Motion for scroll and entrance animations.

## Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended)

## Run locally

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (defaults to port **3000**).

## Scripts

| Command | Description |
|--------|-------------|
| `npm run dev` | Development server |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview the production build |
| `npm run lint` | Typecheck with TypeScript (`tsc --noEmit`) |

## Assets

The site loads photos from **`public/images/`** (for example `oluwaseun-akinola-hero-portrait.jpg`). Original exports are kept under **`image/`** as `oluwaseun-akinola-archive-01.jpg` … `archive-46.jpg`. Replace or add files in `public/images/` and update paths in `Hero`, `About`, and `Gallery` if you change filenames.

## Deploy

Build with `npm run build`, then host the `dist` folder on any static host (Netlify, Vercel, GitHub Pages with the correct `base` if using a subdirectory, etc.).
