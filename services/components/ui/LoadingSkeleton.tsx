'use client';

import React from 'react';
import { cn } from '@/lib/utils/formatting';

interface LoadingSkeletonProps {
  className?: string;
  width?: string | number;
  height?: string | number;
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full';
  animate?: boolean;
}

export function LoadingSkeleton({
  className = "",
  width,
  height,
  rounded = 'md',
  animate = true,
}: LoadingSkeletonProps) {
  const roundedClasses = {
    'none': '',
    'sm': 'rounded-sm',
    'md': 'rounded-md',
    'lg': 'rounded-lg',
    'full': 'rounded-full'
  };

  return (
    <div 
      className={cn(
        "relative overflow-hidden bg-[#F5EEDC]/30", 
        roundedClasses[rounded],
        animate ? "animate-pulse" : "",
        className
      )}
      style={{
        width: width,
        height: height,
      }}
    >
      {/* Shimmer effect overlay */}
      {animate && (
        <div className="absolute inset-0 overflow-hidden">
          <div className="shimmer-effect absolute inset-y-0"></div>
        </div>
      )}
    </div>
  );
}

export function WorkerCardSkeleton() {
  return (
    <div className="w-full max-w-sm rounded-lg overflow-hidden shadow-md border border-[#F5EEDC]/20 bg-white p-4">
      {/* Image skeleton */}
      <div className="flex justify-center pb-4">
        <LoadingSkeleton 
          className="bg-[#4C7B8B]/20" 
          width={120} 
          height={120} 
          rounded="full"
        />
      </div>
      
      {/* Content skeleton */}
      <div className="space-y-4">
        {/* Name skeleton */}
        <LoadingSkeleton className="bg-[#3B6790]/20" width="70%" height={20} />
        
        {/* Title skeleton */}
        <LoadingSkeleton className="bg-[#23486A]/20" width="50%" height={16} />
        
        {/* Rating skeleton */}
        <div className="flex items-center space-x-2">
          <LoadingSkeleton className="bg-[#EFB036]/20" width={100} height={16} />
          <LoadingSkeleton className="bg-[#EFB036]/20" width={24} height={24} rounded="full" />
        </div>
        
        {/* Divider */}
        <div className="border-t border-[#F5EEDC] my-4"></div>
        
        {/* Contact buttons skeleton */}
        <div className="flex justify-between">
          <LoadingSkeleton className="bg-[#4C7B8B]/20" width="45%" height={36} />
          <LoadingSkeleton className="bg-[#3B6790]/20" width="45%" height={36} />
        </div>
        
        {/* Add to cart button skeleton */}
        <LoadingSkeleton className="bg-[#EFB036]/20 mt-4" width="100%" height={44} />
      </div>
    </div>
  );
}

// Add global CSS for shimmer effect
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.innerHTML = `
    @keyframes shimmer {
      0% {
        transform: translateX(-100%);
      }
      100% {
        transform: translateX(100%);
      }
    }
    
    .shimmer-effect {
      width: 50%;
      height: 100%;
      background: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 0.5) 50%,
        rgba(255, 255, 255, 0) 100%
      );
      animation: shimmer 1.5s infinite;
    }
  `;
  document.head.appendChild(style);
}