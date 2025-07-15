# Patrick Pei - Resume Website

A professional resume website showcasing software engineering experience with dynamic animations and modern design. Available in both HTML/CSS and React versions.

## 🌐 Live Website
**[https://peiyj.github.io/resume](https://peiyj.github.io/resume)**

## 📋 Contact Information
- **Email**: yingjianpei2022@u.northwestern.edu
- **Phone**: +1-858-666-5517
- **GitHub**: [github.com/peiyj](https://github.com/peiyj)
- **LinkedIn**: [linkedin.com/in/patrickpei11](https://linkedin.com/in/patrickpei11)

## 🚀 Project Versions

### 1. HTML/CSS Version (Production)
The live website currently uses the HTML/CSS version with vibrant animations and masculine color scheme.

**Files:**
- `index.html` - Main HTML structure
- `style.css` - Animated CSS with gradients and hover effects
- `patrick_resume.pdf` - PDF version of resume

**Features:**
- ✨ Animated gradient backgrounds
- 🎨 Glass-morphism design effects
- 🚀 Floating rocket emoji bullets
- 💫 Glowing text animations
- 📱 Fully responsive design
- 🖨️ Print-ready styling

### 2. React Version (Development)
Modern React application with component-based architecture for better maintainability.

**Files:**
- `src/App.js` - Main application component
- `src/components/` - Individual React components
- `public/index.html` - React app entry point
- `package.json` - Dependencies and scripts

**Components:**
- `Header.js` - Name, title, and contact information
- `Summary.js` - Professional summary
- `Experience.js` - Work experience with structured data
- `Education.js` - University education
- `Skills.js` - Technical skills by category

## 🎨 Design Features

### Color Scheme
- **Primary**: Blues (#0ea5e9), Teals (#14b8a6), Greens (#059669)
- **Accent**: Purple (#7c3aed)
- **Background**: Animated 5-color gradient with 15-second cycles
- **Text**: Gradient clipped text for headers and highlights

### Animations
- **Background**: Shifting gradient animation
- **Icons**: Bouncing contact icons with hover transforms
- **Text**: Glowing name with drop-shadow effects
- **Skills**: Rotating gradient backgrounds with staggered delays
- **Bullets**: Floating rocket emojis with 3D transforms

## 🛠️ Development

### HTML/CSS Version
Simply open `index.html` in a browser or deploy to any static hosting service.

### React Version

#### Prerequisites
- Node.js (v16+ recommended)
- npm or yarn

#### Installation
```bash
npm install
```

#### Development Server
```bash
npm start
```
Runs on [http://localhost:3000](http://localhost:3000)

#### Production Build
```bash
npm run build
```

#### Testing
```bash
npm test
```

## 📱 Deployment Options

### GitHub Pages (Current)
Automatically deploys from the main branch to [https://peiyj.github.io/resume](https://peiyj.github.io/resume)

### Other Platforms
- **Netlify**: Drag and drop the build folder
- **Vercel**: Connect GitHub repository for automatic deployments
- **AWS S3**: Upload files to S3 bucket with static hosting

## 🔧 Customization

### Updating Content
- **HTML Version**: Edit `index.html` directly
- **React Version**: Modify data objects in component files

### Changing Colors
- **HTML Version**: Update CSS color variables in `style.css`
- **React Version**: Update gradient colors in `src/App.css`

### Adding Animations
- Both versions support CSS keyframe animations
- React version allows for JavaScript-controlled animations

## 📄 File Structure

```
Resume/
├── index.html              # HTML version (production)
├── style.css              # CSS with animations
├── patrick_resume.pdf     # PDF resume
├── README.md              # This file
├── src/                   # React source code
│   ├── App.js            # Main React component
│   ├── App.css           # React styles
│   └── components/       # Individual components
├── public/               # React public assets
├── package.json          # React dependencies
└── .git/                 # Git repository
```

## 🎯 Key Achievements Highlighted

### Senior Software Engineer (Mar 2024 – Present)
- Led P0 project reducing customer time from 2 weeks to under 10 seconds
- Developed platform leading to over $10M in contract ACVs
- Built internal tools reducing engineering time from 95 minutes to under 5 seconds

### Software Engineer II (Mar 2023 – Mar 2024)
- Achieved 80% reduction in clips metadata update time
- Implemented Redis Cache reducing P95/P99 latency by 80%/92%
- Led team of 3 engineers building fault-tolerant distributed systems

### Software Engineer I (Jan 2022 – Mar 2023)
- Led Contract and User service migrations from Scala to Java
- Developed gRPC microservices handling 3K+ QPS with 98% coverage
- Created migration library used in 15 migrations across 4 teams

## 📊 Technologies Showcased

**Languages**: Java, Scala, JavaScript, Python, SQL  
**Technologies**: AWS (DynamoDB, Lambda, EKS, MSK, RDS, Aurora), Kafka, PostgreSQL, MySQL  
**Frameworks**: Spring Boot, GraphQL, gRPC, Apache Airflow  
**Tools**: Terraform, Retool, Redis, Elasticsearch, Docker  

## 📜 License

This project is open source and available under the [MIT License](LICENSE).

---

*Built with ❤️ by Patrick Pei - Senior Software Engineer*