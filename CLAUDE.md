# CLAUDE.md

## What is this?

A Bun monorepo with two workspace areas: `apps/*` and `packages/*`.

- **@terenceodonoghue/auth-web** (`apps/auth-web`) — SolidJS SPA for passkey-based sign-in and registration
- **@terenceodonoghue/react** (`packages/react`) — React 19 component library (CSS Modules, TypeScript strict)
- **@terenceodonoghue/utils** (`packages/utils`) — Shared utilities (base64url encoding, classNames helper)

## Commands

- First-time setup: `make setup` (installs Homebrew tools and runs `bun install`)

Use **bun** (not npm/yarn/pnpm).

- Dev server for auth-web: `bun run --filter @terenceodonoghue/auth-web dev`
- Build auth-web: `bun run --filter @terenceodonoghue/auth-web build`
- Lint auth-web: `bun run --filter @terenceodonoghue/auth-web lint`
- Lint react package: `bun run --filter @terenceodonoghue/react lint`
- Component test react package: `bun run --filter @terenceodonoghue/react test-ct`
- Lint utils package: `bun run --filter @terenceodonoghue/utils lint`
- Unit test utils package: `bun run --filter @terenceodonoghue/utils test`

## Conventions

- ESM throughout (`"type": "module"`)
- **React package**: Components are polymorphic — they accept an `as` prop to change the rendered element
- **SolidJS (auth-web)**: Use `class=` (not `className=`) for CSS class bindings; use `onInput=` (not `onChange=`) for reactive text inputs
- CSS Modules with a `classNames()` helper (from utils package) or direct class binding (auth-web)
- CSS uses **logical properties** (`padding-inline`, `margin-block`) for LTR/RTL support
- Unit tests (`*.test.ts`) use `bun:test`; component tests (`*.spec.tsx`) use Playwright CT, grouped by component → concern (e.g., `element`, `styling`)
- Commit messages use imperative present tense (e.g., "Add feature", "Fix bug")

## CI

- `packages.yml` — test all packages (utils unit tests, react component tests); update when adding tests to a new package
- `auth-web.yml` — security scan (Gitleaks, CodeQL), Docker build, Trivy image scan, and publish to ghcr.io on push to main (path-filtered to `apps/auth-web/**`)

Per-service workflows follow the same pattern: `scan` job (Gitleaks, CodeQL) → `publish` job (build, Trivy, push). Add a new workflow file per app.

## Code style

Handled entirely by Biome — do not manually enforce formatting rules.
Import order is enforced by Biome: third-party → `@terenceodonoghue` → relative.
