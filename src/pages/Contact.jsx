import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

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
    <div className="relative z-0 w-full mb-8 group">
      {isTextarea ? (
        <textarea
          name={id}
          id={id}
          className="block py-3 px-0 w-full text-lg text-[#0a0a0a] bg-transparent border-0 border-b-2 border-slate-200 appearance-none focus:outline-none focus:ring-0 focus:border-[#E31E24] peer resize-none"
          placeholder=" "
          required
          rows="3"
        />
      ) : (
        <input
          type={type}
          name={id}
          id={id}
          className="block py-3 px-0 w-full text-lg text-[#0a0a0a] bg-transparent border-0 border-b-2 border-slate-200 appearance-none focus:outline-none focus:ring-0 focus:border-[#E31E24] peer"
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

  return (
    <div className="w-full min-h-screen bg-[#fafafa] font-display flex flex-col">
      <Navbar />

      {/* ══════════════════════════════════════════
          HERO SECTION
      ══════════════════════════════════════════ */}
      <section className="relative w-full pt-44 pb-32 px-6 lg:px-12 flex flex-col items-center overflow-hidden">
        
        {/* Ambient blobs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#E31E24]/[0.03] rounded-full blur-[180px] -mr-40 -mt-40 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#0B4F8A]/[0.02] rounded-full blur-[160px] -ml-40 -mb-40 pointer-events-none" />

        {/* Blueprint Grid Watermark */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.15] animate-grid"
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
            <span className="text-[#E31E24] font-bold text-[10px] tracking-[0.4em] uppercase bg-[#E31E24]/5 px-6 py-2 rounded-full border border-[#E31E24]/10">
              Reach Out
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-8xl lg:text-[100px] font-black tracking-tighter text-[#001F3F] leading-none mb-6"
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
      <section className="relative w-full pb-32 px-6 lg:px-12 bg-[#fafafa] z-20">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-12 gap-8 lg:gap-12 relative">
          
          {/* LEFT: Solid Promac Navy Info Block */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 bg-[#001F3F] rounded-[40px] shadow-[0_30px_80px_rgba(0,0,0,0.08)] p-10 md:p-16 text-white relative overflow-hidden flex flex-col justify-center"
          >
            {/* Subtle pattern over navy */}
            <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.8)_1px,transparent_1px)] bg-[length:20px_20px] pointer-events-none" />
            
            <div className="relative z-10 space-y-16">
              
              {/* Corporate Office */}
              <div className="group">
                <h3 className="text-xs font-bold tracking-[0.3em] uppercase text-[#E31E24] mb-4 flex items-center gap-3">
                  <span className="w-8 h-[1px] bg-[#E31E24]"></span> Corporate Office
                </h3>
                <p className="text-xl md:text-2xl font-light leading-relaxed text-white">
                  Ground Floor, Door No:5, Plot No:33,<br />
                  Sapthagiri Nagar, Inner Ring Road,<br />
                  Puludivakkam, Chennai – 600 091,<br />
                  Tamil Nadu – INDIA.
                </p>
              </div>

              {/* Direct Contact */}
              <div className="group">
                <h3 className="text-xs font-bold tracking-[0.3em] uppercase text-[#E31E24] mb-4 flex items-center gap-3">
                  <span className="w-8 h-[1px] bg-[#E31E24]"></span> Direct Line
                </h3>
                <div className="space-y-3">
                  <a href="tel:+919566340888" className="block text-3xl font-light text-white hover:text-[#3b82f6] transition-colors duration-300">
                    +91 95663 40888
                  </a>
                  <a href="tel:+919566340016" className="block text-3xl font-light text-white hover:text-[#3b82f6] transition-colors duration-300">
                    +91 95663 40016
                  </a>
                </div>
              </div>

              {/* Digital Contact */}
              <div className="group">
                <h3 className="text-xs font-bold tracking-[0.3em] uppercase text-[#E31E24] mb-4 flex items-center gap-3">
                  <span className="w-8 h-[1px] bg-[#E31E24]"></span> Digital
                </h3>
                <a href="mailto:sales@promactech.com" className="text-2xl font-light text-white hover:text-[#3b82f6] transition-colors duration-300">
                  sales@promactech.com
                </a>
              </div>

            </div>
          </motion.div>

          {/* RIGHT: Contact Form Card */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 bg-white rounded-[40px] shadow-[0_30px_80px_rgba(0,0,0,0.06)] border border-slate-100 p-10 md:p-16 flex flex-col justify-center"
          >
            <div className="mb-12">
              <h2 className="text-4xl font-black tracking-tighter text-[#001F3F] mb-3">
                Get in Touch
              </h2>
              <p className="text-slate-500 font-light tracking-wide">
                Kindly allow <span className="text-slate-800 font-medium">24-48 hours</span> for the team to follow up with you.
              </p>
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                <FloatingInput type="text" id="firstName" label="First Name" />
                <FloatingInput type="tel" id="mobileNumber" label="Mobile Number" />
              </div>
              
              <FloatingInput type="email" id="emailAddress" label="Email Address" />

              {/* Custom Styled Select Box */}
              <div className="relative z-0 w-full mb-8 group">
                <select
                  id="subject"
                  name="subject"
                  className="block py-3 px-0 w-full text-lg text-[#0a0a0a] bg-transparent border-0 border-b-2 border-slate-200 appearance-none focus:outline-none focus:ring-0 focus:border-[#E31E24] peer cursor-pointer"
                  required
                  defaultValue=""
                >
                  <option value="" disabled className="text-slate-500">Select Subject</option>
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
              </div>

              <FloatingInput isTextarea={true} id="message" label="Your Message" />

              <div className="pt-6">
                <MagneticButton className="group relative w-full overflow-hidden rounded-full bg-[#E31E24] px-8 py-5 text-center font-black tracking-widest text-white uppercase transition-all hover:bg-[#c4151b] hover:shadow-[0_10px_30px_rgba(227,30,36,0.2)] focus:outline-none">
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    Submit Inquiry
                    <svg className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </MagneticButton>
              </div>
            </form>
          </motion.div>
          
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FOOTER
      ══════════════════════════════════════════ */}
      <Footer />
    </div>
  );
}
