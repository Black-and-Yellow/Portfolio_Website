const mongoose = require('mongoose');

const resumeSchema = new mongoose.Schema({
  personalInfo: {
    name: { type: String, required: true },
    title: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String },
    location: { type: String },
    website: { type: String },
    linkedin: { type: String },
    github: { type: String },
    summary: { type: String }
  },
  skills: {
    technical: [{ type: String }],
    languages: [{ 
      name: String, 
      level: { type: String, enum: ['beginner', 'intermediate', 'advanced', 'native'] }
    }],
    tools: [{ type: String }]
  },
  experience: [{
    title: { type: String, required: true },
    company: { type: String, required: true },
    location: { type: String },
    startDate: { type: Date, required: true },
    endDate: { type: Date },
    current: { type: Boolean, default: false },
    description: [{ type: String }],
    achievements: [{ type: String }]
  }],
  education: [{
    degree: { type: String, required: true },
    institution: { type: String, required: true },
    location: { type: String },
    startDate: { type: Date },
    endDate: { type: Date },
    gpa: { type: String },
    honors: [{ type: String }]
  }],
  certifications: [{
    name: { type: String, required: true },
    issuer: { type: String, required: true },
    date: { type: Date },
    expiryDate: { type: Date },
    credentialId: { type: String },
    url: { type: String }
  }],
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

resumeSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model('Resume', resumeSchema);