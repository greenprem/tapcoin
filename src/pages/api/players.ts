// pages/api/players.ts

import type { NextApiRequest, NextApiResponse } from 'next';
import mongoose from 'mongoose';
import { connectToDatabase } from './../../../lib/mongodb'

import Player from './../../models/Player'



export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    await connectToDatabase();

    if (req.method === 'POST') {
        const newPlayer = req.body;

        try {
            // Check if the player already exists
            const existingPlayer = await Player.findById(newPlayer._id);
            if (existingPlayer) {
                return res.status(404).send('existingPlayer');
            }

            // Create and save the new player
            const player = new Player(newPlayer);
            await player.save();
            res.status(200).send('Player created successfully');
        } catch (error) {
            console.error(error);
            res.status(500).send('Server error');
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
