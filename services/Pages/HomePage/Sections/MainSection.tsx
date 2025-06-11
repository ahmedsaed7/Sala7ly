// sections/MainSection.tsx
'use client';

import React, { useState, useEffect } from 'react';
import ImageSlider, { SlideData } from '@/components/layouts/Sidebar/ImageSlider';

const MainSection = React.memo(() => {
  const [loading, setLoading] = useState(true);
  const [slides, setSlides] = useState<SlideData[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSlides([
        {
          id: 1,
          image: 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606',
          title: 'Beautiful Nature',
          description: 'Explore the stunning landscapes of our world',
          alt: 'Landscape with mountains and lake'
        },
        {
          id: 2,
          image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b',
          title: 'Mountain Peaks',
          description: 'Where the earth touches the sky',
          alt: 'Mountain peaks with fog'
        },
        {
          id: 3,
          image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba',
          title: 'Starry Night',
          description: 'Witness the beauty of the night sky',
          alt: 'Starry night sky over mountains'
        }
      ]);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="w-full h-screen relative">
      <ImageSlider 
        slides={slides} 
        loading={loading}
        autoPlay={true}
        autoPlayInterval={5000}
        showDots={true}
        showArrows={true}
      />
    </section>
  );
});

MainSection.displayName = 'MainSection';
export default React.memo(MainSection);