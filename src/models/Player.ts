import mongoose from 'mongoose';

const playerSchema = new mongoose.Schema({
    _id: { type: String, required: true },
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    username: { type: String, required: true },
    score: { type: Number, required: true },
    ref_id: { type: String, required: true },
    referrals: { type: [String], default: [] },
    is_premium: { type: Boolean, default: false },
    not: { type: Number, default: 0 }
});

// Create a Player model
const Player = mongoose.models.Player || mongoose.model('Player', playerSchema);

export default Player;
