import React, { useState, useEffect } from 'react';

const Footer: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1200); // Delay for staggered animation
    return () => clearTimeout(timer);
  }, []);

  return (
    <footer 
      className={`bg-[#1A1A1A] border-t border-[#2E2E2E] opacity-0 transform transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'translate-y-10'}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
        <p className="text-[#AAAAAA] text-sm">
          &copy; {new Date().getFullYear()} YT ReVanced Hub. All rights reserved.
        </p>
        <p className="text-xs text-[#777777] mt-2">
          This site provides information and download links for YT ReVanced. We are not affiliated with YouTube or Google. Use at your own discretion.
        </p>
      </div>
    </footer>
  );
};

export default Footer;