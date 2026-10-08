# uru-software-deployment

**Note:** Archived and read-only. Kept for reference from the Software Deployment college course.

Documentation site and demo application for the Software Deployment course ("Despliegue de Software") at URU, term 2025-B. Built collaboratively; this copy is kept under `ralvarezdev`'s account.

## Documentation site

`docs/` is a Spanish-language MkDocs Material site (`mkdocs.yml`) covering deployment concepts: storage (RAID), virtualization (containers/Docker, VMs), bundlers (Vite), management systems (PM2, CMS) and networking (domains, public IP, port forwarding). Published at `uru-software-deployment.ralvarez.dev` (see `docs/CNAME`). Dependencies pinned in `requirements.txt` (`mkdocs`, `mkdocs-material`, `mkdocs-callouts`).

## Demo application

`app/` is a small multi-service demo illustrating deployment concepts, orchestrated by `app/docker-compose.yml`:

| Service | Tech | Role |
|---|---|---|
| `auth-grpc` / `joke-grpc` | Python, grpcio/protobuf | Auth / joke-serving gRPC services |
| `rest-api` | Python, FastAPI/Uvicorn | REST API fronting the gRPC services |
| `http-test` | Python, FastAPI/Uvicorn | small HTTP test server |
| `frontend` | React 19 + Vite + react-router | Web UI |
| `auth_db` / `joke_db` | PostgreSQL | databases on ports 5433 / 5434 |

Only `auth_db`, `joke_db` and `frontend` are wired into `docker-compose.yml` with Dockerfiles; `auth-grpc`, `joke-grpc`, `rest-api` and `http-test` currently ship only their `requirements.txt` (no application source committed under this snapshot).

## Running

Documentation site:

```bash
pip install -r requirements.txt
mkdocs serve
```

Demo application:

```bash
cd app
cp .env.example .env   # fill in POSTGRES_AUTH_*/POSTGRES_JOKE_* variables
docker compose up --build
```

`auth_db` is exposed on host port `5433`, `joke_db` on `5434`, `frontend` on `52318`.

## Configuration

`app/.env.example` lists: `POSTGRES_AUTH_USER`, `POSTGRES_AUTH_PASSWORD`, `POSTGRES_AUTH_DB`, `POSTGRES_JOKE_USER`, `POSTGRES_JOKE_PASSWORD`, `POSTGRES_JOKE_DB`.

`.ssh/linux_server_rsa.example` is a template for an SSH key used in the deployment manual — never commit the real private key.

## License

GNU General Public License v3.0 (see `LICENSE`).
