import express from 'express';
import Talent from '../models/Talent.js';
import User from '../models/User.js';

import multer from 'multer';
import path from 'path';
import fs from 'fs';

// Configure Multer Storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        // Ensure directory exists
        const uploadDir = 'server/uploads';
        if (!fs.existsSync(uploadDir)){
            fs.mkdirSync(uploadDir, { recursive: true });
        }
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

const router = express.Router();

// Create Talent (with image upload)
router.post('/', upload.single('image'), async (req, res) => {
    try {
        console.log('Received submission:', req.body);
        console.log('Received file:', req.file);

        const { userId, title, category, description } = req.body;
        
        // Construct image URL
        let imageUrl = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop'; // Default
        if (req.file) {
            // Assuming server runs on the same host
            imageUrl = `/uploads/${req.file.filename}`;
        }
        
        if (!userId) {
            console.error('Missing userId in body');
            return res.status(400).json({ msg: 'User ID is required' });
        }

        const user = await User.findById(userId);
        if (!user) {
            console.error('User not found for ID:', userId);
            return res.status(404).json({ msg: 'User not found' });
        }

        const newTalent = new Talent({
            user: userId,
            name: user.name,
            title,
            category,
            description,
            image: imageUrl
        });

        const talent = await newTalent.save();
        res.json(talent);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// Get All Talents
router.get('/', async (req, res) => {
    try {
        const talents = await Talent.find().sort({ createdAt: -1 });
        res.json(talents);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// Get Single Talent
router.get('/:id', async (req, res) => {
    try {
        const talent = await Talent.findById(req.params.id);
        if (!talent) return res.status(404).json({ msg: 'Talent not found' });
        res.json(talent);
    } catch (err) {
        console.error(err.message);
        if (err.kind === 'ObjectId') return res.status(404).json({ msg: 'Talent not found' });
        res.status(500).send('Server Error');
    }
});

export default router;
