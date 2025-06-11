
import React from 'react';

export interface ApkInfo {
  id: string;
  name: string;
  version?: string;
  description: string;
  category: 'youtube' | 'gms';
  downloadLink: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  fileName: string;
  note?: string;
}

export interface FeatureInfo {
  id: string;
  title: string;
  description: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}
    