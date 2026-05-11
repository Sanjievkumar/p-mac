import React from 'react';
import { motion } from 'framer-motion';

// Image paths corrected to match your /public/Brands/ directory
const IMAGES = {
  washer: '/Brands/sea-lion brand/WASHER-EXTRACTOR.png',
  logos: {
    seaLion:      '/Brands/sea-lion brand/sea-lion-logo.png',
    kannegiesser: '/Brands/Kannegiesser brand/Kannegiesser_Logo.png',
    maestrelli:   '/Brands/MAESTRELLI brand/Maestrelli_Logo.png',
    maxipress:    '/Brands/maxipress brand/Maxipress_Logo.png',
  }
};

const brandList = [
  { logo: IMAGES.logos.seaLion,      name: 'Sea-Lion' },
  { logo: IMAGES.logos.kannegiesser, name: 'Kannegiesser' },
  { logo: IMAGES.logos.maestrelli,   name: 'Maestrelli' },
  { logo: IMAGES.logos.maxipress,    name: 'Maxipress' },
];

// Generate 16 bubbles to create the "Cloud" density seen in your design
const bubbles = Array.from({ length: 16 }).map((_, i) => ({
  id: i,
  brand: brandList[i % 4],
  size: Math.floor(Math.random() * (140 - 80 + 1) + 80),
  x: Math.random() * 100,
  y: Math.random() * 100,
  duration: 4 + Math.random() * 6,
  delay: Math.random() * 2,
}));

const TrustedBrands = () => {
  return (
    <section className="relative w-full bg-white py-32 px-4 md:px-16 overflow-hidden min-h-[900px]">

      {/* HEADER SECTION */}
      <div className="text-center mb-16 relative z-30">
        <motion.span
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          className="text-[#E31E24] font-bold text-sm tracking-[0.3em] uppercase block mb-3"
        >
          OUR CLIENTS
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          className="text-[#001F3F] text-5xl md:text-6xl font-black tracking-tighter mb-6"
        >
          Trusted by Leading Brands
        </motion.h2>
        <div className="w-12 h-1 bg-[#E31E24] mx-auto mb-6" />
        <p className="text-slate-500 text-lg max-w-2xl mx-auto font-medium leading-relaxed">
          Proud to be the laundry technology partner for India's most respected brands and institutions.
        </p>
      </div>

      <div className="relative flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto h-[600px]">

        {/* MACHINE IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-20 w-full md:w-1/2 flex justify-start"
        >
          <img
            src={IMAGES.washer}
            alt="Promac Industrial Washer"
            className="w-full max-w-[550px] object-contain drop-shadow-2xl"
          />
          {/* Floor Shadow */}
          <div className="absolute -bottom-10 left-10 w-3/4 h-10 bg-black/5 blur-3xl rounded-full" />
        </motion.div>

        {/* BUBBLE CLOUD */}
        <div className="absolute top-0 right-0 w-full md:w-3/4 h-full z-10 pointer-events-none">
          {bubbles.map((bubble) => (
            <motion.div
              key={bubble.id}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              animate={{
                y: [0, -30, 0],
                x: [0, 15, 0],
                rotate: [0, 5, 0]
              }}
              transition={{
                duration: bubble.duration,
                repeat: Infinity,
                delay: bubble.delay,
                ease: "easeInOut"
              }}
              style={{
                position: 'absolute',
                left: `${bubble.x}%`,
                top: `${bubble.y}%`,
                width: `${bubble.size}px`,
                height: `${bubble.size}px`,
                background: 'rgba(255, 255, 255, 0.15)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                border: '1px solid rgba(255, 255, 255, 0.4)',
                boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.1), inset 0 0 20px rgba(255,255,255,0.2)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                pointerEvents: 'auto',
              }}
              whileHover={{ scale: 1.1, backgroundColor: 'rgba(255, 255, 255, 0.25)' }}
            >
              <img
                src={bubble.brand.logo}
                alt={bubble.brand.name}
                className="w-3/5 h-3/5 object-contain opacity-80"
                onError={e => { e.target.style.display = 'none'; }}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* STATS FLOATING CARD */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.3 }}
        className="relative z-40 mt-12"
      >
        <div className="bg-white rounded-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-50 py-10 px-6 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <StatItem icon="⭐" value="20+"       label="Years of Industry Experience" />
          <StatItem icon="⚙️" value="1000+"     label="Installations Completed" />
          <StatItem icon="📍" value="PAN INDIA" label="Presence" />
          <StatItem icon="🤝" value="TRUSTED"   label="by Leading Brands" />
        </div>
      </motion.div>
    </section>
  );
};

const StatItem = ({ icon, value, label }) => (
  <div className="flex flex-col items-center text-center space-y-2 border-r border-slate-100 last:border-0 px-2">
    <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center text-2xl mb-2">
      <span className="text-[#E31E24]">{icon}</span>
    </div>
    <h3 className="text-3xl font-black text-[#001F3F] tracking-tighter">{value}</h3>
    <p className="text-xs text-slate-500 font-bold uppercase tracking-wide">{label}</p>
  </div>
);

export default TrustedBrands;
