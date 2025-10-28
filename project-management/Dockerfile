# Stage 1: Build
FROM node:20-alpine AS builder

WORKDIR /app

# Copy dependency files
COPY package*.json ./

# Install dependencies
RUN npm install --frozen-lockfile

# Copy all project files
COPY . .

# 🔥 Add unique build-time variable to force new build on each deploy
ARG NEXT_PUBLIC_BUILD_TIME
ENV NEXT_PUBLIC_BUILD_TIME=$NEXT_PUBLIC_BUILD_TIME

# API Base URL from docker-compose
ARG NEXT_PUBLIC_API_BASE_URL
ENV NEXT_PUBLIC_API_BASE_URL=$NEXT_PUBLIC_API_BASE_URL

# Clean any old cache or build
RUN rm -rf .next node_modules/.cache

# Build Next.js app
RUN npm run build

# Stage 2: Run
FROM node:20-alpine AS runner
WORKDIR /app

# Copy essential files from builder
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules

EXPOSE 3000

CMD ["npm", "run", "start"]
