import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, CheckCircle2, Factory } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { FLATWORK_DATA } from './flatworkData';
import factoryBg from '../../assets/brands/kannegiesser/kannegiesser_factory_new.jpg';
import kannegiesserLogo from '../../assets/brands/kannegiesser.png';
import { Globe, Search, Menu } from 'lucide-react';

const WASHING_TECH_DATA = {
  "kannegiesser-powertrans-vario": {
    category: "Washing Technology",
    "title": "Tunnel Washers",
    "subtitle": "PowerTrans Vario",
    description: "Combining high productivity with great variety of article range and batches.",
    "img": "https://www.kannegiesser.com/fileadmin/SHARED/Images/Products/Thumbs_PT_VARIO.png",
    heroImg: "https://www.kannegiesser.com/fileadmin/SHARED/Images/Products/Keyvisual_PT_VARIO.jpg",
    tabs: {
      overview: {
        introTitle: "THE TOP OF TODAY'S WASHING TECHNOLOGY.",
        introSubtitle: "The PowerTrans Vario – combining high productivity with great variety of article range and batches.",
        introText: "The PowerTrans Vario serves exactly the demands of your daily business now and in future. We designed this machine to enable you to provide hygiene and diversity. With the PowerTrans Vario at your side, you are more than prepared for the upcoming demands in the years to come.",
        applicationsTitle: "FULLY TAILORED TO YOUR APPLICATION",
        applications: [
          { name: "Cruise Ships", img: "https://www.kannegiesser.com/fileadmin/SHARED/Images/Products/Applications/Keyvisual_Kreuzfahrtschiff.jpg", text: "Floating cities where nothing is left to be desired! The textiles are processed in a minimum space with the lowest possible use of resources – with innovative laundry technology from Kannegiesser." },
          { name: "Workwear", img: "https://www.kannegiesser.com/fileadmin/SHARED/Images/Products/Applications/Keyvisual_Schutzkleidung.jpg", text: "High pollution loads. Preservation of the protective function. Textile variety in a modern design. These requirements are handled daily! Kannegiesser solutions help you to provide your customers with fresh workwear punctually and reliably." },
          { name: "Healthcare", img: "https://www.kannegiesser.com/fileadmin/SHARED/Images/Products/Applications/Keyvisual_Krankenhaus.jpg", text: "Do you handle a wide range of linen for the healthcare sector? The professional preparation of those textiles requires a reproducible hygiene process. With Kannegiesser you are on the safe side!" },
          { name: "Hospitality & Restaurant", img: "https://www.kannegiesser.com/fileadmin/SHARED/Images/Products/Applications/Keyvisual_Hotel.jpg", text: "The variety of articles is constantly growing. Customers expect their individual selection of linen. With Kannegiesser machines, you can offer the highest quality, which is particularly gentle on the textile and resources!" },
          { name: "Airlines", img: "https://www.kannegiesser.com/fileadmin/SHARED/Images/Products/Applications/Keyvisual_Fluglinien.jpg", text: "Above the clouds you want to ensure the best results for every passenger. With Kannegiesser machine you can perfectly handle your customer’s wide range of Airline Blankets." },
          { name: "Mats", img: "https://www.kannegiesser.com/fileadmin/SHARED/Images/Products/Applications/Keyvisual_Matten.jpg", text: "The first positive impression left in the entrance area of buildings. With dirt trapping mats that have been professionally and resource-friendly processed using Kannegiesser machines!" },
          { name: "Residental", img: "https://www.kannegiesser.com/fileadmin/SHARED/Images/Products/Applications/Keyvisual_Bewohner.jpg", text: "Respectful dealing with people and their textiles. Hygienically and gently processed, clean and completely back at the resident – that’s your core business. Kannegiesser supports you with the right machine and data technology!" }
        ],
        bannerTitle: "DESIGNED FOR YOUR PROFESSIONAL DAILY LAUNDRY BUSINESS.",
        bannerSubtitle: "The Batch Washer System demands a well-rounded and integrative long-term approach.",
        summaryTitle: "SUMMARY",
        summaryBlocks: [
          {
            title: "Hygiene & Diversity",
            subtitle: "THE MAIN FUTURE TASKS FOR TEXTILE SERVICE PROVIDERS",
            text: "Global business trends show that hygiene and diversity in particular will become the main tasks for Textile Service Providers in future. Hygiene is the core business of a textile service company. Diversity is the second challenge and offers a chance to differentiate from the competition. New textiles, articles and colors will have an impact on the whole process and will require machines to cope with these elements.",
            boxTitle: "THE POWERTRANS VARIO AT A GLANCE",
            boxBullets: [
              "Individual processing of each batch with regards to water levels, chemicals, temperatures etc.",
              "No counterflow, no liquor mixing guaranteeing wash quality, hygiene and color fastness"
            ]
          },
          {
            title: "Cost-effectiveness, Performance and Availability",
            subtitle: "THE KEY SUCCESS FACTORS FOR YOUR DAILY BUSINESS",
            text: "The PowerTrans Vario minimizes the consumption of water, energy and chemicals. The principle of the straight drum wall design enables high loading ratios and overload safety without any restrictions on the wash and finish quality. To ensure that your daily laundry processes run smoothly and steadily, you have a long-lasting, resilient partner by your side.",
            boxTitle: "THE POWERTRANS VARIO AT A GLANCE",
            boxBullets: [
              "Highest possible output within the available space",
              "Water and energy savings by design",
              "Best wash performance with lowest consumption",
              "Low lifecycle costs",
              "Excellent textile care"
            ]
          }
        ]
      },
      benefits: {
        blocks: [
          {
            title: "YOU CAN FEEL IT WHEN IT GOES DEEP INTO THE FIBERS.",
            subtitle: "Due to the ActiveDrop system.",
            text: "Highly efficient stain removal and hygiene requires washing deep in the fibers – without causing harm to the textile surface. It’s good to know that you can rely on our technical innovation called ActiveDrop."
          },
          {
            title: "THE MAJOR BENEFIT OF ACTIVE DROP",
            text: "It works deep into the fibers, allowing wash performance, textile care and a guarantee of hygiene as never before seen or felt.",
            img: "https://www.kannegiesser.com/fileadmin/_processed_/3/1/csm_ActiveDrop_193fef5667.jpg"
          }
        ]
      },
      technologies: {
        blocks: [
          {
            title: "DIVERSITY IN COLOR, MATERIAL, SIZE AND ARTICLE",
            subtitle: "The daily business of the PowerTrans Vario.",
            text: "The PowerTrans Vario offers flexibility comparable to that of washer extractors, whereby the hourly performance is as high and the consumption as low as can be expected from a modern high-performance batch washer. The load mix and sequence can be optimally adjusted to the logistic chain and the requirements of the laundry. Because it‘s you who defines the batch sequence – not the machine – and that allows for shortest process times."
          },
          {
            title: "CONSISTENTLY SEPARATED BATCHES",
            text: "The PowerTrans Vario is a ‘Separate Batch Washer’, which means every batch is treated separately. Optimized drum design, precise manufacturing methods and intelligent controls enable operational flexibility. The outcome is perfect quality and hygienic guarantees for each single batch.",
            img: "https://www.kannegiesser.com/fileadmin/_processed_/6/6/csm_PowerTrans_Separate-Batches_01_e41ddba778.png"
          },
          {
            title: "MORE ACTIVE WASH TIME",
            text: "To make sure you can handle greater peaks of demand at any time, we have significantly reduced the auxiliary process times, raising the active wash time per batch. Quick filling and draining, quick heating and liquor exchange between the inner and the outer drum are the main benefits of the QuickExchange compartment. All this – together with the fast batch transfer from one compartment to the next – works like a ‘turbo‘ which boosts your wash performance without compromising quality.",
            img: "https://www.kannegiesser.com/fileadmin/_processed_/7/5/csm_dv1376030_231df937df.jpg"
          }
        ]
      },
      specs: {
        table: [
          { label: "Nominal batch sizes (based on cotton sheets):", value: "40/50/60/85/110/130 kg (88/110/132/187/242/287 lb)" },
          { label: "Hourly output (depending on the model):", value: "300 to 5,000 kg (700 to 11,000 lb)" }
        ]
      }
    }
  },
  "kannegiesser-powerpress": {
    category: "Washing Technology",
    "title": "Extraction Technology",
    "subtitle": "PowerPress",
    description: "High moisture extraction performance combined with fatigue strength.",
    "img": "https://www.kannegiesser.com/fileadmin/SHARED/Images/Products/Thumbs_PowerPress.png",
    tabs: {
      overview: {
        introTitle: "HIGH PERFORMANCE MEETS MINIMUM RESIDUAL MOISTURE",
        introText: "Lower Residual Moisture Leads to Energy Savings in the Finishing Process. One of the most important development objectives of a modern moisture extraction press is optimum performance with all types of laundry, even for very short wash cycles and delicate articles. The subsequent energy savings during drying and ironing are considerable and high performance hydraulics and control system ensure gentle treatment of all textiles.",
        applicationsTitle: "Fully tailored to your application",
        applications: [
          { name: "Cruise Ships", img: "https://www.kannegiesser.com/fileadmin/SHARED/Images/Products/Applications/Keyvisual_Kreuzfahrtschiff.jpg" },
          { name: "Airlines", img: "https://www.kannegiesser.com/fileadmin/SHARED/Images/Products/Applications/Keyvisual_Fluglinien.jpg" },
          { name: "Hospitality & Restaurant", img: "https://www.kannegiesser.com/fileadmin/SHARED/Images/Products/Applications/Keyvisual_Hotel.jpg" },
          { name: "Healthcare", img: "https://www.kannegiesser.com/fileadmin/SHARED/Images/Products/Applications/Keyvisual_Krankenhaus.jpg" }
        ],
        summaryBlocks: [
          {
            title: "PowerPress - The output maximizer",
            subtitle: "Redefining moisture extraction",
            text: "The Kannegiesser PowerPress redefines moisture extraction in batch washer systems."
          },
          {
            title: "High moisture extraction performance",
            subtitle: "Reliability in the field",
            text: "There is no such thing as standard operation in the field. Overloading, bulky items, batches that fall apart easily are the norm. The PowerPress is optimally designed for this type of operation in the field. A high degree of reliability, even if the press is overloaded or when processing types of laundry liable to fall apart, is vital for the practical operation of the equipment."
          }
        ]
      },
      benefits: {
        blocks: [
          {
            title: "Simple operation, easy maintenance",
            text: "These two features are inextricably linked. A clearly designed machine construction with highest material standards and a completely newly designed collection tank makes maintenance very simple. The system remains clean and, therefore, perfectly hygienic and requires minimum maintenance. The PowerPress is controlled by a high performance yet easy to operate control system."
          }
        ]
      },
      technologies: {
        blocks: [
          {
            title: "The output maximized extraction press",
            subtitle: "Uncompromising performance and strength",
            text: "The high moisture extraction performance is uncompromisingly combined with fatigue strength - these characteristics feature the PowerPress series. The four components of moisture extraction technology (power, speed, water drainage and fatigue strength) are essential parts of the PowerPress and ensure higher output and energy savings in the entire process chain."
          },
          {
            title: "Operational safety at its best",
            text: "With Kannegiesser you get enduring reliability and operating safety – the base for high availability and low life-cycle costs!"
          }
        ]
      },
      specs: {
        table: [
          { label: "PowerPress PP 10", value: "1004 mm press cake diameter resulting in a low press cake height" },
          { label: "PowerPress PP 13", value: "Minimized Residual Moisture even for Large Batches with more than 85 kg" },
          { label: "PowerPress Universal", value: "Extremely compact measurements for smallest space conditions" }
        ]
      }
    }
  },
  "kannegiesser-powerdry": {
    category: "Washing Technology",
    "title": "Dryers",
    "subtitle": "PowerDry",
    description: "The most powerful dryer on the market.",
    "img": "https://www.kannegiesser.com/fileadmin/SHARED/Images/Products/Thumbs_PowerDry.png",
    tabs: {
      overview: {
        introTitle: "THE MOST POWERFUL DRYER ON THE MARKET",
        introText: "Optimized airflow within a dryer determines efficiency, performance and energy savings of a drying process. The construction of the PowerDry, especially the intelligent air recirculation, the inner cylinder construction and efficient heating units determine the optimized airflow. Innovative process control and heating management methods secure a low energy consumption while shortening overall process times. This combination is the reason for the PowerDry being the most efficient batch dryer on the market.",
        applicationsTitle: "Fully tailored to your application",
        applications: [
          { name: "Cruise Ships", img: "https://www.kannegiesser.com/fileadmin/SHARED/Images/Products/Applications/Keyvisual_Kreuzfahrtschiff.jpg" },
          { name: "Workwear", img: "https://www.kannegiesser.com/fileadmin/SHARED/Images/Products/Applications/Keyvisual_Schutzkleidung.jpg" },
          { name: "Healthcare", img: "https://www.kannegiesser.com/fileadmin/SHARED/Images/Products/Applications/Keyvisual_Krankenhaus.jpg" },
          { name: "Hospitality & Restaurant", img: "https://www.kannegiesser.com/fileadmin/SHARED/Images/Products/Applications/Keyvisual_Hotel.jpg" },
          { name: "Airlines", img: "https://www.kannegiesser.com/fileadmin/SHARED/Images/Products/Applications/Keyvisual_Fluglinien.jpg" },
          { name: "Mats", img: "https://www.kannegiesser.com/fileadmin/SHARED/Images/Products/Applications/Keyvisual_Matten.jpg" },
          { name: "Residental", img: "https://www.kannegiesser.com/fileadmin/SHARED/Images/Products/Applications/Keyvisual_Bewohner.jpg" }
        ],
        summaryBlocks: [
          {
            title: "Low Energy Consumption and High Capacity",
            subtitle: "Unmatched combination",
            text: "This combination is the reason for the PowerDry being the most efficient batch dryer on the market."
          },
          {
            title: "Universal Application Possibilities",
            subtitle: "For a wide range of items",
            text: "The increasing amount of processed good is also creating an increased diversity of items and materials. The PowerDry covers this diversity with its high flexibility. Possible applications for the PowerDry series include cotton, blended fabrics, laminates and even micro fibre textiles."
          }
        ]
      },
      benefits: {
        blocks: [
          {
            title: "Efficiency During the Drying Process",
            subtitle: "Low Energy Consumption Through Intelligent Air Circulation",
            text: "A constant heat distribution throughout the entire burner assembly is accomplished by the geometry of the burner assembly and the adjustable exhaust flap. Through a large opening in the outer cylinder the constantly distributed heat is evenly spread over the entire load in the inner cylinder."
          }
        ]
      },
      technologies: {
        blocks: [
          {
            title: "High air re-circulation for low energy consumption",
            text: "During the continuing drying process, the amount of exhaust and inlet air decreases within the drying process. Depending on the drying level of the goods, the majority of the exhaust air is recirculated by a separate exhaust flap, achieving an optimum amount of air re-circulation. The already heated air stays within the process. The necessary heat demand created by the atmospheric burner is drastically reduced.",
            img: "https://www.kannegiesser.com/fileadmin/_processed_/0/f/csm_PowerDry_Pic_Waermerueckgewinnung_51339cce39.jpg"
          },
          {
            title: "INFRATOUCH CONTROLLING",
            text: "For the exact determination of linen temperature at each point in time utilizing infrared measuring in the inner cylinder. Furthermore the Kannegiesser developed control algorithm allows an accurate drying process.",
            img: "https://www.kannegiesser.com/fileadmin/_processed_/7/1/csm_PowerDry_Pic_Infra-Touch-Regelung_3f7356ca93.jpg"
          },
          {
            title: "ECO2Power",
            text: "Due to continuously measuring of linen temperature with InfraTouch, together with supply air and exhaust air temperature, the optimal process adjustment will be realized. The result is a maximum air circulation rate and an ideal distribution of the linen in the inner cylinder. The higher the air recirculation in the process, the lower will be the demand for the heat demand supplied by the heating element (gas or steam). The results are not only significant energy savings, but also an exact determination of the material temperature. Both lead to an exact drying process and accurate predetermined drying point.",
            img: "https://www.kannegiesser.com/fileadmin/_processed_/8/3/csm_ECO2power_a0d376e426.jpg"
          }
        ]
      }
    }
  }
,
  "kannegiesser-powerswing": {
    category: "Washing Technology",
    "title": "Washer Extractors",
    "subtitle": "PowerSwing",
    description: "Industrial open-pocket washer-extractors designed for high-performance laundry processing.",
    "img": "https://www.kannegiesser.com/fileadmin/SHARED/Images/Products/Thumbs_PowerSwing.png",
    tabs: {
      overview: {
        introTitle: "FUTURA WASHER EXTRACTOR",
        introText: "The Kannegiesser Futura open-pocket washer-extractors are designed for high-performance laundry processing. Available in capacities from 110 kg to 250 kg, they support both manual and automatic loading and unloading. Engineered for high mechanical action and superior wash quality, they operate at an efficient 300 to 350 G-factor.",
        applicationsTitle: "Tailored to your needs",
        summaryBlocks: [
          { title: "High Extraction Efficiency", text: "Operates at 300 to 350 G for maximum moisture removal, reducing drying time." },
          { title: "JET-Rinsing Technology", text: "Minimizes fresh water consumption while maximizing output, utilizing innovations from tunnel washers." }
        ]
      },
      benefits: {
        blocks: [
          { title: "Barrier-Wall Options", text: "Models available in barrier-wall configurations, ensuring complete separation between soiled and clean linen for healthcare hygiene." },
          { title: "Noise Reduction", text: "Precision suspension and balancing keep noise levels below 70 dB(A) even during high-speed extraction." }
        ]
      },
      technologies: {
        blocks: [
          { title: "Carewash Perforation", text: "Uses a highly specific cylinder perforation pattern designed to be exceptionally gentle on textiles while maintaining wash mechanical action." },
          { title: "Advanced SPS Control", text: "Equipped with an intelligent SPS control system capable of storing and managing up to 99 customized washing programs." }
        ]
      },
      specs: { table: [ { label: "Nominal Capacity", value: "110 kg to 250 kg" }, { label: "Extraction Force", value: "300 - 350 G" }, { label: "Control System", value: "99-Program SPS" } ] }
    }
  },
  "kannegiesser-cleanroom": {
    category: "Washing Technology",
    "title": "Clean Room Technology",
    "subtitle": "HighClean",
    description: "Cleanroom barrier washer tailored for high particle control and sterilization.",
    "img": "https://www.kannegiesser.com/fileadmin/SHARED/Images/Products/Keyvisual_Cleanroom.png",
    tabs: {
      overview: {
        introTitle: "FAVORIT VARIO HIGHCLEAN",
        introText: "The Favorit Vario HighClean is specialized clean room technology ensuring complete particle control and absolute barrier separation. Designed for sensitive microelectronics, pharmaceuticals, and highly sterile healthcare applications.",
        applicationsTitle: "Cleanroom Applications",
        summaryBlocks: [
          { title: "Absolute Barrier Separation", text: "Physically separates loading (soiled) and unloading (clean) sides to eliminate cross-contamination." },
          { title: "Particle Control", text: "Engineered with specialized seals and airflow management to prevent particle generation in clean environments." }
        ]
      },
      benefits: {
        blocks: [
          { title: "Hygienic Design", text: "Constructed with premium electro-polished stainless steel to prevent bacterial growth and simplify sterilization." },
          { title: "Process Reliability", text: "Complete monitoring of temperature, chemical dosing, and water levels ensures every batch meets stringent cleanroom standards." }
        ]
      },
      technologies: {
        blocks: [
          { title: "HEPA Filtration Integration", text: "Compatible with cleanroom ventilation systems, maintaining positive pressure to protect clean linen." }
        ]
      },
      specs: { table: [ { label: "Application", value: "ISO Clean Room Environments" }, { label: "Design", value: "Barrier Washer Extractor" }, { label: "Material", value: "Electro-polished Stainless Steel" } ] }
    }
  },
  "kannegiesser-disinfection": {
    category: "Washing Technology",
    "title": "Disinfection Sluices",
    "subtitle": "CWD / CD",
    description: "Reliable disinfection sluices ensuring strict separation of soiled and clean carts and linen.",
    "img": "https://www.kannegiesser.com/fileadmin/SHARED/Images/Products/Thumbs_CD_Desi.png",
    tabs: {
      overview: {
        introTitle: "CWD / CD DISINFECTION SLUICES",
        introText: "CWD and CD units provide the essential disinfection layers for healthcare laundries. They safely and automatically disinfect transport carts and containers, ensuring complete isolation of soiled and clean linen environments.",
        applicationsTitle: "Hospital & Healthcare",
        summaryBlocks: [
          { title: "Automated Disinfection", text: "Reliable and repeatable thermal/chemical disinfection processes for carts and trolleys." },
          { title: "Barrier Integrity", text: "Serves as the physical pass-through barrier between the unclean sorting area and the clean finishing area." }
        ]
      },
      benefits: {
        blocks: [
          { title: "Compliance", text: "Meets strict healthcare and hospital laundry regulations for infection control." },
          { title: "High Throughput", text: "Fast cycle times ensure cart logistics do not become a bottleneck in the laundry workflow." }
        ]
      },
      technologies: {
        blocks: [
          { title: "Precision Dosing", text: "Accurate injection of disinfection chemicals to guarantee efficacy while minimizing waste." }
        ]
      },
      specs: { table: [ { label: "Function", value: "Cart and Trolley Disinfection" }, { label: "Type", value: "Pass-through Sluice" } ] }
    }
  }
};

const DATA_INFO_DATA = {
  "kannegiesser-process-control": {
    category: "Data Information Systems",
    title: "Process Control",
    subtitle: "IMPROVING PERFORMANCE WITH SMARTER PROCESSES",
    description: "Process control optimizes laundry logistics by using batch data.",
    img: "https://www.kannegiesser.com/fileadmin/SHARED/Images/Products/Category_Process-Control.png",
    tabs: {
      overview: {
        introTitle: "PROCESS CONTROL",
        introText: "One key to premium laundry services at competitive rates is efficiency. Process control optimizes laundry logistics by using batch data to improve throughput.",
        applicationsTitle: "Smart Logistics",
        summaryBlocks: [
          { title: "Batch Management", text: "Seamless integration between sorting, washing, and finishing." }
        ]
      },
      benefits: {
        blocks: [
          { title: "Continuous Flow", text: "Prevents bottlenecks and starvation of finishing equipment." }
        ]
      },
      technologies: {
        blocks: [
          { title: "Centralized Routing", text: "Automatically routes batches based on category and priority." }
        ]
      },
      specs: { table: [ { label: "Integration", value: "Full System Compatibility" } ] }
    }
  },
  "kannegiesser-monitoring": {
    category: "Data Information Systems",
    title: "Monitoring",
    subtitle: "ANALYZE AND IMPROVE YOUR PRODUCTION",
    description: "Complete overview and analytics of your laundry operations.",
    img: "https://www.kannegiesser.com/fileadmin/SHARED/Images/Products/Thumbs_DataInfoSystems.png",
    tabs: {
      overview: {
        introTitle: "MONITORING",
        introText: "Analyze and improve your production with real-time data insights and historical analytics.",
        applicationsTitle: "Smart Laundry Dashboard",
        summaryBlocks: [
          { title: "Real-Time Tracking", text: "Monitor every machine and batch in real time." }
        ]
      },
      benefits: {
        blocks: [
          { title: "Efficiency Gains", text: "Identify bottlenecks and optimize utility consumption." }
        ]
      },
      technologies: {
        blocks: [
          { title: "Dashboard Analytics", text: "Cloud-based or local dashboards for deep management insights." }
        ]
      },
      specs: { table: [ { label: "Integration", value: "All Kannegiesser Equipment" } ] }
    }
  }
};
const PRODUCT_DATA = { ...WASHING_TECH_DATA, ...FLATWORK_DATA, ...DATA_INFO_DATA };

export default function KannegiesserProduct() {
  const { id } = useParams();
  const product = PRODUCT_DATA[id];
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    window.scrollTo(0, 0);
    setActiveTab('overview');
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white">
        <h1 className="text-4xl font-bold text-[#001F3F] mb-4">Product Not Found</h1>
        <Link to="/brands/kannegiesser" className="text-[#00509B] hover:underline font-bold">
          Return to Kannegiesser
        </Link>
      </div>
    );
  }

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
          return (
            <motion.div 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
              className="w-full pb-24"
            >
              {/* Intro Title & Text */}
              <div className="max-w-7xl mx-auto px-6 lg:px-16 mb-16">
                <h2 className="text-[32px] lg:text-[40px] font-bold text-[#00509B] mb-6 uppercase tracking-tight">{product.tabs.overview.introTitle}</h2>
                {product.tabs.overview.introSubtitle && (
                  <p className="text-[20px] lg:text-[24px] text-slate-500 font-light leading-relaxed mb-6">
                    {product.tabs.overview.introSubtitle}
                  </p>
                )}
                <p className="text-sm lg:text-[15px] text-slate-700 leading-relaxed font-normal max-w-5xl">
                  {product.tabs.overview.introText}
                </p>
              </div>

              {/* Light Divider */}
              <div className="w-full max-w-7xl mx-auto px-6 lg:px-16 mb-16">
                 <div className="h-[1px] w-full bg-slate-200"></div>
              </div>

              {/* Applications Carousel */}
              <div className="max-w-[100vw] overflow-hidden mb-16">
                <div className="max-w-7xl mx-auto px-6 lg:px-16">
                  <h2 className="text-[24px] lg:text-[28px] font-bold text-[#00509B] mb-8 uppercase tracking-tight">{product.tabs.overview.applicationsTitle}</h2>
                </div>
                {/* Horizontal Scrolling Carousel to emulate the slider */}
                <div className="flex overflow-x-auto gap-6 px-6 lg:px-16 pb-8 snap-x snap-mandatory scrollbar-hide" style={{ scrollbarWidth: 'none' }}>
                  {product.tabs.overview?.applications?.map((app, idx) => (
                    <div key={idx} className="w-[85vw] md:w-[400px] lg:w-[450px] shrink-0 snap-start bg-white border border-slate-100 shadow-sm flex flex-col group cursor-pointer hover:shadow-lg transition-shadow">
                      <div className="w-full h-[220px] md:h-[250px] overflow-hidden bg-slate-100">
                        <img src={app.img} alt={app.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                      </div>
                      <div className="p-6 md:p-8 flex-1">
                        <h3 className="text-[18px] md:text-[20px] font-bold text-slate-800 mb-4">{app.name}</h3>
                        <p className="text-slate-600 text-[14px] leading-relaxed">{app.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Full Width Blue Banner */}
              {product.tabs.overview.bannerTitle && (
                <div className="w-full bg-[#00509B] text-white py-16 px-6 lg:px-16 my-16">
                  <div className="max-w-7xl mx-auto">
                    <h2 className="text-[24px] lg:text-[32px] font-bold uppercase mb-2 leading-tight">{product.tabs.overview.bannerTitle}</h2>
                    <h3 className="text-[18px] lg:text-[22px] font-light text-white/90 leading-relaxed">{product.tabs.overview.bannerSubtitle}</h3>
                    <div className="w-full h-[1px] bg-white/20 mt-10"></div>
                  </div>
                </div>
              )}

              {/* Summary Blocks */}
              <div className="max-w-7xl mx-auto px-6 lg:px-16">
                {product.tabs.overview.summaryTitle && (
                  <h2 className="text-[24px] lg:text-[28px] font-bold text-[#00509B] mb-12 uppercase">{product.tabs.overview.summaryTitle}</h2>
                )}
                
                <div className="flex flex-col gap-16">
                  {product.tabs.overview?.summaryBlocks?.map((block, idx) => (
                    <div key={idx} className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-stretch">
                      
                      {/* Left Text */}
                      <div className="flex-1 py-4">
                        {block.title && <h3 className="text-[20px] lg:text-[24px] font-bold text-slate-800 mb-2">{block.title}</h3>}
                        {block.subtitle && <h4 className="text-[14px] font-bold text-slate-500 mb-6 uppercase tracking-wider">{block.subtitle}</h4>}
                        {block.text && <p className="text-slate-600 leading-relaxed font-light text-[15px]">{block.text}</p>}
                      </div>
                      
                      {/* Right Grey Box */}
                      {block.boxTitle && block.boxBullets && (
                        <div className="flex-1 bg-[#EBEBEB] p-8 lg:p-12">
                          <p className="text-[14px] text-slate-500 mb-6 uppercase tracking-widest">{block.boxTitle}</p>
                          <ul className="list-disc pl-5 text-[15px] text-slate-700 leading-relaxed space-y-2 font-light">
                            {block.boxBullets.map((bullet, bIdx) => (
                              <li key={bIdx} className="pl-2">{bullet}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          );

      
      case 'benefits':
        return (
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
            className="space-y-24"
          >
            {product.tabs.benefits?.blocks?.map((block, idx) => (
              <div key={idx} className={`flex flex-col ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-20`}>
                <div className="flex-1">
                  <h2 className="text-3xl lg:text-4xl font-bold text-[#001F3F] mb-4 uppercase">{block.title}</h2>
                  {block.subtitle && <h3 className="text-xl font-bold text-[#00509B] mb-6">{block.subtitle}</h3>}
                  <p className="text-lg text-slate-600 leading-relaxed whitespace-pre-line">{block.text}</p>
                </div>
                {block.img && (
                  <div className="flex-1 w-full relative">
                    <div className="absolute inset-0 bg-[#00509B]/5 rounded-3xl transform -rotate-3 scale-105 -z-10" />
                    <img src={block.img} alt={block.title} className="w-full h-auto rounded-3xl shadow-2xl border border-slate-100" />
                  </div>
                )}
              </div>
            ))}
          </motion.div>
        );

      case 'technologies':
          return (
            <motion.div 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
              className="space-y-24"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-[#001F3F] mb-12 uppercase border-b-4 border-[#00509B] inline-block pb-2">Technical Overview</h2>
              
              {product.tabs.technologies?.blocks?.map((block, idx) => (
                <div key={idx} className={`flex flex-col ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-20`}>
                  <div className="flex-1">
                    {block.title && <h2 className="text-3xl lg:text-4xl font-bold text-[#001F3F] mb-4 uppercase">{block.title}</h2>}
                    {block.subtitle && <h3 className="text-xl font-bold text-[#00509B] mb-6">{block.subtitle}</h3>}
                    {block.text && <p className="text-lg text-slate-600 leading-relaxed whitespace-pre-line">{block.text}</p>}
                  </div>
                  {block.img && (
                    <div className="flex-1 w-full bg-white p-8 rounded-3xl shadow-xl border border-slate-100 flex items-center justify-center">
                      <img src={block.img} alt={block.title || "Technology image"} className="max-h-[300px] w-auto object-contain drop-shadow-md" />
                    </div>
                  )}
                </div>
              ))}

              {/* Injected Specs Table */}
              {product.tabs.specs && (
                <div className="mt-24">
                  <h2 className="text-3xl lg:text-4xl font-bold text-[#001F3F] mb-8 uppercase border-b-4 border-[#00509B] inline-block pb-2">Technical Data</h2>
                  <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse min-w-[400px]">
                        <tbody>
                          {product.tabs.specs.table?.map((row, idx) => (
                            <tr key={idx} className="border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
                              <th className="py-6 px-6 md:px-8 text-[#001F3F] font-bold w-1/3 md:w-1/2 align-top">{row.label}</th>
                              <td className="py-6 px-6 md:px-8 text-slate-600 break-words">{row.value}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 flex flex-col">
      <Navbar />

      {/* Immersive Hero Section (Matching Official Kannegiesser UI) */}
      <section className="relative w-full h-[85vh] min-h-[600px] mt-[68px] flex flex-col overflow-hidden bg-slate-900">
        
        {/* Full Image Background (Keyvisual) */}
        <div className="absolute inset-0 z-0">
          {product.heroImg ? (
            <img src={product.heroImg} alt={product.title} className="w-full h-full object-cover object-center opacity-90" />
          ) : (
            <>
              <img src={factoryBg} alt="Factory Background" className="w-full h-full object-cover opacity-60 mix-blend-multiply" />
              <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/40 to-white/80" />
            </>
          )}
        </div>

        {/* Top Kannegiesser Blue Navigation Bar (Replicating the official UI) */}
        <div className="relative z-20 w-full h-14 bg-[#00509B] text-white flex items-center justify-between px-6 lg:px-12 shadow-md">
          <div className="flex items-center gap-4">
            <span className="font-bold tracking-wide text-[15px]">myKannegiesser</span>
            <Globe className="w-4 h-4" />
          </div>
          
          <div className="flex items-center gap-6">
            <Link to="/contact" className="hover:text-slate-200 transition-colors text-sm font-semibold">Contact</Link>
            <Search className="w-4 h-4 cursor-pointer hover:text-slate-200" />
            <Menu className="w-5 h-5 cursor-pointer hover:text-slate-200" />
          </div>

          {/* Center Floating Logo Box */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bg-white px-8 lg:px-12 py-5 shadow-lg z-30 flex items-center justify-center min-w-[200px] h-[72px]">
            <img src={kannegiesserLogo} alt="Kannegiesser" className="h-6 lg:h-7 object-contain filter invert grayscale contrast-[200] brightness-0" />
          </div>
        </div>

        {/* Back Button */}
        <div className="relative z-20 w-full px-6 lg:px-12 mt-6">
           <Link 
            to="/brands/kannegiesser" 
            className="inline-flex items-center gap-2 text-[#00509B] hover:text-[#003B73] transition-colors font-bold tracking-widest text-xs uppercase bg-white/80 px-4 py-2 rounded-full backdrop-blur-md shadow-sm"
           >
            <ArrowLeft className="w-4 h-4" />
            Back to Catalog
           </Link>
        </div>

        {/* Machine Rendering (Only show if no heroImg) */}
        {!product.heroImg && (
          <div className="relative z-10 flex-1 flex flex-col justify-end items-center pb-12 lg:pb-16">
             <motion.img 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                src={product.img} 
                alt={product.title}
                className="w-full max-w-[90%] lg:max-w-[75%] max-h-[55vh] object-contain drop-shadow-2xl"
             />
             <div className="w-[70%] h-4 bg-black/20 blur-xl rounded-[100%] mt-[-15px]"></div>
          </div>
        )}
      </section>
      
      {/* Sticky Bottom Blue Bar (Product Name + Tabs) */}
      <div className="sticky top-[68px] z-50 w-full bg-[#00509B] text-white flex flex-col lg:flex-row items-center justify-between px-6 lg:px-16 min-h-[80px] shadow-lg">
        
          
          {/* Left: Product Name */}
          <div className="flex items-center gap-4 py-4 lg:py-0">
             <div className="w-10 h-10 bg-[#222] rounded-full flex items-center justify-center shrink-0 shadow-inner">
                <div className="w-4 h-4 border-2 border-white rounded-full flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                </div>
             </div>
             <h1 className="text-xl md:text-2xl lg:text-[28px] font-extrabold uppercase tracking-tight">
               {product.subtitle}
             </h1>
          </div>

          {/* Right: Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-10 h-full">
            {['overview', ...(product.tabs.benefits ? ['benefits'] : []), ...(product.tabs.technologies ? ['technologies'] : [])].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative capitalize font-bold text-sm lg:text-base py-5 transition-colors ${activeTab === tab ? 'text-white' : 'text-white/60 hover:text-white'}`}
              >
                {tab}
                {activeTab === tab && (
                  <motion.div 
                    layoutId="activeTabKannegiesserNew"
                    className="absolute bottom-0 left-0 right-0 h-1 bg-white"
                  />
                )}
              </button>
            ))}
          </div>
        
      </div>

      {/* Dynamic Content */}
      <section className="py-20 bg-white flex-1">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <AnimatePresence mode="wait">
            {renderTabContent()}
          </AnimatePresence>
        </div>
      </section>

      <Footer />
    </div>
  );
}