import React, { useState, useRef } from 'react';
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
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-[#f8f9ff] via-[#ffffff] to-[#f0f4ff] px-6 py-24 lg:px-16 flex items-center">
      
      {/* BACKGROUND LAYER STACK */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Soft ambient lighting mimicking the clean expected output */}
        <div className="absolute top-[10%] right-[5%] w-[800px] h-[800px] rounded-full bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 blur-3xl opacity-60" />
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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
              Stronger Results.
            </span>
          </h1>

          <p className="text-slate-500 text-lg md:text-xl max-w-lg font-medium leading-relaxed">
            Expert consultancy for industrial laundry setups that reduce costs, improve efficiency and drive long term success.
          </p>

          {/* CTA BUTTONS */}
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="bg-[#E31E24] hover:bg-gradient-to-r hover:from-pink-600 hover:to-[#E31E24] text-white font-bold tracking-widest text-[11px] uppercase px-8 py-4 rounded-[8px] flex items-center gap-3 transition-all duration-300 shadow-md shadow-[#E31E24]/20 hover:shadow-lg hover:-translate-y-1">
              Request Consultation
              <span className="group-hover:translate-x-1 transition-transform border border-white/40 rounded-full p-0.5">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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
            {/* Floating Washing Machine Image Container */}
            <motion.div 
              animate={{ y: [0, -25, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative z-10 w-full mix-blend-multiply"
            >
              <img 
                src="/images/consultancy/industrial-washer.png" 
                alt="Industrial Laundry setup visualization" 
                className="w-full h-auto object-contain scale-110 origin-bottom"
              />
            </motion.div>

            {/* Glowing Platform/Base Pod directly beneath the image */}
            <div className="absolute bottom-[-15px] w-[80%] h-[35px] bg-white/60 rounded-[100%] border border-white/80 shadow-[0_20px_50px_rgba(147,197,253,0.5)] backdrop-blur-md z-0" />
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
          <motion.div 
            animate={{ y: [-10, 10, -10], scale: [1, 1.1, 1] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute top-1/3 left-4 w-8 h-8 rounded-full bg-gradient-to-br from-white/70 to-white/20 border border-white/60 backdrop-blur-[2px] shadow-[inset_0_0_8px_rgba(255,255,255,0.6)] z-20" 
          />
        </div>

      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   INDUSTRY SLIDER SECTION
───────────────────────────────────────────── */
const INDUSTRIES = [
  { id: 1, title: 'Hotels & Resorts', desc: 'High-volume linen management with impeccable finishing quality.', img: showroomImg },
  { id: 2, title: 'Hospitals', desc: 'Strict hygiene protocols and barrier-laundry compliance.', img: ecosystemImg },
  { id: 3, title: 'Commercial Laundries', desc: 'Scalable automation for maximum throughput and ROI.', img: showroomImg },
  { id: 4, title: 'Facility Management', desc: 'Turnkey operational setups for large-scale enterprise needs.', img: ecosystemImg },
];

function IndustrySlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const goLeft = () => setActiveIndex((p) => (p - 1 + INDUSTRIES.length) % INDUSTRIES.length);
  const goRight = () => setActiveIndex((p) => (p + 1) % INDUSTRIES.length);

  return (
    <section ref={ref} className="py-24 bg-[#f8f9fa] overflow-hidden border-t border-gray-200">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-[#E31E24] font-bold text-[10px] tracking-[0.2em] uppercase mb-3 block">WHO WE HELP</span>
          <h2 className="text-4xl md:text-5xl font-black text-[#001F3F] tracking-tighter">
            Solutions for Every Industry.
          </h2>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative w-full h-[500px] flex items-center justify-center">
          
          {/* Navigation Arrows */}
          <button 
            onClick={goLeft}
            className="absolute left-0 md:left-4 z-40 w-12 h-12 bg-white border-2 border-slate-100 rounded-full flex items-center justify-center hover:border-[#E31E24] hover:text-[#E31E24] transition-colors shadow-sm"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button 
            onClick={goRight}
            className="absolute right-0 md:right-4 z-40 w-12 h-12 bg-white border-2 border-slate-100 rounded-full flex items-center justify-center hover:border-[#E31E24] hover:text-[#E31E24] transition-colors shadow-sm"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Cards */}
          <div className="relative w-full max-w-[1000px] h-full flex justify-center items-center">
            {INDUSTRIES.map((ind, i) => {
              const total = INDUSTRIES.length;
              let diff = i - activeIndex;
              if (diff > Math.floor(total / 2)) diff -= total;
              if (diff < -Math.floor(total / 2)) diff += total;
              
              const isCenter = diff === 0;
              const absDiff = Math.abs(diff);
              
              let scale = 1;
              let x = 0;
              let opacity = 1;
              let zIndex = 20;
              let filter = 'blur(0px)';

              if (isCenter) {
                scale = 1.05;
                x = 0;
                zIndex = 30;
              } else if (absDiff === 1) {
                scale = 0.85;
                x = diff * 300;
                opacity = 0.6;
                zIndex = 20;
                filter = 'blur(2px)';
              } else {
                scale = 0.7;
                x = diff * 450;
                opacity = 0;
                zIndex = 10;
                filter = 'blur(5px)';
              }

              return (
                <motion.div
                  key={ind.id}
                  animate={{ scale, x, opacity, filter }}
                  transition={{ type: "spring", stiffness: 200, damping: 25 }}
                  className="absolute w-[300px] md:w-[360px] h-[400px] bg-white rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.06)] overflow-hidden flex flex-col border border-slate-100 cursor-pointer"
                  style={{ zIndex }}
                  onClick={() => setActiveIndex(i)}
                >
                  <div className="h-[60%] w-full bg-slate-50 p-6 flex items-center justify-center border-b border-slate-100">
                    <img src={ind.img} alt={ind.title} className="max-h-full object-contain mix-blend-multiply" />
                  </div>
                  <div className="h-[40%] p-6 flex flex-col justify-center">
                    <h3 className="text-xl font-bold text-[#001F3F] tracking-tight mb-2">{ind.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{ind.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-3 mt-8">
          {INDUSTRIES.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`transition-all duration-300 rounded-full border-2 ${
                i === activeIndex ? 'w-4 h-4 border-[#E31E24] bg-white' : 'w-3 h-3 border-transparent bg-slate-300 hover:bg-slate-400'
              }`}
            />
          ))}
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
