// src/components/MainContainer.tsx
'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import NavBar from './NavBar';
import MainContent from './MainContent';
import TaskList from './TaskList';
import DailyEarn from './DailyEarn';

const MainContainer: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('Home');
  const [isCollected, setIsCollected] = useState<boolean>(false);

  const handleCollect = () => {
    setIsCollected(true);
  };

  const variants = {
    hidden: { opacity: 0, x: -100 },
    enter: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 100 },
  };

  return (
    <div className="flex flex-col h-screen bg-white">
      <AnimatePresence mode="wait">
        {!isCollected && (
          <motion.div
            key="dailyEarn"
            initial="hidden"
            animate="enter"
            exit="exit"
            variants={variants}
            transition={{ duration: 0.5 }}
          >
            <DailyEarn onCollect={handleCollect} />
          </motion.div>
        )}
        {isCollected && activeTab === 'Home' && (
          <motion.div
            key="home"
            initial="hidden"
            animate="enter"
            exit="exit"
            variants={variants}
            transition={{ duration: 0.5 }}
          >
            <MainContent />
          </motion.div>
        )}
        {activeTab === 'Tasks' && (
          <motion.div
            key="tasks"
            initial="hidden"
            animate="enter"
            exit="exit"
            variants={variants}
            transition={{ duration: 0.5 }}
          >
            <TaskList />
          </motion.div>
        )}
        {activeTab === 'Friends' && (
          <motion.div
            key="friends"
            initial="hidden"
            animate="enter"
            exit="exit"
            variants={variants}
            transition={{ duration: 0.5 }}
            className="p-4"
          >
            Friends Content
          </motion.div>
        )}
        {activeTab === 'Activity' && (
          <motion.div
            key="activity"
            initial="hidden"
            animate="enter"
            exit="exit"
            variants={variants}
            transition={{ duration: 0.5 }}
            className="p-4"
          >
            Activity Content
          </motion.div>
        )}
        {activeTab === 'Wallet' && (
          <motion.div
            key="wallet"
            initial="hidden"
            animate="enter"
            exit="exit"
            variants={variants}
            transition={{ duration: 0.5 }}
            className="p-4"
          >
            Wallet Content
          </motion.div>
        )}
      </AnimatePresence>
      <NavBar setActiveTab={setActiveTab} />
    </div>
  );
};

export default MainContainer;
