import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Check, 
  Search, 
  ArrowRight, 
  Layers, 
  Droplet, 
  Cpu, 
  Sun, 
  ShieldCheck,
  PackageCheck
} from 'lucide-react';

export default function ProductsSection({ onOpenInquiry }) {
  const navigate = useNavigate();
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const products = [
    {
      id: "PROD-RAKSHA",
      brand: "Raksha Pipes",
      category: "pipes",
      categoryLabel: "Pipes & Fittings",
      tagline: "Plumbing | Sanitary | Agriculture | Water Tanks",
      badge: "Authorized Distributor",
      popular: true,
      description: "Complete CPVC, UPVC, SWR drainage, and water storage tank solutions engineered for residential and commercial plumbing networks.",
      imgUrl: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=600&q=80",
      details: ["CPVC & UPVC Plumbing Pipes", "SWR Drainage Systems", "Agricultural PVC Systems", "Water Storage Tanks"],
      subTypes: [
        {
          id: "SUB-RAK-01",
          name: "CPVC & UPVC Plumbing Pipes",
          sku: "RAK-PLUMB-01",
          categoryType: "Plumbing Pipe",
          rating: "Sch 40 / Sch 80",
          headRange: "Standard Pressure",
          discharge: "1/2 inch - 3 inch",
          inStock: true,
          stockQty: 900,
          estDelivery: "Same-day dispatch to Pune/PCMC",
          priceEst: "₹210 - ₹1,800",
          imgUrl: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=600&q=80",
          features: ["High corrosion & chemical resistance", "Solvent weld leak-proof jointing", "Ideal for hot/cold potable water"],
          applications: ["Underground Water Layouts", "Domestic Plumbing"]
        },
        {
          id: "SUB-RAK-02",
          name: "SWR Drainage Systems",
          sku: "RAK-SWR-02",
          categoryType: "SWR Pipe",
          rating: "Type A & B",
          headRange: "75mm - 110mm",
          discharge: "Gravity Flow",
          inStock: true,
          stockQty: 750,
          estDelivery: "Same-day dispatch to Pune/PCMC",
          priceEst: "₹310 - ₹1,400",
          imgUrl: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=600&q=80",
          features: ["Rubber ring jointing system", "UV resistant for external risers"],
          applications: ["Soil, Waste & Rainwater Lines"]
        },
        {
          id: "SUB-RAK-03",
          name: "Agricultural PVC Systems",
          sku: "RAK-AGRI-03",
          categoryType: "Agri Pipe",
          rating: "4 - 10 kg/cm²",
          headRange: "Class 2 to Class 5",
          discharge: "20mm - 200mm",
          inStock: true,
          stockQty: 1200,
          estDelivery: "Same-day dispatch to Pune/PCMC",
          priceEst: "₹180 - ₹2,400",
          imgUrl: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=600&q=80",
          features: ["High tensile impact resistance", "Smooth bore low pressure drop"],
          applications: ["Farm Irrigation Mains", "Drip Lines"]
        },
        {
          id: "SUB-RAK-04",
          name: "Water Storage Tanks",
          sku: "RAK-TANK-04",
          categoryType: "Storage Tank",
          rating: "Multi-layer UV Shield",
          headRange: "Overhead",
          discharge: "500L - 5000L",
          inStock: true,
          stockQty: 28,
          estDelivery: "Same-day dispatch to Pune/PCMC",
          priceEst: "₹6,000 - ₹55,000",
          imgUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80",
          features: ["Virgin food-grade material", "Algae protection inner coating"],
          applications: ["Apartment Complex Roofs", "Site Water Storage"]
        }
      ]
    },
    {
      id: "PROD-ASHIRVAD",
      brand: "Ashirvad by aliaxis",
      category: "pipes",
      categoryLabel: "Pipes & Fittings",
      tagline: "Plumbing | Sanitary | Agriculture | Water Tanks",
      badge: "Industry Standard",
      popular: true,
      description: "NSF-certified lead-free CPVC systems, acoustic SWR lines, and foamcore underground drainage built with global Aliaxis engineering quality.",
      imgUrl: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=600&q=80",
      details: ["Lead-Free CPVC Systems", "Foamcore Underground Drainage", "Low-Noise SWR Pipes", "High-Pressure Fittings"],
      subTypes: [
        {
          id: "SUB-ASH-01",
          name: "Lead-Free CPVC Systems (FlowGuard Plus)",
          sku: "ASH-CPVC-01",
          categoryType: "Plumbing Pipe",
          rating: "SDR 11 / SDR 13.5",
          headRange: "Up to 93°C",
          discharge: "1/2 inch - 2 inch",
          inStock: true,
          stockQty: 1500,
          estDelivery: "Same-day dispatch to Pune/PCMC",
          priceEst: "₹280 - ₹1,450 / length",
          imgUrl: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=600&q=80",
          features: ["NSF lead-free certified", "High heat endurance for solar lines"],
          applications: ["Domestic Hot & Cold Plumbing"]
        },
        {
          id: "SUB-ASH-02",
          name: "Foamcore Underground Drainage",
          sku: "ASH-FOAM-02",
          categoryType: "Underground Drainage",
          rating: "SN 4 / SN 8",
          headRange: "Subsoil Placement",
          discharge: "110mm - 315mm",
          inStock: true,
          stockQty: 420,
          estDelivery: "1-2 Business Days",
          priceEst: "₹650 - ₹4,200",
          imgUrl: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=600&q=80",
          features: ["Multi-layer structural stiffness", "Crush-resistant earth load design"],
          applications: ["Township Drainage Networks", "Commercial Sewer Mains"]
        },
        {
          id: "SUB-ASH-03",
          name: "Low-Noise SWR Pipes",
          sku: "ASH-SWR-03",
          categoryType: "Acoustic SWR",
          rating: "Triple Layer",
          headRange: "Gravity Flow",
          discharge: "75mm - 160mm",
          inStock: true,
          stockQty: 850,
          estDelivery: "Same-day dispatch to Pune/PCMC",
          priceEst: "₹420 - ₹2,100",
          imgUrl: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=600&q=80",
          features: ["Noise dampening mineral structure", "Leak-proof ring seal"],
          applications: ["High-Rise Residential Waste Lines"]
        },
        {
          id: "SUB-ASH-04",
          name: "High-Pressure Fittings",
          sku: "ASH-FIT-04",
          categoryType: "Pipes & Fittings",
          rating: "PN 16 / PN 25",
          headRange: "High Bar Load",
          discharge: "All Standard Sizes",
          inStock: true,
          stockQty: 2500,
          estDelivery: "Same-day dispatch to Pune/PCMC",
          priceEst: "₹45 - ₹480 / pc",
          imgUrl: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=600&q=80",
          features: ["Precision molded brass insert elbows & tees", "Heavy wall thickness"],
          applications: ["Commercial Riser Connections"]
        }
      ]
    },
    {
      id: "PROD-CRI",
      brand: "C.R.I. Pumps",
      category: "pumps",
      categoryLabel: "Pumps & Motors",
      tagline: "Pumping trust. Worldwide.",
      badge: "Leading Pump Brand",
      popular: true,
      description: "Submersible borewell, monoblock, chemical process, and sewage cutter pumps engineered for agriculture, domestic, and industrial fluid transfer.",
      imgUrl: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80",
      details: [
        "Agriculture Pumps (Submersible & Monoblock)",
        "Residential Pumps (Domestic pressure)",
        "Industrial Pumps (Chemical & Process)",
        "Sewage Pumps (Submersible cutter & vortex)"
      ],
      subTypes: [
        {
          id: "SUB-CRI-01",
          name: "Agriculture Submersible & Monoblock Pumps",
          sku: "CRI-AGRI-100",
          categoryType: "Borewell Pump",
          rating: "3.0 HP - 15.0 HP",
          headRange: "30m - 180m",
          discharge: "100 - 450 LPM",
          inStock: true,
          stockQty: 42,
          estDelivery: "Same-day dispatch to Pune/PCMC",
          priceEst: "₹28,500 - ₹45,000",
          imgUrl: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80",
          features: ["IE2/IE3 energy efficient motor", "High head pressure for deep wells"],
          applications: ["Irrigation Schemes", "Farm Borewells"]
        },
        {
          id: "SUB-CRI-02",
          name: "Residential Domestic Pressure Pumps",
          sku: "CRI-RES-200",
          categoryType: "Monoblock Pump",
          rating: "0.5 HP - 2.0 HP",
          headRange: "6m - 40m",
          discharge: "20 - 120 LPM",
          inStock: true,
          stockQty: 35,
          estDelivery: "Same-day dispatch to Pune/PCMC",
          priceEst: "₹6,500 - ₹14,200",
          imgUrl: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80",
          features: ["Self-priming suction up to 8m", "Ultra-quiet motor operation"],
          applications: ["Bungalows", "Apartment Overhead Transfer"]
        },
        {
          id: "SUB-CRI-03",
          name: "Industrial Chemical & Process Pumps",
          sku: "CRI-IND-300",
          categoryType: "Centrifugal Pump",
          rating: "5.0 HP - 30.0 HP",
          headRange: "15m - 120m",
          discharge: "200 - 1500 LPM",
          inStock: true,
          stockQty: 18,
          estDelivery: "1-2 Business Days",
          priceEst: "₹34,000 - ₹85,000",
          imgUrl: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80",
          features: ["SS-316 dynamically balanced impellers", "Chemical corrosion proof"],
          applications: ["Chakan & Bhosari Industrial Hubs", "Process Plants"]
        },
        {
          id: "SUB-CRI-04",
          name: "Submersible Sewage Cutter & Vortex Pumps",
          sku: "CRI-SEW-400",
          categoryType: "Sewage Pump",
          rating: "1.5 HP - 7.5 HP",
          headRange: "8m - 35m",
          discharge: "150 - 900 LPM",
          inStock: true,
          stockQty: 12,
          estDelivery: "Same-day dispatch to Pune/PCMC",
          priceEst: "₹26,000 - ₹48,000",
          imgUrl: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80",
          features: ["Non-clogging tungsten cutter edge", "Passes solids up to 50mm"],
          applications: ["STP Wastewater Plants", "Basement Sumps"]
        }
      ]
    },
    {
      id: "PROD-BOOSTER",
      brand: "Hydro-Pneumatic Booster Systems",
      category: "pumps",
      categoryLabel: "Pumps & Motors",
      tagline: "High-Rise & Turnkey Water Solutions",
      badge: "Commercial Grade",
      popular: true,
      description: "Automated constant pressure hydro-pneumatic pumping skids integrated with Variable Frequency Drives (VFD) for commercial towers.",
      imgUrl: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80",
      details: [
        "Complete water supply solutions",
        "Turnkey engineering projects",
        "Multi-pump pressure boosting systems",
        "VFD variable frequency drive integration"
      ],
      subTypes: [
        {
          id: "SUB-HYPN-01",
          name: "Multi-Pump Pressure Boosting Skids",
          sku: "HYPN-SKID-01",
          categoryType: "Booster System",
          rating: "3.0 HP - 25.0 HP Cascade",
          headRange: "20m - 120m",
          discharge: "100 - 1200 LPM",
          inStock: true,
          stockQty: 6,
          estDelivery: "2-3 Business Days",
          priceEst: "₹85,000 - ₹2,10,000",
          imgUrl: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80",
          features: ["VFD frequency modulation", "Constant pressure across all floors", "Automatic pump alternation"],
          applications: ["Luxury High-Rise Apartments", "Commercial Malls"]
        },
        {
          id: "SUB-HYPN-02",
          name: "Turnkey Water Supply Engineering Setup",
          sku: "HYPN-TK-02",
          categoryType: "Turnkey Setup",
          rating: "Custom Capacity",
          headRange: "Project Specific",
          discharge: "Up to 3000 LPM",
          inStock: true,
          stockQty: 4,
          estDelivery: "Project Specific Schedule",
          priceEst: "Quote On Requirement",
          imgUrl: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80",
          features: ["Complete hydraulic skid blueprinting", "PLC telemetry panel integration"],
          applications: ["Municipal Water Schemes", "MIDC Industrial Sites"]
        }
      ]
    },
    {
      id: "PROD-HULIOT",
      brand: "Huliot India",
      category: "pipes",
      categoryLabel: "Acoustic & Drainage",
      tagline: "Plumbing Water Supply | Waste Water | Infrastructure",
      badge: "Global Technology",
      description: "Ultra-silent mineral-filled soundproof SWR drainage and flexible PEX/PERT water supply networks for luxury multi-story construction.",
      imgUrl: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=600&q=80",
      details: [
        "Plumbing Water Supply System",
        "Waste Water & Drainage System",
        "Infrastructure System",
        "Acoustic Ultra-Silent Drainage"
      ],
      subTypes: [
        {
          id: "SUB-HUL-01",
          name: "Acoustic Ultra-Silent Drainage (Ultra Silent)",
          sku: "HUL-SILENT-01",
          categoryType: "Acoustic SWR",
          rating: "Triple Layer Mineral-Filled",
          headRange: "Noise level < 15dB",
          discharge: "50mm - 160mm",
          inStock: true,
          stockQty: 320,
          estDelivery: "Same-day dispatch to Pune/PCMC",
          priceEst: "₹850 - ₹3,800 / length",
          imgUrl: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=600&q=80",
          features: ["Eliminates flush water flow noise", "High temperature chemical resistance"],
          applications: ["5-Star Hotels", "Luxury Towers"]
        },
        {
          id: "SUB-HUL-02",
          name: "PEX & PERT Plumbing Water Supply System",
          sku: "HUL-PEX-02",
          categoryType: "PEX Supply",
          rating: "PN 12.5 - PN 20",
          headRange: "Up to 95°C",
          discharge: "16mm - 63mm",
          inStock: true,
          stockQty: 600,
          estDelivery: "1-2 Business Days",
          priceEst: "₹140 - ₹850 / meter",
          imgUrl: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=600&q=80",
          features: ["Flexible multi-layer coil piping", "Corrosion & scale proof"],
          applications: ["Concealed Bathroom Water Distribution"]
        }
      ]
    },
    {
      id: "PROD-LEADER",
      brand: "Leader Valves Limited",
      category: "valves",
      categoryLabel: "Valves & Flow Control",
      tagline: "Valves for all applications",
      badge: "Heavy Duty",
      description: "Forged steel, gunmetal, and cast iron sluice, globe, butterfly, check, and fire-fighting valves for industrial steam and water mains.",
      imgUrl: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80",
      details: [
        "Gate, Globe & Check Valves",
        "Forged Steel & Cast Iron Valves",
        "Ball, Butterfly & Air Release Valves",
        "Fire-fighting & Industrial Water Valves"
      ],
      subTypes: [
        {
          id: "SUB-LDR-01",
          name: "Industrial Sluice, Gate, Globe & Butterfly Valves",
          sku: "LDR-VALVE-01",
          categoryType: "Flow Valve",
          rating: "PN10 / PN16 / ANSI 150",
          headRange: "-10°C to 220°C",
          discharge: "15mm - 600mm Flanged",
          inStock: true,
          stockQty: 140,
          estDelivery: "Same-day dispatch to Pune/PCMC",
          priceEst: "₹2,800 - ₹48,000",
          imgUrl: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80",
          features: ["Bubble tight shutoff seal", "Heavy cast iron & forged steel bodies"],
          applications: ["Boiler Steam Lines", "Fire-fighting Hydrant Mains"]
        }
      ]
    },
    {
      id: "PROD-AUTOCON",
      brand: "Autocon",
      category: "valves",
      categoryLabel: "Electronics & Automation",
      tagline: "Electronic Control Panels",
      badge: "Smart Automation",
      description: "Automatic water level controllers, microprocessor starters, and dual pump cyclic control panels with dry-run protection.",
      imgUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80",
      details: [
        "Automatic Water Level Controllers",
        "Microprocessor Pump Control Panels",
        "Dry Run & Overload Protection",
        "Dual Pump Cyclic Starters"
      ],
      subTypes: [
        {
          id: "SUB-ATC-01",
          name: "Microprocessor Pump Control & Level Switch Panels",
          sku: "ATC-PANEL-01",
          categoryType: "Control Panel",
          rating: "1.0 HP - 50.0 HP DOL / Star-Delta",
          headRange: "415V 3-Phase / 230V Single-Phase",
          discharge: "Digital Display Load Control",
          inStock: true,
          stockQty: 55,
          estDelivery: "Same-day dispatch to Pune/PCMC",
          priceEst: "₹4,800 - ₹32,000",
          imgUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80",
          features: ["Built-in dry run & current overload trip", "Auto sensor tank level logic"],
          applications: ["Society Overhead Tank Automation"]
        }
      ]
    },
    {
      id: "PROD-SINTEX",
      brand: "Sintex",
      category: "tanks",
      categoryLabel: "Water Tanks",
      tagline: "India's Most Trusted Water Tanks",
      badge: "100% Food Grade",
      description: "Multi-layer antimicrobial FDA-approved virgin polymer overhead, loft, and underground water storage tanks.",
      imgUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80",
      details: [
        "Multi-Layer Antimicrobial Tanks",
        "Loft & Underground Tanks",
        "Commercial Water Storage",
        "UV Stabilized Materials"
      ],
      subTypes: [
        {
          id: "SUB-SNT-01",
          name: "Multi-Layer Antimicrobial Overhead & Loft Tanks",
          sku: "SNT-FDA-01",
          categoryType: "Polymer Tank",
          rating: "3 Layer / 4 Layer Sunblock",
          headRange: "500L - 10,000L",
          discharge: "Threaded Outlets 1-3 in",
          inStock: true,
          stockQty: 65,
          estDelivery: "Same-day dispatch to Pune/PCMC",
          priceEst: "₹4,200 - ₹72,000",
          imgUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80",
          features: ["100% FDA virgin polymer", "UV stabilized against solar cracking"],
          applications: ["Residential Roofs", "Industrial Site Water Reserve"]
        }
      ]
    },
    {
      id: "PROD-JOHNSON-KOHLER",
      brand: "Johnson Bathware & Kohler",
      category: "sanitary",
      categoryLabel: "CP & Sanitary",
      tagline: "CP & Sanitary Solutions",
      badge: "Luxury & Commercial",
      description: "Premium architectural CP chrome faucets, sensor taps, wall-hung sanitary closets, and concealed flush valves for elite real estate.",
      imgUrl: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80",
      details: [
        "Premium Commercial CP Fittings",
        "Wall-Hung & Floor Mounted Sanitaryware",
        "Commercial Sensor Faucets",
        "Concealed Flush Tanks & Valves"
      ],
      subTypes: [
        {
          id: "SUB-JK-01",
          name: "Commercial Sensor Faucets & CP Bathware",
          sku: "JK-BATH-01",
          categoryType: "CP Fitting",
          rating: "Multi-layer Chrome Finish",
          headRange: "0.5 - 5.0 bar Pressure",
          discharge: "Water-Saving Aerator",
          inStock: true,
          stockQty: 210,
          estDelivery: "Same-day dispatch to Pune/PCMC",
          priceEst: "₹1,850 - ₹18,500",
          imgUrl: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80",
          features: ["Drip-free ceramic disc cartridges", "Hands-free hygiene sensor logic"],
          applications: ["Corporate Executive Restrooms", "Residential Bathrooms"]
        }
      ]
    },
    {
      id: "PROD-SOLAR",
      brand: "WAASOL & LAXSO",
      category: "solar",
      categoryLabel: "Solar Heating",
      tagline: "Solar & PV Water Heaters",
      badge: "Energy Saving",
      description: "Evacuated Tube Collector (ETC) and Flat Plate Collector (FPC) solar water heating arrays for commercial hospitals and residential setups.",
      imgUrl: "https://images.unsplash.com/photo-1509391365390-d4695502c359?auto=format&fit=crop&w=600&q=80",
      details: [
        "Solar Water Heater Systems",
        "PV Solar Water Heater Systems",
        "Centralized Residential Solar arrays",
        "Commercial & Hospital installations"
      ],
      subTypes: [
        {
          id: "SUB-SOL-01",
          name: "Centralized Solar & PV Water Heater Systems",
          sku: "SOL-SYS-01",
          categoryType: "Solar Heating",
          rating: "ETC / FPC High Yield",
          headRange: "100 LPD - 5000 LPD",
          discharge: "High Temperature Solar Lines",
          inStock: true,
          stockQty: 15,
          estDelivery: "1-2 Business Days",
          priceEst: "₹24,000 - ₹1,80,000",
          imgUrl: "https://images.unsplash.com/photo-1509391365390-d4695502c359?auto=format&fit=crop&w=600&q=80",
          features: ["Heavy glass tube solar absorption", "Electrical backup heater heating element"],
          applications: ["Hospitals", "Hostel Blocks", "Bungalow Heating"]
        }
      ]
    },
    {
      id: "PROD-RDRAIN",
      brand: "R Drain",
      category: "pipes",
      categoryLabel: "Drainage Systems",
      tagline: "HDPE Subsoil Drainage Pipe",
      badge: "Specialized HDPE",
      description: "Perforated corrugated double-wall subsoil HDPE drainage pipes designed for groundwater level control, sports turf, and foundation protection.",
      imgUrl: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=600&q=80",
      details: [
        "Perforated HDPE Drainage Pipes",
        "Groundwater Table De-watering",
        "Basement Retaining Wall Protection",
        "Sports Stadium & Road Sub-drainage"
      ],
      subTypes: [
        {
          id: "SUB-RDR-01",
          name: "Perforated HDPE Subsoil Drainage Pipe",
          sku: "RDR-HDPE-01",
          categoryType: "Subsoil Pipe",
          rating: "SN4 / SN8 Stiffness",
          headRange: "Perforated Water Intake",
          discharge: "63mm - 200mm",
          inStock: true,
          stockQty: 400,
          estDelivery: "Same-day dispatch to Pune/PCMC",
          priceEst: "₹110 - ₹650 / meter",
          imgUrl: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=600&q=80",
          features: ["Prevents waterlogging in foundations", "Perforated slot design for quick water evacuation"],
          applications: ["Sports Stadiums", "Retaining Wall Dewatering"]
        }
      ]
    }
  ];

  const filterButtons = [
    { id: 'all', label: 'All Products' },
    { id: 'pumps', label: 'Pumps & Pressure Boosting' },
    { id: 'pipes', label: 'Pipes & Drainage' },
    { id: 'valves', label: 'Valves & Control Panels' },
    { id: 'tanks', label: 'Tanks & Solar' },
    { id: 'sanitary', label: 'CP & Sanitary' },
    { id: 'infrastructure', label: 'Chambers & Paints' }
  ];

  const filteredProducts = products.filter(item => {
    const matchesFilter = filter === 'all' || item.category === filter || (filter === 'tanks' && (item.category === 'tanks' || item.category === 'solar'));
    const matchesSearch = item.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.details.some(d => d.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  return (
    <section id="products" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 text-red-700 text-xs font-bold uppercase tracking-wider mb-3">
            <span>Official Authorized Brands</span>
          </div>
          {/* Matched Section Title with Reference Design System */}
          <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            OUR PRODUCTS & AUTHORIZED BRANDS
          </h3>
          <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
            Direct wholesale distributor and retailer for India's leading pumping, piping,
            sanitary, solar, and municipal water infrastructure brands.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 mb-10">
          {/* Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto w-full pb-2 lg:pb-0 scrollbar-none">
            {filterButtons.map((btn) => (
              <button
                key={btn.id}
                onClick={() => setFilter(btn.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  filter === btn.id
                    ? 'bg-red-600 text-white shadow-md shadow-red-600/30'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full lg:w-72 shrink-0">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search brand or product..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-white border border-slate-200 text-xs font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
        </div>

        {/* Product Cards Grid with Matched Typography & Card Headers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((item, index) => (
            <div 
              key={item.id || index}
              className="group relative bg-white rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-2xl hover:border-red-400/50 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              <div>
                {/* Top Image / Banner Section */}
                <div className="relative h-44 w-full bg-slate-100 overflow-hidden">
                  {item.imgUrl ? (
                    <img 
                      src={item.imgUrl} 
                      alt={item.brand} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out" 
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-tr from-slate-900 via-slate-800 to-slate-700 flex items-center justify-center p-4">
                      <span className="text-white/20 font-black text-3xl tracking-widest uppercase select-none">
                        {item.brand}
                      </span>
                    </div>
                  )}

                  {/* Overlay Gradient for readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                  {/* Top Floating Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 z-10">
                    
                    
                  </div>

                  {/* Floating Brand Name over Image */}
                  <div className="absolute bottom-3 left-4 right-4 z-10">
                    {/* Matched Card Heading with Reference Design System */}
                    <h4 className="text-xl font-black text-white tracking-tight group-hover:text-red-400 transition-colors drop-shadow-sm">
                      {item.brand}
                    </h4>
                  </div>
                </div>

                {/* Card Body Details */}
                <div className="p-6">
                  {/* Subtitle / Tagline */}
                  <p className="text-xs font-semibold text-slate-500 italic mb-4 line-clamp-1 border-b border-slate-100 pb-3">
                    {item.tagline}
                  </p>

                  {/* Details Bullet List */}
                  <div className="space-y-2 mb-2">
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      Key Offerings
                    </p>
                    {item.details.map((point, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs font-medium text-slate-700">
                        <span className="w-2 h-2 rounded-full bg-red-500 shrink-0 mt-1 shadow-sm shadow-red-500/50 group-hover:scale-110 transition-transform" />
                        <span className="line-clamp-1">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Action Footer */}
              <div className="p-6 pt-0 mt-auto">
                <button
                  onClick={() =>
                    navigate(`/products/subtypes`, {
                      state: {
                        productTitle: `${item.brand} Solutions`,
                        subTypes: item.subTypes,
                        brandTag: item.brand,
                      },
                    })
                  }
                  className="w-full inline-flex items-center justify-between px-5 py-3 rounded-2xl bg-slate-900 group-hover:bg-red-600 text-white text-xs font-extrabold uppercase tracking-wider shadow-lg group-hover:shadow-red-600/30 transition-all duration-300 cursor-pointer active:scale-[0.98]"
                >
                  <span>Explore Products</span>
                  <div className="w-6 h-6 rounded-full bg-white/10 group-hover:bg-white/20 flex items-center justify-center transition-colors">
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bulk Wholesale Banner */}
        <div className="mt-14 p-8 rounded-3xl bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-800">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-red-400 uppercase tracking-wider mb-1">
              <PackageCheck className="w-4 h-4" />
              <span>Direct Commercial & Bulk Supplies</span>
            </div>
            {/* Matched Banner Title */}
            <h4 className="text-xl sm:text-2xl font-black text-white">
              Need Project Supply for an Ongoing Construction Site?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
              Get tiered bulk discounts on C.R.I. pumps, CPVC/UPVC pipelines, Leader valves, and PMC/PCMC approved chamber covers. Prompt on-site delivery across Pune.
            </p>
          </div>

          <button
            onClick={() => onOpenInquiry && onOpenInquiry('Turnkey Project / Construction Site Supply')}
            className="shrink-0 px-6 py-3.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-red-600/30 transition-all active:scale-95 cursor-pointer"
          >
            Submit BOQ / Tender Request
          </button>
        </div>

      </div>
    </section>
  );
}