import { motion } from 'framer-motion';
import founderImg from '../assets/founder-words.png';

/* ─────────────────────────────────────────────
   Masked line reveal — slides up from hidden
   boundary. Replays on every scroll in/out.
───────────────────────────────────────────── */
function RevealLine({ children, delay = 0 }) {
  return (
    <div className="overflow-hidden leading-none">
      <motion.div
        initial={{ y: '110%' }}
        whileInView={{ y: '0%' }}
        viewport={{ once: false, amount: 0.8 }}
        transition={{ duration: 0.85, delay, ease: [0.76, 0, 0.24, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
}

/* Fade-up for body text */
function RevealFade({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.6 }}
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
      className="relative w-full flex flex-col md:flex-row"
      style={{ minHeight: '480px' }}
    >

      {/* ══════════════════════════════════════
          LEFT — Dark text panel
      ══════════════════════════════════════ */}
      <div
        className="
          relative w-full md:w-[37%]
          bg-[#0e0e0e]
          flex flex-col justify-center
          px-8 md:px-10 lg:px-12
          py-16 md:py-24
          z-10
        "
      >
        {/* Eyebrow: red rule + label */}
        <RevealFade delay={0}>
          <div className="mb-7">
            <div className="w-8 h-[1px] bg-[#cc3333] mb-2" />
            <p className="text-[#cc3333] text-[9px] font-bold tracking-[0.32em] uppercase">
              A Few Words From Our Founder
            </p>
          </div>
        </RevealFade>

        {/* Headline — each line masked individually */}
        <h2 className="mb-8 space-y-1">
          <RevealLine delay={0.08}>
            <span className="block text-white text-[2rem] md:text-[2.4rem] lg:text-[2.7rem] font-bold leading-[1.12] tracking-tight">
              Building Solutions.
            </span>
          </RevealLine>

          <RevealLine delay={0.2}>
            <span className="block text-white text-[2rem] md:text-[2.4rem] lg:text-[2.7rem] font-bold leading-[1.12] tracking-tight">
              Delivering Value.
            </span>
          </RevealLine>

          <RevealLine delay={0.32}>
            <span
              className="block text-[#cc3333] text-[2rem] md:text-[2.4rem] lg:text-[2.7rem] leading-[1.12] tracking-tight"
              style={{ fontStyle: 'italic', fontFamily: 'Georgia, serif' }}
            >
              Always.
            </span>
          </RevealLine>
        </h2>

        {/* Body paragraphs */}
        <RevealFade delay={0.46}>
          <p className="text-gray-400 text-[13px] leading-[1.85] mb-4 max-w-[300px]">
            At Promac Technologies, our journey has always been about solving real challenges
            with practical, reliable and future-ready solutions. We believe in engineering
            excellence, long-term partnerships, and creating value that lasts.
          </p>
        </RevealFade>

        <RevealFade delay={0.58}>
          <p className="text-gray-400 text-[13px] leading-[1.85] max-w-[300px]">
            Our commitment to innovation, quality, and customer success drives everything
            we do. Thank you for being a part of our journey.
          </p>
        </RevealFade>

        {/* Right-edge gradient blending into the photo */}
        <div
          className="hidden md:block absolute inset-y-0 right-0 w-16
                     bg-gradient-to-r from-transparent to-[#0e0e0e] pointer-events-none"
          aria-hidden="true"
        />
      </div>

      {/* ══════════════════════════════════════
          RIGHT — Showroom photo
          Uses founder-words.png, object-right
          crops out the already-baked text side
          and shows only the machine photo half.
      ══════════════════════════════════════ */}
      <div className="relative w-full md:w-[63%] min-h-[340px] md:min-h-0 overflow-hidden">
        <img
          src={founderImg}
          alt="Promac Technologies Industrial Laundry Showroom"
          className="w-full h-full object-cover"
          style={{
            objectPosition: 'right center',
            filter: 'brightness(0.9) contrast(1.05)',
          }}
        />

        {/* Left edge blends into dark panel */}
        <div
          className="absolute inset-y-0 left-0 w-28
                     bg-gradient-to-r from-[#0e0e0e] to-transparent pointer-events-none"
          aria-hidden="true"
        />
      </div>

    </section>
  );
}
