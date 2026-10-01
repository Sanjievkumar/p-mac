import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'framer-motion';

import sealionLogo from '../assets/brands/sealion-text.png';
import maestrelliLogo from '../assets/brands/maestrelli-text.png';
import maxipressLogo from '../assets/brands/maxipress-text.png';
import kannegiesserLogo from '../assets/brands/kannegiesser.png'; 
import imesaLogo from '../assets/brands/imesa-text.png';

// 5 Unique Strategic Partner Brands. EXACTLY 5. NO DUPLICATES.
// We use a carefully art-directed asymmetrical orbit composition.
const BUBBLES = [
  // Brand 1: Maestrelli (Foreground - Top Left)
  { id: 'maestrelli', logo: maestrelliLogo, size: 200, top: '20%', left: '14%', depth: 2.5, dur: 18, rot: -3, driftX: -15, driftY: 20 },
  
  // Brand 2: Kannegiesser (Midground - Top Center/Right)
  { id: 'kannegiesser', logo: kannegiesserLogo, size: 160, top: '15%', left: '62%', depth: 1.5, dur: 22, rot: 2, driftX: 12, driftY: -15 },
  
  // Brand 3: Imesa (Background - Far Right Edge)
  { id: 'imesa', logo: imesaLogo, size: 130, top: '45%', left: '86%', depth: 0.8, dur: 25, rot: 4, driftX: -10, driftY: -10 },
  
  // Brand 4: Sea-Lion (Midground - Bottom Left)
  { id: 'sealion', logo: sealionLogo, size: 170, top: '75%', left: '22%', depth: 1.8, dur: 20, rot: -5, driftX: 20, driftY: -15 },
  
  // Brand 5: Maxipress (Foreground - Bottom Right)
  { id: 'maxipress', logo: maxipressLogo, size: 220, top: '78%', left: '72%', depth: 3.0, dur: 16, rot: 3, driftX: -20, driftY: 25 },
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
  
  // Hand-crafted mobile layout to ensure all 5 brands wrap the text beautifully
  const getMobilePos = (index) => {
    const positions = [
      { top: '12%', left: '15%', size: 110 }, // TL
      { top: '8%', left: '68%', size: 90 }, // TR
      { top: '45%', left: '82%', size: 80 }, // R edge
      { top: '85%', left: '20%', size: 100 }, // BL
      { top: '80%', left: '65%', size: 120 }, // BR
    ];
    return positions[index];
  };

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { mouseX.set(0); mouseY.set(0); }}
      className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#02050A]"
    >
      {/* 1. Atmospheric Background & Minimal Grid */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#02050A] via-[#050A14] to-[#02050A]" />
        
        {/* Extremely subtle grid texture */}
        <div 
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />

        {/* Soft Burgundy/Red Radial Atmosphere (orbiting behind text) */}
        <div className="absolute top-[30%] left-[30%] w-[600px] h-[600px] bg-[#E31E24]/[0.03] rounded-full blur-[140px]" />
        <div className="absolute bottom-[20%] right-[30%] w-[700px] h-[500px] bg-[#E31E24]/[0.025] rounded-full blur-[150px]" />
        
        {/* Very subtle deep blue depth */}
        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-[#0B4F8A]/[0.03] rounded-full blur-[120px]" />
      </div>

      {/* 2. The 5 Brand Ecosystem Bubbles */}
      {BUBBLES.map((bubble, i) => {
        const xOffset = useTransform(smoothX, [-1, 1], [-15 * bubble.depth, 15 * bubble.depth]);
        const yOffset = useTransform(smoothY, [-1, 1], [-15 * bubble.depth, 15 * bubble.depth]);

        const animationProps = prefersReducedMotion ? {} : {
          x: [0, bubble.driftX, 0],
          y: [0, bubble.driftY, 0],
          rotate: [0, bubble.rot, -bubble.rot, 0],
          scale: [1, 1.03, 0.97, 1]
        };

        const shapeAnimationProps = prefersReducedMotion ? {} : {
          borderRadius: [
            "40% 60% 70% 30% / 40% 50% 60% 50%",
            "60% 40% 30% 70% / 60% 30% 70% 40%",
            "50% 50% 40% 60% / 30% 60% 40% 70%",
            "40% 60% 70% 30% / 40% 50% 60% 50%"
          ]
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
            {/* Translucent Dark Glass Container */}
            <motion.div
              className="absolute inset-0 bg-[#0A121F]/50 border border-white/[0.04] backdrop-blur-[6px] shadow-[inset_0_1px_1px_rgba(255,255,255,0.08),_0_15px_40px_rgba(0,0,0,0.6)] will-change-transform"
              style={{ borderRadius: "40% 60% 70% 30% / 40% 50% 60% 50%" }}
              animate={shapeAnimationProps}
              transition={{ duration: bubble.dur, repeat: Infinity, ease: "easeInOut" }}
            />
            {/* Soft Edge Light Highlight */}
            <motion.div 
              className="absolute top-[10%] left-[15%] w-[35%] h-[35%] rounded-full bg-white/[0.04] blur-[12px] pointer-events-none will-change-transform"
              animate={shapeAnimationProps}
              transition={{ duration: bubble.dur, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Logo Image */}
            <motion.div
              className="relative w-[75%] h-[75%] flex items-center justify-center will-change-transform"
              animate={animationProps}
              transition={{ duration: bubble.dur * 1.1, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* Every single logo is guaranteed visible, sharp, and perfectly readable */}
              <img 
                src={bubble.logo} 
                alt={`${bubble.id} strategic partner logo`}
                className="w-full h-full object-contain filter grayscale contrast-[100] invert mix-blend-screen opacity-[0.95] pointer-events-none drop-shadow-[0_2px_10px_rgba(255,255,255,0.15)]"
              />
            </motion.div>
          </motion.div>
        );
      })}

      {/* 3. Central Typography / Editorial Content */}
      <div className="relative z-20 flex flex-col items-center justify-center w-full max-w-[800px] px-6 mt-16">
        
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
            className="text-white/70 text-lg md:text-2xl lg:text-[28px] mb-3 tracking-[0.1em] font-semibold"
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
          className="text-slate-400 text-sm md:text-base lg:text-lg max-w-[600px] mx-auto leading-relaxed text-center font-medium opacity-90"
        >
          We work with established technology manufacturers to bring specialised equipment and proven solutions to India's professional laundry industry.
        </motion.p>
      </div>
    </section>
  );
}
