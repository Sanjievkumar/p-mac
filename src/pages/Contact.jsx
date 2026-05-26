import React, { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

/* ─────────────────────────────────────────────
   3D Tilt Card Component
───────────────────────────────────────────── */
function TiltCard({ children, className }) {
  const ref = useRef(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);
  const glareOpacity = useTransform(mouseYSpring, [-0.5, 0.5], [0, 0.1]);
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], ["-100%", "100%"]);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        perspective: 1200
      }}
      className={`relative ${className}`}
    >
      {/* Glare Effect */}
      <motion.div 
        className="absolute inset-0 z-50 pointer-events-none rounded-[40px]"
        style={{
          opacity: glareOpacity,
          background: 'linear-gradient(to bottom, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 100%)',
          transform: `translateY(${glareY})`
        }}
      />
      <div style={{ transform: "translateZ(30px)" }} className="h-full w-full">
        {children}
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   Magnetic Button Component
───────────────────────────────────────────── */
function MagneticButton({ children, onClick, className = '' }) {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.3, y: middleY * 0.3 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      onClick={onClick}
      className={className}
    >
      {children}
    </motion.button>
  );
}

/* ─────────────────────────────────────────────
   Floating Label Input Component (Light Theme)
───────────────────────────────────────────── */
function FloatingInput({ type, id, label, isTextarea = false }) {
  return (
    <div className="relative z-0 w-full group">
      {isTextarea ? (
        <textarea
          name={id}
          id={id}
          className="block py-3 px-0 w-full text-lg text-[#0a0a0a] bg-transparent border-0 border-b-2 border-slate-200 appearance-none focus:outline-none focus:ring-0 focus:border-[#E31E24] peer resize-none transition-colors duration-300"
          placeholder=" "
          required
          rows="3"
        />
      ) : (
        <input
          type={type}
          name={id}
          id={id}
          className="block py-3 px-0 w-full text-lg text-[#0a0a0a] bg-transparent border-0 border-b-2 border-slate-200 appearance-none focus:outline-none focus:ring-0 focus:border-[#E31E24] peer transition-colors duration-300"
          placeholder=" "
          required
        />
      )}
      <label
        htmlFor={id}
        className="peer-focus:font-bold absolute text-sm text-slate-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#E31E24] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >
        {label}
      </label>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Main Contact Page
───────────────────────────────────────────── */
export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Framer Motion Variants for Staggered Form Entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.4 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <div className="w-full min-h-screen bg-[#fafafa] font-display flex flex-col">
      <Navbar />

      {/* ══════════════════════════════════════════
          HERO SECTION
      ══════════════════════════════════════════ */}
      <section className="relative w-full pt-44 pb-32 px-6 lg:px-12 flex flex-col items-center overflow-hidden">
        
        {/* Ambient blobs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#E31E24]/[0.04] rounded-full blur-[180px] -mr-40 -mt-40 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#0B4F8A]/[0.03] rounded-full blur-[160px] -ml-40 -mb-40 pointer-events-none" />

        {/* Blueprint Grid Watermark */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.2] animate-grid"
          style={{
            backgroundImage:
              'linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
          aria-hidden="true"
        />

        <div className="max-w-[1200px] w-full relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <span className="text-[#E31E24] font-bold text-[10px] tracking-[0.4em] uppercase bg-[#E31E24]/5 px-6 py-2 rounded-full border border-[#E31E24]/10 shadow-[0_0_20px_rgba(227,30,36,0.1)] inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#E31E24] animate-pulse" /> Reach Out
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-8xl lg:text-[100px] font-black tracking-tighter text-[#001F3F] leading-none mb-6 drop-shadow-sm"
          >
            LET'S <span className="text-[#E31E24]">CONNECT.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto font-light tracking-wide"
          >
            Connect with our engineering experts to discuss turnkey solutions, equipment upgrades, or lifecycle support.
          </motion.p>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CONTACT GRID (Overlapping Asymmetrical Design)
      ══════════════════════════════════════════ */}
      <section className="relative w-full pb-32 px-6 lg:px-12 bg-[#fafafa] z-20" style={{ perspective: "1500px" }}>
        <div className="max-w-[1300px] mx-auto grid lg:grid-cols-12 gap-8 lg:gap-12 relative">
          
          {/* LEFT: Solid Promac Navy Info Block with 3D Tilt */}
          <TiltCard className="lg:col-span-5 h-full z-10">
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="h-full bg-[#001F3F] rounded-[40px] shadow-[0_30px_80px_rgba(0,31,63,0.2)] p-10 md:p-14 text-white relative overflow-hidden flex flex-col justify-center"
            >
              {/* Architectural Image Texture Overlay */}
              <div 
                className="absolute inset-0 opacity-[0.08] pointer-events-none mix-blend-overlay"
                style={{ 
                  backgroundImage: "url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop')",
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }}
              />
              {/* Secondary geometric overlay for depth */}
              <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.8)_1px,transparent_1px)] bg-[length:24px_24px] pointer-events-none" />
              
              <div className="relative z-10 space-y-12">
                
                {/* Corporate Office */}
                <div className="group flex items-start gap-5">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-[#E31E24] group-hover:border-[#E31E24] transition-all duration-500 shadow-[0_0_20px_rgba(255,255,255,0.05)]">
                    <MapPin className="w-5 h-5 text-[#E31E24] group-hover:text-white transition-colors duration-500" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-white/50 mb-2">
                      Corporate Office
                    </h3>
                    <p className="text-lg md:text-xl font-light leading-relaxed text-white group-hover:text-gray-200 transition-colors">
                      Ground Floor, Door No:5, Plot No:33,<br />
                      Sapthagiri Nagar, Inner Ring Road,<br />
                      Puludivakkam, Chennai – 600 091,<br />
                      Tamil Nadu – INDIA.
                    </p>
                  </div>
                </div>

                {/* Direct Contact */}
                <div className="group flex items-start gap-5">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-[#E31E24] group-hover:border-[#E31E24] transition-all duration-500 shadow-[0_0_20px_rgba(255,255,255,0.05)]">
                    <Phone className="w-5 h-5 text-[#E31E24] group-hover:text-white transition-colors duration-500" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-white/50 mb-2">
                      Direct Line
                    </h3>
                    <div className="space-y-1">
                      <a href="tel:+919566340888" className="block text-2xl font-light text-white hover:text-[#3b82f6] transition-colors duration-300">
                        +91 95663 40888
                      </a>
                      <a href="tel:+919566340016" className="block text-2xl font-light text-white hover:text-[#3b82f6] transition-colors duration-300">
                        +91 95663 40016
                      </a>
                    </div>
                  </div>
                </div>

                {/* Digital Contact */}
                <div className="group flex items-start gap-5">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-[#E31E24] group-hover:border-[#E31E24] transition-all duration-500 shadow-[0_0_20px_rgba(255,255,255,0.05)]">
                    <Mail className="w-5 h-5 text-[#E31E24] group-hover:text-white transition-colors duration-500" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-white/50 mb-2">
                      Digital
                    </h3>
                    <a href="mailto:sales@promactech.com" className="block text-2xl font-light text-white hover:text-[#3b82f6] transition-colors duration-300">
                      sales@promactech.com
                    </a>
                  </div>
                </div>

              </div>
            </motion.div>
          </TiltCard>

          {/* RIGHT: Contact Form Card with 3D Tilt */}
          <TiltCard className="lg:col-span-7 h-full z-20">
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="h-full bg-white/80 backdrop-blur-3xl rounded-[40px] shadow-[0_40px_100px_rgba(0,0,0,0.08)] border border-white p-10 md:p-16 flex flex-col justify-center relative overflow-hidden"
            >
              {/* Subtle glass reflection inside form */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-transparent pointer-events-none" />

              <div className="relative z-10 mb-12">
                <h2 className="text-4xl font-black tracking-tighter text-[#001F3F] mb-3">
                  Send an Inquiry
                </h2>
                <p className="text-slate-500 font-light tracking-wide">
                  Kindly allow <span className="text-[#E31E24] font-medium">24-48 hours</span> for the team to follow up with you.
                </p>
              </div>

              <motion.form 
                variants={containerVariants}
                initial="hidden"
                animate="show"
                className="relative z-10 space-y-8" 
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="grid md:grid-cols-2 gap-8 md:gap-8">
                  <motion.div variants={itemVariants} className="w-full">
                    <FloatingInput type="text" id="firstName" label="First Name" />
                  </motion.div>
                  <motion.div variants={itemVariants} className="w-full">
                    <FloatingInput type="tel" id="mobileNumber" label="Mobile Number" />
                  </motion.div>
                </div>
                
                <motion.div variants={itemVariants} className="w-full">
                  <FloatingInput type="email" id="emailAddress" label="Email Address" />
                </motion.div>

                {/* Custom Styled Select Box */}
                <motion.div variants={itemVariants} className="relative z-0 w-full group">
                  <select
                    id="subject"
                    name="subject"
                    className="block py-3 px-0 w-full text-lg text-[#0a0a0a] bg-transparent border-0 border-b-2 border-slate-200 appearance-none focus:outline-none focus:ring-0 focus:border-[#E31E24] peer cursor-pointer transition-colors duration-300"
                    required
                    defaultValue=""
                  >
                    <option value="" disabled className="text-slate-400">Select Subject</option>
                    <option value="sales" className="text-[#0a0a0a]">Sales Inquiry</option>
                    <option value="support" className="text-[#0a0a0a]">Technical Support</option>
                    <option value="amc" className="text-[#0a0a0a]">AMC & Lifecycle Support</option>
                    <option value="other" className="text-[#0a0a0a]">Other</option>
                  </select>
                  <label
                    htmlFor="subject"
                    className="peer-focus:font-bold absolute text-sm text-slate-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#E31E24]"
                  >
                    Subject
                  </label>
                  <div className="absolute right-0 bottom-4 pointer-events-none text-slate-400 peer-focus:text-[#E31E24] transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </motion.div>

                <motion.div variants={itemVariants} className="w-full">
                  <FloatingInput isTextarea={true} id="message" label="Your Message" />
                </motion.div>

                <motion.div variants={itemVariants} className="pt-6">
                  <MagneticButton className="group relative w-full overflow-hidden rounded-full bg-[#E31E24] px-8 py-5 text-center font-black tracking-widest text-white uppercase transition-all hover:bg-[#c4151b] hover:shadow-[0_15px_40px_rgba(227,30,36,0.3)] focus:outline-none">
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      Submit Inquiry
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                    </span>
                  </MagneticButton>
                </motion.div>
              </motion.form>
            </motion.div>
          </TiltCard>
          
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FOOTER
      ══════════════════════════════════════════ */}
      <Footer />
    </div>
  );
}
