'use client';

import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { ArrowRight, Bike } from 'lucide-react';
import { useRouter } from 'next/navigation';

const Welcome = () => {
  const router = useRouter();
  const [isExiting, setIsExiting] = useState(false);

  const handleStart = () => {
    setIsExiting(true);
    setTimeout(() => {
      router.push('/register');
    }, 600); // Wait for exit animation
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, 
        delayChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      y: -50,
      transition: { duration: 0.5, ease: "easeInOut" }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: -50 }, // Coming from top
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 50, damping: 15 }
    },
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-emerald-50 via-white to-emerald-100 flex flex-col items-center justify-center relative overflow-hidden">
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isExiting ? "exit" : "visible"}
        className="z-10 px-6 relative w-full max-w-4xl"
      >
        <motion.div 
            className="bg-[#00a63a] rounded-3xl p-12 md:p-16 text-center shadow-2xl relative overflow-hidden"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.5 }}
        >
            {/* Inner decorative circle */}
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl opacity-50" />
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-yellow-400/20 rounded-full blur-3xl opacity-50" />

            <motion.div
                variants={itemVariants}
                className="mb-10 inline-block relative z-10"
            >
                <motion.div
                animate={{ y: [0, -15, 0] }} // Floating animation
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="p-8 rounded-full bg-white/10 border border-white/20 backdrop-blur-md shadow-lg"
                >
                <Bike className="w-20 h-20 text-yellow-300 drop-shadow-md" />
                </motion.div>
            </motion.div>

            <motion.h1 
                variants={itemVariants}
                className="text-5xl md:text-7xl font-black text-white mb-6 drop-shadow-sm font-serif tracking-tight relative z-10"
            >
            CrownCart
            </motion.h1>
            
            <motion.p 
                variants={itemVariants}
                className="text-emerald-50 text-lg md:text-2xl mb-14 max-w-2xl mx-auto leading-relaxed font-light relative z-10"
            >
            Daily essentials, delivered with <span className="text-yellow-300 font-bold">royal elegance</span>.
            </motion.p>

            <motion.div variants={itemVariants} className="relative z-10">
                <motion.button
                onClick={handleStart}
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255,255,255,0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-10 py-5 bg-white text-[#00a63a] font-bold rounded-full text-xl shadow-xl hover:shadow-white/20 transition-all flex items-center gap-4 mx-auto overflow-hidden"
                >
                <span className="relative z-10">Get Started</span>
                <ArrowRight className="w-6 h-6 relative z-10 group-hover:translate-x-1 transition-transform" />
                </motion.button>
            </motion.div>
        </motion.div>
      </motion.div>

      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-6 text-[#00a63a]/60 text-sm tracking-wider uppercase font-semibold"
      >
        © 2025 CrownCart
      </motion.footer>
    </div>
  );
};

export default Welcome;
