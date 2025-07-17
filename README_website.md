# Patrick Pei - Resume Website

A modern, responsive React resume website with enhanced features, dark mode, and professional experience showcase.

## 🚀 Live Website
**[https://peiyj.github.io/resume](https://peiyj.github.io/resume)** | **[https://ppei.dev](https://ppei.dev)**

## Features

- 🎨 **Modern React Design**: Component-based architecture with smooth animations
- 🌙 **Dark Mode by Default**: Professional dark theme with light mode option
- 📱 **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- ⚡ **Fast Loading**: Optimized React build with code splitting
- 🎯 **ATS-Friendly**: SEO optimized and machine-readable
- 🖨️ **Print-Ready**: Optimized CSS for printing
- ♿ **Accessible**: WCAG compliant design with proper semantic HTML
- 🎭 **Emoji Integration**: Visual icons throughout for better UX
- 💾 **Theme Persistence**: Remembers user's theme preference

## File Structure

```
patrick-resume-react/
├── public/
│   ├── index.html          # HTML template
│   ├── patrick_resume.pdf  # Latest PDF version (100KB, 1 page)
│   ├── patrick_resume.tex  # LaTeX source for PDF
│   ├── _headers            # Cloudflare Pages headers
│   └── _redirects          # SPA routing support
├── src/
│   ├── components/
│   │   ├── Header.js       # Contact info & theme toggle
│   │   ├── Background.js   # Animated background
│   │   ├── Experience.js   # Professional experience
│   │   ├── Skills.js       # Technical skills
│   │   ├── Entrepreneurship.js # Startup experience  
│   │   ├── Education.js    # Academic background
│   │   └── Footer.js       # Contact links
│   ├── App.js              # Main application
│   ├── App.css             # Component styles
│   └── index.css           # Global styles
├── package.json            # Dependencies & scripts
└── README.md              # Main documentation
```

## Local Development

1. Clone the repository:
```bash
git clone https://github.com/peiyj/resume.git
cd resume
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Deployment Options

### Option 1: GitHub Pages (Current Setup)

This project uses GitHub Actions for automated deployment:

```yaml
# .github/workflows/pages.yml
- Build React app with Docker
- Extract built files  
- Deploy to GitHub Pages
```

**Manual Deployment:**
```bash
npm run build
cp -r build/* .
git add .
git commit -m "Deploy updates"
git push origin main
```

### Option 2: Cloudflare Pages (Alternative)

1. Connect GitHub repository to Cloudflare Pages
2. Build settings:
   - **Build command:** `npm run build`
   - **Build output directory:** `build`
   - **Node.js version:** `18.x`
3. Includes `_headers` and `_redirects` for optimization

### Option 3: Netlify (React Optimized)

1. Go to [netlify.com](https://netlify.com)
2. Connect GitHub repository
3. Build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `build`
4. Automatic deployment with every Git push

### Option 4: Vercel (Zero-Config)

1. Go to [vercel.com](https://vercel.com)
2. Import GitHub repository
3. Auto-detects React app and configures build
4. Instant deployment with preview URLs

### Option 5: Docker Deployment

```bash
# Build Docker image
docker build -t patrick-resume .

# Run container
docker run -p 80:80 patrick-resume
```

Perfect for VPS or cloud deployment with nginx.

## Customization

### Colors & Themes
The color scheme uses CSS variables in `src/index.css`:

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

### Content Updates
Update your information in React components:

- **Contact Info**: `src/components/Header.js`
- **Experience**: `src/components/Experience.js`
- **Skills**: `src/components/Skills.js`
- **Education**: `src/components/Education.js`
- **Footer Links**: `src/components/Footer.js`

### PDF Resume
Update the LaTeX resume:
1. Edit `public/patrick_resume.tex`
2. Compile: `pdflatex patrick_resume.tex`
3. Rebuild React app: `npm run build`

### Fonts
Currently using Inter from Google Fonts. Update in `public/index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
```

## SEO Optimization

The website includes:
- Semantic HTML structure
- Meta tags for search engines
- Proper heading hierarchy
- Alt text for accessibility

## Performance

- **React 18**: Latest React with concurrent features
- **Code Splitting**: Optimized bundle sizes
- **Lazy Loading**: Components load on demand
- **Optimized Build**: Minified CSS/JS with source maps
- **Cloudflare Ready**: Headers and redirects configured
- **Fast Loading**: < 100KB total bundle size

## Technology Stack

### Frontend
- **React 18.2.0**: Component-based architecture
- **CSS Variables**: Dynamic theming
- **Local Storage**: Theme persistence
- **Responsive Design**: Mobile-first approach

### Build Tools
- **Create React App 5.0.1**: Zero-config setup
- **npm**: Package management
- **Docker**: Containerization support
- **GitHub Actions**: CI/CD pipeline

### Development
- **LaTeX**: PDF resume generation
- **ES6+**: Modern JavaScript features
- **CSS Grid/Flexbox**: Layout systems
- **Semantic HTML**: Accessibility focused

## Browser Support

- ✅ Chrome (latest) - Full support
- ✅ Firefox (latest) - Full support  
- ✅ Safari (latest) - Full support
- ✅ Edge (latest) - Full support
- ✅ Mobile browsers - Responsive design
- ✅ iOS Safari - Touch optimized
- ✅ Android Chrome - Performance optimized

## Recent Updates

### January 2025
- ✅ **PDF Location**: Moved to `public/patrick_resume.pdf`
- ✅ **Cloudflare Pages**: Added deployment support
- ✅ **LaTeX Source**: Included `patrick_resume.tex` 
- ✅ **One Page Resume**: Optimized 1-page format
- ✅ **Enhanced Content**: Senior engineer competitive descriptions
- ✅ **Spacing Fixed**: Consistent formatting throughout

## Contact

**Patrick Pei** - Senior Software Engineer
- **Email**: yingjianpei2022@u.northwestern.edu
- **LinkedIn**: [linkedin.com/in/patrickpei11](https://linkedin.com/in/patrickpei11)
- **GitHub**: [github.com/peiyj](https://github.com/peiyj)
- **Website**: [ppei.dev](https://ppei.dev)

---

*Built with ❤️ and React 18 | Deployed with GitHub Actions | Always evolving* 🚀 