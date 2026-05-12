import { motion } from 'framer-motion';
import heroImage from '../assets/hero-new.png';
import promacLogo from '../assets/promac-logo.png';

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative w-full mt-[68px] bg-white overflow-hidden"
    >
      {/* ── Background image — object-contain, static ── */}
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

      {/* ── Animated logo overlay — sits exactly where the baked logo is ──
          Position calibrated to hero-new.png:
          logo center ≈ top 32% of image, horizontally centred.
          mix-blend-mode: multiply makes the white logo bg invisible,
          leaving only the red P icon + dark text blending naturally.
      ── */}
      <motion.div
        className="absolute left-1/2 pointer-events-none"
        style={{
          top: '22%',
          transform: 'translateX(-50%)',
          width: 'clamp(140px, 18%, 280px)',
        }}

        /* ── Phase 1: entrance (scale up + fade in) ── */
        initial={{ opacity: 0, scale: 0.72 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* ── Phase 2: continuous slow float after entrance ── */}
        <motion.img
          src={promacLogo}
          alt=""
          aria-hidden="true"
          className="w-full h-auto object-contain"
          style={{ mixBlendMode: 'multiply' }}

          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1.6,   // starts after entrance completes
          }}
        />

        {/* ── Soft glow ring beneath the logo ── */}
        <motion.div
          className="absolute inset-0 -z-10 rounded-full"
          style={{
            background:
              'radial-gradient(circle at 50% 50%, rgba(227,30,36,0.12) 0%, transparent 70%)',
            filter: 'blur(16px)',
          }}
          animate={{ scale: [1, 1.25, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1.6 }}
          aria-hidden="true"
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
