import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const BADGE_ICONS = {
  'Efficiency': 'https://promactech.com/wp-content/uploads/elementor/thumbs/efficacy-qrww6c1jcuzebf08uau5t09fbs1r5ss0yq241whdyg.png',
  'Water Saving': 'https://promactech.com/wp-content/uploads/elementor/thumbs/drop-qrww6p7a0jhetyh4pgixrwxvn68w5k89oj6wrrxvjc.png',
  'Energy Saving': 'https://promactech.com/wp-content/uploads/elementor/thumbs/energy-control-qrww6p7a0jhetyh4pgixrwxvn68w5k89oj6wrrxvjc.png',
  'Easy Maintenance': 'https://promactech.com/wp-content/uploads/elementor/thumbs/rpa-qrww6p7a0jhetyh4pgixrwxvn68w5k89oj6wrrxvjc.png',
  'Temperature Control': 'https://promactech.com/wp-content/uploads/elementor/thumbs/thermometer-qrww6980scvjcl4carma3iz1jmfnipgtyc3nm2lkh4.png',
  'Speed Control': 'https://promactech.com/wp-content/uploads/elementor/thumbs/knob-qrww6o9ftpg4icihuy4b7f6f1sdixv4jcejfahz9pk.png'
};

const PRODUCT_DATA = {
  'sea-lion-tunnel-continuous-batch-washer-systems': {
    title: 'TUNNEL CONTINUOUS BATCH WASHER SYSTEMS',
    img: 'https://promactech.com/wp-content/uploads/2024/07/Pin-Merge-1024x819.png',
    images: [
      'https://promactech.com/wp-content/uploads/2024/07/Pin-Merge-1024x819.png'
    ],
    subtitle: 'LAUNDRY DRAGON - Smart and Powerful',
    description: 'Sea-Lion\'s "LAUNDRY DRAGON" is a smart and powerful tunnel washer system. Its design consists of the perfect, field proven combination of single drum and double drum technology.',
    features: [
      'Modules are fitted with chemical ports and water and drain valves to create the right wash liquor ratio, as well as strong lifting ribs for excellent mechanical action and bottom transfer processing.',
      'A built-in water recovery system makes best use of water consumption. Loading is by weight sensing conveyor or overhead sling monorail. Extraction is available in either multi-stage hydraulic press with exclusive double rinse feature or centrifugal extractor. SCADA control platform provides for full wash system programming and complete system monitoring.',
      'Sea-lion automated systems make good use of the Internet, Internet of Things (IoT) and robots to match machines to site requirements assuring the perfect utilization of resources. Systems deeply integrate big data and artificial intelligence to comply with the unprecedented trend of industrial evolution and innovation.'
    ],
    subProducts: [
      {
        title: 'LOADING CONVEYOR',
        img: 'https://promactech.com/wp-content/uploads/2024/07/LOADING-CONVEYOR.png',
        description: 'The system is easy for operation and precise for linen loading and transference. After putting the linen to be washed on the first groove, the loading system begins to weigh the linen automatically and the value is displayed at the screen of the controller.',
        features: [
          'Weighing accuracy of ±0.1kg',
          'Industrial touch screen controller with 0-99 programs built in.',
          'Technology of high-speed channel adopted for data collection and processing.',
          'The continuous batch washing system can be controlled with any controller installed in the system.',
          'The running condition can be timely monitored and displayed on the screen.',
          'Data can be saved as back-up because of the backup function.'
        ]
      },
      {
        title: 'TUNNEL WASHER SYSTEM',
        img: 'https://promactech.com/wp-content/uploads/2024/07/TUNNEL-WASHER-SYSTEM.png',
        description: 'Automatic continuous washing is the most effective linen washing and drying solution for large-scale manufacturing needs. It includes a loading system, a batch washer, extraction presses, and a drying system.',
        features: [
          'The SEA-LION SDX Tunnel washing system contains all of the necessary equipment for continuous washing, as well as synchronisation, programming, and laundry management.',
          'The SDX Tunnel washer can be customised based on the type of linen and soiling to be treated, as well as the consumption and chemical method used.',
          'SEA-LION SDX Tunnel Washers are available in 13 and 16 chambers, each with a capacity of 60 kg, and can process 1500-2000 kg of laundry each hour!',
          'The SDX Tunnel Washer interacts seamlessly and automatically with loading and unloading conveyors, water extraction presses, and dryers.',
          'The SDX Tunnel Washer is highly customised and versatile, meeting the labour, efficiency, and productivity requirements of practically any medium- to high-volume washing business.',
          'Tunnel Washer consumes significantly less water and energy, operates quietly, increases productivity, reduces labour, less space and provides a quality wash for any textile type.'
        ]
      },
      {
        title: 'EXTRACTION PRESS',
        img: 'https://promactech.com/wp-content/uploads/2024/07/EXTRACTION-PRESS.png',
        description: 'Hydraulically driven, head pressure is infinitely adjustable up to 45 bar. Graphical real-time monitoring of the entire pressing process, with 100 built-in pressing programs.',
        features: [
          'With unique wringing and rinsing function, rinsing is more thorough. Reinforced pressure head enables seamless pressure regulation.',
          'Finished press cakes can be discharged axially or sideways.',
          'Upper and lower steel beams are supported by four structural steel columns, and the anti-corrosion design is safe and reliable.',
          'Loading and unloading logic adopts fuzzy control technology and infrared induction for convenient and safe operation.',
          'For more flexible processing, a pass-through centrifuge extractor can be fitted to end of tunnel washer. Ideal for items that may be damaged by press.',
          'Features programmable extract speeds, and air bag and shock suspension system for smooth operation.'
        ]
      },
      {
        title: 'SHUTTLE CONVEYOR',
        img: 'https://promactech.com/wp-content/uploads/2024/07/SHUTTLE-CONVEYOR.png',
        description: 'The shuttle is used to transport linen cakes that have been washed and extracted to the pass-through type dryers for drying.',
        features: [
          'Available in single and double cake configurations.',
          'Safe operation via safety fencing and light guards.',
          'Strong rail and shuttle construction for reliable operation.'
        ]
      },
      {
        title: 'BATCH DRYER',
        img: 'https://promactech.com/wp-content/uploads/2024/07/BATCH-DRYER.png',
        description: 'Specially designed to break up, organize and thoroughly dry dehydrated laundry fabrics.',
        features: [
          'Available in steam or gas heating.',
          'Steam features "Rain Forest" heating method.',
          'Gas features 2-stage burner.',
          'Multiple control methods such as time, humidity, and temperature for best drying.',
          'Inverter controlled motors on drive and fans.',
          'Automatic lint filter function with available vacuum collector.',
          'Cylinder supported by strong roller bearings.',
          'Linen discharge by air blast (no tilting).'
        ]
      }
    ],
    sections: []
  },
  'sea-lion-washer-extractor': {
    title: 'WASHER EXTRACTOR',
    img: 'https://promactech.com/wp-content/uploads/2024/07/01.-WASHER-EXTRACTOR-1024x819.png',
    images: [
      'https://promactech.com/wp-content/uploads/2024/07/01.-WASHER-EXTRACTOR.png',
      'https://promactech.com/wp-content/uploads/2024/07/01.-WASHER-EXTRACTOR-2.png',
      'https://promactech.com/wp-content/uploads/2024/07/02.-TILTING-MODELS.png',
      'https://promactech.com/wp-content/uploads/2024/07/WASHER-EXTRACTOR-1-1.png',
      'https://promactech.com/wp-content/uploads/2024/07/WASHER-EXTRACTOR-2-1.png',
      'https://promactech.com/wp-content/uploads/2024/07/WASHER-EXTRACTOR-3.png',
      'https://promactech.com/wp-content/uploads/2024/07/WASHER-EXTRACTOR-4.png',
      'https://promactech.com/wp-content/uploads/2024/07/WASHER-EXTRACTOR-1.png',
      'https://promactech.com/wp-content/uploads/2024/07/WASHER-EXTRACTOR-2.png',
      'https://promactech.com/wp-content/uploads/2024/07/WASHER-EXTRACTOR.png'
    ],
    subtitle: 'Reliable, Field Proven Machine Design',
    description: 'Commercial washer-extractors from Sea-lion combine economy and performance into a reliable, field proven machine design. Features like extra-large door openings into baskets with smooth, dimpled perforations highlight the design quality and build craftsmanship put into these machines. XGQ-F washer-extractors have a full spring and shock suspension system that effectively isolates vibration transmission to the floor. Inverter with single motor drive is energy efficient, has fewer parts, and provides smooth power at all speeds.',
    features: [
      'High Spin Washer Extractor, Soft Mounting.',
      'G-Force 350.',
      'Compact & modern space-saving design',
      'Drum and tub, as well as the entire cabinet made of robust and durable high-quality stainless steel 304 Grade.',
      'The washer-extractor\'s heavy-duty, robotically welded frame is designed to stand up to the toughest laundry conditions.',
      'The machine consists of a robust outer structure and a movable inner part suspended by shock absorbers and spring.',
      'Highly flexible and freely programmable control with advanced 7" colour display for easy operation and perfect management of your laundry business.',
      'Large loading and unloading doors with up to 180° opening angle for easy access.',
      'Intelligent inverter (VFD-Variable Frequency Drive) measures performance, monitors motor limits and effectively balances load to ensure maximum water extraction during final spin.',
      'Reduced Water consumption and Reduced Energy consumption.',
      'Efficient Drum action maximise the washing quality with shortest cycle time.',
      'Tilting system – both forwards and backwards for an easy loading / unloading in models in 130, 160 & 200 Kgs capacity',
      'Designed & developed for easy maintenance with less investment.',
      'Extraordinary after-sales service through a pan India network of highly qualified service engineers.'
    ],
    sections: [
      {
        title: 'ADVANCED CONTROL SYSTEM',
        content: 'Multi-language colour touchscreen control features full programmability of all machine functions including interfacing up to 13 signals to external chemical systems, and displays relevant machine operating data, including a full array of maintenance and productivity reports.'
      }
    ],
    badges: ['Water Saving', 'Energy Saving', 'Easy Maintenance', 'Temperature Control', 'Speed Control'],
    specTables: [
      {
        title: 'MAIN SPECIFICATIONS (XGQ SERIES)',
        headers: ['DESCRIPTION', 'UNITS', 'XGQ-25F', 'XGQ-50F', 'XGQ-80F', 'XGQ-100F', 'XGQ-130F', 'XGQ-160F'],
        rows: [
          ['Rated Capacity', 'kg/lb', '25/60', '50/110', '80/175', '100/225', '130/285', '160/350'],
          ['Inner Drum: W x D', 'mm', '810 x 560', '990 x 701', '1150 x 843', '1240 x 882', '1350 x 966', '1460 x 1032'],
          ['Volume', 'm³/ft³', '0.29/10.19', '0.54/19.06', '0.88/30.93', '1.07/37.63', '1.38/48.85', '1.73/61.04'],
          ['Outer Drum: W x D', 'mm', '864 x 618', '1054 x 759', '1218 x 922', '1324 x 953', '1434 x 1044', '1544 x 1104'],
          ['Washing/Balance Speed', 'rpm', '43/75', '40/60', '30/60', '30/60', '30/60', '27/55'],
          ['Medium/High Extract speed', 'rpm', '430/830', '375/750', '360/700', '350/680', '310/640', '300/630'],
          ['High Extract G Force', 'G', '297', '311', '315', '320', '309', '323'],
          ['Motor Power (VFD)', 'kw', '3', '4', '6.5', '7.5', '15', '22'],
          ['Electric Heater Power', 'kw', '22.5', '45', '45', '45', '-', '-'],
          ['Steam Connection', 'DN', '20', '20', '25', '25', '40', '40'],
          ['Hot & Cold Water Inlets', 'DN', '2x25', '2x25', '2x40', '2x40', '2x50', '2x50'],
          ['Water Consume/Load', 'kg', '600', '827', '1200', '1435', '1900', '2000'],
          ['Steam Consume/Load', 'kg', '4', '20', '45', '60', '60', '70'],
          ['Electric Consume (VFD)', 'kW.h', '5', '7', '10.2', '10.5', '-', '-'],
          ['Steam Consume (VFD)', 'kW.h', '0.8', '1', '1.6', '1.8', '2', '2.2'],
          ['Water Pressure', 'MPa', '0.2-0.4', '0.2-0.4', '0.2-0.4', '0.2-0.4', '0.2-0.4', '0.2-0.4'],
          ['Steam Pressure', 'MPa', '0.4-0.6', '0.4-0.6', '0.4-0.6', '0.4-0.6', '0.4-0.6', '0.4-0.6'],
          ['Compress Air Pressure', 'MPa', '0.4-0.6', '0.4-0.6', '0.4-0.6', '0.4-0.6', '0.4-0.6', '0.4-0.6'],
          ['Dimensions (L/W/H)', 'mm', '1355/1190/1585', '1550/1353/1755', '1945/1600/1930', '1982/1718/2020', '2245/1850/2075', '2310/1915/2130'],
          ['Weight', 'kg', '1055', '1494', '2570', '2812', '4012', '4476']
        ]
      },
      {
        title: 'TILTING MODELS - MAIN PARAMETERS',
        headers: ['UNITS', 'DESCRIPTION', 'XGQ-100FQ', 'XGQ-160FQ', 'XGQ-200FQ', 'XGQ-160FSQ', 'XGQ-200FSQ'],
        rows: [
          ['kg', 'Rated capacity', '100', '160', '200', '160', '200'],
          ['mm', 'Inner drum length', '1240 x 840', '1460 x 960', '1076 x 1600', '1460 x 960', '1600 x 1076'],
          ['mm', 'Outer drum length', '1324 x 953', '1544 x 1104', '1718 x 1237', '1544 x 1104', '1720 x 1237'],
          ['rpm', 'Wash/bal Speed', '30/60', '27/55', '25/52', '27/55', '25/52'],
          ['rpm', 'Mid/Extract Speed', '350', '300', '290', '300', '290'],
          ['rpm', 'High Extract speed', '680', '630', '620', '630', '620'],
          ['kw', 'Motor Power', '7.5', '22', '30', '22', '30'],
          ['', 'Tilting angle', '18°', '15°', '15°', '15°', '15°'],
          ['DN', 'Steam pipe', '25', '40', '40', '40', '40'],
          ['DN', 'C/H Water Pipe', '2 x 40', '2 x 50', '2 x 50', '2 x 50', '2 x 50'],
          ['mm', 'Water drain pipe', '114(2) 2Pipes', '114(2) 2Pipes', '114(2) 2Pipes', '114(2) 2Pipes', '114(2) 2Pipes'],
          ['mm', 'Pipe/Compress Air', '8', '8', '8', '8', '8'],
          ['Mpa', 'Steam pressure', '0.4-0.6', '0.4-0.6', '0.4-0.6', '0.4-0.6', '0.4-0.6'],
          ['Mpa', 'Water pressure', '0.2-0.4', '0.2-0.4', '0.2-0.4', '0.2-0.4', '0.2-0.4'],
          ['Mpa', 'Air Pressure', '0.4-0.6', '0.4-0.6', '0.4-0.6', '0.4-0.6', '0.4-0.6'],
          ['kg', 'Water Cons/cycle', '1435', '2000', '2400', '2000', '2400'],
          ['kW', 'Power Cons/cycle', '1.8', '2.2', '2.6', '2.2', '2.6'],
          ['kg', 'Steam Cons/cycle', '60', '70', '85', '70', '85'],
          ['m³/min', 'Flow of air compressor', '0.1', '0.13', '0.13', '0.13', '0.13'],
          ['V/P/Hz', 'Power supply', '380/3/50', '380/3/50', '380/3/50', '380/3/50', '380/3/50'],
          ['mm', 'Dimension(L/W/H)', '1900/1700/2050', '2300/1940/2150', '2500/2250/2240', '2448/2004/2264', '2622/2234/2392'],
          ['kg', 'Weight', '3720', '5500', '6528', '6000', '7400']
        ]
      },
      {
        title: 'CONNECTOR SIZES',
        headers: ['Model', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'Steam Inlet', 'Cold Water Inlet', 'Hot Water Inlet', 'Drainage Outlet'],
        rows: [
          ['XGQ-100FQ', '1700', '1900', '2050', '390', '140', '220', '1755', '726', '779', '80', 'DN25', 'DN40', 'DN40', '2-DN100'],
          ['XGQ-160FQ', '1940', '2300', '2150', '433', '140', '220', '2030', '1016', '797', '80', 'DN40', 'DN50', 'DN50', '2-DN100'],
          ['XGQ-200FQ', '2250', '2500', '2240', '447', '190', '200', '1752', '1154', '812', '80', 'DN40', 'DN50', 'DN50', '2-DN100'],
          ['XGQ-160FSQ', '2004', '2448', '2264', '433', '140', '220', '2142', '1016', '901', '70', 'DN40', 'DN40', 'DN50', '2-DN100'],
          ['XGQ-200FSQ', '2234', '2622', '2392', '415', '140', '220', '2264', '1154', '903', '80', 'DN40', 'DN40', 'DN40', '2-DN100']
        ]
      }
    ]
  },
  'sea-lion-open-pocket-washer-extractor': {
    title: 'OPEN POCKET WASHER EXTRACTOR',
    img: 'https://promactech.com/wp-content/uploads/2024/07/OPEN-POCKET-WASHER-EXTRACTOR-4.png',
    images: [
      'https://promactech.com/wp-content/uploads/2024/07/OPEN-POCKET-WASHER-EXTRACTOR-4.png',
      'https://promactech.com/wp-content/uploads/2024/07/OPEN-POCKET-WASHER-EXTRACTOR-2.png',
      'https://promactech.com/wp-content/uploads/2024/07/OPEN-POCKET-WASHER-EXTRACTOR-1.png',
      'https://promactech.com/wp-content/uploads/2024/07/OPEN-POCKET-WASHER-EXTRACTOR.png',
      'https://promactech.com/wp-content/uploads/2024/07/OPEN-POCKET-WASHER-EXTRACTOR-3.png',
      'https://promactech.com/wp-content/uploads/2024/07/OPEN-POCKET-WASHER-EXTRACTOR-5.png'
    ],
    subtitle: 'Rugged, Reliable Workhorses Engineered to Last',
    description: "Industrial washer-extractors from Sea-lion are rugged, reliable workhorses engineered to last. They have a low total cost of ownership and produce superior wash results. The no nonsense, smart automation design saves time in the loading and unloading processes. Machine's open structure design incorporates an innovative suspension system located higher on the frame to better reduce vibration.",
    features: [
      'Small and compact footprint that incorporates a slight 2 degree backwards washing angle. This tilt back along with integrated lifting ribs optimize mechanical wash action.',
      'Inverter with single motor drive is energy efficient, has fewer parts, and provides smooth power at all speeds.',
      'Robust hydraulic tilting mechanism provides for a large degree tilting angle coupled with large diameter door opening facilitates loading and unloading of goods.',
      'Multi-language colour touchscreen control features full programmability of all machine functions including interfacing up to 13 signals to external chemical systems, and displays relevant machine operating data, including a full array of maintenance and productivity reports.',
      '100kg models available with exclusive Water Droplet drum design. The art of Convex/Concave for the perfect Clean.'
    ],
    sections: [],
    specTables: [
      {
        title: 'MAIN PARAMETERS',
        headers: ['DESCRIPTION', 'UNITS', 'XGQ-100CF', 'XGQ-100CFQ', 'XGQ-100CFSQ', 'XGQ-200CFSQ'],
        rows: [
          ['Capacity', 'kg/lb', '100/225', '100/225', '100/225', '200/450'],
          ['Inner drum x length', 'mm', '1240 x 840', '1240 x 840', '1240 x 840', '1560 x 1100'],
          ['Volume', 'm³/ft³', '1.07/39.63', '1.07/39.63', '1.07/39.63', '2.10/74.28'],
          ['Outer drum x length', 'mm', '132.5 x 928', '132.5 x 928', '1325 x 928', '1645 x 1225'],
          ['Washing/balance speed', 'rpm', '40/65', '40/65', '40/65', '30/56'],
          ['Middle extracting speed', 'rpm', '350', '350', '350', '350'],
          ['High extracting speed 1-4', 'rpm', '350/500/620/650', '350/500/620/680', '350/500/620/680', '360/450/550/620'],
          ['High Extract G-Force', 'G', '320', '320', '320', '335'],
          ['Motor power', 'kW', '7.5', '7.5', '7.5', '30'],
          ['Unloading tilt angle', 'degree', 'n/a', '18', '18', '18'],
          ['Loading tilt angle', 'degree', 'n/a', 'n/a', '18', '18'],
          ['Steam pipe diameter', 'DN', '25', '25', '25', '40'],
          ['Cold & hot water pipe diameter', 'DN', '40', '40', '40', '50'],
          ['Outlet drainage diameter', 'mm', '133/2 (base) PC', '159/2 (base) PC', '159/2 (base) PC', '114/2 (base) PC'],
          ['Compressed air inlet diameter', 'mm', '8', '8', '8', '10'],
          ['Steam pressure', 'MPa', '0.4-0.6', '0.4-0.6', '0.4-0.6', '0.4-0.6'],
          ['Water pressure', 'MPa', '02-0.4', '02-0.4', '02-0.4', '0.2-0.4'],
          ['Compressed air pressure', 'MPa', '04-0.6', '04-0.6', '04.-0.6', '0.6-0.7'],
          ['Cycle Water consumption', 'kg', '1500', '1500', '1500', '2400'],
          ['Cycle Electric consumption', 'KW', '1.8', '1.8', '1.8', '2.6'],
          ['Cycle Steam consumption', 'kg', '50', '50', '50', '85'],
          ['Air compressor capacity', 'm³/min', '0.1', '0.1', '0.1', '0.13'],
          ['Dimension (W/D/H)', 'mm', '2060/1890/2170', '2345/1820/2145', '2345/1820/2195', '2480/2495/2590'],
          ['Weight', 'kg', '3240', '3600', '3750', '6800']
        ]
      }
    ]
  },
  'sea-lion-barrier-washer': {
    title: 'BARRIER WASHER',
    img: 'https://promactech.com/wp-content/uploads/2024/07/BARRIER-WASHER-6.png',
    images: [
      'https://promactech.com/wp-content/uploads/2024/07/BARRIER-WASHER-5.png',
      'https://promactech.com/wp-content/uploads/2024/07/BARRIER-WASHER-6.png',
      'https://promactech.com/wp-content/uploads/2024/07/BARRIER-WASHER-7.png',
      'https://promactech.com/wp-content/uploads/2024/07/BARRIER-WASHER.png',
      'https://promactech.com/wp-content/uploads/2024/07/BARRIER-WASHER-1.png',
      'https://promactech.com/wp-content/uploads/2024/07/BARRIER-WASHER-2.png',
      'https://promactech.com/wp-content/uploads/2024/07/BARRIER-WASHER-3.png',
      'https://promactech.com/wp-content/uploads/2024/07/BARRIER-WASHER-4.png'
    ],
    subtitle: 'Prevents Cross Contamination',
    description: 'Sea-lion BW barrier type washer-extractors provide the necessary separation between soiled and clean sides of the laundry with a fully enclosed frame and protective seal. Linen to be washed is loaded on the soiled side and unloaded on the clean side once the wash is complete eliminating any chance for cross contamination. Available in open pocket and split pocket configuration. Models available in 60 and 100kg dry load capacity and in open pocket and 2-pocket drum designs.',
    features: [
      'Compact air bag suspension system isolates machine vibration transmission to the floor for smooth, quiet operation.',
      'The drive system is an efficient direct v-belt setup fitted with an inverter with single motor providing smooth, reliable power at all speeds.',
      'Multi-lingual touch screen controller provides for many programming options to launder a variety of goods.',
      'Cylinder positioning is controlled by a proximity switch and magnets to automatically align inner door position for loading and unloading operations. A time saving feature that avoids unnecessary jogging.',
      'Weight sensing device monitors load volume for proper loading volume.'
    ],
    badges: ['Water Saving', 'Energy Saving', 'Easy Maintenance', 'Temperature Control', 'Speed Control'],
    sections: []
  },
  'sea-lion-tumble-dryer': {
    title: 'TUMBLE DRYER',
    img: 'https://promactech.com/wp-content/uploads/2024/07/TUMBLE-DRYER-1.png',
    images: [
      'https://promactech.com/wp-content/uploads/2024/07/TUMBLE-DRYER-1.png',
      'https://promactech.com/wp-content/uploads/2024/07/TUMBLE-DRYER-3.png',
      'https://promactech.com/wp-content/uploads/2024/07/TUMBLE-DRYER.png',
      'https://promactech.com/wp-content/uploads/2024/07/Tumble-Dryer-2.png'
    ],
    subtitle: 'Air Flow & Heating Balanced',
    description: 'GZ series standalone auto dryers from Sea-lion are used to prepare various types of garments for the ironing and folders finishing. Designed to have the perfect balance of CFM airflow and heat transfer for optimal drying.',
    features: [
      'Fitted with an ultra-smooth and durable 304 grade mirror Stainless Steel drum to protect goods.',
      'The microprocessor control is simple to use and features programmable time and temperature settings.',
      'A reversing motor system gently tumbles the goods in both directions to prevent tangling.',
      'Access to the lower lint screen panel is simple making quick work for filter maintenance.',
      'The large diameter of the door opening on our tumble dryers ensures easy loading and unloading. For maximum accessibility, the door opens to nearly 180°. The door is provided with a safety switch that stops the machine when the door is open. The door can be opened any time during operation for safety. While the door gap excesses 50 mm, the machine will stop to ensure the energy is not wasted through the gap.',
      'Loading door features a tempered glass window which allows for a visual check of the goods during the cycle. The door opening is oversized to allow for easy loading and unloading.',
      'Protective 304 grade Stainless Steel cabinet.',
      'A special & unique feature of our drier is a lint drawer located in front of the exhaust fan. This prevents lint from clogging the fan, which causes damaging vibration. This also eliminates the need for costly external lint collectors and reduces lint fire concerns. The lint filter is efficient and provides a good airflow that reduces the energy consumption.',
      'Available with gas burner (GRZ), steam (GZZ) or electric (GDZ) heating.'
    ],
    badges: ['Efficiency', 'Energy Saving', 'Easy Maintenance', 'Temperature Control'],
    sections: [],
    specTables: [
      {
        title: 'TECHNICAL SPECIFICATIONS',
        headers: ['Unit', 'Description', 'GZZ(GDZ)-15', 'GZZ-S-400', 'GZZ(GDZ)-50', 'GZZ(GDZ)-100', 'GZZ-100Q'],
        rows: [
          ['kg', 'Rated capacity', '15', '25', '50', '100', '100'],
          ['mm', 'Inner drum length', '780 x 650', '-', '1160 x 955', '1460 x 1180', '1460 x 1180'],
          ['V/P/Hz', 'Power supply', '380/3/50', '380/3/50', '380/3/50', '380/3/50', '380/3/50'],
          ['kW', 'Main motor power', '0.55', '0.75', '1.5', '3', '3'],
          ['kW', 'Fan', '0.37', '0.55', '1.5', '2 x 1.5', '2 x 1.5'],
          ['rpm', 'Drum speed', '45', '-', '32', '30', '30'],
          ['MPa', 'Steam pressure', '0.5-0.6', '0.5-0.6', '0.5-0.6', '0.5-0.6', '0.5-0.6'],
          ['DN', 'Steam pipe/DM', '20', '20', '25', '25', '40'],
          ['DN', 'Drain pipe/DM', '15', '20', '25', '25', '25'],
          ['kg', 'Steam Cons/cycle', '18-25', '25-30', '50-60', '100-120', '100-120'],
          ['kw', 'Power Cons/cycle', 'steam 0.5 / electric', 'steam 0.86 / electric', 'steam 1.8 / electric', 'steam 3.5 / electric', '/'],
          ['kw', 'Heater power', '14.4', '/(17)', '/(432)', '/(80)', '/'],
          ['mm', 'Air Exhaust/DM', '167 x 147', '240 x 260', '280 x 347', '330 x 400', '333 x 403'],
          ['mm', 'Dimension (L/W/H)', '1150/870/1450', '1192/1015/1694', '1576/1282/2072', '1996/1602/2344', '2100/1600/2560'],
          ['kg', 'Weight', '280/310', '360', '725 (765)', '1450 (1500)', '1548']
        ]
      },
      {
        title: 'GRZ MODELS SPECIFICATIONS',
        headers: ['Model', 'Capacity (kg)', 'Inner Drum (mm)', 'Power Supply', 'Motor (kW)', 'Fan (kW)', 'Gas Pres. (MPa)', 'Gas Cons.', 'Pwr Cons (kw)', 'Exhaust (mm)', 'Dimension L/W/H (mm)', 'Weight (kg)'],
        rows: [
          ['GRZ-25', '25', '930/800', '380/3/50', '0.75', '0.55', '.005-.02', '15', '0.5', '1.2', '1371/1043/178', '596'],
          ['GRZ-50', '50', '1160/955', '380/3/50', '1.5', '1.5', '.005-.02', '15', '1.8', '4.5', '1576/1282/207', '800'],
          ['GRZ-100', '100', '1460/1236', '380/3/50', '3', '2/1.5', '.005-.02', '20', '3.2', '3.2', '1996/1602/262', '1500']
        ]
      }
    ]
  },
  'sea-lion-automatic-feeder': {
    title: 'AUTOMATIC FEEDER',
    img: 'https://promactech.com/wp-content/uploads/2024/07/AUTOMATIC-FEEDER-2.png',
    images: [
      'https://promactech.com/wp-content/uploads/2024/07/AUTOMATIC-FEEDER-1.png',
      'https://promactech.com/wp-content/uploads/2024/07/AUTOMATIC-FEEDER.png',
      'https://promactech.com/wp-content/uploads/2024/07/AUTOMATIC-FEEDER-2.png'
    ],
    subtitle: 'Precision Linen Feeding Systems',
    description: 'Sea-lion spreader feeders make quick work of preparing linens to be properly positioned for the ironer or folder. Available in three and four stations, ZBQ series spreader feeders provide high efficiency and require less labour to process goods. Models can spread a variety of flatwork items up to 130 inches.',
    features: [
      'Innovative clamp design is robust and need only latch onto corners to position flatwork linens on the belts. For accuracy a positioning servo motor assures a repeatable process and strong vacuum airflow for suction holds the flatwork securely against the belts maintaining the desired position for the ironer.',
      'For convenient measurement of worker productivity, each station is outfitted with a simple, digital counting display to calculate items processed.',
      'No need to move the machine for small items because the output table can be easily adjusted in and out automatically.',
      'Four stations model features moveable loading station to allow for feeding of small items from front of machine.',
      'Multi-lingual full colour touch screen control features 20 programs and can be easily networked to the ironer line.',
      'Intelligent rail design option facilitates production bottlenecks by preparing and holding linens to be processed.'
    ],
    sections: [],
    specTables: [
      {
        title: 'TECHNICAL SPECIFICATIONS',
        headers: ['Item Name', 'Unit', 'ZBQ3500-IV-H'],
        rows: [
          ['Power Supply', 'V/Hz/P', '380/50/3'],
          ['Rated Power', 'kw', '18.35'],
          ['Wire Diameter', 'mm²', '6'],
          ['Power Consumption/hr', 'kw.h', '12'],
          ['Compressed Air Pressure', 'Mpa', '0.6-0.7'],
          ['Compressed Air Inlet', 'mm', 'Φ16'],
          ['Compressed Air Consumption', 'L/min', '110'],
          ['Speed', 'm/min', '0-50'],
          ['Working Width', 'mm', '<=3500'],
          ['Dimension (L/W/H)', 'mm', '5290/2920/2480'],
          ['Machine Weight', 'kg', '5400']
        ]
      }
    ]
  },
  'sea-lion-flatwork-roller-ironer': {
    title: 'FLATWORK ROLLER IRONER',
    img: 'https://promactech.com/wp-content/uploads/2024/07/FLATWORK-IRONER-ROLLER-1.png',
    images: [
      'https://promactech.com/wp-content/uploads/2024/07/FLATWORK-IRONER-ROLLER-1.png',
      'https://promactech.com/wp-content/uploads/2024/07/FLATWORK-IRONER-ROLLER.png',
      'https://promactech.com/wp-content/uploads/2024/07/FLATWORK-IRONER-ROLLER-2.png'
    ],
    subtitle: 'Efficient Roller Ironing Technology',
    description: 'The YZ series ironers are ideal for medium to large size laundries including resort hospitality, health care and commercial laundries. This line of ironers produces high quality linen finishes easily and efficiently.',
    features: [
      'It has high evaporation power and saves energy. The frame is built with high quality carbon steel primed and painted for long life. The cylinder is mirror polished and supported by heavy-duty lubricated bearings.',
      'A large efficient fan pulls evaporated moisture away from the cylinder. Nomex ironing straps that prevent absorption of moisture while ironing extends the life of all feed compartments.',
      'The compact design occupies very little space as the finished linen can be discharged to the front or in the back to a folder.',
      'These ironers are the most affordable ironers in terms of capital investment, operating expense, maintenance, and floor space requirement. Discover the difference and the elegant and simple features of this ironer line.',
      'A highly sensitive hand protection board ensures ultimate safety in each phase of the ironing process.',
      'The seal system uses a high-quality swivel joint which ensures a reliable seal and allows easy and simple maintenance.',
      'Our frequency conversion speed adjustment system allows for a continual even flow of speed which brings more energy saving.',
      'Equipped with 2 floatation type condensation traps giving it greater efficiency. This innovative, award-winning design has yielded a remarkable degree of energy conservation.',
      'Auxiliary stainless-steel brackets allow for max. Stability to each flatwork ironer and eliminates any concerns of rusting.'
    ],
    sections: [
      {
        title: '01 FEATURES',
        list: [
          'Microprocessor control.',
          'High productivity with minimum maintenance.',
          'Highest water evaporation capacity.',
          'Fingerguard protection.',
          'Safe and easy to install.',
          'User-friendly control. Temperature and/or speed adjustable any time.',
          'Frequency inverter.',
          'Easy access to all components.',
          'Standard automatic cool down.',
          'Optimized exhaust system.'
        ]
      }
    ],
    specTables: [
      {
        title: 'TECHNICAL SPECIFICATIONS',
        headers: ['DESCRIPTION', 'UNITS', 'YZII-3000/3300', 'YZIII-3000/3300', 'YZIV-3000/3300', 'YZV-3000/3300'],
        rows: [
          ['Ironing range (width thickness)', 'mm', '3000/3300. ≤3', '3000/3300. ≤3', '3000/3300. ≤3', '3000/3300. ≤3'],
          ['Ironing roll diameter', 'mm', '800*3000/3300', '800*3000/3300', '800*3000/3300', '800*3000/3300'],
          ['The quantity of roller', 'unit', '2', '3', '4', '5'],
          ['Steam pressure', 'Mpa', '0.4-0.6', '0.4-0.6', '0.4-0.6', '0.4-0.6'],
          ['Ironing speed', 'm/min', '0-15', '0-21', '0-30', '0-35'],
          ['Motor power', 'kw', '1.5', '2.2', '3', '4'],
          ['Steam pipe diameter', 'DN', '40', '40', '40', '40'],
          ['Drain pipe diameter', 'DN', '20', '20', '20', '20'],
          ['Steam consumption', 'kg/h', '260(270)', '380(420)', '480(500)', '580(600)'],
          ['Dimension', 'mm', '2440*4060*1433 / 2440*4360*1433', '3440*4060*1433 / 3440*4360*1433', '4440*4060*1433 / 4440*4360*1433', '5440*4060*1433 / 5440*4360*1433'],
          ['Weight', 'kg', '3010/3309', '4388/4824', '5756/6258', '7142/8052']
        ]
      }
    ]
  },
  'sea-lion-high-speed-serpentine-flatwork-ironer': {
    title: 'HIGH SPEED SERPENTINE FLATWORK IRONER',
    img: 'https://promactech.com/wp-content/uploads/2024/07/HIGH-SPEED-SERPENTINE-FLATWORK-IRONER-1024x819.png',
    images: [
      'https://promactech.com/wp-content/uploads/2024/07/HIGH-SPEED-SERPENTINE-FLATWORK-IRONER-1024x819.png'
    ],
    subtitle: 'Maximum Throughput Ironing Systems',
    description: 'Utilizes a unique serpentine path to maximize ironing contact area, enabling unprecedented operating speeds without compromising quality.',
    features: [
      'The device adopts superposition method, which has the advantages of compact structure, fast heat transfer and high thermal efficiency. The variable frequency drive method is adopted to realize the non-polar speed regulation, so that the ironing speed can be adjusted freely in the limit range, and the energy saving effect is significant.',
      'The equipment adopts frame structure, which has the advantages of strong structure and good stability.',
      'The equipment adopts V-shaped belt and chain as transmission medium, which has the advantages of smooth transmission, good cushioning and low noise.',
      '251-degree linen contact with drying cylinder, adopting double sides ironing design improves the working efficiency. Especially improving the ironing quality of flatness.',
      'Heavy structure design, the thickness of both sides’ cabinet up to 16mm, the whole machine weight is 12.8 tons. It is processed by imported CNC laser cutting machine and assures the strength and precision.',
      'The ironing cylinder is made of high-quality boiler carbon steel, which is with thermal conductivity 2.5 times that of stainless steel.',
      'It is also with better pressure resistance, and the cylinder can withstand the steam pressure of 1.2MPa at the maximum. The wall of cylinder is 11mm thick, which ensures large heat retention and even heating.',
      'Serpentine design makes the linen wrapping angle up to 270 degrees, which significantly improves the ironing performance.',
      'A safety valve is installed at the steam inlet and will stop the steam supply automatically when the steam pressure is higher than the safety value.',
      'Thermal insulation design at both ends of rolls and all the steam pipes can reduce steam consumption by 5%.',
      'Steam pressure is adjustable to prevent excessive ironing and reduce the waste of steam.'
    ],
    sections: [],
    specTables: [
      {
        title: 'TECHNICAL PARAMETERS',
        headers: ["Description", "Unit", "YZSVI-3400(950)"],
        rows: [
          ["Rated power", "kW", "5.5"],
          ["Compressed air pressure", "Mpa", "0.4-0.6"],
          ["Steam pressure", "Mpa", "0.6-0.8"],
          ["Steam pipe diameter", "DN", "40"],
          ["Steam consumption", "kg/h", "530"],
          ["Drainage pipe diameter", "DN", "40"],
          ["Ironing speed", "m/min", "0-50"],
          ["Working width", "mm", "≤3400"],
          ["Ironing roll", "mm", "950/3420"],
          ["Dimension", "mm", "5040*4750*2287"],
          ["Weight", "kg", "15100"]
        ]
      }
    ]
  },
  'sea-lion-high-speed-chest-ironer': {
    title: 'HIGH SPEED CHEST IRONER',
    img: 'https://promactech.com/wp-content/uploads/2024/07/HIGH-SPEED-CHEST-IRONER-2.png',
    images: [
      'https://promactech.com/wp-content/uploads/2024/07/HIGH-SPEED-CHEST-IRONER-2.png',
      'https://promactech.com/wp-content/uploads/2024/07/HIGH-SPEED-CHEST-IRONER.png'
    ],
    subtitle: 'Premium Flatwork Finishing',
    description: 'Sea-lion YZC series double chest ironers are high performers thanks to the precise structure of the double chest, springs and heat proof felt which ensures the rolls keep adequate elasticity and spring cushion for maximum surface contact with the chest.',
    features: [
      'Features ironing speeds up to 30-40 meters per minute.',
      'Sea-Lion Chest Ironers are engineered for high productivity industrial multi-roll flatwork ironers offers an excellent combination of efficiency, quality and convenience, making it one of the finest ironers in the industry.',
      'Available in 2 rollers of 800 and 1300 mm dia with 3300 mm working width.',
      'The arc surface of the chests has a big angle so that the heating area is big, and the heat can be fully used.',
      'Driven by only motor, the energy consumption is reduced. Thanks to the inverter, the ironing speed can be adjusted 8-40 meters/minute according to different temperature, type of linen and relative humidity.',
      'The precise structure of the double chest, springs, and padding ensures that the rolls retain enough elasticity and spring cushion to maintain the linen and chest surface well-touched.',
      'A pressure controlling system for steam and compressed air is installed to ensure the machine is running within normal parameters. Rolls can be lift and locked onto the machine in case a sudden loss of power.',
      'Thanks to the heat recycling system\'s innovative design. Steam in the chest can run smoothly and efficiently, allowing the heat to be effectively utilised, and the outside of the chest includes an insulation layer to prevent heat waste.',
      'A fan is mounted on each roll to totally expel moisture, allowing the chests to remain dry and prevent rust formation.'
    ],
    sections: [],
    specTables: [
      {
        title: 'TECHNICAL SPECIFICATIONS',
        headers: ["DESCRIPTION", "UNITS", "Y3300IIZC-800", "Y3300IIZC-1300"],
        rows: [
          ["Steam pressure", "Mpa", "0.6-1.0", "0.6-1.2"],
          ["Steam pipe diameter", "DN", "50", "50"],
          ["Roll diameter (mm)", "mm", "800", "1270"],
          ["Numbers of chests", "-", "2", "2"],
          ["Maximum ironing/W", "mm", "3300", "3300"],
          ["Main drive electric motor", "kW", "11", "18.5"],
          ["Machine Weight", "kg", "7800", "15500"],
          ["Ironing speed (m/min.)", "m/min", "6-30", "8-45"],
          ["Exhaust pipe diameter", "mm", "2 x 138", "2 x 150"],
          ["Exhaust fan", "kW", "1.1 x 2", "2.2 x 2"],
          ["Dimension (L/W/H)", "mm", "3106/4750/1400", "4000/5230/1700"],
          ["Condenser pipe diameter", "DN", "25", "25"],
          ["Compress air pressure", "Mpa", "0.5-0.7", "0.5-0.7"],
          ["Compress air pipe/DM", "mm", "8", "8"]
        ]
      }
    ]
  },
  'sea-lion-automatic-high-speed-folder-with-stacker': {
    title: 'AUTOMATIC HIGH SPEED FOLDER WITH STACKER',
    img: 'https://promactech.com/wp-content/uploads/2024/07/AUTOMATIC-LINEN-FOLDER-WITH-STACKER-1024x819.png',
    images: [
      'https://promactech.com/wp-content/uploads/2024/07/AUTOMATIC-LINEN-FOLDER-WITH-STACKER-1024x819.png'
    ],
    subtitle: 'Automated Post-Ironing Management',
    description: 'The Sea-Lion intelligent linen folder is the industry\'s most efficient folder, with the highest efficiency and productivity. It does two forward lengthwise folding and three left/right breath-wise folding, for a total of five folding capabilities. The maximum folding size is 3000 × 3000 millimetres.',
    features: [
      'SEA-LION Folders are a great way to fold linens. Sensors measure and position the items to be folded, making the folder a totally automatic operation.',
      'A positive-reverse control is adopted for folding 4th and 5th folds which ignores the size and thickness of the linens, as each fold is measured by optical sensors to ensure the folding line is done accurately in the middle of the linen.',
      'In addition to the anti-static bar design, the unique airflow system separates the linen from the belts properly before folding.',
      'Optical sensors are equipped to ensure accurate detection of linen dimensions. Folds are completed by a combination of pneumatic and mechanical blades for best performance with minimal air consumption.',
      'Seven inverters are used to independently control speeds. Five are dedicated for folding and two for stacking.',
      'Based on measuring cloth size, the photoelectric detection and speed testing system controls cloth transmission speed and correctly folds the cloth.',
      'With a fabric speed control and precise positioning, a transmission system can accurately determine the fabric length and calculate the fold length.',
      'Self-diagnostic and safety protection system, simple to use and maintain on a daily basis.',
      'Two independent drive motors are controlled by a VFD and have the ability to change steeples folding speed within 50m/min, making them compatible with all types of ironing machines.',
      'Control panel in its entirety. Touch Screen allows you to programme several sorts of folds, as well as control and sensors that allow users to visualise the passage of the bed sheets, measure the length, and execute the fold according to the size and profile users set.',
      'Fine adjustments are possible for better fold quality and finish. It also enables the execution of a basic program that performs 5 folds in the centre of the pieces, regardless of their size, thereby simplifying the operation and eliminating the need for piece separation.',
      'Adjustable speed may be used with a corresponding ironing machine, and it can communicate with the ironing machine. The folder speed can be automatically synchronised with the ironing machine speed.'
    ],
    sections: [],
    specTables: [
      {
        title: 'TECHNICAL SPECIFICATIONS',
        headers: ["Item name", "Unit", "ZD3300-V-DF"],
        rows: [
          ["Folding length (max.) x width", "mm", "3600×3300"],
          ["Working capacity (normal sheet)", "m/min", "30"],
          ["Supply pressure", "Mpa", "0.5-0.7"],
          ["Compressed air consumption", "L/min", "~80"],
          ["Rated input power", "Kw", "0.75+0.37"],
          ["Power consumption", "Kw/h", "0.6"],
          ["Drainage of air compressor", "m³/min", "0.3"],
          ["Dimensions (LxWxH)", "mm", "4940×2530×1930"],
          ["Machine weight", "Kg", "1450"],
          ["External power line", "mm²", "4 (Users)"],
          ["Power supply", "V/P/Hz", "480/3/50"]
        ]
      }
    ]
  }
};

export default function SeaLionProduct() {
  const { productId } = useParams();
  const product = PRODUCT_DATA[productId];
  const [currentImageIdx, setCurrentImageIdx] = useState(0);

  // Reset image index when switching products
  useEffect(() => {
    setCurrentImageIdx(0);
    window.scrollTo(0, 0);
  }, [productId]);

  if (!product) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center font-sans">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-slate-800 mb-4">Product Not Found</h1>
          <Link to="/brands/sea-lion" className="text-[#E31E24] hover:underline flex items-center justify-center gap-2">
            <ArrowLeft className="w-4 h-4" /> Back to Sea-Lion Products
          </Link>
        </div>
      </div>
    );
  }

  const images = product.images && product.images.length > 0 ? product.images : [product.img];

  const nextImage = () => setCurrentImageIdx((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrentImageIdx((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Navbar />
      
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-8">
        <Link 
          to="/brands/sea-lion" 
          className="inline-flex items-center gap-2 text-slate-500 hover:text-[#E31E24] transition-colors font-medium text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Sea-Lion Portfolio
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column: Image Slideshow */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.6 }}
            className="rounded-2xl shadow-2xl overflow-hidden p-8 lg:p-12 flex flex-col items-center justify-center aspect-square border border-slate-200 relative group bg-gradient-to-br from-white via-slate-50 to-slate-100/80"
          >
            {/* Subtle inner glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#E31E24]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <AnimatePresence mode="wait">
              <motion.img 
                key={currentImageIdx}
                initial={{ opacity: 0, scale: 0.95, filter: 'blur(4px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, scale: 1.05, filter: 'blur(4px)' }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                src={images[currentImageIdx]} 
                alt={`${product.title} - Image ${currentImageIdx + 1}`} 
                className="w-full h-full object-contain mix-blend-multiply relative z-10 drop-shadow-lg" 
              />
            </AnimatePresence>

            {images.length > 1 && (
              <>
                <button 
                  onClick={prevImage} 
                  className="absolute left-4 lg:left-6 p-3 rounded-full bg-white/70 backdrop-blur-md border border-white/50 text-slate-800 shadow-[0_8px_30px_rgb(0,0,0,0.12)] opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:scale-110 z-20"
                >
                  <ChevronLeft className="w-6 h-6 text-[#E31E24]" />
                </button>
                <button 
                  onClick={nextImage} 
                  className="absolute right-4 lg:right-6 p-3 rounded-full bg-white/70 backdrop-blur-md border border-white/50 text-slate-800 shadow-[0_8px_30px_rgb(0,0,0,0.12)] opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:scale-110 z-20"
                >
                  <ChevronRight className="w-6 h-6 text-[#E31E24]" />
                </button>
                
                {/* Dots indicator inside a glass pill */}
                <div className="absolute bottom-6 flex gap-3 z-20 bg-white/60 backdrop-blur-md px-4 py-2.5 rounded-full border border-white/50 shadow-sm">
                  {images.map((_, idx) => (
                    <button 
                      key={idx} 
                      onClick={() => setCurrentImageIdx(idx)}
                      className={`h-2.5 rounded-full transition-all duration-500 ease-out ${idx === currentImageIdx ? 'bg-[#E31E24] w-8 shadow-[0_0_8px_rgba(227,30,36,0.6)]' : 'bg-slate-400/60 w-2.5 hover:bg-slate-600'}`} 
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-[#E31E24] text-[10px] font-bold tracking-[0.2em] uppercase mb-4">PRODUCT DETAILS</h4>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 tracking-tight leading-tight">
              {product.title}
            </h1>
            <h2 className="text-xl text-slate-500 font-medium mb-6">
              {product.subtitle}
            </h2>

            {/* Badges / Icons */}
            {product.badges && product.badges.length > 0 && (
              <div className="flex flex-wrap gap-4 mb-10">
                {product.badges.map((badge, idx) => (
                  <div key={idx} className="flex flex-col items-center justify-center w-24 h-28 border border-slate-300 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow">
                    {BADGE_ICONS[badge] ? (
                      <img src={BADGE_ICONS[badge]} alt={badge} className="w-12 h-12 object-contain mb-2" />
                    ) : (
                      <CheckCircle2 className="w-8 h-8 text-[#E31E24] mb-2" />
                    )}
                    <span className="text-[10px] font-bold text-slate-800 text-center uppercase tracking-wide leading-tight px-1">
                      {badge.split(' ').map((word, i) => <React.Fragment key={i}>{word}<br/></React.Fragment>)}
                    </span>
                  </div>
                ))}
              </div>
            )}
            
            <p className="text-slate-600 text-base leading-relaxed mb-10">
              {product.description}
            </p>

            <div className="mb-12">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-6">Key Features & Capabilities</h3>
              <ul className="space-y-4 mb-8">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#E31E24] shrink-0 mt-0.5" />
                    <span className="text-slate-600 leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Description Sections */}
              {product.sections && product.sections.map((sec, idx) => (
                <div key={idx} className="mb-8">
                  <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">{sec.title}</h3>
                  {sec.content && (
                    <p className="text-slate-600 leading-relaxed mb-4">
                      {sec.content}
                    </p>
                  )}
                  {sec.list && (
                    <ul className="space-y-4">
                      {sec.list.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-[#E31E24] shrink-0 mt-0.5" />
                          <span className="text-slate-600 leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            <div className="pt-8 border-t border-slate-200">
              <Link to="/contact">
                <button className="bg-[#E31E24] hover:bg-red-700 text-white px-8 py-4 text-xs font-bold tracking-widest uppercase transition-colors duration-300 shadow-lg shadow-red-500/20 rounded-sm w-full md:w-auto">
                  Request a Quote
                </button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Sub Products View */}
        {product.subProducts && product.subProducts.length > 0 && (
          <div className="mt-24 pt-16 border-t border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-12 text-center tracking-tight uppercase">
              System Components
            </h2>
            <div className="flex flex-col gap-12">
              {product.subProducts.map((sp, idx) => (
                <div key={idx} className={`flex flex-col ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center bg-white rounded-3xl shadow-sm border border-slate-100 p-8 lg:p-12 hover:shadow-lg transition-all duration-300`}>
                  <div className="w-full lg:w-5/12 flex items-center justify-center p-8 bg-slate-50/80 rounded-2xl">
                    <img src={sp.img} alt={sp.title} className="max-w-full h-auto object-contain hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="w-full lg:w-7/12">
                    <h3 className="text-2xl font-extrabold text-slate-900 mb-6 tracking-wide">{sp.title}</h3>
                    {sp.description && <p className="text-slate-600 mb-8 text-lg leading-relaxed">{sp.description}</p>}
                    {sp.features && sp.features.length > 0 && (
                      <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
                        <ul className="space-y-4">
                          {sp.features.map((feature, fIdx) => (
                            <li key={fIdx} className="flex items-start text-slate-700">
                              <span className="text-[#E31E24] mr-4 mt-2 shrink-0">
                                <div className="w-2 h-2 rounded-full bg-[#E31E24] shadow-sm" />
                              </span>
                              <span className="leading-relaxed font-medium">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Technical Specifications Tables */}
        {product.specTables && product.specTables.length > 0 && (
          <div className="mt-24 pt-16 border-t border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-12 text-center tracking-tight">
              Technical Specifications
            </h2>
            <div className="space-y-16">
              {product.specTables.map((table, idx) => (
                <div key={idx} className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden relative">
                  {/* Top Red Accent */}
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
                    <table className="w-full text-left text-sm text-slate-700">
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
                        {table.rows.map((row, rIdx) => (
                          <tr key={rIdx} className="even:bg-slate-50/50 hover:bg-slate-100 transition-colors duration-150">
                            {row.map((cell, cIdx) => (
                              <td key={cIdx} className={`px-6 py-4 whitespace-nowrap first:pl-8 last:pr-8 ${cIdx === 0 ? 'font-bold text-slate-900 border-r border-slate-100 bg-white/50' : 'text-slate-600'}`}>
                                {cell || '-'}
                              </td>
                            ))}
                          </tr>
                        ))}
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
