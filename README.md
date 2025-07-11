# 🚀 Portfolio & Blog Website

A modern, responsive portfolio website built with Astro, featuring smooth animations, interactive elements, and a clean design. This project showcases my skills, projects, experience, and includes a blog section for sharing insights and tutorials.

## ✨ Features

### 🎨 Design & UX
- **Responsive Design** - Looks great on all devices and screen sizes
- **Smooth Animations** - Intersection Observer-based scroll animations
- **Parallax Effects** - Engaging visual depth with smooth parallax scrolling
- **Interactive Elements** - Hover effects and smooth transitions
- **Modern UI** - Clean, professional design with Tailwind CSS

### 🛠️ Technical Features
- **Fast Performance** - Built with Astro for optimal loading speeds
- **SEO Optimized** - Server-side rendering for better search engine visibility
- **Type Safety** - Full TypeScript support
- **Code Quality** - ESLint configuration for consistent code standards
- **Modern CSS** - Tailwind CSS for utility-first styling

### 📱 Sections
- **Hero Section** - Eye-catching introduction with animated elements
- **Skills & Technologies** - Showcase of technical expertise
- **Projects Portfolio** - Featured work and case studies
- **Experience Timeline** - Professional background and education
- **Contact** - Multiple ways to get in touch

## 🛠️ Tech Stack

- **[Astro](https://astro.build/)** - Static site generator for fast, content-focused websites
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Motion](https://motion.dev/)** - Smooth animations and interactions
- **[ESLint](https://eslint.org/)** - Code linting and quality assurance

## 🐳 Docker Support

This project includes full Docker support with multi-stage builds for both development and production environments.

### Quick Start with Docker

```bash
# Build and run production container
docker-compose up --build

# Run development container with hot reload
docker-compose --profile dev up --build portfolio-dev
```

### Manual Docker Commands

```bash
# Build the production image
docker build -t portfolio-astro .

# Run the container
docker run -p 3000:3000 portfolio-astro
```

### Docker Features
- **Multi-stage builds** - Optimized production image size
- **Static file server** - Lightweight `serve` for production hosting
- **Development mode** - Hot reload support with volume mounting
- **Non-root user** - Security-focused container execution
- **Proxy-ready** - Designed to work with external nginx proxy managers

Your portfolio will be available at:
- **Production**: http://localhost:3000
- **Development**: http://localhost:4321

## 🌐 Live Demo

🔗 **[View Live Portfolio](your-live-url-here)**

## 📁 Project Structure

```
portfolio-astro/
├── public/                 # Static assets
│   └── favicon.svg        # Site favicon
├── src/
│   ├── pages/             # Astro pages
│   │   └── index.astro    # Homepage
│   └── styles/            # Global styles
│       └── global.css     # Tailwind CSS imports
├── astro.config.mjs       # Astro configuration
├── package.json           # Dependencies and scripts
├── tsconfig.json          # TypeScript configuration
└── eslint.config.mjs      # ESLint configuration
```

## 🎨 Key Design Elements

### Animations
The site includes several sophisticated animation features:
- **Scroll-triggered animations** using Intersection Observer API
- **Parallax effects** for visual depth and engagement
- **Smooth transitions** and hover effects throughout
- **Staggered animations** for card grids and content sections

### Performance Optimizations
- **Static Site Generation** with Astro for lightning-fast loading
- **Optimized assets** and lazy loading
- **Minimal JavaScript** for essential interactions only
- **SEO-friendly** structure and meta tags

## 🚀 Deployment

This portfolio is deployed on a VPS (Virtual Private Server), providing:
- **Custom server configuration** for optimal performance
- **Direct control** over hosting environment
- **Flexible deployment** options and server management

## 🔮 Features Implemented

- ✅ **Responsive Portfolio** - Complete showcase of skills and projects
- ✅ **Smooth Animations** - Professional scroll and hover effects
- ✅ **Contact Integration** - Multiple ways to connect
- ✅ **SEO Optimization** - Proper meta tags and structure
- ✅ **Fast Performance** - Optimized for speed and user experience

## 📄 License

This project showcases my personal portfolio and is not intended for redistribution or modification.

## 📞 Contact

Feel free to reach out if you have any questions about this project or want to discuss potential collaborations!

---

**Built with ❤️ using Astro and Tailwind CSS**
