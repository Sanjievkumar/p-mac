import { motion } from 'framer-motion';
import showroomImg from '../assets/hero-new.png';

/* ─────────────────────────────────────────────
   Per-line masked reveal
   Replays every time section enters viewport
───────────────────────────────────────────── */
function RevealLine({ children, delay = 0 }) {
  return (
    <div style={{ overflow: 'hidden' }}>
      <motion.div
        initial={{ y: '110%' }}
        whileInView={{ y: '0%' }}
        viewport={{ once: false, amount: 0 }}
        transition={{ duration: 0.9, delay, ease: [0.76, 0, 0.24, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
}

/* Body text fade-up */
function RevealFade({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0 }}
      transition={{ duration: 0.7, delay, ease: 'easeOut' }}
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
      {/* ═══════════════════════════════════════
          LEFT — coded dark text panel
      ═══════════════════════════════════════ */}
      <div
        className="relative w-full md:w-[38%] flex flex-col justify-center
                   px-8 md:px-10 lg:px-14 py-16 md:py-24"
        style={{ backgroundColor: '#0e0e0e', zIndex: 10 }}
      >
        {/* Eyebrow */}
        <RevealFade delay={0}>
          <div className="mb-7">
            <div style={{ width: '32px', height: '1px', backgroundColor: '#cc3333', marginBottom: '8px' }} />
            <p style={{
              color: '#cc3333',
              fontSize: '9px',
              fontWeight: 700,
              letterSpacing: '0.32em',
              textTransform: 'uppercase',
            }}>
              A Few Words From Our Founder
            </p>
          </div>
        </RevealFade>

        {/* Headline — 3 individually masked lines */}
        <div style={{ marginBottom: '28px' }}>
          <RevealLine delay={0.1}>
            <p style={{
              color: '#ffffff',
              fontSize: 'clamp(1.8rem, 2.5vw, 2.6rem)',
              fontWeight: 700,
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
              paddingBottom: '4px',
            }}>
              Building Solutions.
            </p>
          </RevealLine>

          <RevealLine delay={0.22}>
            <p style={{
              color: '#ffffff',
              fontSize: 'clamp(1.8rem, 2.5vw, 2.6rem)',
              fontWeight: 700,
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
              paddingBottom: '4px',
            }}>
              Delivering Value.
            </p>
          </RevealLine>

          <RevealLine delay={0.34}>
            <p style={{
              color: '#cc3333',
              fontSize: 'clamp(1.8rem, 2.5vw, 2.6rem)',
              fontStyle: 'italic',
              fontFamily: 'Georgia, serif',
              lineHeight: 1.15,
              letterSpacing: '-0.01em',
            }}>
              Always.
            </p>
          </RevealLine>
        </div>

        {/* Body text */}
        <RevealFade delay={0.5}>
          <p style={{
            color: '#9ca3af',
            fontSize: '13px',
            lineHeight: 1.85,
            maxWidth: '300px',
            marginBottom: '16px',
          }}>
            At Promac Technologies, our journey has always been about solving real
            challenges with practical, reliable and future-ready solutions. We believe
            in engineering excellence, long-term partnerships, and creating value that lasts.
          </p>
        </RevealFade>

        <RevealFade delay={0.62}>
          <p style={{
            color: '#9ca3af',
            fontSize: '13px',
            lineHeight: 1.85,
            maxWidth: '300px',
          }}>
            Our commitment to innovation, quality, and customer success drives everything
            we do. Thank you for being a part of our journey.
          </p>
        </RevealFade>
      </div>

      {/* ═══════════════════════════════════════
          RIGHT — clean showroom photo
          hero-new.png has no baked-in text
      ═══════════════════════════════════════ */}
      <div
        className="relative w-full md:w-[62%] overflow-hidden"
        style={{ minHeight: '360px' }}
      >
        <img
          src={showroomImg}
          alt="Promac Technologies Industrial Laundry Showroom"
          className="w-full h-full object-cover object-center"
          style={{ filter: 'brightness(0.88) contrast(1.06)' }}
        />
        {/* Seamless left blend */}
        <div
          className="absolute inset-y-0 left-0 pointer-events-none"
          style={{
            width: '120px',
            background: 'linear-gradient(to right, #0e0e0e, transparent)',
          }}
          aria-hidden="true"
        />
        {/* Wall text matching reference */}
        <div
          className="absolute pointer-events-none"
          style={{ top: '18%', left: '18%' }}
        >
          <p style={{
            color: 'rgba(255,255,255,0.18)',
            fontSize: '13px',
            fontWeight: 600,
            letterSpacing: '0.35em',
            textTransform: 'uppercase',
          }}>
            Quality &nbsp;·&nbsp; Reliability &nbsp;·&nbsp; Performance
          </p>
        </div>
      </div>
    </section>
  );
}
