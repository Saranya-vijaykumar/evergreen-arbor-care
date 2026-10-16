// Services Knowledge Base & Detailed Specifications
export const SERVICES_DATA = {
  'crown-reduction': {
    id: 'crown-reduction',
    title: 'Crown Reduction & Canopy Thinning',
    category: 'Pruning & Care',
    categorySlug: 'pruning',
    tier: '$$ Moderate Tier',
    priceEstimate: '$450 - $1,200',
    basePrice: 450,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAWYgwX53N30LF4NX36bLPwMqTgcxkSS02lsoL3tZMlKIbf0hHnJg509ezoajtSjUM-MKStmhlRUd_IApDf7lF9eOjxkIKu1HjKFIf6KIXf6qrFCJACD7zo8hU5bNBzhtefCz-o1HNcqW_BOKjNuXnLogxVMo8NCxJaVPoBiXrVlVbSp4ssOoyvxBcjHoFXuSPuhxxlJ20-aTbUGThvRIfKXX1dN-p_fWKTuZSQId9B-HGy1cdTjCxq',
    summary: 'Selective, bio-mechanical branch removal designed to reduce canopy sail area, alleviate mechanical load stress, and encourage healthy inner foliage growth while preserving tree architecture.',
    description: `Crown reduction is an advanced arboricultural practice that decreases the overall height and spread of a mature tree's canopy while maintaining its natural form and biomechanical integrity. Unlike topping—which permanently destroys tree structure and promotes hazardous decay—ANSI A300 certified crown reduction cuts branches back to viable lateral leader limbs capable of assuming terminal apical dominance.

By selectively thinning dense inner foliage and redistributing structural weight, our certified ISA arborists drastically minimize wind-sail resistance during severe gale events, lowering the risk of limb blow-out and structural stem failure near residential roofs and power infrastructure.`,
    scopeOfWork: [
      'Comprehensive ANSI A300 & ISA crown architecture inspection prior to cutting',
      'Selective deadwood, diseased, and crossing branch extraction up to 3" diameter',
      'Canopy sail reduction targeting up to 20-25% volume without inducing epicormic shock',
      'Structural weight alleviation on heavy overextended lateral limbs',
      'Full low-impact ground cleanup, industrial chipping, and organic wood mulch processing'
    ],
    methodology: [
      { step: '1', title: 'Biomechanical Canopy Audit', detail: 'Our arborist climbs or inspects via aerial lift to assess branch bark ridges, union angles, and existing decay.' },
      { step: '2', title: 'Targeted Drop-Crotch Pruning', detail: 'Cuts are executed just outside the branch collar to allow rapid compartmentalization (CODIT) without leaving decaying stubs.' },
      { step: '3', title: 'Sail Area & Airflow Optimization', detail: 'Excessive foliage clusters are thinned evenly through the middle third of the crown to let high winds pass smoothly.' },
      { step: '4', title: 'Ground Sanitization & Chipping', detail: 'All wood debris is fed through commercial chippers and returned to you as premium mulch or hauled away cleanly.' }
    ],
    equipment: [
      { name: 'Stihl MS 201T Arborist Top-Handle Chainsaws', spec: 'Ultra-lightweight surgical cutting saws with bio-degradable bar oil' },
      { name: 'Samson Velocity 11mm Static Climbing Lines', spec: 'Low-stretch kernmantle rigging line rated to 6,000 lbs tensile strength' },
      { name: 'Bandit 15XP 15-inch Disc Brush Chipper', spec: 'High-speed clean processing with hydraulic feed rollers' }
    ],
    faqs: [
      { q: 'How often should crown reduction be performed?', a: 'For mature hardwoods (Oaks, Maples, Pecans), pruning is typically recommended every 3 to 5 years. Young rapid-growth trees may benefit from structure training every 2 years.' },
      { q: 'Will thinning my tree harm its health in summer?', a: 'We adhere strictly to seasonal guidelines. Heavy reductions are best performed in late autumn or dormant winter; light deadwood thinning is safe year-round.' },
      { q: 'Is crown reduction different from tree topping?', a: 'Yes! Tree topping is destructive and creates weak decay-prone water sprouts. Proper reduction preserves the branch bark ridge and keeps the tree structurally sound.' }
    ]
  },

  'tree-removal': {
    id: 'tree-removal',
    title: 'Emergency & Hazard Tree Removal',
    category: 'Removal & Safety',
    categorySlug: 'removal',
    tier: '$$$ Complex Tier',
    priceEstimate: '$800 - $3,500+',
    basePrice: 950,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDcQoko-mDZKVsMyfKTsRoZ5PVLWjLIjZC6yjb5QDd0jeCQA6wxsoskdEmH07ZS6xrom5CjCakHfsdzgKkdPuw3o5skAWC82Fli6LyDK6LXXRqlG9_ZKL1JuAxEL-YuPuSR92WIR4egjFlg3fklxqBVVa5_FZSC3DkXEBgxac7ve69FQM2zmszc_AykWlo6b3aNryF_6dBjYC534oZ6AKqvscXMI445qpDYbSuM5rwcCQVQicUty4Eb',
    summary: 'High-risk surgical dismantling and extraction of storm-shattered, structurally hazardous, or root-compromised trees utilizing 60-ton cranes and positive-rigging techniques.',
    description: `When a mature tree suffers critical trunk shear, root plate uplift, or internal rot near structures, standard felling is out of the question. Evergreen Arbor Care specializes in high-consequence sectional dismantling in tight residential yards and commercial campuses.

Our crews deploy 60-ton articulating cranes and high-tensile friction brake systems. Each massive trunk section is strapped, tensioned, cut, and floated horizontally across rooftops and fences with zero impact to lawns, landscaping, or adjacent properties.`,
    scopeOfWork: [
      '24/7 Rapid emergency response for storm-damaged and fallen trees',
      'Structural load-rating analysis and rigging friction control calculations',
      'Crane-assisted aerial hoisting over obstacles and structures',
      'Sectional piecemeal roping with negative & positive blocking systems',
      'Trunk bucking into manageable lengths or full timber recycling transport'
    ],
    methodology: [
      { step: '1', title: 'Drop Zone & Hazard Clearance', detail: 'Establish exclusionary perimeter, flag overhead utility lines, and map out crane outrigger positioning mats.' },
      { step: '2', title: 'Top-Down Rigging & Sectioning', detail: 'Certified climbers ascend using SRT (Single Rope Technique) and install synthetic slings directly to crane hoist cables.' },
      { step: '3', title: 'Zero-Impact Aerial Extractions', detail: 'Timber sections up to 5,000 lbs are severed cleanly and hoisted vertically into the air away from all nearby buildings.' },
      { step: '4', title: 'Log Hauling & Clean Raking', detail: 'Bole wood is processed through loaders; all twigs, needles, and bark dust are vacuumed and power-raked.' }
    ],
    equipment: [
      { name: 'Altec 60-Ton Hydraulic Telescopic Boom Crane', spec: '127 ft tip height, remote camera monitoring, zero lawn imprint pads' },
      { name: 'GRCS (Good Rigging Control System) Winch', spec: 'Mechanical advantage friction lowering device with 3,000 lb working load' },
      { name: 'Stihl MS 661 Magnum 91cc Chainsaw', spec: 'Heavy timber sectional felling saw with 36" carbide guide bar' }
    ],
    faqs: [
      { q: 'Do you carry insurance for damage during tree removal?', a: 'Yes. We maintain a $5,000,000 commercial liability policy and full statutory worker compensation coverage on every crew member.' },
      { q: 'Can you work around overhead electrical power lines?', a: 'Yes, our teams are EHAP (Electrical Hazards Awareness Program) certified to work in close proximity to high-voltage utility lines.' },
      { q: 'What happens to the heavy timber?', a: 'We can leave firewood rounds on-site, mill high-grade hardwood into lumber, or recycle 100% of the biomass off-site.' }
    ]
  },

  'deep-root-fertilization': {
    id: 'deep-root-fertilization',
    title: 'Deep Root Fertilization & Pneumatic Aeration',
    category: 'Health & Soil',
    categorySlug: 'health',
    tier: '$ Preventive Tier',
    priceEstimate: '$300 - $750',
    basePrice: 350,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA3_1x38OSQQgN8Qgv6ceirs9wrSql78UulE18k-hznDIR042GMNlqJqupbZ0v1XT7gE1OGGIesoa328f_xC_RSVCKN_o6uXb9N-0gnzv0Aio3p8FJG28BRQC1pEZrHmH9u1wzEAiODdBPLiSDmZRfFTjp7waBw3vi4snVf3o6h6Ouxr-sZhUorDmCN4AgELex062no6IsoFScqFLeMVAlnlOpZVKKS8XYtd8xyNvQuO0lZfmHijzhZ',
    summary: 'Sub-surface high-pressure injection of organic mycorrhizal fungi, bio-stimulants, and micro-nutrients directly into the active root feeder zone under compacted soil.',
    description: `Suburban and urban soils are frequently compacted, depleted of organic nutrients, and suffocated under heavy turfgrass. Surface fertilizing only feeds shallow lawn roots while doing virtually nothing for large trees whose feeder roots lie 6 to 12 inches beneath the surface.

Our deep-root micro-injection system uses stainless steel injection probes pressurized at 150-200 PSI. We inject a proprietary slow-release blend of chelated iron, humic acids, endo- and ecto-mycorrhizal spores, and macro-nutrients directly into the radial root plate, decompacting soil channels and restoring root vitality.`,
    scopeOfWork: [
      'Comprehensive on-site soil pH and compaction penetrometer testing',
      'Grid injection pattern spanning the entire drip-line canopy footprint',
      'Custom slow-release bio-stimulant & mycorrhizal cocktail formulation',
      'Pneumatic decompaction creating vital oxygen & moisture fissures',
      'Long-term foliage chlorosis and root density follow-up tracking'
    ],
    methodology: [
      { step: '1', title: 'Soil Compaction Profiling', detail: 'Using electronic penetrometers, we measure bulk density and identify hardpan layers restricting root respiration.' },
      { step: '2', title: 'Custom Organic Formulation', detail: 'We blend low-nitrogen, high-phosphite formulas fortified with sea kelp extract, humates, and microbial inoculants.' },
      { step: '3', title: 'Pressurized Grid Injections', detail: 'Probes penetrate 8 to 12 inches deep in a concentric 3-foot grid, fracturing compacted clay without root tearing.' },
      { step: '4', title: 'Organic Mulch Ring Application', detail: 'We establish a 3-inch composted wood mulch buffer to retain subsoil moisture and moderate summer temperature swings.' }
    ],
    equipment: [
      { name: 'FMC 300-Gallon High-Pressure Piston Spray Rig', spec: 'Delivers precise 180 PSI sub-surface injection pulses' },
      { name: 'AirSpade 2000 Supersonic Soil Tool', spec: 'Mach 2 airflow excavator for safe root exploration and decompaction' },
      { name: 'FieldScout SC 900 Soil Compaction Meter', spec: 'Digital cone penetrometer logging resistance depth curves' }
    ],
    faqs: [
      { q: 'What is the best time of year for deep root fertilization?', a: 'Spring (as root growth starts) and early Autumn (when trees store carbohydrate reserves before winter dormancy) are the two peak application windows.' },
      { q: 'Will this make my lawn turn brown or kill nearby plants?', a: 'No, our organic suspensions are non-burning and actually nourish adjacent shrubs and grass roots as soil biology improves.' },
      { q: 'How quickly will I see improvement in foliage vigor?', a: 'Bud development and canopy leaf density noticeably improve within the next growth flush, with full benefits compounding over 12-24 months.' }
    ]
  },

  'stump-grinding': {
    id: 'stump-grinding',
    title: 'Precision Stump Grinding & Sub-Surface Milling',
    category: 'Removal & Safety',
    categorySlug: 'removal',
    tier: '$ Standard Tier',
    priceEstimate: '$200 - $600',
    basePrice: 250,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDaThnyifLrdKizoed4OaBfwVbU-Sz9Y5kh_sEmbU3BNoihm_yoD_vrL5b-hW3wtb-vVF6qpJcnTI2OZCL4RIdwuVQEMqb3WK8TRGXgHn9fzJNL96kdl4i47LQ6Bv0gaxXY74u4h7QF-jrIHvWezZS9gk2U8MOSZ1P0JjyCgjp28pqJH90JEQLZUhRWmRl2GHzuZyDPbTNprSyoO3-TBzt_MAtDN8iEkhiDub3dgMrMLyb8zHdZdaDL',
    summary: 'High-torque carbide tooth milling down to 12-16 inches below grade, eliminating trip hazards, carpenter ant harborage, and root sprouting.',
    description: `Leaving old tree stumps in your lawn creates trip hazards, mower damage, and a breeding ground for subterranean termites, carpenter ants, and honey fungus (Armillaria). Our self-propelled commercial stump grinders access backyards through standard 36-inch gates and rapidly grind tree bases and surface roots to mulch.

We grind down 12 to 16 inches below the turf line, severing root flares and backfilling the excavation cavity with rich composted mulch, perfectly ready for turf re-seeding or immediate tree replacement.`,
    scopeOfWork: [
      'Call Before You Dig 811 utility clearance confirmation',
      'Milling of trunk core down 12-16 inches below existing soil surface',
      'Radial grinding of exposed surface lateral roots spreading through lawn',
      'Protective ballistic curtain shielding surrounding windows and vehicles',
      'Hole backfill, leveling, and topsoil enrichment options'
    ],
    methodology: [
      { step: '1', title: 'Sub-surface Utility Sweep', detail: 'Verify gas, water, and telecom lines are clear before machinery engages soil.' },
      { step: '2', title: 'Ballistic Debris Shielding', detail: 'Erect steel mesh safety barriers around the perimeter to catch rock chips and sawdust.' },
      { step: '3', title: 'Tungsten-Carbide Radial Sweeps', detail: 'Our Vermeer track grinder makes horizontal cutting passes, obliterating the core and taproot.' },
      { step: '4', title: 'Raking & Turf Bed Preparation', detail: 'Mulch is packed into the depression and graded flush with the surrounding sod line.' }
    ],
    equipment: [
      { name: 'Vermeer SC382 High-Power Track Stump Cutter', spec: '35 HP engine with 34.5" narrow stance fitting through standard residential gates' },
      { name: 'Yellow Jacket Carbide Cutting Wheel System', spec: 'Reversible tungsten teeth for clean subterranean wood mastication' },
      { name: 'Safety Blast Screens & Turf Protection Mats', spec: 'Eliminates lawn rutting and protects property facades' }
    ],
    faqs: [
      { q: 'Can I plant a new tree in the exact same spot?', a: 'Yes! When requested, we perform extended depth grinding to 18-20 inches and excavate the central woody grindings so fresh organic loam can be backfilled for new planting.' },
      { q: 'Will the grinder tear up my lawn?', a: 'No. Our track-mounted machine distributes ground weight to under 4 PSI, and we lay down heavy-duty composite mats across wet turf.' }
    ]
  },

  'commercial-fleet': {
    id: 'commercial-fleet',
    title: 'Commercial Fleet & Multi-Property Arbor Care',
    category: 'Commercial Grounds',
    categorySlug: 'commercial',
    tier: '$$$ Contract Tier',
    priceEstimate: 'Custom SLA Rates',
    basePrice: 1500,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDDoQgaTaC4c-CcoW0M0CZCm8PoB2Gj3prcwar2npLUFl7tFMXjQcoDv_AlBSL738TI17L5aXU4k1YoauxqYZIrxdXQtH6G_Za_wOA2JK0nOa-9O_3KoP0Qpvw0gFitlb3u-RSFXEio7EuhFSwPnM3jgmnpdlHJXdZ017sLLpHR5Oi8tJRxJYnDN_bDiqawp8H8NVLDhOYYphl8kOF4DS6Ck_evOnW2BGcCI0toMZzbC6d53nP6FOor',
    summary: 'Turnkey urban forestry contracts for corporate campuses, HOA communities, municipal parks, and retail centers with guaranteed emergency response times.',
    description: `Commercial property managers and municipalities face serious legal liability from unmaintained trees falling across parking stalls, walkways, and entrance roads. Evergreen Arbor Care provides multi-year urban canopy management plans, digital GIS inventory mapping, and dedicated emergency fleet dispatch.

We ensure compliance with local building codes, fire department clearance requirements (14 ft roadway clearance), and ADA visibility standards, while keeping your property immaculate and hazard-free.`,
    scopeOfWork: [
      'Multi-property tree inventory with GPS tagging and risk rating',
      'Scheduled clearance pruning for semi-trucks, emergency vehicles, and building facades',
      'Priority storm response SLA with guaranteed on-site mobilization within 2 hours',
      'Liability mitigation documentation & certified arborist risk reports for insurers',
      'Consolidated monthly billing with detailed before/after photographic documentation'
    ],
    methodology: [
      { step: '1', title: 'Campus Digital GIS Survey', detail: 'Every canopy tree is tagged with a barcode, mapped via satellite GPS, and assigned a health score.' },
      { step: '2', title: 'Prioritized Risk Remediation', detail: 'Hazardous Class 4 and 5 limbs threatening pedestrian pathways or rooftops are mitigated first.' },
      { step: '3', title: 'Cyclical Pruning Cycles', detail: 'Campuses are partitioned into zones for structured bi-annual canopy grooming and root health maintenance.' },
      { step: '4', title: 'Storm Incident Command', detail: 'During severe weather, dedicated heavy equipment crews stand by on active standby for contract clients.' }
    ],
    equipment: [
      { name: 'Freightliner M2 Grapple Saw Crane Truck', spec: 'Enables single-operator cutting and loading without climber risk' },
      { name: 'Morbark 1800 Heavy-Duty Commercial Drum Chipper', spec: 'Processes whole trees up to 20 inches in diameter' },
      { name: 'ArborSafe Enterprise GIS Fleet Dispatch Dashboard', spec: 'Real-time work order tracking and arborist inspection logs' }
    ],
    faqs: [
      { q: 'Do you offer emergency storm response guarantees?', a: 'Yes. Commercial SLA contract holders receive guaranteed 2-hour emergency dispatch priority during regional wind, snow, and thunderstorm events.' },
      { q: 'Can you work during off-peak hours to avoid parking lot disruptions?', a: 'Absolutely. We routinely schedule commercial pruning on weekends or early morning hours before corporate offices and retail centers open.' },
      { q: 'Can you provide multi-year tree inventory and capital expense budgeting?', a: 'Yes. We deliver digital GIS-tagged tree canopy inventories with condition ratings and 3-to-5 year rolling capital budget projections for board review and HOA reserve studies.' }
    ]
  },

  'health-assessment': {
    id: 'health-assessment',
    title: 'Certified ISA Arborist Health Assessment',
    category: 'Health & Soil',
    categorySlug: 'health',
    tier: '$ Diagnostic Tier',
    priceEstimate: '$150 - $350',
    basePrice: 200,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC3n4zUzbSCdJ0ExwUeafU9by2tIr2FTruwDrePF68ywfL9ySBi561pieRG4_ZSKqg2_0ep9bcTz4Hm0eeKvhc4bpDB4EWH9KcXMDzjPEY0_H6ZmwqJJjS254dst1kjIPhc6Snymw8FYv_ik188nZCAhWMlHZeKxDkmcWPHIjx7NgNi3KoKSiRankFll646ynLOIlBihZVd59Vok5bzX7zbq7ufX48RhlIccS4W2MCeBwdLOo5tyzQN',
    summary: 'Comprehensive scientific evaluation of specimen trees covering fungal pathogens, structural defects, insect infestations, and physiological stress factors.',
    description: `Before deciding whether to cut down or prune a heritage tree, an unbiased scientific diagnostic assessment is essential. Our Board-Certified Master Arborists (BCMA) utilize visual tree assessment (VTA) protocols, sounding mallets, resistance drilling, and soil chemistry assays to deliver actionable preservation plans.

Whether you need a formal tree condition report for municipal construction permits, insurance documentation after storm damage, or a diagnosis of mysterious leaf yellowing, our assessments deliver precision and peace of mind.`,
    scopeOfWork: [
      'Comprehensive Visual Tree Assessment (VTA) from root flare to crown tip',
      'Identification of active wood-decaying fungal conks and vascular wilts',
      'Foliage sampling for bacterial scorch, anthracnose, and nutrient deficiencies',
      'Root collar excavation inspection for girdling roots and trunk rot',
      'Official signed ISA Arborist Inspection Report accepted by city permitting boards'
    ],
    methodology: [
      { step: '1', title: 'Visual & Acoustic Sounding', detail: 'Systematic examination of trunk taper, bark fissures, and sounding mallet analysis for internal cavities.' },
      { step: '2', title: 'Crown Vigor & Foliage Sampling', detail: 'Assessing annual shoot growth increments, canopy density, and leaf chlorosis percentages.' },
      { step: '3', title: 'Target & Site Exposure Analysis', detail: 'Evaluating nearby structures, wind exposure profiles, soil saturation, and construction damage history.' },
      { step: '4', title: 'Written Preservation Prescription', detail: 'A prioritized action plan outlining pruning, soil amendments, micro-injections, or removal.' }
    ],
    equipment: [
      { name: 'IML-RESI PD-Series Micro-Drill Resistograph', spec: 'Measures wood density resistance down to 1/100th of a millimeter' },
      { name: 'Acoustic Sounding Mallet & Visual Calipers', spec: 'Acoustic resonance diagnosis of hollow trunk compartments' },
      { name: 'Soil Core Sampler & EC/pH Digital Meters', spec: 'Extracts undisturbed 12" core samples for laboratory analysis' }
    ],
    faqs: [
      { q: 'Will this report be accepted by my city for a tree removal permit?', a: 'Yes. Our reports are authored by ISA-certified arborists with TRAQ (Tree Risk Assessment Qualification) credentials, meeting all municipal requirements.' },
      { q: 'Can sick trees usually be saved?', a: 'In over 70% of cases, early detection of pest or fungal stress allows us to nurse the tree back to vigorous health without removal.' },
      { q: 'How often should heritage and specimen trees be evaluated?', a: 'We recommend baseline scientific health evaluations every 2 to 3 years, or immediately following severe storm events, foundation excavation, or utility trenching.' }
    ]
  },

  'sonic-tomography': {
    id: 'sonic-tomography',
    title: 'Sonic Tomography Acoustic Decay Mapping',
    category: 'Health & Soil',
    categorySlug: 'health',
    tier: '$$ Advanced Tech Tier',
    priceEstimate: '$550 - $1,100',
    basePrice: 550,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB2g-3xiWXQU8DWR3oUyce5tAR_uZI-MjhRvMnGqiBPsY2wGRMHwGoAwtdays0uVBIHhdnAHRywoSN3G4L1iTISvjUlBlyQ-20krvG8t2IheD02IfCBwBP-RPHrcVcwtm5CxfO2xaZLJEP1NUfcsW0BUbc1sjPtun6t70oBmP11L4KJnB1IJgYwtcyQNTrVc12vAbDgQXtCvfbtyV9nXAw_KkFVAnGUESfpY0SmMLO6_ggkKor0dzmJ',
    summary: 'Non-destructive 12-sensor ultrasound array providing full-color 2D and 3D cross-sectional tomography of internal trunk hollows and wood decay.',
    description: `A tree can appear lush and green on the outside while being hollowed out by internal heart rot on the inside. In the past, arborists had to guess or drill destructive core samples. Sonic Tomography revolutionizes tree risk assessment through sound wave speed propagation.

By placing a calibrated ring of 10 to 12 acoustic sensors around the trunk, sound impulses travel through healthy solid wood fast (1,200 to 1,800 m/s) and slow down significantly or bend around decayed and hollow zones. The resulting high-resolution tomography map reveals internal hollows with millimeter precision, giving homeowners and municipal engineers undeniable scientific proof of structural safety.`,
    scopeOfWork: [
      'Circumference mapping and geometric trunk shape sensor calibration',
      'Multi-channel acoustic impulse testing across dozens of cross-angles',
      'Computer-generated 2D & 3D color tomogram highlighting sound wood vs rot',
      'Calculation of remaining residual wall thickness ratios (t/R rule)',
      'Engineered risk assessment report with wind load failure threshold simulations'
    ],
    methodology: [
      { step: '1', title: 'Geometric Trunk Calibration', detail: 'A ring of electronic pins is set through bark to contact wood cambium; exact distances are measured using electronic calipers.' },
      { step: '2', title: 'Acoustic Sound Matrix Tapping', detail: 'Each pin is tapped sequentially with an instrumented electronic hammer, recording microsecond transmission times to all other sensors.' },
      { step: '3', title: 'Tomogram Reconstruction', detail: 'Advanced software calculates speed matrices, generating brown (solid), green (early decay), and red/violet (hollow cavity) cross-sections.' },
      { step: '4', title: 'Failure Load Safety Modeling', detail: 'We combine wind sail surface data with remaining wall strength to establish exact storm failure probabilities.' }
    ],
    equipment: [
      { name: 'PiCUS 3 Sonic Tomograph System', spec: 'State-of-the-art 12-channel acoustic sensor matrix with Bluetooth telemetry' },
      { name: 'PiCUS Calliper Optical Measuring Tool', spec: 'Exact 3D perimeter coordinate mapping' },
      { name: 'Tree Motion Sensor (TMS) Dynamic Tilt Loggers', spec: 'Measures root plate movement under natural wind gusts' }
    ],
    faqs: [
      { q: 'Does this test harm the tree?', a: 'No! The sensor pins are only 2mm in diameter and barely penetrate beyond the outer bark into the non-living outer xylem. Trees seal these tiny prick marks within hours.' },
      { q: 'When is sonic tomography recommended?', a: 'Whenever a valuable specimen tree shows fungal conks, cavities, cracks, or is situated near high-value targets like homes, schools, or historical buildings.' },
      { q: 'Can sonic tomography differentiate between active decay and hollow voids?', a: 'Yes. PiCUS sound sensors calculate microsecond velocities across dozens of angles, clearly distinguishing solid heartwood, soft incipient fungal decay, and complete hollow cavities in distinct color grades.' }
    ]
  },

  'canopy-bracing': {
    id: 'canopy-bracing',
    title: 'Dynamic Cobra Canopy Bracing & Cable Support',
    category: 'Pruning & Care',
    categorySlug: 'pruning',
    tier: '$$ Structural Tier',
    priceEstimate: '$650 - $1,800',
    basePrice: 650,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCKAHOcfy3kOKW7hcwjuf6ghDkRO2Kz-y7FjPTfP-wxk1_8THKJNGIAKrF9FxzcsnrJShYgUO-XgRCTzkK1HCBsfjrAkPYiVaQD_QOHwm6of4SQOcOGVlAEXyQ5erCZtNU8KpHy0kZCKu9hsrhC07mp5Kbr22J1h63cWul9P57-zzQijHUnYKPY5UujQQVQwIAl99OH7v-ynIUIOyVXLBzccN-3sA9vs2rm8KL_OvKHSMFsqbmAI_ad',
    summary: 'Non-invasive, flexible synthetic shock-absorbing support cabling that stabilizes codominant stems, prevents storm splits, and preserves mature canopy architecture.',
    description: `Many mature trees develop V-shaped codominant stems with included bark—a severe structural flaw that can cause massive trunks to split catastrophic in high winds. Rather than cutting down a prized shade tree or using invasive through-bolt steel rods that wound the wood, Evergreen Arbor Care installs modern Cobra Dynamic Cabling systems.

These UV-stabilized hollow-braid synthetic ropes wrap gently around limbs with wide anti-abrasion bark sleeves. They allow the tree natural sway in light winds—maintaining essential wood-strengthening cambial response—while engaging an integrated rubber shock absorber during gale-force storms to prevent trunk fracture.`,
    scopeOfWork: [
      'Biomechanical load assessment of weak branch unions and codominant leaders',
      'Installation of 2-ton, 4-ton, or 8-ton rated hollow-braid Cobra cables',
      'Expansion loop damper integration allowing natural wood growth and movement',
      'Anti-girdling expanding insert collars protecting limb bark',
      '5-Year visual inspection schedule and cable adjustment warranty'
    ],
    methodology: [
      { step: '1', title: 'Union Structural Stress Audit', detail: 'Inspect the crotch angle, included bark depth, and dynamic weight ratio between codominant stems.' },
      { step: '2', title: 'Upper-Third Elevation Rigging', detail: 'Cables are positioned at approximately two-thirds of the distance from the union to the canopy tip for maximum leverage.' },
      { step: '3', title: 'Non-Invasive Collar Splicing', detail: 'Braided slings with wide expansion sleeves encircle stems without drilling, eliminating decay pathways.' },
      { step: '4', title: 'Shock Absorber Calibration', detail: 'Integrated elastomeric shock absorbers are tensioned with slack to allow healthy secondary stem thickening.' }
    ],
    equipment: [
      { name: 'Cobra 4-Ton & 8-Ton Dynamic Cabling Systems', spec: 'UV-resistant polypropylene hollow-braid rope with 12-year service life' },
      { name: 'Expanding Anti-Girdling Cushion Inserts', spec: 'Accommodates annual limb diameter expansion without constriction' },
      { name: 'Penta Grip Quick-Lock Terminations', spec: 'High-safety friction terminations certified under ISO arbor standards' }
    ],
    faqs: [
      { q: 'Will the cable strangle the tree branch as it grows?', a: 'No! The Cobra system features expanding loops and flexible collars specifically engineered to expand as the branch adds annual rings.' },
      { q: 'How long do dynamic synthetic cables last?', a: 'Cobra cables have an expected lifespan of 10 to 12 years. We provide routine 3-year inspections to check tension and collar seating.' },
      { q: 'When is dynamic synthetic cabling chosen over rigid steel rods?', a: 'Dynamic synthetic cabling is the modern ANSI A300 standard for upper canopy shock absorption. Rigid through-bolts are reserved only for low trunk splits where zero movement is required.' }
    ]
  },

  'crane-rigging': {
    id: 'crane-rigging',
    title: '60-Ton Crane Precision Pick & Heavy Rigging',
    category: 'Commercial Grounds',
    categorySlug: 'commercial',
    tier: '$$$ Heavy Rigging Tier',
    priceEstimate: '$1,200 - $4,500',
    basePrice: 1200,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDWjZ-4pgS9bFdpCH9nBVaw6CfY9Kr2MBF_saAv-5AsYpa9O8A2s75GHH2J4ycBLMsoQzLg46XA6O-c8oTZhxV5G1NiN_nWdVDAbZqKPzM5dvT5vSGMXrd6QRQ4YhuDBvclRKuHEmADKR6ci4g9bUDc7P65ezh28EjuL8HE8nIjdwiQXlgV92Xw-gkVIGRf-6EI946kLa3kSOkedbDcyh-o76nsPdvX9y5dRDomqD54ySSq818bufWa',
    summary: 'High-reach industrial crane hoisting capable of lifting multi-ton tree segments over houses, fences, and swimming pools with zero ground turf compaction.',
    description: `When massive oak, pine, or eucalyptus trees grow between swimming pools, steep embankments, or zero-lot-line residential rooftops, conventional tree work risks catastrophic property damage. Evergreen Arbor Care deploys dedicated 60-ton hydraulic all-terrain crane rigs.

Our certified crane operators work in constant two-way radio headset communication with aerial climbers. Heavy trunk sections up to 6,000 lbs are rigged, cut under balanced tension, and smoothly floated hundreds of feet over homes directly into the street chipper zone. What would take 3 days of manual labor is executed safely in hours with zero impact on lawns.`,
    scopeOfWork: [
      'Site lift plan calculation including radius, boom angle, and outrigger load displacement',
      'Ultra-dense composite outrigger pads protecting driveways and subterranean utilities',
      'Continuous direct Bluetooth headset communication between climber and crane operator',
      'Positive-balance rigging slings preventing sudden branch rotation or release shocks',
      'Rapid street clearing with Bobcat mini-skid steers and industrial grapple loaders'
    ],
    methodology: [
      { step: '1', title: 'Engineered Lift Plan Formulation', detail: 'Measure exact radius from crane chassis to tree center-of-gravity and verify outrigger ground bearing pressure.' },
      { step: '2', title: 'Choker Sling Attachment', detail: 'Climber loops heavy-duty synthetic tree-rigging slings around the cut section balance point above the intended saw cut.' },
      { step: '3', title: 'Tension & Precision Bypass Cut', detail: 'Crane takes initial cable tension; climber executes clean bypass cut; crane hoists load vertically clear of rooflines.' },
      { step: '4', title: 'Landing & Controlled Breakdown', detail: 'Load is landed gently onto street mats where ground crews buck and chip timber immediately.' }
    ],
    equipment: [
      { name: 'Link-Belt RTC-8060 60-Ton Rough Terrain Crane', spec: '110 ft four-section full power boom + 34 ft lattice fly jib' },
      { name: 'AlturnaMats High-Density Polyethylene Ground Protection', spec: 'Prevents tire ruts and protects asphalt from outrigger depression' },
      { name: 'Sena Mesh 2.0 Bluetooth Radio Helmets', spec: 'Hands-free crystal clear full-duplex crew voice communication' }
    ],
    faqs: [
      { q: 'Will the heavy crane crack my driveway?', a: 'No. We deploy oversized 4x8 ft heavy-duty composite outrigger pads that distribute thousands of pounds of pressure over wide surface areas, preventing concrete and asphalt damage.' },
      { q: 'How windy is too windy for crane operations?', a: 'We adhere to OSHA guidelines: crane operations halt if sustained wind speeds exceed 25 mph or gust patterns create unsafe pendulum sway.' },
      { q: 'How does crane-assisted tree removal compare to manual piecemeal roping?', a: 'Crane removals are typically 3x faster, drastically safer for ground crews, and eliminate heavy limb drop impact on landscaped lawns, septic tanks, and roof structures.' }
    ]
  },

  'bucket-truck': {
    id: 'bucket-truck',
    title: '75ft Insulated Aerial Bucket Truck Operations',
    category: 'Commercial Grounds',
    categorySlug: 'commercial',
    tier: '$$ High Reach Tier',
    priceEstimate: '$600 - $1,600',
    basePrice: 600,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAHYrZXr9Fx77Virass_1ToKcUSoFH8hbUl2QMt1xYFw9LKmkFFvtRvy73cHtWgFcJJvAHKfwgvI8ZjPreRimWb9c-S7Ek_oQee8hAhlI7k-evZHoULitaMYZpLCQFKb9UcbXY16csqAhwohe8YL_12pILSZmn--0S9f3t7IsuwsBxMB5gU50p1JUz_JmN1KudQ0-kZ7ykduHSNHx3xw5IKmst6adoRmIAAxUFJPy4ibjE4LpKVNdrk',
    summary: 'High-reach dielectric insulated aerial platforms providing secure positioning for rapid clearance pruning, utility right-of-way clearing, and tall canopy surgery.',
    description: `For tall street trees, commercial parking corridors, and trees entangled in high-voltage power lines, climbing on brittle dead limbs poses unacceptable human risk. Evergreen Arbor Care operates 75-foot articulated forestry bucket trucks featuring Category C 46kV dielectric insulation.

Our operators position themselves directly above complex canopies with ergonomic precision, completing extensive roadway clearance, structural thinning, and storm-damage extractions in a fraction of traditional climbing time.`,
    scopeOfWork: [
      'OSHA 1910.269 & EHAP certified utility line clearance operations',
      'Continuous hydraulic power-tool connection directly at the bucket platform',
      'Articulating telescopic boom reaching over fences, landscaping, and outbuildings',
      'Integrated heavy-duty chip dump box with hydraulic dumping capability',
      'Full traffic control, street sign cones, and safety flagger management'
    ],
    methodology: [
      { step: '1', title: 'Traffic Management & Outrigger Leveling', detail: 'Set up DOT-compliant directional warning signs and deploy automatic hydraulic leveling outriggers.' },
      { step: '2', title: 'Dielectric Pre-Flight Safety Test', detail: 'Inspect fiberglass boom insulation integrity and check electrical utility clearances.' },
      { step: '3', title: 'Aerial Surgical Pruning', detail: 'Operator maneuvers platform smoothly into upper canopy, removing deadwood with hydraulic pole saws.' },
      { step: '4', title: 'Direct Chipping & Clean Sweep', detail: 'Brush is loaded straight into the truck-mounted 15-yard chip box for immediate disposal.' }
    ],
    equipment: [
      { name: 'Altec LR7-60 75ft Working Height Forestry Bucket Truck', spec: 'Category C 46kV dielectric insulated upper and lower boom' },
      { name: 'Stanley Hydraulic Pole Saws & Limb Shears', spec: 'Quiet, zero-emission hydraulic cutting powered by truck auxiliary PTO' },
      { name: 'Traffic Control Strobe Array & Arrow Boards', spec: 'DOT compliant roadway safety signaling' }
    ],
    faqs: [
      { q: 'Can your bucket truck reach trees in my backyard?', a: 'If your driveway or side yard has a 10-foot wide paved access, our truck can reach over fences up to 45 feet horizontally. For tighter spaces, we deploy certified rope climbers.' },
      { q: 'Are your operators certified for electrical hazards?', a: 'Yes. All operators carry Electrical Hazards Awareness Program (EHAP) certifications and comply with OSHA line-clearance standards.' },
      { q: 'What is dielectric insulation and why is it essential near power lines?', a: 'Dielectric insulation uses specialized non-conductive fiberglass boom inserts rated up to 46,000 volts, preventing electrical arcing between live power lines and the vehicle chassis.' }
    ]
  }
};
