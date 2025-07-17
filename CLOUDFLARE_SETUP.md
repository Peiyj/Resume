# Cloudflare Pages Setup Instructions

## 🛠️ Build Configuration

### 1. Build Settings (Dashboard)
Configure these settings in your Cloudflare Pages project:

**Framework preset:** None (Custom)
**Build command:** `npm run build:cloudflare`
**Build output directory:** `build`
**Root directory:** `/Resume` (if using monorepo structure)

⚠️ **CRITICAL**: Make sure to update the build command in the Cloudflare Pages dashboard to use `npm run build:cloudflare` instead of the default npm ci command.

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
If `npm run build:cloudflare` doesn't work, try these alternatives:

**Option A - Direct command:**
```bash
npm install --legacy-peer-deps && npm run build
```

**Option B - With cache clear:**
```bash
npm cache clean --force && npm install --legacy-peer-deps && npm run build
```

**Option C - Force fresh install:**
```bash
rm -rf node_modules package-lock.json && npm install --legacy-peer-deps && npm run build
```

## 🔧 Troubleshooting

### TypeScript Version Conflicts
If you see `Invalid: lock file's typescript@5.8.3 does not satisfy typescript@4.9.5`:

1. **Use build command:** `npm run build:cloudflare` (handles conflicts automatically)
2. **Or use alternative:** `npm install --legacy-peer-deps && npm run build`
3. **Note:** package-lock.json has been removed to force regeneration

### Memory Issues
If build fails with memory errors:
- Set `NODE_OPTIONS=--max-old-space-size=4096` in environment variables

### Cache Issues
If builds are inconsistent:
- Add `npm cache clean --force` before npm ci command

## 📋 Checklist

- [ ] Framework preset: None/Custom  
- [ ] Build command: `npm run build:cloudflare`
- [ ] Build output: `build`
- [ ] Root directory: `/Resume`
- [ ] Node version: 18
- [ ] Environment variables set
- [ ] `.nvmrc` file present (contains `18`)
- [ ] `package.json` has engines field and build:cloudflare script
- [ ] package-lock.json removed from repository

## 🚀 Expected Build Process

1. **Environment Setup** (Node 18, NPM 10)
2. **Cache Clean** (`npm cache clean --force`)
3. **Install Dependencies** (`npm install --legacy-peer-deps`)
4. **Build React App** (`npm run build`)
5. **Deploy** (automatic)

## 🎯 **Step-by-Step Cloudflare Dashboard Setup**

1. **Go to Cloudflare Pages Dashboard**
2. **Select your `resume` project**
3. **Click "Settings" tab**
4. **Scroll to "Builds & deployments"**
5. **Click "Configure" next to "Production deployments"**
6. **Update the following fields:**
   - Framework preset: `None`
   - Build command: `npm run build:cloudflare`
   - Build output directory: `build`
   - Root directory: `/Resume`
7. **Click "Save"**
8. **Go to "Environment variables"**
9. **Add the environment variables listed above**
10. **Trigger a new deployment**

## 📁 Required Files

- ✅ `package.json` (with engines field)
- ✅ `package-lock.json` 
- ✅ `.nvmrc` (Node 18)
- ✅ `package.json` (with build:cloudflare script)
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
3. Test build script locally: `npm run build:cloudflare`
4. Contact Cloudflare support with specific error messages 