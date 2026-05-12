import { motion } from 'framer-motion';
import heroImage from '../assets/hero-new.png';

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative w-full mt-[68px] bg-white overflow-hidden"
    >
      {/* ── Hero image only — no text overlay ── */}
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

      {/* ── Bottom fade blending into next section ── */}
      <div
        className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-[#f5f5f5] to-transparent pointer-events-none"
        aria-hidden="true"
      />
    </section>
  );
}
