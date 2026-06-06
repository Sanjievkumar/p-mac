import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Brands from './pages/Brands';
import Consultancy from './pages/Consultancy';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Kannegiesser from './pages/brands/Kannegiesser';
import SeaLion from './pages/brands/SeaLion';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/brands/kannegiesser" element={<Kannegiesser />} />
        <Route path="/brands/sea-lion" element={<SeaLion />} />
        <Route path="/consultancy" element={<Consultancy />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </Router>
  );
}

export default App;
