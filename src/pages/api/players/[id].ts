// pages/api/players/[id].ts

import type { NextApiRequest, NextApiResponse } from 'next';
import mongoose from 'mongoose';
import { connectToDatabase } from '../../../../lib/mongodb'
import jwt from 'jsonwebtoken';
import Player from './../../../models/Player'




export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    await connectToDatabase();

    const { id } = req.query;

    if (req.method === 'GET') {
        try {
            // Find the player by ID
            const player = await Player.findById(id);
            if (player) {
                return res.status(200).json(player);
            } else {
                return res.status(200).json({ message: false });
            }
        } catch (error) {
            console.error(error);
            res.status(500).send('Server error');
        }
    } else {
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
