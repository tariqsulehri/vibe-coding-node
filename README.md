# VibeCoding Node Server

Express + Mongoose boilerplate following project rules in `code-rules-nodejs.md`.

Features:
- Express.js server with clean `src/` structure
- Mongoose connection management
- Environment variable handling via `dotenv`
- Centralized error handling and 404 middleware
- Example Faker-based route to return mock user data

Quick start

1. Copy `.env.example` to `.env` and set `MONGO_URI`.
2. Install dependencies:

```bash
npm install
```

3. Start in development:

```bash
npm run dev
```

API

- GET /api/mock/users -> returns an array of fake users

Notes

This scaffold is intended to be production-ready and easy to extend. Follow `src/` layout to add features.
How to Run

Development

docker compose -f docker-compose.yml -f docker-compose.override.yml up --build


Staging

docker compose -f docker-compose.yml -f docker-compose.staging.yml up --build -d


Production

docker compose -f (docker-compose.yml --scale app=3) -f docker-compose.prod.yml up --build -d
docker compose up --scale app=3 -f docker-compose.prod.yml up --build -d



Got it 👍 Thanks for sharing your docker-compose.yml.
The error you hit (port is already allocated) happens because you’re scaling the app service (replicas > 1), but all containers try to bind the same host port (4000:4000), which isn’t possible.

Here’s the professional DevOps approach to fix it:

✅ Why it breaks

ports: - "4000:4000" → means each container tries to bind container’s port 4000 to host’s port 4000.

You can’t bind multiple containers to the same host port.

🔧 Solutions
1. Use only Nginx to expose the app (recommended for prod)

Remove ports from the app service.

Scale app freely (docker-compose up --scale app=3).

Nginx load balances requests across the app containers.

version: "3.9"

services:
  app:
    build:
      context: .
      dockerfile: Dockerfile
    env_file:
      - .env.dev
    expose:
      - "4000"  # expose internally only, not bound to host

  nginx:
    image: nginx:alpine
    ports:
      - "80:80"
    volumes:
      - ./nginx/nginx.conf:/etc/nginx/nginx.conf:ro
    depends_on:
      - app


➡️ In nginx.conf, point upstream to the service name (app:4000).

2. Dynamic port mapping (for testing only)

If you want to run multiple app containers and still access them individually, use:

ports:
  - "4000"  # docker will map container port 4000 to a random free host port


Then check which ports got assigned with:

docker ps

3. Use Docker Swarm or Kubernetes (for advanced setups)

In Swarm, you can scale services and use the built-in load balancer.

In Kubernetes, you’d use a Deployment + Service + Ingress.

🔑 Professional Advice

For production, don’t expose app containers directly — only through Nginx or another reverse proxy/load balancer.

Keep ports only in nginx.

Use .env files to configure different environments (.env.prod, .env.staging, .env.dev).

Use docker-compose.override.yml for local testing.