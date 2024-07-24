'use client';
import React, { useState, useEffect, useRef } from 'react';
import Draggable from 'react-draggable';
import './styles.css'; // Import the CSS file for the distortion effect

const MainStatus: React.FC = () => {
  const [goalCount, setGoalCount] = useState(1); // Initial goal count
  const [balls, setBalls] = useState<{ id: number; x: number; y: number; speed: number }[]>([]);
  const netRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const addBallInterval = setInterval(() => {
      const id = new Date().getTime();
      setBalls((prevBalls) => [
        ...prevBalls,
        { id, x: Math.random() * window.innerWidth, y: -50, speed: 0 },
      ]);
    }, 200);

    return () => clearInterval(addBallInterval);
  }, []);

  useEffect(() => {
    const updateBallsInterval = setInterval(() => {
      setBalls((prevBalls) =>
        prevBalls.map((ball) => ({
          ...ball,
          y: ball.y + ball.speed,
          speed: ball.speed + 1.5, // Simulate gravity
        }))
      );

      setBalls((prevBalls) => {
        const net = netRef.current;
        if (!net) return prevBalls;

        const netRect = net.getBoundingClientRect();
        return prevBalls.filter((ball) => {
          const ballRect = document.getElementById(`ball-${ball.id}`)?.getBoundingClientRect();
          if (!ballRect) return true;

          const isInNet =
            ballRect.x + ballRect.width > netRect.x &&
            ballRect.x < netRect.x + netRect.width &&
            ballRect.y + ballRect.height > netRect.y &&
            ballRect.y < netRect.y + netRect.height;

          if (isInNet) {
            setGoalCount((prevCount) => prevCount + 1);
            return false;
          }

          return ball.y < window.innerHeight;
        });
      });
    }, 20);

    return () => clearInterval(updateBallsInterval);
  }, []);

  const handleDrag = (e: any, data: any) => {
    // Logic for dragging the goal net stand
  };

  return (
    <div className="flex flex-col min-h-screen bg-[url('/grass.png')] overflow-hidden">
      <header className="p-4 text-center text-white">
        <div className="text-5xl font-bold">{goalCount}</div>
        <div className="text-lg text-gray-300">Goals</div>
      </header>
      <main className="relative flex-grow">
        {balls.map((ball) => (
          <div
            key={ball.id}
            id={`ball-${ball.id}`}
            className="absolute"
            style={{
              left: ball.x,
              top: ball.y,
              transform: `scale(${1 + ball.y / window.innerHeight})`, // Scale the ball size
            }}
          >
            <img
              src="/ball.png"
              alt="falling ball"
              className="w-10 h-10"
            />
          </div>
        ))}
      </main>
      <footer className="flex justify-center p-4 mb-20 ml-10 mr-10 bg-transparent">
        <Draggable axis='x' onDrag={handleDrag}>
          <div ref={netRef}>
            <img src="/stand.png" alt="goal net stand" className="w-50" />
          </div>
        </Draggable>
      </footer>
    </div>
  );
};

export default MainStatus;
