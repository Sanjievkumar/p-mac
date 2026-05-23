import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BrandMarquee from '../components/BrandMarquee';

// Assets
import showroomImg from '../assets/showroom.png';
import ecosystemImg from '../assets/ecosystem-3d.png';

/* ─────────────────────────────────────────────
   HERO SECTION
───────────────────────────────────────────── */
function HeroSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#fafcff] px-6 py-24 lg:px-16 flex flex-col justify-center">
      
      {/* BACKGROUND LAYER STACK */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* 3D Wave Photorealistic Background Image */}
        <div 
          className="absolute inset-0 w-full h-full opacity-70 mix-blend-multiply"
          style={{
            backgroundImage: "url('/images/consultancy/hero-waves-bg.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'left center',
          }}
        />
        {/* Soft diffused background mixed with central gradient light effect */}
        <div className="absolute top-[10%] left-[10%] w-[1000px] h-[1000px] rounded-full bg-gradient-to-br from-teal-50/60 via-purple-50/60 to-orange-50/60 blur-[100px] opacity-80" />
      </div>

      {/* CONTENT GRID */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full mt-16">
        
        {/* LEFT COLUMN: TYPOGRAPHY & CTAs */}
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-6 space-y-6 text-left"
        >
          <span className="text-xs font-bold tracking-[0.2em] text-[#E31E24] uppercase block">
            Consultancy
          </span>
          
          <h1 className="text-5xl md:text-6xl lg:text-[72px] font-extrabold tracking-tighter text-[#001F3F] leading-[1.05]">
            Smart Planning.<br />
            Efficient Operations.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-blue-500 to-green-400">
              Stronger Results.
            </span>
          </h1>

          <p className="text-slate-500 text-lg md:text-xl max-w-lg font-medium leading-relaxed">
            Expert consultancy for industrial laundry setups that reduce costs, improve efficiency and drive long term success.
          </p>

          {/* CTA BUTTONS */}
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="bg-[#E31E24] hover:bg-gradient-to-r hover:from-pink-600 hover:to-[#E31E24] text-white font-bold tracking-widest text-[11px] uppercase px-8 py-4 rounded-[8px] flex items-center gap-3 transition-all duration-300 shadow-md shadow-[#E31E24]/20 hover:shadow-lg hover:-translate-y-1 group">
              Request Consultation
              <span className="group-hover:translate-x-1 transition-transform border border-white rounded-full p-1 bg-white/10">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </button>
            <button className="bg-white hover:bg-[#001F3F] text-[#001F3F] hover:text-white font-bold tracking-widest text-[11px] uppercase px-8 py-4 rounded-[8px] border border-slate-200 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex items-center gap-3 group">
              Talk to an Expert
              <span className="text-slate-400 group-hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
                </svg>
              </span>
            </button>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: RENDER IMAGE & LIGHTING ENVIRONMENT */}
        <div className="lg:col-span-6 flex justify-center items-center relative h-[500px] lg:h-[600px]">
          
          <div className="relative flex flex-col items-center justify-center w-full max-w-[650px] mt-10">
            {/* Main Floating Washing Machine & Integrated Elements Container */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative z-10 w-[110%] ml-[-5%] drop-shadow-[0_40px_40px_rgba(0,0,0,0.3)]"
            >
              <img 
                src="/images/consultancy/hero-machine-strict-extract.png" 
                alt="Integrated Industrial Laundry setup visualization" 
                className="w-full h-auto object-contain origin-bottom scale-[1.05]"
              />
            </motion.div>

            {/* Photorealistic AI-Rendered Glass Podium */}
            <div 
              className="absolute bottom-[-160px] w-[140%] left-[-20%] z-0 flex justify-center pointer-events-none mix-blend-multiply opacity-90"
              style={{
                WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 70%)',
                maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 70%)'
              }}
            >
              <img 
                src="/images/consultancy/glass-podium.jpg" 
                alt="Glass stage" 
                className="w-full h-auto object-contain scale-y-[0.8]" 
              />
            </div>
          </div>

          {/* Micro Visual Accents: Floating Glassmorphic Bubbles */}
          <motion.div 
            animate={{ y: [-15, 15, -15], x: [-5, 5, -5] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 right-20 w-12 h-12 rounded-full bg-gradient-to-br from-white/60 to-white/10 border border-white/50 backdrop-blur-[4px] shadow-[inset_0_0_10px_rgba(255,255,255,0.5),0_10px_20px_rgba(0,0,0,0.05)] z-20" 
          />
          <motion.div 
            animate={{ y: [15, -15, 15], x: [5, -5, 5] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-32 left-10 w-16 h-16 rounded-full bg-gradient-to-br from-white/60 to-white/10 border border-white/50 backdrop-blur-[4px] shadow-[inset_0_0_15px_rgba(255,255,255,0.5),0_15px_30px_rgba(0,0,0,0.05)] z-20" 
          />
        </div>
      </div>

      {/* FOOTER STATS */}
      <div className="relative z-20 w-full max-w-7xl mx-auto mt-20 border-t border-slate-200 pt-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
          {/* Feature 1 */}
          <div className="flex items-center gap-3">
            <div className="text-[#E31E24]">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <span className="text-[13px] font-bold text-[#001F3F] tracking-wide">20+ Years of Experience</span>
          </div>

          {/* Feature 2 */}
          <div className="flex items-center gap-3">
            <div className="text-[#E31E24]">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
              </svg>
            </div>
            <span className="text-[13px] font-bold text-[#001F3F] tracking-wide">1000+ Installations Completed</span>
          </div>

          {/* Feature 3 */}
          <div className="flex items-center gap-3">
            <div className="text-[#E31E24]">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
            </div>
            <span className="text-[13px] font-bold text-[#001F3F] tracking-wide">Pan India Presence</span>
          </div>

          {/* Feature 4 */}
          <div className="flex items-center gap-3">
            <div className="text-[#E31E24]">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
              </svg>
            </div>
            <span className="text-[13px] font-bold text-[#001F3F] tracking-wide">End-to-End Support</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   INDUSTRY SLIDER SECTION
───────────────────────────────────────────── */
const INDUSTRIES_DATA = [
  { 
    id: 1, 
    title: 'Hotels', 
    images: ['/images/consultancy/industries/hotels-1.jpg', '/images/consultancy/industries/hotels-2.jpg'],
    color: 'bg-[#ff3b68]',
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  },
  { 
    id: 2, 
    title: 'Hospitals', 
    images: ['/images/consultancy/industries/hospitals-1.jpg', '/images/consultancy/industries/hospitals-2.jpg'],
    color: 'bg-[#8b5cf6]',
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
      </svg>
    )
  },
  { 
    id: 3, 
    title: 'Commercial Laundries', 
    images: ['/images/consultancy/industries/commercial-1.jpg', '/images/consultancy/industries/commercial-2.jpg'],
    color: 'bg-[#3b82f6]',
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <rect x="4" y="2" width="16" height="20" rx="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="14" r="4" strokeLinecap="round" strokeLinejoin="round" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 6h8" />
      </svg>
    )
  },
  { 
    id: 4, 
    title: 'Facility Management', 
    images: ['/images/consultancy/industries/facility-1.jpg', '/images/consultancy/industries/facility-2.jpg'],
    color: 'bg-[#4ade80]',
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18M5 21V5a2 2 0 012-2h10a2 2 0 012 2v16m-6-8h.01M9 13h.01" />
      </svg>
    )
  },
];

function IndustryCard({ ind }) {
  const [currentImg, setCurrentImg] = useState(0);

  useEffect(() => {
    // Randomize slightly so they don't all flip at the exact same millisecond
    const timer = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % ind.images.length);
    }, 3500 + Math.random() * 500);
    return () => clearInterval(timer);
  }, [ind.images.length]);

  return (
    <div className="w-[180px] md:w-[220px] shrink-0 flex flex-col bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] overflow-visible relative pb-6 border border-slate-50">
      {/* Image Slideshow Area */}
      <div className="h-[220px] w-full rounded-t-2xl overflow-hidden relative bg-slate-100">
        {ind.images.map((img, idx) => (
          <img 
            key={idx}
            src={img} 
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${idx === currentImg ? 'opacity-100' : 'opacity-0'}`} 
            alt={ind.title}
          />
        ))}
      </div>

      {/* Overlapping Icon */}
      <div className={`absolute top-[200px] left-1/2 -translate-x-1/2 w-11 h-11 rounded-full flex items-center justify-center ${ind.color} border-[3px] border-white shadow-sm z-10`}>
        {ind.icon}
      </div>

      {/* Content Area */}
      <div className="pt-10 flex flex-col items-center px-4 text-center">
        <h3 className="text-[#001F3F] font-extrabold text-[15px] tracking-tight leading-tight">{ind.title}</h3>
        
        {/* Pagination Dots matching card color */}
        <div className="flex gap-1 mt-3">
          {ind.images.map((_, idx) => (
            <div 
              key={idx}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${idx === currentImg ? ind.color : 'bg-slate-200'}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function IndustrySlider() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section ref={ref} className="py-24 bg-gradient-to-r from-[#f8faff] to-[#ffffff] overflow-hidden border-t border-gray-100 relative">
      
      {/* Background aesthetic blobs matching the reference */}
      <div className="absolute right-[-5%] bottom-[-10%] w-[400px] h-[400px] rounded-full bg-gradient-to-br from-purple-100/40 to-blue-100/40 blur-3xl pointer-events-none z-0" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          
          {/* Left Text Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-[30%] flex flex-col items-start"
          >
            <span className="text-[#E31E24] font-bold text-[10px] tracking-[0.2em] uppercase mb-4 block">WHO WE HELP</span>
            <h2 className="text-4xl md:text-5xl lg:text-[42px] font-extrabold text-[#001F3F] tracking-tighter leading-[1.1] mb-6">
              Solutions for<br />Every Industry
            </h2>
            <p className="text-slate-500 text-[15px] font-medium leading-relaxed mb-8 max-w-[280px]">
              Our consultancy services are trusted by a wide range of industries.
            </p>
            <button className="bg-transparent border border-slate-300 hover:border-[#001F3F] text-[#001F3F] font-bold tracking-widest text-[11px] uppercase px-6 py-3.5 rounded-full flex items-center gap-3 transition-all duration-300 hover:bg-[#001F3F] hover:text-white">
              EXPLORE ALL INDUSTRIES
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </motion.div>

          {/* Right Carousel Area */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-[70%] relative flex items-center"
          >
            {/* Left Nav Arrow */}
            <button className="absolute left-[-20px] md:left-[-25px] z-20 w-12 h-12 bg-white border border-slate-100 shadow-[0_5px_15px_rgba(0,0,0,0.08)] rounded-full flex items-center justify-center text-slate-400 hover:text-[#001F3F] transition-colors">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Cards Row */}
            <div className="w-full overflow-x-auto pb-8 pt-4 px-4 flex gap-4 md:gap-6 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              {INDUSTRIES_DATA.map((ind) => (
                <IndustryCard key={ind.id} ind={ind} />
              ))}
            </div>

            {/* Right Nav Arrow */}
            <button className="absolute right-[-10px] md:right-[-25px] z-20 w-12 h-12 bg-white border border-slate-100 shadow-[0_5px_15px_rgba(0,0,0,0.08)] rounded-full flex items-center justify-center text-slate-400 hover:text-[#001F3F] transition-colors">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
            
            {/* Overlay Bubbles representing the decorative art on the right */}
            <div className="absolute right-[-40px] bottom-0 pointer-events-none z-30 opacity-70 mix-blend-multiply flex flex-col gap-2">
              <div className="w-16 h-16 rounded-full border-2 border-blue-200/50 shadow-[inset_0_0_15px_rgba(59,130,246,0.2)]" />
              <div className="w-10 h-10 rounded-full border-2 border-purple-200/50 shadow-[inset_0_0_10px_rgba(168,85,247,0.2)] ml-8" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   PROCESS TIMELINE SECTION
───────────────────────────────────────────── */
const PROCESS_STEPS = [
  { num: '01', title: 'Requirement Analysis' },
  { num: '02', title: 'Site Evaluation' },
  { num: '03', title: 'Solution Planning' },
  { num: '04', title: 'Execution Guidance' },
];

function ProcessTimeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-black text-[#001F3F] tracking-tighter mb-20"
        >
          A Proven Consultancy Process
        </motion.h2>

        <div className="relative">
          {/* Connecting SVG Path Line */}
          <div className="hidden md:block absolute top-[28px] left-[10%] right-[10%] h-[2px] bg-slate-100 z-0">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.3 }}
              className="h-full bg-[#E31E24] origin-left"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-4 relative z-10">
            {PROCESS_STEPS.map((step, idx) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + idx * 0.2 }}
                className="flex flex-col items-center"
              >
                {/* Node Marker */}
                <div className="w-14 h-14 rounded-full bg-white border-4 border-slate-100 flex items-center justify-center mb-6 shadow-sm relative transition-all duration-300">
                  <motion.div 
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.8 + idx * 0.2, duration: 0.3 }}
                    className="absolute inset-[-4px] rounded-full border-4 border-[#E31E24]"
                  />
                  <span className="text-[#001F3F] font-bold text-lg">{step.num}</span>
                </div>
                
                <h3 className="text-lg font-bold text-[#001F3F] uppercase tracking-wider">{step.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   METRICS GRID SECTION
───────────────────────────────────────────── */
function MetricsGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const metrics = [
    { value: '30%', label: 'Average Reduction in Operational Costs' },
    { value: '25%', label: 'Increase in Productivity & Efficiency' },
    { value: '40%', label: 'Energy Savings with Smart Planning' },
    { value: '100%', label: 'Compliance with Safety & Standards' },
  ];

  return (
    <section ref={ref} className="py-24 bg-[#0a0a0a] text-white overflow-hidden relative">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_#E31E24_0%,_transparent_60%)]" />
      
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Split Layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter leading-tight">
              We Design. <br />
              <span className="text-[#E31E24]">You Perform.</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed max-w-lg">
              Optimized layouts and cutting-edge machinery integration aren't just aesthetic choices; they represent tangible returns on investment.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm"
          >
             <img src={showroomImg} alt="Facility Design" className="w-full h-auto object-contain drop-shadow-2xl opacity-90 mix-blend-screen" />
          </motion.div>
        </div>

        {/* Metrics Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + idx * 0.1 }}
              className="border-t-2 border-[#E31E24]/30 pt-6"
            >
              <h4 className="text-5xl font-black text-white mb-3 tracking-tighter">{metric.value}</h4>
              <p className="text-sm text-slate-400 uppercase tracking-widest leading-relaxed">{metric.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   TRUST MATRIX & CTA BANNER
───────────────────────────────────────────── */
function TrustMatrix() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="relative w-full">
      {/* Client Marquee */}
      <div className="py-12 bg-white">
        <BrandMarquee />
      </div>

      {/* CTA Banner */}
      <div className="w-full bg-gradient-to-br from-[#001F3F] to-[#0a1128] py-24 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl mx-auto space-y-10"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter leading-tight">
            Planning a Laundry Setup? <br />
            Let Our Experts Help You Build It Right.
          </h2>
          
          <div className="flex flex-wrap justify-center gap-6">
            <button className="bg-[#E31E24] text-white px-10 py-5 font-bold tracking-widest text-[12px] uppercase hover:bg-[#c8191f] transition-all shadow-[0_10px_30px_rgba(227,30,36,0.25)] hover:scale-105">
              Contact Consultancy Team
            </button>
            <button className="border-2 border-white/20 text-white px-10 py-5 font-bold tracking-widest text-[12px] uppercase hover:bg-white hover:text-[#001F3F] transition-all">
              View Our Portfolio
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   MAIN PAGE EXPORT
───────────────────────────────────────────── */
export default function Consultancy() {
  return (
    <div className="w-full min-h-screen bg-[#fafafa] font-display flex flex-col">
      <Navbar />
      <HeroSection />
      <IndustrySlider />
      <ProcessTimeline />
      <MetricsGrid />
      <TrustMatrix />
      <Footer />
    </div>
  );
}
