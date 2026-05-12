import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import promacLogo from '../assets/promac-logo.png';

const NAV_LINKS = [
  { label: 'HOME', href: '/' },
  { label: 'ABOUT', href: '/about' },
  { label: 'BRANDS', href: '/#brands' },
  { label: 'SERVICE', href: '/#service' },
  { label: 'CONSULTANCY', href: '/#consultancy' },
  { label: 'CONTACT', href: '/#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 80, damping: 18 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-xl shadow-[0_1px_3px_rgba(0,0,0,0.08)]'
            : 'bg-[#f5f5f5]'
        }`}
      >
        <div className="max-w-[1100px] mx-auto px-6 flex items-center justify-between h-[68px]">
          {/* Logo — left side */}
          <Link to="/">
            <img src={promacLogo} alt="Promac Logo" className="h-8 w-auto object-contain cursor-pointer" />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-0">
            {NAV_LINKS.map((link) => {
              const isHash = link.href.startsWith('/#');
              const isExternal = link.href.startsWith('http');
              
              if (isHash || isExternal) {
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    whileHover={{ y: -2 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className="px-2.5 lg:px-3.5 py-2 text-[11px] font-bold tracking-widest text-gray-900 hover:text-[#0B4F8A] transition-colors duration-200 font-display uppercase"
                  >
                    {link.label}
                  </motion.a>
                );
              }

              return (
                <motion.div
                  key={link.label}
                  whileHover={{ y: -2 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  <Link
                    to={link.href}
                    className={`px-2.5 lg:px-3.5 py-2 text-[11px] font-bold tracking-widest transition-colors duration-200 font-display uppercase ${
                      location.pathname === link.href ? 'text-[#0B4F8A]' : 'text-gray-900 hover:text-[#0B4F8A]'
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle navigation"
            id="mobile-nav-toggle"
          >
            <motion.span animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }} className="w-6 h-[2px] bg-gray-900 block origin-center" />
            <motion.span animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }} className="w-6 h-[2px] bg-gray-900 block" />
            <motion.span animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }} className="w-6 h-[2px] bg-gray-900 block origin-center" />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 top-[68px] z-40 bg-white/95 backdrop-blur-2xl md:hidden"
          >
            <div className="flex flex-col items-center gap-6 pt-16">
              {NAV_LINKS.map((link, i) => {
                const isHash = link.href.startsWith('/#');
                
                if (isHash) {
                  return (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.08 }}
                      onClick={() => setMobileOpen(false)}
                      className="text-lg font-bold tracking-[0.12em] text-gray-900 font-display uppercase"
                    >
                      {link.label}
                    </motion.a>
                  );
                }

                return (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08 }}
                  >
                    <Link
                      to={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`text-lg font-bold tracking-[0.12em] font-display uppercase ${
                        location.pathname === link.href ? 'text-[#0B4F8A]' : 'text-gray-900'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
