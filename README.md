# 🌟 Manav Desai - Portfolio Website

A modern, responsive portfolio website built with React, showcasing my skills as a Full-Stack Web Developer and Competitive Programmer.

![Portfolio Preview](https://img.shields.io/badge/Portfolio-Live-brightgreen)
![React](https://img.shields.io/badge/React-18.3.1-blue)
![Vite](https://img.shields.io/badge/Vite-5.4.1-purple)
![Responsive](https://img.shields.io/badge/Responsive-Yes-green)

## 🚀 Live Demo

[View Live Portfolio](https://your-portfolio-url.com) <!-- Replace with your actual URL -->

## 📱 Features

### ✨ **Modern Design**
- **Sleek UI/UX**: Clean, professional design with smooth animations
- **Dark Theme**: Eye-friendly dark color scheme
- **Interactive Elements**: Hover effects and micro-interactions
- **Loading Animation**: Terminal-style loading screen

### 📱 **Fully Responsive**
- **Mobile-First Design**: Optimized for all screen sizes
- **Breakpoints**: 
  - 📱 Mobile: 320px - 480px
  - 📱 Small Mobile: 480px - 768px
  - 💻 Tablet: 768px - 1024px
  - 🖥️ Desktop: 1024px+
- **Touch-Friendly**: Optimized for mobile interactions

### 🎯 **Sections**
1. **Home**: Hero section with animated typewriter effect
2. **About**: Personal introduction and education background
3. **Tools**: Interactive tech stack showcase
4. **Projects**: Detailed project portfolio with live demos
5. **Contact**: Functional contact form with EmailJS integration

### 🛠️ **Technical Features**
- **Smooth Scrolling**: Seamless navigation between sections
- **Framer Motion**: Advanced animations and transitions
- **Email Integration**: Working contact form
- **Social Links**: Direct links to social profiles
- **SEO Optimized**: Proper meta tags and structure

## 🛠️ Tech Stack

### **Frontend**
- ⚛️ **React 18.3.1** - Modern React with hooks
- ⚡ **Vite 5.4.1** - Fast build tool and dev server
- 🎨 **SCSS** - Enhanced CSS with variables and nesting
- 🎭 **Framer Motion** - Smooth animations and transitions
- 💅 **Styled Components** - CSS-in-JS styling

### **Libraries & Tools**
- 📧 **EmailJS** - Contact form functionality
- ⌨️ **React Simple Typewriter** - Typewriter effect
- 🎯 **React Icons** - Comprehensive icon library
- 🌐 **React Social Icons** - Social media icons
- 📱 **FontAwesome** - Additional icons

### **Development Tools**
- 🔧 **ESLint** - Code linting and formatting
- 🎯 **Vite** - Development server and build tool
- 📦 **npm** - Package management

## 📁 Project Structure

```
portfolio/
├── public/                 # Static assets
│   ├── logo1.png          # Logo image
│   ├── about-removebg.png # Profile image
│   ├── project1.png       # Project screenshots
│   └── ...
├── src/
│   ├── components/        # React components
│   │   ├── About/         # About section
│   │   ├── Contact/       # Contact form
│   │   ├── Cursor/        # Custom cursor
│   │   ├── Home/          # Hero section
│   │   ├── Loader/        # Loading screen
│   │   ├── Navbar/        # Navigation bar
│   │   ├── Project/       # Projects showcase
│   │   ├── Sidebar/       # Mobile navigation
│   │   └── Tools/         # Tech stack display
│   ├── App.jsx           # Main app component
│   ├── App.scss          # Global styles
│   └── main.jsx          # App entry point
├── package.json          # Dependencies
├── vite.config.js        # Vite configuration
└── README.md            # Project documentation
```

## 🚀 Getting Started

### **Prerequisites**
- Node.js (v16 or higher)
- npm or yarn

### **Installation**

1. **Clone the repository**
   ```bash
   git clone https://github.com/992manav/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### **Build for Production**
```bash
npm run build
```

### **Preview Production Build**
```bash
npm run preview
```

## 📱 Responsive Design

### **Breakpoints**
- **Mobile**: 320px - 480px
- **Small Mobile**: 480px - 768px  
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

### **Mobile Optimizations**
- ✅ Touch-friendly navigation
- ✅ Optimized image sizes
- ✅ Readable typography
- ✅ Accessible buttons and links
- ✅ Smooth scrolling disabled on mobile
- ✅ Hamburger menu for navigation

## 🎨 Customization

### **Colors**
Update colors in SCSS files:
```scss
// Primary colors
$primary-color: #deb887;
$secondary-color: #fff;
$accent-color: orange;
$background-color: black;
```

### **Fonts**
Change fonts in `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:..." rel="stylesheet">
```

### **Content**
- Update personal information in component files
- Replace project images in `public/` folder
- Modify project data in `Project.jsx`

## 📧 Contact Form Setup

The contact form uses EmailJS. To set it up:

1. **Create EmailJS account** at [emailjs.com](https://www.emailjs.com/)
2. **Update credentials** in `Contact.jsx`:
   ```javascript
   emailjs.sendForm(
     "your_service_id",
     "your_template_id", 
     form.current,
     "your_public_key"
   )
   ```

## 🌐 Deployment

### **Netlify** (Recommended)
1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify
3. Set up continuous deployment from GitHub

### **Vercel**
1. Connect your GitHub repository
2. Vercel will automatically detect Vite configuration
3. Deploy with zero configuration

### **GitHub Pages**
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add deploy script to package.json
3. Run: `npm run deploy`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -m 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Manav Desai**
- 🌐 Portfolio: [Your Portfolio URL]
- 💼 LinkedIn: [linkedin.com/in/manav-desai-985aab326](https://linkedin.com/in/manav-desai-985aab326)
- 🐙 GitHub: [github.com/992manav](https://github.com/992manav)
- 📧 Email: 23ucs639@lnmiit.ac.in
- 📱 WhatsApp: [wa.me/9328947223](https://wa.me/9328947223)

## 🙏 Acknowledgments

- **React Team** for the amazing framework
- **Framer Motion** for smooth animations
- **Vite** for the fast development experience
- **EmailJS** for contact form functionality
- **React Icons** for the comprehensive icon library

## 📊 Performance

- ⚡ **Fast Loading**: Optimized with Vite
- 📱 **Mobile Optimized**: Responsive design
- 🎯 **SEO Friendly**: Proper meta tags
- ♿ **Accessible**: WCAG compliant
- 🔧 **Maintainable**: Clean, modular code

---

⭐ **Star this repository if you found it helpful!**

Made with ❤️ by [Manav Desai](https://github.com/992manav)