import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BrandsHero from '../components/BrandsHero';


import sealionLogo from '../assets/brands/sealion.png';
import maestrelliLogo from '../assets/brands/maestrelli.png';
import maxipressLogo from '../assets/brands/maxipress.png';
import kannegiesserLogo from '../assets/brands/kannegiesser.png';
import imesaLogo from '../assets/brands/imesa.png';
import sealionTextLogo from '../assets/brands/sealion-text.png';
import maestrelliTextLogo from '../assets/brands/maestrelli-text.png';
import imesaTextLogo from '../assets/brands/imesa-text.png';
import maxipressTextLogo from '../assets/brands/maxipress-text.png';

import engineeringBg from '../assets/engineering-brands-bg.jpg';


/* ─────────────────────────────────────────────
   Brand catalog data
   logo → brand logo (white bg, mix-blend-multiply)
───────────────────────────────────────────── */
const BRANDS = [
  {
    id: 'kannegiesser',
    name: 'KANNEGIESSER',
    nameImg: <img src={kannegiesserLogo} alt="KANNEGIESSER" className="w-[180px] md:w-[280px] h-auto object-contain object-left mb-6 mix-blend-multiply" />,
    origin: 'Germany',
    tagline: 'End-to-End Laundry Automation',
    logo: kannegiesserLogo,
    desc: 'Founded in 1948, Kannegiesser has evolved into the finishing specialist for modern laundries, delivering complete end-to-end laundry automation systems with decades of engineering expertise.',
    products: ['Washing Technology', 'Flatwork', 'Data Information Systems'],
  },
  {
    id: 'sea-lion',
    name: 'SEA-LION',
    nameImg: <img src={sealionTextLogo} alt="SEA-LION" className="w-[180px] md:w-[280px] h-auto object-contain object-left mb-6 mix-blend-multiply opacity-90" />,
    origin: 'China',
    tagline: 'Industrial Laundry Machines',
    logo: sealionLogo,
    desc: 'Established in 1969, Sea-lion is the oldest manufacturer of industrial laundry machines in China, gaining a wealth of experience on R&D and manufacture with laundry machines.',
    products: ['Tunnel Washer Systems', 'Washer Extractors', 'Barrier Washers', 'Tumble Dryers', 'Flatwork Ironers'],
  },
  {
    id: 'imesa',
    name: 'IMESA',
    nameImg: <img src={imesaTextLogo} alt="IMESA" className="w-[180px] md:w-[280px] h-auto object-contain object-left mb-6 mix-blend-multiply opacity-80" />,
    origin: 'Italy',
    tagline: 'Custom Solutions and Made in Italy',
    logo: imesaLogo,
    desc: 'With 50 years of history, IMESA is a leading Italian manufacturer whose core vocation is washing, drying, and ironing of all types of fabric, designing sustainable laundry solutions that simplify people\'s lives.',
    products: ['Washing Machines', 'Dryers'],
  },
  {
    id: 'maestrelli',
    name: 'MAESTRELLI',
    nameImg: <img src={maestrelliTextLogo} alt="MAESTRELLI" className="w-[180px] md:w-[280px] h-auto object-contain object-left mb-6 mix-blend-multiply" />,
    origin: 'Italy',
    tagline: 'Dry Cleaning Systems',
    logo: maestrelliLogo,
    desc: 'Born in 1935, Maestrelli is a major and reliable Italian producer in the dry-cleaning sector, providing a wide range of products from dry-cleaning machines to washing machines and dryers.',
    products: ['Dry-Cleaning Machines', 'Washing Machines', 'Dryers', 'Ironing Tables'],
  },
  {
    id: 'maxipress',
    name: 'MAXIPRESS',
    nameImg: <img src={maxipressTextLogo} alt="MAXIPRESS" className="w-[180px] md:w-[280px] h-auto object-contain object-left mb-6 mix-blend-multiply" />,
    origin: 'Spain',
    tagline: 'Garment Finishing Equipment',
    logo: maxipressLogo,
    desc: 'MaxiPress delivers advanced finishing and pressing equipment designed to achieve superior garment presentation, operational efficiency, and consistent quality across professional operations.',
    products: ['Utility Presses', 'Collar & Cuff Presses', 'Form Finishers', 'Vacuum Boards', 'Spotting Boards'],
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

function MagneticButton({ children, href, to, className }) {
  const ref = useRef(null);
  const navigate = useNavigate();
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

  const handleClick = (e) => {
    if (to) {
      e.preventDefault();
      navigate(to);
      window.scrollTo(0, 0);
    }
  };

  return (
    <motion.a
      ref={ref}
      href={href || to}
      onClick={handleClick}
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
          {brand.nameImg}

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
              to={`/brands/${brand.id}`}
              className="group/btn inline-flex items-center gap-4 text-[10px] font-bold tracking-[0.2em] uppercase text-[#E31E24] border border-[#E31E24] px-7 py-3.5 rounded-md transition-colors duration-300 hover:bg-[#E31E24] hover:text-white hover:shadow-[0_0_15px_rgba(227,30,36,0.4)] bg-white cursor-pointer"
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
      
      <Navbar />

      {/* ── Hero Banner ── */}
      <BrandsHero />


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
      

      <Footer />
    </div>
  );
}
