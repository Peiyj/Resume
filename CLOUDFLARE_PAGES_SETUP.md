# Switch Cloudflare Pages to standard npm build

## ⚠️ Cloudflare Pages Configuration

**IMPORTANT**: Change your Cloudflare Pages settings to:

- **Framework preset**: Create React App
- **Build command**: `npm run build`
- **Build output directory**: `build`
- **Root directory**: `/Resume`

**DO NOT use**: `./cloudflare-docker.sh` for Cloudflare Pages!

## 🐳 Docker Usage

The Docker setup is for:
- **Cloudflare Workers** (not Pages)
- **Local testing**
- **GitHub Actions** (automated deployment)

For Cloudflare Pages, use the standard React build process.
