const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  longDescription: {
    type: String
  },
  technologies: [{
    type: String,
    required: true
  }],
  githubUrl: {
    type: String,
    required: true
  },
  liveUrl: {
    type: String
  },
  imageUrl: {
    type: String,
    required: true
  },
  featured: {
    type: Boolean,
    default: false
  },
  category: {
    type: String,
    enum: ['web', 'mobile', 'desktop', 'api', 'other'],
    default: 'web'
  },
  status: {
    type: String,
    enum: ['completed', 'in-progress', 'planned'],
    default: 'completed'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

projectSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model('Project', projectSchema);