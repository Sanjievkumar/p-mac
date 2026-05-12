import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import founderWords from '../assets/founder-words.png';

export default function FounderSection() {
  const ref = useRef(null);
  // Trigger as soon as even 1px of the section enters the viewport
  const isInView = useInView(ref, { once: true, amount: 0 });

  return (
    <section
      id="about"
      ref={ref}
      className="relative w-full bg-[#111111] overflow-hidden"
    >
      {/* ── Left-to-right cinematic text reveal ── */}
      <motion.div
        className="w-full"
        initial={{ clipPath: 'inset(0 100% 0 0)' }}
        animate={isInView ? { clipPath: 'inset(0 0% 0 0)' } : { clipPath: 'inset(0 100% 0 0)' }}
        transition={{ duration: 1.6, ease: [0.76, 0, 0.24, 1] }}
      >
        <img
          src={founderWords}
          alt="Words from our Founder — Senthil Kumar DR, Promac Technologies"
          className="w-full h-auto object-contain object-center block"
        />
      </motion.div>
    </section>
  );
}
