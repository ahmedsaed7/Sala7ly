"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CardStack } from "@/components/ui/Card/card-stack";

interface LoadingSkeletonProps {
  className?: string;
}

export function LoadingSkeleton({ className = "" }: LoadingSkeletonProps) {
  return <div className={`animate-pulse bg-gray-300 shimmer ${className}`}>&nbsp;</div>;
}

const allTestimonials = [
  {
    id: 1,
    name: "Sarah Thompson ✨",
    role: "CEO, Innovate Tech",
    image: "/images/1.jpg",
    content:
      "🚀 Amazing experience! The service was excellent, and the team was very cooperative. They completed the project ahead of schedule!",
    rating: 2,
  },
  {
    id: 2,
    name: "Michael Chen 💡",
    role: "Marketing Director",
    image: "/images/2.jpg",
    content:
      "🎯 Exceptional service! The workers were friendly and highly professional. The work was completed efficiently!",
    rating: 5,
  },
  {
    id: 3,
    name: "Emma Davis 🤝",
    role: "Product Manager",
    image: "/images/3.jpg",
    content:
      "🔥 Unmatched quality! The team was highly responsive and meticulous in their work. Highly recommended!",
    rating: 3.5,
  },
  {
    id: 4,
    name: "James Rodriguez ⚡",
    role: "CTO, TechSolutions",
    image: "/images/4.jpg",
    content:
      "💻 The project was completed ahead of schedule! The service was excellent, but the execution speed could be slightly improved.",
    rating: 4,
  },
];

export default function TestimonialsSection() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); 
  }, []);

  return (
    <section className="py-16 bg-[#23486A]">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-4 text-[#EFB036]"
        >
          What Our Clients Say
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-center text-[#e7dcc1] mb-12 max-w-2xl mx-auto"
        >
          Don&apos;t just take our word for it. Here&apos;s what our clients have to say.
        </motion.p>

        {isLoading ? (
          
          <div className="flex flex-col items-center gap-4">
            <LoadingSkeleton className="w-64 h-8 rounded-md" />
            <LoadingSkeleton className="w-48 h-6 rounded-md" />
            <LoadingSkeleton className="w-full max-w-md h-64 rounded-lg" />
          </div>
        ) : (
          <CardStack testimonials={allTestimonials} offset={15} scaleFactor={0.05} />
        )}
      </div>
    </section>
  );
}