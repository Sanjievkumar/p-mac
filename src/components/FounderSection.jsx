import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import showroom from '../assets/showroom.png';

export default function FounderSection() {
  const sectionRef = useRef(null);

  // Fires every time section enters viewport (once:false equivalent with useInView)
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });

  const line = (delay) => ({
    initial: { opacity: 0, y: 40 },
    animate: isInView
      ? { opacity: 1, y: 0, transition: { duration: 0.8, delay, ease: [0.76, 0, 0.24, 1] } }
      : { opacity: 0, y: 40, transition: { duration: 0.3 } },
  });

  const fade = (delay) => ({
    initial: { opacity: 0 },
    animate: isInView
      ? { opacity: 1, transition: { duration: 0.8, delay, ease: 'easeOut' } }
      : { opacity: 0, transition: { duration: 0.3 } },
  });

  return (
    <section
      ref={sectionRef}
      id="about"
      style={{
        display: 'flex',
        width: '100%',
        minHeight: '480px',
        backgroundColor: '#0e0e0e',
        overflow: 'hidden',
      }}
    >

      {/* ══════════════════════════════════════════
          LEFT — dark coded text panel (~37%)
      ══════════════════════════════════════════ */}
      <div style={{
        width: '37%',
        flexShrink: 0,
        backgroundColor: '#0e0e0e',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 'clamp(2.5rem, 5vw, 5rem) clamp(1.5rem, 3vw, 3rem)',
        zIndex: 2,
      }}>

        {/* Eyebrow */}
        <motion.div {...fade(0)} style={{ marginBottom: '32px' }}>
          <div style={{ width: '28px', height: '1px', backgroundColor: '#cc3333', marginBottom: '10px' }} />
          <p style={{ color: '#cc3333', fontSize: '9px', fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase', margin: 0 }}>
            A Few Words From Our Founder
          </p>
        </motion.div>

        {/* Headline line 1 */}
        <motion.p {...line(0.12)} style={{
          color: '#ffffff',
          fontSize: 'clamp(1.8rem, 2.5vw, 2.6rem)',
          fontWeight: 700,
          lineHeight: 1.12,
          letterSpacing: '-0.025em',
          margin: '0 0 2px 0',
        }}>
          Building Solutions.
        </motion.p>

        {/* Headline line 2 */}
        <motion.p {...line(0.25)} style={{
          color: '#ffffff',
          fontSize: 'clamp(1.8rem, 2.5vw, 2.6rem)',
          fontWeight: 700,
          lineHeight: 1.12,
          letterSpacing: '-0.025em',
          margin: '0 0 2px 0',
        }}>
          Delivering Value.
        </motion.p>

        {/* Headline line 3 — red italic */}
        <motion.p {...line(0.38)} style={{
          color: '#cc3333',
          fontSize: 'clamp(1.8rem, 2.5vw, 2.6rem)',
          fontStyle: 'italic',
          fontFamily: 'Georgia, "Times New Roman", serif',
          lineHeight: 1.12,
          letterSpacing: '-0.01em',
          margin: '0 0 28px 0',
        }}>
          Always.
        </motion.p>

        {/* Body paragraph 1 */}
        <motion.p {...fade(0.52)} style={{
          color: '#9ca3af',
          fontSize: '13px',
          lineHeight: 1.85,
          maxWidth: '290px',
          marginBottom: '14px',
        }}>
          At Promac Technologies, our journey has always been about solving real
          challenges with practical, reliable and future-ready solutions. We believe
          in engineering excellence, long-term partnerships, and creating value that lasts.
        </motion.p>

        {/* Body paragraph 2 */}
        <motion.p {...fade(0.65)} style={{
          color: '#9ca3af',
          fontSize: '13px',
          lineHeight: 1.85,
          maxWidth: '290px',
          margin: 0,
        }}>
          Our commitment to innovation, quality, and customer success drives everything
          we do. Thank you for being a part of our journey.
        </motion.p>
      </div>

      {/* ══════════════════════════════════════════
          RIGHT — clean showroom photo (63%)
          hero-new.png has zero baked-in text
      ══════════════════════════════════════════ */}
      <div style={{ flex: 1, position: 'relative', overflow: 'hidden', minHeight: '380px' }}>
        <img
          src={showroom}
          alt="Promac Technologies Industrial Laundry Showroom"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            display: 'block',
            filter: 'brightness(0.88) contrast(1.06)',
          }}
        />
        {/* Left-edge gradient blending into dark panel */}
        <div style={{
          position: 'absolute', top: 0, left: 0, bottom: 0, width: '80px',
          background: 'linear-gradient(to right, #0e0e0e, transparent)',
          pointerEvents: 'none', zIndex: 1,
        }} aria-hidden="true" />
      </div>

    </section>
  );
}
