import { motion } from 'framer-motion';
import heroImage from '../assets/hero-new.png';

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative w-full mt-[68px] bg-white overflow-hidden flex flex-col"
    >
      {/* ── Text — sits directly above the machine image, tight spacing ── */}
      <div className="w-full px-6 md:px-16 pt-10 pb-4 max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-[#E31E24] text-[11px] font-bold tracking-[0.5em] uppercase mb-3"
        >
          Promac Technologies
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl md:text-5xl lg:text-6xl font-black text-[#001F3F] tracking-tighter leading-[1.05]"
        >
          BEYOND EQUIPMENT.
          <br />
          <span className="relative inline-block">
            PURE PERFORMANCE.
            {/* Animated red underline */}
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.7, delay: 0.85, ease: 'easeOut' }}
              className="absolute -bottom-[5px] left-0 w-full h-[3px] bg-[#E31E24] origin-left rounded-full"
            />
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.75 }}
          className="mt-5 text-slate-500 text-base md:text-lg leading-relaxed max-w-2xl"
        >
          India's premier turnkey partner for world-class industrial laundry systems.
        </motion.p>
      </div>

      {/* ── Hero image — flows directly below the text, zero gap ── */}
      <motion.div
        className="w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <img
          src={heroImage}
          alt="Promac Technologies — Industrial Laundry Showroom"
          className="w-full h-auto object-contain object-center block"
          style={{ filter: 'brightness(1.06) contrast(1.04)' }}
        />
      </motion.div>

      {/* ── Bottom fade blending into next section ── */}
      <div
        className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-[#f5f5f5] to-transparent pointer-events-none"
        aria-hidden="true"
      />
    </section>
  );
}
