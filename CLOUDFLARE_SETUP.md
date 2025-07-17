# Cloudflare Pages Setup Instructions

## 🛠️ Build Configuration

### 1. Build Settings (Dashboard)
Configure these settings in your Cloudflare Pages project:

**Framework preset:** None (Custom)
**Build command:** `./cloudflare-build.sh`
**Build output directory:** `build`
**Root directory:** `/Resume` (if using monorepo structure)

### 2. Environment Variables
Set these in Cloudflare Pages dashboard → Settings → Environment Variables:

```
NODE_VERSION=18
NPM_VERSION=10
NODE_OPTIONS=--max-old-space-size=4096
GENERATE_SOURCEMAP=false
INLINE_RUNTIME_CHUNK=false
```

### 3. Alternative Build Commands
If `./cloudflare-build.sh` doesn't work, try these alternatives:

**Option A - Direct command:**
```bash
npm ci --legacy-peer-deps && npm run build
```

**Option B - Simplified:**
```bash
npm install --legacy-peer-deps && npm run build
```

**Option C - With cache clear:**
```bash
npm cache clean --force && npm ci --legacy-peer-deps --no-audit && npm run build
```

## 🔧 Troubleshooting

### TypeScript Version Conflicts
If you see `Invalid: lock file's typescript@5.8.3 does not satisfy typescript@4.9.5`:

1. **Delete package-lock.json** from repository
2. **Use build command:** `npm install --legacy-peer-deps && npm run build`
3. **Or use our script:** `./cloudflare-build.sh`

### Memory Issues
If build fails with memory errors:
- Set `NODE_OPTIONS=--max-old-space-size=4096` in environment variables

### Cache Issues
If builds are inconsistent:
- Add `npm cache clean --force` before npm ci command

## 📋 Checklist

- [ ] Framework preset: None/Custom
- [ ] Build command: `./cloudflare-build.sh`
- [ ] Build output: `build`
- [ ] Node version: 18
- [ ] Environment variables set
- [ ] `.nvmrc` file present (contains `18`)
- [ ] `package.json` has engines field

## 🚀 Expected Build Process

1. **Environment Setup** (Node 18, NPM 10)
2. **Cache Clean** (`npm cache clean --force`)
3. **Install Dependencies** (`npm ci --legacy-peer-deps`)
4. **Build React App** (`npm run build`)
5. **Deploy** (automatic)

## 📁 Required Files

- ✅ `package.json` (with engines field)
- ✅ `package-lock.json` 
- ✅ `.nvmrc` (Node 18)
- ✅ `cloudflare-build.sh` (executable)
- ✅ `public/_headers` (security headers)
- ✅ `public/_redirects` (SPA routing)

## 🔗 Alternative: Use GitHub Actions

If Cloudflare Pages continues to fail, consider using GitHub Actions deployment:
1. Build in GitHub Actions with Docker
2. Deploy to Cloudflare Pages via wrangler CLI
3. Or deploy to GitHub Pages (current working setup)

## 📞 Support

If issues persist:
1. Check Cloudflare Pages build logs
2. Verify all environment variables are set
3. Test build script locally: `./cloudflare-build.sh`
4. Contact Cloudflare support with specific error messages 