
import { useLocation} from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button/Button";
import { motion } from "framer-motion";
import Link from "@/components/ui/Link/Link";
const NotFound = () => {
  const location = useLocation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#F5EEDC] to-[#F5EEDC]/80">
      <motion.div
        initial="hidden"
        animate={mounted ? "visible" : "hidden"}
        variants={containerVariants}
        className="max-w-3xl w-full px-4 py-12"
      >
        <div className="relative">
          {/* Background decorative elements */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1, rotate: 45 }}
            transition={{
              type: "spring",
              stiffness: 100,
              delay: 0.5
            }}
            className="absolute -top-20 -left-16 w-40 h-40 rounded-full bg-[#EFB036]/20 z-0"
          />
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              delay: 0.8
            }}
            className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full bg-[#4C7B8B]/10 z-0"
          />
          
          {/* Main content */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative z-10 border border-[#3B6790]/10">
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-block text-[#EFB036] font-extrabold text-7xl md:text-9xl">
                404
              </span>
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-[#23486A] text-3xl md:text-4xl font-bold mb-4">
              Page Not Found
            </motion.h1>
            
            <motion.div variants={itemVariants} className="h-1 w-20 bg-gradient-to-r from-[#EFB036] to-[#4C7B8B] mb-6" />
            
            <motion.p variants={itemVariants} className="text-[#3B6790] text-lg mb-8 max-w-lg">
              The page you are looking for might have been removed, had its name changed,
              or is temporarily unavailable.
            </motion.p>
            
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/">
                <Button className="bg-[#23486A] hover:bg-[#3B6790] text-white px-8 py-6 h-auto text-lg rounded-xl transition-all duration-300">
                  Return to Homepage
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
        
        {/* Animated elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ 
                x: Math.random() * window.innerWidth, 
                y: -20,
                opacity: 0.3 + Math.random() * 0.5,
                scale: 0.1 + Math.random() * 0.3
              }}
              animate={{ 
                y: window.innerHeight + 50,
                rotate: Math.random() * 360
              }}
              transition={{
                duration: 15 + Math.random() * 20,
                repeat: Infinity,
                delay: i * 2,
                ease: "linear"
              }}
              className={`absolute w-8 h-8 rounded-full bg-[${
                [
                  "#EFB036",
                  "#3B6790",
                  "#23486A",
                  "#4C7B8B"
                ][i % 4]
              }]/10`}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;