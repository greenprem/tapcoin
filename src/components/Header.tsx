// components/Header.tsx
import Image from 'next/image';

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-md">
      <div className="flex items-center">
        <Image src="/pfp.png" alt="Profile Picture" width={40} height={40} className="rounded-full"/>
        <span className="ml-2 font-semibold">epg00</span>
      </div>
      <div className="flex items-center">
        <button className="flex items-center bg-gray-200 py-2 px-4 rounded-full">
          🌐
        </button>
      </div>
    </header>
  );
};

export default Header;
