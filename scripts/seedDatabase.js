const mongoose = require('mongoose');
const Project = require('../models/Project');
const Timeline = require('../models/Timeline');
const { sampleProjects, sampleTimeline } = require('../data/seedData');
require('dotenv').config();

async function seedDatabase() {
    try {
        // Connect to MongoDB
        await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log('🔌 Connected to MongoDB');

        // Clear existing data
        await Project.deleteMany({});
        await Timeline.deleteMany({});
        console.log('🗑️  Cleared existing data');

        // Insert sample projects
        const createdProjects = await Project.insertMany(sampleProjects);
        console.log(`✅ Created ${createdProjects.length} sample projects`);

        // Insert sample timeline entries
        const createdTimeline = await Timeline.insertMany(sampleTimeline);
        console.log(`✅ Created ${createdTimeline.length} sample timeline entries`);

        console.log('🎉 Database seeding completed successfully!');
        process.exit(0);
    } catch (error) {
        console.error('❌ Error seeding database:', error);
        process.exit(1);
    }
}

seedDatabase();