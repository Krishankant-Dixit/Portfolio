# Krishankant Dixit - Portfolio Website

A modern, responsive, and production-quality personal portfolio website built with React, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern UI/UX Design**: Clean, minimal, and professional design that impresses recruiters and clients
- **Dark Mode**: Toggle between light and dark themes with persistent preferences
- **Fully Responsive**: Optimized for mobile, tablet, and desktop devices
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **Project Showcase**: Detailed project cards with modals for comprehensive information
- **Contact Form**: Integrated contact form for easy communication
- **SEO Optimized**: Meta tags and semantic HTML for better search engine visibility
- **Performance Optimized**: Fast loading times and efficient rendering

## 🛠️ Technologies Used

- **React 18** - Modern React with functional components and hooks
- **Vite** - Next-generation frontend tooling for blazing fast development
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- **Framer Motion** - Production-ready motion library for React
- **React Icons** - Popular icon library with multiple icon sets

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Krishankant-Dixit/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Add your resume**
   - Place your resume PDF file in the `public` folder
   - Name it `resume.pdf` (or update the filename in Hero.jsx and Contact.jsx)

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   - Navigate to `http://localhost:3000`

## 🔧 Building for Production

```bash
npm run build
```

The optimized production build will be in the `dist` folder.

## 📂 Project Structure

```
portfolio/
├── public/
│   └── resume.pdf          # Your resume PDF
├── src/
│   ├── components/
│   │   ├── Navbar.jsx      # Navigation with dark mode toggle
│   │   ├── Hero.jsx        # Hero section with CTA buttons
│   │   ├── About.jsx       # About section
│   │   ├── Skills.jsx      # Skills showcase
│   │   ├── Projects.jsx    # Projects grid
│   │   ├── ProjectCard.jsx # Individual project card
│   │   ├── ProjectModal.jsx# Project detail modal
│   │   ├── GitHubSection.jsx # GitHub stats and profile
│   │   ├── Contact.jsx     # Contact form and info
│   │   └── Footer.jsx      # Footer with social links
│   ├── App.jsx             # Main app component
│   ├── main.jsx            # Entry point
│   └── index.css           # Global styles
├── index.html              # HTML template
├── package.json            # Dependencies
├── vite.config.js          # Vite configuration
├── tailwind.config.js      # Tailwind configuration
└── postcss.config.js       # PostCSS configuration
```

## 🎨 Customization

### Personal Information

Update the following files with your information:

1. **Hero.jsx** - Your name, title, and description
2. **About.jsx** - Your bio, education, and career goals
3. **Skills.jsx** - Your technical skills and expertise
4. **Projects.jsx** - Your projects with detailed information
5. **Contact.jsx** - Your contact information and social links
6. **Footer.jsx** - Footer details

### Theme Colors

Modify `tailwind.config.js` to customize the color scheme:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        light: '#3b82f6',  // Customize this
        dark: '#60a5fa',   // Customize this
      },
    },
  },
}
```

## 🌐 Deployment

### Deploy to Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Deploy to Netlify

1. Install Netlify CLI: `npm i -g netlify-cli`
2. Run: `netlify deploy --prod`
3. Choose the `dist` folder

## 📱 Sections Overview

1. **Navigation**: Sticky navbar with smooth scrolling and mobile menu
2. **Hero**: Eye-catching introduction with CTA buttons
3. **About**: Professional bio and key highlights
4. **Skills**: Categorized technical skills with icons
5. **Projects**: Showcase of featured projects with detailed modals
6. **GitHub**: GitHub stats and profile link
7. **Contact**: Contact form and direct communication methods
8. **Footer**: Social links and quick navigation

## 🎯 Key Features Implemented

✅ Dark mode with local storage persistence
✅ Responsive mobile-first design
✅ Smooth scroll navigation
✅ Animated section transitions
✅ Project modals with detailed information
✅ Contact form with validation
✅ Resume download functionality
✅ Social media integration
✅ SEO meta tags
✅ Performance optimized
✅ Accessible components

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Developer

**Krishankant Dixit**
- GitHub: [@Krishankant-Dixit](https://github.com/Krishankant-Dixit)
- LinkedIn: [krishankant-dixit-xb5](https://www.linkedin.com/in/krishankant-dixit-xb5)
- Email: krishankantdixit778@gmail.com

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## ⭐ Show Your Support

If you like this project, please give it a ⭐ on GitHub!

---

Made with ❤️ and React
