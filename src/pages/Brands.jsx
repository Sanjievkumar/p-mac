import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import GlobeSection from '../components/GlobeSection';

import sealionLogo from '../assets/brands/sealion.png';
import maestrelliLogo from '../assets/brands/maestrelli.png';
import maxipressLogo from '../assets/brands/maxipress.png';
import kannegiesserLogo from '../assets/brands/kannegiesser.png';

const customFontStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800;900&family=Oswald:wght@700&family=Roboto:wght@900&display=swap');
  
  .font-kannegiesser { font-family: 'Roboto', sans-serif; }
  .font-sealion { font-family: 'Oswald', sans-serif; }
  .font-maestrelli { font-family: 'Montserrat', sans-serif; }
  .font-maxipress { font-family: 'Montserrat', sans-serif; }
`;

/* ─────────────────────────────────────────────
   Brand catalog data
   logo → brand logo (white bg, mix-blend-multiply)
───────────────────────────────────────────── */
const BRANDS = [
  {
    id: 'kannegiesser',
    name: 'KANNEGIESSER',
    customTitle: (
      <h2 className="text-4xl md:text-5xl font-kannegiesser font-black text-[#1A1A1A] tracking-tighter mb-6 leading-none">
        KANNEGIESSER
      </h2>
    ),
    origin: 'Germany',
    tagline: 'End-to-End Laundry Automation',
    logo: kannegiesserLogo,
    desc: 'Kannegiesser has evolved from a machine manufacturer into a global technology partner for industrial laundries, delivering complete end-to-end laundry automation systems with decades of engineering expertise.',
    products: ['Tunnel Washers', 'Powertrans Systems', 'Flatwork Ironers', 'Automated Sorting'],
  },
  {
    id: 'sea-lion',
    name: 'SEA-LION',
    customTitle: (
      <h2 className="text-4xl md:text-6xl font-sealion font-bold text-[#00509E] tracking-normal mb-6 leading-none">
        SEA-LION
      </h2>
    ),
    origin: 'China',
    tagline: 'Industrial Laundry Machines',
    logo: sealionLogo,
    desc: 'SEA-LION is a globally established manufacturer of industrial laundry machines, offering reliable, energy-efficient, and automation-ready solutions.',
    products: ['Washer Extractors', 'Tumble Dryers', 'Flatwork Ironers', 'Barrier Washers'],
  },
  {
    id: 'maestrelli',
    name: 'MAESTRELLI',
    customTitle: (
      <h2 className="text-4xl md:text-[42px] font-maestrelli font-extrabold text-[#003B73] tracking-[0.18em] mb-6 leading-none">
        MAESTRELLI
      </h2>
    ),
    origin: 'Italy',
    tagline: 'Dry Cleaning Systems',
    logo: maestrelliLogo,
    desc: 'Designed for reliability, fabric protection, and operational efficiency, Maestrelli systems help commercial laundries and dry cleaners achieve consistent cleaning quality with reduced solvent usage.',
    products: ['Multisolvent Dry Cleaning', 'Perc Machines', 'Soft-Mount Systems'],
  },
  {
    id: 'maxipress',
    name: 'MAXIPRESS',
    customTitle: (
      <div className="mb-6 flex flex-col justify-end">
        <span className="font-maxipress text-[#808285] text-[10px] md:text-[11px] font-bold tracking-[0.25em] mb-1.5 leading-none">
          MAXIMUM MAXIBILITY
        </span>
        <h2 className="text-4xl md:text-[52px] font-maxipress font-black text-[#F26522] tracking-tight leading-none">
          MAXI-PRESS
        </h2>
      </div>
    ),
    origin: 'Spain',
    tagline: 'Garment Finishing Equipment',
    logo: maxipressLogo,
    desc: 'Engineered for high-volume commercial laundries and professional garment care facilities, MAXIPRESS solutions deliver consistent finishing quality, operational reliability, and long service life.',
    products: ['Form Finishers', 'Utility Presses', 'Steam Vacuum Boards', 'Collar & Cuff Presses'],
  }
];

/* ─── Reusable reveal helpers ──────────────── */
function FadeUp({ children, delay = 0, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function MagneticWrapper({ children, className }) {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function MagneticButton({ children, href, className }) {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={className}
    >
      {children}
    </motion.a>
  );
}

/* ─── Single brand row ──────────────────────── */
/* ─── Single brand row ──────────────────────── */
function BrandRow({ brand, reverse }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -10, boxShadow: "0 25px 50px rgba(0,0,0,0.1)" }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      id={brand.id}
      className="bg-white/60 border border-slate-100 rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.04)] group mb-16 relative z-10"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 items-stretch min-h-[400px]">
        
        {/* Logo Column */}
        <div className={`order-1 ${reverse ? 'md:order-2' : 'md:order-1'} p-8 md:p-12 flex items-center justify-center bg-white/40`}>
          <MagneticWrapper className="relative w-[240px] h-[240px] md:w-[320px] md:h-[320px] rounded-full bg-white flex items-center justify-center shadow-xl border border-gray-100 cursor-pointer">
            <motion.img
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              src={brand.logo}
              alt={brand.name}
              className="max-h-[140px] max-w-[65%] object-contain mix-blend-multiply"
            />
          </MagneticWrapper>
        </div>

        {/* Text Column */}
        <div className={`order-2 ${reverse ? 'md:order-1' : 'md:order-2'} p-8 md:p-14 flex flex-col justify-center bg-transparent`}>
          {/* Origin badge */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-6 h-[1px] bg-[#E31E24]" />
            <span className="text-[#E31E24] text-[9px] font-bold tracking-[0.4em] uppercase">
              {brand.origin} — {brand.tagline}
            </span>
          </div>

          {/* Logo Physically Cropped to Text Only */}
          {/* Custom Styled Brand Name (HTML/CSS Recreations) */}
          {brand.customTitle}

          {/* Description */}
          <p className="text-slate-600 text-[15px] leading-relaxed mb-8 max-w-[420px]">
            {brand.desc}
          </p>

          {/* Product chips */}
          <div className="flex flex-wrap gap-2 mb-10">
            {brand.products.map((p) => (
              <span
                key={p}
                className="text-[10px] font-bold tracking-widest uppercase text-[#001F3F] bg-white border border-slate-200 px-3 py-1.5 rounded-md shadow-sm"
              >
                {p}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div>
            <MagneticButton
              href={`#${brand.id}`}
              className="group/btn inline-flex items-center gap-4 text-[10px] font-bold tracking-[0.2em] uppercase text-[#E31E24] border border-[#E31E24] px-7 py-3.5 rounded-md transition-colors duration-300 hover:bg-[#E31E24] hover:text-white hover:shadow-[0_0_15px_rgba(227,30,36,0.4)] bg-white"
            >
              VIEW PRODUCTS
              <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center transition-transform duration-300 group-hover/btn:translate-x-1">
                <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </MagneticButton>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Page ─────────────────────────────────── */
export default function Brands() {
  return (
    <div className="w-full min-h-screen bg-white font-display flex flex-col">
      <style>{customFontStyles}</style>
      <Navbar />

      {/* ── Hero Banner ── */}
      <section className="relative pt-40 pb-20 px-6 bg-[#001F3F] overflow-hidden text-center">
        {/* Animated Blueprint Grid */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
          animate={{ 
            backgroundPosition: ['0px 0px', '48px 48px'],
            opacity: [0.03, 0.09, 0.03]
          }}
          transition={{ 
            backgroundPosition: { repeat: Infinity, duration: 8, ease: 'linear' },
            opacity: { repeat: Infinity, duration: 4, ease: 'easeInOut' }
          }}
        />
        {/* Ambient glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#E31E24]/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-[800px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-3 mb-6 animate-pulse"
          >
            <div className="w-6 h-[1px] bg-[#E31E24]" />
            <p className="text-[#E31E24] text-[10px] font-bold tracking-[0.4em] uppercase">
              Strategic Partners
            </p>
            <div className="w-6 h-[1px] bg-[#E31E24]" />
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-6 leading-[0.95] overflow-hidden flex flex-col items-center">
            <motion.span
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", bounce: 0.4, duration: 1 }}
              className="inline-block"
            >
              World-Class
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, type: "spring", bounce: 0.6, duration: 1 }}
              className="text-[#E31E24] inline-block pb-2"
            >
              Brand Partners.
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="text-slate-300 text-lg max-w-lg mx-auto leading-relaxed"
          >
            Promac is the authorised Indian representative for globally recognised industrial laundry technology manufacturers.
          </motion.p>
        </div>
      </section>

      {/* ── Brand Catalog ── */}
      <section className="relative w-full py-24 bg-gradient-to-b from-white to-slate-100 overflow-hidden">
        {/* Faint technical grid background */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {BRANDS.map((brand, idx) => (
            <BrandRow key={brand.id} brand={brand} reverse={idx % 2 !== 0} />
          ))}
        </div>
      </section>

      {/* ── Smooth Transition to Globe ── */}
      <div className="w-full h-32 bg-gradient-to-b from-slate-100 to-[#000814]" />

      {/* ── 3D Globe ── */}
      <GlobeSection />

      <Footer />
    </div>
  );
}
