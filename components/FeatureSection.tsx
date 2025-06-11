import React, { useState, useEffect } from 'react';
import { FEATURES } from '../constants';
import { FeatureInfo } from '../types';

interface FeatureCardProps {
  feature: FeatureInfo;
  delay: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ feature, delay }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);
  
  return (
    <div 
      className={`bg-[#1A1A1A] p-6 rounded-xl shadow-2xl transform transition-all duration-500 ease-out hover:scale-105 hover:shadow-[#E50914]/20 flex flex-col items-center text-center opacity-0 ${isVisible ? 'opacity-100 translate-y-0' : 'translate-y-10'}`}
    >
      <div className="p-3 mb-4 bg-[#2E2E2E] rounded-full text-[#E50914]">
        <feature.icon className="h-10 w-10" />
      </div>
      <h3 className="text-2xl font-semibold text-white mb-3">{feature.title}</h3>
      <p className="text-[#AAAAAA] text-sm leading-relaxed">{feature.description}</p>
    </div>
  );
};

const FeatureSection: React.FC = () => {
  const [isSectionVisible, setSectionVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setSectionVisible(true), 400); // Section level delay
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="features" 
      className={`py-16 md:py-24 bg-[#0D0D0D] opacity-0 transform transition-opacity duration-1000 ease-out scroll-mt-20 ${isSectionVisible ? 'opacity-100' : ''}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#E50914] mb-4">Why Choose <span className="text-white">YT ReVanced?</span></h2>
          <p className="text-lg text-[#AAAAAA] max-w-xl mx-auto">
            Unlock a premium YouTube experience without the premium price tag.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature, index) => (
            <FeatureCard key={feature.id} feature={feature} delay={600 + index * 150} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;