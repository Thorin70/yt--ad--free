
import React from 'react';
import { ApkInfo, FeatureInfo } from './types';
import { PlayIcon } from './components/icons/PlayIcon';
import { CogIcon } from './components/icons/CogIcon';
import { ShieldCheckIcon } from './components/icons/ShieldCheckIcon';
import { ZapIcon } from './components/icons/ZapIcon';
import { SmartphoneIcon } from './components/icons/SmartphoneIcon';
import {GiftIcon} from './components/icons/GiftIcon';

export const APK_FILES: ApkInfo[] = [
  {
    id: 'yt-revanced',
    name: 'YT ReVanced',
    version: 'v19.xx.xx',
    description: 'Core ad-free YouTube experience with SponsorBlock and more.',
    category: 'youtube',
    downloadLink: 'https://drive.google.com/uc?export=download&id=1IAb1E7U0MhXVFlNnZ6p1ESD9Px4vUbf6', 
    icon: PlayIcon,
    fileName: 'yt_revanced.apk',
    note: 'Recommended for most users.'
  },
  {
    id: 'yt-revanced-extended',
    name: 'YT ReVanced Extended',
    version: 'v19.xx.xx',
    description: 'Extended version with additional features and customizations.',
    category: 'youtube',
    downloadLink: 'https://drive.google.com/uc?export=download&id=1fl66BbGus7g4AOft70NELjdr2gzokyRH',
    icon: PlayIcon,
    fileName: 'yt_revanced_extended.apk',
    note: 'For users wanting more experimental features.'
  },
  {
    id: 'gms-core-non-xiaomi',
    name: 'GMS Core (Standard)',
    version: 'v0.3.x.x',
    description: 'Essential for Google services login. For most non-Xiaomi devices.',
    category: 'gms',
    downloadLink: 'https://drive.google.com/uc?export=download&id=1PqKjPAYNU22a1_kT0sfhkiSFteMmCdcy',
    icon: CogIcon,
    fileName: 'gms_core_standard.apk',
    note: 'Required for login & notifications. For all devices except Xiaomi.'
  },
  {
    id: 'gms-core-xiaomi',
    name: 'GMS Core (Xiaomi)',
    version: 'v0.3.x.x',
    description: 'Special version for Xiaomi devices running HyperOS/MIUI.',
    category: 'gms',
    downloadLink: 'https://drive.google.com/uc?export=download&id=1S3ijCi-ZxJjO3gRDqDGfCRXF6e41xUr2',
    icon: CogIcon,
    fileName: 'gms_core_xiaomi.apk',
    note: 'Use this if you have a Xiaomi phone.'
  },
];

export const FEATURES: FeatureInfo[] = [
  {
    id: 'ad-free',
    title: 'Ad-Free Bliss',
    description: 'Enjoy your favorite content without any annoying video or layout ads.',
    icon: ZapIcon,
  },
  {
    id: 'background-play',
    title: 'Background Play',
    description: 'Listen to music or podcasts with your screen off or while using other apps.',
    icon: SmartphoneIcon,
  },
  {
    id: 'safe-secure',
    title: 'Safe & Secure',
    description: 'Built on open-source principles, ensuring your privacy and security.',
    icon: ShieldCheckIcon,
  },
   {
    id: 'sponsorblock',
    title: 'SponsorBlock',
    description: 'Automatically skip sponsor segments, intros, outros, and more.',
    icon: GiftIcon,
  },
];
