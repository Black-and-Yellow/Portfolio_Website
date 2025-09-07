const express = require('express');
const router = express.Router();

// Contact page
router.get('/', (req, res) => {
  res.render('pages/contact', {
    title: 'Contact - Alex Cyber Portfolio',
    currentPath: '/contact',
    success: req.query.success,
    error: req.query.error
  });
});

// Handle contact form submission (static - just shows success message)
router.post('/', (req, res) => {
  const { name, email, subject, message } = req.body;

  // Basic validation
  if (!name || !email || !subject || !message) {
    return res.redirect('/contact?error=All fields are required');
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.redirect('/contact?error=Please enter a valid email address');
  }
  
  // Simulate form processing
  console.log('Contact form submission:', {
    name: name.trim(),
    email: email.trim().toLowerCase(),
    subject: subject.trim(),
    message: message.trim(),
    timestamp: new Date(),
    ipAddress: req.ip
  });
  
  res.redirect('/contact?success=Message received! I\'ll contact you through the neural network soon.');
});

module.exports = router;