'use client';
// src/app/page.tsx
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation'; // Use useSearchParams for URL parameters in Next.js 13+
// Import components
import MainStatus from '@/components/MainStatus';
import NavBar from '@/components/NavBar';
import './globals.css';
import Refer from '@/components/Refer';
import TaskComponent from '@/components/TaskComponent';
import BoostComponent from '@/components/BoostComponent';
import StatsComponent from '@/components/StatsComponent';

const HomePage: React.FC = () => {
  const [activeView, setActiveView] = useState<string>('home');
  const [token, setToken] = useState<string | null>(null);
  const searchParams = useSearchParams();

  useEffect(() => {
    const tokenFromParams = searchParams.get('token');
    if (tokenFromParams) {
      setToken(tokenFromParams);
    }
  }, [searchParams]);

  const renderComponent = () => {
    switch (activeView) {
      case 'ref':
        return <Refer />;
      case 'task':
        return <TaskComponent />;
      case 'home':
        return <MainStatus token={token} />;
      case 'boost':
        return <BoostComponent />;
      case 'stats':
        return <StatsComponent />;
      default:
        return <MainStatus token={token} />;
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
