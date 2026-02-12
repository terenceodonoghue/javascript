# CLAUDE.md

## What is this?

A pnpm monorepo with two workspace areas: `apps/*` (currently empty) and `packages/*`.

- **@terenceodonoghue/react** (`packages/react`) — React 19 component library (CSS Modules, TypeScript strict)
- **@terenceodonoghue/prettier-plugin-packagejson** (`packages/prettier-plugin-packagejson`) — Prettier plugin for sorting package.json

Early-stage; the React package is private/unpublished with one component so far (Flex).

## Commands

Use **pnpm** (not npm/yarn). Node 20 LTS.

- Lint react package: `pnpm --filter @terenceodonoghue/react lint`
- Lint prettier plugin: `pnpm --filter @terenceodonoghue/prettier-plugin-packagejson lint`
- No build or test scripts exist yet

## Conventions

- ESM throughout (`"type": "module"`)
- Components are **polymorphic** — they accept an `as` prop to change the rendered element
- CSS Modules with a `classNames()` helper for dynamic class composition
- CSS uses **logical properties** (`padding-inline`, `margin-block`) for LTR/RTL support
- Commit messages use imperative present tense (e.g., "Add feature", "Fix bug")

## Code style

Handled entirely by Prettier and ESLint — do not manually enforce formatting rules.
Import order is enforced by Prettier: third-party → `@terenceodonoghue` → relative.
