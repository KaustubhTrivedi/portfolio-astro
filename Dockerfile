# Stage 1: Build the application
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files for dependency installation
COPY package*.json ./

# Install dependencies
RUN npm ci --production=false

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Stage 2: Production server
FROM node:20-alpine AS production

# Install serve globally and wget for healthcheck
RUN npm install -g serve && \
    apk add --no-cache wget

# Create a non-root user
RUN addgroup -g 1001 -S nodejs
RUN adduser -S astro -u 1001

# Set working directory
WORKDIR /app

# Copy built application from builder stage
COPY --from=builder --chown=astro:nodejs /app/dist ./dist

# Switch to non-root user
USER astro

# Expose port 3000
EXPOSE 3000

# Start the server
CMD ["serve", "-s", "dist", "-l", "3000"]
