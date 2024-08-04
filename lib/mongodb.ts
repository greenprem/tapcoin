// lib/mongodb.ts

import mongoose from 'mongoose';

const MONGODB_URI = 'mongodb://localhost:27017/yourdb'; // Replace with your actual MongoDB URI

let isConnected = false;

export const connectToDatabase = async () => {
    if (isConnected) return;

    try {
        await mongoose.connect(MONGODB_URI, {
            // useNewUrlParser and useUnifiedTopology are no longer needed
            // any additional options can be added here if needed
        });
        isConnected = true;
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Failed to connect to MongoDB', error);
        throw error;
    }
};
