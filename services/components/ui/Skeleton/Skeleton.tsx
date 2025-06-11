// components/Skeleton.tsx
import React from 'react';
import { cn } from '@/lib/utils';

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  variant?: 'default' | 'circle' | 'rounded';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  ({ className, variant = 'default', size = 'md', ...props }, ref) => {
    const baseStyles = 'animate-pulse bg-[#23486A]/20';
    
    const variants = {
      default: 'rounded',
      circle: 'rounded-full',
      rounded: 'rounded-lg'
    };

    const sizes = {
      sm: 'h-8 w-8',
      md: 'h-12 w-12',
      lg: 'h-16 w-16',
      xl: 'h-24 w-24'
    };

    return (
      <div
        ref={ref}
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    );
  }
);

Skeleton.displayName = 'Skeleton';

export const SkeletonCircle = ({
  size = '40px',
  className = '',
}: {
  size?: string;
  className?: string;
}) => (
  <div
    className={`animate-pulse bg-[#3B6790]/50 rounded-full ${className}`}
    style={{ width: size, height: size }}
  />
);