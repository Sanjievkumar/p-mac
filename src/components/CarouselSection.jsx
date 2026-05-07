import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const MACHINES = [
  { 
    id: 1, 
    label: 'SEA-LION', 
    img: '/Brands/sea-lion brand/WASHER-EXTRACTOR.png', 
    logo: '/Brands/sea-lion brand/sea-lion-logo.png' 
  },
  { 
    id: 2, 
    label: 'KANNEGIESSER', 
    img: '/Brands/Kannegiesser brand/301868_Powertrans_SBW_11_persp04.jpg', 
    logo: '/Brands/Kannegiesser brand/Kannegiesser_Logo.jpg' 
  },
  { 
    id: 3, 
    label: 'MAESTRELLI', 
    img: '/Brands/MAESTRELLI brand/DREAMCLEAN MULTISOLVENT SOFT MOUNT.png', 
    logo: '/Brands/MAESTRELLI brand/Maestrelli_Logo.png' 
  },
  { 
    id: 4, 
    label: 'MAXIPRESS', 
    img: '/Brands/maxipress brand/MPCAFF-FORM FINISHER.png', 
    logo: '/Brands/maxipress brand/Maxipress_Logo.png' 
  },
];

export default function CarouselSection() {
  // Default View: Center = Model NO 1 (SEA-LION) = index 0
  const [activeIndex, setActiveIndex] = useState(0); 
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  const goLeft = () => {
    setActiveIndex((prev) => (prev - 1 + MACHINES.length) % MACHINES.length);
  };

  const goRight = () => {
    setActiveIndex((prev) => (prev + 1) % MACHINES.length);
  };

  // Calculate position properties based on distance from active center
  const getItemStyle = (index) => {
    const total = MACHINES.length;
    let diff = index - activeIndex;
    
    // Circular logic so the array loops visually
    if (diff > Math.floor(total / 2)) diff -= total;
    if (diff < -Math.floor(total / 2)) diff += total;

    const absDiff = Math.abs(diff);
    const isCenter = diff === 0;

    let scale, opacity, zIndex, xOffset, blur;

    if (isCenter) {
      // Center Focus: Active product must be scale-150 with z-index: 50
      scale = 1.5;
      opacity = 1;
      zIndex = 50;
      xOffset = 0;
      blur = '0px';
    } else if (absDiff === 1) {
      // Adjacent Side Products
      scale = 0.75;
      opacity = 0.4;
      zIndex = 10;
      xOffset = diff * 220; 
      blur = '4px'; // blur-sm
    } else {
      // Far Outer Products (for seamless looping if length increases, hidden here)
      scale = 0.5;
      opacity = 0;
      zIndex = 0;
      xOffset = diff * 250;
      blur = '8px';
    }

    return { scale, opacity, zIndex, x: xOffset, filter: `blur(${blur})` };
  };

  return (
    <section ref={ref} className="relative w-full bg-[#f8f9fa] overflow-hidden pb-12 font-sans border-y border-gray-200">
      
      {/* ── 3D Cinematic Carousel Area ── */}
      <div className="relative max-w-[1200px] mx-auto pt-24 pb-8">
        {/* Carousel constraint box */}
        <div className="relative w-full h-[450px] md:h-[500px] flex items-end justify-center pb-10">

          {/* ── Navigation Arrow — LEFT ── */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={goLeft}
            className="absolute left-4 md:left-10 bottom-[140px] z-50 w-12 h-12 bg-white border-[2px] border-[#e31e24] rounded-full flex items-center justify-center hover:bg-[#e31e24] hover:text-white transition-colors duration-200 group shadow-[0_10px_20px_rgba(227,30,36,0.15)]"
            aria-label="Previous machine"
          >
            <svg className="w-5 h-5 text-[#e31e24] group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </motion.button>

          {/* ── Navigation Arrow — RIGHT ── */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={goRight}
            className="absolute right-4 md:right-10 bottom-[140px] z-50 w-12 h-12 bg-white border-[2px] border-[#e31e24] rounded-full flex items-center justify-center hover:bg-[#e31e24] hover:text-white transition-colors duration-200 group shadow-[0_10px_20px_rgba(227,30,36,0.15)]"
            aria-label="Next machine"
          >
            <svg className="w-5 h-5 text-[#e31e24] group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>

          {/* ── Product Items ── */}
          {MACHINES.map((machine, index) => {
            const style = getItemStyle(index);
            const isCenter = index === activeIndex;

            return (
              <motion.div
                key={machine.id}
                animate={{
                  x: style.x,
                  scale: style.scale,
                  opacity: style.opacity,
                  filter: style.filter
                }}
                // Spring physics drive the cross-fade and movement simultaneously
                transition={{ type: 'spring', stiffness: 150, damping: 25, mass: 0.8 }}
                onClick={() => setActiveIndex(index)}
                className="absolute cursor-pointer flex flex-col items-center justify-end"
                style={{
                  zIndex: style.zIndex,
                  bottom: '20px',
                  width: '240px',
                }}
              >
                {/* 
                  Visual Logic: Brand Logo 
                  Fades and scales simultaneously with the entire container.
                */}
                <div className="h-10 md:h-12 w-full mb-8 flex justify-center items-end px-4 drop-shadow-md">
                  <img 
                    src={machine.logo} 
                    alt={`${machine.label} Logo`} 
                    className="max-h-full max-w-full object-contain mix-blend-multiply"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      if (e.target.nextElementSibling) {
                        e.target.nextElementSibling.style.display = 'block';
                      }
                    }}
                  />
                  <h2 
                    className="text-xl md:text-2xl font-extrabold text-[#0b1b36] tracking-widest uppercase font-display" 
                    style={{ display: 'none' }}
                  >
                    {machine.label}
                  </h2>
                </div>

                {/* 
                  Visual Logic: Product Image 
                  Fades and scales simultaneously with the entire container.
                */}
                <div className="w-[200px] h-[220px] flex justify-center items-end relative">
                  <img src={machine.img} alt={machine.label} className="max-w-full max-h-full object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.2)] mix-blend-multiply" />
                </div>
                
                {/* 3D Floor Shadow under the machine */}
                <div
                  className={`rounded-[50%] bg-black/20 mt-4 transition-all duration-500 ${
                    isCenter
                      ? 'w-56 h-6 blur-md'
                      : 'w-24 h-3 blur-sm'
                  }`}
                />
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ── "Our Best Sellers" Typography Block ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-[700px] mx-auto px-6 pt-4"
      >
        <div className="w-full h-[2px] bg-slate-200 mb-6" />
        <h2 className="text-center text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0b1b36] font-display tracking-tighter italic">
          -Our Best Sellers.-
        </h2>
        <div className="w-full h-[2px] bg-slate-200 mt-6" />
      </motion.div>
    </section>
  );
}
