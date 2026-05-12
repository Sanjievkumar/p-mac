import { motion } from 'framer-motion';
import heroImage from '../assets/hero-new.png';

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative w-full h-[calc(100vh-68px)] min-h-[600px] mt-[68px] bg-black overflow-hidden"
    >
      {/* ── Slow-zoom parallax image ── */}
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
        />
      </motion.div>

      {/* ── Dark overlay for text contrast ── */}
      <div className="absolute inset-0 bg-black/50 z-[1]" aria-hidden="true" />

      {/* ── Bottom fade to blend with next section ── */}
      <div
        className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#f5f5f5] to-transparent pointer-events-none z-[2]"
        aria-hidden="true"
      />
    </section>
  );
}
