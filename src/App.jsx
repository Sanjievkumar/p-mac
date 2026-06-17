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
import MaxiPress from './pages/brands/MaxiPress';
import Maestrelli from './pages/brands/Maestrelli';
import MaestrelliProduct from './pages/brands/MaestrelliProduct';

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
        <Route path="/brands/maxipress" element={<MaxiPress />} />
        <Route path="/brands/maestrelli" element={<Maestrelli />} />
        <Route path="/brands/maestrelli/:productId" element={<MaestrelliProduct />} />
        <Route path="/consultancy" element={<Consultancy />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </Router>
  );
}

export default App;
