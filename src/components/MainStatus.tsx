'use client';
import React, { useState } from 'react';
import './styles.css'; // Import the CSS file for the distortion effect

const MainStatus: React.FC = () => {
  const [coinCount, setCoinCount] = useState(634); // Initial coin count
  const [distortion, setDistortion] = useState<{ x: number; y: number } | null>(null); // State to handle distortion effect

  const handleMouseDown = (event: React.MouseEvent<HTMLImageElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    setDistortion({ x, y }); // Set distortion based on click position
    setCoinCount(coinCount + 1); // Increase the coin count
  };

  const handleMouseUp = () => {
    setDistortion(null); // Reset distortion effect after mouse release
  };

  const currentValue = 500;
  const maxValue = 500;
  const progressPercentage = (currentValue / maxValue) * 100;

  return (
    <div className="flex flex-col items-center justify-center p-4 bg-gradient-to-r from-purple-500 to-indigo-500 min-h-screen">
     {/* <div className="flex flex-col items-center justify-center p-4 bg-[url('/grass.png')] min-h-screen"> */}
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
          <div className=" rounded-full p-2 text-lg font-bold text-white flex items-center space-x-1">
            <span>300/500 ⚡</span>
          </div>
        </div>
        <div className="w-full bg-gray-300 rounded-full h-3 mt-3">
          <div className="bg-yellow-400 h-full rounded-full" style={{ width: `${40}%` }}></div>
        </div>
      </div>
    </div>
  );
}

export default MainStatus;
