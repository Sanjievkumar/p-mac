import { motion } from 'framer-motion';
import heroImage from '../assets/hero-new.png';

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative w-full mt-[68px] bg-white overflow-hidden"
    >
      {/* ── Hero image ── */}
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

      {/* ── Animated spotlight glow over the logo area ──
          No PNG overlay — just a pulsing radial light
          positioned where the Promac logo sits in the image.
          pointer-events:none so it never interferes with clicks.
      ── */}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          top: '8%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 'clamp(180px, 24%, 340px)',
          aspectRatio: '3 / 1',
          background:
            'radial-gradient(ellipse at 50% 50%, rgba(227,30,36,0.18) 0%, rgba(227,30,36,0.06) 45%, transparent 75%)',
          borderRadius: '50%',
          filter: 'blur(8px)',
        }}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{
          opacity: [0, 1, 0.7, 1],
          scale: [0.5, 1, 1.08, 1],
        }}
        transition={{
          duration: 2.4,
          ease: [0.22, 1, 0.36, 1],
          times: [0, 0.5, 0.75, 1],
          delay: 0.4,
        }}
      />

      {/* ── After entrance: continuous slow breathing glow ── */}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          top: '8%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 'clamp(180px, 24%, 340px)',
          aspectRatio: '3 / 1',
          background:
            'radial-gradient(ellipse at 50% 50%, rgba(227,30,36,0.14) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(10px)',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.6, 1, 0.6], scale: [0.95, 1.05, 0.95] }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2.8,
        }}
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
