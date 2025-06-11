"use client";

import React, { useState, useEffect, memo } from 'react';
import { FaUsers, FaAward, FaClock, FaBuilding, FaHandshake, FaStar } from 'react-icons/fa';

// Memoized Loading Skeleton Component
// eslint-disable-next-line react/display-name
const LoadingSkeleton = memo(({ className }: { className: string }) => (
  <div className={`bg-[#3B6790]/20 animate-pulse rounded ${className}`}></div>
));

// Memoized Animated Number Component
// eslint-disable-next-line react/display-name
const AnimatedNumber = memo(({ value }: { value: number }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const stepValue = value / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      setCurrent(Math.min(Math.round(stepValue * currentStep), value));

      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value]);

  return <span className="text-[#EFB036]">{current.toLocaleString()}</span>;
});

// Memoized Stat Card Component
// eslint-disable-next-line react/display-name
const StatCard = memo(({ stat }: { stat: unknown }) => (
  <div className="text-center group transition-all duration-300 hover:scale-105">
    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#23486A] group-hover:bg-[#3B6790] transition-colors duration-300 mb-4 shadow-md">
      {React.createElement(stat.icon, { className: "w-8 h-8 text-[#EFB036] " })}
    </div>
    <div className="text-3xl font-bold text-[#EFB036] mb-2">
      <AnimatedNumber value={stat.value} />
      {stat.value >= 1000 ? 'k' : ''}
    </div>
    <div className="text-[#F1EFEC] capitalize font-medium">{stat.label}</div>
  </div>
));

export default function StatsSection() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const stats = [
    {
      value: 451000,
      label: "skilled workers",
      icon: FaUsers,
    },
    {
      value: 12,
      label: "industry awards",
      icon: FaAward,
    },
    {
      value: 154000,
      label: "hours of training",
      icon: FaClock,
    },
    {
      value: 45,
      label: "global offices",
      icon: FaBuilding,
    },
    {
      value: 100,
      label: "successful partnerships",
      icon: FaHandshake,
    },
    {
      value: 5000,
      label: "user ratings",
      icon: FaStar,
    },
  ];

  if (isLoading) {
    return (
      <div className="relative bg-[#F5EEDC]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#F5EEDC]/50 to-[#F5EEDC]"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <LoadingSkeleton className="h-12 w-3/4 mx-auto mb-16" />
          <div className="grid grid-cols-6 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="text-center">
                <LoadingSkeleton className="h-16 w-16 mx-auto mb-4 rounded-full" />
                <LoadingSkeleton className="h-8 w-24 mx-auto mb-2" />
                <LoadingSkeleton className="h-4 w-32 mx-auto" />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-[#F5EEDC]" style={{ height: '50vh' }}>
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1529400971008-f566de0e6dfc?auto=format&fit=crop&w=2070&q=80')",
            backgroundAttachment: 'fixed',
          }}
        ></div>
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background"></div>
        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-[#EFB036] mb-10">
            Elevating Workforce Excellence Worldwide
          </h1>
          <div className="grid grid-cols-6 gap-8 justify-center">
            {stats.map((stat, index) => (
              <StatCard key={index} stat={stat} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
