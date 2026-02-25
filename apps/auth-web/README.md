# auth-web

Login and registration UI for the WebAuthn/passkey auth API. A SolidJS SPA served as a static site via Caddy.

## Prerequisites

- Bun 1.3.9+
- Docker and Docker Compose

## Quick start

Install dependencies from the monorepo root:

```sh
bun install
```

Start the auth API stack:

```sh
docker compose -f apps/auth-web/compose.yaml up -d
```

> Verification codes are printed to the auth-api container logs (`docker compose -f apps/auth-web/compose.yaml logs auth-api`).

Start the dev server:

```sh
bun run --filter @terenceodonoghue/auth-web dev
```

Open http://localhost:5173.

## Scripts

| Script | Description |
|---|---|
| `dev` | Start Vite dev server with API proxy |
| `build` | Production build to `dist/` |
| `lint` | Lint source with Biome |
| `preview` | Preview production build locally |

## Configuration

The dev proxy forwards `/api` to `http://localhost:8081`. Override with a `.env` file:

```
VITE_BASE=/
VITE_API_BASE=
```

These variables are used only at build time and are not configurable at runtime.

| Variable | Description | Dev default | Production default |
|---|---|---|---|
| `VITE_BASE` | Vite base path | `/` | `/auth/` |
| `VITE_API_BASE` | API path prefix | `` (empty) | `/auth` |
| `VITE_APP_TITLE` | App title on the login page | `Homelab` | `Homelab` |

## How it works

1. **Login** — Calls `POST /api/login/begin` to get WebAuthn assertion options, invokes `navigator.credentials.get()`, then calls `POST /api/login/finish`. On success, redirects to the `redirect_uri` query parameter if present.

2. **Register** — Submits email to `POST /api/register/begin`. On success, navigates to the verify screen. A 409 response means the email is already registered.

3. **Verify** — Submits email and 6-digit code to `POST /api/register/verify` to receive WebAuthn creation options. Invokes `navigator.credentials.create()`, then calls `POST /api/register/finish`. Navigates to the success screen on completion.

4. **Success** — Displays a confirmation message and redirects to `redirect_uri` after 3 seconds if present.

Session management uses an `auth_session` HttpOnly cookie set by the API.

## Docker

Build and run the production image (from the monorepo root):

```sh
docker build -t auth-web -f apps/auth-web/Dockerfile .
docker run -p 3000:80 auth-web
```
