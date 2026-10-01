import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'framer-motion';

import sealionLogo from '../assets/brands/sealion-text.png';
import maestrelliLogo from '../assets/brands/maestrelli-text.png';
import maxipressLogo from '../assets/brands/maxipress-text.png';
import kannegiesserLogo from '../assets/brands/kannegiesser.png'; // No text version available, filter handles it
import imesaLogo from '../assets/brands/imesa-text.png';

const BUBBLES = [
  // --- FOREGROUND (Sharp, Highest Opacity, Large Parallax) ---
  { logo: kannegiesserLogo, size: 280, top: '10%', left: '3%', depth: 3, logoOpacity: 'opacity-90', blur: 'blur-none', dur: 25, driftX: 30, driftY: -40, rot: 4, glass: 'bg-gradient-to-br from-white/[0.1] to-white/[0.01] border-white/[0.15] shadow-[inset_0_1px_2px_rgba(255,255,255,0.2),_0_20px_40px_rgba(0,0,0,0.4)]' },
  { logo: sealionLogo, size: 300, top: '65%', left: '78%', depth: 3.5, logoOpacity: 'opacity-[0.85]', blur: 'blur-none', dur: 28, driftX: -35, driftY: 25, rot: -5, glass: 'bg-gradient-to-br from-white/[0.1] to-white/[0.01] border-white/[0.15] shadow-[inset_0_1px_2px_rgba(255,255,255,0.2),_0_20px_40px_rgba(0,0,0,0.4)]' },
  
  // --- MIDGROUND (Medium Sharpness, Medium Opacity, Gentle Parallax) ---
  { logo: maestrelliLogo, size: 160, top: '25%', left: '75%', depth: 1.8, logoOpacity: 'opacity-60', blur: 'blur-[1px]', dur: 32, driftX: 20, driftY: 20, rot: 3, glass: 'bg-gradient-to-br from-white/[0.05] to-transparent border-white/[0.08] shadow-[0_10px_30px_rgba(0,0,0,0.2)]' },
  { logo: maxipressLogo, size: 190, top: '75%', left: '18%', depth: 1.5, logoOpacity: 'opacity-70', blur: 'blur-[1px]', dur: 35, driftX: -25, driftY: -25, rot: -4, glass: 'bg-gradient-to-br from-white/[0.06] to-transparent border-white/[0.08] shadow-[0_10px_30px_rgba(0,0,0,0.2)]' },
  { logo: imesaLogo, size: 140, top: '45%', left: '85%', depth: 1.2, logoOpacity: 'opacity-50', blur: 'blur-[2px]', dur: 30, driftX: 15, driftY: -15, rot: 5, glass: 'bg-gradient-to-br from-white/[0.04] to-transparent border-white/[0.06] shadow-[0_10px_30px_rgba(0,0,0,0.15)]' },
  { logo: kannegiesserLogo, size: 170, top: '15%', left: '45%', depth: 1.4, logoOpacity: 'opacity-55', blur: 'blur-[1px]', dur: 38, driftX: 20, driftY: 15, rot: -3, glass: 'bg-gradient-to-br from-white/[0.05] to-transparent border-white/[0.07] shadow-[0_10px_30px_rgba(0,0,0,0.15)]' },
  { logo: sealionLogo, size: 150, top: '85%', left: '55%', depth: 1.6, logoOpacity: 'opacity-60', blur: 'blur-[1px]', dur: 34, driftX: -15, driftY: -20, rot: 2, glass: 'bg-gradient-to-br from-white/[0.05] to-transparent border-white/[0.07] shadow-[0_10px_30px_rgba(0,0,0,0.15)]' },

  // --- BACKGROUND (Large, Heavy Blur, Lowest Opacity, Minimal Parallax) ---
  { logo: maestrelliLogo, size: 350, top: '40%', left: '-5%', depth: 0.4, logoOpacity: 'opacity-20', blur: 'blur-[12px]', dur: 45, driftX: 10, driftY: 10, rot: 2, glass: 'bg-white/[0.01] border-white/[0.02]' },
  { logo: maxipressLogo, size: 400, top: '5%', left: '60%', depth: 0.3, logoOpacity: 'opacity-15', blur: 'blur-[16px]', dur: 50, driftX: -10, driftY: 15, rot: -2, glass: 'bg-white/[0.01] border-white/[0.02]' },
  { logo: imesaLogo, size: 300, top: '60%', left: '40%', depth: 0.5, logoOpacity: 'opacity-[0.18]', blur: 'blur-[10px]', dur: 42, driftX: 15, driftY: -10, rot: 3, glass: 'bg-white/[0.01] border-white/[0.02]' },
];

export default function BrandEcosystemBackground() {
  const containerRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Parallax Setup
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { damping: 50, stiffness: 200, mass: 1 });
  const smoothY = useSpring(mouseY, { damping: 50, stiffness: 200, mass: 1 });

  const handleMouseMove = (e) => {
    if (prefersReducedMotion || isMobile || !containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / (width / 2);
    const y = (e.clientY - top - height / 2) / (height / 2);
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Determine which bubbles to render based on screen size
  const activeBubbles = isMobile 
    ? BUBBLES.filter((_, i) => i === 0 || i === 1 || i === 2 || i === 3 || i === 7 || i === 8) // Select a balanced subset for mobile
    : BUBBLES;

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="absolute inset-0 z-0 overflow-hidden bg-[#050505]"
    >
      {/* 1. Atmospheric Lighting Layers */}
      {/* Primary Brand Red Glow */}
      <div className="absolute top-[10%] left-[20%] w-[800px] h-[600px] bg-[#E31E24]/[0.04] rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
      {/* Cool Neutral Haze */}
      <div className="absolute bottom-[-10%] right-[10%] w-[900px] h-[700px] bg-[#ffffff]/[0.02] rounded-full blur-[140px] pointer-events-none mix-blend-screen" />
      {/* Center Depth Haze */}
      <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-slate-800/[0.1] rounded-full blur-[100px] pointer-events-none" />

      {/* 2. Organic Bubble Ecosystem */}
      {activeBubbles.map((bubble, i) => {
        // Calculate parallax
        const xOffset = useTransform(smoothX, [-1, 1], [-25 * bubble.depth, 25 * bubble.depth]);
        const yOffset = useTransform(smoothY, [-1, 1], [-25 * bubble.depth, 25 * bubble.depth]);

        const animationProps = prefersReducedMotion ? {} : {
          x: [0, bubble.driftX, 0],
          y: [0, bubble.driftY, 0],
          rotate: [0, bubble.rot, -bubble.rot, 0],
          scale: [1, 1.02, 0.98, 1]
        };

        const shapeAnimationProps = prefersReducedMotion ? {} : {
          borderRadius: [
            "40% 60% 70% 30% / 40% 50% 60% 50%",
            "60% 40% 30% 70% / 60% 30% 70% 40%",
            "50% 50% 40% 60% / 30% 60% 40% 70%",
            "40% 60% 70% 30% / 40% 50% 60% 50%"
          ]
        };

        // Scale down slightly on mobile
        const actualSize = isMobile ? bubble.size * 0.7 : bubble.size;

        return (
          <motion.div
            key={i}
            className={`absolute flex items-center justify-center ${bubble.blur} will-change-transform`}
            style={{ 
              top: bubble.top, 
              left: bubble.left, 
              width: actualSize, 
              height: actualSize,
              x: isMobile ? 0 : xOffset,
              y: isMobile ? 0 : yOffset
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: i * 0.1 }}
          >
            {/* Outer Glow for prominent bubbles */}
            {bubble.depth > 2 && (
              <div className="absolute inset-[-10%] rounded-full bg-white/[0.02] blur-[20px] pointer-events-none" />
            )}

            {/* The Glass Bubble Body */}
            <motion.div
              className={`absolute inset-0 backdrop-blur-[6px] border ${bubble.glass} will-change-transform`}
              style={{ borderRadius: "40% 60% 70% 30% / 40% 50% 60% 50%" }}
              animate={shapeAnimationProps}
              transition={{
                duration: bubble.dur,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            {/* Inner Atmospheric Highlight */}
            <motion.div 
              className="absolute top-[10%] left-[20%] w-[40%] h-[30%] rounded-[50%] bg-white/[0.05] blur-[10px] mix-blend-overlay pointer-events-none will-change-transform"
              animate={shapeAnimationProps}
              transition={{
                duration: bubble.dur,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            {/* The Floating Logo Wrapper */}
            <motion.div
              className="relative w-[65%] h-[65%] flex items-center justify-center will-change-transform"
              animate={animationProps}
              transition={{
                duration: bubble.dur * 1.1,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {/* Logo with Contrast Magic Filter for white backgrounds to pure white text */}
              <img 
                src={bubble.logo} 
                alt="Brand Logo" 
                className={`w-full h-full object-contain filter grayscale contrast-[100] invert mix-blend-screen pointer-events-none z-10 ${bubble.logoOpacity}`}
              />
            </motion.div>
          </motion.div>
        );
      })}

      {/* 3. Text Protection Layer (Gradient overlay ensuring hero text remains absolutely readable) */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/30 pointer-events-none z-20" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/40 via-transparent to-[#050505]/40 pointer-events-none z-20" />
    </div>
  );
}
