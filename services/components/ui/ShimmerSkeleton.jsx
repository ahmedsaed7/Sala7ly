import React from 'react';

/**
 * @typedef {Object} ShimmerSkeletonProps
 * @property {string} [className] - Additional CSS classes
 * @property {string|number} [width] - Width of the skeleton
 * @property {string|number} [height] - Height of the skeleton
 * @property {string} [borderRadius] - Border radius of the skeleton
 */

/**
 * A skeleton loader component with shimmer effect
 * @param {ShimmerSkeletonProps} props
 */
const ShimmerSkeleton = ({ 
  className = "", 
  width = "100%", 
  height = "100%", 
  borderRadius = "0.5rem" 
}) => {
  return (
    <div 
      className={`relative overflow-hidden bg-slate-200 ${className}`}
      style={{ 
        width, 
        height, 
        borderRadius 
      }}
    >
      <div className="shimmer-effect" />
      
      <style jsx>{`
        .shimmer-effect {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.4) 50%,
            rgba(255, 255, 255, 0) 100%
          );
          animation: shimmer 1.5s infinite;
          transform: translateX(-100%);
        }
        
        @keyframes shimmer {
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  );
};

export default ShimmerSkeleton;