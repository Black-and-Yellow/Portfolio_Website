const express = require('express');
const router = express.Router();

// Static project data
const featuredProjects = [
  {
    id: 1,
    title: "CargoLink Logistics Platform",
    description: "Full-stack logistics platform connecting transporters and shippers with role-based authentication and admin dashboard.",
    imageUrl: "https://images.pexels.com/photos/586078/pexels-photo-586078.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["HTML", "CSS", "JavaScript", "Node.js", "MongoDB"],
    githubUrl: "https://github.com/Black-and-Yellow/cargolink",
    liveUrl: null,
    featured: true,
    category: "web-app"
  }
];

// Static timeline data
const timelineData = [
  {
    id: 1,
    title: "WebDev Lead",
    company: "Nexsync",
    location: "IIIT Sri City",
    startDate: new Date('2024-09-01'),
    current: true,
    description: "Leading web development initiatives and mentoring team members in modern web technologies.",
    type: "work",
    category: "work"
  },
  {
    id: 2,
    title: "Design Team Core",
    company: "Nexsync",
    location: "IIIT Sri City",
    startDate: new Date('2024-09-01'),
    current: true,
    description: "Designed visual materials including posters, banners, Instagram posts, and logos for technical and non-technical events.",
    type: "work",
    category: "work"
  },
  {
    id: 3,
    title: "Design Core",
    company: "IIIT Sri City",
    location: "Tada, Sricity, AP",
    startDate: new Date('2024-09-01'),
    endDate: new Date('2025-05-01'),
    description: "Created compelling visual content, including posters, banners, and social media graphics to promote various college events.",
    type: "work",
    category: "work"
  },
  {
    id: 4,
    title: "AgriAI Hackathon Participant",
    company: "IIIT Sri City Techno-Cultural Fest",
    location: "Tada, Sricity, AP",
    startDate: new Date('2024-03-01'),
    endDate: new Date('2024-03-01'),
    description: "Participated in AgriAI hackathon focusing on agricultural AI solutions during the annual techno-cultural fest.",
    type: "achievement",
    category: "project"
  },
  {
    id: 5,
    title: "Google Cloud Campaign Participant",
    company: "Google Developer Groups",
    location: "Online",
    startDate: new Date('2023-11-01'),
    endDate: new Date('2023-11-01'),
    description: "Participated in Google Cloud Campaign organized by Google Developer Groups, learning cloud technologies and best practices.",
    type: "achievement",
    category: "project"
  },
  {
    id: 6,
    title: "B.Tech Computer Science Engineering",
    company: "Indian Institute of Information Technology, Sri City",
    location: "Tada, Sricity, AP",
    startDate: new Date('2023-08-01'),
    current: true,
    description: "Pursuing Bachelor of Technology in Computer Science and Engineering with focus on full-stack development and software engineering.",
    type: "education",
    category: "education"
  }
];

// Static personal info
const personalInfo = {
  name: "Muthuraja S",
  title: "Computer Science Student & Full-Stack Developer",
  email: "muthuoffl6@gmail.com", // You can update this manually
  phone: "+91 9360944839", // You can update this manually
  location: "Tada, Sricity, AP",
  website: "https://muthurajas.dev",
  linkedin: "https://www.linkedin.com/in/muthuraja-s-6798b0314",
  github: "https://github.com/Black-and-Yellow",
  summary: "A dedicated and enthusiastic Computer Science student with a strong passion for full-stack development. Committed to continuous learning and applying technical skills to build efficient and scalable web applications."
};

// Home page
router.get('/', (req, res) => {
  res.render('pages/index', {
    title: 'Home - Muthuraja S Portfolio',
    currentPath: '/',
    projects: featuredProjects,
    timeline: timelineData.slice(0, 3),
    personalInfo: personalInfo
  });
});

// About page
router.get('/about', (req, res) => {
  res.render('pages/about', {
    title: 'About Me - Muthuraja S Portfolio',
    currentPath: '/about',
    personalInfo: personalInfo,
    skills: {
      technical: ['C', 'Java', 'Python', 'JavaScript', 'HTML/CSS', 'Node.js', 'Express.js', 'MongoDB', 'MySQL', 'Git/GitHub'],
      coursework: ['DBMS', 'Object-Oriented Programming (OOP)', 'Operating Systems', 'Computer Networks', 'Data Structures'],
      soft: ['Attention to detail', 'Problem Solving', 'Leadership', 'Management']
    }
  });
});

// Resume page
router.get('/resume', (req, res) => {
  const resume = {
    personalInfo: personalInfo,
    skills: {
      technical: ['C', 'Java', 'Python', 'JavaScript', 'HTML/CSS', 'Node.js', 'Express.js', 'MongoDB', 'MySQL'],
      tools: ['Git/GitHub', 'VS Code', 'MongoDB Compass', 'Postman'],
      languages: [
        { name: 'English', level: 'fluent' },
        { name: 'Tamil', level: 'native' },
        { name: 'Hindi', level: 'intermediate' }
      ],
      programming: ['C', 'Java', 'Python', 'JavaScript'],
      web: ['HTML/CSS', 'Node.js', 'Express.js'],
      databases: ['MySQL', 'MongoDB'],
      coursework: ['DBMS', 'Object-Oriented Programming (OOP)', 'Operating Systems', 'Computer Networks', 'Data Structures'],
      soft: ['Attention to detail', 'Problem Solving', 'Leadership', 'Management']
    },
    experience: [
      {
        title: 'WebDev Lead',
        company: 'Nexsync',
        location: 'IIIT Sri City',
        startDate: new Date('2024-09-01'),
        current: true,
        description: [
          'Lead web development projects using modern frameworks',
          'Mentor junior developers in best practices',
          'Coordinate with design team for seamless implementation',
          'Ensure code quality and project delivery timelines'
        ],
        achievements: []
      },
      {
        title: 'Design Team Core',
        company: 'Nexsync',
        location: 'IIIT Sri City',
        startDate: new Date('2024-09-01'),
        current: true,
        description: [
          'Designed posters, banners, Instagram posts, and logos',
          'Created visual content for technical and non-technical events',
          'Collaborated with event teams for cohesive branding',
          'Maintained design consistency across all materials'
        ],
        achievements: []
      },
      {
        title: 'Design Core',
        company: 'IIIT Sri City',
        location: 'Tirupati, AP',
        startDate: new Date('2024-09-01'),
        endDate: new Date('2025-05-01'),
        description: [
          'Created posters, banners, and social media graphics',
          'Promoted various college events through visual design',
          'Worked with student committees for event branding',
          'Delivered creative solutions under tight deadlines'
        ],
        achievements: []
      }
    ],
    education: [
      {
        degree: 'B.Tech in Computer Science and Engineering',
        institution: 'Indian Institute of Information Technology, Sri City',
        location: 'Tirupati, AP',
        startDate: new Date('2023-08-01'),
        current: true,
        gpa: null,
        specialization: 'Computer Science and Engineering'
      }
    ],
    projects: [
      {
        title: 'CargoLink',
        technologies: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'MongoDB'],
        startDate: new Date('2024-01-01'),
        endDate: new Date('2024-04-01'),
        description: 'Engineered a full-stack logistics platform to connect transporters and shippers.',
        highlights: [
          'Implemented role-based system with distinct functionalities for Transporters, Customers, and Administrators',
          'Developed secure, separate authentication system for each user role to ensure data privacy and integrity',
          'Created comprehensive admin dashboard to monitor key application statistics and track revenue',
          'Built scalable architecture using Node.js and MongoDB for efficient data management'
        ]
      }
    ],
    achievements: [
      {
        title: 'Google Cloud Campaign Participant',
        organization: 'Google Developer Groups',
        year: '2023',
        description: 'Participated in Google Cloud Campaign organized by Google Developer Groups'
      },
      {
        title: 'AgriAI Hackathon Participant',
        organization: 'IIIT Sricity Techno-Cultural Fest',
        year: '2024',
        description: 'Participated in AgriAI hackathon during Techno-Cultural feast at IIIT Sricity'
      }
    ]
  };

  res.render('pages/resume', {
    title: 'Resume - Muthuraja S Portfolio',
    currentPath: '/resume',
    resume: resume
  });
});

// Timeline page
router.get('/timeline', (req, res) => {
  res.render('pages/timeline', {
    title: 'Timeline - Muthuraja S Portfolio',
    currentPath: '/timeline',
    timeline: timelineData
  });
});

module.exports = router;