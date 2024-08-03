// src/components/TaskList.tsx

'use client';

import React from 'react';
import { FaTelegramPlane } from 'react-icons/fa'; // Replace with actual logos as needed

interface Task {
  title: string;
  profit: string;
  link: string;
  logo: string;
}

const tasks: Task[] = [
  {
    title: 'Watch a Sponsored Video',
    profit: '100,000',
    link: 'https://example.com',
    logo: 'FaTelegramPlane' // Use actual paths or icons
  },
  {
    title: 'Visit Decripto.org',
    profit: '100,000',
    link: 'https://example.com',
    logo: 'FaTelegramPlane'
  },
  {
    title: 'Follow our CEO on X',
    profit: '100,000',
    link: 'https://example.com',
    logo: 'FaTelegramPlane'
  },
  {
    title: 'Verify your phone number',
    profit: '100,000',
    link: 'https://example.com',
    logo: 'FaTelegramPlane'
  },
  {
    title: 'Share with your friends',
    profit: '100,000',
    link: 'https://example.com',
    logo: 'FaTelegramPlane'
  }
];

const TaskList: React.FC = () => {
  return (
    <div className="p-4">
      <div className="text-center  mb-4">
        <h2 className="text-2xl font-bold">Available Tasks</h2>
        <p className="text-gray-600">Complete any task and receive instant rewards!</p>
      </div>
      <div className="flex justify-center mb-4">
        <button className="bg-blue-200 text-blue-600 py-1 px-4 rounded-l-full focus:outline-none">Active</button>
        <button className="bg-gray-200 text-gray-600 py-1 px-4 rounded-r-full focus:outline-none">Completed</button>
      </div>
      {tasks.map((task, index) => (
        <div key={index} className="flex items-center justify-between bg-white p-4 mb-2 rounded-lg shadow-sm">
          <div className="flex items-center">
            <FaTelegramPlane size={24} className="mr-2" />
            <div>
              <h3 className="text-black font-semibold">{task.title}</h3>
              <p className="text-gray-500">+ ${task.profit}</p>
            </div>
          </div>
          <a href={task.link} className="bg-orange-500 text-white py-1 px-3 rounded-full hover:bg-orange-600">Start</a>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
