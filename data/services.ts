export interface ServiceItem {
  slug: string;
  title: string;
  tag: string;
  subtitle: string;
  description: string;
  image: string;
  features: string[];
  keyBenefits: { title: string; desc: string }[];
  specifications: { label: string; value: string }[];
  coverage: string[];
}

export const servicesData: ServiceItem[] = [
  {
    slug: "regional-road-freight",
    title: "Regional road freight",
    tag: "UAE · OMAN · KSA",
    subtitle: "Connecting GCC commercial corridors with reliable FTL, LTL, and scheduled linehaul networks.",
    description:
      "Full Truck Load (FTL) and Less Than Truck Load (LTL) transportation across the GCC, daily scheduled consolidations, express collection, and last-mile distribution.",
    image: "/services/Regional road freight.png",
    features: [
      "Daily scheduled consolidations between UAE, Oman, and Saudi Arabia",
      "Full Truck Load (FTL) and flexible Less Than Truck Load (LTL) configurations",
      "Express cargo pickup and dedicated last-mile commercial delivery",
      "Temperature-controlled reefer fleet with continuous data logging",
      "Real-time GPS tracking and milestone automated reporting",
      "Pre-cleared border passage coordination at all GCC land border crossings",
    ],
    keyBenefits: [
      {
        title: "Guaranteed Transit Schedules",
        desc: "Regular daily departures keep trade lines predictable and prevent costly inventory stockouts.",
      },
      {
        title: "Cross-Border Expertise",
        desc: "Experienced border liaison officers streamline manifest clearances across Hatta, Al Wajajah, and Batha.",
      },
      {
        title: "Modern Fleet Safety",
        desc: "Equipped with state-of-the-art telematics, dual-temperature zones, and certified drivers.",
      },
    ],
    specifications: [
      { label: "Fleet Capacity", value: "1.5T to 40T Trailers" },
      { label: "Transit Times", value: "24-48 Hours Regional" },
      { label: "Tracking", value: "24/7 Satellite Telematics" },
      { label: "Security", value: "Tamper-evident seals & GPS geofencing" },
    ],
    coverage: ["United Arab Emirates", "Sultanate of Oman", "Kingdom of Saudi Arabia", "GCC Connectors"],
  },
  {
    slug: "air-sea-freight",
    title: "Air & sea freight",
    tag: "GLOBAL LANES & MULTIMODAL",
    subtitle: "Intercontinental ocean container transit and time-critical airfreight charter capacity.",
    description:
      "FCL & LCL ocean container shipping, air consolidations, express airfreight, and integrated multimodal solutions via air, sea, land, and cross-trade routes.",
    image: "/services/Air & sea freight.png",
    features: [
      "FCL (Full Container Load) and LCL (Less than Container Load) consolidation",
      "Scheduled air cargo chartering and priority airline space allocation",
      "Seamless Sea-Air multimodal combinations via Dubai logistics hub",
      "Cross-trade cargo movements with neutral third-party documentation",
      "Door-to-door marine cargo insurance and risk mitigation options",
      "Direct carrier contracts guaranteeing volume allocations during peak quarters",
    ],
    keyBenefits: [
      {
        title: "Optimized Cost-Speed Ratio",
        desc: "Blend air and sea transit options to balance delivery urgency against shipping budgets.",
      },
      {
        title: "Global Carrier Alliances",
        desc: "Longstanding relationships with premier shipping lines and cargo airlines worldwide.",
      },
      {
        title: "Single Point of Contact",
        desc: "Dedicated freight specialists coordinating end-to-end booking, transit, and customs.",
      },
    ],
    specifications: [
      { label: "Container Types", value: "Standard 20'/40', High Cube, Open Top, Reefer" },
      { label: "Air Services", value: "Express, Standard, Charter, Hand-carry" },
      { label: "Global Hubs", value: "Jebel Ali Port (JAFZA), Dubai International (DXB), DWC" },
      { label: "Documentation", value: "FIATA / IATA accredited Bills of Lading" },
    ],
    coverage: ["Asia-Pacific", "Europe & UK", "North & South America", "Middle East & Africa"],
  },
  {
    slug: "warehousing-distribution",
    title: "Warehousing & distribution",
    tag: "STORAGE · FULFILMENT · HAZMAT",
    subtitle: "High-throughput ambient and climate-controlled storage facilities with omnichannel fulfilment.",
    description:
      "Comprehensive warehousing across UAE, Oman, and KSA with order fulfilment, inventory management, and specialized HAZMAT dangerous goods handling.",
    image: "/services/Warehousing & distribution.png",
    features: [
      "Ambient, chilled (15°C - 25°C), and cold-chain (-20°C) storage environments",
      "Specialized chemical and HAZMAT hazardous materials storage facilities",
      "Automated Warehouse Management System (WMS) with ERP integration",
      "Pick, pack, kitting, barcode labelling, and reverse logistics handling",
      "Bonded and non-bonded storage options inside key free trade zones",
      "Scalable multi-client storage designed for seasonal surges",
    ],
    keyBenefits: [
      {
        title: "Live Inventory Transparency",
        desc: "Cloud-based portal allows real-time SKU tracking, reorder thresholds, and batch tracking.",
      },
      {
        title: "Certified HAZMAT Safety",
        desc: "Full civil defence and regulatory compliance with modern suppression systems.",
      },
      {
        title: "Strategic Geographical Hubs",
        desc: "Warehouses located within minutes of key industrial highways and major sea/airports.",
      },
    ],
    specifications: [
      { label: "Facility Footprint", value: "250,000+ sq. ft. across GCC" },
      { label: "Racking Types", value: "Selective, Drive-In, Cantilever, VNA" },
      { label: "WMS Architecture", value: "Real-time RF scanning, EDI/API integration" },
      { label: "Compliance", value: "ISO 9001, OHSAS 18001, Civil Defence HAZMAT" },
    ],
    coverage: ["Dubai Industrial City", "Jebel Ali Free Zone", "Muscat Logistics Hub", "Riyadh Logistics Park"],
  },
  {
    slug: "customs-clearance-compliance",
    title: "Customs clearance & compliance",
    tag: "AIRPORTS · SEAPORTS · FREE ZONES",
    subtitle: "Frictionless customs brokerage, duty exemptions, attestations, and regional compliance.",
    description:
      "Bonded customs clearance for export shipments from Dubai free zones, and full import/export handling across all major GCC international airports and seaports.",
    image: "/services/Customs clearance & compliance.png",
    features: [
      "Direct Mirsal II electronic declaration submission and clearance",
      "Bonded transit documents (Bill of Entry, Transit Declaration, Exit / Transfer)",
      "Ministry attestations (MOIAT, Dubai Municipality, ESMA, MOHAP)",
      "Duty exemption and temporary export/import administration",
      "Customs tariff classification (HS Code) consultancy and dispute advisory",
      "On-site brokerage teams stationed at ports, land borders, and air cargo terminals",
    ],
    keyBenefits: [
      {
        title: "Zero Transit Stoppages",
        desc: "Proactive document auditing ensures shipments pass inspections without detention penalties.",
      },
      {
        title: "Fiscal Optimization",
        desc: "Identify duty draw-back, free zone exemptions, and GCC preferential tariff schemes.",
      },
      {
        title: "Regulatory Assurance",
        desc: "Stay aligned with continuously evolving regional import regulations and trade laws.",
      },
    ],
    specifications: [
      { label: "Systems", value: "Dubai Trade, Mirsal II, FASAH (KSA), Bayan (Oman)" },
      { label: "Clearance Speed", value: "Same-day express release" },
      { label: "Bonds", value: "Approved bank and insurance customs bonds" },
      { label: "Audits", value: "Post-clearance compliance reviews" },
    ],
    coverage: ["Port Rashid & Jebel Ali", "DXB & DWC Air Terminals", "KSA Batha / Salwa", "Oman Hatta / Wajajah"],
  },
  {
    slug: "3pl-supply-chain-solutions",
    title: "3PL & supply chain solutions",
    tag: "END-TO-END CONTRACT LOGISTICS",
    subtitle: "Custom-engineered contract logistics, vendor consolidation, and omnichannel supply chain visibility.",
    description:
      "End-to-end third-party logistics solutions tailored to diverse industries, encompassing multi-tier warehousing, distribution, and inventory optimization.",
    image: "/services/3PL & supply chain solutions.png",
    features: [
      "Customized SLA-driven supply chain design for enterprise brands",
      "Vendor consolidation and cross-docking hubs for multi-supplier shipments",
      "Demand forecasting, buffer stock management, and purchase order tracking",
      "Value-added services: assembly, QA inspections, promotional repackaging",
      "B2B freight replenishment and direct-to-retail store distribution",
      "Integrated KPI dashboards covering OTIF, inventory turns, and landed costs",
    ],
    keyBenefits: [
      {
        title: "Capital Expenditure Reduction",
        desc: "Eliminate warehouse lease commitments and fleet acquisition liabilities through 3PL agility.",
      },
      {
        title: "Agile Scalability",
        desc: "Instantly expand operational capacity to match seasonal spikes and commercial growth.",
      },
      {
        title: "Continuous Process Improvement",
        desc: "Dedicated supply chain analysts continuously optimize routes, payloads, and packing.",
      },
    ],
    specifications: [
      { label: "Contract Models", value: "Dedicated, Shared, Hybrid 3PL" },
      { label: "Technology", value: "End-to-end Control Tower Visibility" },
      { label: "Integration", value: "SAP, Oracle, NetSuite, Shopify, WooCommerce" },
      { label: "SLA Benchmark", value: "99.4% On-Time In-Full (OTIF)" },
    ],
    coverage: ["GCC Regional Distribution", "Cross-Trade Middle East", "Free Zone Distribution Hubs"],
  },
  {
    slug: "logistics-supply-chain-consultancy",
    title: "Logistics & supply chain consultancy",
    tag: "ADVISORY & NETWORK OPTIMIZATION",
    subtitle: "Data-driven network audits, distribution modelling, and cost reduction strategies for regional shippers.",
    description:
      "Expert consultancy for Middle East shippers to develop cost-effective, practical logistics networks, reduce operational costs, and elevate supply chain efficiency.",
    image: "/services/Logistics & supply chain consultancy.png",
    features: [
      "Freight procurement strategy and carrier benchmark tenders",
      "Warehouse layout planning, capacity modelling, and slotting optimization",
      "Regional GCC distribution network design and hub site selection",
      "Logistics cost-to-serve analysis and carbon footprint reduction advisory",
      "Customs compliance health checks and tariff re-engineering audits",
      "Standard Operating Procedure (SOP) design and operational audit preparation",
    ],
    keyBenefits: [
      {
        title: "Direct Cost Reduction",
        desc: "Identify actionable savings across freight procurement, fuel surcharges, and inventory holding.",
      },
      {
        title: "Market Entry Acceleration",
        desc: "Rapidly establish compliant distribution channels into Saudi Arabia, Oman, and the UAE.",
      },
      {
        title: "Resilient Operations",
        desc: "Build contingency plans and diversify freight modes to safeguard against geopolitical trade shifts.",
      },
    ],
    specifications: [
      { label: "Engagements", value: "Diagnostic Audits, RFP Management, Turnkey Design" },
      { label: "Deliverables", value: "Cost-to-Serve Models, Route Optimization Plans, RFP Frameworks" },
      { label: "Target Industries", value: "Retail, FMCG, Industrial, Energy, Pharma" },
      { label: "Experience", value: "Over 20+ years Middle East domain leadership" },
    ],
    coverage: ["Middle East Regional Hubs", "GCC Free Zone Ecosystems", "Cross-Border Corridors"],
  },
  {
    slug: "equipment-rental-services",
    title: "Equipment rental services",
    tag: "FLEXIBLE INDUSTRIAL FLEET",
    subtitle: "Modern, heavy-duty material handling machinery, cranes, and logistics vehicles for flexible hire.",
    description:
      "Reliable and flexible equipment rental services across the UAE, delivering scalable operational support for logistics, industrial, construction, and project sites.",
    image: "/services/Equipment rental services.png",
    features: [
      "Counterbalance diesel, electric, and LPG forklifts (1.5T to 16T capacity)",
      "Reach trucks, electric stackers, and power pallet trucks for indoor warehousing",
      "Heavy mobile cranes, boom trucks, and specialized flatbed lowbed trailers",
      "Short-term, long-term, and seasonal lease structures with maintenance packages",
      "Third-party certified equipment with compliant safety documentation",
      "Experienced, licensed operators available on daily or contract basis",
    ],
    keyBenefits: [
      {
        title: "Zero Maintenance Downtime",
        desc: "Rapid mobile maintenance response team and replacement machinery guarantees.",
      },
      {
        title: "Certified Safety Compliance",
        desc: "All machinery carries valid ADNOC / EHS / Municipality inspection certifications.",
      },
      {
        title: "Flexible Financial Terms",
        desc: "Preserve operational working capital with tailor-made monthly or task-based agreements.",
      },
    ],
    specifications: [
      { label: "Lifting Capacity", value: "Up to 50 Metric Tonnes" },
      { label: "Mast Heights", value: "Up to 12.5 Meters Reach" },
      { label: "Maintenance", value: "24/7 Field Tech Support included" },
      { label: "Mobilization", value: "Fast dispatch across Abu Dhabi, Dubai, Sharjah" },
    ],
    coverage: ["Dubai & JAFZA", "Abu Dhabi & Musaffah", "Sharjah & Northern Emirates", "Industrial Ports"],
  },
  {
    slug: "project-logistics-heavy-haulage",
    title: "Project logistics & heavy haulage",
    tag: "ENERGY · INFRASTRUCTURE · OUT-OF-GAUGE",
    subtitle: "Turnkey movement of abnormal, super-heavy, and high-value cargo for energy and mega-projects.",
    description:
      "Comprehensive project logistics for Oil & Gas, Renewable Energy, and Industrial Projects, ensuring safe, timely transport of critical, oversized, and heavy-lift cargo.",
    image: "/services/Project logistics & heavy haulage.png",
    features: [
      "Route surveys, bridge capacity analysis, and police escort clearances",
      "Multi-axle hydraulic modular trailers (SPMT) for super-heavy abnormal loads",
      "Oil & gas offshore / onshore equipment logistics and rig mobilizations",
      "Renewable energy components (wind turbines, solar panels, substations)",
      "Heavy-lift barge chartering and roll-on / roll-off (Ro-Ro) operations",
      "Site marshalling, heavy-rigging, jacking, and skidding to final foundation",
    ],
    keyBenefits: [
      {
        title: "Flawless Engineering Rigor",
        desc: "Detailed method statements, CAD sweep-path calculations, and lifting simulations.",
      },
      {
        title: "Comprehensive Permits",
        desc: "End-to-end administration of RTA, police escorts, and utility line height clearances.",
      },
      {
        title: "Risk & HSSE Excellence",
        desc: "Stringent safety standards adhering to international oilfield and construction protocols.",
      },
    ],
    specifications: [
      { label: "Payload Capacity", value: "Up to 800+ Tonnes with Modular SPMT" },
      { label: "Engineering", value: "3D CAD Route & Swept Path Simulation" },
      { label: "Certifications", value: "ISO 14001, ISO 45001 HSSE Certified" },
      { label: "Key Sectors", value: "Oil & Gas, Power Generation, Desalination, Civil Infrastructure" },
    ],
    coverage: ["UAE Industrial Sites", "Oman Energy Fields", "Saudi Arabia Megaprojects", "Arabian Gulf Coastal Ports"],
  },
];

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return servicesData.find((s) => s.slug === slug);
}

