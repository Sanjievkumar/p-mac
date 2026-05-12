import { motion } from 'framer-motion';
import heroImage from '../assets/hero-new.png';

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative w-full mt-[68px] bg-white overflow-hidden"
    >
      {/* ── Hero image — slow fade in ── */}
      <motion.div
        className="w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <img
          src={heroImage}
          alt="Promac Technologies — Industrial Laundry Showroom"
          className="w-full h-auto object-contain object-center block"
          style={{ filter: 'brightness(1.06) contrast(1.04)' }}
        />
      </motion.div>

      {/* ── Shimmer sweep — single diagonal white light glint ──
          Moves left-to-right once on load, like sunlight
          catching on the logo's metallic surface.
          Pure white, no colour tint, no glow blob.
      ── */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(105deg, transparent 35%, rgba(255,255,255,0.55) 50%, transparent 65%)',
          backgroundSize: '250% 100%',
        }}
        initial={{ backgroundPosition: '-100% 0' }}
        animate={{ backgroundPosition: '250% 0' }}
        transition={{ duration: 1.4, delay: 0.9, ease: 'easeInOut' }}
        aria-hidden="true"
      />

      {/* ── Bottom fade blending into next section ── */}
      <div
        className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-[#f5f5f5] to-transparent pointer-events-none"
        aria-hidden="true"
      />
    </section>
  );
}
