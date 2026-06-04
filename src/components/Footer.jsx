import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';
import promacLogo from '../assets/promac-logo.png';

export default function Footer() {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Brands', path: '/brands' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <footer id="contact" className="relative w-full bg-[#001A33] text-white overflow-hidden border-t-[4px] border-[#e31e24] font-sans">
      
      {/* Subtle Geometric Grid Background */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{ 
          backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)', 
          backgroundSize: '40px 40px' 
        }}
      />
      
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">

          {/* ── Column 1: Brand & Identity ── */}
          <div className="flex flex-col items-start gap-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="bg-white rounded-xl px-5 py-4 shadow-[0_10px_30px_rgba(0,0,0,0.5)] cursor-pointer inline-block"
            >
              <img src={promacLogo} alt="Promac Technologies" className="h-10 w-auto object-contain" />
            </motion.div>
            <p className="text-gray-300 text-[15px] leading-relaxed max-w-[280px]">
              India’s premier turnkey partner for advanced laundry systems.
            </p>
          </div>

          {/* ── Column 2: Quick Links ── */}
          <div>
            <h3 className="text-lg font-bold tracking-widest text-white mb-6 font-display uppercase">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} onClick={() => window.scrollTo(0, 0)} className="group relative inline-block text-gray-300 hover:text-white transition-colors duration-300 font-medium">
                    {link.name}
                    {/* Animated Underline expanding from center */}
                    <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-[#e31e24] transition-all duration-300 group-hover:w-full group-hover:left-0 -mb-1" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Column 3: Contact Details ── */}
          <div>
            <h3 className="text-lg font-bold tracking-widest text-white mb-6 font-display uppercase">
              DIRECT CONTACT
            </h3>
            <div className="flex flex-col gap-5 text-gray-300 text-[15px]">
              <div className="flex items-start gap-4 group cursor-pointer hover:text-white transition-colors duration-300">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-[#e31e24] transition-colors duration-300">
                  <MapPin className="w-4 h-4 text-[#e31e24] group-hover:text-white transition-colors duration-300" />
                </div>
                <p className="leading-relaxed mt-1">
                  Ground Floor, Door No:5, Plot No:33,<br />
                  Sapthagiri Nagar, Inner Ring Road,<br />
                  Puludivakkam, Chennai – 600 091,<br />
                  Tamil Nadu – INDIA.
                </p>
              </div>
              <div className="flex items-center gap-4 group cursor-pointer hover:text-white transition-colors duration-300">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-[#e31e24] transition-colors duration-300">
                  <Phone className="w-4 h-4 text-[#e31e24] group-hover:text-white transition-colors duration-300" />
                </div>
                <p>
                  +91 95663 40888<br />
                  +91 95663 40016
                </p>
              </div>
              <div className="flex items-center gap-4 group cursor-pointer hover:text-white transition-colors duration-300">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-[#e31e24] transition-colors duration-300">
                  <Mail className="w-4 h-4 text-[#e31e24] group-hover:text-white transition-colors duration-300" />
                </div>
                <p>sales@promactech.com</p>
              </div>
            </div>
          </div>

          {/* ── Column 4: Newsletter ── */}
          <div>
            <h3 className="text-lg font-bold tracking-widest text-white mb-6 font-display uppercase">
              ENGINEERING UPDATES
            </h3>
            <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="w-full bg-[#00284d] border border-white/10 text-white rounded-md px-4 py-3 text-sm outline-none focus:border-[#e31e24] focus:bg-[#003366] transition-colors"
                required
              />
              <button 
                type="submit"
                className="w-full bg-[#e31e24] text-white font-bold tracking-widest uppercase text-xs px-4 py-3.5 rounded-md transition-all duration-300 hover:bg-[#ff362e] hover:shadow-[0_0_20px_rgba(227,30,36,0.6)] active:scale-[0.98]"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="border-t border-white/10 relative z-10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-xs tracking-wider opacity-80">
            © 2026 Promac Technologies Pvt Ltd. All Rights Reserved.
          </p>
          
          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#e31e24] hover:text-white transition-all duration-300 hover:-translate-y-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#e31e24] hover:text-white transition-all duration-300 hover:-translate-y-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#e31e24] hover:text-white transition-all duration-300 hover:-translate-y-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#e31e24] hover:text-white transition-all duration-300 hover:-translate-y-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>

    </footer>
  );
}
