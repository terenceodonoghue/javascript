FROM oven/bun:1.3.9-alpine AS build
WORKDIR /app

COPY package.json bun.lock tsconfig.json ./
COPY apps/auth-web/package.json apps/auth-web/
COPY packages/react/package.json packages/react/
COPY packages/utils/package.json packages/utils/
RUN bun install --frozen-lockfile --ignore-scripts

COPY apps/auth-web/ apps/auth-web/
COPY packages/utils/ packages/utils/

WORKDIR /app/apps/auth-web

ARG VITE_APP_TITLE=Homelab
ENV VITE_APP_TITLE=$VITE_APP_TITLE

RUN bun run build

FROM caddy:2-alpine
COPY --from=build /app/apps/auth-web/dist /srv
COPY apps/auth-web/Caddyfile /etc/caddy/Caddyfile
EXPOSE 80
