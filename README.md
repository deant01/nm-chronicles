# nm-chronicles

A standalone Angular application for the Newport Maeve Chronicles.

This repository supports:
- local development with Angular CLI
- static deployment to GitHub Pages
- server-side rendering on Cloudflare Workers

## What this project uses

- Angular `22.x`
- Standalone components and signal-based reactive state
- `@angular/router` for page routing and navigation state
- `@angular/ssr` for server-side rendering
- GitHub Pages for static site deployment
- Cloudflare Workers for SSR deployment
- `IntersectionObserver`-based scroll reveal animations
- lazy-loaded homepage sections for faster initial page load

## Key features

- Homepage with:
  - hero section
  - story/about section
  - trailer/listen section
  - characters preview
  - quotes section
  - interactive city map section
  - author section
  - contact section
- Character pages with share links and return-to-home section scroll
- City page with map and return-to-home section scroll
- Home page navigation origin handling:
  - when coming back from a character page, the home page scrolls to the characters section
  - when coming back from the city page, the home page scrolls to the map section
- Section navigation component that keeps the active section in sync with:
  - mouse wheel scroll
  - menu navigation
  - programmatic navigation
- Scroll reveal directive that checks element visibility on navigation and initial render
- Environment-specific asset, canonical URL, and SEO behavior
- SEO metadata generation for static routes and prerendered content

## Folder layout

- `src/`
  - `app/` – components, pages, layouts, services, directives, and guards
  - `cloudflare/` – worker entrypoint for SSR deployment
  - `main.ts` – browser entrypoint
  - `main.server.ts` – SSR entrypoint
  - `server.ts` – Node server example
- `public/` – static files copied to browser builds
- `scripts/` – build, prerender, and SEO helper scripts
- `dist/` – generated build artifacts
- `wrangler.toml` – Cloudflare worker configuration
- `angular.json` – Angular targets and build configurations

## Runtime environment behavior

Runtime configuration is handled in `src/app/config.ts` and `APP_ENVIRONMENT_CONFIG`.
The app detects the deployment environment and adjusts:

- asset base paths
- canonical URLs
- link generation
- share metadata

Supported environments:

- `local`
  - `localhost` or `127.0.0.1`
  - asset base path: `/`
  - canonical URL: current origin
- `dev`
  - GitHub Pages or `github.io` host
  - asset base path: `/nm-chronicles/`
  - canonical URL: `${origin}/nm-chronicles/`
- `production`
  - host ends with `newportmaeve.com`
  - asset base path: `/`
  - canonical URL: `https://newportmaeve.com/`

## Build and deployment

### Local development

```bash
ng serve
```

Open `http://localhost:4200/`.

### GitHub Pages static build

```bash
npm run build:github-pages
```

- Builds with `githubPages` config
- Output: `dist/github-pages`
- `baseHref`: `/nm-chronicles/`
- `outputMode`: `static`
- `ssr`: `false`

After build, the `postbuild:github-pages` script runs:

```bash
node scripts/prerender-gh-pages.js && node scripts/generate-seo-assets.js github-pages dist/github-pages/browser
```

This script:
- prerenders route HTML for known pages
- injects Open Graph and Twitter metadata
- writes canonical links
- generates `robots.txt`
- generates `sitemap.xml`

### Deploy GitHub Pages

```bash
npm run deploy:github-pages
```

### Cloudflare Workers SSR build

```bash
npm run build:cloudflare
```

- Builds with `cloudflare` config
- Output: `dist/nm-chronicles-cloudflare`
- `baseHref`: `/`
- `outputMode`: `server`
- SSR entrypoint: `src/cloudflare/worker.ts`

Then deploy with:

```bash
npm run deploy:cloudflare
```

### Useful commands

- `npm run build:github-pages`
- `npm run deploy:github-pages`
- `npm run build:cloudflare`
- `npm run deploy:cloudflare`
- `ng test`

## SEO and prerendering

- `src/app/app.routes.server.ts` defines routes for server prerendering
- `scripts/route-metadata.js` holds route metadata definitions
- `scripts/generate-seo-assets.js` creates metadata files for the generated build
- Static GitHub Pages routes are prerendered and decorated with tailored share metadata

## Notes

- The project currently uses `robot.txt` at the repository root; move or duplicate it into `public/` if you need environment-specific robots files.
- The generated sitemap should be served from the deployment root, e.g. `/sitemap.xml`.

## Testing

Run unit tests with:

```bash
ng test
```

## References

- Angular CLI docs: https://angular.dev/tools/cli
- Angular SSR docs: https://angular.dev/guide/universal
- Cloudflare Workers docs: https://developers.cloudflare.com/workers/
