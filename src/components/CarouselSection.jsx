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
  const [activeIndex, setActiveIndex] = useState(0); 
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  const goLeft  = () => setActiveIndex((p) => (p - 1 + MACHINES.length) % MACHINES.length);
  const goRight = () => setActiveIndex((p) => (p + 1) % MACHINES.length);

  /* ─── Layout constants ────────────────────────────────────────
     CARD_W       : base card width (px)
     CENTER_SCALE : scale of the active centre card
     SIDE_SCALE   : scale of the adjacent cards
     SIDE_OFFSET  : horizontal distance from centre (px)
                    must be large enough so side cards don't
                    overlap the scaled-up centre card.

     Centre card effective half-width = (CARD_W * CENTER_SCALE) / 2
                                      = (220 * 1.1)  / 2 = 121px
     Side card left edge              = SIDE_OFFSET - (CARD_W * SIDE_SCALE) / 2
                                      = 320          - (220 * 0.75) / 2 = 320 - 82.5 = 237px
     Gap between edges                = 237 - 121 = 116px  ✓ no overlap
  ─────────────────────────────────────────────────────────────── */
  const CARD_W       = 220;
  const CENTER_SCALE = 1.1;
  const SIDE_SCALE   = 0.75;
  const SIDE_OFFSET  = 320;

  const getItemStyle = (index) => {
    const total = MACHINES.length;
    let diff = index - activeIndex;
    if (diff >  Math.floor(total / 2)) diff -= total;
    if (diff < -Math.floor(total / 2)) diff += total;

    const absDiff = Math.abs(diff);

    if (diff === 0) {
      return { scale: CENTER_SCALE, opacity: 1,   zIndex: 20, x: 0,                    filter: 'blur(0px)'  };
    } else if (absDiff === 1) {
      return { scale: SIDE_SCALE,   opacity: 0.45, zIndex: 10, x: diff * SIDE_OFFSET,   filter: 'blur(3px)'  };
    } else {
      return { scale: 0.5,          opacity: 0,    zIndex: 0,  x: diff * (SIDE_OFFSET + 80), filter: 'blur(6px)'  };
    }
  };

  return (
    <section
      ref={ref}
      className="relative w-full bg-[#f8f9fa] overflow-hidden font-display border-y border-gray-200"
    >
      {/* ── "OUR BEST SELLERS" heading — FIXED at top, never moves ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="pt-16 pb-2 flex flex-col items-center"
      >
        <h2 className="text-4xl font-extrabold text-[#001F3F] font-display tracking-tighter uppercase inline-block border-b-[3px] border-[#E31E24] pb-3">
          OUR BEST SELLERS
        </h2>
      </motion.div>

      {/* ── Carousel stage ── */}
      <div className="relative max-w-[1200px] mx-auto pb-16">

        {/* Fixed-height stage so text below never jumps */}
        <div className="relative w-full h-[420px] flex items-end justify-center">

          {/* ── Left arrow ── */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={goLeft}
            className="absolute left-4 md:left-10 bottom-[120px] z-50 w-12 h-12 bg-white border-[2px] border-[#E31E24] rounded-full flex items-center justify-center hover:bg-[#E31E24] hover:text-white transition-colors duration-200 group shadow-[0_10px_20px_rgba(227,30,36,0.15)]"
            aria-label="Previous machine"
          >
            <svg className="w-5 h-5 text-[#E31E24] group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </motion.button>

          {/* ── Right arrow ── */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={goRight}
            className="absolute right-4 md:right-10 bottom-[120px] z-50 w-12 h-12 bg-white border-[2px] border-[#E31E24] rounded-full flex items-center justify-center hover:bg-[#E31E24] hover:text-white transition-colors duration-200 group shadow-[0_10px_20px_rgba(227,30,36,0.15)]"
            aria-label="Next machine"
          >
            <svg className="w-5 h-5 text-[#E31E24] group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>

          {/* ── Cards ── */}
          {MACHINES.map((machine, index) => {
            const style   = getItemStyle(index);
            const isCenter = index === activeIndex;

            return (
              <motion.div
                key={machine.id}
                animate={{ x: style.x, scale: style.scale, opacity: style.opacity, filter: style.filter }}
                transition={{ type: 'spring', stiffness: 160, damping: 26, mass: 0.8 }}
                onClick={() => setActiveIndex(index)}
                className="absolute cursor-pointer flex flex-col items-center justify-end"
                style={{ zIndex: style.zIndex, bottom: '16px', width: `${CARD_W}px` }}
              >
                {/* Brand logo */}
                <div className="h-10 md:h-12 w-full mb-6 flex justify-center items-end px-4 drop-shadow-md">
                  <img
                    src={machine.logo}
                    alt={`${machine.label} Logo`}
                    className="max-h-full max-w-full object-contain mix-blend-multiply"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      if (e.target.nextElementSibling) e.target.nextElementSibling.style.display = 'block';
                    }}
                  />
                  <h3
                    className="text-lg font-extrabold text-[#001F3F] tracking-widest uppercase font-display"
                    style={{ display: 'none' }}
                  >
                    {machine.label}
                  </h3>
                </div>

                {/* Machine image — fixed uniform height */}
                <div
                  className="w-full flex justify-center items-end"
                  style={{ height: '220px' }}
                >
                  <img
                    src={machine.img}
                    alt={machine.label}
                    className="max-w-full max-h-full object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.18)] mix-blend-multiply"
                  />
                </div>

                {/* Floor shadow */}
                <div
                  className={`rounded-[50%] bg-black/15 mt-3 transition-all duration-500 ${
                    isCenter ? 'w-44 h-5 blur-md' : 'w-20 h-3 blur-sm'
                  }`}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 pt-4">
          {MACHINES.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`rounded-full transition-all duration-300 ${
                i === activeIndex
                  ? 'w-6 h-2 bg-[#E31E24]'
                  : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
