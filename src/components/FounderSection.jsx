import { motion } from 'framer-motion';
import founderImg from '../assets/founder-words.png';

/* ─────────────────────────────────────────────
   Per-line masked reveal — slides up from clip
   Replays on every scroll (once: false)
───────────────────────────────────────────── */
function RevealLine({ children, delay = 0 }) {
  return (
    <div style={{ overflow: 'hidden' }}>
      <motion.div
        initial={{ y: '115%' }}
        whileInView={{ y: '0%' }}
        viewport={{ once: false, amount: 0 }}
        transition={{ duration: 0.9, delay, ease: [0.76, 0, 0.24, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
}

function RevealFade({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0 }}
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
      style={{ display: 'flex', width: '100%', minHeight: '480px' }}
    >
      {/* ══════════════════════════════════════════
          LEFT — dark coded text panel (38%)
      ══════════════════════════════════════════ */}
      <div
        style={{
          width: '38%',
          backgroundColor: '#0e0e0e',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: 'clamp(2rem, 4vw, 4rem) clamp(1.5rem, 3vw, 3.5rem)',
          position: 'relative',
          zIndex: 10,
          flexShrink: 0,
        }}
      >
        {/* Eyebrow */}
        <RevealFade delay={0}>
          <div style={{ marginBottom: '28px' }}>
            <div style={{ width: '32px', height: '1px', backgroundColor: '#cc3333', marginBottom: '8px' }} />
            <p style={{
              color: '#cc3333',
              fontSize: '9px',
              fontWeight: 700,
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              margin: 0,
            }}>
              A Few Words From Our Founder
            </p>
          </div>
        </RevealFade>

        {/* Headline — each line individually masked */}
        <div style={{ marginBottom: '28px' }}>
          <RevealLine delay={0.1}>
            <p style={{
              color: '#ffffff',
              fontSize: 'clamp(1.7rem, 2.4vw, 2.55rem)',
              fontWeight: 700,
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
              margin: '0 0 4px 0',
            }}>
              Building Solutions.
            </p>
          </RevealLine>

          <RevealLine delay={0.23}>
            <p style={{
              color: '#ffffff',
              fontSize: 'clamp(1.7rem, 2.4vw, 2.55rem)',
              fontWeight: 700,
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
              margin: '0 0 4px 0',
            }}>
              Delivering Value.
            </p>
          </RevealLine>

          <RevealLine delay={0.36}>
            <p style={{
              color: '#cc3333',
              fontSize: 'clamp(1.7rem, 2.4vw, 2.55rem)',
              fontStyle: 'italic',
              fontFamily: 'Georgia, "Times New Roman", serif',
              lineHeight: 1.15,
              letterSpacing: '-0.01em',
              margin: 0,
            }}>
              Always.
            </p>
          </RevealLine>
        </div>

        {/* Paragraph 1 */}
        <RevealFade delay={0.5}>
          <p style={{
            color: '#9ca3af',
            fontSize: '13px',
            lineHeight: 1.85,
            maxWidth: '290px',
            marginBottom: '14px',
          }}>
            At Promac Technologies, our journey has always been about solving real
            challenges with practical, reliable and future-ready solutions. We believe
            in engineering excellence, long-term partnerships, and creating value that lasts.
          </p>
        </RevealFade>

        {/* Paragraph 2 */}
        <RevealFade delay={0.63}>
          <p style={{
            color: '#9ca3af',
            fontSize: '13px',
            lineHeight: 1.85,
            maxWidth: '290px',
            margin: 0,
          }}>
            Our commitment to innovation, quality, and customer success drives everything
            we do. Thank you for being a part of our journey.
          </p>
        </RevealFade>

        {/* Right-edge gradient to blend into photo */}
        <div style={{
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          width: '60px',
          background: 'linear-gradient(to right, transparent, #0e0e0e)',
          pointerEvents: 'none',
        }} aria-hidden="true" />
      </div>

      {/* ══════════════════════════════════════════
          RIGHT — founder-words.png, cropped to
          show ONLY the right showroom half.

          backgroundSize: 200% → doubles the image
          backgroundPosition: right → anchors to
          right edge, hiding the left text panel.
      ══════════════════════════════════════════ */}
      <div
        style={{
          flex: 1,
          backgroundImage: `url(${founderImg})`,
          backgroundSize: '200%',
          backgroundPosition: 'right center',
          backgroundRepeat: 'no-repeat',
          position: 'relative',
          minHeight: '360px',
          filter: 'brightness(0.9) contrast(1.05)',
        }}
      >
        {/* Left blend from dark panel into photo */}
        <div style={{
          position: 'absolute',
          inset: 0,
          left: 0,
          width: '100px',
          background: 'linear-gradient(to right, #0e0e0e, transparent)',
          pointerEvents: 'none',
        }} aria-hidden="true" />
      </div>

    </section>
  );
}
