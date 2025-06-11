import React, { useState, useEffect } from 'react';
import { PlayIcon } from './icons/PlayIcon';

const Header: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Slight delay for animation
    const timer = setTimeout(() => setIsVisible(true), 50); 
    return () => clearTimeout(timer);
  }, []);

  const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    event.preventDefault();
    const element = document.getElementById(targetId.substring(1)); // Remove '#' from ID
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`bg-[#1A1A1A] shadow-lg sticky top-0 z-50 opacity-0 transform transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : '-translate-y-full'}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <PlayIcon className="h-10 w-10 text-[#E50914] mr-3" />
            <h1 className="text-3xl font-bold text-white tracking-tight">
              YT <span className="text-[#E50914]">ReVanced</span> Hub
            </h1>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a 
              href="#features" 
              onClick={(e) => handleNavClick(e, '#features')}
              className="text-[#AAAAAA] hover:text-[#E50914] transition-colors duration-300 px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
              aria-label="Scroll to Features section"
            >
              Features
            </a>
            <a 
              href="#download" 
              onClick={(e) => handleNavClick(e, '#download')}
              className="text-[#AAAAAA] hover:text-[#E50914] transition-colors duration-300 px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
              aria-label="Scroll to Download section"
            >
              Download
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;