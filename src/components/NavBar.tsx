// src/components/NavBar.tsx
import React from 'react';
import { FaCat, FaTasks, FaFire, FaChartBar, FaHome } from 'react-icons/fa';

interface NavBarProps {
  activeView: string;
  onNavClick: (view: string) => void;
}

const NavBar: React.FC<NavBarProps> = ({ activeView, onNavClick }) => {
  return (
    <div id='navb' className="flex justify-between items-center w-11/12 bg-purple-700 p-4 fixed bottom-2 rounded-3xl mx-auto inset-x-0">
      <button
        onClick={() => onNavClick('ref')}
        className={`flex flex-col items-center text-white ${activeView === 'ref' ? 'icon-active' : ''}`}
      >
        <FaCat className="text-3xl" />
        <span className="text-sm mt-1">Ref</span>
      </button>
      <button
        onClick={() => onNavClick('task')}
        className={`flex flex-col items-center text-white ${activeView === 'task' ? 'icon-active' : ''}`}
      >
        <FaTasks className="text-3xl" />
        <span className="text-sm mt-1">Task</span>
      </button>
      <button
        onClick={() => onNavClick('home')}
        className={`flex flex-col items-center text-white ${activeView === 'home' ? 'icon-active' : ''}`}
      >
        <FaHome className="text-3xl" />
        <span className="text-sm mt-1">Home</span>
      </button>
      <button
        onClick={() => onNavClick('boost')}
        className={`flex flex-col items-center text-white ${activeView === 'boost' ? 'icon-active' : ''}`}
      >
        <FaFire className="text-3xl" />
        <span className="text-sm mt-1">Boost</span>
      </button>
      <button
        onClick={() => onNavClick('stats')}
        className={`flex flex-col items-center text-white ${activeView === 'stats' ? 'icon-active' : ''}`}
      >
        <FaChartBar className="text-3xl" />
        <span className="text-sm mt-1">Stats</span>
      </button>
    </div>
  );
};

export default NavBar;
