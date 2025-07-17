# Patrick Pei - Resume Website 🚀

A modern, professional resume website built with React and deployed via **Cloudflare Workers** with full Docker containerization.

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
- 🐳 **Full Docker Containerization**: Multi-stage builds for all environments
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
├── Dockerfile                  # Multi-stage Docker build
├── docker-compose.yml          # Docker orchestration
├── package.json                # Dependencies & scripts
└── worker.js                   # Cloudflare Worker
```

## 🐳 Docker Quick Start

### Development Environment
```bash
# Clone repository
git clone https://github.com/peiyj/resume.git
cd resume/Resume

# Copy environment template
cp .env.example .env

# Start development server with hot reload
npm run docker:dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Environment
```bash
# Build and start production server
npm run docker:prod
```
Open [http://localhost:8080](http://localhost:8080) in your browser.

### Cloudflare Workers Deployment
```bash
# Set your Cloudflare API token in .env
echo "CLOUDFLARE_API_TOKEN=your_token_here" >> .env

# Deploy to Cloudflare Workers
npm run deploy
```

## 🛠️ Technology Stack

### Frontend
- **React 18.2.0**: Modern component-based architecture
- **CSS Variables**: Dynamic theming system
- **Local Storage**: Theme preference persistence
- **Responsive Design**: Mobile-first approach

### Infrastructure
- **Docker**: Multi-stage containerized builds
- **Docker Compose**: Multi-environment orchestration
- **Nginx**: Production web server with optimizations
- **Cloudflare Workers**: Edge deployment
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
3. Rebuild: `npm run docker:build`

## 🔧 Available Scripts

```bash
# Docker Development
npm run docker:dev              # Start development environment
npm run docker:prod             # Start production environment
npm run docker:workers          # Build for Workers deployment

# Docker Build Commands
npm run docker:build            # Build production image
npm run docker:build-dev        # Build development image
npm run docker:build-workers    # Build Workers image

# Direct Development (requires Node.js)
npm start                       # Start dev server
npm run build                   # Production build

# Cloudflare Workers
npm run deploy                  # Deploy to Workers
npm run workers:dev             # Local Workers development
npm run workers:deploy          # Deploy Workers only
```

## 🐳 Docker Architecture

### Multi-Stage Build Process
1. **Builder Stage**: Node.js 18 Alpine - builds React app
2. **Development Stage**: Node.js with hot reload and dev tools
3. **Production Stage**: Nginx Alpine - serves optimized static files
4. **Workers Stage**: Alpine with Wrangler - ready for Cloudflare deployment

### Environment Management
- **Development**: Hot reload, dev tools, volume mounting
- **Production**: Nginx optimization, security headers, compression
- **Workers**: Minimal container for Cloudflare deployment

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
- **Docker Optimization**: Multi-stage builds with minimal final images
- **Nginx Compression**: Gzip compression and caching headers
- **Edge Deployment**: Cloudflare Workers global distribution
- **Fast Loading**: < 50KB gzipped bundle

## 🔄 Recent Updates

### Version 2.4 (January 2025) - Latest [[memory:3504629]]
- 🐳 **Full Docker Containerization**: Multi-environment Docker setup with development, production, and Workers stages
- 🧹 **Code Cleanup**: Removed unused dependencies (testing libraries, web-vitals), unused code, and duplicate assets
- 📦 **Simplified Build Process**: Docker-first approach with docker-compose orchestration
- 🔧 **Optimized Dependencies**: Removed 5 unused packages, cleaned project structure
- 🚀 **Enhanced Performance**: Nginx production server with compression and security headers

### Version 2.3 (January 2025)
- 🌐 **Production Domain**: Live at https://ppei.dev with Cloudflare Workers
- 🧹 **Consolidated Documentation**: Single source of truth in README.md
- ⚡ **Optimized Performance**: Global edge deployment with sub-10ms response times
- 🔧 **Streamlined Deployment**: Single `npm run deploy` command

## 🆘 Troubleshooting

### Common Issues
- **Docker not found**: Install Docker Desktop and ensure it's running
- **Port conflicts**: Change ports in docker-compose.yml or .env file
- **Build failures**: Check Docker has sufficient memory (>4GB recommended)

### Getting Help
1. Check `CLOUDFLARE_WORKERS_DEPLOYMENT.md` for deployment issues
2. Review Docker logs: `docker-compose logs`
3. Test individual services: `docker-compose up [service-name]`
4. Verify deployment at https://ppei.dev

## 📞 Support & Contributing

For issues or questions:
1. **Check documentation** in this README and `CLOUDFLARE_WORKERS_DEPLOYMENT.md`
2. **Test locally** with Docker: `npm run docker:dev`
3. **Review logs** for specific error messages
4. **Verify deployment** at https://ppei.dev

---

**Built with ❤️ by Patrick Pei** | **Deployed with 🐳 Docker & ☁️ Cloudflare Workers** | **Live at [ppei.dev](https://ppei.dev)**