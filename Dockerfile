# ---------------------------
# Base stage (common setup)
# ---------------------------
FROM node:24-alpine AS base
WORKDIR /app

# Copy only package files first (better caching)
COPY package*.json ./

# Install production dependencies only
RUN npm install --production

# ---------------------------
# Development stage
# ---------------------------
FROM node:24-alpine AS development
WORKDIR /app

# Copy everything (dev needs full code + dev deps)
COPY package*.json ./
RUN npm install          # install ALL deps including devDependencies
COPY . .

ENV NODE_ENV=development
EXPOSE 4000

# Run with nodemon in dev (if installed)
CMD ["npm", "run", "dev"]

# ---------------------------
# Staging stage
# ---------------------------
FROM base AS staging
WORKDIR /app
COPY . .

ENV NODE_ENV=staging
EXPOSE 4000

CMD ["node", "src/server.js"]

# ---------------------------
# Production stage
# ---------------------------
FROM base AS production
WORKDIR /app
COPY . .

ENV NODE_ENV=production
EXPOSE 4000

CMD ["node", "src/server.js"]
