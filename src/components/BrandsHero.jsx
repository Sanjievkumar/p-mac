import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'framer-motion';

import sealionLogo from '../assets/brands/sealion-text.png';
import maestrelliLogo from '../assets/brands/maestrelli-text.png';
import maxipressLogo from '../assets/brands/maxipress-text.png';
import kannegiesserLogo from '../assets/brands/kannegiesser.png'; 
import imesaLogo from '../assets/brands/imesa-text.png';

// Exactly 5 Unique Partner Brands
// Using perfect circles ("premium translucent technology nodes")
const BUBBLES = [
  { id: 'maestrelli', logo: maestrelliLogo, size: 180, top: '15%', left: '15%', depth: 2.0, dur: 18, rot: 0, driftX: -10, driftY: 15 }, // Upper-Left
  { id: 'kannegiesser', logo: kannegiesserLogo, size: 160, top: '18%', left: '75%', depth: 1.5, dur: 22, rot: 0, driftX: 10, driftY: -10 }, // Upper-Right
  { id: 'imesa', logo: imesaLogo, size: 140, top: '48%', left: '85%', depth: 0.8, dur: 25, rot: 0, driftX: -8, driftY: -8 }, // Right-Middle
  { id: 'sealion', logo: sealionLogo, size: 170, top: '75%', left: '18%', depth: 1.8, dur: 20, rot: 0, driftX: 12, driftY: -12 }, // Lower-Left
  { id: 'maxipress', logo: maxipressLogo, size: 200, top: '78%', left: '70%', depth: 2.5, dur: 16, rot: 0, driftX: -15, driftY: 15 }, // Lower-Right
];

export default function BrandsHero() {
  const containerRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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
  
  const getMobilePos = (index) => {
    const positions = [
      { top: '12%', left: '15%', size: 100 }, // TL
      { top: '10%', left: '72%', size: 90 }, // TR
      { top: '45%', left: '85%', size: 80 }, // RM
      { top: '85%', left: '18%', size: 100 }, // BL
      { top: '82%', left: '70%', size: 110 }, // BR
    ];
    return positions[index];
  };

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { mouseX.set(0); mouseY.set(0); }}
      className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#0A1222]" // Lighter premium navy background
    >
      {/* 1. Atmospheric Background & Minimal Grid */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A] via-[#0A1222] to-[#0B152A]" />
        
        {/* Extremely subtle grid texture */}
        <div 
          className="absolute inset-0 opacity-[0.008]"
          style={{
            backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />

        {/* Subtle Blue Atmospheric Lighting (Outer edges) */}
        <div className="absolute top-[10%] left-[10%] w-[500px] h-[500px] bg-[#3B82F6]/[0.03] rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[10%] w-[600px] h-[600px] bg-[#2563EB]/[0.025] rounded-full blur-[130px]" />
        
        {/* Very subtle red ambient lighting behind "POWER" */}
        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#E31E24]/[0.04] rounded-full blur-[140px]" />
      </div>

      {/* 2. The 5 Perfect Circle Brand Nodes */}
      {BUBBLES.map((bubble, i) => {
        const xOffset = useTransform(smoothX, [-1, 1], [-15 * bubble.depth, 15 * bubble.depth]);
        const yOffset = useTransform(smoothY, [-1, 1], [-15 * bubble.depth, 15 * bubble.depth]);

        // Clean, slow floating animation (No rotation, no aggressive scaling)
        const animationProps = prefersReducedMotion ? {} : {
          x: [0, bubble.driftX, 0],
          y: [0, bubble.driftY, 0],
          scale: [1, 1.02, 0.98, 1]
        };

        const activeSize = isMobile ? getMobilePos(i).size : bubble.size;
        const activeTop = isMobile ? getMobilePos(i).top : bubble.top;
        const activeLeft = isMobile ? getMobilePos(i).left : bubble.left;

        return (
          <motion.div
            key={bubble.id}
            className="absolute flex items-center justify-center will-change-transform z-10"
            style={{ 
              top: activeTop, 
              left: activeLeft, 
              width: activeSize, 
              height: activeSize,
              x: isMobile ? 0 : xOffset,
              y: isMobile ? 0 : yOffset
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: i * 0.15 + 0.2 }}
          >
            {/* Perfect Circle Translucent Navy Glass Node */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-[#1E293B]/40 to-[#0F172A]/20 border border-white/[0.08] rounded-full shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),_0_10px_30px_rgba(0,0,0,0.3)] will-change-transform"
              animate={animationProps}
              transition={{ duration: bubble.dur, repeat: Infinity, ease: "easeInOut" }}
            />
            
            {/* Soft Inner Highlight */}
            <motion.div 
              className="absolute top-[15%] left-[20%] w-[30%] h-[30%] rounded-full bg-white/[0.05] blur-[8px] pointer-events-none will-change-transform"
              animate={animationProps}
              transition={{ duration: bubble.dur, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Logo Image */}
            <motion.div
              className="relative w-[65%] h-[65%] flex items-center justify-center will-change-transform"
              animate={animationProps}
              transition={{ duration: bubble.dur, repeat: Infinity, ease: "easeInOut" }}
            >
              <img 
                src={bubble.logo} 
                alt={`${bubble.id} strategic partner logo`}
                className="w-full h-full object-contain filter grayscale contrast-[100] invert mix-blend-screen opacity-100 pointer-events-none drop-shadow-[0_2px_4px_rgba(255,255,255,0.2)]"
              />
            </motion.div>
          </motion.div>
        );
      })}

      {/* 3. Central Typography / Editorial Content */}
      <div className="relative z-20 flex flex-col items-center justify-center w-full max-w-[800px] px-6 mt-16 pointer-events-none">
        
        {/* Eyebrow Label */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-4 mb-10"
        >
          <div className="w-8 h-[1px] bg-[#E31E24]/60" />
          <p className="text-[#E31E24] text-[11px] md:text-xs font-bold tracking-[0.3em] uppercase">
            Strategic Partners
          </p>
          <div className="w-8 h-[1px] bg-[#E31E24]/60" />
        </motion.div>

        {/* Hero Typography - Redefined Hierarchy */}
        <h1 className="text-center font-black flex flex-col items-center uppercase mb-10 w-full">
          
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-white/80 text-lg md:text-2xl lg:text-[28px] mb-3 tracking-[0.1em] font-semibold"
          >
            PARTNERSHIPS THAT
          </motion.span>
          
          <motion.span
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, type: "spring", bounce: 0.3 }}
            className="text-[#E31E24] text-[70px] md:text-[110px] lg:text-[130px] leading-[0.85] tracking-tighter font-black drop-shadow-[0_0_30px_rgba(227,30,36,0.3)] z-10"
          >
            POWER
          </motion.span>

          <motion.span
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="text-white text-[40px] md:text-[70px] lg:text-[85px] leading-[1] tracking-tighter mt-3 md:mt-4 drop-shadow-lg"
          >
            PERFORMANCE.
          </motion.span>
        </h1>

        {/* Supporting Paragraph */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-slate-300 text-sm md:text-base lg:text-lg max-w-[600px] mx-auto leading-relaxed text-center font-medium opacity-90"
        >
          We work with established technology manufacturers to bring specialised equipment and proven solutions to India's professional laundry industry.
        </motion.p>
      </div>
    </section>
  );
}
