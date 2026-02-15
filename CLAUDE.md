# CLAUDE.md

## What is this?

A Bun monorepo with two workspace areas: `apps/*` and `packages/*`.

- **@terenceodonoghue/react** (`packages/react`) — React 19 component library (CSS Modules, TypeScript strict)

Early-stage; the React package is private/unpublished with one component so far (Flex).

## Commands

Use **bun** (not npm/yarn/pnpm).

- Lint react package: `bun run --filter @terenceodonoghue/react lint`
- Unit test react package: `bun run --filter @terenceodonoghue/react test`
- Component test react package: `bun run --filter @terenceodonoghue/react test-ct`

## Conventions

- ESM throughout (`"type": "module"`)
- Components are **polymorphic** — they accept an `as` prop to change the rendered element
- CSS Modules with a `classNames()` helper for dynamic class composition
- CSS uses **logical properties** (`padding-inline`, `margin-block`) for LTR/RTL support
- Unit tests (`*.test.ts`) use `bun:test`; component tests (`*.spec.tsx`) use Playwright CT, grouped by component → concern (e.g., `element`, `styling`)
- Commit messages use imperative present tense (e.g., "Add feature", "Fix bug")

## CI

CI: `.github/workflows/ci.yml` — update when adding tests to a new package or app.

## Code style

Handled entirely by Biome — do not manually enforce formatting rules.
Import order is enforced by Biome: third-party → `@terenceodonoghue` → relative.
