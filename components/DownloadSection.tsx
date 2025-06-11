import React, { useState, useEffect } from 'react';
import { APK_FILES } from '../constants';
import DownloadCard from './DownloadCard';

const DownloadSection: React.FC = () => {
  const [isSectionVisible, setSectionVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setSectionVisible(true), 600); // Section level delay
    return () => clearTimeout(timer);
  }, []);

  const youtubeApks = APK_FILES.filter(apk => apk.category === 'youtube');
  const gmsApks = APK_FILES.filter(apk => apk.category === 'gms');

  return (
    <section id="download" 
      className={`py-16 md:py-24 bg-gradient-to-b from-[#111111] to-[#0D0D0D] opacity-0 transform transition-opacity duration-1000 ease-out scroll-mt-20 ${isSectionVisible ? 'opacity-100' : ''}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#E50914] mb-4">Get Your Ad-Free YouTube</h2>
          <p className="text-lg text-[#AAAAAA] max-w-2xl mx-auto mb-6">
            To enjoy YT ReVanced, you need to download <strong className="text-[#E50914]">one YouTube app</strong> and <strong className="text-[#E50914]">one GMS Core app</strong>. Follow the steps below.
          </p>
          <div className="bg-[#00FFAB]/10 border border-[#00FFAB]/40 text-[#BAFFE9] px-4 py-3 rounded-lg text-sm max-w-xl mx-auto">
            <strong className="font-bold text-[#D1FFF0]">Important:</strong> Make sure to enable installation from unknown sources in your Android settings.
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-white mb-2 text-center border-b-2 border-[#E50914] pb-2 inline-block">
            Step 1: Choose Your YouTube App
          </h3>
          <p className="text-center text-[#AAAAAA] mb-8">Select one version of YT ReVanced.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {youtubeApks.map((apk, index) => (
              <DownloadCard key={apk.id} apk={apk} delay={800 + index * 150} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-white mb-2 text-center border-b-2 border-[#E50914] pb-2 inline-block">
            Step 2: Choose Your GMS Core
          </h3>
          <p className="text-center text-[#AAAAAA] mb-8">This is required for login and notifications. Pick the one for your device.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {gmsApks.map((apk, index) => (
              <DownloadCard key={apk.id} apk={apk} delay={1000 + index * 150} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;