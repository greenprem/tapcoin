// src/components/DailyEarn.tsx
import React from 'react';
import Image from 'next/image';
import ThreeDButton from '../components/ThreeDButton';

interface DailyEarnProps {
  onCollect: () => void;
}

const DailyEarn: React.FC<DailyEarnProps> = ({ onCollect }) => {
  return (
    <div className="flex flex-col h-screen items-center bg-white rounded-lg shadow-lg p-6 w-full max-w-xl mx-auto mt-8">
      <div className="mb-4">
        <Image src={'/pfp.png'} alt="Reward Icon" width={80} height={80} />
      </div>
      <div className="text-center mb-6">
        <h2 className="text-xl font-bold">Great to see you back!</h2>
        <p className="text-lg">Today's reward:</p>
        <div className="text-5xl font-bold text-blue-600 my-2">$ 20,000</div>
        <p className="text-gray-600">Come back every day to claim awesome rewards</p>
      </div>
      <div className="w-full">
        <div className="flex justify-between items-center mb-2">
          <span className="text-blue-600">1<sup>st</sup> day</span>
          <span className="text-purple-600">$ 10,000</span>
        </div>
        <div className="flex justify-between items-center mb-2">
          <span className="text-blue-600">2<sup>nd</sup> day</span>
          <span className="text-purple-600">$ 20,000</span>
        </div>
        <div className="flex justify-between items-center mb-2">
          <span className="text-blue-600">3<sup>rd</sup> day</span>
          <span className="text-purple-600">$ 30,000</span>
        </div>
        <div className="flex justify-between items-center mb-2">
          <span className="text-blue-600">4<sup>th</sup> day</span>
          <span className="text-purple-600">$ 40,000</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-blue-600">5<sup>th</sup> &amp; upcoming days</span>
          <span className="text-purple-600">$ 50,000</span>
        </div>
      </div>
      <ThreeDButton bgColor="blue-500" onClick={onCollect} text = "Claim $ 20,000" />
    </div>
  );
};

export default DailyEarn;
