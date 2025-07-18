# Multi-stage Docker build for Resume Website
# Supports both development and production environments

# Build stage - Node.js for building React app
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files first for better layer caching
COPY package.json package-lock.json ./

# Install dependencies with legacy peer deps for compatibility  
RUN npm cache clean --force && \
    npm ci --legacy-peer-deps --no-audit --no-fund --silent

# Copy source code
COPY . .

# Build the React application
RUN npm run build

# Production stage - Nginx for serving static files
FROM nginx:alpine AS production

# Copy built React app from builder stage
COPY --from=builder /app/build /usr/share/nginx/html

# Copy custom nginx configuration
COPY docker/nginx.conf /etc/nginx/nginx.conf

# Create non-root user for security
RUN addgroup -g 1001 -S resume && \
    adduser -S resume -u 1001 -G resume

# Change ownership of nginx files
RUN chown -R resume:resume /usr/share/nginx/html && \
    chown -R resume:resume /var/cache/nginx && \
    chown -R resume:resume /var/log/nginx && \
    chown -R resume:resume /etc/nginx/conf.d

# Switch to non-root user
USER resume

# Expose port
EXPOSE 8080

# Start nginx
CMD ["nginx", "-g", "daemon off;"]

# Development stage - Node.js development server
FROM node:18-alpine AS development

WORKDIR /app

# Copy package files
COPY package.json package-lock.json ./

# Install ALL dependencies (including dev)
RUN npm cache clean --force && \
    npm install --legacy-peer-deps --no-audit --no-fund

# Copy source code
COPY . .

# Create non-root user
RUN addgroup -g 1001 -S resume && \
    adduser -S resume -u 1001 -G resume && \
    chown -R resume:resume /app

USER resume

# Expose development port
EXPOSE 3000

# Start development server
CMD ["npm", "start"]

# Cloudflare Workers stage - Minimal for Workers deployment
FROM node:18-alpine AS workers

WORKDIR /app

# Copy built files from builder stage
COPY --from=builder /app/build ./build
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/wrangler.toml ./wrangler.toml
COPY --from=builder /app/worker.js ./worker.js

# Install only Wrangler CLI globally
RUN npm install -g wrangler@latest

# Create deployment info
RUN echo "Build completed at: $(date)" > ./build/build-info.txt && \
    echo "Container: Workers-ready" >> ./build/build-info.txt && \
    echo "Build size: $(du -sh build/ | cut -f1)" >> ./build/build-info.txt

# Create non-root user
RUN addgroup -g 1001 -S resume && \
    adduser -S resume -u 1001 -G resume && \
    chown -R resume:resume /app

USER resume

# Basic health check without external dependencies
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD test -f /app/build/index.html || exit 1

# Default command shows build info
CMD ["cat", "/app/build/build-info.txt"] 