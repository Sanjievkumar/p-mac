import { useEffect, useRef } from 'react';
import { motion, useAnimate, useSpring, useMotionValue, useTransform } from 'framer-motion';

const BRANDS = ["SEA-LION", "KANNEGIESSER", "MAESTRELLI", "MAXIPRESS"];

/**
 * Extracted individual brand component to isolate the mouse tracking logic 
 * necessary for the 3D Perspective Magnetic Tilt effect.
 */
function MagneticBrand({ brand }) {
  // Raw mouse coordinates relative to the center of the brand container
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Spring physics for returning the brand to flat (0,0) gently when mouse leaves
  const springX = useSpring(mouseX, { stiffness: 150, damping: 15 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 15 });

  // Map the physical cursor displacement to 3D rotation degrees
  const rotateX = useTransform(springY, [-50, 50], [25, -25]); 
  const rotateY = useTransform(springX, [-100, 100], [-25, 25]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const isKannegiesser = brand === "KANNEGIESSER";
  const defaultSpacing = isKannegiesser ? "0.05em" : "0.1em";

  return (
    <motion.div
      className="px-24 text-slate-800 font-sans font-extrabold text-3xl lg:text-4xl cursor-pointer flex items-center justify-center"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: 1000 }}
      
      // Start slightly expansive
      initial={{ letterSpacing: defaultSpacing, color: "#1e293b", textShadow: "0px 0px 0px rgba(227, 30, 36, 0)" }}
      
      // Ultra-Premium Interaction State
      whileHover={{ 
        scale: 1.25, 
        color: "#e23028", 
        // Multi-layered cinematic glow
        textShadow: "0 10px 20px rgba(227, 30, 36, 0.3), 0 0 40px rgba(227, 30, 36, 0.1)",
        // Luxury stretch
        letterSpacing: "0.2em",
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <motion.div style={{ rotateX, rotateY, display: "inline-block" }}>
        {brand}
      </motion.div>
    </motion.div>
  );
}

export default function BrandMarquee() {
  const [scope, animate] = useAnimate();
  const animationRef = useRef(null);
  
  // Highly damped spring to create that "liquid" duration: ~2s deceleration/acceleration
  const speed = useSpring(1, { stiffness: 30, damping: 15 });

  // 4 identical sets guarantee mathematically flawless loop execution at exactly -50% distance
  const multipliedBrands = [...BRANDS, ...BRANDS, ...BRANDS, ...BRANDS];

  useEffect(() => {
    // 30s base speed so the 5% crawl feels almost suspended in time
    animationRef.current = animate(
      scope.current,
      { x: ["0%", "-50%"] },
      { ease: "linear", duration: 30, repeat: Infinity } 
    );

    const unsubscribe = speed.on("change", (latest) => {
      if (animationRef.current) {
        animationRef.current.speed = latest;
      }
    });

    return () => {
      if (animationRef.current) animationRef.current.stop();
      unsubscribe();
    };
  }, [animate, scope, speed]);

  return (
    <section className="w-full bg-white py-16 border-y border-slate-200 overflow-hidden flex flex-col items-center">
      
      <p className="text-gray-400 text-xs font-bold tracking-[0.3em] uppercase mb-12 font-display">
        Strategic Partners
      </p>

      {/* 
        Marquee Trigger Wrapper 
        The entire section dictates the speed, creating a field of presence
      */}
      <div 
        className="relative w-full overflow-hidden py-10"
        onMouseEnter={() => speed.set(0.05)} // Decelerate to 5% (The Crawl)
        onMouseLeave={() => speed.set(1)}    // Liquid acceleration back to 100%
      >
        <div ref={scope} className="flex items-center w-max">
          {multipliedBrands.map((brand, idx) => (
            <MagneticBrand key={`${brand}-${idx}`} brand={brand} />
          ))}
        </div>
        
        {/* Soft edge masks to conceal spawning elements gracefully */}
        <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-white via-white/80 to-transparent pointer-events-none" />
      </div>

    </section>
  );
}
