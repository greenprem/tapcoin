// src/app/page.tsx (or equivalent entry point)
import MainStatus from '@/components/MainStatus'; // Adjust the import path as necessary
import Header from '@/components/Header'
import NavBar from '@/components/NavBar'
import './globals.css'

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
  <MainStatus />
  <NavBar/>
  </div>
  )
};

export default HomePage;
