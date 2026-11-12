# Journey With Nalin

Private Sri Lanka tours website — React + Vite + TypeScript, routed with React Router DOM.

## Development

```sh
npm install
npm run dev      # start dev server
npm run build    # type-check + production build to dist/
npm run preview  # preview the build
npm test
```

## Routes

Defined in `src/App.tsx`: `/`, `/about`, `/destinations`, `/tours`, `/gallery`, `/contact`, and a 404 fallback.
Pages live in `src/pages/`; the shared header/footer layout is `src/components/Layout.tsx`.

## Hero video

Place the hero video at `public/videos/tropical_coast_aerial.mp4`.

## Deployment

This is a client-side SPA, so configure your host to serve `index.html` for all paths
(e.g. a `/* /index.html 200` rewrite on Netlify/Cloudflare Pages, or `try_files` on nginx).
