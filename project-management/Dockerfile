# Stage 1: Build
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package.json and lockfile
COPY package*.json ./

# Install dependencies
RUN npm install --frozen-lockfile

# Copy the rest of the project
COPY . .

# Accept build-time variable
ARG NEXT_PUBLIC_API_BASE_URL
ENV NEXT_PUBLIC_API_BASE_URL=$NEXT_PUBLIC_API_BASE_URL
# 🧹 Clean previous build cache (important!)
RUN rm -rf .next node_modules/.cache
# Build the Next.js app
RUN npm run build

# Stage 2: Run
FROM node:20-alpine AS runner

WORKDIR /app

# Only copy the necessary files from builder
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules

EXPOSE 3000

# Run Next.js in production mode
CMD ["npm", "run", "start"]
