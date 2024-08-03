// lib/mongodb.ts

import mongoose from 'mongoose';

const MONGODB_URI = 'mongodb://localhost:27017/yourdb'; // Replace with your actual MongoDB URI

let isConnected: boolean = false;

export const connectToDatabase = async () => {
    if (isConnected) return;

    try {
        await mongoose.connect(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        isConnected = true;
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Failed to connect to MongoDB', error);
        throw error;
    }
};
