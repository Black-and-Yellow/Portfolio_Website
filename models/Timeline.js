const mongoose = require('mongoose');

const timelineSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  organization: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date
  },
  current: {
    type: Boolean,
    default: false
  },
  category: {
    type: String,
    enum: ['education', 'work', 'project', 'achievement'],
    required: true
  },
  location: {
    type: String
  },
  skills: [{
    type: String
  }],
  order: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

timelineSchema.index({ startDate: -1 });

module.exports = mongoose.model('Timeline', timelineSchema);