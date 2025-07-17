#!/bin/bash

# Docker build and deployment script for Patrick's Resume
set -e

echo "🐳 Building Patrick's Resume Docker Container..."

# Build the production image
echo "📦 Building production image..."
docker build -t patrick-resume:latest .

echo "✅ Build completed successfully!"

# Run the container
echo "🚀 Starting container on port 3000..."
docker run -d -p 3000:80 --name patrick-resume patrick-resume:latest

echo "🌐 Resume is now available at: http://localhost:3000"
echo "📊 Container status:"
docker ps | grep patrick-resume

echo ""
echo "🔧 Useful commands:"
echo "  Stop container:    docker stop patrick-resume"
echo "  Remove container:  docker rm patrick-resume"
echo "  View logs:         docker logs patrick-resume"
echo "  Shell access:      docker exec -it patrick-resume sh"
echo ""
echo "🐳 To use docker-compose instead:"
echo "  Production:        docker-compose up resume-app"
echo "  Development:       docker-compose --profile dev up resume-dev" 