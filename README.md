# Patrick Pei - Resume Website 🚀

A modern, professional resume website built with React featuring enhanced visual design with emojis, dark mode by default, and comprehensive professional experience details.

## 🌐 Live Website
**[https://peiyj.github.io/resume](https://peiyj.github.io/resume)**

## 📋 Contact Information
- **Email**: yingjianpei2022@u.northwestern.edu  
- **GitHub**: [github.com/peiyj](https://github.com/peiyj)
- **LinkedIn**: [linkedin.com/in/patrickpei11](https://linkedin.com/in/patrickpei11)

## ✨ Latest Updates (January 2025)

### 🎨 Enhanced Visual Design
- **Emoji Integration**: Added meaningful emojis throughout all sections for better visual appeal
- **Dark Mode Default**: Website now defaults to dark mode for modern, professional appearance
- **Improved Readability**: Enhanced text contrast in dark mode for better accessibility
- **Better UX**: Clear dark/light mode toggle with descriptive labels and emoji icons

### 💼 Professional Experience Enhancements
- **Detailed Impact Statements**: Each role now includes specific metrics and achievements
- **Comprehensive Descriptions**: Expanded technical contributions and business impact
- **Location Information**: Added Mountain View, CA location to all Coursera positions
- **Priority Reordering**: Professional Experience now appears before Skills section

## 🏗️ Technical Architecture

### React Application Structure
```
patrick-resume-react/
├── public/
│   ├── index.html          # HTML template
│   ├── patrick_resume.pdf  # 📄 Latest PDF resume (100KB, 1 page)
│   ├── patrick_resume.tex  # 📝 LaTeX source for PDF generation
│   ├── _headers            # ☁️ Cloudflare Pages optimization
│   └── _redirects          # 🔀 SPA routing support
├── src/
│   ├── components/
│   │   ├── Header.js       # 👋 Greeting, contact info, theme toggle
│   │   ├── Background.js   # 🌟 Animated background elements
│   │   ├── Experience.js   # 💼 Detailed professional history
│   │   ├── Skills.js       # 🛠️ Technical skills by category
│   │   ├── Entrepreneurship.js # 🚀 Startup experience
│   │   ├── Education.js    # 🎓 Academic background
│   │   └── Footer.js       # 📧 Contact links with emojis
│   ├── App.js              # 🎯 Main application with dark mode logic
│   ├── App.css             # 🎨 Component-specific styles
│   └── index.css           # 🌈 Global styling with theme support
├── build/                  # 📦 Production build output
├── package.json            # 📋 Dependencies and scripts
└── README_website.md       # 📚 Detailed technical documentation
```

## 🎯 Key Features

### 🌙 Dark Mode by Default
- **Smart Theme Persistence**: Remembers user preference in localStorage
- **Accessible Toggle**: Clear emoji icons (🌙/☀️) with descriptive labels
- **Enhanced Readability**: Optimized text colors for dark backgrounds
- **Smooth Transitions**: Animated theme switching

### 📱 Visual Enhancements
- **Meaningful Emojis**: Each section has relevant emoji icons
  - 💼 Professional Experience
  - 🛠️ Skills (💻 Languages, 🏗️ Frameworks, 🔧 Tools, ⚡ Technologies)
  - 🚀 Entrepreneurship
  - 🎓 Education  
  - 📧📄💼💻 Contact links
- **Professional Typography**: Carefully chosen fonts and spacing
- **Responsive Design**: Optimized for all device sizes

### 💡 Professional Experience Highlights
- **Coursera Senior SWE**: Led microservices serving millions, reduced latency 40%
- **Scalable Architecture**: Migrated monolith to microservices, 60% faster deployments
- **Data Engineering**: Built pipelines processing 500M+ daily events
- **Machine Learning**: Recommendation systems increasing engagement 25%
- **Mentorship**: Established coding standards reducing bugs 35%

## 🛠️ Technology Stack

### Frontend
- **React 18**: Modern component-based architecture
- **CSS Variables**: Dynamic theming support
- **Local Storage**: Theme preference persistence
- **Responsive Design**: Mobile-first approach

### Development Tools
- **Create React App**: Zero-configuration setup
- **npm**: Package management
- **GitHub Actions**: CI/CD pipeline
- **Docker**: Containerized deployment option

## 🚀 Deployment

### Current Deployment
The website is deployed to GitHub Pages using a simple file-based approach:

```bash
npm run build
cp -r build/* .
git add .
git commit -m "Deploy updates"
git push origin main
```

### Docker Option Available
A complete Docker setup is also configured for containerized deployment:

```bash
docker build -t patrick-resume .
docker run -p 80:80 patrick-resume
```

## 🎨 Design Philosophy

### Visual Hierarchy
- **Emoji Categorization**: Icons help users quickly scan sections
- **Content Priority**: Experience leads, followed by skills
- **Professional Aesthetics**: Dark mode conveys modern tech proficiency
- **Accessibility First**: High contrast, clear typography, semantic HTML

### User Experience
- **Immediate Recognition**: Dark theme shows technical sophistication
- **Quick Navigation**: Emoji visual cues for rapid content scanning
- **Mobile Optimized**: Responsive design for all devices
- **Print Ready**: Optimized styling for PDF generation

## 📊 Content Highlights

### Professional Experience
8 roles spanning 5+ years across:
- **Coursera**: Senior SWE to Intern (Mountain View, CA)
- **Samsara**: IoT fleet management (San Francisco, CA)  
- **Roche**: Bioinformatics tools (Tucson, AZ)
- **UCSD Medical**: Research & ML (San Diego, CA)

### Technical Skills
- **Languages**: Python, Java, JavaScript, TypeScript, GoLang, C++
- **Frameworks**: React, Node.js, Django, Spring Boot, Angular
- **Tools**: Docker, Kubernetes, AWS, Git, Jenkins
- **Technologies**: PostgreSQL, Redis, Kafka, Elasticsearch, Spark

## 🔄 Recent Changes

### Version 2.1 (January 2025) - Latest
- 📄 **PDF Management**: Moved resume to `public/patrick_resume.pdf` for proper web access
- ☁️ **Cloudflare Pages**: Added `_headers` and `_redirects` for deployment optimization
- 🐳 **Docker Containerization**: Multi-stage builds with nginx, docker-compose support
- 📝 **LaTeX Source**: Included `patrick_resume.tex` in public folder for transparency
- 🎯 **Senior SWE Focus**: Enhanced descriptions with scale metrics (10M+ users, $10M+ revenue)
- 📐 **One Page Resume**: Optimized spacing and content for 1-page professional format
- 🔧 **Build Fixes**: Resolved Workers deployment issues with proper configuration

### Version 2.0 (January 2025)
- ✨ Dark mode as default
- 🎨 Comprehensive emoji integration
- 💼 Enhanced experience descriptions with metrics
- 🔧 Improved theme toggle UX
- 📱 Better mobile responsiveness
- 🚀 Reordered content for impact

### Deployment Status
- ✅ React build optimized
- ✅ GitHub Pages live  
- ✅ Cloudflare Pages ready
- ✅ PDF properly linked (`/patrick_resume.pdf`)
- ✅ Dark mode functional
- ✅ Mobile responsive
- ✅ Print optimized
- ✅ LaTeX source included

## 📝 Future Enhancements
- Interactive skill level indicators
- Project portfolio integration
- Blog/article links
- Animated typing effects
- Performance metrics dashboard

---

**Built with ❤️ and React** | **Deployed on GitHub Pages** | **Always evolving** 🚀