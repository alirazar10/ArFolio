# ArFolio - Personal Portfolio Website

A modern, responsive portfolio website built with cutting-edge web technologies. Showcasing projects, experience, and skills with smooth animations and excellent performance.

## 🚀 Live Demo
[Visit ArFolio](your-deployment-url-here)

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) - React framework with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) - Utility-first CSS framework
- **UI Components**: [React Icons](https://react-icons.github.io/react-icons/) - Icon library
- **Animations**: 
  - [ScrollReveal](https://scrollrevealjs.com/) - Scroll animations
  - [React Transition Group](http://reactcommunity.org/react-transition-group/) - Component transitions
- **Smooth Scrolling**: [react-scroll](https://github.com/fisshy/react-scroll)
- **Image Optimization**: [Cloudinary](https://cloudinary.com/) + Sharp
- **Analytics**: [Google Analytics](https://analytics.google.com/) & [Hotjar](https://www.hotjar.com/)
- **Forms**: [Formspree](https://formspree.io/) - Contact form handling

## 📋 Features

- ✅ **Responsive Design** - Mobile-first approach with Tailwind CSS
- ✅ **Performance Optimized** - React Compiler enabled, image optimization
- ✅ **SEO Ready** - Sitemap generation, meta tags, Open Graph support
- ✅ **Analytics** - Google Analytics & Hotjar integration
- ✅ **Smooth Animations** - Scroll animations and page transitions
- ✅ **Contact Form** - Integrated Formspree contact form
- ✅ **Social Links** - Quick access to GitHub, LinkedIn, Twitter, etc.
- ✅ **Back to Top** - Smooth scroll to top button
- ✅ **TypeScript** - Full type safety throughout the codebase
- ✅ **Dark Mode Ready** - Carefully designed color palette

## 📁 Project Structure

```
src/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout with Head & Analytics
│   ├── page.tsx                 # Homepage
│   ├── globals.css              # Global styles & Tailwind theme
│   └── not-found.tsx            # 404 page
├── components/
│   ├── layouts/                 # Layout components
│   │   ├── layout.tsx           # Main layout wrapper
│   │   ├── header.tsx           # Social media header
│   │   ├── sidebar.tsx          # Navigation sidebar
│   │   └── footer.tsx           # Footer component
│   ├── pages/                   # Page-specific sections
│   │   ├── homePage.tsx         # Hero section
│   │   ├── about.tsx            # About section
│   │   ├── experience.tsx       # Work experience
│   │   ├── works.tsx            # Projects showcase
│   │   └── contact.tsx          # Contact section
│   └── libs/                    # Shared utilities & components
│       ├── accordion.tsx        # Accordion component
│       ├── skills.tsx           # Skills display
│       ├── scrollRevealWrapper.tsx
│       ├── backToTop.tsx        # Back to top button
│       ├── performance.tsx      # Performance optimization
│       └── imageCreator.ts      # Image generation utilities
├── content/                     # Content & constants
│   ├── constants.js             # Menu items, social links, skills
│   ├── hero-content.js          # Hero section content
│   ├── metaTag.js               # SEO meta tags
│   └── ...                      # Other content files
├── configs/                     # Configuration files
│   ├── srConfig.js              # ScrollReveal config
│   └── clConfig.js              # Cloudinary config
├── styles/                      # CSS modules & styles
│   └── transitionStyle.css      # Animation styles
├── utils/                       # Helper functions
│   ├── cloudinary.js            # Cloudinary utilities
│   ├── gAnalytics.js            # Analytics setup
│   └── scrollReveal.js          # ScrollReveal utilities
└── assets/
    └── icons/                   # Custom SVG icons
```

## 🚦 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/alirazar10/ArFolio.git
   cd ArFolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Edit `.env.local` and add your credentials:
   ```
   NEXT_PUBLIC_GOOGLE_ANALYTICS=your_ga_id
   NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloudinary_name
   ```

4. **Run development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to see your portfolio.

### Available Scripts

```bash
# Development server (with hot reload)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run ESLint
npm run lint
```

## 🎨 Customization

### Content Updates
Edit files in `src/content/`:
- **Hero Section**: `hero-content.js`
- **Skills**: `constants.js` → `skills` array
- **Experience**: `constants.js` → `experience` array
- **Projects**: `constants.js` → `works` array
- **Social Links**: `constants.js` → `SOCIAL_LINKS` object

### Theme Colors
Edit `src/app/globals.css` in the `@theme` block:
```css
@theme {
  --color-primary: #0A192B;    /* Main background */
  --color-secondary: #112240;  /* Secondary background */
  --color-accent: #FF5722;     /* Accent/highlight color */
  /* ... more colors ... */
}
```

### Images
Place images in `public/assets/` or use Cloudinary URLs. The site uses Cloudinary for optimized delivery.

## 🚀 Deployment

### Deploy on Vercel (Recommended)
1. Push your code to GitHub
2. Connect repo at [vercel.com](https://vercel.com)
3. Vercel auto-deploys on push
4. Add environment variables in Vercel dashboard

### Deploy on Other Platforms
Next.js can be deployed to:
- Netlify
- GitHub Pages
- Self-hosted servers
- AWS, Google Cloud, Azure, etc.

See [Next.js Deployment Documentation](https://nextjs.org/docs/deployment) for details.

## 📊 Performance

- **React Compiler** enabled for optimizations
- **Image optimization** with WebP/AVIF formats
- **Lazy loading** for images and components
- **Compression** enabled in Next.js
- **Security** headers configured (X-Powered-By disabled)

## 🔒 Security Features

- ✅ Security headers configured
- ✅ Environment variables for sensitive data
- ✅ No console output in production
- ✅ CORS configured for Cloudinary

## 📝 License

This project is open source and available under the MIT License.

## 👤 Author

**Ali Reza Rezayee**
- GitHub: [@alirazar10](https://github.com/alirazar10)
- LinkedIn: [alireza-r10](https://www.linkedin.com/in/alireza-r10/)
- Twitter: [@AlirazaR10](https://twitter.com/AlirazaR10)

## 🤝 Contributing

Feel free to fork this project and use it as a template for your own portfolio!

## 📞 Support

For issues or questions, please open an issue on GitHub.

---

**Built with ❤️ using Next.js, React, and Tailwind CSS**
