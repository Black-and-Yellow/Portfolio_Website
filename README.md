# Muthuraja S - Cyberpunk Portfolio Website

A personal portfolio website with a cyberpunk theme built with Node.js, Express, and EJS templating. Features a striking black and red design, custom cursor effects, animated particles background, and comprehensive sections showcasing my skills and experience as a Software Developer.

![Portfolio Preview](https://via.placeholder.com/800x400/000000/ff0000?text=Cyberpunk+Portfolio)

## 🚀 Features

### Frontend Features
- **Cyberpunk Theme** - Black background with red/cyan accents and futuristic styling
- **Custom Cursor Effects** - SVG-based cyberpunk cursor with hover animations
- **Interactive Particle Background** - Animated particles with dynamic connections
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Typewriter Effect** - Dynamic text animation on hero section
- **SEO Optimized** - Proper meta tags and structured data

### Backend Features
- **Express.js Server** - Robust backend with static data routing
- **Contact Form** - Functional form with validation
- **Static Data Management** - No database required, all data stored in routes

### Sections
- **Home** - Hero section with animated background and introduction
- **About Me** - Professional bio with skills showcase
- **Resume** - Complete resume with education and experience
- **Projects** - Project showcase including CargoLink and portfolio
- **Timeline** - Chronological experience and education journey
- **Contact** - Contact form with personal information

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Templating**: EJS
- **Styling**: Tailwind CSS with custom cyberpunk overrides
- **JavaScript**: Vanilla JS with modern ES6+ and custom cursor effects
- **Theme**: Cyberpunk aesthetic with black/red/cyan color scheme
- **Data**: Static arrays (no database required)

## 📋 Prerequisites

- Node.js (v18 or higher)
- Git

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/Black-and-Yellow/Portfolio_Website.git
   cd Portfolio_Website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   # or
   node server.js
   ```

4. **Open your browser**
   
   Navigate to `http://localhost:3001`

## 🎯 About This Portfolio

This portfolio showcases the work and experience of **Muthuraja S**, a passionate Software Developer with expertise in:

- **Programming Languages**: Java, Python, JavaScript, C++
- **Web Technologies**: HTML, CSS, React.js, Node.js, Express.js
- **Databases**: MySQL, PostgreSQL, MongoDB
- **Tools & Frameworks**: Git, Docker, Spring Boot, Bootstrap, Tailwind CSS

### Featured Project: CargoLink
A comprehensive logistics platform for connecting drivers and customers, featuring real-time tracking, secure payment integration, and efficient route optimization.

## 📁 Project Structure

```
Portfolio_Website/
├── data/
│   └── seedData.js          # Legacy sample data (not used)
├── models/
│   ├── Contact.js           # Contact form model (legacy)
│   ├── Project.js           # Projects model (legacy)
│   ├── Resume.js            # Resume data model (legacy)
│   └── Timeline.js          # Timeline entries model (legacy)
├── public/
│   ├── css/
│   │   └── main.css         # Custom cyberpunk styles
│   ├── img/
│   │   ├── P.png           # Profile logo
│   │   └── Profile.jpg     # Profile picture
│   └── js/
│       ├── contact.js       # Contact form functionality
│       ├── main.js          # Main JavaScript
│       ├── particles.js     # Particle animation
│       └── typewriter.js    # Typewriter effect
├── routes/
│   ├── admin.js             # Admin routes (legacy)
│   ├── contact.js           # Contact form routes
│   ├── home.js              # Main data source - all static content
│   └── projects.js          # Projects routes with static data
├── scripts/
│   └── seedDatabase.js      # Database seeding script (legacy)
├── views/
│   ├── pages/
│   │   ├── about.ejs        # About page with skills
│   │   ├── contact.ejs      # Contact page
│   │   ├── index.ejs        # Home page with hero section
│   │   ├── projects.ejs     # Projects showcase
│   │   ├── resume.ejs       # Resume page
│   │   └── timeline.ejs     # Timeline page
│   └── partials/
│       ├── footer.ejs       # Footer component
│       ├── head.ejs         # Head section with cyberpunk styling
│       └── header.ejs       # Header/Navigation
├── server.js                # Main server file (port 3001)
└── package.json             # Project dependencies
```

## 🎨 Customization

### Cyberpunk Theme
- **Colors**: Primary black (#000000) background with red (#ff0000) and cyan accents
- **Cursor**: Custom SVG cyberpunk cursor with hover effects
- **Typography**: Futuristic font styling with glow effects
- **Animations**: Smooth transitions and particle effects

### Personal Information
1. Update personal details in `routes/home.js`
2. Replace profile images in `public/img/`
3. Update social media links in the header and footer
4. Modify resume data in the home route

### Content Management
- All content is stored in `routes/home.js` as static arrays
- Projects data in `routes/projects.js`
- No database required - easy to modify and deploy
- Timeline entries categorized by type (education, experience, achievement)

## � Deployment

This portfolio is ready for deployment on various platforms:

### Recommended Platforms
1. **Netlify** - Easy deployment with GitHub integration
2. **Vercel** - Excellent for Node.js applications
3. **Render** - Free tier available for Node.js apps
4. **Railway** - Simple deployment with automatic HTTPS

### GitHub Repository
- Repository: `https://github.com/Black-and-Yellow/Portfolio_Website`
- Owner: Black-and-Yellow
- Branch: main

### Deployment Steps
1. Your code is already pushed to GitHub
2. Choose a deployment platform
3. Connect your GitHub repository
4. Set build command: `npm install`
5. Set start command: `npm start` or `node server.js`
6. Deploy and get your live URL!

## 📱 Mobile Responsiveness

The website is fully responsive with:
- Mobile-first design approach with cyberpunk aesthetics
- Hamburger menu for mobile navigation
- Touch-friendly interactions with custom cursor on desktop
- Optimized images and performance
- Accessible form controls
- Responsive particle effects

## ⚡ Performance Features

- **Optimized Animations**: Smooth cyberpunk cursor effects
- **Efficient Particles**: Performance-optimized background animation
- **Static Data**: No database queries for faster loading
- **Responsive Design**: Tailwind CSS for optimal performance
- **Modern JavaScript**: ES6+ features for better performance

## 🤝 Contributing

Feel free to fork this repository and create your own cyberpunk portfolio! 

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -am 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **Tailwind CSS** for the utility-first CSS framework
- **Express.js** for the robust backend framework
- **EJS** for the templating engine
- **Cyberpunk aesthetics** for the visual inspiration

## 📞 Contact

**Muthuraja S**
- Email: [muthuraja.dev@gmail.com](mailto:muthuraja.dev@gmail.com)
- GitHub: [Black-and-Yellow](https://github.com/Black-and-Yellow)
- Portfolio: [Live Demo](https://your-portfolio-url.com)

---

**Built with 💻 and cyberpunk vibes 🚀**

*This portfolio demonstrates modern web development practices with a unique cyberpunk aesthetic, showcasing both technical skills and creative design.*