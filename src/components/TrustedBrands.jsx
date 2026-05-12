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

// Fixed cloud positions to ensure a structured yet organic feel
const cloudPositions = [
  { x: 55, y: 15, size: 120, delay: 0.1 },
  { x: 75, y: 20, size: 100, delay: 0.5 },
  { x: 65, y: 35, size: 140, delay: 0.3 },
  { x: 85, y: 40, size: 110, delay: 0.7 },
  { x: 50, y: 45, size: 90,  delay: 0.2 },
  { x: 70, y: 55, size: 130, delay: 0.4 },
  { x: 90, y: 60, size: 100, delay: 0.8 },
  { x: 60, y: 70, size: 120, delay: 0.6 },
  { x: 80, y: 75, size: 95,  delay: 0.9 },
  { x: 55, y: 85, size: 110, delay: 0.2 },
  { x: 75, y: 10, size: 85,  delay: 0.5 },
  { x: 95, y: 25, size: 105, delay: 0.3 },
  { x: 45, y: 30, size: 90,  delay: 0.7 },
  { x: 80, y: 50, size: 115, delay: 0.1 },
  { x: 65, y: 15, size: 100, delay: 0.4 },
];

const bubbles = cloudPositions.map((pos, i) => ({
  id: i,
  brand: brandList[i % 4],
  ...pos,
  duration: 5 + (i % 3) * 2,
}));

const TrustedBrands = () => {
  return (
    <section className="relative w-full bg-[#fafafa] py-32 px-4 md:px-16 overflow-hidden min-h-[900px] font-display">
      
      {/* BACKGROUND DECOR */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#D42B2B]/5 rounded-full blur-[140px] -mr-40 -mt-40" />

      {/* HEADER SECTION */}
      <div className="text-center mb-24 relative z-30">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-3 mb-6"
        >
          <div className="w-8 h-[2px] bg-[#D42B2B]" />
          <span className="text-[#D42B2B] font-bold text-[10px] tracking-[0.4em] uppercase">
            ESTABLISHED PARTNERSHIPS
          </span>
          <div className="w-8 h-[2px] bg-[#D42B2B]" />
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-[#0a0a0a] text-5xl md:text-7xl font-extrabold tracking-tightest mb-8 uppercase"
        >
          Trusted by <span className="text-[#D42B2B]">Leading Brands.</span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-gray-500 text-xl max-w-2xl mx-auto font-medium leading-relaxed italic"
        >
          "Defining excellence through strategic collaborations with the world's most innovative laundry manufacturers."
        </motion.p>
      </div>

      <div className="relative flex flex-col md:flex-row items-center justify-between max-w-[1400px] mx-auto h-[700px]">

        {/* MACHINE IMAGE CONTAINER */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-20 w-full md:w-1/2 flex justify-start"
        >
          <div className="relative group">
            <motion.img
              src={IMAGES.washer}
              alt="Promac Industrial Washer"
              className="w-full max-w-[600px] object-contain drop-shadow-[0_35px_60px_rgba(0,0,0,0.15)] relative z-10"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            {/* Realistic Contact Shadow */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-4/5 h-12 bg-black/10 blur-2xl rounded-[100%] scale-x-110" />
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/5 h-6 bg-black/20 blur-lg rounded-[100%]" />
          </div>
        </motion.div>

        {/* BUBBLE CLOUD CONTAINER */}
        <div className="absolute top-0 right-0 w-full h-full z-10 pointer-events-none">
          {bubbles.map((bubble) => (
            <motion.div
              key={bubble.id}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              animate={{
                y: [0, -25, 0],
                x: [0, 15, 0],
                rotate: [0, 8, 0]
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
                background: 'rgba(255, 255, 255, 0.4)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.6)',
                boxShadow: '0 10px 40px -10px rgba(0,0,0,0.1), inset 0 0 30px rgba(255,255,255,0.5)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                pointerEvents: 'auto',
              }}
              whileHover={{ 
                scale: 1.15, 
                backgroundColor: 'rgba(255, 255, 255, 0.7)',
                borderColor: '#D42B2B',
                transition: { duration: 0.3 }
              }}
            >
              <img
                src={bubble.brand.logo}
                alt={bubble.brand.name}
                className="w-1/2 h-1/2 object-contain opacity-90 transition-all group-hover:opacity-100"
                onError={e => { e.target.style.display = 'none'; }}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* STATS FLOATING BAR */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="relative z-40 mt-12 max-w-6xl mx-auto"
      >
        <div className="bg-white/80 backdrop-blur-xl rounded-[40px] shadow-2xl border border-white/50 py-12 px-10 grid grid-cols-2 md:grid-cols-4 gap-12">
          <StatItem icon="🏆" value="20+"       label="Years of Industry Presence" />
          <StatItem icon="⚡" value="1000+"     label="Successful Installations" />
          <StatItem icon="🌍" value="PAN INDIA" label="Service Network" />
          <StatItem icon="💎" value="TRUSTED"   label="By Global Giants" />
        </div>
      </motion.div>
    </section>
  );
};

const StatItem = ({ icon, value, label }) => (
  <div className="flex flex-col items-center text-center group">
    <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center text-3xl mb-4 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110 shadow-sm">
      <span className="text-[#D42B2B]">{icon}</span>
    </div>
    <h3 className="text-4xl font-extrabold text-[#0a0a0a] tracking-tightest mb-1 group-hover:text-[#D42B2B] transition-colors">{value}</h3>
    <p className="text-[9px] text-gray-500 font-bold uppercase tracking-[0.2em]">{label}</p>
  </div>
);

export default TrustedBrands;
