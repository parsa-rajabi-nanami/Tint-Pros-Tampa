# Agent context: Tint Pros Tampa

## Project summary

This repository contains a pnpm workspace. The public-facing product is `artifacts/tint-pros-tampa`, a Vite + React + TypeScript landing page for a mobile automotive, residential, commercial, marine, PPF, and vinyl-wrap tinting service in Tampa, Florida.

The page is frontend-only. `QuoteSection` validates a request and shows a local confirmation state; it does not persist or transmit customer information. Do not claim that lead delivery works until a backend or approved form integration has been added and tested.

## Directory conventions

- `src/components/common`: shared visual primitives and application chrome.
- `src/components/sections`: page sections that compose business content.
- `src/components/interactive`: stateful customer tools; keep their state local and their calculations in `src/lib`.
- `src/data`: business copy, contact details, service cards, service areas, and other editable content.
- `src/lib`: deterministic helpers with no React rendering concerns.
- `src/types`: shared domain types and public component contracts.
- `public/assets`: static images addressed by public URL. Do not move them to `src/assets` unless they need bundler imports.
- `App.tsx`: composition glue only. New business logic belongs in a section, interactive component, data module, or helper.

Use the `@/*` alias for `src/*` imports. Keep the alias synchronized in `vite.config.ts` and `tsconfig.json`.

## Styling conventions

The visual system is intentionally compact: charcoal surfaces (`#111`), warm paper neutrals (`#f5f2eb` / `#e8e4dc`), signal red (`#d22f25`), and yellow (`#f5d644`). Reuse these tokens and existing utility patterns instead of adding one-off palette values.

Use Tailwind utilities in a stable order: layout/position, sizing, spacing, typography, color, borders/effects, then state/transition utilities. Prefer semantic HTML, visible focus rings, labelled controls, and `prefers-reduced-motion` compatibility. Avoid adding generic UI-library components or providers when a small semantic element is enough.

## Business logic

### Quote estimator

`src/lib/calculations.ts` calculates a planning range from three user choices:

1. `ServiceId` selects a base low/high range in `estimateBases`.
2. `QuoteSize` applies a project-size multiplier.
3. `QuoteFinish` applies a finish/material multiplier.

The result is rounded to the nearest $25 and displayed as a budgetary range. These values are assumptions owned by the product, not verified pricing from the business. Update `estimateBases` after the owner supplies approved pricing, and keep the non-binding disclaimer visible.

### VLT simulator

`VltShadeSimulator` keeps the selected VLT in local state and maps it to a discrete option in `src/data/site.ts`. The dark overlay on the vehicle preview is a visual approximation. The displayed heat-rejection number is an illustrative index, not a measured performance guarantee. Never turn it into a compliance assertion.

### Florida guide

The guide is informational and links to the Florida Legislature statute. It must not be presented as legal advice. Vehicle glass, existing factory tint, vehicle class, exemptions, reflectance, and statute revisions can affect a real installation; preserve that qualification when editing the copy.

## Verification

From the repository root:

```bash
corepack pnpm --filter @workspace/tint-pros-tampa typecheck
corepack pnpm --filter @workspace/tint-pros-tampa build
corepack pnpm run typecheck
corepack pnpm run build
git diff --check
```

For a release review, inspect the generated `artifacts/tint-pros-tampa/dist/public` folder, test the mobile menu, VLT slider, three estimator steps, quote validation/success state, telephone/text links, and SPA fallback on the selected host. Static typechecking and a successful Vite build do not prove that a deployed form provider, analytics endpoint, or browser rendering behaves correctly.
