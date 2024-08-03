import React, { useState } from 'react';

interface Task {
  name: string;
  icon: string;
  reward: number;
  link: string;
  category: string;
}

const categories = ['Cinema', 'Special', 'Leagues', 'Ref'];
const tasks: Task[] = [
  { name: 'You Will LOSE Your Money', icon: '/icons/video-icon.png', reward: 400000, link: '#', category: 'Cinema' },
  { name: 'Blockchain Secrets', icon: '/icons/video-icon.png', reward: 400000, link: '#', category: 'Cinema' },
  { name: 'Crypto Bots Are SCAMMING You', icon: '/icons/video-icon.png', reward: 400000, link: '#', category: 'Cinema' },
  { name: 'Exclusive Deals', icon: '/icons/video-icon.png', reward: 500000, link: '#', category: 'Special' },
  { name: 'Limited Time Offer', icon: '/icons/video-icon.png', reward: 500000, link: '#', category: 'Special' },
  { name: 'Special Event', icon: '/icons/video-icon.png', reward: 500000, link: '#', category: 'Special' },
  { name: 'League Match 1', icon: '/icons/video-icon.png', reward: 600000, link: '#', category: 'Leagues' },
  { name: 'League Match 2', icon: '/icons/video-icon.png', reward: 600000, link: '#', category: 'Leagues' },
  { name: 'League Match 3', icon: '/icons/video-icon.png', reward: 600000, link: '#', category: 'Leagues' },
  { name: 'Referral Bonus 1', icon: '/icons/video-icon.png', reward: 700000, link: '#', category: 'Ref' },
  { name: 'Referral Bonus 2', icon: '/icons/video-icon.png', reward: 700000, link: '#', category: 'Ref' },
  { name: 'Referral Bonus 3', icon: '/icons/video-icon.png', reward: 700000, link: '#', category: 'Ref' },
];

const Tasks: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const filteredTasks = tasks.filter(task => task.category === selectedCategory);

  return (
    <div className="tasks container mx-auto p-4 bg-gradient-to-r from-purple-500 to-indigo-500 overflow-hidden min-h-screen">
      {/* Coin and Tier Display */}
      <div className="coin-display text-center mb-4">
        <div className="flex items-center justify-center text-white-400 text-3xl">
          <img src="/coin.png" alt="coin" className="w-9 mr-2" />
          <span className="text-4xl font-bold">{634}</span>
        </div>
        <div className="text-sm text-gray-400">Bronze</div>
      </div>

      {/* Category Tabs */}
      <div className="category-tabs flex justify-start mt-4 mb-6 overflow-x-auto whitespace-nowrap border border-white rounded-lg p-2">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 mx-1 rounded-lg ${selectedCategory === category ? 'bg-white bg-opacity-100 text-black' : 'bg-white bg-opacity-80 text-black'}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Total Earnings */}
      <div className="font-bold total-earnings text-center text-white-400 mb-4 flex items-center justify-center">
        <img src="/coin.png" alt="coin" className="w-5 mr-2" />
        1 200 000
      </div>

      {/* Task List */}
      <div className="task-list space-y-3">
        {filteredTasks.map((task, index) => (
          <div key={index} className="task flex items-center justify-between p-4 bg-white bg-opacity-80 rounded-lg shadow-md">
            <div className="flex items-center">
              <img src={task.icon} alt="icon" className="w-8 h-8 mr-4" />
              <span className="text-black text-sm font-bold">{task.name}</span>
            </div>
            <div className="flex items-center">
              <span className="text-black text-sm mr-2 font-bold">{task.reward.toLocaleString()}</span>
              <a href={task.link} className="text-blue-400">▶</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tasks;
