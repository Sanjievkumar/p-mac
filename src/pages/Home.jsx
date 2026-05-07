import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import FounderSection from '../components/FounderSection';
import SectionDivider from '../components/SectionDivider';
import EcosystemSection from '../components/EcosystemSection';
import CarouselSection from '../components/CarouselSection';
import Footer from '../components/Footer';
import BrandMarquee from '../components/BrandMarquee';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen bg-[#f5f5f5] font-display"
    >
      <Navbar />
      <HeroSection />
      <FounderSection />
      <SectionDivider />
      <EcosystemSection />
      <SectionDivider />
      <CarouselSection />
      <SectionDivider />
      <BrandMarquee />
      <Footer />
    </motion.div>
  );
}
