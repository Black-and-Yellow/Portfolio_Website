// Sample data for seeding the database
const sampleProjects = [
    {
        title: "E-commerce Platform",
        description: "A full-featured e-commerce platform with payment integration, inventory management, and admin dashboard.",
        longDescription: "This comprehensive e-commerce solution includes user authentication, product catalog, shopping cart, payment processing with Stripe, order management, and a complete admin panel. Built with scalability and performance in mind.",
        technologies: ["React", "Node.js", "MongoDB", "Stripe", "Redis", "AWS"],
        githubUrl: "https://github.com/yourusername/ecommerce-platform",
        liveUrl: "https://your-ecommerce-demo.com",
        imageUrl: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800",
        featured: true,
        category: "web",
        status: "completed"
    },
    {
        title: "Task Management App",
        description: "A collaborative task management application with real-time updates and team collaboration features.",
        longDescription: "Feature-rich task management application with drag-and-drop functionality, real-time collaboration, file attachments, and advanced filtering. Supports team workspaces and project templates.",
        technologies: ["Vue.js", "Express.js", "PostgreSQL", "Socket.io", "Docker"],
        githubUrl: "https://github.com/yourusername/task-manager",
        liveUrl: "https://your-taskmanager-demo.com",
        imageUrl: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
        featured: true,
        category: "web",
        status: "completed"
    },
    {
        title: "Weather Dashboard",
        description: "A responsive weather dashboard with location-based forecasts and interactive maps.",
        longDescription: "Modern weather application featuring current conditions, 7-day forecasts, weather maps, and location-based services. Includes severe weather alerts and customizable widgets.",
        technologies: ["React", "TypeScript", "Weather API", "Mapbox", "Chart.js"],
        githubUrl: "https://github.com/yourusername/weather-dashboard",
        liveUrl: "https://your-weather-demo.com",
        imageUrl: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800",
        featured: true,
        category: "web",
        status: "completed"
    },
    {
        title: "Social Media Analytics",
        description: "Analytics dashboard for social media performance tracking and insights.",
        longDescription: "Comprehensive analytics platform for tracking social media performance across multiple platforms. Features include engagement metrics, audience insights, content performance analysis, and automated reporting.",
        technologies: ["Python", "Django", "React", "D3.js", "Celery", "PostgreSQL"],
        githubUrl: "https://github.com/yourusername/social-analytics",
        imageUrl: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800",
        featured: false,
        category: "web",
        status: "completed"
    },
    {
        title: "Mobile Fitness App",
        description: "Cross-platform mobile app for fitness tracking and workout planning.",
        longDescription: "Full-featured fitness application with workout tracking, exercise library, progress analytics, and social features. Includes integration with wearable devices and nutrition tracking.",
        technologies: ["React Native", "Firebase", "Redux", "Expo", "HealthKit"],
        githubUrl: "https://github.com/yourusername/fitness-app",
        imageUrl: "https://images.pexels.com/photos/4662438/pexels-photo-4662438.jpeg?auto=compress&cs=tinysrgb&w=800",
        featured: false,
        category: "mobile",
        status: "in-progress"
    },
    {
        title: "Portfolio Website",
        description: "This very website - a modern, responsive portfolio built with Node.js and EJS.",
        longDescription: "A comprehensive portfolio website showcasing full-stack development skills. Features include a content management system, contact form, project showcase, and responsive design. Built with performance and SEO in mind.",
        technologies: ["Node.js", "Express", "EJS", "MongoDB", "Tailwind CSS", "JavaScript"],
        githubUrl: "https://github.com/yourusername/portfolio-website",
        liveUrl: "https://your-portfolio.com",
        imageUrl: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
        featured: false,
        category: "web",
        status: "completed"
    }
];

const sampleTimeline = [
    {
        title: "Senior Full Stack Developer",
        organization: "Tech Solutions Inc.",
        description: "Lead development of scalable web applications serving 100k+ users. Mentored junior developers and implemented CI/CD pipelines reducing deployment time by 60%.",
        startDate: new Date("2021-01-01"),
        current: true,
        category: "work",
        location: "San Francisco, CA",
        skills: ["React", "Node.js", "AWS", "Docker", "MongoDB", "TypeScript"]
    },
    {
        title: "Full Stack Developer",
        organization: "StartupXYZ",
        description: "Built and maintained multiple web applications from concept to deployment. Collaborated with designers and product managers to deliver user-centric solutions.",
        startDate: new Date("2019-06-01"),
        endDate: new Date("2020-12-31"),
        category: "work",
        location: "Remote",
        skills: ["Vue.js", "Python", "Django", "PostgreSQL", "Redis"]
    },
    {
        title: "Bachelor of Science in Computer Science",
        organization: "Stanford University",
        description: "Graduated with honors, focusing on full-stack development and machine learning. Active in computer science club and hackathons.",
        startDate: new Date("2016-09-01"),
        endDate: new Date("2020-05-01"),
        category: "education",
        location: "Stanford, CA",
        skills: ["Data Structures", "Algorithms", "Machine Learning", "Software Engineering"]
    },
    {
        title: "E-commerce Platform Launch",
        organization: "Personal Project",
        description: "Built and deployed a full-featured e-commerce platform with payment integration, inventory management, and admin dashboard.",
        startDate: new Date("2020-05-01"),
        endDate: new Date("2020-08-01"),
        category: "project",
        skills: ["React", "Node.js", "Stripe", "MongoDB", "AWS"]
    },
    {
        title: "Hackathon Winner - Best Technical Innovation",
        organization: "TechCrunch Disrupt",
        description: "Won first place for developing an AI-powered accessibility tool in 48 hours. Led a team of 4 developers and designers.",
        startDate: new Date("2019-09-15"),
        endDate: new Date("2019-09-17"),
        category: "achievement",
        location: "San Francisco, CA",
        skills: ["JavaScript", "Machine Learning", "Team Leadership", "Rapid Prototyping"]
    },
    {
        title: "Software Engineering Intern",
        organization: "Google",
        description: "Worked on improving performance of core search algorithms. Implemented optimizations that reduced query response time by 15%.",
        startDate: new Date("2019-06-01"),
        endDate: new Date("2019-08-31"),
        category: "work",
        location: "Mountain View, CA",
        skills: ["Java", "C++", "Algorithm Optimization", "Large Scale Systems"]
    }
];

module.exports = {
    sampleProjects,
    sampleTimeline
};