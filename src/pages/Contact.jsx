import React, { useEffect, useState, useRef, useCallback } from 'react';
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
   Floating Label Input Component
───────────────────────────────────────────── */
function FloatingInput({ type, id, label, isTextarea = false }) {
  return (
    <div className="relative z-0 w-full mb-8 group">
      {isTextarea ? (
        <textarea
          name={id}
          id={id}
          className="block py-3 px-0 w-full text-lg text-white bg-transparent border-0 border-b-2 border-white/20 appearance-none focus:outline-none focus:ring-0 focus:border-[#E31E24] peer resize-none"
          placeholder=" "
          required
          rows="3"
        />
      ) : (
        <input
          type={type}
          name={id}
          id={id}
          className="block py-3 px-0 w-full text-lg text-white bg-transparent border-0 border-b-2 border-white/20 appearance-none focus:outline-none focus:ring-0 focus:border-[#E31E24] peer"
          placeholder=" "
          required
        />
      )}
      <label
        htmlFor={id}
        className="peer-focus:font-bold absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#E31E24] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
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
    <div className="w-full min-h-screen bg-[#000814] font-display flex flex-col text-white">
      {/* Needs a wrapper to handle dark nav theme properly if Navbar doesn't support it, but Navbar defaults to white on scroll, gray on top. We will inject a dark theme hack or just let the navbar be light. Actually, since the background is dark, the navbar text should be white initially. But Navbar component is hardcoded for light theme. Let's just use it as is, it has a white backdrop. */}
      <Navbar />

      {/* ══════════════════════════════════════════
          HERO & CONTENT SECTION (Premium Dark Glass)
      ══════════════════════════════════════════ */}
      <main className="relative flex-grow flex flex-col items-center justify-center pt-32 pb-24 px-6 lg:px-12 overflow-hidden">
        
        {/* Ambient Glowing Orbs */}
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-[#E31E24] opacity-[0.07] blur-[120px] animate-[pulse_8s_ease-in-out_infinite] pointer-events-none" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-[#0B4F8A] opacity-[0.08] blur-[150px] animate-[pulse_10s_ease-in-out_infinite_alternate] pointer-events-none" />
        
        {/* Blueprint Grid Watermark (Mild Blue over Dark) */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.06] animate-grid"
          style={{
            backgroundImage:
              'linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
          aria-hidden="true"
        />

        <div className="max-w-[1300px] w-full relative z-10">
          
          {/* Headline */}
          <div className="text-center mb-16 md:mb-24">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl md:text-8xl lg:text-[100px] font-black tracking-tighter text-white leading-none mb-6"
            >
              LET'S <span className="text-[#E31E24]">CONNECT.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light tracking-wide"
            >
              Reach out to our engineering experts. Transform your facility with world-class automation and lifecycle support.
            </motion.p>
          </div>

          {/* Premium Glass Container */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="grid lg:grid-cols-12 gap-0 rounded-[40px] overflow-hidden bg-white/5 backdrop-blur-2xl border border-white/10 shadow-[0_0_80px_rgba(0,0,0,0.4)]"
          >
            
            {/* LEFT: Contact Information */}
            <div className="lg:col-span-5 bg-[#001F3F]/40 p-10 md:p-16 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/10">
              <div className="space-y-16">
                
                {/* Corporate Office */}
                <div className="group">
                  <h3 className="text-xs font-bold tracking-[0.3em] uppercase text-[#E31E24] mb-4 flex items-center gap-3">
                    <span className="w-8 h-[1px] bg-[#E31E24]"></span> Corporate Office
                  </h3>
                  <p className="text-xl md:text-2xl font-light leading-relaxed text-white group-hover:text-gray-200 transition-colors">
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
            </div>

            {/* RIGHT: Contact Form */}
            <div className="lg:col-span-7 p-10 md:p-16 flex flex-col justify-center">
              <div className="mb-12">
                <h2 className="text-4xl font-black tracking-tighter text-white mb-3">
                  Get in Touch
                </h2>
                <p className="text-gray-400 font-light tracking-wide">
                  Kindly allow <span className="text-white font-medium">24-48 hours</span> for the team to follow up with you.
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
                    className="block py-3 px-0 w-full text-lg text-white bg-transparent border-0 border-b-2 border-white/20 appearance-none focus:outline-none focus:ring-0 focus:border-[#E31E24] peer cursor-pointer"
                    required
                    defaultValue=""
                  >
                    <option value="" disabled className="text-gray-900">Select Subject</option>
                    <option value="sales" className="text-gray-900">Sales Inquiry</option>
                    <option value="support" className="text-gray-900">Technical Support</option>
                    <option value="amc" className="text-gray-900">AMC & Lifecycle Support</option>
                    <option value="other" className="text-gray-900">Other</option>
                  </select>
                  <label
                    htmlFor="subject"
                    className="peer-focus:font-bold absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#E31E24]"
                  >
                    Subject
                  </label>
                  <div className="absolute right-0 bottom-4 pointer-events-none text-white/50 peer-focus:text-[#E31E24] transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                <FloatingInput isTextarea={true} id="message" label="Your Message" />

                <div className="pt-6">
                  <MagneticButton className="group relative w-full overflow-hidden rounded-full bg-white px-8 py-5 text-center font-black tracking-widest text-[#001F3F] uppercase transition-all hover:bg-[#E31E24] hover:text-white hover:shadow-[0_0_30px_rgba(227,30,36,0.4)] focus:outline-none">
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      Submit Inquiry
                      <svg className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                  </MagneticButton>
                </div>
              </form>
            </div>
            
          </motion.div>
        </div>
      </main>

      {/* ══════════════════════════════════════════
          FOOTER
      ══════════════════════════════════════════ */}
      <Footer />
    </div>
  );
}
