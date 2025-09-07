const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();
const Project = require('../models/Project');
const Timeline = require('../models/Timeline');
const Contact = require('../models/Contact');
const Resume = require('../models/Resume');

// Admin authentication middleware
const requireAuth = (req, res, next) => {
  if (req.session.isAdmin) {
    next();
  } else {
    res.redirect('/admin/login');
  }
};

// Admin login page
router.get('/login', (req, res) => {
  if (req.session.isAdmin) {
    return res.redirect('/admin');
  }
  res.render('admin/login', {
    title: 'Admin Login',
    error: req.query.error
  });
});

// Admin login handler
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    
    const adminUsername = process.env.ADMIN_USERNAME || 'admin';
    const adminPassword = process.env.ADMIN_PASSWORD || 'admin123';

    if (username === adminUsername && password === adminPassword) {
      req.session.isAdmin = true;
      res.redirect('/admin');
    } else {
      res.redirect('/admin/login?error=Invalid credentials');
    }
  } catch (error) {
    console.error('Admin login error:', error);
    res.redirect('/admin/login?error=Login failed');
  }
});

// Admin dashboard
router.get('/', requireAuth, async (req, res) => {
  try {
    const projectCount = await Project.countDocuments();
    const timelineCount = await Timeline.countDocuments();
    const contactCount = await Contact.countDocuments({ status: 'new' });

    res.render('admin/dashboard', {
      title: 'Admin Dashboard',
      stats: {
        projects: projectCount,
        timeline: timelineCount,
        newMessages: contactCount
      }
    });
  } catch (error) {
    console.error('Admin dashboard error:', error);
    res.status(500).send('Server Error');
  }
});

// Admin logout
router.post('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/admin/login');
});

// Projects management
router.get('/projects', requireAuth, async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.render('admin/projects', {
      title: 'Manage Projects',
      projects: projects
    });
  } catch (error) {
    console.error('Admin projects error:', error);
    res.status(500).send('Server Error');
  }
});

// Messages management
router.get('/messages', requireAuth, async (req, res) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 });
    res.render('admin/messages', {
      title: 'Messages',
      messages: messages
    });
  } catch (error) {
    console.error('Admin messages error:', error);
    res.status(500).send('Server Error');
  }
});

module.exports = router;