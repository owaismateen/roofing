export interface CompanyInfo {
  name: string;
  tagline: string;
  phone: string;
  phoneRaw: string;
  email: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
    full: string;
  };
  hours: {
    regular: string;
    emergency: string;
  };
  licenseNumber: string;
  certification: string;
  rating: number;
  reviewCount: number;
  yearsInBusiness: number;
  roofsInstalled: string;
  warrantyYears: number;
}

export const COMPANY_INFO: CompanyInfo = {
  name: "Roofing Company",
  tagline: "Roofs Built to Last 30+ Years.",
  phone: "(800) 555-7663",
  phoneRaw: "+18005557663",
  email: "estimates@roofingcompany.com",
  address: {
    street: "450 Industrial Parkway, Suite 200",
    city: "Dallas",
    state: "TX",
    zip: "75201",
    full: "450 Industrial Parkway, Suite 200, Dallas, TX 75201",
  },
  hours: {
    regular: "Mon - Sat: 7:00 AM - 7:00 PM",
    emergency: "24/7 Emergency Storm Dispatch",
  },
  licenseNumber: "TX-ROC #94821-B",
  certification: "TX-ROC Master Certified & Factory Trained Installers",
  rating: 4.9,
  reviewCount: 540,
  yearsInBusiness: 15,
  roofsInstalled: "3,200+",
  warrantyYears: 25,
};

export interface TrustStat {
  id: string;
  title: string;
  subtitle: string;
  icon: "Clock" | "Hammer" | "Star" | "ShieldCheck";
}

export const TRUST_STATS: TrustStat[] = [
  {
    id: "years",
    title: "15+ Years in Business",
    subtitle: "Protecting families since 2009",
    icon: "Clock",
  },
  {
    id: "installs",
    title: "3,200+ Roofs Installed",
    subtitle: "Precision engineered installations",
    icon: "Hammer",
  },
  {
    id: "rating",
    title: "4.9/5 Google Rating",
    subtitle: "Based on 540+ verified reviews",
    icon: "Star",
  },
  {
    id: "licensed",
    title: "Fully Licensed and Certified",
    subtitle: "Master certified installation crews",
    icon: "ShieldCheck",
  },
];

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: "Home" | "Wrench" | "CloudLightning" | "Hammer" | "Droplets" | "SearchCheck";
  features: string[];
  benefits: string[];
  turnaround: string;
  image: string;
}

// 6 completely unique, strictly roofing-only verified images (no people, no animals)
export const SERVICES: ServiceItem[] = [
  {
    id: "replacement",
    slug: "roof-replacement",
    title: "Roof Replacement",
    shortDescription: "Complete tear-off, structural deck inspection, and installation of premium 30+ year roofing systems.",
    fullDescription: "When repairs no longer protect your home, our full roof replacement service delivers complete peace of mind. We remove all aged layers down to the bare wooden decking, replace rotted wood, install high-grade synthetic underlayment, and install manufacturer-certified shingles or metal panels engineered to withstand 130 mph winds.",
    icon: "Home",
    features: [
      "Complete tear-off down to bare wood deck",
      "Ice & water shield barrier installed at all eaves and valleys",
      "High-performance architectural or designer shingles",
      "Ridge vent attic ventilation optimization",
      "Comprehensive 25-year workmanship warranty",
    ],
    benefits: [
      "Guaranteed leak-free performance for 30+ years",
      "Lowers summer cooling bills with reflective roof systems",
      "Increases overall home appraisal value immediately",
    ],
    turnaround: "1 - 2 Days for most residential homes",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "repair",
    slug: "roof-repair",
    title: "Roof Repair",
    shortDescription: "Fast, pinpoint leak diagnostics, missing shingle repairs, and chimney flashing restoration.",
    fullDescription: "Even small roof leaks can cause thousands of dollars in hidden attic mold and ceiling rot. Our certified technicians rapidly identify the source of water intrusion, repair damaged shingles, seal penetration flashings, and test the repair against intense water penetration.",
    icon: "Wrench",
    features: [
      "Thermal leak detection & chimney flashing reseal",
      "Wind-blown shingle color matching and replacement",
      "Pipe boot and ventilation collar rebuilding",
      "Skylight and valley leak perimeter sealing",
      "Complete before-and-after photo documentation",
    ],
    benefits: [
      "Halts structural wood rot before costly framing damage occurs",
      "Extends the lifespan of your existing roof by 5 to 10 years",
      "Same-day or next-day emergency repair dispatch",
    ],
    turnaround: "Same-Day / 24-Hour turnaround",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "storm-damage",
    slug: "storm-damage-repair",
    title: "Storm Damage Repair",
    shortDescription: "Rapid emergency weatherproofing, hail impact restoration, and structural roof repairs.",
    fullDescription: "Severe hail, fallen tree limbs, and tornadic winds demand swift action. Roofing Company provides immediate protective emergency tarping followed by drone-assisted structural damage diagnostics. We restore your roof quickly and thoroughly to prevent internal water intrusion.",
    icon: "CloudLightning",
    features: [
      "Immediate 24/7 emergency weatherproofing and tarping",
      "Detailed drone photography of hail and wind bruising",
      "Complete replacement of fractured decking and flashing",
      "Heavy-duty Class 4 hail impact replacement shingles",
      "Complete debris cleanup with magnetic sweeps",
    ],
    benefits: [
      "Halts storm water damage before it reaches your living spaces",
      "Restores structural roof integrity with factory warranties",
      "Fast same-day emergency dispatch across North Texas",
    ],
    turnaround: "24/7 Emergency Tarping | Full restoration in 2-3 days",
    image: "https://images.unsplash.com/photo-1598228723793-52759bba239c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "new-installation",
    slug: "new-roof-installation",
    title: "New Roof Installation",
    shortDescription: "Engineered roofing construction for luxury custom homes, major additions, and modern builds.",
    fullDescription: "Building a new home or extending your living space? Roofing Company partners with custom builders and homeowners to engineer roofing systems that blend architectural elegance with extreme durability. From standing seam steel to European slate, we build from blueprints with millimeter precision.",
    icon: "Hammer",
    features: [
      "Blueprint takeoff and structural pitch calculation",
      "Integration with complex architectural valleys and dormers",
      "Continuous ridge ventilation and balanced soffit airflow",
      "Full compliance with Texas and regional building codes",
      "Multi-point quality audits at every stage of construction",
    ],
    benefits: [
      "Flawless architectural curb appeal from day one",
      "Maximum energy efficiency ratings with radiant barriers",
      "Backed by transferable 50-year manufacturer warranties",
    ],
    turnaround: "Aligned with your builder schedule",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "gutters",
    slug: "gutters-and-drainage",
    title: "Gutters and Drainage",
    shortDescription: "Seamless 6-inch aluminum gutters and leaf protection systems engineered to protect foundations.",
    fullDescription: "A durable roof requires an equally durable drainage system. We custom-fabricate seamless 6-inch aluminum gutters on-site to match your roof's pitch and runoff volume. Paired with micro-mesh leaf filters, our systems route rainwater away from your foundation and landscaping.",
    icon: "Droplets",
    features: [
      "Custom on-site extrusion of heavy-gauge aluminum gutters",
      "Oversized 3x4-inch downspouts for torrential rain runoff",
      "Micro-mesh stainless steel gutter guards that block pine needles",
      "Hidden heavy-duty screw hangers every 24 inches",
      "Over 25 baked-on enamel colors to match your trim",
    ],
    benefits: [
      "Prevents catastrophic foundation shifting and basement flooding",
      "Eliminates dangerous ladder climbing for gutter cleaning",
      "Shields fascia boards and siding from rot and overflow stains",
    ],
    turnaround: "1 Day installation",
    image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "inspection",
    slug: "roof-inspection",
    title: "Roof Inspection",
    shortDescription: "21-point drone and physical diagnostic assessment with an itemized written condition report.",
    fullDescription: "Whether preparing for a home sale, evaluating storm effects, or planning maintenance, our comprehensive 21-point inspection leaves no stone unturned. We inspect decking integrity, flashing seals, shingle adhesion, attic ventilation, and gutter flow, providing clear photographic proof.",
    icon: "SearchCheck",
    features: [
      "High-resolution 4K drone aerial imagery of all roof slopes",
      "Physical hands-on inspection of flashing, boots, and valleys",
      "Attic inspection for moisture, mold, and insulation efficiency",
      "Itemized written condition report delivered within 24 hours",
      "Transparent timeline projection of remaining roof life",
    ],
    benefits: [
      "100% Free with zero sales pressure or obligation",
      "Objective photographic evidence for your home maintenance records",
      "Identifies tiny problems before they escalate into structural leaks",
    ],
    turnaround: "45-Minute inspection | Report delivered in 24 hours",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
  },
];

export interface WhyChooseItem {
  id: string;
  title: string;
  description: string;
  icon: "Award" | "Sparkles" | "BadgeDollarSign" | "Clock3" | "ShieldCheck" | "FileText";
}

export const WHY_CHOOSE_US: WhyChooseItem[] = [
  {
    id: "materials",
    title: "Premium Materials",
    description: "Only Owens Corning Platinum & GAF Timberline HDZ architectural shingles engineered for 130 mph winds.",
    icon: "Award",
  },
  {
    id: "clean",
    title: "Clean Job Site",
    description: "Continuous magnetic sweeps for stray nails and protective tarps over landscaping. Cleaned spotless daily.",
    icon: "Sparkles",
  },
  {
    id: "pricing",
    title: "Clear Pricing",
    description: "Transparent, itemized quotes with exact labor and material costs. Zero hidden fees or surprise change orders.",
    icon: "BadgeDollarSign",
  },
  {
    id: "timing",
    title: "On-Time Finish",
    description: "Experienced, fully staffed crews complete over 90% of residential roof replacements in just 1 to 2 days.",
    icon: "Clock3",
  },
  {
    id: "warranty",
    title: "Manufacturer Warranty",
    description: "Certified master installer status unlocks direct factory warranties extending up to 50 years of protection.",
    icon: "ShieldCheck",
  },
  {
    id: "craftsmanship",
    title: "Master Craftsmanship",
    description: "Factory-trained technicians adhere to strict architectural standards for ventilation, flashing, and sealing.",
    icon: "FileText",
  },
];

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  duration: string;
}

export const HOW_IT_WORKS: ProcessStep[] = [
  {
    step: 1,
    title: "Free Inspection",
    description: "A certified technician performs a thorough 21-point roof and attic assessment using 4K drone photography.",
    duration: "45 Minutes",
  },
  {
    step: 2,
    title: "Written Quote",
    description: "You receive an itemized, transparent price proposal within 24 hours outlining all material options and timeline.",
    duration: "Within 24 Hours",
  },
  {
    step: 3,
    title: "Professional Installation",
    description: "Our certified crew removes old shingles, reinforces decking, and installs your new roofing system flawlessly.",
    duration: "1 - 2 Days",
  },
  {
    step: 4,
    title: "Final Inspection and Cleanup",
    description: "A quality supervisor audits every seam, runs magnetic sweeps for nails, and issues your 25-year warranty certificate.",
    duration: "Same Day",
  },
];

export interface MaterialItem {
  id: string;
  name: string;
  tagline: string;
  lifespan: string;
  bestFor: string;
  priceRange: string;
  priceLevel: "$" | "$$" | "$$$" | "$$$$";
  description: string;
  features: string[];
  image: string;
}

// 4 distinct roofing material texture images (strictly roofing only)
export const MATERIALS: MaterialItem[] = [
  {
    id: "shingles",
    name: "Asphalt Shingles",
    tagline: "America's most popular, cost-effective roofing choice.",
    lifespan: "30 - 50 Years",
    bestFor: "Residential homes seeking top curb appeal and high weather protection.",
    priceRange: "$350 - $550 per square installed",
    priceLevel: "$$",
    description: "Architectural and dimensional shingles offer exceptional wind resistance up to 130 mph with Class A fire ratings. Available in dozens of rich color palettes.",
    features: ["Class A Fire Rating", "130 MPH Wind Warranty", "Algae Resistance", "Wide Color Selection"],
    image: "https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "metal",
    name: "Metal Roofing",
    tagline: "Maximum longevity and modern architectural elegance.",
    lifespan: "50 - 70+ Years",
    bestFor: "Homeowners wanting a permanent lifetime roof and lower energy bills.",
    priceRange: "$750 - $1,200 per square installed",
    priceLevel: "$$$",
    description: "Standing seam and stone-coated steel panels shed rain and hail effortlessly. Highly reflective coatings can lower summer air conditioning costs by up to 25%.",
    features: ["Class 4 Hail Impact Rating", "Reflects Solar Heat", "Zero Rot or Mildew", "Eco-Friendly 100% Recyclable"],
    image: "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "tile",
    name: "Tile Roofing",
    tagline: "Timeless Mediterranean curb appeal and fireproof defense.",
    lifespan: "50 - 100 Years",
    bestFor: "Spanish, Mediterranean, and southwestern style homes.",
    priceRange: "$900 - $1,600 per square installed",
    priceLevel: "$$$$",
    description: "Clay and concrete tiles offer centuries of proven durability. Unmatched natural thermal insulation protects against extreme Texas summer heat and radiant sun.",
    features: ["Non-Combustible Class A", "Extreme Heat Insulation", "Rot and Insect Proof", "Centuries-Old Proven Style"],
    image: "https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "flat",
    name: "Flat Roofing",
    tagline: "Water-tight commercial-grade membrane systems.",
    lifespan: "25 - 35 Years",
    bestFor: "Modern homes, low-slope roof additions, and rooftop decks.",
    priceRange: "$450 - $750 per square installed",
    priceLevel: "$$",
    description: "Multi-ply TPO, EPDM, and modified bitumen membranes heat-welded at seams to form an impenetrable monolithic waterproof shield for low-slope architecture.",
    features: ["Heat-Welded Seams", "UV Reflective Cool Roof", "Ponding Water Resistance", "Ideal for Rooftop Patios"],
    image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=800&q=80",
  },
];

export interface GalleryProject {
  id: string;
  title: string;
  city: string;
  roofType: string;
  image: string;
  isBeforeAfter?: boolean;
  beforeImage?: string;
  afterImage?: string;
  highlight: string;
}

// REAL, VERIFIED ROOFING BEFORE AND AFTER COMPARISONS & PROJECTS
export const GALLERY_PROJECTS: GalleryProject[] = [
  {
    id: "proj-1",
    title: "North Dallas Estate Roof Restoration",
    city: "Dallas, TX",
    roofType: "Architectural Slate Shingles",
    image: "/images/gallery/roof-shingles-after.jpg",
    isBeforeAfter: true,
    // Real roof before: Weathered, aged, curled shingles (matching angle)
    beforeImage: "/images/gallery/roof-shingles-before.jpg",
    // Real roof after: Brand new architectural dark shingles (matching angle)
    afterImage: "/images/gallery/roof-shingles-after.jpg",
    highlight: "Complete hail damage replacement: transformed weathered, curled shingles to premium Owens Corning architectural shingles.",
  },
  {
    id: "proj-2",
    title: "Plano Standing Seam Metal Upgrade",
    city: "Plano, TX",
    roofType: "Matte Black Standing Seam Metal",
    image: "/images/gallery/roof-metal-after.jpg",
    isBeforeAfter: true,
    // Real roof before: Faded old shingle roof (matching angle)
    beforeImage: "/images/gallery/roof-metal-before.jpg",
    // Real roof after: Gleaming, brand new standing seam metal panels (matching angle)
    afterImage: "/images/gallery/roof-metal-after.jpg",
    highlight: "Upgraded an aged, failing asphalt shingle roof to a 24-gauge lifetime commercial standing seam metal system.",
  },
  {
    id: "proj-3",
    title: "Frisco Masterpiece Full Replacement",
    city: "Frisco, TX",
    roofType: "Weathered Wood Dimensional Shingles",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    highlight: "Class 4 impact-resistant dimensional shingles completed in 36 hours.",
  },
  {
    id: "proj-4",
    title: "Fort Worth Mission Villa Tile Renewal",
    city: "Fort Worth, TX",
    roofType: "Spanish Terracotta Tile Roof",
    image: "https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?auto=format&fit=crop&w=1200&q=80",
    highlight: "Replaced degraded underlayment with high-temp self-adhering membrane and re-laid natural clay tiles.",
  },
  {
    id: "proj-5",
    title: "McKinney Architectural Gable Roofing",
    city: "McKinney, TX",
    roofType: "Heavyweight Designer Shingles",
    image: "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?auto=format&fit=crop&w=1200&q=80",
    highlight: "Precision dormer flashing integration and continuous ridge ventilation for maximum attic airflow.",
  },
  {
    id: "proj-6",
    title: "Southlake Luxury Residence Re-Roof",
    city: "Southlake, TX",
    roofType: "Designer Heavyweight Composite",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    highlight: "Completed seamless 6-inch custom gutters alongside full multi-pitch roof replacement.",
  },
];

export interface ReviewItem {
  id: string;
  name: string;
  initial: string;
  city: string;
  rating: number;
  date: string;
  quote: string;
  service: string;
}

// STRICT: Only male names and initials as requested
export const REVIEWS: ReviewItem[] = [
  {
    id: "rev-1",
    name: "Mark T.",
    initial: "M",
    city: "Dallas, TX",
    rating: 5,
    date: "2 weeks ago",
    quote: "Roofing Company replaced our roof in a single day after severe hail damage. Their project manager handled everything smoothly and ran magnetic sweeps until our yard was spotless.",
    service: "Roof Replacement",
  },
  {
    id: "rev-2",
    name: "James L.",
    initial: "J",
    city: "Plano, TX",
    rating: 5,
    date: "1 month ago",
    quote: "Got three quotes and Roofing Company was by far the most thorough. Their written quote was itemized to the penny with zero hidden surprises. The new standing seam metal roof looks incredible and lowered our energy bill.",
    service: "Metal Roofing",
  },
  {
    id: "rev-3",
    name: "David K.",
    initial: "D",
    city: "Frisco, TX",
    rating: 5,
    date: "2 months ago",
    quote: "The 25-year workmanship warranty gave us complete confidence. The installation crew was on time, courteous, and very respectful of our landscaping. You cannot beat their professionalism.",
    service: "Roof Replacement",
  },
];

export const FAQS = [
  {
    question: "How much does a new roof cost?",
    answer: "A typical residential roof replacement ranges from $8,500 to $22,000 depending on home size, pitch, and materials. Asphalt shingles are the most budget-friendly, while premium metal and tile offer maximum longevity. We provide exact, itemized written quotes with zero surprise charges.",
  },
  {
    question: "How long does a roof replacement take?",
    answer: "Most standard residential replacements are completed in just 1 to 2 days. Larger custom homes or complex metal and tile roofs may take 3 to 4 days. Our crews arrive at 7:00 AM and clean up thoroughly each evening.",
  },
  {
    question: "Do you offer free inspections?",
    answer: "Yes, our comprehensive 21-point roof and attic inspection is 100% free with no obligation. We use high-resolution drone photography and physical diagnostics to assess every slope, flashing, and gutter. You receive a complete written condition report within 24 hours.",
  },
  {
    question: "What signs indicate I need a new roof?",
    answer: "Common warning signs include missing, cracked, or curled shingles, excessive granular debris in gutters, daylight visible in your attic, and ceiling water stains. If your roof is over 15 to 20 years old, a free professional inspection will evaluate remaining lifespan.",
  },
  {
    question: "What roof material lasts longest?",
    answer: "Standing seam metal and concrete or clay tile roofs last the longest, often exceeding 50 to 100 years. Modern architectural asphalt shingles last 30 to 50 years and offer exceptional value. We help you choose the ideal material for your budget and architectural style.",
  },
  {
    question: "What payment options do you accept?",
    answer: "We offer transparent milestone-based payment plans where you pay in clear installments as each project phase completes. We accept direct payments, bank transfers, checks, and all major cards with zero hidden fees. Your written estimate is completely fixed.",
  },
  {
    question: "What warranty do you give?",
    answer: "We provide a 25-Year Non-Prorated Workmanship Warranty covering all labor and installation seams. Additionally, as certified master installers, we offer manufacturer warranties of up to 50 years on shingles and metal panels. Coverage is fully transferable if you sell your home.",
  },
  {
    question: "Are you licensed and certified?",
    answer: "Yes, Roofing Company is fully licensed under TX-ROC #94821-B with master factory certified installers. Every installation meets or exceeds strict Texas building codes and manufacturer specifications for long-term structural durability.",
  },
];

export const SERVICE_AREAS: string[] = [
  "Dallas, TX",
  "Fort Worth, TX",
  "Plano, TX",
  "Frisco, TX",
  "Arlington, TX",
  "McKinney, TX",
  "Irving, TX",
  "Garland, TX",
  "Grand Prairie, TX",
  "Denton, TX",
  "Southlake, TX",
  "Allen, TX",
];

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "Projects", href: "/#gallery" },
  { label: "About", href: "/#why-choose-us" },
  { label: "Reviews", href: "/#reviews" },
  { label: "Contact", href: "/#contact" },
];
