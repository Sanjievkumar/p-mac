import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ChevronRight, ChevronLeft, ShieldCheck, CheckCircle2 } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export const PRODUCT_DATA = {
  "mp51-laundry-utility-press": {
    title: "MP51 – LAUNDRY UTILITY PRESS",
    subtitle: "MP51 - LAUNDRY UTILITY PRESS",
    description: "MAXIPRESS laundry presses are well-known for their speed and efficiency in the industry. These presses are available in steam and electrically heated variants, with a range of buck sizes and choices. This patented design is simple and reliable, with one of the industry’s finest warranties.",
    img: "https://promactech.com/wp-content/uploads/2024/07/MP51-1024x819.png",
    specImg: "https://promactech.com/wp-content/uploads/2024/02/MP51-UTILITY-PRESS-BUCK-DIMENSION-01-01-1024x342.jpg",
    features: [
      "51 Inch Tapered Buck, Steam Heated Laundry Utility Press.",
      "Fast head closing for maximum operator efficiency.",
      "Available steam or electrically heated.",
      "Multiple buck sizes and configurations to choose.",
      "Timer included on all two-button activated presses.",
      "Available in either bar or two button activated closing system.",
      "Patented mechanism provides reliable service at minimal operating costs.",
      "Options include Iron Tray Attachment, Water Spray and Electric Timer."
    ]
  },
  "mp53-laundry-utility-legger-press": {
    title: "MP53 – LAUNDRY UTILITY LEGGER PRESS",
    subtitle: "MP53 - LAUNDRY UTILITY LEGGER PRESS",
    description: "MAXIPRESS laundry presses are well-known for their speed and efficiency in the industry. These presses are available in steam and electrically heated variants, with a range of buck sizes and choices. This patented design is simple and reliable, with one of the industry’s finest warranties.",
    img: "https://promactech.com/wp-content/uploads/2024/07/MP53-1024x819.png",
    specImg: "https://promactech.com/wp-content/uploads/2024/07/MP53-LAUNDRY-UTILITY-LEGGER-PRESS-BUCK-DIMENSION-01-1024x342.jpg",
    features: [
      "53 Inch Tapered Buck, Steam Heated Laundry Utility Press",
      "Fast head closing for maximum operator efficiency.",
      "Available steam or electrically heated.",
      "Multiple buck sizes and configurations to choose.",
      "Timer included on all two-button activated presses.",
      "Available in either bar or two button activated closing system.",
      "Patented mechanism provides reliable service at minimal operating costs.",
      "Options include Iron Tray Attachment, Water Spray and Electric Timer."
    ]
  },
  "mp54-rectangular-buck-laundry-utility-press": {
    title: "MP54 – RECTANGULAR BUCK LAUNDRY UTILITY PRESS",
    subtitle: "MP54 - RECTANGULAR BUCK LAUNDRY UTILITY PRESS",
    description: "MAXIPRESS laundry presses are well-known for their speed and efficiency in the industry. These presses are available in steam and electrically heated variants, with a range of buck sizes and choices. This patented design is simple and reliable, with one of the industry’s finest warranties.",
    img: "https://promactech.com/wp-content/uploads/2024/07/MP54-1024x819.png",
    features: [
      "Rectangular Buck Laundry Press, Steam Heated",
      "Fast head closing for maximum operator efficiency.",
      "Insulated Head Cover and Nickel-Plated Head Reduces Heat Loss, Saves Energy",
      "Designed for Finishing Pants, Napkins, Tablecloths and Household Apparel",
      "Available in either bar or two button activated closing system.",
      "Steam or Electrically Heated."
    ]
  },
  "mpbbp-bantom-body-press": {
    title: "MPBBP – BANTOM BODY PRESS",
    subtitle: "MPBBP - BANTOM BODY PRESS",
    description: "MAXIPRESS laundry presses are well-known for their speed and efficiency in the industry. These presses are available in steam and electrically heated variants, with a range of buck sizes and choices. This patented design is simple and reliable, with one of the industry’s finest warranties.",
    img: "https://promactech.com/wp-content/uploads/2024/07/MPBBP-1024x819.png",
    features: [
      "Bantam Body Press, Steam Heated",
      "Fast head closing for maximum operator efficiency.",
      "Available steam or electrically heated.",
      "Available in either bar or two button activated closing system.",
      "Water Spray Standard",
      "Insulated Head Cover and Nickel-Plated Head Reduces Heat Loss, Saves Energy",
      "Perfectly Matched Presses to Produce a Quality Finished Shirt."
    ]
  },
  "mpbcy-banton-collar-and-cuff-press": {
    title: "MPBCY – BANTON COLLAR & CUFF PRESS",
    subtitle: "MPBCY - BANTON COLLAR & CUFF PRESS",
    description: "MAXIPRESS laundry presses are well-known for their speed and efficiency in the industry. These presses are available in steam and electrically heated variants, with a range of buck sizes and choices. This patented design is simple and reliable, with one of the industry’s finest warranties.",
    img: "https://promactech.com/wp-content/uploads/2024/07/MPCY-1024x819.png",
    features: [
      "Banton Collar-Cuff-Yoke, Steam Heated",
      "Fast head closing for maximum operator efficiency.",
      "Available steam or electrically heated.",
      "Available in either bar or two button activated closing system.",
      "Insulated Head Cover and Nickel-Plated Head Reduces Heat Loss, Saves Energy.",
      "Timer included in all two-hand activated presses.",
      "Perfectly Matched Presses to produce quality shirt cuff & collar.",
      "Patented mechanism provides reliable service at minimal operating costs."
    ]
  },
  "mpccy-triple-head-collar-and-cuff-press": {
    title: "MPCCY – TRIPLE HEAD COLLAR & CUFF PRESS",
    subtitle: "MPCCY - TRIPLE HEAD COLLAR & CUFF PRESS",
    description: "MAXIPRESS laundry presses are well-known for their speed and efficiency in the industry. These presses are available in steam and electrically heated variants, with a range of buck sizes and choices. This patented design is simple and reliable, with one of the industry’s finest warranties.",
    img: "https://promactech.com/wp-content/uploads/2024/07/MPCCY-1024x819.png",
    features: [
      "Collar-Cuff Yoke Press, Triple Head, In-line, Y-Buck, Electric Timer, Steam Heated",
      "Two Hand Control.",
      "Designed for Pressing Cuffs, Collar, Yoke in One Lay",
      "New Radius Design of Cuff Heads and Bucks",
      "New Pressure System, High Quality Finishing",
      "Nickel-Plated Heads Reduce Heat Loss, Saves Energy",
      "Perfectly Matched Presses to produce quality shirt cuff & collar."
    ]
  },
  "mp19-mushroom-topper-press": {
    title: "MP19 – MUSHROOM TOPPER PRESS",
    subtitle: "MP19 - MUSHROOM  TOPPER PRESS",
    description: "MAXIPRESS laundry presses are well-known for their speed and efficiency in the industry. These presses are available in steam and electrically heated variants, with a range of buck sizes and choices. This patented design is simple and reliable, with one of the industry’s finest warranties.",
    img: "https://promactech.com/wp-content/uploads/2024/07/MP19-1024x819.png",
    specImg: "https://promactech.com/wp-content/uploads/2024/07/MP19-MUSHROOM-TOPPER-BUCK-DIMENSION-01-01-1024x342.jpg",
    features: [
      "Mushroom Press with Water Spray Gun, Steam Heated",
      "Insulated Head Cover and Nickel-Plated Head Reduces Heat Loss, Saves Energy.",
      "Designed for Finishing Pants, Shirts, Blouses and Small Wearing Apparel.",
      "Uses Control Bar Operation.",
      "Optional Two-Button Operation.",
      "Available Steam or Electrically Heated.",
      "Water Spray Standard."
    ]
  },
  "mps42-mps46-drycleaning-utility": {
    title: "MPS42/MPS46 – DRYCLEANING UTILITY",
    subtitle: "MPS42/MPS46 - DRYCLEANING UTILITY",
    description: "The MAXIPRESS Drycleaning Press, with its distinctive design head buck, offers excellent garment visibility, convenience of dressing and the capacity to function as a steam/vacuum/ironing board. With numerous upgraded capabilities, this time-tested classic is one of the most flexible presses in the market.",
    img: "https://promactech.com/wp-content/uploads/2024/07/MPs42.png",
    specImg: "https://promactech.com/wp-content/uploads/2024/07/MPS-42-DRYCLEANING-PRESS-BUCK-DIMENSION-01-1024x342.jpg",
    features: [
      "Manual Dry-Cleaning Utility Press, Steam Heated, 42″ Buck",
      "Patented controls allow head closing with either hand.",
      "Choice of Head and Buck Sizes for Versatility.",
      "Close Head with One Hand, Two Hands Required to Lock,",
      "Available with Small End to the Right (RM) or to the Left (LM).",
      "Fast Closing and Opening of Head for Maximum Production.",
      "No Vacuum-Pick-Up Feature with Fast Head Opening.",
      "Adjustable foot switch plate to accommodate operator fatigue mat.",
      "Easily accessible pressure selector switch allows a firm or soft press.",
      "Options include Iron Tray, Sleeve Board, Water Spray, Timer on Utilities.",
      "Durable Frame and Bearings."
    ]
  },
  "mpcaff-form-finisher": {
    title: "MPCAFF – FORM FINISHER",
    subtitle: "MPCAFF - FORM FINISHER",
    description: "This finisher can finish the clothes automatically after putting the clothes on the model, which takes 20-30 seconds. It features high degree automation, with air blast function, is optional for manual and automatic operation, has adjustable shoulder size, and the frame of model can be rotary by 360°, adjustable force for the operating rod, is an ideal finishing equipment for various laundries.",
    img: "https://promactech.com/wp-content/uploads/2024/07/MPCAFF-FORM-FINISHER-640x640.png",
    features: [
      "Manual and automatic operation under computer control.",
      "The model can be rotated at 360 degrees allowing easy positioning of garments.",
      "With strong steam ejection device and function to adjust the tension.",
      "Patented steam circuit ensures finishing quality.",
      "Foot operated control for easy and fast operation.",
      "It comes standard with front and rear paddle clamps, spray gun for moisture, wooden sleeves, vent clamps, multiple control foot pedals and netting bag."
    ]
  },
  "mp46svb-steam-vacuum-board": {
    title: "MP46SVB – STEAM – VACUUM BOARD",
    subtitle: "",
    description: "Conditioning steam and vacuum provided with MAXIPRESS’s time-proven steam and vacuum valves.",
    img: "https://promactech.com/wp-content/uploads/2024/07/MP46-1024x819.png",
    features: [
      "Steam-Vacuum Board",
      "Pleater pads included for special needs.",
      "Uniform steam and vacuum throughout entire board.",
      "Foot pedals allow operator to control flow of steam or vacuum.",
      "Pivoting catch rack and iron set tray included for operator convenience."
    ]
  },
  "mpsb-spotting-board": {
    title: "MPSB – SPOTTING BOARD",
    subtitle: "MPSB - SPOTTING BOARD",
    description: "Vacuum Spotting Board with all required spotting guns, air gun, and steam gun.",
    img: "https://promactech.com/wp-content/uploads/2024/07/MPSB-1024x819.png",
    features: [
      "Vacuum Spotting Board",
      "With all required spotting guns, air gun, and steam gun.",
      "With spotting movable arm for stain removing function.",
      "With air suction function.",
      "With LED lighting",
      "With dehumidifying device/Vacuum pump.",
      "Low noise, high efficiency."
    ]
  }
};

export default function MaxiPressProduct() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (PRODUCT_DATA[productId]) {
      setProduct(PRODUCT_DATA[productId]);
    }
  }, [productId]);

  if (!product) {
    return (
      <div className="w-full min-h-screen bg-[#F8F9FA] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Product Not Found</h2>
          <Link to="/brands/maxipress" className="text-[#E31E24] hover:underline flex items-center justify-center gap-2">
            <ArrowLeft className="w-4 h-4" /> Back to MaxiPress
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-[#F8F9FA] font-sans text-slate-800">
      <Navbar />

      <div className="pt-32 pb-24 px-8 lg:px-16 max-w-7xl mx-auto">
        <Link to="/brands/maxipress" className="inline-flex items-center gap-2 text-slate-500 hover:text-[#E31E24] transition-colors group mb-12">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-xs font-bold tracking-[0.2em] uppercase">Back to MaxiPress</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 bg-white rounded-2xl shadow-xl overflow-hidden p-8 flex items-center justify-center border border-slate-200 sticky top-32 aspect-square relative group bg-gradient-to-br from-white via-slate-50 to-slate-100/80"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-[#E31E24]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <img src={product.img} alt={product.title} className="w-full h-full object-contain mix-blend-multiply relative z-10 drop-shadow-lg" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <h4 className="text-[#E31E24] text-[10px] font-bold tracking-[0.2em] uppercase mb-4">PRODUCT DETAILS</h4>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
              {product.title}
            </h1>
            
            {product.subtitle && (
              <h2 className="text-xl text-slate-500 font-medium mb-8">
                {product.subtitle}
              </h2>
            )}

            {product.description && (
              <p className="text-slate-600 text-lg leading-relaxed mb-10 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm relative">
                <span className="absolute top-0 left-0 w-1 h-full bg-[#E31E24] rounded-l-2xl"></span>
                {product.description}
              </p>
            )}

            {product.features && product.features.length > 0 && (
              <div className="mb-12">
                <h3 className="text-lg font-bold text-slate-900 mb-6 uppercase tracking-wider flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-[#E31E24]" />
                  Key Features
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {product.features.map((feature, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: idx * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm border border-slate-100 hover:shadow-md hover:border-[#E31E24]/20 transition-all duration-300"
                    >
                      <CheckCircle2 className="w-5 h-5 text-[#E31E24] shrink-0 mt-0.5" />
                      <span className="text-sm font-medium text-slate-700 leading-relaxed">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </div>

        {/* Spec Img fallback */}
        {product.specImg && (
          <div className="mt-24 pt-16 border-t border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-12 text-center tracking-tight">
              Technical Specifications
            </h2>
            <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden relative flex justify-center p-4">
               <div className="absolute top-0 left-0 w-full h-1 bg-[#E31E24]" />
               <img src={product.specImg} alt="Specifications" className="max-w-full h-auto object-contain mix-blend-multiply" />
            </div>
          </div>
        )}

        {/* Spec Tables */}
        {product.specTables && product.specTables.length > 0 && (
          <div className="mt-24 pt-16 border-t border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-12 text-center tracking-tight">
              Technical Specifications
            </h2>
            <div className="space-y-16">
              {product.specTables.map((table, idx) => (
                <div key={idx} className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden relative">
                  <div className="absolute top-0 left-0 w-full h-1 bg-[#E31E24]" />
                  
                  {table.title && (
                    <div className="bg-white px-6 py-5 border-b border-slate-200">
                      <h3 className="text-base font-bold text-slate-900 uppercase tracking-wider flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#E31E24]" />
                        {table.title}
                      </h3>
                    </div>
                  )}
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm text-slate-700 border-collapse">
                      <thead className="bg-slate-900 text-xs uppercase font-bold text-white tracking-wide">
                        <tr>
                          {table.headers.map((header, hIdx) => (
                            <th key={hIdx} className="px-6 py-5 whitespace-nowrap first:pl-8 last:pr-8">
                              {header}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {table.rows.map((row, rIdx) => {
                          const isCategoryHeader = row[1] === '';
                          return (
                            <tr key={rIdx} className={`${isCategoryHeader ? 'bg-slate-100' : 'even:bg-slate-50/50'} hover:bg-slate-100 transition-colors duration-150`}>
                              {row.map((cell, cIdx) => (
                                <td 
                                  key={cIdx} 
                                  className={`px-6 py-4 whitespace-nowrap first:pl-8 last:pr-8 ${isCategoryHeader ? 'font-bold text-slate-900 uppercase tracking-wider py-5' : cIdx === 0 ? 'font-bold text-slate-900 border-r border-slate-100 bg-white/50' : 'text-slate-600'}`}
                                  colSpan={isCategoryHeader && cIdx === 0 ? table.headers.length : 1}
                                >
                                  {isCategoryHeader && cIdx !== 0 ? null : (cell || '-')}
                                </td>
                              ))}
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
