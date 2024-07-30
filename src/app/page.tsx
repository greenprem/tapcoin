'use client';
// src/app/page.tsx
import React, { useState } from 'react';
import MainStatus from '@/components/MainStatus'; // Adjust the import path as necessary
import NavBar from '@/components/NavBar';
import './globals.css';
// Import other components here
import Refer from '@/components/Refer';
import TaskComponent from '@/components/TaskComponent';
import BoostComponent from '@/components/BoostComponent';
import StatsComponent from '@/components/StatsComponent';

const HomePage: React.FC = () => {
  const [activeView, setActiveView] = useState<string>('home');

  const renderComponent = () => {
    switch (activeView) {
      case 'ref':
        return <Refer />;
      case 'task':
        return <TaskComponent />;
      case 'home':
        return <MainStatus />;
      case 'boost':
        return <BoostComponent />;
      case 'stats':
        return <StatsComponent />;
      default:
        return <MainStatus />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        {renderComponent()}
        <NavBar activeView={activeView} onNavClick={setActiveView} />
      </div>
    </div>
  );
};

export default HomePage;
