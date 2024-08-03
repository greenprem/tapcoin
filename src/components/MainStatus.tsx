import React, { useState, useEffect } from 'react';
import { decodeToken } from '../utils/decodeToken'; // Adjust the import path as necessary
import './styles.css'; // Import the CSS file for the distortion effect

interface MainStatusProps {
  token: string | null; // Define the type for the token prop
}

const MainStatus: React.FC<MainStatusProps> = ({ token }) => {
  const [coinCount, setCoinCount] = useState(634); // Initial coin count
  const [distortion, setDistortion] = useState<{ x: number; y: number } | null>(null); // State to handle distortion effect
  const [ws, setWs] = useState<WebSocket | null>(null); // State to hold WebSocket instance
  const [playerData, setPlayerData] = useState<any>(null); // State to hold player data

  useEffect(() => {
    let wsInstance: WebSocket | null = null;

    if (token) {
      const decoded = decodeToken(token); // Decode the token
      if (decoded && decoded.id) {
        const playerId = decoded.id; // Extract the player ID

        // Fetch player data using the extracted ID
        fetch(`/api/players/${playerId}`)
          .then((response) => response.json())
          .then((data) => {
            console.log('Player Data:', data);
            setPlayerData(data); // Set player data
            if (data && data.score) {
              setCoinCount(data.score); // Set coin count to player's score
            }
          })
          .catch((error) => {
            console.error('Error fetching player data:', error);
          });

        // Establish WebSocket connection
        document.cookie = `token=${token}; path=/`;
        console.log(document.cookie)

        fetch(`/api/auth-websocket?token=${token}`)
          .then((response) => response.json())
          .then(({ wsPort }) => {
            wsInstance = new WebSocket(`ws://localhost:${wsPort}`);

            wsInstance.onopen = () => {
              console.log('WebSocket connection established');
            };

            wsInstance.onmessage = (event) => {
              const data = JSON.parse(event.data);
              console.log('Received WebSocket message:', data);
              if (data.type === 'coinCount') {
                setCoinCount(data.count); // Update the coin count
              }
            };

            wsInstance.onerror = (error) => {
              console.error('WebSocket error:', error);
            };

            wsInstance.onclose = () => {
              console.log('WebSocket connection closed');
            };

            setWs(wsInstance); // Save the WebSocket instance to state
          })
          .catch((error) => {
            console.error('Error establishing WebSocket connection:', error);
          });
      } else {
        console.error('Invalid token payload');
      }
    }
    // document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/';

    return () => {
      if (wsInstance) {
        wsInstance.close();
      }
    };
  }, [token]);

  const handleMouseDown = (event: React.MouseEvent<HTMLImageElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    setDistortion({ x, y }); // Set distortion based on click position

    if (ws && ws.readyState === WebSocket.OPEN) {
      console.log('Sending updateCoinCount message');
      ws.send(JSON.stringify({ type: 'updateCoinCount' }));
    } else {
      console.error('WebSocket is not open or is closing/closed.');
    }
  };

  const handleMouseUp = () => {
    setDistortion(null); // Reset distortion effect after mouse release
  };
  document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/';

  return (
    <div className="relative flex flex-col items-center justify-center p-4 bg-gradient-to-r from-purple-500 to-indigo-500 min-h-screen">
      {/* Hello text in the top right corner */}
      <div className="absolute top-4 right-4 text-white">{playerData && playerData.first_name}</div>

      <div className="text-white flex items-center space-x-2">
        <img src="/coin.png" alt="coin" className="w-9" />
        <span className="text-4xl font-bold">{coinCount}</span>
      </div>
      <div className="text-lg text-gray-300 mt-2">Bronze</div>
      <div className="relative my-6">
        <img 
          src="/coin.png" 
          alt="large coin" 
          className={`w-[250px] ${distortion ? 'distorted' : ''}`} 
          style={distortion ? {
            transform: `translate(${distortion.x - 25}px, ${distortion.y - 25}px) scale(1.05)`,
            transition: 'transform 0.1s ease-out'
          } : {}}
          onMouseDown={handleMouseDown} 
          onMouseUp={handleMouseUp}
        />
      </div>
      <div className="flex flex-col items-center mt-4">
        <div className="flex items-center space-x-2">
          <div className="rounded-full p-2 text-lg font-bold text-white flex items-center space-x-1">
            <span>300/500 ⚡</span>
          </div>
        </div>
        <div className="w-full bg-gray-300 rounded-full h-3 mt-3">
          <div className="bg-yellow-400 h-full rounded-full" style={{ width: `${40}%` }}></div>
        </div>
      </div>
      {/* {token && <p>Token: {token}</p>} 
      {playerData && <p>Player Data: {JSON.stringify(playerData)}</p>}  */}
    </div>
  );
};

export default MainStatus;
