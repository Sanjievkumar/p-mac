import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

import sealionLogo from '../assets/brands/sealion.png';
import maestrelliLogo from '../assets/brands/maestrelli.png';
import maxipressLogo from '../assets/brands/maxipress.png';
import kannegiesserLogo from '../assets/brands/kannegiesser.png';
import imesaLogo from '../assets/brands/imesa.png';

// Configuration for bubbles across depth layers
// Depth > 2: Foreground (large, blurred, fast parallax)
// Depth 1-2: Midground (sharp, main focus)
// Depth < 1: Background (small, heavy blur, slow parallax)
const BUBBLES = [
  // Foreground
  { logo: kannegiesserLogo, size: 280, top: '5%', left: '-5%', depth: 3, blur: 'blur-[8px]', opacity: 0.12, dur: 22 },
  { logo: sealionLogo, size: 320, top: '65%', left: '85%', depth: 3.5, blur: 'blur-[12px]', opacity: 0.10, dur: 28 },
  
  // Midground
  { logo: maestrelliLogo, size: 150, top: '20%', left: '80%', depth: 1.5, blur: 'blur-none', opacity: 0.25, dur: 35 },
  { logo: maxipressLogo, size: 170, top: '65%', left: '15%', depth: 1.2, blur: 'blur-[1px]', opacity: 0.2, dur: 32 },
  { logo: imesaLogo, size: 130, top: '30%', left: '10%', depth: 1.8, blur: 'blur-none', opacity: 0.28, dur: 29 },
  { logo: kannegiesserLogo, size: 160, top: '80%', left: '45%', depth: 1.4, blur: 'blur-[2px]', opacity: 0.22, dur: 34 },

  // Background
  { logo: sealionLogo, size: 90, top: '15%', left: '40%', depth: 0.5, blur: 'blur-[6px]', opacity: 0.08, dur: 40 },
  { logo: maxipressLogo, size: 100, top: '50%', left: '75%', depth: 0.7, blur: 'blur-[5px]', opacity: 0.09, dur: 38 },
  { logo: imesaLogo, size: 80, top: '40%', left: '25%', depth: 0.4, blur: 'blur-[8px]', opacity: 0.05, dur: 45 },
];

export default function BrandEcosystemBackground() {
  const containerRef = useRef(null);
  
  // Mouse position values for parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs to make parallax feel natural and liquid
  const smoothX = useSpring(mouseX, { damping: 50, stiffness: 300, mass: 0.5 });
  const smoothY = useSpring(mouseY, { damping: 50, stiffness: 300, mass: 0.5 });

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    // Normalize -1 to 1 based on center of container
    const x = (e.clientX - left - width / 2) / (width / 2);
    const y = (e.clientY - top - height / 2) / (height / 2);
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    // Gently return to center when mouse leaves
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="absolute inset-0 z-0 overflow-hidden bg-[#001F3F]"
    >
      {/* Ambient Lighting / Depth Atmosphere */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#E31E24]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#0B4F8A]/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-[40%] left-[-10%] w-[400px] h-[400px] bg-white/[0.02] rounded-full blur-[80px] pointer-events-none" />

      {/* Desktop Bubbles */}
      {BUBBLES.map((bubble, i) => {
        // Parallax depth multiplier: objects closer to camera (high depth) move more relative to mouse
        const xOffset = useTransform(smoothX, [-1, 1], [-25 * bubble.depth, 25 * bubble.depth]);
        const yOffset = useTransform(smoothY, [-1, 1], [-25 * bubble.depth, 25 * bubble.depth]);

        return (
          <motion.div
            key={`desktop-${i}`}
            className={`absolute hidden md:flex items-center justify-center ${bubble.blur}`}
            style={{ 
              top: bubble.top, 
              left: bubble.left, 
              width: bubble.size, 
              height: bubble.size,
              x: xOffset,
              y: yOffset
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: bubble.opacity }}
            transition={{ duration: 1.5, delay: i * 0.1 }}
          >
            {/* Soft Organic Glassmorphism Bubble Shape */}
            <motion.div
              className="absolute inset-0 bg-white/[0.015] border border-white/[0.04] backdrop-blur-[4px] shadow-[0_8px_32px_rgba(0,0,0,0.15)]"
              animate={{
                borderRadius: [
                  "40% 60% 70% 30% / 40% 50% 60% 50%",
                  "60% 40% 30% 70% / 60% 30% 70% 40%",
                  "50% 50% 40% 60% / 30% 60% 40% 70%",
                  "40% 60% 70% 30% / 40% 50% 60% 50%"
                ],
                rotate: [0, 8, -5, 0],
                y: [0, -15, 0]
              }}
              transition={{
                duration: bubble.dur,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            {/* The Brand Logo */}
            <motion.img 
              src={bubble.logo} 
              alt="Brand Logo" 
              className="relative w-[55%] h-[55%] object-contain filter grayscale invert mix-blend-screen pointer-events-none z-10 opacity-75"
              animate={{
                y: [0, -8, 0],
                rotate: [0, -3, 3, 0]
              }}
              transition={{
                duration: bubble.dur * 0.85,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        );
      })}

      {/* Mobile Bubbles (Reduced motion, reduced count for performance/legibility) */}
      {BUBBLES.slice(2, 7).map((bubble, i) => (
        <motion.div
          key={`mobile-${i}`}
          className={`absolute flex md:hidden items-center justify-center`}
          style={{ 
            top: bubble.top, 
            left: bubble.left, 
            width: bubble.size * 0.6, // Smaller on mobile
            height: bubble.size * 0.6,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: bubble.opacity * 0.8 }} // Softer on mobile
          transition={{ duration: 1.5, delay: i * 0.1 }}
        >
          {/* Simpler shape animation for mobile */}
          <motion.div
            className="absolute inset-0 bg-white/[0.02] border border-white/[0.04] backdrop-blur-[2px] rounded-[45%_55%_65%_35%]"
            animate={{
              y: [0, -10, 0]
            }}
            transition={{
              duration: bubble.dur,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <img 
            src={bubble.logo} 
            alt="Brand Logo" 
            className="relative w-[50%] h-[50%] object-contain filter grayscale invert opacity-70 mix-blend-screen pointer-events-none z-10"
          />
        </motion.div>
      ))}

      {/* Fade overlay so foreground text remains perfectly readable */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#001F3F]/30 to-[#001F3F] pointer-events-none" />
    </div>
  );
}
