# syntax=docker/dockerfile:1
#
# Build context for this Dockerfile must be the repository root (not server/),
# since the server imports shared/ via relative paths (../../../shared/...).

# ---- Stage 1: install dependencies and compile TypeScript ----
FROM node:22-alpine AS build

WORKDIR /app
# npm workspaces resolve into the root lockfile, not a per-workspace one —
# `npm ci` needs the root manifest plus every workspace's package.json to
# validate against it correctly.
COPY package.json package-lock.json ./
COPY client/package.json ./client/package.json
COPY server/package.json ./server/package.json
RUN npm ci --workspace=server

COPY shared ./shared
COPY server ./server

WORKDIR /app/server
RUN npm run build

# ---- Stage 2: production runtime ----
FROM node:22-alpine AS production

ENV NODE_ENV=production
WORKDIR /app

COPY package.json package-lock.json ./
COPY client/package.json ./client/package.json
COPY server/package.json ./server/package.json
RUN npm ci --workspace=server --omit=dev

COPY --from=build /app/server/dist ./server/dist
WORKDIR /app/server

EXPOSE 5000

HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD node -e "require('http').get('http://localhost:' + (process.env.PORT || 5000) + '/api/health', (r) => process.exit(r.statusCode === 200 ? 0 : 1)).on('error', () => process.exit(1))"

CMD ["node", "dist/server/src/server.js"]
