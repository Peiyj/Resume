# Patrick Pei - Resume Website 🚀

A modern, professional resume website built with React and deployed via **Cloudflare Workers** with full Docker containerization for local development.

## 🌐 Live Website
**[https://ppei.dev](https://ppei.dev)** | **[https://www.ppei.dev](https://www.ppei.dev)**

> 🚀 **Deployed on Cloudflare Workers** - Sub-10ms response times globally from 275+ edge locations

## 📋 Contact Information
- **Email**: yingjianpei2022@u.northwestern.edu  
- **GitHub**: [github.com/peiyj](https://github.com/peiyj)
- **LinkedIn**: [linkedin.com/in/patrickpei11](https://linkedin.com/in/patrickpei11)

## ✨ Features

- 🎨 **Modern React Design**: Component-based architecture with smooth animations
- 🌙 **Dark Mode by Default**: Professional dark theme with light mode option
- 📱 **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- 🐳 **Docker Development**: Containerized local development environment
- ⚡ **Edge Performance**: Cloudflare Workers with global CDN and sub-10ms response times
- 🎯 **ATS-Friendly**: SEO optimized and machine-readable
- 🖨️ **Print-Ready**: Optimized CSS for printing
- ♿ **Accessible**: WCAG compliant design with proper semantic HTML
- 💾 **Theme Persistence**: Remembers user's theme preference

## 🏗️ Project Structure

```
resume-react/
├── docker/
│   └── nginx.conf              # Production nginx configuration
├── public/
│   ├── index.html              # HTML template
│   ├── patrick_resume.pdf      # Latest PDF version (100KB, 1 page)
│   ├── patrick_resume.tex      # LaTeX source for PDF
│   └── manifest.json           # PWA manifest
├── src/
│   ├── assets/
│   │   └── images/             # Profile photos, etc.
│   ├── components/
│   │   ├── Header.js           # Contact info & theme toggle
│   │   ├── Background.js       # Animated background
│   │   ├── Experience.js       # Professional experience
│   │   ├── Skills.js           # Technical skills
│   │   ├── Entrepreneurship.js # Startup experience  
│   │   ├── Education.js        # Academic background
│   │   └── Footer.js           # Contact links
│   ├── App.js                  # Main application
│   ├── index.css               # Global styles
│   └── index.js                # App entry point
├── Dockerfile                  # Multi-stage Docker build (local dev)
├── docker-compose.yml          # Docker orchestration (local dev)
├── package.json                # Dependencies & scripts
└── worker.js                   # Cloudflare Worker
```

## 🚀 Quick Start

### **Cloudflare Workers Deployment (Production)**
```bash
# Clone repository
git clone https://github.com/peiyj/resume.git
cd resume/Resume

# Install dependencies
npm install --legacy-peer-deps

# Deploy to Cloudflare Workers
npm run deploy
```

### **Local Development (Node.js)**
```bash
# Start development server
npm start
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🐳 Docker Development (Optional)

For containerized local development:

### **Development Environment**
```bash
# Copy environment template
cp .env.example .env

# Start development server with Docker
npm run docker:dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### **Production Environment**
```bash
# Build and start production server
npm run docker:prod
```
Open [http://localhost:8080](http://localhost:8080) in your browser.

## 🛠️ Technology Stack

### Frontend
- **React 18.2.0**: Modern component-based architecture
- **CSS Variables**: Dynamic theming system
- **Local Storage**: Theme preference persistence
- **Responsive Design**: Mobile-first approach

### Infrastructure
- **Cloudflare Workers**: Edge deployment and global CDN
- **Docker**: Containerized local development (optional)
- **Docker Compose**: Multi-environment orchestration (optional)
- **Nginx**: Production web server for Docker (optional)
- **npm**: Package management

### Content Management
- **LaTeX**: PDF resume generation
- **Organized Assets**: Images in `/src/assets/`
- **Component Architecture**: Modular, reusable components

## 📊 Professional Experience Summary

### 8 Roles Across 5+ Years
- **Coursera**: Senior SWE to Intern (Mountain View, CA)
- **Samsara**: IoT fleet management (San Francisco, CA)  
- **Roche**: Bioinformatics tools (Tucson, AZ)
- **UCSD Medical**: Research & ML (San Diego, CA)

### Technical Expertise
- **Languages**: Python, Java, JavaScript, TypeScript, GoLang, C++
- **Frameworks**: React, Node.js, Django, Spring Boot, Angular
- **Tools**: Docker, Kubernetes, AWS, Git, Jenkins
- **Databases**: PostgreSQL, Redis, MongoDB, Elasticsearch

## 📝 Content Customization

### Update Your Information
- **Contact Info**: `src/components/Header.js`
- **Experience**: `src/components/Experience.js`
- **Skills**: `src/components/Skills.js`
- **Education**: `src/components/Education.js`
- **Footer Links**: `src/components/Footer.js`

### Asset Management
- **Profile Photos**: Add to `src/assets/images/`
- **Import in components**: `import photo from '../assets/images/photo.jpg'`

### PDF Resume Updates
1. Edit `public/patrick_resume.tex`
2. Compile: `pdflatex patrick_resume.tex`
3. Rebuild: `npm run build`

## 🔧 Available Scripts

```bash
# Cloudflare Workers Deployment
npm run deploy                   # Build + Deploy to production
npm run deploy:preview           # Build + Deploy to preview environment

# Local Development  
npm start                        # Start development server
npm run build                    # Production build

# Docker Development (Optional)
npm run docker:dev               # Start development environment
npm run docker:prod              # Start production environment
npm run docker:workers           # Build for Workers deployment

# Docker Build Commands (Optional)
npm run docker:build             # Build production image
npm run docker:build-dev         # Build development image
npm run docker:build-workers     # Build Workers image

# Cloudflare Workers Direct
npm run workers:dev              # Local Workers development
npm run workers:deploy           # Deploy Workers only
```

## ⚡ Deployment Options

### **Option 1: Simple Deployment (Recommended)**
- **Fast**: Uses Cloudflare's Node.js environment directly
- **Build Time**: ~35 seconds  
- **Commands**: `npm run build` → `wrangler deploy`

### **Option 2: Docker Deployment (Advanced)**
- **Consistent**: Uses containerized builds
- **Build Time**: ~3+ minutes
- **Commands**: `docker compose --profile workers build workers` → `wrangler deploy`

## 🎨 Customization

### Color Themes
Update CSS variables in `src/index.css`:
```css
/* Light Mode */
--primary: #3182ce;
--secondary: #38a169; 
--background: #f8fafc;

/* Dark Mode */
--primary-dark: #63b3ed;
--secondary-dark: #68d391;
--background-dark: #1a202c;
```

### Fonts
Currently using Inter from Google Fonts. Update in `public/index.html`.

## 📈 Performance

- **React 18**: Latest React with concurrent features
- **Fast Builds**: Direct npm builds (~35s) or Docker builds (~3min)
- **Edge Deployment**: Cloudflare Workers global distribution
- **Fast Loading**: < 50KB gzipped bundle

## 🔄 Recent Updates

### Version 2.5 (January 2025) - Latest [[memory:3504629]]
- ⚡ **Simplified Deployment**: Direct npm build approach for faster Cloudflare deployment (~35s vs 3+ hours)
- 🐳 **Docker for Development**: Docker remains available for local development environments
- 🚀 **Dual Approach**: Choose between simple deployment or containerized builds
- 📦 **Added Preview Deployment**: `npm run deploy:preview` for branch testing

### Version 2.4 (January 2025)
- 🐳 **Full Docker Containerization**: Multi-environment Docker setup with development, production, and Workers stages
- 🧹 **Code Cleanup**: Removed unused dependencies (testing libraries, web-vitals), unused code, and duplicate assets
- 📦 **Simplified Build Process**: Docker-first approach with docker-compose orchestration
- 🔧 **Optimized Dependencies**: Removed 5 unused packages, cleaned project structure
- 🚀 **Enhanced Performance**: Nginx production server with compression and security headers

## 🆘 Troubleshooting

### Common Issues
- **Deployment timeouts**: Use simple deployment (`npm run deploy`) instead of Docker approach
- **Build failures**: Ensure Node.js 18.x and npm 10.x are installed
- **Local development**: Use `npm start` for fastest development experience

### Getting Help
1. Check `CLOUDFLARE_WORKERS_DEPLOYMENT.md` for deployment issues
2. Use simple deployment for fastest builds: `npm run deploy`
3. Docker is optional - use `npm start` for local development
4. Verify deployment at https://ppei.dev

## 📞 Support & Contributing

For issues or questions:
1. **Check documentation** in this README and `CLOUDFLARE_WORKERS_DEPLOYMENT.md`
2. **Test locally**: `npm start` (fastest) or `npm run docker:dev` (containerized)
3. **Deploy**: `npm run deploy` (simple) or Docker approach (advanced)
4. **Verify deployment** at https://ppei.dev

---

**Built with ❤️ by Patrick Pei** | **Deployed with ⚡ Cloudflare Workers** | **Live at [ppei.dev](https://ppei.dev)**