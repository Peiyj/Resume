#!/bin/bash

# Cloudflare Pages build script
set -e

echo "🔧 Starting Cloudflare Pages build..."

# Print environment info
echo "Node version: $(node --version)"
echo "NPM version: $(npm --version)"

# Clean npm cache
echo "🧹 Cleaning npm cache..."
npm cache clean --force

# Install dependencies with legacy peer deps
echo "📦 Installing dependencies..."
npm ci --legacy-peer-deps --no-audit --no-fund --verbose

# Build the React app
echo "🏗️ Building React app..."
npm run build

echo "✅ Build completed successfully!"
echo "📁 Build output:"
ls -la build/ 