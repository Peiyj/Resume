# 🚀 Cloudflare Workers Deployment Guide

Deploy your React resume website to **Cloudflare Workers** using Wrangler CLI for maximum performance and global edge distribution.

## ⚡ **Prerequisites**

```bash
# Install Wrangler CLI globally
npm install -g wrangler

# Install project dependencies
npm install --legacy-peer-deps
```

## 🔧 **Setup Steps**

### 1. **Authenticate with Cloudflare**
```bash
wrangler login
```

### 2. **Configure Your Domain (Optional)**
Edit `wrangler.toml` to update your domain:
```toml
[[routes]]
pattern = "ppei.dev/*"          # Change to your domain
zone_name = "ppei.dev"          # Change to your zone
```

### 3. **Build and Deploy**
```bash
# Single command deployment
npm run deploy

# Or step by step:
npm run build                   # Build React app
npm run workers:deploy          # Deploy to Workers
```

## 🏗️ **Architecture Overview**

### **How It Works:**
1. **React Build**: Creates optimized static files in `/build/`
2. **Workers KV**: Stores static assets (HTML, CSS, JS, images)
3. **Worker Script**: Serves files from KV with edge caching
4. **Global Edge**: Deployed to 275+ locations worldwide

### **File Structure:**
```
Resume/
├── build/                 # React build output
├── worker.js             # Cloudflare Worker script
├── wrangler.toml         # Workers configuration
├── cloudflare-build.sh   # Build script (no Docker!)
└── package.json          # Updated with Workers deps
```

## 🔧 **Development Workflow**

### **Local Development**
```bash
# Start React dev server
npm start

# Test Workers locally (after build)
npm run build
npm run workers:dev
```

### **Production Deployment**
```bash
# Deploy to Workers
npm run deploy
```

## 📊 **Configuration Files**

### **wrangler.toml**
```toml
name = "resume"
main = "worker.js"
compatibility_date = "2024-07-17"

[site]
bucket = "./build"            # Serves files from React build
entry-point = "worker.js"

[vars]
ENVIRONMENT = "production"

[[routes]]
pattern = "ppei.dev/*"        # Your custom domain
zone_name = "ppei.dev"
```

### **worker.js**
- Serves static React files from KV storage
- Adds security headers
- Handles SPA routing
- Global edge caching

## 🚀 **Deployment Options**

### **Option 1: Command Line (Recommended)**
```bash
npm run deploy
```

### **Option 2: Wrangler Direct**
```bash
wrangler deploy
```

### **Option 3: CI/CD Integration**
```bash
# In your CI/CD pipeline
npm install -g wrangler
wrangler deploy --env production
```

## 🌐 **Custom Domain Setup**

### **1. Add Domain to Cloudflare**
- Add your domain to Cloudflare DNS
- Update nameservers if needed

### **2. Configure Routes**
```toml
[[routes]]
pattern = "your-domain.com/*"
zone_name = "your-domain.com"
```

### **3. Deploy**
```bash
npm run workers:deploy
```

## 📈 **Performance Benefits**

### **Cloudflare Workers Advantages:**
- ⚡ **Sub-10ms response times** globally
- 🌍 **275+ edge locations** worldwide  
- 📱 **0ms cold starts** (always warm)
- 🔒 **Built-in security** headers and DDoS protection
- 📊 **Real-time analytics** and monitoring

### **vs. Traditional Hosting:**
| Feature | Workers | Traditional |
|---------|---------|-------------|
| **Cold Start** | 0ms | 100-1000ms |
| **Global Edge** | 275+ locations | 1-5 regions |
| **Scaling** | Automatic | Manual |
| **Security** | Built-in | Manual setup |

## 🆘 **Troubleshooting**

### **Common Issues:**

**1. Authentication Error**
```bash
wrangler login
# Follow browser authentication
```

**2. Domain Not Working**
```bash
# Check zone configuration
wrangler route list

# Verify DNS
dig your-domain.com
```

**3. Build Fails**
```bash
# Clean and rebuild
rm -rf build/
npm run build
```

### **Debug Commands**
```bash
# Check deployment status
wrangler deployments list

# View logs
wrangler tail

# Test locally
wrangler dev
```

## 📞 **Expected Results**

After successful deployment:
- ✅ `https://resume.your-subdomain.workers.dev` - Workers URL
- ✅ `https://ppei.dev` - Custom domain (if configured)
- ✅ Global edge deployment in ~30 seconds
- ✅ Sub-10ms response times worldwide

## 🎯 **Quick Commands Reference**

```bash
# Setup
npm install -g wrangler
wrangler login

# Development
npm start                    # React dev server
npm run workers:dev         # Test Workers locally

# Deployment  
npm run deploy              # Build + Deploy
npm run workers:deploy      # Deploy only

# Management
wrangler deployments list   # View deployments
wrangler tail              # View logs
```

---

**Your React app is now powered by Cloudflare's global edge network!** 🌍⚡ 