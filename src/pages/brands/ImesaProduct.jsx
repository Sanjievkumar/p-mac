import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, CheckCircle2, Cpu, Droplets, Wind, Layers, RefreshCw, ShieldCheck, Factory, Award } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

// 8 Official IMESA Products Across 4 Categories
const IMESA_PRODUCTS = {
  // ── 1. Washing Machines ──
  "imesa-lm-series": {
    category: "Washing Machines",
    title: "HIGH SPIN INDUSTRIAL WASHING MACHINES",
    subtitle: "LM Series (8 - 125 kg)",
    description: "Freestanding high spin industrial washing machines featuring the IM11 7\" capacitive touchscreen, high G-Factor (up to 400 G), and full Wet Cleaning compatibility.",
    img: "https://imesa.it/wp-content/uploads/2019/10/A_LM_14_18_23_F_1.png",
    heroImg: "https://imesa.it/wp-content/uploads/2019/10/A_LM_14_18_23_F_1.png",
    badge: "High Spin 400 G",
    tabs: {
      overview: {
        introTitle: "HIGH SPIN FREESTANDING WASHING EXCELLENCE",
        introSubtitle: "The IMESA LM series delivers maximum washing efficiency, advanced dynamic spin, and intelligent resource savings.",
        introText: "The LM series represents the pinnacle of IMESA's high-spin industrial washing technology. Equipped with the revolutionary IM11 7-inch capacitive touchscreen computer, high G-Factor extraction (up to 400 G), and full Wet Cleaning compatibility, the LM series is engineered to deliver pristine wash results while significantly cutting water, detergent, and energy consumption. Built entirely in AISI 304 stainless steel with advanced vertical and horizontal shock absorption, no ground anchoring is required.",
        applicationsTitle: "TAILORED TO DEMANDING APPLICATIONS",
        applications: [
          { name: "Hotels & Resorts", img: "https://www.kannegiesser.com/fileadmin/SHARED/Images/Products/Applications/Keyvisual_Hotel.jpg", text: "Treating luxury linens, duvets, and delicate fabrics with precision temperature and water level controls." },
          { name: "Hospitals & Care Homes", img: "https://www.kannegiesser.com/fileadmin/SHARED/Images/Products/Applications/Keyvisual_Krankenhaus.jpg", text: "Rigorous thermal disinfection cycles and programmable chemical dosing ensuring complete patient safety." },
          { name: "Commercial & Wet Cleaning", img: "https://www.kannegiesser.com/fileadmin/SHARED/Images/Products/Applications/Keyvisual_Schutzkleidung.jpg", text: "Advanced gentle drum motion and low-speed extraction tailored for delicate woolens, silks, and technical garments." },
          { name: "Cruise Ships & Marine", img: "https://www.kannegiesser.com/fileadmin/SHARED/Images/Products/Applications/Keyvisual_Kreuzfahrtschiff.jpg", text: "Compact footprint and vibration dampening engineered for heavy offshore shifts in marine environments." }
        ],
        bannerTitle: "INTELLIGENT WASHING POWERED BY IM11 & IMCONNECT IoT CLOUD",
        bannerSubtitle: "Real-time telemetry, exact running costs per kg, and boundless cycle personalization.",
        summaryTitle: "LM SERIES ENGINEERING HIGHLIGHTS",
        summaryBlocks: [
          {
            title: "IM11 7\" Capacitive Touchscreen",
            subtitle: "Tablet-like intuitive navigation",
            text: "Easy program creation, customizable cycle icons, multi-lingual support, and real-time cycle parameter adjustments on the fly.",
            bullets: [
              "7-inch high resolution capacitive display",
              "Unlimited programmable washing cycles",
              "USB port for rapid program transfer and telemetry download",
              "IoT Wi-Fi integration with IMConnect Portal"
            ]
          },
          {
            title: "Freestanding High Spin (400 G)",
            subtitle: "Vibration dampening without foundation anchoring",
            text: "High-speed extraction drastically minimizes residual linen moisture, shortening drying times by up to 30% and saving significant energy.",
            boxTitle: "AT A GLANCE",
            boxBullets: [
              "G-Factor up to 400 G for minimum residual moisture",
              "Vertical and horizontal shock absorbers",
              "No structural ground anchoring needed",
              "Operates quietly below 65 dB(A)"
            ]
          }
        ]
      },
      benefits: {
        blocks: [
          {
            title: "Dynamic Water & Detergent Savings",
            subtitle: "Conscious consumption through smart load detection",
            text: "The LM series accurately calculates water intake and chemical dosing proportional to real batch weight, reducing utility costs and eliminating environmental waste.",
            boxBullets: [
              "Up to 25% water recovery system option",
              "Automatic peristaltic pump interface (up to 11 chemical pumps)",
              "Precision level sensors and temperature control"
            ]
          },
          {
            title: "Wet Cleaning Compatibility",
            subtitle: "Sustainable fabric care alternative to dry cleaning",
            text: "Gentle mechanical action combined with specialized water baths and biodegradable detergents cleans natural fibers, tailored garments, and delicate linens safely without harsh chemical solvents."
          },
          {
            title: "AISI 304 Stainless Steel Construction",
            subtitle: "Heavy-duty durability for 24/7 commercial cycles",
            text: "Both inner drum and outer tub are made from high-grade stainless steel with smooth, snag-free perforations that treat delicate textiles gently while preventing corrosion."
          }
        ]
      },
      technologies: {
        blocks: [
          {
            title: "IMConnect Cloud Telemetry",
            subtitle: "Real-time remote plant supervision",
            text: "Monitor machine availability, review energy and water consumption logs, calculate running costs per kilogram, and receive predictive maintenance alerts on smartphone or desktop."
          },
          {
            title: "Frequency Controlled Inverter Drive",
            subtitle: "Smooth motor acceleration and dynamic imbalance protection",
            text: "Electronic inverter drives eliminate mechanical shocks, softly ramping drum rotation from gentle wash speeds up to 1,180 RPM high extraction while balancing loads dynamically."
          }
        ],
        specs: {
          table: [
            { label: "Capacities Available", value: "8, 11, 14, 18, 23, 26, 32, 40, 55, 70, 85, 100, 125 kg" },
            { label: "G-Factor / Spin Speed", value: "350 - 400 G / up to 1,180 RPM" },
            { label: "Drum Material", value: "AISI 304 Stainless Steel (Inner & Outer)" },
            { label: "Heating Options", value: "Electric, Hot Water, Direct Steam, Indirect Steam, Dual Electric+Steam" },
            { label: "Control System", value: "IM11 7\" Touchscreen Computer with USB & Wi-Fi" },
            { label: "Installation Type", value: "Freestanding (No ground anchoring required)" }
          ]
        }
      }
    }
  },

  "imesa-d2w-barrier": {
    category: "Washing Machines",
    title: "HYGIENE BARRIER WASHERS",
    subtitle: "D2W Series (18 - 55 kg)",
    description: "Pass-through double-door aseptic barrier washers engineered in accordance with EN 14065 (RABC) to eliminate cross-contamination.",
    img: "https://imesa.it/wp-content/uploads/2022/01/Lavatrice-a-barriera-asettica_Barrier-Washers_D2W_18_5.jpg",
    heroImg: "https://imesa.it/wp-content/uploads/2022/01/Lavatrice-a-barriera-asettica_Barrier-Washers_D2W_18_5.jpg",
    badge: "EN 14065 Certified",
    tabs: {
      overview: {
        introTitle: "ASEPTIC BARRIER WASHING: ZERO CONTAMINATION RISK",
        introSubtitle: "Pass-through double-door architecture designed in accordance with EN 14065 (RABC) sanitary standards.",
        introText: "The IMESA D2W series hygiene barrier washing machines are purpose-built for environments where biocontamination prevention is paramount. Featuring two opposed doors across a physical barrier partition wall, loading is performed strictly from the contaminated side, and unloading occurs exclusively on the clean, sterile side. With intelligent electronic interlocking, automated drum positioning, and IM11 dual-display monitoring, the D2W guarantees total microbiological security.",
        applicationsTitle: "STERILE & HIGH-HYGIENE FACILITIES",
        applications: [
          { name: "Hospitals & Surgical Theatres", img: "https://www.kannegiesser.com/fileadmin/SHARED/Images/Products/Applications/Keyvisual_Krankenhaus.jpg", text: "Physical partition barrier strictly preventing transmission of infectious pathogens and hospital-acquired infections (HAIs)." },
          { name: "Cleanrooms & Pharmaceutical", img: "https://www.kannegiesser.com/fileadmin/SHARED/Images/Products/Applications/Keyvisual_Reinraum.jpg", text: "Particle-free, validated washing cycles compliant with stringent pharmaceutical and biotechnology cleanroom rules." },
          { name: "Senior Care & Nursing Homes", img: "https://www.kannegiesser.com/fileadmin/SHARED/Images/Products/Applications/Keyvisual_Bewohner.jpg", text: "Gentle disinfection cycles offering complete peace of mind for resident clothing and healthcare linens." },
          { name: "Food Industry & Protective Wear", img: "https://www.kannegiesser.com/fileadmin/SHARED/Images/Products/Applications/Keyvisual_Schutzkleidung.jpg", text: "Strict HACCP hygiene barrier compliance for culinary uniforms, meatpacking gear, and clean industrial workwear." }
        ],
        bannerTitle: "ABSOLUTE HYGIENIC ISOLATION IN COMPLIANCE WITH EN 14065",
        bannerSubtitle: "Complete separation between contaminated and sterile environments with dual-display tracking.",
        summaryTitle: "D2W SANITARY ENGINEERING HIGHLIGHTS",
        summaryBlocks: [
          {
            title: "Double Interlocked Door System",
            subtitle: "Fail-safe physical barrier",
            text: "Electronic safety controls ensure the clean-side door remains locked until a wash cycle is successfully completed. Both doors can never be opened simultaneously.",
            bullets: [
              "Pass-through design built into sanitary wall partition",
              "Interlocking logic prevents ambient air crossover",
              "Loading exclusively on dirty side; unloading on clean side",
              "Secondary status display on clean side"
            ]
          },
          {
            title: "Maintenance From Dirty Side Only",
            subtitle: "Preserving cleanroom integrity",
            text: "All technical servicing, chemical detergent connections, and programming are isolated to the soiled area so service technicians never enter the sterile zone.",
            boxTitle: "STANDARDS & SAFETY",
            boxBullets: [
              "Full compliance with EN 14065 RABC system",
              "Automatic drum positioning at cycle end",
              "Pneumatic automated sliding doors",
              "Hermetic wall sealing flange"
            ]
          }
        ]
      },
      benefits: {
        blocks: [
          {
            title: "Elimination of Cross-Contamination",
            subtitle: "Guaranteed biocontamination safety",
            text: "By establishing an airtight physical partition between infected and clean laundry areas, cross-contamination is eliminated at every step of the laundry process.",
            boxBullets: [
              "Validated thermal disinfection wash programs",
              "Real-time temperature logging for health authority audits",
              "Dual-display keeps clean-room operators informed"
            ]
          },
          {
            title: "High Extraction Performance (G-Factor 350-400)",
            subtitle: "Lower residual moisture for sanitary finishing",
            text: "Powerful centrifugal spin leaves minimal residual moisture in heavy medical linen, reducing finishing drying times and thermal requirements."
          }
        ]
      },
      technologies: {
        blocks: [
          {
            title: "IM11 Dual-Display Architecture",
            subtitle: "Touchscreen master on dirty side + cleanroom monitor",
            text: "Full programming and diagnostic telemetry via 7\" IM11 capacitive touchscreen on the dirty side, paired with a dedicated status display on the clean side showing remaining cycle time."
          },
          {
            title: "Pneumatic Automatic Drum Positioning",
            subtitle: "Effortless, ergonomic loading & unloading",
            text: "At the end of every wash cycle, the drum automatically rotates and locks in position with doors perfectly aligned with the outer hatch for rapid unloading."
          }
        ],
        specs: {
          table: [
            { label: "Capacities Available", value: "18, 23, 30, 55 kg" },
            { label: "G-Factor / Spin Speed", value: "350 - 400 G / up to 1,000 RPM" },
            { label: "Sanitary Certification", value: "EN 14065 (RABC Biocontamination Standard)" },
            { label: "Door Mechanism", value: "Pneumatic Sliding Interlocked Opposed Doors" },
            { label: "Heating Options", value: "Electric, Direct Steam, Indirect Steam" },
            { label: "Construction", value: "AISI 304 Stainless Steel Panels, Drum, and Outer Tub" }
          ]
        }
      }
    }
  },

  // ── 2. Dryers ──
  "imesa-es-smart": {
    category: "Dryers",
    title: "ES SMART LINE TUMBLE DRYERS",
    subtitle: "ES Smart Line (11 - 36 kg)",
    description: "Commercial tumble dryers equipped with the patented D-FLOW axial airflow system, IM10 touchscreen computer, and standard alternating reversing drum.",
    img: "https://imesa.it/wp-content/uploads/2025/04/ES2025_SMART.png",
    heroImg: "https://imesa.it/wp-content/uploads/2025/04/ES2025_SMART.png",
    badge: "D-FLOW System",
    tabs: {
      overview: {
        introTitle: "D-FLOW AIRFLOW: HIGH DRYING SPEED WITH FABRIC CARE",
        introSubtitle: "Uniform temperature distribution, reversing drum, and IM10 touchscreen control.",
        introText: "The IMESA ES Smart Line represents the ideal commercial drying solution for hotels, laundromats, and healthcare institutions. Featuring the patented D-FLOW axial airflow system, heated air travels directly through the drum core, ensuring uniform moisture extraction and shorter cycle times. Powered by the IM10 color touchscreen computer with automatic reversing drum rotation as standard, the ES Smart Line prevents linen tangling and optimizes thermal efficiency.",
        applicationsTitle: "VERSATILE COMMERCIAL DRYING",
        applications: [
          { name: "Hotels & Hospitality", img: "https://www.kannegiesser.com/fileadmin/SHARED/Images/Products/Applications/Keyvisual_Hotel.jpg", text: "Fluffing and drying towels, blankets, and table linens with soft care drum perforation." },
          { name: "Laundromats & Self-Service", img: "https://www.kannegiesser.com/fileadmin/SHARED/Images/Products/Applications/Keyvisual_Matten.jpg", text: "Intuitive touch operation, payment token/cashless integration, and robust build for high public usage." },
          { name: "Residential & Care Homes", img: "https://www.kannegiesser.com/fileadmin/SHARED/Images/Products/Applications/Keyvisual_Bewohner.jpg", text: "Low noise emission and anti-crease cooling cycles gentle on delicate personal clothing." }
        ],
        bannerTitle: "D-FLOW AXIAL AIRFLOW CUTS DRYING TIMES & ENERGY BY UP TO 20%",
        bannerSubtitle: "Even heat penetration and alternating rotation prevent hot spots and fabric creasing.",
        summaryTitle: "ES SMART LINE KEY SPECIFICATIONS",
        summaryBlocks: [
          {
            title: "D-FLOW Axial Airflow System",
            subtitle: "Straight-through thermal transfer",
            text: "Directs heated air axially through the center of the tumble drum, maximizing air contact with linen and expelling moist air quickly.",
            bullets: [
              "Up to 20% shorter drying cycle times",
              "Significant reduction in kWh / gas consumption",
              "Gentle temperature treatment protects fibers",
              "Uniform drying across thick and thin articles"
            ]
          },
          {
            title: "IM10 Touchscreen & Reversing Drum",
            subtitle: "Smart controls and anti-tangle rotation",
            text: "Standard alternating drum direction keeps linen untangled and fluffy, while IM10 touch interface allows instant cycle customization.",
            boxTitle: "CORE HIGHLIGHTS",
            boxBullets: [
              "Standard alternating drum reversal",
              "Automatic Cool-Down phase",
              "Anti-Crease periodic rotation",
              "Double glass door reduces heat radiation"
            ]
          }
        ]
      },
      benefits: {
        blocks: [
          {
            title: "Shorter Cycles & Reduced Utility Bills",
            subtitle: "Optimized aerodynamics",
            text: "By optimizing the airflow trajectory and combining drum rotation with heat extraction, the ES Smart Line dries faster with lower energy draw.",
            boxBullets: [
              "Large surface pull-out lint drawer filter",
              "Independent dual electric power stages",
              "Optional humidity sensor stops cycle automatically"
            ]
          },
          {
            title: "Gentle 'Soft Care' Drum Perforation",
            subtitle: "Prolonged textile lifespan",
            text: "High-grade AISI 304 stainless steel drum interior has smooth, snag-free perforations that prevent pillage and fabric wear over years of heavy use."
          }
        ]
      },
      technologies: {
        blocks: [
          {
            title: "IM10 Color Touch Computer",
            subtitle: "Icon-driven multi-step temperature control",
            text: "Allows precise multi-phase drying programs with customized temperature steps, cooling times, and fan suction adjustments for delicate synthetic and woolen items."
          },
          {
            title: "Easy-Clean Pull-Out Lint Drawer",
            subtitle: "Quick daily maintenance",
            text: "Front-accessible lint filter drawer with high filtration mesh can be inspected and cleared in seconds, ensuring continuous unrestricted airflow."
          }
        ],
        specs: {
          table: [
            { label: "Capacities Available", value: "11, 14, 18, 23, 26, 32, 34 kg" },
            { label: "Drum Volumes", value: "195, 247, 322, 417, 462, 572, 646 Liters" },
            { label: "Airflow Technology", value: "Patented D-FLOW Axial Air Circulation" },
            { label: "Drum Material", value: "AISI 304 Stainless Steel with Soft Care Perforation" },
            { label: "Reversing Drum", value: "Standard Across All Models" },
            { label: "Heating Options", value: "Electric, Gas (Natural/LPG), Steam" }
          ]
        }
      }
    }
  },

  "imesa-es-premium": {
    category: "Dryers",
    title: "ES PREMIUM LINE TUMBLE DRYERS",
    subtitle: "ES Premium Line (11 - 75 kg)",
    description: "Top-of-the-range industrial tumble dryers featuring high-capacity options up to 75 kg, precision residual moisture sensor, and variable drum speed.",
    img: "https://imesa.it/wp-content/uploads/2019/10/A_ES-55_75_BL_F-copia.jpg",
    heroImg: "https://imesa.it/wp-content/uploads/2019/10/A_ES-55_75_BL_F-copia.jpg",
    badge: "Heavy Duty 75 kg",
    tabs: {
      overview: {
        introTitle: "HEAVY INDUSTRIAL DRYING CAPACITY & RESIDUAL MOISTURE CONTROL",
        introSubtitle: "Designed for continuous high-throughput laundry plants and demanding fabric requirements.",
        introText: "The IMESA ES Premium Line is designed for demanding laundry plants that require robust continuous drying capacity. Ranging from 11 kg all the way to heavy industrial 75 kg batches, the Premium series combines precision residual moisture sensor control, variable drum and fan speed regulation (DSC/FSC), and advanced thermal insulation. Built with heavy-gauge AISI 304 stainless steel drums, it handles the highest volume textile requirements with ease.",
        applicationsTitle: "LARGE-SCALE TEXTILE PROCESSING",
        applications: [
          { name: "Industrial Central Laundries", img: "https://www.kannegiesser.com/fileadmin/SHARED/Images/Products/Applications/Keyvisual_Hotel.jpg", text: "Massive throughput capacity supporting continuous multi-shift operations without thermal bottlenecks." },
          { name: "Large Healthcare Complexes", img: "https://www.kannegiesser.com/fileadmin/SHARED/Images/Products/Applications/Keyvisual_Krankenhaus.jpg", text: "Strict moisture control to exact residual thresholds for high-volume sheets and healthcare garments." },
          { name: "Institutional & Workwear Laundries", img: "https://www.kannegiesser.com/fileadmin/SHARED/Images/Products/Applications/Keyvisual_Schutzkleidung.jpg", text: "Heavy cotton coveralls, technical uniforms, and institutional bedding dried efficiently." }
        ],
        bannerTitle: "EXACT RESIDUAL MOISTURE SENSING PREVENTS OVER-DRYING & WEAR",
        bannerSubtitle: "Saves energy, preserves fabric softness, and prepares linen perfectly for ironers.",
        summaryTitle: "ES PREMIUM ADVANCED CAPABILITIES",
        summaryBlocks: [
          {
            title: "Precision Residual Moisture Control (RMC)",
            subtitle: "Automated cycle termination",
            text: "Detects remaining moisture in the linen core during the drying process, ending the heating phase as soon as the target percentage is reached.",
            bullets: [
              "Prevents thermal fiber damage and electrostatic charges",
              "Stops wasting gas and electricity once linen is dry",
              "Leaves ideal residual moisture (approx. 15-20%) for direct flatwork ironing",
              "Automatic sensor calibration"
            ]
          },
          {
            title: "Industrial High Capacities (55 & 75 kg)",
            subtitle: "Built for massive batch volume",
            text: "Drum volume up to 1,500 liters with reinforced bearings, cast iron pulleys, and heavy structural frames built for continuous 24/7 reliability.",
            boxTitle: "HEAVY DUTY SPECS",
            boxBullets: [
              "Up to 1,500 L drum volume",
              "180° extra-wide door opening angle",
              "Reinforced structural frame & heavy bearings",
              "Multi-source heating: Electric, Gas, Steam, Thermal Oil"
            ]
          }
        ]
      },
      benefits: {
        blocks: [
          {
            title: "Drum Speed Control (DSC) & Fan Speed Control (FSC)",
            subtitle: "Custom aerodynamic tuning",
            text: "Allows fine regulation of drum rotation speed and exhaust suction power, ensuring light fabrics float effortlessly while heavy towels tumble vigorously.",
            boxBullets: [
              "Adaptive rotation prevents linen clumping",
              "Inverter controlled drive motors",
              "Custom suction profiles for lint-heavy materials"
            ]
          },
          {
            title: "Heavy Thermal & Acoustic Insulation",
            subtitle: "Cool outer casing and quiet plant environment",
            text: "High-density thermal panels trap heat inside the drying chamber, keeping laundry rooms comfortable and reducing external heat losses."
          }
        ]
      },
      technologies: {
        blocks: [
          {
            title: "Multi-Fuel Heating Systems",
            subtitle: "Electric, Gas, High Pressure Steam, or Thermal Oil",
            text: "Engineered with quick-reaction dampers and high-output burner technology that deliver instantaneous heat with maximum safety controls."
          },
          {
            title: "Reversible 180° Loading Door",
            subtitle: "Ergonomic cart-to-drum transfers",
            text: "Oversized door with double glass insulation swings open up to 180° for unobstructed laundry cart loading and unloading."
          }
        ],
        specs: {
          table: [
            { label: "Capacities Available", value: "11, 14, 18, 23, 32, 55, 75 kg" },
            { label: "Drum Volumes", value: "Up to 1,500 Liters (ES 75)" },
            { label: "Moisture Sensing", value: "Standard Electronic Residual Moisture Control (RMC)" },
            { label: "Speed Modulation", value: "Drum Speed Control (DSC) & Fan Speed Control (FSC)" },
            { label: "Heating Options", value: "Electric, Natural Gas, LPG, Steam, Thermal Oil" },
            { label: "Door Opening Angle", value: "180° Reversible with Double Glass" }
          ]
        }
      }
    }
  },

  // ── 3. Flatwork Ironers ──
  "imesa-fi-easy": {
    category: "Flatwork Ironers",
    title: "FI EASY LINE FLATWORK IRONERS",
    subtitle: "FI EASY Line (Ø 250 - 330 mm)",
    description: "Simple, robust, and cost-effective flatwork chest ironers featuring digital thermostat temperature control, uniform pressure torsion bar, and emergency manual release.",
    img: "https://imesa.it/wp-content/uploads/2022/11/fi2022_02.380.png",
    heroImg: "https://imesa.it/wp-content/uploads/2022/11/fi2022_02.380.png",
    badge: "Essential & Robust",
    tabs: {
      overview: {
        introTitle: "SIMPLE, RELIABLE & ACCESSIBLE FLATWORK FINISHING",
        introSubtitle: "The practical and economical choice for restaurants, boutique hotels, and small commercial laundries.",
        introText: "The IMESA FI EASY Line flatwork ironers offer the perfect combination of simplicity, high ironing quality, and attractive investment cost. Featuring an intuitive electromechanical control with a precise digital thermostat, uniform ironing pressure guaranteed by IMESA's torsion bar system, and a comfortable 930 mm work height, the FI EASY line delivers perfectly pressed sheets and tablecloths with minimal operator effort.",
        applicationsTitle: "COMPACT & HOSPITALITY FLATWORK",
        applications: [
          { name: "Restaurants & Catering", img: "https://www.kannegiesser.com/fileadmin/SHARED/Images/Products/Applications/Keyvisual_Hotel.jpg", text: "Delivering crisp, pristine tablecloths and cloth napkins for fine dining presentations." },
          { name: "Boutique Hotels & B&Bs", img: "https://www.kannegiesser.com/fileadmin/SHARED/Images/Products/Applications/Keyvisual_Hotel.jpg", text: "Smooth, wrinkle-free bedsheets and pillowcases ironed on-premises with low power consumption." },
          { name: "Care Homes & Clinics", img: "https://www.kannegiesser.com/fileadmin/SHARED/Images/Products/Applications/Keyvisual_Bewohner.jpg", text: "High temperature pressing providing thermal sanitization for resident bed linens." }
        ],
        bannerTitle: "PERFECT IRONING PRESSURE WITH UNIFORM TORSION BAR TECHNOLOGY",
        bannerSubtitle: "Guarantees identical pressure across the entire roller length for consistent finish.",
        summaryTitle: "FI EASY LINE ESSENTIAL FEATURES",
        summaryBlocks: [
          {
            title: "Uniform Torsion Bar Pressure",
            subtitle: "Even contact from edge to edge",
            text: "IMESA's mechanical torsion bar distributes ironing pressure equally across the entire chest width, preventing uneven creases or damp edges on wide sheets.",
            bullets: [
              "Uniform mechanical contact pressure",
              "Eliminates center/edge pressing discrepancies",
              "Smooth chromed steel heated chest",
              "Standard start/stop ironing foot pedal"
            ]
          },
          {
            title: "Emergency Manual Chest Lift",
            subtitle: "Total linen safety during blackouts",
            text: "In the event of an electrical blackout, an ergonomic manual release lever lifts the heated chest away from the roller, preventing fabric scorching.",
            boxTitle: "ERGONOMICS & SAFETY",
            boxBullets: [
              "Comfortable 930 mm ergonomic feed height",
              "Full-length hand-safe finger guard",
              "Front linen insertion and return table",
              "Minimal space footprint"
            ]
          }
        ]
      },
      benefits: {
        blocks: [
          {
            title: "Straightforward Electromechanical Operation",
            subtitle: "No training required",
            text: "Intuitive switchgear and digital thermostat make the machine operable by any staff member with zero learning curve.",
            boxBullets: [
              "Accurate electronic digital thermostat",
              "Standard cotton padding with Nomex option",
              "Optional inverter for electronic speed control"
            ]
          },
          {
            title: "Front Feed & Front Return Layout",
            subtitle: "Space-saving laundry layout",
            text: "Operated comfortably by a single operator from the front, allowing the ironer to be placed against a wall to conserve floor space."
          }
        ]
      },
      technologies: {
        blocks: [
          {
            title: "Chromed Steel Heated Chest",
            subtitle: "Non-porous mirror finish",
            text: "Precision polished chromed chest eliminates friction and provides superior thermal transfer, creating a high-gloss finish on tablecloths and linens."
          },
          {
            title: "Full-Length Safety Guard & Emergency Stop",
            subtitle: "CE Certified operator safety",
            text: "Hand-safe finger protection bar instantly stops roller rotation and disengages the heated chest if touched by the operator's hands."
          }
        ],
        specs: {
          table: [
            { label: "Roller Diameters", value: "Ø 250 mm & Ø 330 mm" },
            { label: "Roller Lengths", value: "1000, 1200, 1500, 1600, 1800, 2000 mm" },
            { label: "Working Feed Height", value: "930 mm" },
            { label: "Temperature Control", value: "Digital Thermostat" },
            { label: "Pressure Control", value: "Uniform Torsion Bar System" },
            { label: "Safety Systems", value: "Manual Chest Release Lever, Hand-Safe Bar, Emergency Stop" }
          ]
        }
      }
    }
  },

  "imesa-fi-smart": {
    category: "Flatwork Ironers",
    title: "FI SMART LINE FLATWORK IRONERS",
    subtitle: "FI SMART Line (Ø 250 - 330 mm)",
    description: "Full-featured flatwork ironers equipped with IM10 touchscreen computer, patented electronic linear pressure control, Nomex coating, and automatic speed-temperature compensation.",
    img: "https://imesa.it/wp-content/uploads/2022/11/fi2022_03.369.png",
    heroImg: "https://imesa.it/wp-content/uploads/2022/11/fi2022_03.369.png",
    badge: "Full Optional IM10",
    tabs: {
      overview: {
        introTitle: "FULL-FEATURED FLATWORK IRONING WITH IM10 TOUCH",
        introSubtitle: "Patented electronic pressure control, automated speed compensation, and Nomex coating standard.",
        introText: "The IMESA FI SMART Line is the top-of-the-range flatwork ironer engineered for intensive professional use. Built with the IM10 touch screen computer, standard inverter speed regulation, automatic speed-temperature compensation, and patented electronic linear pressure adjustment, the FI SMART adapts dynamically to any fabric thickness. Complete with high-temperature Nomex coating, built-in steam suction, and Cool-Down energy savings, it is the benchmark in commercial flatwork finishing.",
        applicationsTitle: "HIGH-END HOSPITALITY & COMMERCIAL FLATWORK",
        applications: [
          { name: "Luxury Hotels & Spas", img: "https://www.kannegiesser.com/fileadmin/SHARED/Images/Products/Applications/Keyvisual_Hotel.jpg", text: "Achieving five-star linen finishing with mirror-smooth crispness on heavy Egyptian cotton and satin duvets." },
          { name: "Event & Banquet Services", img: "https://www.kannegiesser.com/fileadmin/SHARED/Images/Products/Applications/Keyvisual_Hotel.jpg", text: "Handling thick banquet cloths, folded runners, and napkins with adaptive electronic linear pressure." },
          { name: "Commercial Laundry Operations", img: "https://www.kannegiesser.com/fileadmin/SHARED/Images/Products/Applications/Keyvisual_Krankenhaus.jpg", text: "Continuous daily throughput supported by standard vapor extraction and Cool-Down protection." }
        ],
        bannerTitle: "PATENTED ELECTRONIC PRESSURE CONTROL & SMART TOUCH AUTOMATION",
        bannerSubtitle: "Automatically adjusts speed and pressure dynamically to match fabric dampness and thickness.",
        summaryTitle: "FI SMART LINE ADVANCED CAPABILITIES",
        summaryBlocks: [
          {
            title: "IM10 Touchscreen & Speed Compensation",
            subtitle: "Automatic speed-temperature regulation",
            text: "If damp linen cools the chest, the inverter automatically slows rotation speed proportionally, guaranteeing 100% dry and perfectly ironed results on every piece.",
            bullets: [
              "Intuitive color touchscreen with recipe library",
              "Automated speed-temperature compensation",
              "Standard frequency inverter drive",
              "Real-time temperature and production tracking"
            ]
          },
          {
            title: "Patented Electronic Pressure Control",
            subtitle: "Adapts to any fabric thickness",
            text: "Linear electronic drive regulates pressure uniformly across the roller, allowing seamless transition from lightweight napkins to multi-layered duvet folds.",
            boxTitle: "STANDARD INCLUSIONS",
            boxBullets: [
              "Nomex heat-resistant roller cover included",
              "Built-in vapor extraction suction system",
              "Energy-saving Cool-Down cycle",
              "'Thick' feeding delay function"
            ]
          }
        ]
      },
      benefits: {
        blocks: [
          {
            title: "Built-In Vapor Extraction Suction System",
            subtitle: "Instant moisture evacuation",
            text: "Extracts evaporated steam directly from the roller surface, leaving the linen completely dry, crisp, and ready for immediate folding.",
            boxBullets: [
              "Exhausts moisture out of the laundry room",
              "Prevents moisture condensation on the return table",
              "Maintains optimal roller temperature"
            ]
          },
          {
            title: "Standard Nomex High-Temperature Coating",
            subtitle: "Long-lasting industrial durability",
            text: "Durable Nomex padding withstands temperatures up to 220°C without degradation, ensuring years of smooth, snag-free gliding."
          }
        ]
      },
      technologies: {
        blocks: [
          {
            title: "Energy-Saving Cool-Down Function",
            subtitle: "Preserves padding and eliminates thermal waste",
            text: "At the end of a shift, the Cool-Down function shuts off heaters while keeping the roller turning until chest temperature drops below 80°C, extending padding lifespan."
          },
          {
            title: "'Thick' Fabric Feeding Function",
            subtitle: "Effortless feeding of folded hems",
            text: "Delays chest closure for a few moments during insertion, allowing thick folded seams and multi-layer hems to enter the roller without snagging or bunching."
          }
        ],
        specs: {
          table: [
            { label: "Roller Diameters", value: "Ø 250 mm & Ø 330 mm" },
            { label: "Roller Lengths", value: "1000, 1200, 1500, 1600, 1800, 2000 mm" },
            { label: "Control System", value: "IM10 Touch Screen Computer (IoT Ready)" },
            { label: "Speed Regulation", value: "Electronic Inverter with Speed/Temp Compensation" },
            { label: "Pressure Regulation", value: "Patented Electronic Linear Drive" },
            { label: "Standard Features", value: "Nomex Coating, Vapor Suction, Cool-Down, 'Thick' Feeding Delay" }
          ]
        }
      }
    }
  },

  // ── 4. Drying Ironers ──
  "imesa-mca-ironer": {
    category: "Drying Ironers",
    title: "MCA COMPACT DRYING IRONERS",
    subtitle: "MCA Line (Ø 33 cm, 1500 - 2100 mm)",
    description: "Compact drying ironers capable of drying and ironing damp linen directly from high-spin washing machines in a single pass with wall-installation design.",
    img: "https://imesa.it/wp-content/uploads/2024/12/IMESA_Calandre-asciuganti_Drying-Ironing_MCA_NEW_FRONTE-1.png",
    heroImg: "https://imesa.it/wp-content/uploads/2024/12/IMESA_Calandre-asciuganti_Drying-Ironing_MCA_NEW_FRONTE-1.png",
    badge: "Dry & Iron in 1 Pass",
    tabs: {
      overview: {
        introTitle: "COMBINED DRYING & IRONING IN A SINGLE COMPACT PASS",
        introSubtitle: "Eliminate the tumble drying stage: take damp linen directly from high-spin washer to ironer.",
        introText: "The IMESA MCA Line compact drying ironers allow commercial laundries to dry and iron damp linen (up to 50% residual moisture) in a single operation, bypassing the tumble dryer completely. With a 33 cm diameter heated roller, Nomex ironing belts, and a compact wall-installation footprint where linen is returned to the front, the MCA Line saves immense floor space, labor time, and energy costs.",
        applicationsTitle: "HOTELS, RESTAURANTS & COMPACT LAUNDRIES",
        applications: [
          { name: "Boutique Hotels & Lodges", img: "https://www.kannegiesser.com/fileadmin/SHARED/Images/Products/Applications/Keyvisual_Hotel.jpg", text: "Drastically reduce laundry processing time by eliminating the pre-dryer step for all bedsheets." },
          { name: "Restaurants & Banqueting", img: "https://www.kannegiesser.com/fileadmin/SHARED/Images/Products/Applications/Keyvisual_Hotel.jpg", text: "Tablecloths and napkins processed straight from the spin extractor to crisp presentation." },
          { name: "Care Facilities & Clinics", img: "https://www.kannegiesser.com/fileadmin/SHARED/Images/Products/Applications/Keyvisual_Krankenhaus.jpg", text: "Sanitary high-heat drying and pressing in a space-saving wall-mounted footprint." }
        ],
        bannerTitle: "DRY AND IRON DIRECTLY FROM WASHER: SAVE UP TO 50% TIME & ENERGY",
        bannerSubtitle: "Eliminates tumble dryer loading, transfers, and double energy expenditure.",
        summaryTitle: "MCA COMPACT DRYING IRONER HIGHLIGHTS",
        summaryBlocks: [
          {
            title: "Direct One-Step Finishing",
            subtitle: "Drying and ironing combined",
            text: "Accepts damp flatwork with up to 50% residual moisture straight from high-spin washing machines (LM series), completing drying and finishing simultaneously.",
            bullets: [
              "Eliminates tumble dryer step entirely",
              "Cuts overall finishing cycle time in half",
              "Nomex heat-resistant ironing belts",
              "Electronic inverter speed control"
            ]
          },
          {
            title: "Space-Saving Wall Installation",
            subtitle: "Front feed and front return",
            text: "Installed directly against a wall since finished linen returns to the front catch table, making it ideal for compact laundry spaces.",
            boxTitle: "SAFETY & DESIGN",
            boxBullets: [
              "Compact footprint placed against the wall",
              "Full-length hand-safe emergency bar",
              "Dual emergency stop pushbuttons",
              "Large receiving table keeps linen off the floor"
            ]
          }
        ]
      },
      benefits: {
        blocks: [
          {
            title: "Significant Labor & Utility Savings",
            subtitle: "Half the handling, half the power",
            text: "Operators handle the linen once instead of transferring batches between dryers and ironers, cutting labor hours and total utility expenditure.",
            boxBullets: [
              "Available in Electric and Gas heating",
              "Precise electronic temperature control",
              "Built-in steam exhaust suction fan"
            ]
          },
          {
            title: "Nomex Heat-Resistant Ironing Belts",
            subtitle: "Superior tension and fabric protection",
            text: "Heavy-duty Nomex belts hold linen firmly against the heated 33 cm roller, transferring heat smoothly without puckering or fabric distortion."
          }
        ]
      },
      technologies: {
        blocks: [
          {
            title: "33 cm Diameter Heated Roller",
            subtitle: "Ground and polished steel surface",
            text: "High-thermal-conductivity roller distributes heat evenly across the entire ironing width, ensuring uniform evaporation across the full fabric sheet."
          },
          {
            title: "Electronic Inverter Speed Control",
            subtitle: "Infinitely variable ironing speed",
            text: "Allows operators to adjust roller speed to match linen moisture levels, article thickness, and staffing speeds."
          }
        ],
        specs: {
          table: [
            { label: "Roller Diameter", value: "Ø 330 mm (33 cm)" },
            { label: "Ironing Widths", value: "1500, 1800, 2100 mm" },
            { label: "Acceptable Moisture Level", value: "Up to 45% - 50% Residual Moisture" },
            { label: "Heating Options", value: "Electric or Gas (Natural/LPG)" },
            { label: "Installation Type", value: "Compact Wall Installation (Front Return)" },
            { label: "Belt Material", value: "High-Temperature Nomex Belts" }
          ]
        }
      }
    }
  },

  "imesa-mcm-ironer": {
    category: "Drying Ironers",
    title: "MCM INDUSTRIAL DRYING IRONERS",
    subtitle: "MCM Line (Ø 50 cm, 2500 - 3200 mm)",
    description: "High-capacity industrial drying ironers featuring a 500 mm roller diameter with up to 84% circumferential fabric contact and modular feeder/folder integration.",
    img: "https://imesa.it/wp-content/uploads/2022/01/Calandre-asciuganti_Drying-Ironing_MCM_3.jpg",
    heroImg: "https://imesa.it/wp-content/uploads/2022/01/Calandre-asciuganti_Drying-Ironing_MCM_3.jpg",
    badge: "84% Contact Surface",
    tabs: {
      overview: {
        introTitle: "HIGH-CAPACITY INDUSTRIAL DRYING & FINISHING",
        introSubtitle: "Large 500 mm roller diameter with up to 84% contact surface for massive hourly outputs.",
        introText: "The IMESA MCM Series represents the heavy-duty industrial pinnacle of drying ironers. Featuring a massive 500 mm diameter heated roller and expansive ironing widths up to 3200 mm, the MCM provides up to 84% circumferential fabric contact for unmatched thermal transfer. Controlled by the IM10 touchscreen computer and available with automated feeding bands, longitudinal and cross folders, and two independent ironing lanes, the MCM delivers up to 140 kg/hour of flawless flatwork.",
        applicationsTitle: "LARGE INDUSTRIAL FLATWORK PROCESSING",
        applications: [
          { name: "Industrial Laundry Plants", img: "https://www.kannegiesser.com/fileadmin/SHARED/Images/Products/Applications/Keyvisual_Hotel.jpg", text: "Continuous processing of hotel duvets, king-size sheets, and banquet linens at high hourly throughputs." },
          { name: "Hospital Central Laundries", img: "https://www.kannegiesser.com/fileadmin/SHARED/Images/Products/Applications/Keyvisual_Krankenhaus.jpg", text: "Thermal sanitization and rapid evaporation meeting strict healthcare productivity targets." },
          { name: "Commercial Linen Rental Services", img: "https://www.kannegiesser.com/fileadmin/SHARED/Images/Products/Applications/Keyvisual_Schutzkleidung.jpg", text: "Automated feeding and folding with precise stack counting and multi-lane operation." }
        ],
        bannerTitle: "84% CONTACT SURFACE & MODULAR FEEDER / FOLDER AUTOMATION",
        bannerSubtitle: "Massive thermal surface area delivers outputs up to 140+ kg/h directly from the extractor.",
        summaryTitle: "MCM INDUSTRIAL ADVANCED HIGHLIGHTS",
        summaryBlocks: [
          {
            title: "500 mm Roller with 84% Contact Angle",
            subtitle: "Maximum heat absorption",
            text: "Linen stays in direct contact with the heated polished steel roller across up to 84% of its circumference, achieving extraordinary evaporation rates.",
            bullets: [
              "500 mm (approx. 50 cm) industrial roller diameter",
              "Ironing widths: 2500, 2800, and 3200 mm",
              "Hourly output from 60 kg/h up to 140+ kg/h",
              "Up to 84% circumferential fabric contact"
            ]
          },
          {
            title: "Integrated Feeder & Folder Automation",
            subtitle: "Modular industrial finishing line",
            text: "Configurable with automated suction feeding belts and integrated longitudinal/cross folders for complete one-operator flatwork automation.",
            boxTitle: "AUTOMATION MODES",
            boxBullets: [
              "Dual independent ironing lane mode",
              "Integrated automatic length & cross folder",
              "Front and rear motorized output",
              "IM10 Touchscreen Industry 4.0 control"
            ]
          }
        ]
      },
      benefits: {
        blocks: [
          {
            title: "Dual Independent Ironing Lanes",
            subtitle: "Versatile simultaneous processing",
            text: "Operators can process two separate lanes of smaller linens (e.g. pillowcases, napkins) simultaneously side-by-side with independent folding configurations.",
            boxBullets: [
              "CE Directive 97/23/CE PED Certified Steam heating",
              "Modulating high-efficiency Gas heating",
              "Electric heating with multi-stage regulation"
            ]
          },
          {
            title: "Automatic Speed/Temperature Synchronization",
            subtitle: "Consistent quality control",
            text: "The IM10 computer monitors roller temperature continuously, automatically modulating inverter speed so damp linens emerge 100% dry and beautifully pressed."
          }
        ]
      },
      technologies: {
        blocks: [
          {
            title: "IM10 Touchscreen Computer Interface",
            subtitle: "Total process oversight",
            text: "Stores custom recipes with specific speeds, temperatures, and fold patterns. Tracks operating hours, utility usage, and provides remote diagnostic telemetry."
          },
          {
            title: "Full-Length Safety Systems & Reversal Pedal",
            subtitle: "Operator protection and convenience",
            text: "Features a full-length hand-safe guard bar, dual emergency stops, and an optional remote reverse pedal to safely extract misfed linen instantly."
          }
        ],
        specs: {
          table: [
            { label: "Roller Diameter", value: "Ø 500 mm (50 cm)" },
            { label: "Ironing Widths", value: "2500, 2800, 3200 mm" },
            { label: "Circumferential Contact", value: "Up to 84% Contact Angle" },
            { label: "Hourly Production", value: "60 - 140+ kg/h" },
            { label: "Heating Options", value: "Electric, Gas, or Steam (Directive 97/23/CE PED Certified)" },
            { label: "Automation Options", value: "Suction Feeder Bands, Integrated Longitudinal & Cross Folder" }
          ]
        }
      }
    }
  }
};

// Aliases mapping for backward compatibility and various slug inputs
const SLUG_ALIASES = {
  "imesa-washing-machines": "imesa-lm-series",
  "lm-series": "imesa-lm-series",
  "high-spin-industrial-washing-machines": "imesa-lm-series",
  "d2w-barrier": "imesa-d2w-barrier",
  "hygiene-barrier-washers": "imesa-d2w-barrier",
  "imesa-dryers": "imesa-es-premium",
  "es-smart": "imesa-es-smart",
  "es-smart-line": "imesa-es-smart",
  "es-premium": "imesa-es-premium",
  "es-premium-line": "imesa-es-premium",
  "fi-easy": "imesa-fi-easy",
  "fi-smart": "imesa-fi-smart",
  "mca-series": "imesa-mca-ironer",
  "mca-ironer": "imesa-mca-ironer",
  "mcm-series": "imesa-mcm-ironer",
  "mcm-ironer": "imesa-mcm-ironer"
};

export default function ImesaProduct() {
  const { id } = useParams();
  const rawId = (id || '').toLowerCase().trim();
  const normalizedId = rawId.replace(/\s+/g, '-');

  // Robust product lookup: exact key -> alias -> normalized -> substring/title match -> fallback
  const resolvedKey = IMESA_PRODUCTS[rawId] ? rawId 
    : SLUG_ALIASES[rawId] || SLUG_ALIASES[normalizedId] || IMESA_PRODUCTS[normalizedId] ? (SLUG_ALIASES[rawId] || SLUG_ALIASES[normalizedId] || normalizedId)
    : Object.keys(IMESA_PRODUCTS).find(k => {
        const p = IMESA_PRODUCTS[k];
        return k.includes(normalizedId) || 
               normalizedId.includes(k) || 
               p.title.toLowerCase().includes(rawId) ||
               p.subtitle.toLowerCase().includes(rawId);
      }) || "imesa-lm-series";

  const product = IMESA_PRODUCTS[resolvedKey] || IMESA_PRODUCTS["imesa-lm-series"];
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    window.scrollTo(0, 0);
    setActiveTab('overview');
  }, [id]);

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, y: -20 }}
            className="w-full pb-24"
          >
            {/* Intro Title & Text */}
            <div className="max-w-7xl mx-auto px-6 lg:px-16 mb-16">
              <h2 className="text-[28px] lg:text-[38px] font-bold text-[#001F3F] mb-4 uppercase tracking-tight">
                {product.tabs?.overview?.introTitle}
              </h2>
              {product.tabs?.overview?.introSubtitle && (
                <p className="text-[18px] lg:text-[22px] text-[#00A3E0] font-semibold leading-relaxed mb-6">
                  {product.tabs.overview.introSubtitle}
                </p>
              )}
              <p className="text-sm lg:text-base text-slate-700 leading-relaxed font-normal max-w-5xl text-justify">
                {product.tabs?.overview?.introText}
              </p>
            </div>

            {/* Light Divider */}
            <div className="w-full max-w-7xl mx-auto px-6 lg:px-16 mb-16">
              <div className="h-[1px] w-full bg-slate-200"></div>
            </div>

            {/* Applications Carousel */}
            {product.tabs?.overview?.applications && (
              <div className="max-w-[100vw] overflow-hidden mb-16">
                <div className="max-w-7xl mx-auto px-6 lg:px-16">
                  <h3 className="text-xl lg:text-2xl font-bold text-[#001F3F] mb-8 uppercase tracking-tight">
                    {product.tabs.overview.applicationsTitle}
                  </h3>
                </div>
                <div className="flex overflow-x-auto gap-6 px-6 lg:px-16 pb-8 snap-x snap-mandatory scrollbar-hide" style={{ scrollbarWidth: 'none' }}>
                  {product.tabs.overview.applications.map((app, idx) => (
                    <div key={idx} className="w-[85vw] md:w-[380px] lg:w-[420px] shrink-0 snap-start bg-white border border-slate-200/90 rounded-2xl shadow-sm flex flex-col group hover:shadow-md transition-shadow overflow-hidden">
                      <div className="w-full h-[200px] md:h-[230px] overflow-hidden bg-slate-100">
                        <img src={app.img} alt={app.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                      </div>
                      <div className="p-6 flex-1 flex flex-col justify-between">
                        <div>
                          <h4 className="text-lg font-bold text-[#001F3F] mb-2">{app.name}</h4>
                          <p className="text-slate-600 text-xs md:text-sm leading-relaxed">{app.text}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Full Width Blue Banner */}
            {product.tabs?.overview?.bannerTitle && (
              <div className="w-full bg-gradient-to-r from-[#001F3F] to-[#00A3E0] text-white py-14 px-6 lg:px-16 my-16 shadow-inner">
                <div className="max-w-7xl mx-auto">
                  <h3 className="text-2xl lg:text-3xl font-extrabold uppercase mb-2 leading-tight">
                    {product.tabs.overview.bannerTitle}
                  </h3>
                  <p className="text-base lg:text-xl font-light text-white/90 leading-relaxed">
                    {product.tabs.overview.bannerSubtitle}
                  </p>
                </div>
              </div>
            )}

            {/* Summary Feature Blocks */}
            {product.tabs?.overview?.summaryBlocks && (
              <div className="max-w-7xl mx-auto px-6 lg:px-16">
                <h3 className="text-2xl lg:text-3xl font-bold text-[#001F3F] mb-10 uppercase">
                  {product.tabs.overview.summaryTitle}
                </h3>
                
                <div className="flex flex-col gap-12">
                  {product.tabs.overview.summaryBlocks.map((block, idx) => (
                    <div key={idx} className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-stretch bg-slate-50 p-8 rounded-3xl border border-slate-200/80">
                      {/* Left Text */}
                      <div className="flex-1">
                        {block.title && <h4 className="text-xl lg:text-2xl font-bold text-[#001F3F] mb-2">{block.title}</h4>}
                        {block.subtitle && <h5 className="text-xs font-bold text-[#00A3E0] mb-4 uppercase tracking-wider">{block.subtitle}</h5>}
                        {block.text && <p className="text-slate-600 leading-relaxed text-sm md:text-base">{block.text}</p>}
                        {block.bullets && (
                          <ul className="list-disc pl-5 text-sm md:text-base text-slate-600 leading-relaxed space-y-2 mt-4 font-normal">
                            {block.bullets.map((b, bIdx) => (
                              <li key={bIdx} className="pl-1">{b}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                      
                      {/* Right Grey Box */}
                      {(block.boxTitle || block.boxBullets) && (
                        <div className="flex-1 bg-white p-6 lg:p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-center">
                          {block.boxTitle && <h5 className="text-xs font-bold text-[#001F3F] mb-4 uppercase tracking-widest">{block.boxTitle}</h5>}
                          {block.boxBullets && (
                            <ul className="list-disc pl-5 text-sm text-slate-700 leading-relaxed space-y-2">
                              {block.boxBullets.map((b, bIdx) => (
                                <li key={bIdx} className="pl-1">{b}</li>
                              ))}
                            </ul>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        );

      case 'benefits':
        return (
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, y: -20 }}
            className="max-w-7xl mx-auto px-6 lg:px-16 space-y-16 pb-24"
          >
            <div className="border-b border-slate-200 pb-6 mb-12">
              <span className="text-xs font-bold text-[#00A3E0] tracking-[0.2em] uppercase block mb-2">ADVANTAGES</span>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-[#001F3F] tracking-tight uppercase">
                Key Operational Benefits
              </h2>
            </div>

            {product.tabs?.benefits?.blocks?.map((block, idx) => (
              <div key={idx} className="bg-slate-50 p-8 lg:p-12 rounded-3xl border border-slate-200/80 shadow-sm flex flex-col lg:flex-row gap-8 items-start">
                <div className="w-12 h-12 rounded-2xl bg-[#00A3E0]/15 flex items-center justify-center shrink-0 text-[#00A3E0] font-black text-xl">
                  {idx + 1}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-[#001F3F] mb-2">{block.title}</h3>
                  {block.subtitle && <h4 className="text-sm font-bold text-[#00A3E0] mb-4 uppercase tracking-wide">{block.subtitle}</h4>}
                  <p className="text-base text-slate-700 leading-relaxed">{block.text}</p>
                  {block.boxBullets && (
                    <ul className="list-disc pl-5 mt-4 space-y-2 text-sm text-slate-700">
                      {block.boxBullets.map((b, bIdx) => (
                        <li key={bIdx} className="pl-1">{b}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </motion.div>
        );

      case 'technologies':
        return (
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, y: -20 }}
            className="max-w-7xl mx-auto px-6 lg:px-16 space-y-20 pb-24"
          >
            <div>
              <div className="border-b border-slate-200 pb-6 mb-12">
                <span className="text-xs font-bold text-[#00A3E0] tracking-[0.2em] uppercase block mb-2">ENGINEERING</span>
                <h2 className="text-3xl lg:text-4xl font-extrabold text-[#001F3F] tracking-tight uppercase">
                  Technical Innovations
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {product.tabs?.technologies?.blocks?.map((block, idx) => (
                  <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between">
                    <div>
                      <div className="w-12 h-12 rounded-2xl bg-[#001F3F]/5 flex items-center justify-center mb-6">
                        <Cpu className="w-6 h-6 text-[#00A3E0]" />
                      </div>
                      <h3 className="text-xl font-bold text-[#001F3F] mb-2">{block.title}</h3>
                      {block.subtitle && <h4 className="text-xs font-bold text-[#00A3E0] mb-4 uppercase tracking-wider">{block.subtitle}</h4>}
                      <p className="text-sm text-slate-600 leading-relaxed">{block.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Specifications Table */}
            {product.tabs?.technologies?.specs?.table && (
              <div>
                <h3 className="text-2xl font-bold text-[#001F3F] mb-8 uppercase flex items-center gap-3">
                  <div className="w-3 h-8 bg-[#00A3E0] rounded-sm" /> Technical Data & Specifications
                </h3>
                <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse min-w-[500px]">
                      <tbody>
                        {product.tabs.technologies.specs.table.map((row, idx) => (
                          <tr key={idx} className="border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
                            <th className="py-5 px-6 md:px-8 text-[#001F3F] font-bold w-1/3 md:w-2/5 align-top text-sm md:text-base">{row.label}</th>
                            <td className="py-5 px-6 md:px-8 text-slate-700 text-sm md:text-base font-normal">{row.value}</td>
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
    <div className="imesa-product-page min-h-screen bg-slate-50 font-sans text-slate-800 flex flex-col">
      <Navbar />

      {/* ── 1. Immersive Hero Section ── */}
      <section className="relative w-full h-[80vh] min-h-[550px] mt-[68px] flex flex-col overflow-hidden bg-gradient-to-b from-[#001F3F] via-[#002B55] to-slate-900">
        
        {/* Subtle Background Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(#00A3E0 1.5px, transparent 1.5px)',
            backgroundSize: '32px 32px'
          }}
        />

        {/* Top Floating Bar: Back Button */}
        <div className="relative z-20 w-full px-6 lg:px-16 mt-6 flex justify-between items-center">
          <Link 
            to="/brands/imesa" 
            className="inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors font-bold tracking-widest text-xs uppercase bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full backdrop-blur-md shadow-sm border border-white/20"
          >
            <ArrowLeft className="w-4 h-4" /> Back to IMESA Catalog
          </Link>
          <span className="hidden sm:inline-block text-xs font-bold tracking-widest uppercase bg-[#00A3E0]/30 text-white px-3.5 py-1.5 rounded-full border border-[#00A3E0]/50 backdrop-blur-sm">
            {product.category}
          </span>
        </div>

        {/* Hero Machine Rendering */}
        <div className="relative z-10 flex-1 flex flex-col justify-end items-center pb-8 lg:pb-12 px-6">
          <motion.img 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            src={product.heroImg || product.img} 
            alt={product.title}
            className="w-full max-w-[85%] md:max-w-[65%] lg:max-w-[45%] max-h-[50vh] object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
          />
          {/* Machine Floor Reflection Shadow */}
          <div className="w-[60%] md:w-[45%] h-5 bg-black/40 blur-xl rounded-[100%] mt-[-10px]"></div>
        </div>
      </section>

      {/* ── 2. Sticky Subheader Bar (Model Name + Tabs) ── */}
      <div className="sticky top-[68px] z-50 w-full bg-[#001F3F] text-white flex flex-col lg:flex-row items-center justify-between px-6 lg:px-16 min-h-[80px] shadow-lg border-b border-white/10">
        
        {/* Left: Product Name */}
        <div className="flex items-center py-4 lg:py-0">
          <h1 className="text-lg md:text-xl lg:text-2xl font-black uppercase tracking-wide text-white">
            <span className="text-[#00A3E0] font-extrabold">{product.title.split(' ')[0]}</span>{' '}
            <span className="font-light">{product.title.split(' ').slice(1).join(' ')}</span>
          </h1>
        </div>

        {/* Right: Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-10 h-full">
          {['overview', 'benefits', 'technologies'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative capitalize font-bold text-sm lg:text-base py-5 transition-colors ${
                activeTab === tab ? 'text-white' : 'text-white/60 hover:text-white'
              }`}
            >
              {tab}
              {activeTab === tab && (
                <motion.div 
                  layoutId="activeTabImesa"
                  className="absolute bottom-0 left-0 right-0 h-1 bg-[#00A3E0]"
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* ── 3. Tab Content Section ── */}
      <section className="py-16 bg-white flex-1">
        <AnimatePresence mode="wait">
          {renderTabContent()}
        </AnimatePresence>
      </section>

      <Footer />
    </div>
  );
}
