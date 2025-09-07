const express = require('express');
const router = express.Router();

// Static project data
const allProjects = [
  {
    id: 1,
    title: "CargoLink Logistics Platform",
    description: "Engineered a full-stack logistics platform using HTML, CSS, JavaScript, Node.js, and MongoDB to connect transporters and shippers.",
    imageUrl: "https://images.pexels.com/photos/586078/pexels-photo-586078.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["HTML", "CSS", "JavaScript", "Node.js", "MongoDB"],
    githubUrl: "https://github.com/Black-and-Yellow/cargolink",
    liveUrl: null,
    category: "web-app",
    status: "completed",
    featured: true,
    startDate: "January 2024",
    endDate: "April 2024",
    highlights: [
      "Implemented a role-based system with distinct functionalities for Transporters, Customers, and Administrators",
      "Developed a secure, separate authentication system for each user role to ensure data privacy and integrity",
      "Created a comprehensive admin dashboard to monitor key application statistics and track revenue",
      "Built scalable architecture using Node.js and MongoDB for efficient data management"
    ]
  }
];

const categories = ["security", "web-app", "tools", "machine-learning", "blockchain"];

// Projects page
router.get('/', (req, res) => {
  const { category, search } = req.query;
  let filteredProjects = [...allProjects];

  // Filter by category
  if (category && category !== 'all') {
    filteredProjects = filteredProjects.filter(project => project.category === category);
  }

  // Filter by search
  if (search) {
    const searchLower = search.toLowerCase();
    filteredProjects = filteredProjects.filter(project => 
      project.title.toLowerCase().includes(searchLower) ||
      project.description.toLowerCase().includes(searchLower) ||
      project.technologies.some(tech => tech.toLowerCase().includes(searchLower))
    );
  }

  // Sort by creation date (newest first)
  filteredProjects.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  res.render('pages/projects', {
    title: 'Projects - Muthuraja S Portfolio',
    currentPath: '/projects',
    projects: filteredProjects,
    categories: categories,
    currentCategory: category || 'all',
    searchQuery: search || ''
  });
});

// Single project page
router.get('/:id', (req, res) => {
  const projectId = parseInt(req.params.id);
  const project = allProjects.find(p => p.id === projectId);
  
  if (!project) {
    return res.status(404).render('pages/404', {
      title: 'Project Not Found',
      currentPath: req.originalUrl
    });
  }

  // Get related projects from same category
  const relatedProjects = allProjects
    .filter(p => p.id !== project.id && p.category === project.category)
    .slice(0, 3);

  res.render('pages/project-detail', {
    title: `${project.title} - Muthuraja S Portfolio`,
    currentPath: `/projects/${project.id}`,
    project: project,
    relatedProjects: relatedProjects
  });
});

module.exports = router;