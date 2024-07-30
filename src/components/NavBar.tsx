import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaCat, FaTasks, FaFire, FaChartBar, FaHome } from 'react-icons/fa';

const NavBar: React.FC = () => {
  return (
    <div id='navb' className="flex justify-between items-center w-11/12 bg-purple-700 p-4 fixed bottom-2 rounded-3xl mx-auto inset-x-0">
      <NavLink 
        to="/ref" 
        className={({ isActive }) => `flex flex-col items-center ${isActive ? 'text-yellow-400' : 'text-white'}`}
      >
        <FaCat className="text-3xl" />
        <span className="text-sm mt-1">Ref</span>
      </NavLink>
      <NavLink 
        to="/task" 
        className={({ isActive }) => `flex flex-col items-center ${isActive ? 'text-yellow-400' : 'text-white'}`}
      >
        <FaTasks className="text-3xl" />
        <span className="text-sm mt-1">Task</span>
      </NavLink>
      <NavLink 
        to="/" 
        className={({ isActive }) => `flex flex-col items-center ${isActive ? 'text-yellow-400' : 'text-white'}`}
      >
        <FaHome className="text-3xl" />
        <span className="text-sm mt-1">Tap</span>
      </NavLink>
      <NavLink 
        to="/boost" 
        className={({ isActive }) => `flex flex-col items-center ${isActive ? 'text-yellow-400' : 'text-white'}`}
      >
        <FaFire className="text-3xl" />
        <span className="text-sm mt-1">Boost</span>
      </NavLink>
      <NavLink 
        to="/stats" 
        className={({ isActive }) => `flex flex-col items-center ${isActive ? 'text-yellow-400' : 'text-white'}`}
      >
        <FaChartBar className="text-3xl" />
        <span className="text-sm mt-1">Stats</span>
      </NavLink>
    </div>
  );
}

export default NavBar;
