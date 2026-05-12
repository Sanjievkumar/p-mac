import { motion } from 'framer-motion';
import heroImage from '../assets/hero-new.png';

/* ─────────────────────────────────────────────
   Masked reveal: each line slides up from
   below a hidden boundary. Triggers on EVERY
   scroll (once: false) and every page load.
───────────────────────────────────────────── */
function RevealLine({ children, delay = 0 }) {
  return (
    <div className="overflow-hidden">
      <motion.div
        initial={{ y: '105%', opacity: 0 }}
        whileInView={{ y: '0%', opacity: 1 }}
        viewport={{ once: false, amount: 0.6 }}
        transition={{
          duration: 0.9,
          delay,
          ease: [0.76, 0, 0.24, 1],
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Fade reveal: for paragraph body text
───────────────────────────────────────────── */
function RevealFade({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.5 }}
      transition={{ duration: 0.75, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}

export default function FounderSection() {
  return (
    <section
      id="about"
      className="relative w-full flex flex-col md:flex-row overflow-hidden"
      style={{ minHeight: '520px' }}
    >

      {/* ══════════════════════════════════════════
          LEFT PANEL — Dark, all coded text
      ══════════════════════════════════════════ */}
      <div className="relative w-full md:w-[40%] bg-[#111111] flex flex-col justify-center px-8 md:px-10 lg:px-14 py-20 md:py-28 z-10">

        {/* ── Eyebrow ── */}
        <RevealLine delay={0}>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-[1px] bg-[#cc3333] flex-shrink-0" />
            <p className="text-[#cc3333] font-bold tracking-[0.22em] text-[10px] uppercase font-display">
              A Few Words From Our Founder
            </p>
          </div>
        </RevealLine>

        {/* ── Headline ── */}
        <h2 className="mb-8 tracking-tight leading-[1.1]">
          <RevealLine delay={0.12}>
            <span className="block text-white text-3xl md:text-4xl lg:text-[2.6rem] font-bold">
              Building Solutions.
            </span>
          </RevealLine>
          <RevealLine delay={0.22}>
            <span className="block text-white text-3xl md:text-4xl lg:text-[2.6rem] font-bold">
              Delivering Value.
            </span>
          </RevealLine>
          <RevealLine delay={0.34}>
            <span
              className="block text-[#cc3333] text-3xl md:text-4xl lg:text-[2.6rem] italic mt-1"
              style={{ fontFamily: "'Brush Script MT', 'Great Vibes', cursive" }}
            >
              Always.
            </span>
          </RevealLine>
        </h2>

        {/* ── Body text ── */}
        <RevealFade delay={0.48}>
          <p className="text-gray-400 text-sm leading-[1.85] mb-5 max-w-[340px]">
            At Promac Technologies, our journey has always been about solving real challenges
            with practical, reliable and future-ready solutions. We believe in engineering
            excellence, long-term partnerships, and creating value that lasts.
          </p>
        </RevealFade>

        <RevealFade delay={0.6}>
          <p className="text-gray-400 text-sm leading-[1.85] max-w-[340px]">
            Our commitment to innovation, quality, and customer success drives everything
            we do. Thank you for being a part of our journey.
          </p>
        </RevealFade>

        {/* ── Signature ── */}
        <RevealFade delay={0.72}>
          <div className="mt-10 pt-8 border-t border-white/10">
            <p
              className="text-3xl text-[#cc3333]/70 mb-1"
              style={{ fontFamily: "'Brush Script MT', 'Great Vibes', cursive" }}
            >
              Senthil Kumar
            </p>
            <p className="text-gray-300 font-bold text-xs tracking-widest uppercase">
              Senthil Kumar DR
            </p>
            <p className="text-gray-600 text-[10px] uppercase tracking-widest mt-1">
              Founder &amp; Managing Director — Promac Technologies Pvt Ltd
            </p>
          </div>
        </RevealFade>

        {/* Right blend gradient (desktop) */}
        <div
          className="hidden md:block absolute inset-y-0 right-0 w-12 bg-gradient-to-r from-transparent to-[#111111] pointer-events-none"
          aria-hidden="true"
        />
      </div>

      {/* ══════════════════════════════════════════
          RIGHT PANEL — Showroom photo
      ══════════════════════════════════════════ */}
      <div className="relative w-full md:w-[60%] min-h-[360px] md:min-h-0 overflow-hidden">
        <img
          src={heroImage}
          alt="Promac Technologies Industrial Laundry Showroom"
          className="w-full h-full object-cover object-center"
          style={{ filter: 'brightness(0.92) contrast(1.05)' }}
        />

        {/* Left gradient — blends image into the dark panel */}
        <div
          className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#111111] to-transparent pointer-events-none"
          aria-hidden="true"
        />

        {/* "QUALITY · RELIABILITY · PERFORMANCE" wall text (coded) */}
        <div className="absolute top-8 left-1/2 -translate-x-1/2 text-center pointer-events-none">
          <p className="text-white/20 text-xs md:text-sm font-bold tracking-[0.4em] uppercase whitespace-nowrap">
            Quality &nbsp;·&nbsp; Reliability &nbsp;·&nbsp; Performance
          </p>
        </div>
      </div>

    </section>
  );
}
