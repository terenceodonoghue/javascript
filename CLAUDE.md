# CLAUDE.md

## What is this?

A pnpm monorepo with two workspace areas: `apps/*` and `packages/*`.

- **@terenceodonoghue/react** (`packages/react`) — React 19 component library (CSS Modules, TypeScript strict)

Early-stage; the React package is private/unpublished with one component so far (Flex).

## Commands

Use **pnpm** (not npm/yarn). Node 20 LTS.

- Lint react package: `pnpm --filter @terenceodonoghue/react lint`
- Test react package: `pnpm --filter @terenceodonoghue/react test-ct`

## Conventions

- ESM throughout (`"type": "module"`)
- Components are **polymorphic** — they accept an `as` prop to change the rendered element
- CSS Modules with a `classNames()` helper for dynamic class composition
- CSS uses **logical properties** (`padding-inline`, `margin-block`) for LTR/RTL support
- Tests use Playwright CT, grouped by component → concern (e.g., `element`, `styling`)
- Commit messages use imperative present tense (e.g., "Add feature", "Fix bug")

## CI

CI: `.github/workflows/ci.yml` — update when adding tests to a new package or app.

## Code style

Handled entirely by Biome — do not manually enforce formatting rules.
Import order is enforced by Biome: third-party → `@terenceodonoghue` → relative.
