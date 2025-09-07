# Modern Portfolio Website

A comprehensive full-stack portfolio website built with Node.js, Express, MongoDB, and EJS templating. Features a modern design, dark/light mode, animated particles background, and complete content management system.

![Portfolio Preview](https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800)

## 🚀 Features

### Frontend Features
- **Interactive Particle Background** - Animated particles with dynamic connections
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Dark/Light Mode** - System preference detection with manual toggle
- **Smooth Animations** - Scroll-triggered animations and hover effects
- **Typewriter Effect** - Dynamic text animation on hero section
- **SEO Optimized** - Proper meta tags and structured data

### Backend Features
- **Express.js Server** - Robust backend with proper middleware
- **MongoDB Integration** - Database for projects, timeline, and contact data
- **Contact Form** - Functional form with email integration
- **Admin Panel** - Content management system
- **Security** - Rate limiting, CORS, helmet security

### Sections
- **Home** - Hero section with animated background
- **About Me** - Professional bio with skills showcase
- **Resume** - MongoDB-powered resume with PDF download
- **Projects** - Filterable project gallery with search
- **Timeline** - Chronological experience and education
- **Contact** - Functional contact form with validation

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose
- **Templating**: EJS
- **Styling**: Tailwind CSS
- **JavaScript**: Vanilla JS with modern ES6+
- **Security**: Helmet, CORS, Rate Limiting
- **Email**: Nodemailer integration

## 📋 Prerequisites

- Node.js (v18 or higher)
- MongoDB (local or cloud)
- Git

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio-website.git
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   
   Copy the `.env` file and update the values:
   ```bash
   cp .env .env.local
   ```
   
   Update the following variables in `.env`:
   ```
   MONGODB_URI=mongodb://localhost:27017/portfolio
   SESSION_SECRET=your-super-secret-session-key
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   ADMIN_USERNAME=admin
   ADMIN_PASSWORD=your-secure-password
   ```

4. **Start MongoDB**
   
   Make sure MongoDB is running on your system or update the connection string for a cloud database.

5. **Seed the database** (optional)
   ```bash
   node scripts/seedDatabase.js
   ```

6. **Start the development server**
   ```bash
   npm run dev
   # or
   npm start
   ```

7. **Open your browser**
   
   Navigate to `http://localhost:3000`

## 📁 Project Structure

```
portfolio-website/
├── data/
│   └── seedData.js          # Sample data for database
├── models/
│   ├── Contact.js           # Contact form model
│   ├── Project.js           # Projects model
│   ├── Resume.js            # Resume data model
│   └── Timeline.js          # Timeline entries model
├── public/
│   ├── css/
│   │   └── main.css         # Custom styles
│   └── js/
│       ├── contact.js       # Contact form functionality
│       ├── main.js          # Main JavaScript
│       ├── particles.js     # Particle animation
│       └── typewriter.js    # Typewriter effect
├── routes/
│   ├── admin.js             # Admin panel routes
│   ├── contact.js           # Contact form routes
│   ├── home.js              # Main page routes
│   └── projects.js          # Projects routes
├── scripts/
│   └── seedDatabase.js      # Database seeding script
├── views/
│   ├── pages/
│   │   ├── about.ejs        # About page
│   │   ├── contact.ejs      # Contact page
│   │   ├── index.ejs        # Home page
│   │   ├── projects.ejs     # Projects page
│   │   ├── resume.ejs       # Resume page
│   │   └── timeline.ejs     # Timeline page
│   └── partials/
│       ├── footer.ejs       # Footer component
│       ├── head.ejs         # Head section
│       └── header.ejs       # Header/Navigation
├── .env                     # Environment variables
├── server.js                # Main server file
└── package.json             # Project dependencies
```

## 🎨 Customization

### Personal Information
1. Update personal details in the EJS templates
2. Replace placeholder images with your photos
3. Update social media links in the footer and header
4. Modify the resume data in the Resume model

### Styling
1. Colors can be customized in the Tailwind config in `head.ejs`
2. Additional custom styles in `public/css/main.css`
3. Animations and transitions can be modified in the CSS and JS files

### Content
1. Add your projects to the database using the admin panel or seed script
2. Update timeline entries with your experience
3. Customize the about section content
4. Update SEO meta tags in the head partial

## 🔧 Configuration

### Email Setup (for contact form)
1. Create an app password for Gmail or configure SMTP settings
2. Update the email configuration in `.env`
3. The contact form will automatically send emails when configured

### Admin Panel
1. Access at `/admin` with credentials from `.env`
2. Manage projects, view messages, and update content
3. Default credentials: admin/admin123 (change these!)

### Database
1. The app works with both local MongoDB and cloud databases
2. Update `MONGODB_URI` in `.env` for your database
3. Run the seed script to populate with sample data

## 🚀 Deployment

### Preparation
1. Set `NODE_ENV=production` in your environment
2. Update all placeholder URLs and information
3. Configure email settings for the contact form
4. Set secure session secrets and admin passwords

### Deployment Options
- **Heroku**: Add MongoDB Atlas addon
- **Vercel**: Use with MongoDB Atlas
- **DigitalOcean**: App Platform with managed database
- **AWS**: EC2 with RDS/DocumentDB

### Environment Variables for Production
```
NODE_ENV=production
MONGODB_URI=your-production-database-url
SESSION_SECRET=your-very-secure-session-secret
EMAIL_HOST=your-smtp-host
EMAIL_USER=your-email
EMAIL_PASS=your-app-password
ADMIN_USERNAME=your-admin-username
ADMIN_PASSWORD=your-secure-admin-password
```

## 📱 Mobile Responsiveness

The website is fully responsive with:
- Mobile-first design approach
- Hamburger menu for mobile navigation
- Touch-friendly interactions
- Optimized images and performance
- Accessible form controls

## ⚡ Performance Features

- **Lazy Loading**: Images load as needed
- **Optimized Animations**: Reduced motion support
- **Efficient Particles**: Performance-optimized background
- **Compression**: Gzip compression enabled
- **Caching**: Proper cache headers
- **Minification**: CSS and JS optimization

## 🔒 Security Features

- **Helmet.js**: Security headers
- **Rate Limiting**: API protection
- **CORS**: Cross-origin configuration
- **Input Validation**: Form security
- **Session Security**: Secure cookie settings
- **Content Security Policy**: XSS protection

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -am 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Tailwind CSS** for the utility-first CSS framework
- **Pexels** for the stock photography
- **Font Awesome** for the icons
- **MongoDB** for the database solution
- **Express.js** community for the excellent framework

## 📞 Support

If you have any questions or need help with setup:

1. Check the documentation above
2. Look through existing issues
3. Create a new issue with detailed information
4. Contact: [your.email@example.com](mailto:your.email@example.com)

---

**Made with ❤️ and lots of ☕**

*This portfolio website demonstrates modern full-stack development practices and can serve as a template for other developers looking to showcase their work professionally.*