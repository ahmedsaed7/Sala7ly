// components/ImageSlider/SliderSkeleton.tsx
'use client';

import React from 'react';

const SliderSkeleton = React.memo(() => {
  return (
    <div className="w-full h-full rounded-lg overflow-hidden bg-gray-200 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
      <div className="absolute bottom-0 left-0 right-0 p-8">
        <div className="h-8 w-2/3 bg-gray-300 rounded mb-4" />
        <div className="h-4 w-full bg-gray-300 rounded mb-2" />
        <div className="h-4 w-4/5 bg-gray-300 rounded" />
      </div>
    </div>
  );
});

SliderSkeleton.displayName = 'SliderSkeleton';
export default SliderSkeleton;