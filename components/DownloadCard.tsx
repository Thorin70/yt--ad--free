import React, { useState, useEffect } from 'react';
import { ApkInfo } from '../types';
import StyledButton from './StyledButton';
import { DownloadCloudIcon } from './icons/DownloadCloudIcon';

interface DownloadCardProps {
  apk: ApkInfo;
  delay: number;
}

const DownloadCard: React.FC<DownloadCardProps> = ({ apk, delay }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div 
      className={`bg-[#1A1A1A] p-6 rounded-xl shadow-2xl flex flex-col justify-between transform transition-all duration-500 ease-out hover:shadow-[#E50914]/30 hover:-translate-y-1 opacity-0 ${isVisible ? 'opacity-100 translate-y-0' : 'translate-y-10'}`}
    >
      <div>
        <div className="flex items-center mb-4">
          <apk.icon className="h-10 w-10 text-[#E50914] mr-4 flex-shrink-0" />
          <div>
            <h4 className="text-xl font-semibold text-white">{apk.name}</h4>
            {apk.version && <p className="text-xs text-[#777777]">Version: {apk.version}</p>}
          </div>
        </div>
        <p className="text-[#AAAAAA] text-sm mb-3 leading-relaxed min-h-[60px]">{apk.description}</p>
        {apk.note && <p className="text-xs text-[#96F0D4] bg-[#00FFAB]/15 p-2 rounded-md mb-4">{apk.note}</p>}
      </div>
      <StyledButton
        href={apk.downloadLink}
        download={apk.fileName}
        fullWidth
        className="mt-4"
        variant="secondary" 
      >
        <DownloadCloudIcon className="h-5 w-5 mr-2" />
        Download {apk.fileName}
      </StyledButton>
    </div>
  );
};

export default DownloadCard;