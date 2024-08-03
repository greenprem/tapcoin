import { NextApiRequest, NextApiResponse } from 'next';
import { Server } from 'http';
import { wss } from '../../utils/websocket';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'GET') {
        if (!req.query.token) {
            res.status(400).send('Token required');
            return;
        }

        const server = new Server();
        server.on('upgrade', (request, socket, head) => {
            wss.handleUpgrade(request, socket, head, (ws) => {
                wss.emit('connection', ws, request);
            });
        });

        server.listen(0, () => {
            const port = server.address().port;
            res.status(200).json({ wsPort: port });
        });
    } else {
        res.status(405).send('Method not allowed');
    }
};

export default handler;
