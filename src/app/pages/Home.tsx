// src/app/pages/Home.tsx
import React from 'react';
import Header from '../components/Header';
import MainContent from '../components/MainContent';
import NavBar from '../components/NavBar';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <MainContent />
      <NavBar />
    </div>
  );
};

export default Home;
