import React, { useState, useEffect } from 'react';
import StyledButton from './StyledButton';
import { PlayIcon } from './icons/PlayIcon';

const HeroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200); // Delay for staggered animation
    return () => clearTimeout(timer);
  }, []);

  return (
    <section 
      className={`bg-gradient-to-br from-[#0D0D0D] via-[#111111] to-black py-20 md:py-32 text-center opacity-0 transform transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'translate-y-10'}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="inline-block p-4 bg-[#1A1A1A] bg-opacity-70 rounded-full shadow-xl mb-8 transform transition-transform duration-500 hover:scale-110">
          <PlayIcon className="h-16 w-16 text-[#E50914]" />
        </div>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#E50914] via-[#00FFAB] to-[#8A2BE2] mb-6 leading-tight">
          Experience YouTube, Uninterrupted.
        </h2>
        <p className="text-lg sm:text-xl text-[#AAAAAA] max-w-2xl mx-auto mb-10">
          Say goodbye to ads and hello to enhanced features with YT ReVanced. Safe, free, and packed with tools to make your YouTube experience perfect.
        </p>
        <StyledButton 
          onClick={() => {
            const downloadSection = document.getElementById('download');
            if (downloadSection) {
              downloadSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          size="lg"
          variant="primary"
        >
          Get Started Now
        </StyledButton>
      </div>
      {/* Subtle background pattern or elements if desired */}
      <div className="absolute inset-0 overflow-hidden opacity-10 z-0">
        {/* Example: faint grid lines or particles */}
      </div>
    </section>
  );
};

export default HeroSection;