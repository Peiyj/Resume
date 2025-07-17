# Multi-stage build for production
FROM node:18-alpine AS build

# Set working directory
WORKDIR /app

# Build argument for legacy peer deps
ARG LEGACY_PEER_DEPS=false

# Copy package files first (for better layer caching)
COPY package.json package-lock.json ./

# Install dependencies with conditional legacy peer deps
RUN npm cache clean --force && \
    if [ "$LEGACY_PEER_DEPS" = "true" ]; then \
        npm ci --legacy-peer-deps --no-audit --no-fund; \
    else \
        npm ci --no-audit --no-fund; \
    fi

# Copy source code
COPY . .

# Build the React app
RUN npm run build

# Production stage - lightweight nginx server
FROM nginx:alpine AS production

# Install additional tools for debugging if needed
RUN apk add --no-cache curl

# Copy built files to nginx
COPY --from=build /app/build /usr/share/nginx/html

# Copy custom nginx config
COPY nginx.conf /etc/nginx/nginx.conf

# Create a non-root user for security
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nextjs -u 1001

# Change ownership of nginx files
RUN chown -R nextjs:nodejs /usr/share/nginx/html && \
    chown -R nextjs:nodejs /var/cache/nginx && \
    chown -R nextjs:nodejs /var/log/nginx && \
    chown -R nextjs:nodejs /etc/nginx/conf.d

# Switch to non-root user
USER nextjs

# Expose port 80
EXPOSE 80

# Add health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:80/ || exit 1

# Start nginx
CMD ["nginx", "-g", "daemon off;"] 