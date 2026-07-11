# syntax=docker/dockerfile:1
#
# Build context for this Dockerfile must be the repository root (not client/),
# since the client imports shared/ via the @shared alias.

# ---- Stage 1: install dependencies and build production assets ----
FROM node:22-alpine AS build

WORKDIR /app/client
COPY client/package.json client/package-lock.json ./
RUN npm ci

WORKDIR /app
COPY shared ./shared
COPY client ./client

WORKDIR /app/client
RUN npm run build

# ---- Stage 2: hand the built assets off to the Nginx container ----
# This stage runs no server of its own. Its only job is to copy the built
# static files into a shared volume that the nginx service mounts and serves.
FROM alpine:3.20 AS handoff

COPY --from=build /app/client/dist /build-output

CMD ["sh", "-c", "rm -rf /shared-build/* && cp -r /build-output/. /shared-build/ && echo 'client: build copied to shared volume'"]
