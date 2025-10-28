# Stage 1: Build
FROM node:20-alpine AS builder

WORKDIR /app

# Copy dependency files
COPY package*.json ./
RUN npm install --frozen-lockfile

# Copy the rest of the app
COPY . .

# Accept build args
ARG NEXT_PUBLIC_API_BASE_URL
ARG NEXT_PUBLIC_BUILD_TIME

# Pass args to env so Next.js can see them at build time
ENV NEXT_PUBLIC_API_BASE_URL=$NEXT_PUBLIC_API_BASE_URL
ENV NEXT_PUBLIC_BUILD_TIME=$NEXT_PUBLIC_BUILD_TIME

# Build Next.js app
RUN npm run build

# Stage 2: Run
FROM node:20-alpine AS runner
WORKDIR /app

COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules

EXPOSE 3000

CMD ["npm", "run", "start"]
