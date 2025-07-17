# Patrick Pei - Resume Website 🚀

A modern, professional resume website built with React and deployed via **Cloudflare Workers** with Docker containerization.

## 🌐 Live Website
**[https://ppei.dev](https://ppei.dev)**

## 📋 Contact Information
- **Email**: yingjianpei2022@u.northwestern.edu  
- **GitHub**: [github.com/peiyj](https://github.com/peiyj)
- **LinkedIn**: [linkedin.com/in/patrickpei11](https://linkedin.com/in/patrickpei11)

## ✨ Features

- 🎨 **Modern React Design**: Component-based architecture with smooth animations
- 🌙 **Dark Mode by Default**: Professional dark theme with light mode option
- 📱 **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- ⚡ **Fast Loading**: Optimized React build with code splitting
- 🐳 **Docker Containerized**: Multi-stage builds for Cloudflare Workers
- 🎯 **ATS-Friendly**: SEO optimized and machine-readable
- 🖨️ **Print-Ready**: Optimized CSS for printing
- ♿ **Accessible**: WCAG compliant design with proper semantic HTML
- 💾 **Theme Persistence**: Remembers user's theme preference

## 🏗️ Project Structure

```
patrick-resume-react/
├── public/
│   ├── index.html              # HTML template
│   ├── patrick_resume.pdf      # Latest PDF version (100KB, 1 page)
│   ├── patrick_resume.tex      # LaTeX source for PDF
│   └── manifest.json           # PWA manifest
├── src/
│   ├── assets/
│   │   ├── images/             # Profile photos, etc.
│   │   └── icons/              # App icons, logos
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
├── Dockerfile.cloudflare       # Docker build for Cloudflare Workers
├── cloudflare-docker.sh        # Build & deployment script
├── package.json                # Dependencies & scripts
└── CLOUDFLARE_SETUP.md        # Deployment documentation
```

## 🚀 Quick Start

### Local Development
```bash
# Clone repository
git clone https://github.com/peiyj/resume.git
cd resume/Resume

# Install dependencies
npm install --legacy-peer-deps

# Start development server
npm start
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 🐳 Docker Development

For consistent development environment:

```bash
# Build and test Docker container
./cloudflare-docker.sh

# Manual Docker commands
docker build -f Dockerfile.cloudflare -t patrick-resume .
docker run --rm patrick-resume
```

## 🚀 Cloudflare Workers Deployment

### Quick Deploy
```bash
npm run deploy
```

### Manual Configuration

**Cloudflare Workers Settings:**
- **Build command**: `./cloudflare-docker.sh`
- **Build output**: Docker container with built React app
- **Framework**: Custom Docker build

See `CLOUDFLARE_SETUP.md` for detailed configuration steps.

## 🛠️ Technology Stack

### Frontend
- **React 18.2.0**: Modern component-based architecture
- **CSS Variables**: Dynamic theming system
- **Local Storage**: Theme preference persistence
- **Responsive Design**: Mobile-first approach

### Deployment
- **Docker**: Multi-stage containerized builds
- **Cloudflare Workers**: Edge deployment
- **npm**: Package management with legacy peer deps

### Content Management
- **LaTeX**: PDF resume generation
- **Organized Assets**: Images and icons in `/src/assets/`
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
- **Icons/Logos**: Add to `src/assets/icons/`
- **Import in components**: `import photo from '../assets/images/photo.jpg'`

### PDF Resume Updates
1. Edit `public/patrick_resume.tex`
2. Compile: `pdflatex patrick_resume.tex`
3. Rebuild React app: `npm run build`

## 🔧 Available Scripts

```bash
# Development
npm start                    # Start dev server
npm run build               # Production build
npm run deploy              # Build & deploy to Cloudflare Workers

# Testing
npm test                    # Run React tests
./cloudflare-docker.sh      # Test Docker build locally
```

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
- **Code Splitting**: Optimized bundle sizes  
- **Docker Optimized**: 9.22MB production image
- **Edge Deployment**: Cloudflare Workers global distribution
- **Fast Loading**: < 50KB gzipped bundle

## 🔄 Recent Updates

### Version 2.2 (January 2025) - Latest
- 🧹 **Simplified Deployment**: Removed GitHub Pages, focus on Cloudflare Workers only
- 🐳 **Streamlined Docker**: Single Dockerfile for Workers deployment
- 📝 **Consolidated Scripts**: Simple `npm run deploy` command
- 🔧 **Cleaner Architecture**: Removed multi-platform complexity

### Version 2.1 (January 2025)
- 🐳 **Docker Containerization**: Multi-stage builds with nginx
- 📄 **PDF Management**: Moved resume to `public/patrick_resume.pdf`
- 🎯 **Senior SWE Focus**: Enhanced descriptions with scale metrics
- 📐 **One Page Resume**: Optimized spacing for 1-page format
- 🧹 **Project Cleanup**: Organized assets, consolidated documentation

## 🆘 Troubleshooting

### Common Issues
- **Dependency conflicts**: Use `npm install --legacy-peer-deps`
- **Docker build fails**: Ensure Docker is running
- **Assets not loading**: Check paths in `src/assets/`

### Getting Help
1. Check `CLOUDFLARE_SETUP.md` for deployment issues
2. Review build logs for specific errors
3. Test Docker build locally: `./cloudflare-docker.sh`

## 📞 Support & Contributing

For issues or questions:
1. **Check documentation** in this README and `CLOUDFLARE_SETUP.md`
2. **Test locally** with provided scripts
3. **Review build logs** for specific error messages

---

**Built with ❤️ by Patrick Pei** | **Deployed with 🐳 Docker & ☁️ Cloudflare Workers**