import { motion } from 'framer-motion';
import heroImage from '../assets/hero-new.png';

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative w-full mt-[68px] bg-white overflow-hidden"
    >
      {/* ── TOP: Text block sits ABOVE the image ── */}
      <div className="w-full px-6 md:px-16 pt-16 pb-10 text-left max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[#E31E24] text-[11px] font-bold tracking-[0.5em] uppercase mb-4"
        >
          Promac Technologies
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl md:text-5xl lg:text-6xl font-black text-[#001F3F] tracking-tighter leading-[1.05]"
        >
          BEYOND EQUIPMENT.
          <br />
          <span className="relative inline-block">
            PURE PERFORMANCE.
            {/* Red underline accent */}
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.7, delay: 0.9, ease: 'easeOut' }}
              className="absolute -bottom-2 left-0 w-full h-[3px] bg-[#E31E24] origin-left rounded-full"
            />
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-6 text-slate-500 text-base md:text-lg leading-relaxed max-w-2xl"
        >
          India's premier turnkey partner for world-class industrial laundry systems.
        </motion.p>
      </div>

      {/* ── BOTTOM: Full hero image — object-contain keeps logos visible ── */}
      <motion.div
        className="w-full"
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <img
          src={heroImage}
          alt="Promac Technologies — Industrial Laundry Showroom"
          className="w-full h-auto object-contain object-center"
          style={{ filter: 'brightness(1.06) contrast(1.04)' }}
        />
      </motion.div>

      {/* ── Bottom blend into next section ── */}
      <div
        className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-[#f5f5f5] to-transparent pointer-events-none"
        aria-hidden="true"
      />
    </section>
  );
}
