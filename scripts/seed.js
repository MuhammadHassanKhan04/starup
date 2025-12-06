import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from '../server/models/User.js';
import Talent from '../server/models/Talent.js';

dotenv.config();

const seedData = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to MongoDB');

        // Clear existing data
        await User.deleteMany({});
        await Talent.deleteMany({});
        console.log('Cleared existing data');

        // Create Users
        const users = await User.create([
            {
                name: "Ahmed Ali",
                email: "ahmed@example.com",
                password: "password123"
            },
            {
                name: "Fatima Khan",
                email: "fatima@example.com",
                password: "password123"
            }
        ]);

        // Create Talents
        await Talent.create([
            {
                user: users[0]._id,
                name: "Ahmed Ali",
                title: "Professional Rubab Player",
                category: "Music",
                description: "I have been playing the Rubab for over 15 years, specializing in traditional Pashto and folk music. I have performed at various cultural events across Pakistan and have been featured on national TV. I am passionate about preserving our musical heritage and sharing it with the world.",
                location: "Peshawar, Pakistan",
                rating: 5.0,
                skills: ["Rubab", "Folk Music", "Live Performance"],
                image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&q=80"
            },
            {
                user: users[1]._id,
                name: "Fatima Khan",
                title: "Calligraphy Artist",
                category: "Art",
                description: "I am a professional calligrapher based in Lahore. My work blends traditional Islamic calligraphy with modern abstract art. I accept commissions for custom artwork, logos, and interior design pieces. My art is a reflection of my spiritual journey and love for the written word.",
                location: "Lahore, Pakistan",
                rating: 4.9,
                skills: ["Calligraphy", "Islamic Art", "Canvas Painting"],
                image: "https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=800&q=80"
            }
        ]);

        console.log('Seed data imported successfully');
        process.exit();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

seedData();
