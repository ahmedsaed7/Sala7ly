"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Skeleton } from '../Skeleton/Skeleton';

interface CustomImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  quality?: number;
  loading?: 'lazy' | 'eager';
  objectFit?: 'contain' | 'cover' | 'fill';
  onError?: () => void;
  fallbackSrc?: string;
}

export const CustomImage: React.FC<CustomImageProps> = ({
  src,
  alt,
  width = 500,
  height = 500,
  className = '',
  priority = false,
  quality = 75,
  loading = 'lazy',
  objectFit = 'cover',
  onError,
  fallbackSrc,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(src);

  const handleError = () => {
    if (fallbackSrc && !error) {
      setCurrentSrc(fallbackSrc);
      setError(false);
    } else {
      setError(true);
      onError?.();
    }
  };

  if (error) {
    return (
      <div className={`relative ${className}`} style={{ width, height }}>
        <div className="absolute inset-0 flex items-center justify-center bg-[#EFB036]/20 rounded-lg">
          <span className="text-[#EFB036] font-medium">Image not available</span>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`} style={{ width, height }}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-full h-full">
            <Skeleton
              variant="rounded"
              size="xl"
              className="w-full h-full bg-gradient-to-br from-[#EFB036]/30 to-[#EFB036]/40 animate-pulse"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <div className="w-12 h-12 border-4 border-[#EFB036]/40 rounded-full"></div>
                <div className="absolute top-0 left-0 w-12 h-12 border-4 border-[#EFB036] border-t-transparent rounded-full animate-spin"></div>
              </div>
            </div>
          </div>
        </div>
      )}
      <Image
        src={currentSrc}
        alt={alt}
        width={width}
        height={height}
        className={`
          transition-all duration-500 ease-in-out
          ${isLoading ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}
          ${objectFit === 'contain' ? 'object-contain' : 'object-cover'}
        `}
        priority={priority}
        quality={quality}
        loading={loading}
        onLoadingComplete={() => {
          setIsLoading(false);
        }}
        onError={handleError}
      />
    </div>
  );
}; 