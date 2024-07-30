// src/app/page.tsx (or equivalent entry point)
import MainStatus from '@/components/MainStatus'; // Adjust the import path as necessary
import NavBar from '@/components/NavBar'
import './globals.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Refer from '@/components/Refer'

const HomePage: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<MainStatus />} />
            <Route path="/ref" element={<Refer />} />
            {/* <Route path="/task" element={<TaskComponent />} />
            <Route path="/tap" element={<TapComponent />} />
            <Route path="/boost" element={<BoostComponent />} />
            <Route path="/stats" element={<StatsComponent />} /> */}
          </Routes>
          <NavBar />
        </div>
      </div>
    </Router>
  );
};

export default HomePage;
