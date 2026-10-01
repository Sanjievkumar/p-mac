import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'framer-motion';

import sealionLogo from '../assets/brands/sealion-text.png';
import maestrelliLogo from '../assets/brands/maestrelli-text.png';
import maxipressLogo from '../assets/brands/maxipress-text.png';
import kannegiesserLogo from '../assets/brands/kannegiesser.png'; 
import imesaLogo from '../assets/brands/imesa-text.png';

const BUBBLES = [
  { id: 'kannegiesser', logo: kannegiesserLogo, size: 160, top: '22%', left: '12%', depth: 1.2, dur: 22, rot: 3, driftX: 15, driftY: 20 },
  { id: 'maestrelli', logo: maestrelliLogo, size: 190, top: '15%', left: '76%', depth: 2, dur: 28, rot: -4, driftX: -20, driftY: 15 },
  { id: 'sealion', logo: sealionLogo, size: 180, top: '72%', left: '10%', depth: 2.2, dur: 26, rot: 5, driftX: 20, driftY: -15 },
  { id: 'maxipress', logo: maxipressLogo, size: 170, top: '78%', left: '80%', depth: 1.4, dur: 32, rot: -3, driftX: -15, driftY: -20 },
  { id: 'imesa', logo: imesaLogo, size: 120, top: '48%', left: '4%', depth: 0.6, dur: 35, rot: 2, driftX: 10, driftY: -10, blur: true },
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
      { top: '15%', left: '15%', size: 90 }, 
      { top: '12%', left: '75%', size: 100 }, 
      { top: '85%', left: '20%', size: 95 }, 
      { top: '82%', left: '75%', size: 110 }, 
      { top: '50%', left: '85%', size: 70 }, 
    ];
    return positions[index];
  };

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { mouseX.set(0); mouseY.set(0); }}
      className="relative w-full min-h-[85vh] flex items-center justify-center overflow-hidden bg-[#02050A]"
    >
      {/* 1. Atmospheric Background & Minimal Grid */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#02050A] via-[#050A14] to-[#02050A]" />
        
        {/* Subtle grid texture (Much less prominent) */}
        <div 
          className="absolute inset-0 opacity-[0.012]"
          style={{
            backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />

        {/* Soft Burgundy/Red Radial Atmosphere */}
        <div className="absolute top-[20%] left-[20%] w-[600px] h-[600px] bg-[#E31E24]/[0.035] rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[10%] w-[700px] h-[500px] bg-[#E31E24]/[0.025] rounded-full blur-[140px]" />
        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-[#0A1020]/[0.3] rounded-full blur-[120px]" />
      </div>

      {/* 2. The 5 Brand Ecosystem Bubbles */}
      {BUBBLES.map((bubble, i) => {
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

        const activeSize = isMobile ? getMobilePos(i).size : bubble.size;
        const activeTop = isMobile ? getMobilePos(i).top : bubble.top;
        const activeLeft = isMobile ? getMobilePos(i).left : bubble.left;

        return (
          <motion.div
            key={bubble.id}
            className={`absolute flex items-center justify-center will-change-transform z-10 ${bubble.blur && !isMobile ? 'blur-[2px]' : ''}`}
            style={{ 
              top: activeTop, 
              left: activeLeft, 
              width: activeSize, 
              height: activeSize,
              x: isMobile ? 0 : xOffset,
              y: isMobile ? 0 : yOffset
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: i * 0.15 + 0.2 }}
          >
            {/* Translucent Dark Glass Container */}
            <motion.div
              className="absolute inset-0 bg-[#0A121F]/40 border border-white/[0.04] backdrop-blur-[8px] shadow-[inset_0_1px_1px_rgba(255,255,255,0.08),_0_15px_40px_rgba(0,0,0,0.6)] will-change-transform"
              style={{ borderRadius: "40% 60% 70% 30% / 40% 50% 60% 50%" }}
              animate={shapeAnimationProps}
              transition={{ duration: bubble.dur, repeat: Infinity, ease: "easeInOut" }}
            />
            {/* Soft Edge Light Highlight */}
            <motion.div 
              className="absolute top-[10%] left-[15%] w-[30%] h-[30%] rounded-full bg-white/[0.04] blur-[10px] pointer-events-none will-change-transform"
              animate={shapeAnimationProps}
              transition={{ duration: bubble.dur, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Logo Image */}
            <motion.div
              className="relative w-[70%] h-[70%] flex items-center justify-center will-change-transform"
              animate={animationProps}
              transition={{ duration: bubble.dur * 1.1, repeat: Infinity, ease: "easeInOut" }}
            >
              <img 
                src={bubble.logo} 
                alt={`${bubble.id} logo`}
                className="w-full h-full object-contain filter grayscale contrast-[100] invert mix-blend-screen opacity-[0.95] pointer-events-none drop-shadow-[0_2px_10px_rgba(255,255,255,0.15)]"
              />
            </motion.div>
          </motion.div>
        );
      })}

      {/* 3. Central Typography / Editorial Content */}
      <div className="relative z-20 flex flex-col items-center justify-center w-full max-w-[900px] px-6 mt-10">
        
        {/* Eyebrow Label */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-4 mb-8"
        >
          <div className="w-8 h-[1px] bg-[#E31E24]/60" />
          <p className="text-[#E31E24] text-[11px] font-bold tracking-[0.3em] uppercase">
            Strategic Partners
          </p>
          <div className="w-8 h-[1px] bg-[#E31E24]/60" />
        </motion.div>

        {/* Hero Typography */}
        <h1 className="text-center font-black tracking-tighter leading-[0.9] flex flex-col items-center uppercase mb-8">
          
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-white/80 text-[26px] md:text-[36px] lg:text-[44px] mb-2 tracking-normal font-bold"
          >
            PARTNERSHIPS THAT
          </motion.span>
          
          <motion.span
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, type: "spring", bounce: 0.3 }}
            className="text-[#E31E24] text-[65px] md:text-[110px] lg:text-[140px] leading-[0.85] font-black drop-shadow-[0_0_40px_rgba(227,30,36,0.3)] z-10"
          >
            POWER
          </motion.span>

          <motion.span
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="text-white text-[45px] md:text-[75px] lg:text-[100px] leading-[1] tracking-tighter mt-1 md:mt-2 drop-shadow-xl"
          >
            PERFORMANCE.
          </motion.span>
        </h1>

        {/* Supporting Paragraph */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-slate-300 text-sm md:text-base lg:text-lg max-w-[650px] mx-auto leading-relaxed text-center font-medium opacity-90"
        >
          We work with established technology manufacturers to bring specialised equipment and proven solutions to India's professional laundry industry.
        </motion.p>
      </div>
    </section>
  );
}
