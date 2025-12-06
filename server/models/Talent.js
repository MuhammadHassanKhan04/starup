import mongoose from 'mongoose';

const talentSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    name: { // Snapshot of user's name for easier display
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    location: { // Optional, can be added to form later or defaulted
        type: String,
        default: 'Remote' 
    },
    image: { // For now we'll use a placeholder or handle uploads later if requested
        type: String, 
        default: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop'
    },
    rating: {
        type: Number,
        default: 0
    },
    skills: {
        type: [String],
        default: []
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model('Talent', talentSchema);
