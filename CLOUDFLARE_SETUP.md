# Cloudflare Workers Deployment Guide 🚀

This guide covers deploying the React resume website to **Cloudflare Workers** using Docker containerization.

## 🎯 Deployment Overview

The deployment uses a Docker-based approach that:
1. **Builds the React app** in a Node.js container
2. **Creates a minimal Alpine container** with the built files
3. **Deploys to Cloudflare Workers** for global edge distribution

## ⚡ Quick Deploy

```bash
npm run deploy
```

This runs `./cloudflare-docker.sh` which handles the entire build and deployment process.

## 🐳 Cloudflare Workers Configuration

### Dashboard Settings

1. **Navigate to**: Cloudflare Dashboard → Workers & Pages → Create Application
2. **Choose**: Workers (not Pages)
3. **Build Configuration**:
   ```
   Build command: ./cloudflare-docker.sh
   Build output: Docker container
   Root directory: /Resume
   ```

### Environment Variables

Set these in Cloudflare Workers dashboard:
```bash
NODE_VERSION=18.x
NPM_FLAGS=--legacy-peer-deps
```

## 🔧 Docker Build Process

The `./cloudflare-docker.sh` script performs:

### Stage 1: Build React App
```dockerfile
FROM node:18-alpine AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --legacy-peer-deps --no-audit --no-fund
COPY . .
RUN npm run build
```

### Stage 2: Deploy Container
```dockerfile
FROM alpine:latest AS deploy
COPY --from=builder /app/build /app/build
WORKDIR /app
```

## 📊 Build Output

After successful build:
```
✅ Docker build completed successfully!
📦 Image size: 9.22MB  
🧪 Container test: PASSED
🚀 Ready for Cloudflare Workers deployment
```

## 🚨 Troubleshooting

### Common Build Issues

**1. npm dependency conflicts**
```bash
# Solution: Use legacy peer deps
npm install --legacy-peer-deps
```

**2. Docker not found**
```bash
# Ensure Docker is running
docker --version
```

**3. React build fails**
```bash
# Check dependencies
npm ci --legacy-peer-deps
npm run build
```

### Build Logs Analysis

**Success indicators:**
- ✅ `npm ci` completes without errors
- ✅ `react-scripts build` succeeds
- ✅ Docker image builds (9.22MB)
- ✅ Container health check passes

**Failure patterns:**
- ❌ `npm error Exit handler never called` → Use `--legacy-peer-deps`
- ❌ `react-scripts: not found` → Dependencies not installed
- ❌ Docker build timeout → Check Docker resources

## 🔄 Manual Deployment Steps

If automatic deployment fails:

### 1. Local Build Test
```bash
./cloudflare-docker.sh
```

### 2. Verify Build Output
```bash
docker run --rm patrick-resume:latest
# Should output: "Cloudflare Workers Docker build completed successfully"
```

### 3. Check Build Files
```bash
docker run --rm patrick-resume:latest ls -la /app/build/
# Should show: index.html, static/, etc.
```

## 🏗️ Advanced Configuration

### Custom Docker Build

```bash
# Build with custom tag
docker build -f Dockerfile.cloudflare -t custom-resume .

# Test container
docker run --rm custom-resume
```

### Environment-Specific Builds

```bash
# Development build
NODE_ENV=development ./cloudflare-docker.sh

# Production build (default)
NODE_ENV=production ./cloudflare-docker.sh
```

## 📈 Performance Optimization

### Build Size
- **Total image**: 9.22MB
- **React bundle**: ~50KB gzipped
- **Assets**: Profile images, icons

### Speed Optimizations
- Multi-stage Docker build
- npm cache optimization
- Alpine Linux base image
- Code splitting enabled

## 🔐 Security Considerations

### Docker Security
- Non-root user in container
- Minimal Alpine base image
- No sensitive data in image

### Cloudflare Security
- Automatic HTTPS
- DDoS protection
- Global CDN caching

## 📞 Support

### Debug Commands
```bash
# Check Docker status
docker ps -a

# View build logs
docker logs <container_id>

# Test local React build
npm run build && npx serve -s build
```

### Getting Help

1. **First**: Run `./cloudflare-docker.sh` locally
2. **Check**: Build logs for specific errors  
3. **Verify**: Docker and npm versions
4. **Test**: React build independently

---

**Need help?** Check build logs and test locally first! 🔍 