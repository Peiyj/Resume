# Cloudflare Pages Setup Instructions

## 🚨 **CRITICAL: Cloudflare Pages vs Workers**

**Your project is currently configured for Cloudflare Workers** (hence the `wrangler deploy` error). You need a **Cloudflare Pages** project instead.

### ❌ Current Problem
- Deploy command shows: `npx wrangler deploy` 
- This is for Cloudflare Workers (requires Node 20+)
- Your React app needs Cloudflare Pages (static hosting)

## 🛠️ **SOLUTION: Fix Dashboard Configuration**

### Option A: Fix Current Project Settings

1. **Go to Cloudflare Pages Dashboard**
2. **Select your `resume` project**
3. **Click "Settings" tab**
4. **Scroll to "Builds & deployments"**
5. **Click "Configure" next to "Production deployments"**
6. **CLEAR the Deploy command field** (leave empty!)
7. **Update these settings:**
   - Framework preset: `None`
   - Build command: `npm run build:cloudflare`
   - Build output directory: `build`
   - Root directory: `/Resume`
   - **Deploy command: [LEAVE EMPTY]**
8. **Click "Save"**

### Option B: Create New Cloudflare Pages Project

If Option A doesn't work:

1. **Delete current project** (if it's Workers-based)
2. **Create new Cloudflare Pages project**
3. **Connect to GitHub repository**
4. **Use these settings:**
   - Framework preset: `Create React App`
   - Build command: `npm run build`
   - Build output directory: `build`
   - Root directory: `/Resume`

## 🔧 **Build Configuration**

### 1. Build Settings (Dashboard)
**Framework preset:** Create React App (or None)
**Build command:** `npm run build:cloudflare`
**Build output directory:** `build`
**Root directory:** `/Resume`
**Deploy command:** [LEAVE EMPTY - this is key!]

⚠️ **CRITICAL**: The deploy command field must be empty for Pages!

### 2. Environment Variables (Optional)
Set these in Cloudflare Pages dashboard → Settings → Environment Variables:

```
NODE_VERSION=18
NPM_VERSION=10
NODE_OPTIONS=--max-old-space-size=4096
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
✅ **RESOLVED**: Dependencies now install successfully!

### Wrangler Deploy Error
❌ **Current Issue**: Your project is configured for Workers, not Pages
✅ **Solution**: Clear the deploy command in dashboard settings

### Memory Issues
If build fails with memory errors:
- Set `NODE_OPTIONS=--max-old-space-size=4096` in environment variables

### Cache Issues
If builds are inconsistent:
- Add `npm cache clean --force` before npm ci command

## 📋 Checklist

- [ ] Project type: Cloudflare **Pages** (not Workers)
- [ ] Framework preset: Create React App or None/Custom  
- [ ] Build command: `npm run build:cloudflare`
- [ ] Build output: `build`
- [ ] Root directory: `/Resume`
- [ ] **Deploy command: [EMPTY]** ← This is critical!
- [ ] Node version: 18
- [ ] Environment variables set (optional)
- [ ] `.nvmrc` file present (contains `18`)
- [ ] `package.json` has engines field and build:cloudflare script
- [ ] package-lock.json present and working

## 🚀 Expected Build Process

1. **Environment Setup** (Node 18, NPM 10) ✅
2. **Install Dependencies** (`npm install --legacy-peer-deps`) ✅  
3. **Build React App** (`npm run build`) 
4. **Deploy** (automatic - no wrangler needed)

## 🎯 **Step-by-Step Dashboard Fix**

1. **Go to your Cloudflare dashboard**
2. **Find your resume project**
3. **Check if it says "Workers & Pages" or just "Pages"**
4. **If it's Workers**: Delete and recreate as Pages project
5. **If it's Pages**: Clear the deploy command field
6. **Set build command to**: `npm run build:cloudflare`
7. **Ensure deploy command is empty**
8. **Save and redeploy**

## 📁 Required Files

- ✅ `package.json` (with packageManager and build:cloudflare script)
- ✅ `package-lock.json` (working correctly now!)
- ✅ `.nvmrc` (Node 18)
- ✅ `.npmrc` (with legacy-peer-deps=true)
- ✅ `public/_headers` (security headers)
- ✅ `public/_redirects` (SPA routing)

## 🔗 Alternative: Use GitHub Pages

Your GitHub Actions deployment should work now! If Cloudflare continues to be problematic, your site is also available at:
- https://peiyj.github.io/resume

## 📞 Support

The dependency issues are now **fully resolved**! If you're still having issues:

1. ✅ Dependencies: Fixed!
2. ❌ Deploy method: Check dashboard settings
3. Test build script locally: `npm run build:cloudflare` ✅
4. Verify project type: Should be "Pages" not "Workers"

## 🎉 Success Indicators

You'll know it's working when you see:
```
✅ Installing project dependencies: npm clean-install
✅ added 1503 packages in 25s
✅ Building application
✅ Build completed
✅ Deploying to Cloudflare's global network (no wrangler!)
``` 