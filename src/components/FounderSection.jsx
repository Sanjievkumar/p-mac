import { motion } from 'framer-motion';
import founderImg from '../assets/founder-words.png';

/* ─────────────────────────────────────────────
   Clip-path reveal per line — avoids the
   overflow:hidden height-collapse bug.
   Clips from bottom → reveals top to bottom.
   once:false → replays every scroll.
───────────────────────────────────────────── */
function RevealLine({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ clipPath: 'inset(0 0 100% 0)', opacity: 0 }}
      whileInView={{ clipPath: 'inset(0 0 0% 0)', opacity: 1 }}
      viewport={{ once: false, amount: 0 }}
      transition={{ duration: 0.85, delay, ease: [0.76, 0, 0.24, 1] }}
    >
      {children}
    </motion.div>
  );
}

function RevealFade({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
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
      style={{
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        minHeight: '480px',
        backgroundColor: '#0e0e0e',
        overflow: 'hidden',
      }}
    >

      {/* ═══════════════════════════════════════
          LEFT — dark coded text panel
          Matches reference: ~37% width
      ═══════════════════════════════════════ */}
      <div style={{
        width: '37%',
        flexShrink: 0,
        backgroundColor: '#0e0e0e',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 'clamp(2.5rem, 5vw, 5rem) clamp(1.5rem, 3vw, 3rem)',
        position: 'relative',
        zIndex: 2,
      }}>

        {/* ── Eyebrow: red line + label ── */}
        <RevealFade delay={0}>
          <div style={{ marginBottom: '32px' }}>
            <div style={{
              width: '28px', height: '1px',
              backgroundColor: '#cc3333',
              marginBottom: '10px',
            }} />
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

        {/* ── Headlines — clip-path reveal per line ── */}
        <div style={{ marginBottom: '28px' }}>

          <RevealLine delay={0.1}>
            <p style={{
              color: '#ffffff',
              fontSize: 'clamp(1.9rem, 2.6vw, 2.7rem)',
              fontWeight: 700,
              lineHeight: 1.12,
              letterSpacing: '-0.025em',
              margin: '0 0 2px 0',
              fontFamily: 'inherit',
            }}>
              Building Solutions.
            </p>
          </RevealLine>

          <RevealLine delay={0.22}>
            <p style={{
              color: '#ffffff',
              fontSize: 'clamp(1.9rem, 2.6vw, 2.7rem)',
              fontWeight: 700,
              lineHeight: 1.12,
              letterSpacing: '-0.025em',
              margin: '0 0 2px 0',
              fontFamily: 'inherit',
            }}>
              Delivering Value.
            </p>
          </RevealLine>

          <RevealLine delay={0.34}>
            <p style={{
              color: '#cc3333',
              fontSize: 'clamp(1.9rem, 2.6vw, 2.7rem)',
              fontStyle: 'italic',
              fontFamily: 'Georgia, "Times New Roman", serif',
              lineHeight: 1.12,
              letterSpacing: '-0.01em',
              margin: 0,
            }}>
              Always.
            </p>
          </RevealLine>
        </div>

        {/* ── Body paragraphs ── */}
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

        <RevealFade delay={0.62}>
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
      </div>

      {/* ═══════════════════════════════════════
          RIGHT — showroom photo (63% width)

          TECHNIQUE: img is position:absolute,
          anchored to right:0, height:100%.
          Width is auto (proportional).
          The LEFT portion of founder-words.png
          (the baked text panel) overflows past
          the container's left edge and is
          hidden by overflow:hidden on section.
      ═══════════════════════════════════════ */}
      <div style={{
        flex: 1,
        position: 'relative',
        overflow: 'hidden',
        minHeight: '380px',
      }}>
        <img
          src={founderImg}
          alt="Promac Technologies Industrial Laundry Showroom"
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            height: '100%',
            width: 'auto',
            maxWidth: 'none',
            display: 'block',
            filter: 'brightness(0.88) contrast(1.06)',
          }}
        />
        {/* Left-edge blend from dark panel into photo */}
        <div style={{
          position: 'absolute',
          top: 0, left: 0, bottom: 0,
          width: '80px',
          background: 'linear-gradient(to right, #0e0e0e, transparent)',
          pointerEvents: 'none',
          zIndex: 1,
        }} aria-hidden="true" />
      </div>

    </section>
  );
}
