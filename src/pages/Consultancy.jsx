import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BrandMarquee from '../components/BrandMarquee';

// Assets
import showroomImg from '../assets/showroom.png';
import ecosystemImg from '../assets/ecosystem-3d.png';
import kannegiesserLogo from '../assets/brands/kannegiesser.png';
import maestrelliLogo from '../assets/brands/maestrelli.png';
import maxipressLogo from '../assets/brands/maxipress.png';
import sealionLogo from '../assets/brands/sealion.png';

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
              className="relative z-10 w-[110%] mx-auto drop-shadow-[0_40px_40px_rgba(0,0,0,0.3)]"
            >
              <img 
                src="/images/consultancy/hero-machine-final-perfect.png" 
                alt="Integrated Industrial Laundry setup visualization" 
                className="w-full h-auto object-contain origin-bottom scale-[1.05]"
              />
            </motion.div>

            {/* Photorealistic AI-Rendered Glass Podium */}
            <div 
              className="absolute bottom-[-35%] w-[140%] z-0 flex justify-center pointer-events-none mix-blend-multiply opacity-90"
              style={{
                WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 70%)',
                maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 70%)'
              }}
            >
              <img 
                src="/images/consultancy/glass-podium.jpg" 
                alt="Glass stage" 
                className="w-full h-auto object-contain scale-y-[0.75]" 
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
  { 
    num: '01', 
    title: 'Requirement Analysis', 
    desc: 'We understand your business needs, challenges and goals.',
    solidColor: 'bg-red-500',
    textColor: 'text-red-500',
    shadowColor: 'shadow-red-500/20',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    )
  },
  { 
    num: '02', 
    title: 'Site Evaluation', 
    desc: 'Assessing your space, utilities and operational constraints.',
    solidColor: 'bg-purple-500',
    textColor: 'text-purple-500',
    shadowColor: 'shadow-purple-500/20',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.242-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  },
  { 
    num: '03', 
    title: 'Solution Planning', 
    desc: 'We design the optimal layout, workflow and equipment plan.',
    solidColor: 'bg-blue-500',
    textColor: 'text-blue-500',
    shadowColor: 'shadow-blue-500/20',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    )
  },
  { 
    num: '04', 
    title: 'Execution Guidance', 
    desc: 'We guide you through implementation and support successful commissioning.',
    solidColor: 'bg-green-500',
    textColor: 'text-green-500',
    shadowColor: 'shadow-green-500/20',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  },
];

function ProcessTimeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="pt-24 pb-12 bg-gradient-to-b from-[#fdfdff] to-[#f4f7fb] relative z-10">
      
      {/* Floating Background Assets */}
      <motion.div 
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[-15%] top-[20%] w-[600px] h-auto z-0 opacity-90 mix-blend-multiply hidden lg:block pointer-events-none"
        style={{
          WebkitMaskImage: 'radial-gradient(circle at center, black 40%, transparent 70%)',
          maskImage: 'radial-gradient(circle at center, black 40%, transparent 70%)',
          filter: 'contrast(1.1) brightness(1.05)'
        }}
      >
        <img src="/images/consultancy/process-bubbles.png" alt="Floating bubbles" className="w-full h-auto object-contain scale-[1.2]" />
      </motion.div>
      
      <motion.div 
        animate={{ y: [0, 20, 0], rotate: [0, -3, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[-8%] top-[15%] w-[500px] h-auto z-0 opacity-90 mix-blend-multiply hidden lg:block pointer-events-none"
        style={{
          WebkitMaskImage: 'radial-gradient(circle at center, black 50%, transparent 85%)',
          maskImage: 'radial-gradient(circle at center, black 50%, transparent 85%)',
          filter: 'contrast(1.05) brightness(1.02)'
        }}
      >
        <img src="/images/consultancy/process-towels.png" alt="Stacked towels" className="w-full h-auto object-contain" />
      </motion.div>

      <div className="max-w-[1200px] mx-auto px-6 text-center relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <span className="text-[#E31E24] font-bold text-[11px] tracking-[0.2em] uppercase mb-4 block">
            OUR PROCESS
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-[44px] font-extrabold text-[#001F3F] tracking-tighter">
            A Proven Consultancy Process
          </h2>
        </motion.div>

        <div className="relative">
          {/* Main Connecting SVG Path Line */}
          <div className="hidden md:block absolute top-[40px] left-[12%] right-[12%] h-[2px] bg-slate-200 z-0">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.3 }}
              className="h-full bg-gradient-to-r from-red-500 via-purple-500 via-blue-500 to-green-500 origin-left relative"
            >
              {/* Animated pulses on the line */}
              <motion.div 
                animate={{ x: ["0%", "100%"], opacity: [0, 1, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute top-[-2px] left-0 w-16 h-[6px] rounded-full bg-white blur-[2px]"
              />
            </motion.div>
          </div>

          {/* Nodes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-4 relative z-10">
            {PROCESS_STEPS.map((step, idx) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + idx * 0.2 }}
                className="flex flex-col items-center group cursor-pointer"
              >
                {/* Node Marker */}
                <div className="relative mb-8">
                  {/* The number badge */}
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    className={`absolute -top-3 -left-3 w-8 h-8 rounded-full ${step.solidColor} text-white font-bold text-xs flex items-center justify-center z-20 shadow-md border-2 border-white transition-transform`}
                  >
                    {step.num}
                  </motion.div>
                  
                  {/* The main icon circle */}
                  <motion.div 
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className={`w-20 h-20 rounded-full bg-white flex items-center justify-center relative z-10 shadow-xl ${step.shadowColor} border border-slate-50`}
                  >
                    {/* Subtle colored ring inside */}
                    <div className={`absolute inset-2 rounded-full border border-slate-100 flex items-center justify-center ${step.textColor} bg-slate-50/50 group-hover:bg-transparent transition-colors duration-300`}>
                      {step.icon}
                    </div>
                  </motion.div>
                  
                  {/* Connection arrow for desktop (not on last item) */}
                  {idx < PROCESS_STEPS.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-[50%] -translate-y-1/2 text-slate-300">
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: idx * 0.2 }}
                      >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                      </motion.div>
                    </div>
                  )}
                </div>
                
                {/* Text Content */}
                <h3 className="text-[17px] font-extrabold text-[#001F3F] mb-3 tracking-tight group-hover:text-[#E31E24] transition-colors">{step.title}</h3>
                <p className="text-[13px] text-slate-500 leading-relaxed max-w-[200px] font-medium">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   DESIGN & PERFORMANCE SECTION
───────────────────────────────────────────── */
function DesignPerformance() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const metrics = [
    { value: '30%', label: 'Average Reduction in Operational Costs', color: 'text-[#E31E24]', bg: 'bg-[#E31E24]/10', icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
        <path d="M21 7C21 8.65685 16.9706 10 12 10C7.02944 10 3 8.65685 3 7M21 7C21 5.34315 16.9706 4 12 4C7.02944 4 3 5.34315 3 7M21 7V17C21 18.6569 16.9706 20 12 20C7.02944 20 3 18.6569 3 17V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M21 12C21 13.6569 16.9706 15 12 15C7.02944 15 3 13.6569 3 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-red-300"/>
      </svg>
    )},
    { value: '25%', label: 'Increase in Productivity & Efficiency', color: 'text-purple-600', bg: 'bg-purple-100/50', icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
        <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" strokeWidth="1.5" className="text-purple-300" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 12L15.5 8.5M12 12C11.4477 12 11 11.5523 11 11C11 10.4477 11.4477 10 12 10C12.5523 10 13 10.4477 13 11C13 11.5523 12.5523 12 12 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7 12H5M19 12H17M12 7V5M7.75736 7.75736L6.34315 6.34315M16.2426 7.75736L17.6569 6.34315" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )},
    { value: '40%', label: 'Energy Savings with Smart Planning', color: 'text-blue-500', bg: 'bg-blue-100/50', icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
        <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" className="text-blue-200" strokeLinecap="round"/>
      </svg>
    )},
    { value: '100%', label: 'Compliance with Safety & Standards', color: 'text-green-600', bg: 'bg-green-100/50', icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
        <path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-green-300"/>
        <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )},
  ];

  return (
    <section ref={ref} className="pb-24 pt-4 bg-transparent relative z-20">
      <div className="max-w-[1300px] mx-auto px-6 relative z-10">
        
        {/* Main Card */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="w-full bg-white rounded-[32px] shadow-[0_20px_60px_rgba(0,31,63,0.08)] flex flex-col lg:flex-row overflow-hidden border border-slate-100"
        >
          {/* Left Column: Content */}
          <div className="w-full lg:w-[45%] p-10 lg:p-14 flex flex-col justify-center">
            <span className="text-[#E31E24] font-bold text-[11px] tracking-[0.2em] uppercase mb-4 block">
              FROM PLAN TO PERFORMANCE
            </span>
            <h2 className="text-4xl md:text-[42px] font-black text-[#001F3F] tracking-tighter leading-[1.1] mb-6">
              We Design. You Perform.
            </h2>
            <p className="text-slate-500 text-[15px] leading-relaxed max-w-md font-medium mb-12">
              Our consultancy transforms ideas into high-performing laundry operations that deliver long-term value.
            </p>
            
            {/* Metrics */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
              {metrics.map((m, idx) => (
                <div key={idx} className="flex flex-col group cursor-pointer">
                  <motion.div 
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className={`w-12 h-12 rounded-full ${m.bg} flex items-center justify-center ${m.color} mb-4 shadow-sm border border-slate-50 transition-colors group-hover:bg-white group-hover:shadow-md`}
                  >
                    {m.icon}
                  </motion.div>
                  <h4 className={`text-3xl font-black ${m.color} mb-2 tracking-tight transition-transform origin-left group-hover:scale-105`}>{m.value}</h4>
                  <p className="text-[11px] text-slate-500 leading-snug font-medium pr-2 uppercase tracking-wide group-hover:text-slate-700 transition-colors">
                    {m.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Image & Media */}
          <div className="w-full lg:w-[55%] relative min-h-[400px] lg:min-h-full overflow-hidden group cursor-pointer">
            <img 
              src="/images/consultancy/facility-split.png" 
              alt="Facility Split View" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            
            {/* Play Button Overlay */}
            <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-colors duration-300" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.15)] transition-transform duration-300 group-hover:scale-110">
              <svg className="w-8 h-8 text-[#E31E24] ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   TRUST MATRIX & CTA BANNER
───────────────────────────────────────────── */
/* ─────────────────────────────────────────────
   COMBINED WHY CHOOSE & CTA SECTION
───────────────────────────────────────────── */
function CombinedWhyChooseAndCta() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const reasons = [
    { 
      text: '20+ Years of\nIndustry Experience', 
      color: 'text-[#E31E24]', 
      bgGlow: 'group-hover:bg-[#E31E24]/10',
      icon: (
        <div className="relative flex items-center justify-center w-16 h-16 mx-auto mb-4">
          <div className="absolute inset-0 bg-[#E31E24]/10 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <svg className="w-10 h-10 relative z-10 drop-shadow-md" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 12c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm0 2c-3.33 0-10 1.67-10 5v2h20v-2c0-3.33-6.67-5-10-5z" />
          </svg>
        </div>
      )
    },
    { 
      text: 'Deep Understanding of\nLaundry Operations', 
      color: 'text-[#8A2BE2]', 
      bgGlow: 'group-hover:bg-[#8A2BE2]/10',
      icon: (
        <div className="relative flex items-center justify-center w-16 h-16 mx-auto mb-4">
          <div className="absolute inset-0 bg-[#8A2BE2]/10 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <svg className="w-11 h-11 relative z-10 drop-shadow-md" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <circle cx="12" cy="12" r="8" />
            <circle cx="12" cy="12" r="3" fill="currentColor" />
          </svg>
        </div>
      )
    },
    { 
      text: 'Practical & Cost-effective\nSolutions', 
      color: 'text-[#007BFF]', 
      bgGlow: 'group-hover:bg-[#007BFF]/10',
      icon: (
        <div className="relative flex items-center justify-center w-16 h-16 mx-auto mb-4">
          <div className="absolute inset-0 bg-[#007BFF]/10 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <svg className="w-10 h-10 relative z-10 drop-shadow-md" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
          </svg>
        </div>
      )
    },
    { 
      text: 'End-to-End Involvement\n& Support', 
      color: 'text-[#28A745]', 
      bgGlow: 'group-hover:bg-[#28A745]/10',
      icon: (
        <div className="relative flex items-center justify-center w-16 h-16 mx-auto mb-4">
          <div className="absolute inset-0 bg-[#28A745]/10 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <svg className="w-10 h-10 relative z-10 drop-shadow-md" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 9h-2V7h-2v5H6v2h2v5h2v-5h2v-2z" />
            <path d="M4 4h16v16H4z" fill="none" />
            <path d="M18 10h-2V7h-5V5h7v5z" />
          </svg>
        </div>
      )
    },
  ];

  return (
    <section ref={ref} className="py-24 bg-[#f8faff] relative z-20 font-display">
      
      {/* ──────────────── ROW 1: WHY CHOOSE PROMAC ──────────────── */}
      
      <div className="max-w-[1450px] mx-auto px-4 relative z-10 flex flex-col xl:flex-row items-center justify-between gap-8 mb-16">
        
        {/* 1. Dynamic Machine */}
        <div className="w-full xl:w-[30%] relative flex items-center justify-center min-h-[350px]">
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="w-full h-[400px] flex justify-center items-center"
          >
            <img 
              src="/images/consultancy/promac-dynamic-splash.png" 
              alt="Dynamic Washer Composition" 
              className="w-full h-full object-contain drop-shadow-2xl"
              style={{ maskImage: 'radial-gradient(ellipse at center, black 70%, transparent 100%)', WebkitMaskImage: 'radial-gradient(ellipse at center, black 70%, transparent 100%)' }}
            />
          </motion.div>
        </div>

        {/* 2. Text */}
        <div className="w-full xl:w-[25%] z-10 text-center xl:text-left px-2">
          <span className="text-[#E31E24] font-bold text-[10px] tracking-widest uppercase mb-4 block">
            WHY CHOOSE PROMAC
          </span>
          <h2 className="text-3xl xl:text-[38px] font-black text-[#041E42] tracking-tight leading-[1.15]">
            Your Partner in <br/>
            Building <br/>
            Better Laundry <br/>
            Operations
          </h2>
        </div>

        {/* 3. Premium White Card */}
        <div className="w-full xl:w-[45%] relative z-10">
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-[-20px] right-[-20px] w-64 h-64 bg-gradient-to-tr from-blue-300/20 to-cyan-300/20 rounded-full blur-[60px] -z-10" 
          />
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-[32px] shadow-[0_20px_60px_rgba(4,30,66,0.04)] border border-slate-100 py-12 px-2 relative z-10"
          >
            {/* Removed the top-left ornament based on user feedback */}
            
            <div className="flex flex-row justify-between divide-x divide-slate-100 relative z-10">
              {reasons.map((r, idx) => (
                <motion.div 
                  key={idx} 
                  className={`flex-1 flex flex-col items-center text-center px-2 group cursor-pointer rounded-2xl transition-all duration-300 ${r.bgGlow} hover:shadow-sm py-4 -my-4`}
                >
                  <div className={`transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-110 ${r.color}`}>
                    {r.icon}
                  </div>
                  <p className="text-[11px] font-bold text-slate-600 leading-[1.4] whitespace-pre-line group-hover:text-[#041E42] transition-colors">
                    {r.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>


      {/* ──────────────── ROW 2: CTA BANNER ──────────────── */}
      
      <div className="max-w-[1400px] mx-auto px-4 relative z-30">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex flex-col xl:flex-row items-center p-8 xl:p-0 xl:pl-14 min-h-[160px] rounded-[24px] shadow-[0_20px_40px_rgba(10,24,45,0.2)] bg-[#0A1428]"
        >
          {/* Inner container for dark background and masking */}
          <div className="absolute inset-0 rounded-[24px] overflow-hidden pointer-events-none">
            <div className="absolute left-0 top-[-20%] bottom-[-20%] w-[45%] opacity-[0.25] mix-blend-screen">
              <img src="/images/consultancy/soap-bubbles.png" alt="Bubbles" className="w-full h-full object-cover" style={{ WebkitMaskImage: 'linear-gradient(to right, black 20%, transparent 100%)' }} />
            </div>
            <div className="absolute right-0 top-[-30%] bottom-[-30%] w-[50%] opacity-[0.15] mix-blend-screen">
              <img src="/images/consultancy/water-splash.png" alt="Water Background" className="w-full h-full object-cover" style={{ WebkitMaskImage: 'linear-gradient(to left, black 20%, transparent 100%)' }} />
            </div>
          </div>

          <div className="w-full flex flex-col xl:flex-row items-center justify-between relative z-40">
            
            {/* COL 1: Text */}
            <div className="w-full xl:w-[40%] text-center xl:text-left mb-6 xl:mb-0 py-10 xl:py-0">
              <p className="text-slate-300 text-[10px] font-semibold mb-2 tracking-widest uppercase opacity-90">
                Planning a Laundry Setup?
              </p>
              <h2 className="text-[30px] xl:text-[36px] font-black text-white tracking-tight leading-[1.05]">
                Let Our Experts <br />
                Help You <span className="text-[#00E1FF]">Build It</span> <span className="text-[#E31E24]">Right.</span>
              </h2>
            </div>

            {/* COL 2: Buttons */}
            <div className="w-full xl:w-[35%] flex flex-col sm:flex-row gap-4 justify-center xl:justify-start pb-8 xl:pb-0">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#E31E24] hover:bg-red-500 text-white font-bold py-3.5 px-6 rounded-md text-[11px] tracking-widest uppercase transition-all flex items-center justify-center gap-3 whitespace-nowrap shadow-[0_0_25px_rgba(227,30,36,0.5)]"
              >
                Get Expert Advice
                <svg className="w-3.5 h-3.5 rounded-full border border-white/40 p-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.button>
              
              <motion.button 
                whileTap={{ scale: 0.95 }}
                className="group relative border border-white/40 text-white font-bold py-3.5 px-6 rounded-md text-[11px] tracking-widest uppercase overflow-hidden transition-all flex items-center justify-center gap-3 whitespace-nowrap hover:border-white"
              >
                <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out z-0" />
                <span className="relative z-10 group-hover:text-[#0A1428] transition-colors duration-300">
                  Request Consultation
                </span>
                <svg className="w-4 h-4 opacity-80 relative z-10 group-hover:text-[#0A1428] transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </motion.button>
            </div>

            {/* COL 3: Cart (Deeply Integrated into Banner Environment) */}
            <div className="w-full xl:w-[25%] relative h-[160px] hidden xl:flex items-end justify-end">
              
              <div className="absolute right-[-10px] bottom-[-20px] w-[280px] z-40 pointer-events-none flex flex-col justify-end">
                
                {/* The Cart Image */}
                <img 
                  src="/images/consultancy/cta-cart.png" 
                  alt="Laundry Cart" 
                  className="w-full h-auto drop-shadow-[0_15px_30px_rgba(0,0,0,0.6)]" 
                />

                {/* --- FOREGROUND INTEGRATION ELEMENTS --- */}
                {/* These elements sit ON TOP of the cart to hide the white puddle and embed the cart into the scene */}
                
                {/* 1. Solid Dark Gradient to swallow the jagged white puddle into the banner background */}
                <div className="absolute bottom-[5px] left-0 right-0 h-[50px] bg-gradient-to-t from-[#0A1428] via-[#0A1428]/90 to-transparent z-50 rounded-b-xl" />
                
                {/* 2. Foreground Water Splash wrapping around the cart wheels */}
                <div className="absolute bottom-[-15px] left-[-20%] right-[-10%] h-[120px] z-50 mix-blend-screen opacity-50 pointer-events-none">
                  <img 
                    src="/images/consultancy/water-splash.png" 
                    alt="Splash" 
                    className="w-full h-full object-cover" 
                    style={{ maskImage: 'linear-gradient(to top, black 60%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to top, black 60%, transparent 100%)' }} 
                  />
                </div>

                {/* 3. Foreground Bubbles floating over the bottom of the cart */}
                <div className="absolute bottom-[10px] right-[10%] w-[120px] h-[100px] z-50 mix-blend-screen opacity-70 pointer-events-none">
                  <img 
                    src="/images/consultancy/soap-bubbles.png" 
                    alt="Bubbles" 
                    className="w-full h-full object-cover"
                    style={{ maskImage: 'radial-gradient(ellipse at center, black 50%, transparent 100%)', WebkitMaskImage: 'radial-gradient(ellipse at center, black 50%, transparent 100%)' }}
                  />
                </div>

              </div>
            </div>
            
          </div>
          
        </motion.div>
      </div>

    </section>
  );
}

/* ─────────────────────────────────────────────
   BRANDS FOOTER SECTION
───────────────────────────────────────────── */
function BrandsFooter() {
  const logos = [
    { name: 'Kannegiesser', src: kannegiesserLogo },
    { name: 'Maestrelli', src: maestrelliLogo },
    { name: 'Maxipress', src: maxipressLogo },
    { name: 'Sealion', src: sealionLogo },
    { name: 'Kannegiesser2', src: kannegiesserLogo },
    { name: 'Maestrelli2', src: maestrelliLogo },
    { name: 'Maxipress2', src: maxipressLogo },
    { name: 'Sealion2', src: sealionLogo },
    { name: 'Kannegiesser3', src: kannegiesserLogo },
    { name: 'Maestrelli3', src: maestrelliLogo },
    { name: 'Maxipress3', src: maxipressLogo },
    { name: 'Sealion3', src: sealionLogo }
  ];

  return (
    <section className="py-12 bg-[#fdfdff] border-t border-slate-100 overflow-hidden relative">
      <div className="max-w-[1500px] mx-auto px-6 text-center">
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-10">
          Trusted by Leading Brands Across India
        </p>
        
        {/* Infinite Scroll Container */}
        <div className="w-full overflow-hidden relative">
          {/* Gradient Fades for smooth edges */}
          <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-[#fdfdff] to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-[#fdfdff] to-transparent z-10 pointer-events-none" />

          <motion.div 
            animate={{ x: [0, -1200] }} 
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            className="flex items-center gap-24 w-max"
          >
            {logos.map((logo, idx) => (
              <img 
                key={idx} 
                src={logo.src} 
                alt={logo.name} 
                className="h-10 md:h-12 object-contain" 
              />
            ))}
          </motion.div>
        </div>
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
      <DesignPerformance />
      <CombinedWhyChooseAndCta />
      <BrandsFooter />
      <Footer />
    </div>
  );
}
