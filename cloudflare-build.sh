#!/bin/bash

echo "🚀 Building React app for Cloudflare deployment..."

# Clean any previous builds
echo "🧹 Cleaning previous builds..."
rm -rf build/

# Install dependencies with legacy peer deps
echo "📦 Installing dependencies..."
npm ci --legacy-peer-deps --no-audit --no-fund

# Build React application
echo "⚛️ Building React application..."
npm run build

# Verify build completed
if [ -d "build" ] && [ -f "build/index.html" ]; then
    echo "✅ Build completed successfully!"
    echo "📊 Build contents:"
    ls -la build/
    echo "🚀 Ready for Cloudflare deployment!"
else
    echo "❌ Build failed - build directory or index.html not found"
    exit 1
fi 