import { WebSocketServer } from 'ws';
import jwt from 'jsonwebtoken';
import { connectToDatabase } from '../../lib/mongodb';
import Player from '../models/Player';

const JWT_SECRET = 'greeenprem'; // Replace with your actual secret key

const wss = new WebSocketServer({ noServer: true });

wss.on('connection', async (ws, req) => {
    const cookie = req.headers.cookie as string;
    const token = cookie.split('token=')[1]
    console.log(cookie, 'whythispleasertelltlena')

    // Authenticate the token
    try {
        const decoded = jwt.verify(token, JWT_SECRET) as { id: string };
        const playerId = decoded.id;

        // Ensure the database connection is established
        await connectToDatabase();

        // Fetch the initial score from MongoDB
        const player = await Player.findById(playerId);
        if (!player) {
            ws.close();
            return;
        }

        // Send the initial score to the client
        ws.send(JSON.stringify({ type: 'coinCount', count: player.score }));

        // Handle incoming messages from the client
        ws.on('message', async (message) => {
            const data = JSON.parse(message.toString());
            if (data.type === 'updateCoinCount') {
                player.score += 1; // Update the score
                await player.save();

                // Broadcast the new score to all clients
                wss.clients.forEach((client) => {
                    if (client.readyState === WebSocket.OPEN) {
                        client.send(JSON.stringify({ type: 'coinCount', count: player.score }));
                    }
                });
            }
        });
    } catch (err) {
        throw (err)
        ws.close();
    }
});

export { wss };
