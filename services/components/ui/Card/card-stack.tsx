"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

interface Card {
  id: number;
  name: string;
  role: string;
  image: string;
  content: string;
  rating: number;
}

interface LoadingSkeletonProps {
  className?: string;
}

export function LoadingSkeleton({ className = "" }: LoadingSkeletonProps) {
  return <div className={`animate-pulse bg-gray-300 shimmer ${className}`}>&nbsp;</div>;
}

export const CardStack = ({
  testimonials,
  offset = 10,
  scaleFactor = 0.06,
  autoRotate = true,
  rotationInterval = 5000,
}: {
  testimonials: Card[];
  offset?: number;
  scaleFactor?: number;
  autoRotate?: boolean;
  rotationInterval?: number;
}) => {
  const [cards, setCards] = useState<Card[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    setTimeout(() => {
      setCards(testimonials);
      setIsLoading(false);
    }, 2000); // 2-second delay for simulation
  }, [testimonials]);

  useEffect(() => {
    if (!autoRotate || isLoading) return;

    const interval = setInterval(() => {
      setCards((prevCards) => {
        const newArray = [...prevCards];
        newArray.unshift(newArray.pop()!);
        return newArray;
      });
    }, rotationInterval);

    return () => clearInterval(interval);
  }, [autoRotate, rotationInterval, isLoading]);

  return (
    <motion.div
      className="relative w-full max-w-sm md:max-w-md lg:max-w-lg mx-auto h-[450px] overflow-visible"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      {isLoading ? (
       
        <div className="relative w-full h-full flex flex-col items-center justify-center gap-4">
          <LoadingSkeleton className="w-24 h-24 rounded-full" />
          <LoadingSkeleton className="w-40 h-6 rounded-md" />
          <LoadingSkeleton className="w-32 h-5 rounded-md" />
          <LoadingSkeleton className="w-64 h-12 rounded-md" />
          <LoadingSkeleton className="w-48 h-4 rounded-md" />
        </div>
      ) : (
      
        cards.map((card, index) => (
          <motion.div
            key={card.id}
            className="absolute w-full h-auto bg-[#F5EEDC] rounded-xl p-6 flex flex-col justify-between border border-[#EFB036] shadow-lg"
            style={{
              transformOrigin: "top center",
            }}
            animate={{
              top: index * -offset,
              scale: 1 - index * scaleFactor,
              zIndex: cards.length - index,
              opacity: index === 0 ? 1 : 0.8 - index * 0.2,
            }}
            whileHover={{
              scale: index === 0 ? 1.05 : undefined,
              boxShadow: index === 0 ? `0 10px 20px rgba(239, 176, 54, 0.2)` : undefined,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
          >
            {/* User Image */}
            <div className="flex justify-center">
              <div className="w-20 h-20 rounded-full overflow-hidden border border-[#EFB036] shadow-md">
                <img src={card.image} alt={card.name} className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Star Rating - Making sure stars are gold */}
            <div className="flex justify-center mt-3">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  className={`${i < card.rating ? "text-[#EFB036]" : "text-gray-300"} text-xl drop-shadow-sm`}
                />
              ))}
            </div>

            {/* Testimonial Text */}
            <p className="text-center text-gray-700 italic px-4 mt-4">
              &ldquo;{card.content}&rdquo;
            </p>

            {/* Person Name and Role */}
            <div className="text-center mt-4">
              <h3 className="text-lg font-semibold text-[#3B6790]">{card.name}</h3>
              <p className="text-sm text-gray-500">{card.role}</p>
            </div>
          </motion.div>
        ))
      )}
    </motion.div>
  );
};