import React, { useRef, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TurnkeyProcess from '../components/TurnkeyProcess';
import MissionSection from '../components/MissionSection';
import aboutHeroBg from '../assets/about-hero-bg.jpg';

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
  const scrollToCompany = () => {
    const el = document.getElementById('company-profile');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
          Uses cropped about-hero-bg.jpg (with website header cleanly removed at 100% quality)
          Overlays coded text and button directly on top for desktop, with high-contrast mobile view.
      ============================================================================ */}
      <section id="about-hero" className="relative w-full mt-[80px] bg-white overflow-hidden">
        {/* DESKTOP VIEW (lg: and above) - aspect ratio matching 1024x508 canvas */}
        <div className="hidden lg:block relative w-full max-w-[1536px] mx-auto aspect-[1024/508] overflow-hidden select-none">
          {/* Background Image */}
          <img 
            src={aboutHeroBg} 
            alt="Promac Technologies Industrial Laundry Facility" 
            className="w-full h-full object-contain object-center pointer-events-none" 
          />

          {/* Soft Left Mask: blends seamlessly into image background behind text,
              preventing any double-text ghosting while keeping factory & operators fully visible */}
          <div className="absolute inset-y-0 left-0 w-[50%] bg-gradient-to-r from-white via-white/95 to-transparent pointer-events-none z-10" />

          {/* Interactive Desktop Content Layer */}
          <div className="absolute inset-0 z-20 pointer-events-none">
            {/* Eyebrow - sits at x=56, y=108 (5.47%, 21.26%) */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{ left: '5.47%', top: '21.26%' }}
              className="absolute"
            >
              <span className="text-[#CC141A] font-bold text-[clamp(9.5px,1vw,14px)] tracking-[0.24em] uppercase block">
                ABOUT PROMAC TECHNOLOGIES
              </span>
            </motion.div>

            {/* Red Accent Line - sits at x=55, y=132 (5.37%, 25.98%) */}
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ left: '5.47%', top: '25.98%' }}
              className="absolute w-[3.2%] h-[0.4%] min-h-[3px] bg-[#CC141A] origin-left rounded-full"
            />

            {/* H1 Heading - sits at x=55, y=154 (5.47%, 30.31%) */}
            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              style={{ left: '5.47%', top: '30.31%', maxWidth: '44%' }}
              className="absolute font-black tracking-tight text-[#1A233A] leading-[1.08] text-[clamp(26px,3.3vw,50px)]"
            >
              WE KNOW WHAT<br/>
              INDUSTRY NEEDS.
            </motion.h1>

            {/* Paragraph - sits at x=54, y=265 (5.47%, 52.17%) */}
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              style={{ left: '5.47%', top: '52.17%', maxWidth: '38%' }}
              className="absolute text-slate-600 font-medium text-[clamp(11px,1.2vw,16px)] leading-[1.45] text-justify"
            >
              Industrial laundry and professional cleaning expertise, backed by international technology partnerships and technical support.
            </motion.p>

            {/* Button - sits at x=54, y=357 (5.47%, 70.28%) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              style={{ left: '5.47%', top: '70.28%' }}
              className="absolute pointer-events-auto"
            >
              <motion.button 
                onClick={scrollToCompany}
                whileHover={{ scale: 1.04, backgroundColor: '#A31015' }}
                whileTap={{ scale: 0.97 }}
                className="bg-[#CC141A] text-white px-[clamp(18px,1.8vw,28px)] py-[clamp(8px,0.9vw,13px)] text-[clamp(9.5px,0.95vw,12px)] font-bold tracking-[0.2em] uppercase transition-all duration-300 shadow-[0_6px_20px_rgba(204,20,26,0.35)] hover:shadow-[0_8px_25px_rgba(204,20,26,0.5)] rounded-sm cursor-pointer"
              >
                OUR COMPANY
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* MOBILE & TABLET VIEW (< lg)
            Full-height responsive hero with clear focus on the facility,
            readable mobile typography, and a touch-friendly button. */}
        <div className="lg:hidden relative w-full min-h-[520px] sm:min-h-[580px] flex flex-col justify-center overflow-hidden px-6 sm:px-10 py-12">
          {/* Background Image with factory machinery focus */}
          <img 
            src={aboutHeroBg} 
            alt="Promac Technologies Industrial Laundry Facility" 
            className="absolute inset-0 w-full h-full object-cover object-[70%_center] pointer-events-none" 
          />

          {/* Gradient Overlay for high-contrast mobile readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/40 pointer-events-none z-10" />

          {/* Mobile Content */}
          <div className="relative z-20 w-full max-w-xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              {/* Eyebrow */}
              <span className="text-[#CC141A] font-bold text-xs sm:text-sm tracking-[0.22em] uppercase block mb-3">
                ABOUT PROMAC TECHNOLOGIES
              </span>

              {/* Red Accent Line */}
              <div className="w-12 h-1 bg-[#CC141A] mb-6 rounded-full" />

              {/* Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black leading-[1.12] tracking-tight mb-4 text-[#1A233A]">
                WE KNOW WHAT<br/>
                INDUSTRY NEEDS.
              </h1>

              {/* Paragraph */}
              <p className="text-slate-600 text-sm sm:text-base font-medium leading-relaxed mb-8 max-w-md">
                Industrial laundry and professional cleaning expertise, backed by international technology partnerships and technical support.
              </p>

              {/* Action Button */}
              <motion.button 
                onClick={scrollToCompany}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="bg-[#CC141A] hover:bg-[#A31015] text-white px-8 py-3.5 text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 shadow-md rounded-sm cursor-pointer inline-block"
              >
                OUR COMPANY
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================================================
          SECTION 2 — ABOUT PROMAC
      ============================================================================ */}
      <section id="company-profile" className="relative w-full px-6 lg:px-12 py-24 flex flex-col items-center bg-white border-y border-gray-100">
        <div className="max-w-[900px] w-full relative z-10">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-[#0a0a0a] tracking-tighter mb-6 uppercase border-l-4 border-[#E31E24] pl-6">
              About <span className="text-[#E31E24]">Promac</span>
            </h2>
          </div>
          
          <div className="space-y-6 text-slate-700 text-lg leading-relaxed font-medium text-justify">
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

