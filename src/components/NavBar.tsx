import React from 'react';
import { FaCat, FaTasks, FaFire, FaChartBar } from 'react-icons/fa';

const NavBar: React.FC = () => {
  return (
    <div id='navb' className="flex justify-between items-center w-11/12 bg-purple-700 p-4 fixed bottom-2 rounded-3xl mx-auto inset-x-0">
      <button className="flex flex-col items-center text-white">
        <FaCat className="text-3xl" />
        <span className="text-sm mt-1">Ref</span>
      </button>
      <button className="flex flex-col items-center text-white">
        <FaTasks className="text-3xl" />
        <span className="text-sm mt-1">Task</span>
      </button>
      <button className="flex flex-col items-center text-yellow-400">
        <FaTasks className="text-3xl" />
        <span className="text-sm mt-1">Tap</span>
      </button>
      <button className="flex flex-col items-center text-white">
        <FaFire className="text-3xl" />
        <span className="text-sm mt-1">Boost</span>
      </button>
      <button className="flex flex-col items-center text-white">
        <FaChartBar className="text-3xl" />
        <span className="text-sm mt-1">Stats</span>
      </button>
    </div>
  );
}

export default NavBar;
