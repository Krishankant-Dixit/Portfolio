# Quick Start Guide

## Getting Started

Your portfolio is now ready to run! Follow these simple steps:

### 1. Development Server (Already Running)

The portfolio is currently running at: **http://localhost:3000/**

Open your browser and visit this URL to see your portfolio in action!

### 2. Add Your Resume

1. Export your resume as a PDF
2. Name it `resume.pdf`
3. Place it in the `public` folder
4. The download buttons will automatically work

### 3. Customize Your Content

#### Update Personal Information:

**Hero Section** (`src/components/Hero.jsx`)
- Name, title, and introduction
- Social media links

**About Section** (`src/components/About.jsx`)
- Professional bio
- Education details
- Career goals

**Skills Section** (`src/components/Skills.jsx`)
- Add or remove skills
- Update technology categories

**Projects Section** (`src/components/Projects.jsx`)
- Update project details
- Add GitHub repository links
- Add live demo URLs
- Customize project descriptions

**Contact Section** (`src/components/Contact.jsx`)
- Update email address
- Update LinkedIn profile
- Update GitHub profile

### 4. Customize Colors

Edit `tailwind.config.js` to change the color scheme:

```javascript
colors: {
  primary: {
    light: '#3b82f6',  // Your preferred color
    dark: '#60a5fa',   // Your preferred dark mode color
  },
}
```

### 5. Testing Features

✅ **Dark Mode**: Click the sun/moon icon in the navbar
✅ **Responsive Design**: Resize your browser or test on mobile
✅ **Navigation**: Click navbar links for smooth scrolling
✅ **Project Modals**: Click the info icon on project cards
✅ **Contact Form**: Fill out and submit the contact form
✅ **Resume Download**: Click download resume buttons (after adding PDF)
✅ **Mobile Menu**: Resize to mobile view and test hamburger menu

### 6. Build for Production

When ready to deploy:

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

### 7. Deploy Your Portfolio

#### Option A: Vercel (Recommended)
1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Vercel will auto-detect Vite and deploy

#### Option B: Netlify
1. Run `npm run build`
2. Visit [netlify.com](https://netlify.com)
3. Drag and drop the `dist` folder
4. Your site is live!

#### Option C: GitHub Pages
1. Install: `npm install -D gh-pages`
2. Add to `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. Update `vite.config.js`:
   ```javascript
   export default defineConfig({
     base: '/repository-name/',
     // ... rest of config
   })
   ```
4. Run: `npm run deploy`

## Folder Structure Overview

```
portfolio/
├── public/              # Static files (add resume.pdf here)
├── src/
│   ├── components/      # All React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── ProjectModal.jsx
│   │   ├── GitHubSection.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── index.html           # HTML template
└── package.json         # Dependencies
```

## Tips for Success

1. **Use High-Quality Content**: Write clear, concise descriptions
2. **Add Real Projects**: Replace placeholder projects with your actual work
3. **Test Responsiveness**: Check on different devices
4. **Optimize Images**: Use compressed images for faster loading
5. **Update Regularly**: Keep your portfolio current with new projects
6. **SEO**: Update meta tags in `index.html` for better search visibility
7. **Custom Domain**: Consider buying a domain for professional appearance

## Common Customizations

### Change Font:
Update the Google Fonts link in `index.html` and modify `tailwind.config.js`

### Add More Sections:
Create new components in `src/components/` and import them in `App.jsx`

### Custom Animations:
Use Framer Motion in any component for custom animations

### Contact Form Backend:
Integrate with services like Formspree, EmailJS, or your own API

## Need Help?

- **Vite Docs**: https://vitejs.dev
- **React Docs**: https://react.dev
- **Tailwind Docs**: https://tailwindcss.com
- **Framer Motion**: https://www.framer.com/motion

## Current Status

✅ All components created
✅ Responsive design implemented
✅ Dark mode functional
✅ Animations working
✅ SEO optimized
✅ Production ready

**Next Steps**: Customize content and deploy!

---

Happy coding! 🚀
