import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion, useMotionTemplate } from 'framer-motion';

import sealionLogo from '../assets/brands/sealion-text.png';
import maestrelliLogo from '../assets/brands/maestrelli-text.png';
import maxipressLogo from '../assets/brands/maxipress-text.png';
import kannegiesserLogo from '../assets/brands/kannegiesser.png'; 
import imesaLogo from '../assets/brands/imesa-text.png';

// 5 Perfect Circles
const BUBBLES = [
  { id: 'maestrelli', logo: maestrelliLogo, size: 180, top: '15%', left: '15%', depth: 2.0, dur: 18, rot: 0, driftX: -10, driftY: 15 },
  { id: 'kannegiesser', logo: kannegiesserLogo, size: 160, top: '18%', left: '75%', depth: 1.5, dur: 22, rot: 0, driftX: 10, driftY: -10 },
  { id: 'imesa', logo: imesaLogo, size: 140, top: '48%', left: '85%', depth: 0.8, dur: 25, rot: 0, driftX: -8, driftY: -8 },
  { id: 'sealion', logo: sealionLogo, size: 170, top: '75%', left: '18%', depth: 1.8, dur: 20, rot: 0, driftX: 12, driftY: -12 },
  { id: 'maxipress', logo: maxipressLogo, size: 200, top: '78%', left: '70%', depth: 2.5, dur: 16, rot: 0, driftX: -15, driftY: 15 },
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
  
  // Spotlight effect based on cursor position
  const percentX = useTransform(smoothX, [-1, 1], [0, 100]);
  const percentY = useTransform(smoothY, [-1, 1], [0, 100]);
  const spotlightGradient = useMotionTemplate`radial-gradient(circle at ${percentX}% ${percentY}%, rgba(255,255,255,0.06) 0%, transparent 40%)`;

  const getMobilePos = (index) => {
    const positions = [
      { top: '12%', left: '15%', size: 100 }, 
      { top: '10%', left: '72%', size: 90 }, 
      { top: '45%', left: '85%', size: 80 }, 
      { top: '85%', left: '18%', size: 100 }, 
      { top: '82%', left: '70%', size: 110 }, 
    ];
    return positions[index];
  };

  const handleScrollToBrand = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { mouseX.set(0); mouseY.set(0); }}
      className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#F0F7FF]"
    >
      {/* 1. Base Atmospheric Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#E6F0FF] via-[#F0F7FF] to-[#DCEBFF]" />
        
        <div 
          className="absolute inset-0 opacity-[0.008]"
          style={{
            backgroundImage: 'linear-gradient(rgba(11,79,138,0.06) 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />

        <div className="absolute top-[10%] left-[10%] w-[500px] h-[500px] bg-[#0B4F8A]/[0.05] rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[10%] w-[600px] h-[600px] bg-[#001F3F]/[0.04] rounded-full blur-[130px]" />
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#E31E24]/[0.05] rounded-full blur-[140px]" 
        />
      </div>

      {/* 2. Dynamic Mouse Spotlight */}
      {!isMobile && !prefersReducedMotion && (
        <motion.div
          className="absolute inset-0 pointer-events-none z-0 mix-blend-overlay opacity-80"
          style={{ background: spotlightGradient }}
        />
      )}

      {/* 3. Subtle Constellation Network (SVG) */}
      {!isMobile && (
        <motion.svg 
          className="absolute inset-0 w-full h-full pointer-events-none z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1.5 }}
        >
          {/* Maestrelli to Kannegiesser */}
          <line x1="15%" y1="15%" x2="75%" y2="18%" stroke="rgba(11,79,138,0.08)" strokeWidth="1" strokeDasharray="4 4" />
          {/* Kannegiesser to Imesa */}
          <line x1="75%" y1="18%" x2="85%" y2="48%" stroke="rgba(11,79,138,0.08)" strokeWidth="1" strokeDasharray="4 4" />
          {/* Imesa to Maxipress */}
          <line x1="85%" y1="48%" x2="70%" y2="78%" stroke="rgba(11,79,138,0.08)" strokeWidth="1" strokeDasharray="4 4" />
          {/* Maxipress to Sealion */}
          <line x1="70%" y1="78%" x2="18%" y2="75%" stroke="rgba(11,79,138,0.08)" strokeWidth="1" strokeDasharray="4 4" />
          {/* Sealion to Maestrelli */}
          <line x1="18%" y1="75%" x2="15%" y2="15%" stroke="rgba(11,79,138,0.08)" strokeWidth="1" strokeDasharray="4 4" />
          {/* Cross lines for depth */}
          <line x1="15%" y1="15%" x2="85%" y2="48%" stroke="rgba(11,79,138,0.05)" strokeWidth="1" />
          <line x1="75%" y1="18%" x2="18%" y2="75%" stroke="rgba(11,79,138,0.05)" strokeWidth="1" />
        </motion.svg>
      )}

      {/* 4. The 5 Perfect Circle Brand Nodes */}
      {BUBBLES.map((bubble, i) => {
        const xOffset = useTransform(smoothX, [-1, 1], [-15 * bubble.depth, 15 * bubble.depth]);
        const yOffset = useTransform(smoothY, [-1, 1], [-15 * bubble.depth, 15 * bubble.depth]);

        const animationProps = prefersReducedMotion ? {} : {
          x: [0, bubble.driftX, 0],
          y: [0, bubble.driftY, 0],
          scale: [1, 1.02, 0.98, 1]
        };

        const activeSize = isMobile ? getMobilePos(i).size : bubble.size;
        const activeTop = isMobile ? getMobilePos(i).top : bubble.top;
        const activeLeft = isMobile ? getMobilePos(i).left : bubble.left;

        return (
          <motion.button
            key={bubble.id}
            onClick={() => handleScrollToBrand(bubble.id)}
            className="absolute flex items-center justify-center will-change-transform z-10 group cursor-pointer"
            style={{ 
              top: activeTop, 
              left: activeLeft, 
              width: activeSize, 
              height: activeSize,
              x: isMobile ? 0 : xOffset,
              y: isMobile ? 0 : yOffset
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 1.0 + (i * 0.15), type: "spring", bounce: 0.4 }}
          >
            {/* Interactive Outer Glow on Hover */}
            <div className="absolute inset-[-20%] rounded-full bg-[#0B4F8A]/[0.0] group-hover:bg-[#0B4F8A]/[0.04] blur-[15px] transition-colors duration-500 pointer-events-none" />

            {/* Perfect Circle Node Background */}
            <motion.div
              className="absolute inset-0 bg-white border border-white/60 rounded-full shadow-[0_20px_50px_rgba(11,79,138,0.1)] group-hover:border-white transition-colors duration-500 will-change-transform"
              animate={animationProps}
              transition={{ duration: bubble.dur, repeat: Infinity, ease: "easeInOut" }}
            />
            
            {/* Soft Inner Highlight */}
            <motion.div 
              className="absolute top-[15%] left-[20%] w-[30%] h-[30%] rounded-full bg-slate-50/[0.8] group-hover:bg-slate-100/[0.8] blur-[8px] transition-colors duration-500 pointer-events-none will-change-transform"
              animate={animationProps}
              transition={{ duration: bubble.dur, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Logo Image */}
            <motion.div
              className="relative w-[85%] h-[85%] flex items-center justify-center will-change-transform transition-transform duration-500 group-hover:scale-110"
              animate={animationProps}
              transition={{ duration: bubble.dur, repeat: Infinity, ease: "easeInOut" }}
            >
              <img 
                src={bubble.logo} 
                alt={`${bubble.id} strategic partner logo`}
                className="w-[85%] h-[85%] object-contain pointer-events-none drop-shadow-sm"
              />
            </motion.div>
          </motion.button>
        );
      })}

      {/* 5. Central Typography (Staggered Cinematic Entry) */}
      <div className="relative z-20 flex flex-col items-center justify-center w-full max-w-[800px] px-6 mt-16 pointer-events-none">
        
        {/* Eyebrow Label */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="inline-flex items-center gap-4 mb-10"
        >
          <div className="w-8 h-[1px] bg-[#E31E24]/60" />
          <p className="text-[#E31E24] text-[11px] md:text-xs font-bold tracking-[0.3em] uppercase">
            Strategic Partners
          </p>
          <div className="w-8 h-[1px] bg-[#E31E24]/60" />
        </motion.div>

        {/* Hero Typography */}
        <h1 className="text-center font-black flex flex-col items-center uppercase mb-10 w-full">
          
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-[#001F3F]/70 text-lg md:text-2xl lg:text-[28px] mb-3 tracking-[0.1em] font-semibold"
          >
            PARTNERSHIPS THAT
          </motion.span>
          
          <motion.span
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.6, type: "spring", bounce: 0.4 }}
            className="text-[#E31E24] text-[70px] md:text-[110px] lg:text-[130px] leading-[0.85] tracking-tighter font-black drop-shadow-[0_0_30px_rgba(227,30,36,0.3)] z-10"
          >
            POWER
          </motion.span>

          <motion.span
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            className="text-[#001F3F] text-[40px] md:text-[70px] lg:text-[85px] leading-[1] tracking-tighter mt-3 md:mt-4 drop-shadow-sm"
          >
            PERFORMANCE.
          </motion.span>
        </h1>

        {/* Supporting Paragraph */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.0 }}
          className="text-slate-600 text-sm md:text-base lg:text-lg max-w-[600px] mx-auto leading-relaxed text-center font-medium opacity-90"
        >
          We work with established technology manufacturers to bring specialised equipment and proven solutions to India's professional laundry industry.
        </motion.p>
      </div>
    </section>
  );
}
