import React, { useRef, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TurnkeyProcess from '../components/TurnkeyProcess';
import MissionSection from '../components/MissionSection';

/* ============================================================================
   Letter-by-letter stagger helper
============================================================================ */
function SplitText({ text, className, staggerDelay = 0.03, baseDelay = 0 }) {
  const chars = text.split('');
  const words = [];
  chars.forEach((c, i) => {
    if (c === ' ') {
      words.push({ type: 'space', char: '\u00A0', globalIndex: i });
    } else {
      if (words.length === 0 || words[words.length - 1].type === 'space') {
        words.push({ type: 'word', chars: [{ char: c, globalIndex: i }] });
      } else {
        words[words.length - 1].chars.push({ char: c, globalIndex: i });
      }
    }
  });

  return (
    <span className={className} aria-label={text}>
      {words.map((item, idx) => {
        if (item.type === 'space') {
          return <span key={idx} className="inline">&nbsp;</span>;
        }
        return (
          <span key={idx} className="inline-block whitespace-nowrap">
            {item.chars.map((c) => (
              <motion.span
                key={c.globalIndex}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: baseDelay + c.globalIndex * staggerDelay,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="inline-block"
              >
                {c.char}
              </motion.span>
            ))}
          </span>
        );
      })}
    </span>
  );
}

/* ============================================================================
   Pulsing icon wrapper
============================================================================ */
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

/* ============================================================================
   Main Page
============================================================================ */
export default function About() {
  const coreStrengths = [
    {
      id: '01',
      title: 'Turnkey Laundry Engineering',
      desc: 'End-to-end project execution — from feasibility study and plant layout design to installation, commissioning, and operator training — engineered for productivity, scalability, and long-term stability.',
      icon: '⚙️',
    },
    {
      id: '02',
      title: 'Exclusive International Technology Access',
      desc: 'Direct representation of globally respected manufacturers ensures authentic systems, genuine spare parts, and factory-backed technical support.',
      icon: '🌍',
    },
    {
      id: '03',
      title: 'Large-Scale Institutional Expertise',
      desc: 'Demonstrated capability in high-capacity railway laundries, centralized hospital laundries, hospitality groups, and institutional processing plants where uptime and output are critical.',
      icon: '🏗️',
    },
    {
      id: '04',
      title: 'Technical Depth & Lifecycle Support',
      desc: 'Experienced service engineers ensure preventive maintenance planning, rapid breakdown response, warranty coordination, and sustained performance optimization.',
      icon: '🔧',
    },
    {
      id: '05',
      title: 'National Reach with Structured Service Network',
      desc: 'Pan-India operational capability enabling fast deployment, technical coordination, and reliable after-sales support.',
      icon: '🗺️',
    },
    {
      id: '06',
      title: 'Performance-Oriented Engineering Approach',
      desc: 'With global technology partners, specialised expertise and end-to-end project capability, we deliver complete laundry systems designed around real operational needs.',
      icon: '⚡',
    },
  ];

  return (
    <div className="w-full min-h-screen bg-[#fafafa] font-display flex flex-col">
      <Navbar />

      {/* ============================================================================
          SECTION 1 — HERO
      ============================================================================ */}
      <section className="relative w-full pt-44 pb-20 px-6 lg:px-12 flex flex-col items-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[#fafafa] overflow-hidden">
          {/* Subtle Animated Grid */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.04] animate-grid"
            style={{
              backgroundImage: 'linear-gradient(#1e293b 1px, transparent 1px), linear-gradient(90deg, #1e293b 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />
          {/* Radial mask to fade grid at edges */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#fafafa_100%)]" />
          
          {/* Subtle glowing brand accents */}
          <div className="absolute top-[10%] left-[10%] w-[400px] h-[400px] bg-[#E31E24]/[0.025] rounded-full blur-[80px]" />
          <div className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] bg-[#0B4F8A]/[0.03] rounded-full blur-[100px]" />
        </div>

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
            className="text-5xl md:text-7xl lg:text-8xl font-black text-[#0a0a0a] tracking-tighter mb-8 leading-[0.95] relative overflow-hidden"
            aria-label="EVERY CLEANING CHALLENGE. ONE SOLUTION."
          >
            <div className="block">
              <SplitText text="EVERY CLEANING CHALLENGE. " className="inline" baseDelay={0.1} />
            </div>
            <div className="block mt-2">
              <SplitText
                text="ONE SOLUTION."
                className="inline text-[#E31E24]"
                baseDelay={0.1 + 'EVERY CLEANING CHALLENGE. '.length * 0.03}
              />
            </div>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-lg md:text-xl text-slate-800 font-bold max-w-2xl mx-auto leading-relaxed drop-shadow-sm bg-white/40 p-2 rounded-xl backdrop-blur-sm"
          >
            Promac Technologies is India's premier turnkey partner for world-class industrial laundry systems.
          </motion.p>
        </div>
      </section>

      {/* ============================================================================
          SECTION 2 — ABOUT PROMAC
      ============================================================================ */}
      <section className="relative w-full px-6 lg:px-12 py-24 flex flex-col items-center bg-white border-y border-gray-100">
        <div className="max-w-[900px] w-full relative z-10">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-[#0a0a0a] tracking-tighter mb-6 uppercase border-l-4 border-[#E31E24] pl-6">
              About <span className="text-[#E31E24]">Promac</span>
            </h2>
          </div>
          
          <div className="space-y-6 text-slate-700 text-lg leading-relaxed font-medium">
            <p className="text-xl md:text-2xl font-bold text-[#001F3F] leading-tight mb-8">
              At Promac Technologies Pvt. Ltd., machines are not merely supplied — systems are engineered, performance is optimized, and long-term operational reliability is built into every solution.
            </p>
            <p>
              Established in 2022, Promac is built on more than 15 years of industry experience in industrial laundry engineering, dry-cleaning technology and professional cleaning systems. The company brings together seasoned technical expertise, project execution capability and established industry relationships under one focused, project-driven organization.
            </p>
            <p>
              With a deep understanding of India’s institutional and high-capacity laundry landscape, Promac combines proven international technologies with strong local execution expertise to develop solutions suited to demanding operating environments.
            </p>
            <p>
              These strategic partnerships enable Promac to deliver advanced laundry solutions across Indian Railways, star-category hospitality, healthcare institutions, commercial laundries and facility management sectors.
            </p>
            <p>
              Though incorporated in 2022, Promac's leadership and technical team bring more than 15 years of hands-on project experience, covering plant planning, equipment selection, high-capacity system integration, installation, commissioning, automation coordination and lifecycle service management across India.
            </p>
            <p>
              Promac operates beyond the conventional equipment-supply model. We work as a solution and project partner — focusing on throughput, resource efficiency, automation, reliability and measurable operational performance.
            </p>
            
            <div className="mt-12 bg-[#fafafa] p-8 rounded-2xl border border-gray-200 shadow-sm">
              <p className="font-bold text-[#001F3F] mb-6">As exclusive partners in India, Promac represents internationally respected manufacturers including:</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <li className="flex items-center gap-3"><div className="w-2 h-2 bg-[#E31E24] rounded-full"/> <span className="font-bold text-gray-900">Kannegiesser</span> <span className="text-gray-500">— Germany</span></li>
                <li className="flex items-center gap-3"><div className="w-2 h-2 bg-[#E31E24] rounded-full"/> <span className="font-bold text-gray-900">Sea-Lion</span> <span className="text-gray-500">— China</span></li>
                <li className="flex items-center gap-3"><div className="w-2 h-2 bg-[#E31E24] rounded-full"/> <span className="font-bold text-gray-900">Maestrelli</span> <span className="text-gray-500">— Italy</span></li>
                <li className="flex items-center gap-3"><div className="w-2 h-2 bg-[#E31E24] rounded-full"/> <span className="font-bold text-gray-900">Maxi Press</span> <span className="text-gray-500">— USA</span></li>
                <li className="flex items-center gap-3"><div className="w-2 h-2 bg-[#E31E24] rounded-full"/> <span className="font-bold text-gray-900">Andrew Industries</span> <span className="text-gray-500">— UK</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================================
          SECTION 3 — CORE STRENGTHS
      ============================================================================ */}
      <section className="relative w-full px-6 lg:px-12 flex flex-col items-center bg-[#fafafa] py-32 overflow-hidden">
        {/* Mild Blue Blueprint Grid Watermark */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.15] animate-grid"
          style={{
            backgroundImage:
              'linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
          aria-hidden="true"
        />
        
        <div className="max-w-[1200px] w-full mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-[#0a0a0a] tracking-tighter mb-6 uppercase">
              Core <span className="text-[#E31E24]">Strengths.</span>
            </h2>
            <p className="text-slate-600 text-lg max-w-xl mx-auto leading-relaxed font-medium">
              The foundational capabilities that set Promac apart as a leader in industrial laundry engineering.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch mb-20">
            {coreStrengths.map((strength, idx) => (
              <motion.div
                key={strength.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                className="p-8 md:p-10 rounded-[32px]
                  bg-white/70 backdrop-blur-md
                  border border-white
                  shadow-[0_8px_30px_rgba(0,0,0,0.04)]
                  hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)]
                  hover:border-[#E31E24]/30
                  transition-all duration-500 group flex flex-col h-full"
              >
                <div className="mb-6">
                  <PulseIcon>{strength.icon}</PulseIcon>
                </div>
                <span className="text-[#E31E24] font-bold text-[10px] tracking-widest mb-3 block">{strength.id}</span>
                <h3 className="text-xl md:text-2xl font-black text-[#001F3F] mb-4 tracking-tight leading-tight">{strength.title}</h3>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed font-medium flex-grow">{strength.desc}</p>
              </motion.div>
            ))}
          </div>
          
          {/* Summary Banner */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full bg-[#001F3F] rounded-[32px] p-10 md:p-16 text-center text-white shadow-2xl relative overflow-hidden"
          >
            <div
              className="absolute inset-0 pointer-events-none opacity-20"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, transparent 50%, rgba(255,255,255,0.05) 100%)',
              }}
            />
            <h3 className="text-2xl md:text-4xl font-black tracking-wider text-white leading-tight mb-8">
              GLOBAL TECHNOLOGY.<br className="md:hidden"/>
              <span className="text-[#E31E24]"> LOCAL INTELLIGENCE.</span><br/>
              COMPLETE LAUNDRY SOLUTIONS.
            </h3>
            <p className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto font-medium">
              With global technology partners, specialised expertise and end-to-end project capability, we deliver complete laundry systems designed around real operational needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ============================================================================
          SECTION 4: TURNKEY PROCESS
      ============================================================================ */}
      <TurnkeyProcess />

      {/* ============================================================================
          SECTION 5: MISSION
      ============================================================================ */}
      <MissionSection />

      <Footer />
    </div>
  );
}
