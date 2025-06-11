"use client";

import React from 'react';
import { Bell, Settings, Home } from 'lucide-react';
import { CustomImage } from '@/components/ui/Images/Image';
import Link from '@/components/ui/Link/Link';

interface HeaderSectionProps {
  title: string;
  subtitle: string;
  profileImage?: string;
}

const DEFAULT_PROFILE_IMAGE = '/images/default-profile.jpg';

const ProfileSection = React.memo(({ 
  title, 
  subtitle, 
  profileImage 
}: HeaderSectionProps) => (
  <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
    <div className="relative group">
      <div className="absolute -inset-1 bg-gradient-to-r from-[#EFB036] via-[#d9a032] to-[#EFB036] rounded-full opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient-xy"></div>
      <div className="relative">
        <CustomImage
          src={profileImage || DEFAULT_PROFILE_IMAGE}
          alt={`${title}'s profile`}
          width={160}
          height={160}
          className="w-32 h-32 md:w-40 md:h-40 rounded-full ring-4 ring-[#EFB036] ring-offset-4 ring-offset-[#23486A] transform transition duration-300 group-hover:scale-105"
          fallbackSrc={DEFAULT_PROFILE_IMAGE}
        />
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#EFB036] to-[#d9a032] opacity-0 group-hover:opacity-20 transition duration-300"></div>
      </div>
    </div>
    <div className="text-center md:text-left">
      <h1 className="text-2xl md:text-4xl font-bold mb-2">{title}</h1>
      <p className="text-lg md:text-xl text-[#4C7B8B] mb-4">{subtitle}</p>
      <div className="flex items-center justify-center md:justify-start">
        <span className="text-xl md:text-2xl font-bold text-[#EFB036]">4.8</span>
        <span className="text-lg md:text-xl text-[#4C7B8B] ml-3">★ (12 reviews)</span>
      </div>
    </div>
  </div>
));

ProfileSection.displayName = 'ProfileSection';

const StatsSection = React.memo(() => (
  <div className="text-center md:text-right">
    <p className="text-lg md:text-xl text-[#F5EEDC] mb-1">Total spent</p>
    <p className="text-2xl md:text-3xl font-bold">$1,285</p>
  </div>
));

StatsSection.displayName = 'StatsSection';

const NavigationIcons = React.memo(() => (
  <div className="flex space-x-6">
    <Link href={"/"} className="p-3 bg-[#EFB036] hover:bg-[#d9a032] transform hover:scale-110 transition-all duration-300 ease-in-out rounded-xl text-[#F5EEDC] shadow-lg hover:shadow-xl">
      <Home size={30} className="transform hover:rotate-6" />
    </Link>
    <Link href={"/"} className="p-3 bg-[#EFB036] hover:bg-[#d9a032] transform hover:scale-110 transition-all duration-300 ease-in-out rounded-xl text-[#F5EEDC] shadow-lg hover:shadow-xl">
      <Bell size={30} className="transform hover:rotate-6" />
    </Link>
    <Link href={"/"} className="p-3 bg-[#EFB036] hover:bg-[#d9a032] transform hover:scale-110 transition-all duration-300 ease-in-out rounded-xl text-[#F5EEDC] shadow-lg hover:shadow-xl">
      <Settings size={30} className="transform hover:rotate-6 hover:animate-spin" />
    </Link>
  </div>
));

NavigationIcons.displayName = 'NavigationIcons';

export const HeaderSection = React.memo(({ 
  title, 
  subtitle,
  profileImage 
}: HeaderSectionProps) => (
  <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-12 mb-12 p-6 md:p-8 bg-[#23486A]/50 rounded-2xl backdrop-blur-sm">
    <ProfileSection title={title} subtitle={subtitle} profileImage={profileImage} />
    <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
      <StatsSection />
      <NavigationIcons />
    </div>
  </div>
));

HeaderSection.displayName = 'HeaderSection'; 