import React, { useRef, useState, useCallback } from 'react';
import { motion, useAnimationControls, animate } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TurnkeyProcess from '../components/TurnkeyProcess';
import MissionSection from '../components/MissionSection';

/* ─────────────────────────────────────────────
   Letter-by-letter stagger helper
───────────────────────────────────────────── */
function SplitText({ text, className, staggerDelay = 0.03, baseDelay = 0 }) {
  return (
    <span className={className} aria-label={text}>
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: baseDelay + i * staggerDelay,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{ display: char === ' ' ? 'inline' : 'inline-block' }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </span>
  );
}

/* ─────────────────────────────────────────────
   Magnetic tilt card
───────────────────────────────────────────── */
function MagneticCard({ children, className = '', glowRed = false }) {
  const ref = useRef(null);
  const [transform, setTransform] = useState({ rotateX: 0, rotateY: 0, scale: 1 });
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });

  const handleMouseMove = useCallback((e) => {
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / (rect.width / 2);
    const dy = (e.clientY - cy) / (rect.height / 2);
    setTransform({ rotateX: -dy * 7, rotateY: dx * 7, scale: 1.05 });
    if (glowRed) {
      const px = ((e.clientX - rect.left) / rect.width) * 100;
      const py = ((e.clientY - rect.top) / rect.height) * 100;
      setGlowPos({ x: px, y: py });
    }
  }, [glowRed]);

  const handleMouseLeave = useCallback(() => {
    setTransform({ rotateX: 0, rotateY: 0, scale: 1 });
    setGlowPos({ x: 50, y: 50 });
  }, []);

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(800px) rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg) scale(${transform.scale})`,
        transition: 'transform 0.15s ease-out',
      }}
      className={className}
    >
      {glowRed && (
        <div
          className="absolute inset-0 rounded-3xl pointer-events-none z-0 transition-all duration-75"
          style={{
            background: `radial-gradient(circle at ${glowPos.x}% ${glowPos.y}%, rgba(212,43,43,0.18) 0%, transparent 70%)`,
          }}
          aria-hidden="true"
        />
      )}
      {children}
    </div>
  );
}

/* ─────────────────────────────────────────────
   Pulsing icon wrapper
───────────────────────────────────────────── */
function PulseIcon({ children }) {
  return (
    <motion.div
      animate={{ scale: [1, 1.12, 1] }}
      transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
      className="text-4xl mb-8 inline-block"
    >
      {children}
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   Main Page
───────────────────────────────────────────── */
export default function About() {
  const pillars = [
    {
      id: '01',
      title: 'Global Expertise',
      desc: 'Bridging the gap between international innovation and Indian industrial requirements with curated technology.',
      icon: '🌐',
      float: '-translate-y-2',
    },
    {
      id: '02',
      title: 'Lifecycle Support',
      desc: 'From initial blueprint to daily maintenance, we ensure your operations never face a moment of downtime.',
      icon: '⚙️',
      float: 'translate-y-3',
    },
    {
      id: '03',
      title: 'Operational ROI',
      desc: 'Engineering solutions that maximize output while minimizing resource consumption and overhead costs.',
      icon: '📈',
      float: '-translate-y-1',
    },
  ];

  return (
    <div className="w-full min-h-screen bg-[#fafafa] font-display flex flex-col">
      <Navbar />

      {/* ══════════════════════════════════════════
          SECTION 1 — HERO
      ══════════════════════════════════════════ */}
      <section className="relative w-full pt-44 pb-20 px-6 lg:px-12 flex flex-col items-center overflow-hidden">
        {/* Ambient blobs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#E31E24]/[0.03] rounded-full blur-[180px] -mr-40 -mt-40" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#0B4F8A]/[0.02] rounded-full blur-[160px] -ml-40 -mb-40" />

        {/* Mild Blue Blueprint Grid Watermark */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.05]"
          style={{
            backgroundImage:
              'linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
          aria-hidden="true"
        />

        <div className="max-w-[1100px] w-full text-center mb-20 relative z-10">
          {/* Eyebrow pill */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <span className="text-[#E31E24] font-bold text-[10px] tracking-[0.4em] uppercase bg-[#E31E24]/5 px-6 py-2 rounded-full border border-[#E31E24]/10">
              Engineering the Future
            </span>
          </motion.div>

          {/* Staggered hero headline */}
          <h1
            className="text-5xl md:text-8xl font-black text-[#0a0a0a] tracking-tighter mb-8 leading-[0.95] relative overflow-hidden"
            aria-label="BEYOND EQUIPMENT. PURE PERFORMANCE."
          >
            <div className="block">
              <SplitText text="BEYOND " className="inline" baseDelay={0.1} />
              <SplitText
                text="EQUIPMENT."
                className="inline text-gray-300"
                baseDelay={0.1 + 'BEYOND '.length * 0.03}
              />
            </div>
            <div className="block">
              <SplitText
                text="PURE PERFORMANCE."
                className="inline text-[#E31E24]"
                baseDelay={0.1 + 'BEYOND EQUIPMENT.'.length * 0.03}
              />
            </div>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-base md:text-lg text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed"
          >
            Promac Technologies is India's premier turnkey partner for world-class industrial laundry systems.
          </motion.p>
        </div>

        {/* ── Glass Content Console ── */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.4 }}
          className="relative max-w-[1200px] w-full rounded-[40px] overflow-visible shadow-2xl mb-32 border border-white/60 bg-white/40 backdrop-blur-2xl p-12 md:p-20"
        >
          <div className="grid md:grid-cols-2 gap-16 items-stretch">
            {/* Left: Expertise */}
            <MagneticCard className="h-full flex flex-col justify-start relative bg-[#001F3F] hover:bg-white rounded-3xl p-10 text-white overflow-hidden group shadow-lg hover:shadow-2xl transition-colors duration-500 border border-white/10 hover:border-gray-200">
              {/* shimmer border via pseudo-gradient overlay */}
              <div
                className="absolute inset-0 rounded-3xl pointer-events-none z-0 opacity-100 group-hover:opacity-0 transition-opacity duration-500"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, transparent 50%, rgba(255,255,255,0.05) 100%)',
                }}
                aria-hidden="true"
              />
              <div className="relative z-10 space-y-6">
                <h3 className="text-2xl font-black tracking-tighter text-[#E31E24] transition-colors duration-500">
                  Our Vision
                </h3>
                <p className="text-white/90 group-hover:text-[#001F3F]/90 text-lg leading-relaxed transition-colors duration-500">
                  We envision a future where every hospitality, healthcare, and commercial laundry facility across India operates through globally advanced systems, seamless automation, and service-driven engineering excellence — transforming laundry operations from a utility into a strategic operational advantage.
                </p>
              </div>
            </MagneticCard>

            {/* Right: Mission */}
            <MagneticCard
              className="h-full flex flex-col justify-start relative bg-[#001F3F] hover:bg-white rounded-3xl p-10 text-white overflow-hidden group shadow-lg hover:shadow-2xl transition-colors duration-500 border border-white/10 hover:border-gray-200"
            >
              {/* Shimmer */}
              <div
                className="absolute inset-0 rounded-3xl pointer-events-none z-0 opacity-100 group-hover:opacity-0 transition-opacity duration-500"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, transparent 50%, rgba(255,255,255,0.05) 100%)',
                }}
                aria-hidden="true"
              />
              {/* Decorative crosshair */}
              <div className="absolute top-0 right-0 p-8 opacity-20 transition-transform duration-700 group-hover:scale-150 z-0" aria-hidden="true">
                <svg className="w-32 h-32 stroke-white group-hover:stroke-[#E31E24] transition-colors duration-500" viewBox="0 0 100 100" fill="none">
                  <circle cx="50" cy="50" r="40" strokeWidth="0.5" />
                  <path d="M50 10V90M10 50H90" strokeWidth="0.5" />
                </svg>
              </div>
              <div className="relative z-10 space-y-6">
                <h3 className="text-2xl font-black tracking-tighter text-white group-hover:text-[#001F3F] transition-colors duration-500">Our Mission</h3>
                <p className="text-white/90 group-hover:text-[#001F3F]/90 leading-relaxed text-lg transition-colors duration-500">
                  To empower the hospitality and healthcare sectors with sustainable, high-efficiency laundry technologies that redefine operational excellence across India.
                </p>
              </div>
            </MagneticCard>
          </div>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 2 — CORE PILLARS
      ══════════════════════════════════════════ */}
      <section className="py-32 bg-white relative overflow-hidden">
        {/* Blueprint grid watermark */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(#001F3F 1px, transparent 1px), linear-gradient(90deg, #001F3F 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
          aria-hidden="true"
        />

        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-[#0a0a0a] tracking-tighter mb-6 uppercase">
              The Promac <span className="text-[#E31E24]">Pillars.</span>
            </h2>
            <p className="text-slate-600 text-lg max-w-xl mx-auto leading-relaxed">
              Our foundation is built on three core principles that drive every project we undertake.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-start">
            {pillars.map((pillar, idx) => (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.18, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                /* Floating offset per card */
                className={`${pillar.float} p-10 rounded-[32px]
                  bg-white/40 backdrop-blur-md
                  border border-white/70
                  shadow-[0_8px_40px_rgba(0,0,0,0.07)]
                  hover:shadow-[0_20px_60px_rgba(0,0,0,0.13)]
                  hover:border-[#E31E24]/20
                  transition-all duration-500 group cursor-pointer`}
              >
                <PulseIcon>{pillar.icon}</PulseIcon>
                <span className="text-[#E31E24] font-bold text-[10px] tracking-widest mb-4 block">{pillar.id}</span>
                <h3 className="text-2xl font-black text-[#0a0a0a] mb-4 tracking-tighter">{pillar.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 4: TURNKEY PROCESS ── */}
      <TurnkeyProcess />

      {/* ── SECTION 5: MISSION ── */}
      <MissionSection />

      <Footer />
    </div>
  );
}
