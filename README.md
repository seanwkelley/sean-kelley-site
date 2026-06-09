# Sean W. Kelley — personal site

A single-page personal/portfolio site. Dark "modern technical" aesthetic:
near-black canvas, mono technical labels, a faint engineering grid, one
restrained lime signal color, and subtle reveal-on-scroll motion.

Built with **Next.js (App Router)** + TypeScript. No CSS framework — the whole
design system lives in `app/globals.css`.

## Editing content

**All copy lives in one file: [`app/content.ts`](app/content.ts).** You don't
need to touch any other file to update text. Lines marked `// TODO` are
placeholders to confirm or fill in:

- `profile.links.scholar / github / linkedin` — add your profile URLs (the
  social buttons appear automatically once a URL is present).
- `profile.phone` — delete the value if you'd rather not list it.
- Each project in `research` / `building` has an optional `href` — set it to a
  paper or live-site URL and a link affordance appears on the card.

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build

```bash
npm run build && npm start
```

## Deploy to Vercel

This is a zero-config Next.js app. Either:

- Push to a GitHub repo and import it at [vercel.com/new](https://vercel.com/new), or
- From this folder: `npx vercel` (preview) / `npx vercel --prod` (production).

No environment variables are required.

## Structure

```
app/
  content.ts     ← edit everything here
  page.tsx       ← page layout (sections)
  layout.tsx     ← fonts + metadata
  globals.css    ← the entire design system
components/
  Reveal.tsx     ← scroll-reveal wrapper (progressive enhancement)
```
