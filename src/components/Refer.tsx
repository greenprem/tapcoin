'use client';
import React, { useState } from 'react';

import { FaClipboard } from 'react-icons/fa';

// Example data for referrals
// const referrals = [
//   { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
//   { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' },
// ];

const referrals = []

const RefComponent: React.FC = () => {
  const [inviteLink] = useState('https://t.me/invite/test'); // Replace with your actual invite link
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(inviteLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset copy status after 2 seconds
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gradient-to-r from-purple-500 to-indigo-500 min-h-screen">
  <h1 className="text-white text-3xl font-bold mb-6">{referrals.length} Referrals</h1>

  <div className="bg-white bg-opacity-80 p-4 rounded-lg shadow-lg mb-20 w-full max-w-md mx-auto">
    <div className="flex items-center">
      <div className="flex flex-col flex-grow">
        <span className="text-gray-800 mb-2">My invite link:</span>
        <div className="flex items-center">
          <input 
            type="text" 
            value={inviteLink} 
            readOnly 
            className="text-sm bg-gray-200 border border-gray-300 rounded-md p-2 text-gray-800 w-full"
          />
          <button 
            onClick={copyToClipboard} 
            className="bg-blue-400 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition ml-4"
          >
            <FaClipboard />
          </button>
        </div>
      </div>
    </div>
  </div>

  <h2 className="text-white text-2xl font-semibold mb-4">My Referrals:</h2>
  <ul className="list-none pl-0 text-white">
    {referrals.length > 0 ? (
      referrals.map((referral) => (
        <li key={referral.id} className="mb-2">
          {referral.name} ({referral.email})
        </li>
      ))
    ) : (
      <li>No referrals yet</li>
    )}
  </ul>
</div>

  );
};

export default RefComponent;
