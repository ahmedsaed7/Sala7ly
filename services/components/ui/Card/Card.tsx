"use client";

import React, { useState, useEffect } from 'react';
import Link from '../Link/Link';
import { Button } from '../Button/Button';
import CartButton from '../Button/CartButton';
import ShimmerSkeleton from '@/components/ui/ShimmerSkeleton';

const WorkerCard = ({
  name = "Christopher Anderson",
  title = "Professional House Cleaner",
  rating = 4.7,
  imageUrl = "/lovable-uploads/...",
  facebook = "https://facebook.com",
  whatsapp = "1234567890",
  phone = "+1234567890",
  isLoading = false,
  onAboutClick = () => { }
}) => {

  const [isCardHovered, setIsCardHovered] = useState(false);
  const [gradientPosition, setGradientPosition] = useState(0);
  const [isWhatsappHovered, setIsWhatsappHovered] = useState(false);
  const [isFacebookHovered, setIsFacebookHovered] = useState(false);
  const [isPhoneHovered, setIsPhoneHovered] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [isImageLoading, setIsImageLoading] = useState(true);

  // Animate gradient border
  useEffect(() => {
    const interval = setInterval(() => {
      setGradientPosition(prev => (prev + 1) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {[...Array(5)].map((_, i) => (
          <span key={i} style={{ fontSize: '1.5rem' }}>
            {i < fullStars ? (
              <span style={{ color: '#EFB036' }}>★</span>
            ) : i === fullStars && hasHalfStar ? (
              <span style={{ color: '#EFB036' }}>★</span>
            ) : (
              <span style={{ color: 'rgba(239, 176, 54, 0.3)' }}>★</span>
            )}
          </span>
        ))}
        <span style={{ marginLeft: '0.5rem', color: '#EFB036' }}>
          {rating}
        </span>
      </div>
    );
  };

  // Container style with gradient border effect
  const containerStyle = {
    position: 'relative',
    width: 'fit-content',
    padding: isCardHovered ? '3px' : '0px',
    borderRadius: '1.6rem',
    transition: 'all 0.3s ease',
    transform: isCardHovered ? 'translateY(-15px) scale(1.03)' : 'translateY(0) scale(1)',
    zIndex: isCardHovered ? 10 : 1,
  };

  // Gradient border style
  const gradientBorderStyle = {
    position: 'absolute',
    inset: 0,
    borderRadius: '1.6rem',
    padding: '3px',
    backgroundImage: isCardHovered
      ? `linear-gradient(${gradientPosition}deg, 
         #23486A, #3B6790, #4C7B8B, #EFB036, 
         #23486A, #3B6790, #4C7B8B, #EFB036)`
      : 'none',
    backgroundSize: '400% 400%',
    backgroundPosition: '0% 50%',
    animation: isCardHovered ? 'gradient 8s ease infinite' : 'none',
    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
    WebkitMaskComposite: 'xor',
    maskComposite: 'exclude',
    opacity: isCardHovered ? 1 : 0,
    transition: 'all 0.3s ease',
    zIndex: -1
  };

  // Individual icon animation styles
  const iconStyle = (isHovered: boolean, bgColor: string) => ({
    width: '2.5rem',
    height: '2.5rem',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.3s ease',
    transform: isHovered ? 'translateY(-8px) scale(1.1)' : 'translateY(0) scale(1)',
    backgroundColor: bgColor,
    boxShadow: isHovered
      ? `0 10px 15px -3px ${bgColor}40, 0 4px 6px -2px ${bgColor}20`
      : 'none'
  });

  // Handle image error
  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div style={containerStyle} className="w-full max-w-xs mx-auto mt-6"
      onMouseEnter={() => setIsCardHovered(true)}
      onMouseLeave={() => setIsCardHovered(false)}
    >
      {/* Gradient Border */}
      <div style={gradientBorderStyle}></div>

      {/* Global styles for gradient animation */}
      <style jsx global>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>

      {/* Card Content */}
      <div style={{
        width: '16rem',
        borderRadius: '1.5rem',
        boxShadow: isCardHovered
          ? '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 15px rgba(0, 0, 0, 0.1)'
          : '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        overflow: 'hidden',
        backgroundColor: '#F5EEDC',
        position: 'relative',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        transform: isCardHovered ? 'scale(1.02)' : 'scale(1)'
      }}>
        {/* Shine effect */}
        {isCardHovered && (
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(120deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0) 100%)',
            opacity: 0.3,
            zIndex: 1,
            pointerEvents: 'none'
          }} />
        )}

        {/* Profile Image or Skeleton */}
        <div style={{
          position: 'relative',
          width: '100%',
          height: '12rem',
          overflow: 'hidden',
          transform: isCardHovered ? 'scale(1.05)' : 'scale(1)',
          transition: 'transform 0.5s ease'
        }}>
          {isLoading ? (
            <ShimmerSkeleton height="12rem" borderRadius="0" />
          ) : (
            <div className="w-full h-full relative overflow-hidden">
              {isImageLoading && (
                <ShimmerSkeleton height="12rem" borderRadius="0" className="absolute inset-0" />
              )}
              <img
                src={imageError ? '/images/placeholder.jpg' : imageUrl}
                alt={name}
                className={`w-full h-full object-cover transition-all duration-500 ${isImageLoading ? 'opacity-0' : 'opacity-100'}`}
                style={{
                  objectPosition: 'top',
                  transform: isCardHovered ? 'scale(1.1)' : 'scale(1)'
                }}
                onError={handleImageError}
                onLoad={() => setIsImageLoading(false)}
              />
            </div>
          )}
        </div>

        {/* Content */}
        <div style={{
          padding: '1rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.75rem',
          backgroundColor: '#F5EEDC'
        }}>
          {/* Name */}
          {isLoading ? (
            <ShimmerSkeleton width="60%" height="1.5rem" borderRadius="0.25rem" />
          ) : (
            <h2 style={{
              fontSize: '1.25rem',
              fontWeight: 'bold',
              color: '#23486A'
            }}>
              {name}
            </h2>
          )}

          {/* Title */}
          {isLoading ? (
            <ShimmerSkeleton width="80%" height="1rem" borderRadius="0.25rem" />
          ) : (
            <p style={{
              fontSize: '0.875rem',
              color: '#3B6790'
            }}>
              {title}
            </p>
          )}

          {/* Rating */}
          {isLoading ? (
            <ShimmerSkeleton width="40%" height="1.5rem" borderRadius="0.25rem" />
          ) : (
            <div>
              {renderStars(rating)}
            </div>
          )}

          {/* Social Links */}
          {isLoading ? (
            <div className="flex gap-3 mt-2">
              {[1, 2, 3].map((_, index) => (
                <ShimmerSkeleton key={index} width="2.5rem" height="2.5rem" borderRadius="50%" />
              ))}
            </div>
          ) : (
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '0.75rem',
              marginTop: '0.5rem'
            }}>
              {/* WhatsApp */}
              <Link
                href={`https://wa.me/${whatsapp}`}
                style={iconStyle(isWhatsappHovered, '#25D366')}
                onMouseEnter={() => setIsWhatsappHovered(true)}
                onMouseLeave={() => setIsWhatsappHovered(false)}
                aria-label="WhatsApp Contact"
              >
                <svg className="text-white" style={{ width: '1.25rem', height: '1.25rem' }} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                </svg>
              </Link>

              {/* Facebook */}
              <Link
                href={facebook}
                style={iconStyle(isFacebookHovered, '#1877F2')}
                onMouseEnter={() => setIsFacebookHovered(true)}
                onMouseLeave={() => setIsFacebookHovered(false)}
                aria-label="Facebook Profile"
              >
                <svg className="text-white" style={{ width: '1.25rem', height: '1.25rem' }} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </Link>

              {/* Phone */}
              <Link
                href={`tel:${phone}`}
                style={iconStyle(isPhoneHovered, '#EFB036')}
                onMouseEnter={() => setIsPhoneHovered(true)}
                onMouseLeave={() => setIsPhoneHovered(false)}
                aria-label="Phone Call"
              >
                <svg className="text-white" style={{ width: '1.25rem', height: '1.25rem' }} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 10.999h2c0-4.5-3.5-8-8-8v2c3.308 0 6 2.692 6 6zm-6-4v-2c-4.5 0-8 3.5-8 8h2c0-3.308 2.692-6 6-6zm-6 7h-3c0 7 5.5 12 12 12v-3c-5 0-9-4-9-9zm13.1 0h-2.1c0 3.9-3.1 7-7 7v2.1c5 0 9.1-4 9.1-9.1z" />
                </svg>
              </Link>
            </div>
          )}

          {/* Buttons */}
          {isLoading ? (
            <div className="flex justify-between w-full p-4 gap-3">
              <ShimmerSkeleton width="67%" height="50px" borderRadius="0.75rem" />
              <ShimmerSkeleton width="30%" height="50px" borderRadius="0.75rem" />
            </div>
          ) : (
            <div className="flex justify-between w-full p-4 gap-3">
              <Button
                onClick={onAboutClick} 
                className="bg-[#23486A] hover:bg-[#3B6790] text-[#F5EEDC] flex-[2] h-[50px] text-lg font-extrabold px-4 rounded-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg active:scale-95 shadow-md"
              >
                About
              </Button>

              <CartButton
                onClick={() => window.location.href = '/worker-details'}
                className="hover:shadow-lg shadow-md"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default React.memo(WorkerCard);