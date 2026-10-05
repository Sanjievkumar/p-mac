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
        }
        },
        benefits: {
          blocks: [
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
      },
  "kannegiesser-powerpress": {
      category: "Washing Technology",
      "title": "Extraction Technology",
      "subtitle": "PowerPress",
      description: "High moisture extraction performance combined with fatigue strength.",
      "img": "https://www.kannegiesser.com/fileadmin/SHARED/Images/Products/Thumbs_PowerPress.png",
      heroImg: "https://www.kannegiesser.com/fileadmin/SHARED/Images/Products/Keyvisual_PowerPress.jpg",
      tabs: {
        overview: {
          introTitle: "HIGH PERFORMANCE MEETS MINIMUM RESIDUAL MOISTURE",
          introSubtitle: "Lower Residual Moisture Leads to Energy Savings in the Finishing Process.",
          introText: "One of the most important development objectives of a modern moisture extraction press is optimum performance with all types of laundry, even for very short wash cycles and delicate articles. The subsequent energy savings during drying and ironing are considerable and high performance hydraulics and control system ensure gentle treatment of all textiles.",
          applicationsTitle: "FULLY TAILORED TO YOUR APPLICATION",
          applications: [
            { name: "Cruise Ships", img: "https://www.kannegiesser.com/fileadmin/SHARED/Images/Products/Applications/Keyvisual_Kreuzfahrtschiff.jpg", text: "Floating cities where nothing is left to be desired! The textiles are processed in a minimum space with the lowest possible use of resources – with innovative laundry technology from Kannegiesser." },
            { name: "Airlines", img: "https://www.kannegiesser.com/fileadmin/SHARED/Images/Products/Applications/Keyvisual_Fluglinien.jpg", text: "Above the clouds you want to ensure the best results for every passenger. With Kannegiesser machine you can perfectly handle your customer’s wide range of Airline Blankets." },
            { name: "Hospitality & Restaurant", img: "https://www.kannegiesser.com/fileadmin/SHARED/Images/Products/Applications/Keyvisual_Hotel.jpg", text: "The variety of articles is constantly growing. Customers expect their individual selection of linen. With Kannegiesser machines, you can offer the highest quality, which is particularly gentle on the textile and resources!" },
            { name: "Healthcare", img: "https://www.kannegiesser.com/fileadmin/SHARED/Images/Products/Applications/Keyvisual_Krankenhaus.jpg", text: "Do you handle a wide range of linen for the healthcare sector? The professional preparation of those textiles requires a reproducible hygiene process. With Kannegiesser you are on the safe side!" }
          ],
          bannerTitle: "POWERPRESS - THE OUTPUT MAXIMIZER",
          bannerSubtitle: "The Kannegiesser PowerPress redefines moisture extraction in batch washer systems.",
          }
        },
        benefits: {
          blocks: [
            {
              title: "High moisture extraction performance",
              text: "There is no such thing as standard operation in the field. Overloading, bulky items, batches that fall apart easily are the norm. The PowerPress is optimally designed for this type of operation in the field. A high degree of reliability, even if the press is overloaded or when processing types of laundry liable to fall apart, is vital for the practical operation of the equipment.",
              boxBullets: [
                "Fast pressure build-up",
                "Maximum high pressure time",
                "Rapid water drainage",
                "Belt unloading – guarantee for safety and hygiene"
              ]
            },
            {
              title: "Simple operation, easy maintenance",
              text: "These two features are inextricably linked. A clearly designed machine construction with highest material standards and a completely newly designed collection tank makes maintenance very simple. The system remains clean and, therefore, perfectly hygienic and requires minimum maintenance. The PowerPress is controlled by a high performance yet easy to operate control system.",
              boxBullets: [
                "Large, fully viewable collection tank",
                "Cover panels in stainless steel",
                "Structural strength without compromise"
              ]
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
      },
"kannegiesser-powerdry": {
      category: "Washing Technology",
      "title": "Dryers",
      "subtitle": "PowerDry",
      description: "Optimized airflow within a dryer determines efficiency, performance and energy savings of a drying process.",
      "img": "https://www.kannegiesser.com/fileadmin/SHARED/Images/Products/Thumbs_PowerDry.png",
      heroImg: "https://www.kannegiesser.com/fileadmin/SHARED/Images/Products/Keyvisual_PowerDry.jpg",
      tabs: {
        overview: {
          introTitle: "THE MOST POWERFUL DRYER ON THE MARKET",
          introSubtitle: "Optimized airflow within a dryer determines efficiency, performance and energy savings of a drying process.",
          introText: "The construction of the PowerDry, especially the intelligent air recirculation, the inner cylinder construction and efficient heating units determine the optimized airflow. Innovative process control and heating management methods secure a low energy consumption while shortening overall process times. This combination is the reason for the PowerDry being the most efficient batch dryer on the market.",
          applicationsTitle: "Fully tailored to your application",
          applications: [{"name":"Cruise Ships","img":"https://www.kannegiesser.com/fileadmin/SHARED/Images/Products/Applications/Keyvisual_Kreuzfahrtschiff.jpg","text":"Floating cities where nothing is left to be desired! The textiles are processed in a minimum space with the lowest possible use of resources – with innovative laundry technology from Kannegiesser."},{"name":"Workwear","img":"https://www.kannegiesser.com/fileadmin/SHARED/Images/Products/Applications/Keyvisual_Schutzkleidung.jpg","text":"High pollution loads. Preservation of the protective function. Textile variety in a modern design.\nThese requirements are handled daily! Kannegiesser solutions help you to provide your customers with fresh workwear punctually and reliably."},{"name":"Healthcare","img":"https://www.kannegiesser.com/fileadmin/SHARED/Images/Products/Applications/Keyvisual_Krankenhaus.jpg","text":"Do you handle a wide range of linen for the healthcare sector' The professional preparation of those textiles requires a reproducible hygiene process. With Kannegiesser you are on the safe side!"},{"name":"Hospitality & Restaurant","img":"https://www.kannegiesser.com/fileadmin/SHARED/Images/Products/Applications/Keyvisual_Hotel.jpg","text":"The variety of articles is constantly growing. Customers expect their individual selection of linen. With Kannegiesser machines, you can offer the highest quality, which is particularly gentle on the textile and resources!"},{"name":"Airlines","img":"https://www.kannegiesser.com/fileadmin/SHARED/Images/Products/Applications/Keyvisual_Fluglinien.jpg","text":"Above the clouds you want to ensure the best results for every passenger. With Kannegiesser machine you can perfectly handle your customer’s wide range of Airline Blankets."},{"name":"Mats","img":"https://www.kannegiesser.com/fileadmin/SHARED/Images/Products/Applications/Keyvisual_Matten.jpg","text":"The first positive impression left in the entrance area of buildings. With dirt trapping mats that have been professionally and resource-friendly processed using Kannegiesser machines!"},{"name":"Residental","img":"https://www.kannegiesser.com/fileadmin/SHARED/Images/Products/Applications/Keyvisual_Bewohner.jpg","text":"Respectful dealing with people and their textiles. Hygienically and gently processed, clean and completely back at the resident – that’s your core business. Kannegiesser supports you with the right machine and data technology!"}],
          bannerTitle: "The PowerDry - Combination of Low Energy Consumption and High Capacity",
          bannerSubtitle: "This combination is the reason for the PowerDry being the most efficient batch dryer on the market."
          },
          benefits: {
            blocks: [{"title":"Universal Application Possibilities for a Wide Range of Items","text":"The increasing amount of processed good is also creating an increased diversity of items and materials. The PowerDry covers this diversity with its high flexibility. Possible applications for the PowerDry series include cotton, blended fabrics, laminates and even micro fibre textiles.","boxBullets":["Highest performance up to four batches/h","Eco2Power – lowest consumption and shortest drying time","Highest flexibility – independent of batch size, material and moisture content","Maximum availability due to innovative engineering"]}]
          },
          technologies: {
            blocks: [
              {
                title: "Intelligent Air Recirculation",
                subtitle: "Maximum efficiency",
                text: "The construction of the PowerDry, especially the intelligent air recirculation and the inner cylinder construction determine the optimized airflow."
              },
              {
                title: "Heating Management",
                text: "Innovative process control and heating management methods secure a low energy consumption while shortening overall process times."
              }
            ]
          }
        }
      },
"kannegiesser-powerswing": {
      category: "Washing Technology",
      "title": "Extraction Technology",
      "subtitle": "PowerSwing",
      description: "The PowerSwing achieves Lowest Ancillary Times Due to Automatic Loading and Unloading.",
      "img": "https://www.kannegiesser.com/fileadmin/SHARED/Images/Products/Thumbs_PowerSwing.png",
      heroImg: "https://www.kannegiesser.com/fileadmin/SHARED/Images/Products/Keyvisual_PowerSwing.jpg",
      tabs: {
        overview: {
          introTitle: "SIMPLE PRINCIPLE, PHENOMENAL RESULT",
          introSubtitle: "The PowerSwing achieves Lowest Ancillary Times Due to Automatic Loading and Unloading.",
          introText: "Since the inception of large sized open-pocket washer extractors, all designs have faced the common question of loading and unloading: How to load and unload the wash cylinder with a minimum effort and time expended' Kannegiesser answers these questions with the PowerSwing. The entire cylinder assembly, consisting of inner and outer drum, can be rotated. For loading, washing, extracting and unloading, the PowerSwing rotates its drum unit to the ideal position.",
          applicationsTitle: "Fully tailored to your application",
          applications: [{"name":"Airlines","img":"https://www.kannegiesser.com/fileadmin/SHARED/Images/Products/Applications/Keyvisual_Fluglinien.jpg","text":"Above the clouds you want to ensure the best results for every passenger. With Kannegiesser machine you can perfectly handle your customer’s wide range of Airline Blankets."},{"name":"Workwear","img":"https://www.kannegiesser.com/fileadmin/SHARED/Images/Products/Applications/Keyvisual_Schutzkleidung.jpg","text":"High pollution loads. Preservation of the protective function. Textile variety in a modern design.\nThese requirements are handled daily! Kannegiesser solutions help you to provide your customers with fresh workwear punctually and reliably."},{"name":"Healthcare","img":"https://www.kannegiesser.com/fileadmin/SHARED/Images/Products/Applications/Keyvisual_Krankenhaus.jpg","text":"Do you handle a wide range of linen for the healthcare sector' The professional preparation of those textiles requires a reproducible hygiene process. With Kannegiesser you are on the safe side!"},{"name":"Hospitality & Restaurant","img":"https://www.kannegiesser.com/fileadmin/SHARED/Images/Products/Applications/Keyvisual_Hotel.jpg","text":"The variety of articles is constantly growing. Customers expect their individual selection of linen. With Kannegiesser machines, you can offer the highest quality, which is particularly gentle on the textile and resources!"},{"name":"Mats","img":"https://www.kannegiesser.com/fileadmin/SHARED/Images/Products/Applications/Keyvisual_Matten.jpg","text":"The first positive impression left in the entrance area of buildings. With dirt trapping mats that have been professionally and resource-friendly processed using Kannegiesser machines!"},{"name":"Residental","img":"https://www.kannegiesser.com/fileadmin/SHARED/Images/Products/Applications/Keyvisual_Bewohner.jpg","text":"Respectful dealing with people and their textiles. Hygienically and gently processed, clean and completely back at the resident – that’s your core business. Kannegiesser supports you with the right machine and data technology!"}],
          bannerTitle: "The ideal loading position takes full advantage of gravity assistance.",
          bannerSubtitle: "For loading, the drum unit with oversized door opening is in a full vertical position, facilitating loading from the top"
          },
          benefits: {
            blocks: [{"title":"Maximum use of drum volume due to unique loading principle","text":"The drum unit is always in the optimum position for loading, washing, spinning and, of course, unloading. On loading, the drum opening is vertical and already rotating at item distribution speed. As a result, loading can take place very quickly and with larger loading quantities.","boxBullets":["Maximum Use of Drum Volume With Vertical Loading","The inner drum rotates while it is being loaded","Laundry items are pressed against the drum wall by centrifugal force"]},{"title":"Seamless integration into your logistics due to various layout options","text":"The PowerSwing loading principle provides a large number of loading options. The washer can be integrated in the best way possible into all sorts of different laundry layouts. Loading can be done semiautomatically via simple inclined conveyor, with cart dumpers, bag systems or many other system suited to your space requirements.","boxBullets":["Automatic loading with monorail system","Loading with loading conveyor","Loading with lift shuttle conveyor","Unloading on a conveyor belt for automatic transport to a batch dryer"]}]
          },
          technologies: {
            blocks: [
              {
                title: "Automatic Loading and Unloading",
                subtitle: "Lowest Ancillary Times",
                text: "The PowerSwing achieves Lowest Ancillary Times Due to Automatic Loading and Unloading, significantly improving the workflow in manual laundry processing."
              }
            ]
          }
        }
      },
"kannegiesser-cleanroom": {
        category: "Washing Technology",
        "title": "Clean Room Technology",
        "subtitle": "Favorit Vario HighClean",
        description: "HYGIENIC QUALITY AND VALIDATED WASHING PROCESSES",
        "img": "https://www.kannegiesser.com/fileadmin/SHARED/Images/Products/Keyvisual_Cleanroom.png",
        heroImg: "https://www.kannegiesser.com/fileadmin/SHARED/Images/Products/Keyvisual_FAV_HC.png",
        tabs: {
          overview: {
            introTitle: "HYGIENIC QUALITY AND VALIDATED WASHING PROCESSES",
            introText: "For hygienic quality and validated washing processes, the Favorit Vario HighClean is the first choice. The water and chemicals are added for each batch based on the weight and program, always based on the real loading weight. ActiveProcessControl even considers the adsorbed liquor during the filling process - a true precision washing that no other machine on the market can perform! This achieves 100% reproducibility and documentation of your hygiene processes.",
            applicationsTitle: "Fully tailored to your application",
            applications: [{"name":"Clean Room","img":"https://www.kannegiesser.com/fileadmin/SHARED/Images/Products/Applications/Keyvisual_Reinraum.jpg","text":"Highest demands on washing quality and particle freedom. Rely on clean room technology from Kannegiesser!"},{"name":"Healthcare","img":"https://www.kannegiesser.com/fileadmin/SHARED/Images/Products/Applications/Keyvisual_Krankenhaus.jpg","text":"Do you handle a wide range of linen for the healthcare sector' The professional preparation of those textiles requires a reproducible hygiene process. With Kannegiesser you are on the safe side!"}]
          },
          benefits: {
            blocks: [
              {
                title: "Maximum Hygiene Security",
                text: "The Favorit Vario HighClean eliminates cross-contamination risks and provides completely validated washing processes with these key features:",
                boxBullets: [
                  "Barrier wall design with loading on the unclean side and unloading in the clean room - so no dirty laundry gets into the clean room!",
                  "Large drum openings for quick and gentle loading and unloading of articles",
                  "Indirect steam heating to prevent contamination and keep the concentration of chemicals at a constant level",
                  "Exceptionally careful CareWash cylinder perforation to reduce the friction",
                  "Water and steam valves made from stainless steel",
                  "Airtight connecting parts for barrier wall integration",
                  "Membrane sealed keypad without edges and fissure suitable for a clean room",
                  "Additionally sealed covering to the clean side"
                ]
              }
            ]
          },
          technologies: {
            blocks: [
              {
                title: "Clean Room Specifications",
                subtitle: "Highest hygiene standards",
                text: "Designed to meet strict clean room regulations. By combining precise mechanical engineering with specialized sealing, it prevents any cross-contamination."
              }
            ]
          }
        }
      },
"kannegiesser-cwd": {
        category: "Washing Technology",
        "title": "Disinfection Sluices",
        "subtitle": "CWD",
        description: "Porta CONTAINER WASH- AND DISINFECTION SLUICE",
        "img": "https://www.kannegiesser.com/fileadmin/SHARED/Images/Products/Thumbs_CWD_Desi.png",
        heroImg: "https://www.kannegiesser.com/fileadmin/SHARED/Images/Products/Keyvisual_CWD_Desi.jpg",
        tabs: {
          overview: {
            introTitle: "Porta CONTAINER WASH- AND DISINFECTION SLUICE",
            introText: "Our custom-made Porta systems are ideal for processing laundry trolleys, transport carts, containers and wheeled shelves. Depending on its equipment, the process includes soaking, washing, rinsing, steaming, chemical disinfection and vapour exhaust in optimal sequence.",
            applicationsTitle: "Fully tailored to your application",
            applications: [{"name":"Healthcare","img":"https://www.kannegiesser.com/fileadmin/SHARED/Images/Products/Applications/Keyvisual_Krankenhaus.jpg","text":"Do you handle a wide range of linen for the healthcare sector' The professional preparation of those textiles requires a reproducible hygiene process. With Kannegiesser you are on the safe side!"},{"name":"Residental","img":"https://www.kannegiesser.com/fileadmin/SHARED/Images/Products/Applications/Keyvisual_Bewohner.jpg","text":"Respectful dealing with people and their textiles. Hygienically and gently processed, clean and completely back at the resident – that’s your core business. Kannegiesser supports you with the right machine and data technology!"}]
          },
          benefits: {
            blocks: [
              {
                title: "Specialties and functions",
                text: "The CWD Porta System offers robust features designed for high-efficiency processing and uncompromising hygiene:",
                boxBullets: [
                  "Closed cabin for real barrier-wall application",
                  "Above-floor or in-floor installation possible",
                  "Average cycle time per charge (2 containers) 5-6 min dependent on degree of soiling and program",
                  "Chain driven nozzle facilities spray water, chemicals and steam on each trolley",
                  "For high-pressure and medium-pressure washing procedures (6 resp 20 bar spray pressure)",
                  "Recovery tank for reduction of water consumption by 50 - 60 % optionally available",
                  "Nozzle systems for washing of bottom and top optionally available",
                  "Internal tilting device optionally available",
                  "Hot air drying system optionally available",
                  "SPS control for up to 99 individual programs"
                ]
              }
            ]
          },
          technologies: {
            blocks: [
              {
                title: "Sluice Integration",
                subtitle: "Safe separation",
                text: "The Porta Container Wash- and Disinfection Sluice ensures complete physical separation between the soiled and clean sides of the laundry, vital for preventing nosocomial infections."
              }
            ]
          }
        }
      },
"kannegiesser-cd": {
        category: "Washing Technology",
        "title": "Disinfection Sluices",
        "subtitle": "CD",
        description: "DISINFECTION TUNNEL PORTA MODEL CD",
        "img": "https://www.kannegiesser.com/fileadmin/SHARED/Images/Products/Thumbs_CD_Desi.png",
        heroImg: "https://www.kannegiesser.com/fileadmin/SHARED/Images/Products/Keyvisual_CD_Desi.jpg",
        tabs: {
          overview: {
            introTitle: "DISINFECTION TUNNEL PORTA MODEL CD",
            introText: "The disinfection cabinet Porta CD for chemical disinfection of laundry trolleys, transport carts, containers etc.",
            applicationsTitle: "Fully tailored to your application",
            applications: [{"name":"Healthcare","img":"https://www.kannegiesser.com/fileadmin/SHARED/Images/Products/Applications/Keyvisual_Krankenhaus.jpg","text":"Do you handle a wide range of linen for the healthcare sector' The professional preparation of those textiles requires a reproducible hygiene process. With Kannegiesser you are on the safe side!"},{"name":"Residental","img":"https://www.kannegiesser.com/fileadmin/SHARED/Images/Products/Applications/Keyvisual_Bewohner.jpg","text":"Respectful dealing with people and their textiles. Hygienically and gently processed, clean and completely back at the resident – that’s your core business. Kannegiesser supports you with the right machine and data technology!"},{"name":"Workwear","img":"https://www.kannegiesser.com/fileadmin/SHARED/Images/Products/Applications/Keyvisual_Schutzkleidung.jpg","text":"High pollution loads. Preservation of the protective function. Textile variety in a modern design.\nThese requirements are handled daily! Kannegiesser solutions help you to provide your customers with fresh workwear punctually and reliably."}]
          },
          benefits: {
            blocks: [
              {
                title: "Specialties and functions",
                text: "The CD Disinfection Tunnel provides critical continuous hygiene with these key features:",
                boxBullets: [
                  "Cabinet body made of aluminium",
                  "Inner cabinet walls made of stainless steel",
                  "Counter-locked automatic aluminium roller doors",
                  "Automatic dosing with membrane dosing pump",
                  "Disinfections are sprayed on the objects by spraying heads",
                  "Ventilator exhausts vapours from the cabin afterwards",
                  "Stainless steel floor optionally available"
                ]
              }
            ]
          },
          technologies: {
            blocks: [
              {
                title: "Disinfection Tunnel Porta",
                subtitle: "Continuous hygiene",
                text: "The CD Disinfection Tunnel provides continuous, validated decontamination of items passing through the hygienic barrier."
              }
            ]
          }
        }
      },

};

const DATA_INFO_DATA = {
  "kannegiesser-process-control": {
    "category": "Data Information Systems",
    "title": "Process Control",
    "subtitle": "PROCESS CONTROL",
    "description": "Smart Process Control",
    "img": "https://www.kannegiesser.com/fileadmin/SHARED/Images/Products/Category_Process-Control.png",
    "heroImg": "https://www.kannegiesser.com/fileadmin/SHARED/Images/Products/Keyvisual_DataInfoSystems.jpg",
    "tabs": {
      "overview": {
        "introTitle": "IMPROVING PERFORMANCE WITH SMARTER PROCESSES",
        "introText": "Efficiency through process automation.\n\nOne key to premium laundry services at competitive rates is efficiency. Process control optimizes laundry logistics by using batch data to control sequences and machines automatically.",
        "applicationsTitle": "Fully tailored to your application",
        "applications": [
          {
            "name": "Airlines",
            "img": "https://www.kannegiesser.com/fileadmin/SHARED/Images/Products/Applications/Keyvisual_Fluglinien.jpg",
            "text": "Above the clouds you want to ensure the best results for every passenger. With Kannegiesser machine you can perfectly handle your customer’s wide range of Airline Blankets."
          },
          {
            "name": "Hospitality & Restaurant",
            "img": "https://www.kannegiesser.com/fileadmin/SHARED/Images/Products/Applications/Keyvisual_Hotel.jpg",
            "text": "The variety of articles is constantly growing. Customers expect their individual selection of linen. With Kannegiesser machines, you can offer the highest quality, which is particularly gentle on the textile and resources!"
          },
          {
            "name": "Healthcare",
            "img": "https://www.kannegiesser.com/fileadmin/SHARED/Images/Products/Applications/Keyvisual_Krankenhaus.jpg",
            "text": "Do you handle a wide range of linen for the healthcare sector? The professional preparation of those textiles requires a reproducible hygiene process. With Kannegiesser you are on the safe side!"
          }
        ],
        "summaryBlocks": [
          {
            "title": "SMART UP YOUR LAUNDRY!",
            "subtitle": "Consistency and continuity of production, processes and related logistics."
          },
          {
            "title": "Monitor and control processes",
            "text": "Process control optimizes production and enables higher performance. Processing sequences and machine parameters are automatically controlled and visualized up to expedition.",
            "bullets": [
              "Process Monitoring",
              "Batch visualization",
              "Process Control",
              "Automatic Program Selection",
              "TrackView"
            ]
          }
        ]
      }
    }
  },
  "kannegiesser-monitoring": {
    "category": "Data Information Systems",
    "title": "Monitoring",
    "subtitle": "MONITORING",
    "description": "Data Analytics",
    "img": "https://www.kannegiesser.com/fileadmin/SHARED/Images/Products/Thumbs_DataInfoSystems.png",
    "heroImg": "https://www.kannegiesser.com/fileadmin/SHARED/Images/Products/Keyvisual_DataInfoSystems.jpg",
    "tabs": {
      "overview": {
        "introTitle": "ANALYZE AND IMPROVE YOUR PRODUCTION",
        "introText": "Continuous monitoring and analysis of your production data.\n\nCast some light into the black box called laundry with our monitoring and reporting functions. Identify production issues fast and take action immediatly to guarantee high output at all times.",
        "applicationsTitle": "Fully tailored to your application",
        "applications": [
          {
            "name": "Airlines",
            "img": "https://www.kannegiesser.com/fileadmin/SHARED/Images/Products/Applications/Keyvisual_Fluglinien.jpg",
            "text": "Above the clouds you want to ensure the best results for every passenger. With Kannegiesser machine you can perfectly handle your customer’s wide range of Airline Blankets."
          },
          {
            "name": "Hospitality & Restaurant",
            "img": "https://www.kannegiesser.com/fileadmin/SHARED/Images/Products/Applications/Keyvisual_Hotel.jpg",
            "text": "The variety of articles is constantly growing. Customers expect their individual selection of linen. With Kannegiesser machines, you can offer the highest quality, which is particularly gentle on the textile and resources!"
          },
          {
            "name": "Healthcare",
            "img": "https://www.kannegiesser.com/fileadmin/SHARED/Images/Products/Applications/Keyvisual_Krankenhaus.jpg",
            "text": "Do you handle a wide range of linen for the healthcare sector? The professional preparation of those textiles requires a reproducible hygiene process. With Kannegiesser you are on the safe side!"
          }
        ],
        "summaryBlocks": [
          {
            "title": "VISUALIZE YOUR PERFORMANCE",
            "subtitle": "With Area Monitoring, performance data is illustrated on large screens for control and motivation."
          },
          {
            "title": "Live Monitoring and Reporting",
            "text": "Monitoring allows you to stay up to date with KPIs such as performance, availability, consumption and quality for your entire laundry, specific laundry areas or single machines. Office Reporting provides comprehensive and interactive evaluation of laundry data over time, indluding graphs.",
            "bullets": [
              "Area Monitoring",
              "Office Monitoring",
              "Office Reporting",
              "Monitoring and Reporting of KPIs"
            ]
          }
        ]
      }
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
                          {block.bullets && (
                            <ul className="list-disc pl-5 text-[15px] text-slate-700 leading-relaxed space-y-2 font-light mt-4">
                              {block.bullets.map((bullet, bIdx) => (
                                <li key={bIdx} className="pl-2">{bullet}</li>
                              ))}
                            </ul>
                          )}
                      </div>
                      
                      {/* Right Grey Box */}
                      {(block.boxTitle || block.boxBullets) && (
                        <div className="flex-1 bg-[#EBEBEB] p-8 lg:p-12">
                          {block.boxTitle && <p className="text-[14px] text-slate-500 mb-6 uppercase tracking-widest">{block.boxTitle}</p>}
                          {block.boxBullets && (
                                <ul className="list-disc pl-5 text-[15px] text-slate-700 leading-relaxed space-y-2 font-light">
                                  {block.boxBullets.map((bullet, bIdx) => (
                                    <li key={bIdx} className="pl-2">{bullet}</li>
                                  ))}
                                </ul>
                              )}
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
                    {block.boxBullets && (
                      <ul className="list-disc pl-6 mt-6 text-lg text-slate-600 leading-relaxed space-y-3 font-light">
                        {block.boxBullets.map((bullet, bIdx) => (
                          <li key={bIdx} className="pl-2">{bullet}</li>
                        ))}
                      </ul>
                    )}
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
                    {block.boxBullets && (
                      <ul className="list-disc pl-6 mt-6 text-lg text-slate-600 leading-relaxed space-y-3 font-light">
                        {block.boxBullets.map((bullet, bIdx) => (
                          <li key={bIdx} className="pl-2">{bullet}</li>
                        ))}
                      </ul>
                    )}
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


