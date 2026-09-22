# Tint Pros Tampa

Tint Pros Tampa is a production-oriented redesign for a mobile window-tinting and vehicle-protection service in Tampa Bay, Florida. The site turns a direct-response local-service offer into a fast, responsive landing page with clear service coverage, measurable next steps, and a phone-first conversion path.

The current implementation is a frontend-only experience. Quote requests are validated in the browser and end in a confirmation state; they are not sent to a CRM or email provider until a backend or form provider is connected.

## Product surface

- Mobile-first landing page for auto, residential, commercial, marine, PPF, and vinyl-wrap services.
- VLT Shade Simulator with a visual shade preview, selected VLT, and clearly labelled illustrative heat-rejection index.
- Three-step Instant Estimate flow for service, project size, and finish. Its output is a budgetary range, not a binding quote.
- Florida Tint Guide linking to the current Florida Legislature statute and explaining why measured vehicle glass matters.
- Client-side quote request form with required-field and email validation, call/text CTAs, mobile navigation, reduced-motion support, and responsive service-area coverage.

## Technology

| Area | Choice |
| --- | --- |
| UI | React 19.1 with TypeScript |
| Build | Vite 7 with `@vitejs/plugin-react` |
| Styling | Tailwind CSS 4, CSS variables, and `tw-animate-css` |
| Icons | Lucide React |
| Package management | pnpm workspace with a shared catalog |
| Deployment | Vercel or Cloudflare Pages using the generated `dist/public` output |

React 18-compatible component patterns are used where practical, but the workspace is pinned to React 19.1.0.

## Architecture

The application lives in `artifacts/tint-pros-tampa` because the repository is a pnpm workspace with additional API, database, scripts, and mockup packages. The website package itself follows a conventional Vite + React structure:

```text
artifacts/tint-pros-tampa/
├── public/                 # Favicon, robots.txt, and static marketing images
├── src/
│   ├── components/
│   │   ├── common/         # Header, footer, brand mark, shared labels, error boundary
│   │   ├── interactive/    # VLT simulator and quote estimator
│   │   └── sections/       # Hero, services, tools, guide, quote, and content sections
│   ├── data/               # Service, contact, coverage, and VLT option data
│   ├── lib/                # Price-range and VLT calculation helpers
│   ├── types/              # Shared TypeScript domain models
│   ├── App.tsx             # Page composition only
│   ├── index.css           # Tailwind entrypoint and visual tokens
│   └── main.tsx            # React DOM entrypoint
├── index.html              # SEO and social metadata
└── vite.config.ts          # Vite, React, Tailwind, and `@` alias configuration
```

The `@/*` alias is defined identically in `vite.config.ts` and the package `tsconfig.json`. Static images remain in `public/assets` because they are direct, cacheable public resources rather than imported application modules.

## UI and product decisions

- Dark charcoal, signal red, and high-visibility yellow create a practical automotive-service visual system.
- Warm neutral content bands break up the dark hero and tool sections without introducing unnecessary card grids.
- Typography uses Archivo Black for display headings and Cabin/Lato fallbacks for readable body copy.
- Focus-visible rings, semantic landmarks, labelled controls, sufficient contrast, mobile touch targets, and `prefers-reduced-motion` support are included as baseline accessibility behavior.
- Local service coverage and phone/text actions are treated as primary conversion paths because the business is mobile and location-led.
- Legal and pricing content is intentionally qualified. The simulator is not a compliance test, and the estimator is not a binding quote.

## Local development

This repository uses pnpm workspaces and the root `preinstall` guard intentionally rejects npm and Yarn installs. Use Corepack or an installed pnpm version:

```bash
corepack pnpm install
corepack pnpm --filter @workspace/tint-pros-tampa dev
```

Useful commands from the repository root:

```bash
corepack pnpm --filter @workspace/tint-pros-tampa typecheck
corepack pnpm --filter @workspace/tint-pros-tampa build
corepack pnpm run typecheck
corepack pnpm run build
```

The app package also exposes `dev`, `typecheck`, `build`, and `serve` scripts. No external API or environment variable is required for the current static experience.

## Deployment

### Vercel

The root `vercel.json` already defines the workspace build command, `artifacts/tint-pros-tampa/dist/public` as the output directory, an SPA fallback rewrite, and long-lived cache headers for `/assets/*`. Import the repository into Vercel with the repository root as the project root and keep the committed configuration enabled.

### Cloudflare Pages

Use the repository root as the build directory, `corepack pnpm install --frozen-lockfile` as the install command, `corepack pnpm --filter @workspace/tint-pros-tampa build` as the build command, and `artifacts/tint-pros-tampa/dist/public` as the output directory. Configure the Pages SPA fallback to serve `/index.html` for application routes. The static asset cache policy should be applied to `/assets/*`.

## Release checklist

1. Run the root typecheck and build.
2. Review the generated `artifacts/tint-pros-tampa/dist/public` output and confirm all images load.
3. Connect the quote form to an approved backend before treating submissions as production leads.
4. Have the business owner verify estimator ranges, warranty language, and the current Florida tint requirements before publishing those claims as commercial policy.
