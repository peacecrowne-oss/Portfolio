# Docker

This document covers the containerized version of the portfolio: architecture, building, running, and production notes. For local (non-Docker) development, see the root [README.md](../README.md).

---

## Architecture

Three containers, one shared Docker network (`portfolio-network`), one shared named volume (`client_build`):

```
                         ┌─────────────────────────────┐
   Host :80  ───────────▶│  nginx (published port 80)  │
                         │  - serves the React build     │
                         │  - proxies /api/* to server   │
                         └───────────┬─────────┬────────┘
                                     │         │
                     reads from      │         │  proxies to
                  client_build vol.  │         │  http://server:5000
                                     ▼         ▼
                         ┌──────────────┐  ┌──────────────────┐
                         │    client    │  │      server        │
                         │ (build-only, │  │ (Express API,       │
                         │  no port)    │  │  internal port 5000) │
                         └──────────────┘  └──────────────────┘
```

* **`client`** — builds the React/Vite app (`npm ci && npm run build`) and copies the output into the `client_build` named volume, then exits. It never listens on a port and is never reached directly — its only job is to produce static files for `nginx` to serve.
* **`server`** — builds the TypeScript API (`tsc`) in one stage, then runs the compiled output in a lean production image (`npm ci --omit=dev`). Listens on port `5000` inside the Docker network only — not published to the host.
* **`nginx`** — the only container with a published port (`80:80`). Serves the client's built static files (mounted read-only from `client_build`) with SPA fallback routing, and reverse-proxies any `/api/*` request to the `server` container.

`nginx` won't start until `client` has finished building (`condition: service_completed_successfully`) and `server` reports healthy (`condition: service_healthy`), so it never serves a stale or empty build, and never proxies to a server that isn't ready yet.

---

## Build

```bash
docker compose build
```

Builds all three images. The `client` and `server` Dockerfiles are built with the **repository root** as their context (not their own subdirectory), because both import from `shared/` — `client/Dockerfile` and `server/Dockerfile` explicitly `COPY shared ./shared` alongside their own source.

## Run

```bash
docker compose up --build
```

Starts all three containers. Once healthy, the site is available at:

```
http://localhost/
```

Run in the background:

```bash
docker compose up --build -d
```

## Stop

```bash
docker compose down
```

Add `-v` to also remove the `client_build` volume (forces a clean rebuild of the client on next `up`):

```bash
docker compose down -v
```

## Logs

```bash
docker compose logs -f            # all services
docker compose logs -f server     # just the API
docker compose logs -f nginx      # just the reverse proxy
```

## Rebuild

After changing application code, rebuild the affected image(s) and recreate the containers:

```bash
docker compose up --build
```

To force a rebuild without Docker's layer cache:

```bash
docker compose build --no-cache
docker compose up
```

---

## Troubleshooting

**`Error response from daemon: ports are not available: exposing port TCP 0.0.0.0:80 ...`**
On Windows, port 80 is frequently reserved by the OS itself (`HTTP.sys`, owned by the `System` process) even when nothing user-visible is running on it. This isn't a problem with the Compose file — it's a host-level conflict. To confirm, run `Get-NetTCPConnection -LocalPort 80` in PowerShell. If port 80 is unavailable, either free it, or temporarily change the `nginx` service's port mapping in `docker-compose.yml` from `"80:80"` to e.g. `"8080:80"` and access the site at `http://localhost:8080/` instead — nothing else about the setup needs to change.

---

## Verifying It's Working

```bash
curl http://localhost/                       # React app (200, HTML)
curl http://localhost/api/health              # {"status":"ok"}
curl http://localhost/api/profile             # {"success":true,"data":{...}}
curl -X POST http://localhost/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","message":"Hello"}'
```

Container health status:

```bash
docker compose ps
```

---

## Environment Variables

Docker Compose sets the server's runtime environment directly in `docker-compose.yml` (`PORT=5000`, `NODE_ENV=production`, `CORS_ORIGIN=http://localhost`) — you don't need a `.env` file to run the containers. `client/.env.example` and `server/.env.example` are for **local (non-Docker) development** only; see the root README.

The client's `VITE_API_BASE_URL` is baked in at build time and defaults to `/api` — which is already correct for this architecture, since Nginx proxies `/api/*` on the same origin the browser loads the page from. No client env var needs to be set for Docker.

---

## Production Deployment

This Compose setup is designed to run identically wherever Docker runs — a VM, a single-host deployment, etc. `docker compose up --build -d` is sufficient for a simple production host.

For anything beyond a single host (auto-scaling, zero-downtime deploys, managed container platforms), see **Future Scope** below — none of it is implemented yet.

### Notes for a real production deployment

* Replace the self-signed nothing-yet TLS setup: this Compose file serves plain HTTP on port 80. Put a TLS-terminating layer in front (a managed load balancer, or add a cert to the `nginx` service) before exposing this to the public internet.
* `CORS_ORIGIN` should be set to the actual public origin if it ever differs from `http://localhost` (e.g. a custom domain).
* The contact endpoint's email sending is still stubbed (logs only) — wiring up a real email provider is a separate, not-yet-implemented step.

---

## Future Scope (not implemented)

* Kubernetes manifests
* Azure Container Apps (or similar managed container hosting)
* GitHub Actions CI/CD
* Automatic Docker image publishing
* Further production image optimization
* Container registry publishing
