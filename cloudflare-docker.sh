#!/bin/bash

# Cloudflare Workers Docker deployment script
set -e

echo "🐳 Building Docker container for Cloudflare Workers..."

# Build the Docker image
echo "📦 Building Cloudflare-specific Docker image..."
docker build -f Dockerfile.cloudflare -t resume-cloudflare:latest .

echo "✅ Docker build completed successfully!"

# Test the container (optional)
echo "🧪 Testing Docker container..."
docker run --rm resume-cloudflare:latest

echo "📋 Build information:"
docker run --rm resume-cloudflare:latest cat /app/build/build-info.txt

echo "📊 Docker image info:"
docker images | grep resume-cloudflare

echo ""
echo "🚀 Docker container is ready for Cloudflare Workers deployment!"
echo "📝 Next steps:"
echo "  1. Update Cloudflare dashboard to use Docker deployment"
echo "  2. Set build command to: ./cloudflare-docker.sh"
echo "  3. Set deploy command to: npm run docker:deploy"
echo ""
echo "🔧 Local testing:"
echo "  docker run --rm -p 8080:8080 resume-cloudflare:latest" 