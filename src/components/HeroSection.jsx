import { motion } from 'framer-motion';
import heroImage from '../assets/hero-image.png';

export default function HeroSection() {
  return (
    <section id="hero" className="relative w-full h-[calc(100vh-68px)] min-h-[600px] mt-[68px] bg-black overflow-hidden">
      
      {/* 
        The hero image starts completely invisible (pure black background) 
        and smoothly fades in after a 1-second delay.
      */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 1, ease: "easeInOut" }}
      >
        <img
          src={heroImage}
          alt="Promac Technologies Factory Hall"
          className="w-full h-full object-cover object-center"
        />
      </motion.div>

      {/* Smooth fade at the bottom to blend with the next section */}
      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-[#f5f5f5] to-transparent pointer-events-none z-10" />

    </section>
  );
}
