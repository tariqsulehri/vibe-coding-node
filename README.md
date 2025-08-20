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
