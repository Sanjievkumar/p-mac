import { motion } from 'framer-motion';
import heroImage from '../assets/hero-new.png';

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative w-full h-[calc(100vh-68px)] min-h-[600px] mt-[68px] overflow-hidden bg-black"
    >
      {/* ── Slow-zoom background image — no colour overlay ── */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          scale:   { duration: 8, ease: 'easeOut' },
          opacity: { duration: 1.4, delay: 0.2, ease: 'easeInOut' },
        }}
      >
        <img
          src={heroImage}
          alt="Promac Technologies — Industrial Facility"
          className="w-full h-full object-cover object-center"
          style={{
            /* Pop the steel surfaces — no colour cast */
            filter: 'brightness(1.10) contrast(1.05)',
          }}
        />
      </motion.div>

      {/* ── Minimal dark vignette only at top + bottom edges ── */}
      <div
        className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/40 to-transparent pointer-events-none z-[1]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/40 to-transparent pointer-events-none z-[1]"
        aria-hidden="true"
      />

      {/* ── Hero text centred over the image ── */}
      <div className="absolute inset-0 z-[2] flex flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Eyebrow */}
          <p className="text-white/70 text-[11px] font-bold tracking-[0.55em] uppercase mb-5 drop-shadow-lg">
            Promac Technologies
          </p>

          {/* Main headline */}
          <h1
            className="text-[clamp(2.8rem,8vw,8rem)] font-black tracking-tighter leading-[0.92] uppercase text-white"
            style={{
              textShadow:
                '0 4px 32px rgba(0,0,0,0.85), 0 1px 2px rgba(0,0,0,0.9)',
            }}
          >
            BEYOND EQUIPMENT.
            <br />
            <span
              className="text-white/90"
              style={{
                textShadow:
                  '0 4px 32px rgba(0,0,0,0.85), 0 1px 2px rgba(0,0,0,0.9)',
              }}
            >
              PURE PERFORMANCE.
            </span>
          </h1>

          {/* Sub-line */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="mt-6 text-white/65 text-base md:text-lg font-medium max-w-xl mx-auto leading-relaxed drop-shadow-md"
          >
            India's premier turnkey partner for world-class industrial laundry systems.
          </motion.p>
        </motion.div>
      </div>

      {/* ── Bottom fade blending into next section ── */}
      <div
        className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#f5f5f5] to-transparent pointer-events-none z-[3]"
        aria-hidden="true"
      />
    </section>
  );
}
