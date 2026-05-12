import { motion } from 'framer-motion';
import heroImage from '../assets/hero-new.png';

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative w-full h-[calc(100vh-68px)] min-h-[600px] mt-[68px] bg-black overflow-hidden"
    >
      {/* ── Slow-zoom image with brushed-steel CSS filter ── */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          scale:   { duration: 8, ease: 'easeOut' },
          opacity: { duration: 1.5, delay: 0.3, ease: 'easeInOut' },
        }}
      >
        <img
          src={heroImage}
          alt="Promac Technologies — Industrial Facility"
          className="w-full h-full object-cover object-center"
          style={{
            /* Brushed-steel: boost contrast + saturation + sharpen highlights */
            filter: 'contrast(1.18) saturate(0.85) brightness(1.08)',
          }}
        />
      </motion.div>

      {/* ── Deep navy-to-cyan radial gradient overlay (replaces flat black) ── */}
      <div
        className="absolute inset-0 z-[1] opacity-70"
        style={{
          background:
            'radial-gradient(ellipse at center, #001F3F 0%, #001F3F 55%, #00C8FF 160%)',
        }}
        aria-hidden="true"
      />

      {/* ── Pulsing text brightness layer ── */}
      <motion.div
        className="absolute inset-0 z-[2] flex flex-col items-center justify-center select-none pointer-events-none px-6 text-center"
        animate={{ opacity: [0.75, 1, 0.75] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden="true"
      >
        <p className="text-white/10 text-[clamp(3rem,10vw,9rem)] font-black tracking-tighter leading-none uppercase">
          BEYOND EQUIPMENT.
        </p>
        <p className="text-[#00C8FF]/10 text-[clamp(3rem,10vw,9rem)] font-black tracking-tighter leading-none uppercase">
          PURE PERFORMANCE.
        </p>
      </motion.div>

      {/* ── Subtle vignette edges ── */}
      <div
        className="absolute inset-0 z-[3] pointer-events-none"
        style={{
          boxShadow: 'inset 0 0 120px 40px rgba(0,0,0,0.55)',
        }}
        aria-hidden="true"
      />

      {/* ── Bottom fade to blend with next section ── */}
      <div
        className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#f5f5f5] to-transparent pointer-events-none z-[4]"
        aria-hidden="true"
      />
    </section>
  );
}
