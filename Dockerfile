# Use Node.js 18 as base image for building
FROM node:18-alpine AS build

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install all dependencies (using npm install to handle version conflicts)
RUN npm install

# Copy source code
COPY . .

# Build the React app
RUN npm run build

# Production stage - use nginx to serve the built app
FROM nginx:alpine

# Copy built files to nginx
COPY --from=build /app/build /usr/share/nginx/html

# Copy custom nginx config
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"] 