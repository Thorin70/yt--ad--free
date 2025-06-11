import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeatureSection from './components/FeatureSection';
import DownloadSection from './components/DownloadSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#0D0D0D] text-white overflow-x-hidden">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <FeatureSection />
        <DownloadSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;