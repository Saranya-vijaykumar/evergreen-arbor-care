// Blog Articles Knowledge Base & Full Editorial Content
export const BLOG_DATA = {
  'post-1': {
    id: 'post-1',
    title: 'Advanced Structural Pruning for Mature Shade Trees',
    category: 'Tree Care',
    categorySlug: 'tree-care',
    date: 'October 14, 2026',
    readTime: '5 min read',
    author: {
      name: 'Julian Davis',
      role: 'ISA Board-Certified Master Arborist (BCMA)',
      initials: 'JD',
      avatarColor: 'bg-primary-container text-on-primary-container',
      bio: 'Julian has over 22 years of field experience in mature urban canopy restoration and biomechanical structural pruning across the Pacific Northwest.'
    },
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDj57ha0-cMbUuYjEyGr7GJgIAibsfjreHTxJFFabl31hVCRlYr-u7fnyMnB3LLEEmJowv8kba7u-rBRXOu15JyEWVhGCSmoxCkOiSAw6zQuvROOXFwSrXyGJVAONlnslLoh27lo-zXrzgBSXdGt0XFgEggpXKJq9I4KeAuv_pCJ9oQz5C14vZCGcj2_yRyc37OE2O0JoNtSCp5PhAxCy9XeEKHurqaq7T_znSKfz1Skx5-Hc0rZRnf',
    summary: 'Maximizing wind load resistance and canopy structural health through strategic reduction cuts, weight redistribution, and proper natural target pruning.',
    contentHtml: `
      <p class="lead text-base md:text-lg text-on-surface-variant font-medium leading-relaxed mb-6">
        Mature shade trees are the biological crown jewels of residential estates and urban parks. However, decades of untamed growth often result in dense, top-heavy canopies and codominant leader limbs susceptible to catastrophic wind-throw during autumn gales.
      </p>

      <h2 class="text-2xl font-bold font-headline text-on-surface mt-8 mb-4">1. Understanding the CODIT Principle</h2>
      <p class="text-sm md:text-base text-on-surface-variant leading-relaxed mb-4">
        Proper pruning is not simply removing branches; it is working harmoniously with <em>Compartmentalization Of Decay In Trees</em> (CODIT), a biological defense system formalized by Dr. Alex Shigo. When an arborist makes a cut, the tree does not "heal" tissue in the human sense—it forms four distinct chemical and structural boundary walls to seal the wound internally.
      </p>
      <div class="my-6 p-4 rounded-xl bg-surface-container border-l-4 border-primary">
        <p class="text-xs md:text-sm font-semibold text-on-surface">
          <strong>Key Rule:</strong> Never cut flush against the trunk. Always preserve the <em>branch bark ridge</em> and <em>branch collar</em>. Flush cuts destroy Wall 4 chemical barriers, introducing heart-rot fungus directly into the core xylem.
        </p>
      </div>

      <h2 class="text-2xl font-bold font-headline text-on-surface mt-8 mb-4">2. Drop-Crotch Reduction vs. Destructive Topping</h2>
      <p class="text-sm md:text-base text-on-surface-variant leading-relaxed mb-4">
        Many uncertified landscape contractors recommend "topping" or "lopping" trees to control height. Topping decapitates primary stems, forcing the tree to produce dozens of weakly attached epicormic "water sprouts." Within 3 to 5 years, these rapid shoots grow top-heavy while the parent stub decays underneath, transforming the tree into an imminent hazard.
      </p>
      <p class="text-sm md:text-base text-on-surface-variant leading-relaxed mb-4">
        In contrast, ANSI A300 drop-crotch reduction cuts a branch back to a lateral branch that is at least <strong>one-third the diameter</strong> of the limb being removed. This preserves the branch's natural hormonal flow (auxin suppression) and allows clean wound occlusion.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
        <div class="p-5 rounded-2xl bg-surface-container-low border border-surface-container">
          <h4 class="text-sm font-bold text-error flex items-center gap-1.5 mb-2">
            <span class="material-symbols-outlined text-[18px]">cancel</span> What To Avoid (Topping)
          </h4>
          <ul class="text-xs text-on-surface-variant space-y-1.5 list-disc list-inside">
            <li>Shearing branch tips haphazardly</li>
            <li>Removing more than 25% of canopy in one season</li>
            <li>Leaving long dead stubs without lateral draws</li>
            <li>Stripping all inner foliage (lions-tailing)</li>
          </ul>
        </div>
        <div class="p-5 rounded-2xl bg-surface-container-low border border-surface-container">
          <h4 class="text-sm font-bold text-primary flex items-center gap-1.5 mb-2">
            <span class="material-symbols-outlined text-[18px]">check_circle</span> ISA Standard Reduction
          </h4>
          <ul class="text-xs text-on-surface-variant space-y-1.5 list-disc list-inside">
            <li>Surgical cuts outside the branch collar ring</li>
            <li>Selective thinning of crossing or rubbing limbs</li>
            <li>Weight relief at outer third of overextended limbs</li>
            <li>Uniform distribution of wind-sail reduction</li>
          </ul>
        </div>
      </div>

      <h2 class="text-2xl font-bold font-headline text-on-surface mt-8 mb-4">3. Aerodynamic Wind-Sail Alleviation</h2>
      <p class="text-sm md:text-base text-on-surface-variant leading-relaxed mb-4">
        During severe storm fronts, a dense canopy functions exactly like a ship’s sail, transferring immense torque through the trunk down to the root plate. Strategic crown thinning opens up small natural air vents throughout the canopy, allowing turbulent 60+ mph wind gusts to filter through smoothly rather than snapping massive limbs.
      </p>

      <blockquote class="my-6 p-6 rounded-2xl bg-primary text-on-primary italic font-headline text-base md:text-lg">
        "A properly pruned oak does not look pruned; it looks as though nature sculpted it with perfect balance and boundless vitality."
      </blockquote>

      <h2 class="text-2xl font-bold font-headline text-on-surface mt-8 mb-4">Summary & Recommended Next Steps</h2>
      <p class="text-sm md:text-base text-on-surface-variant leading-relaxed mb-6">
        If your mature trees have not undergone professional structural evaluation in the past 3 to 4 years, schedule an on-site audit before the peak storm season hits.
      </p>
    `,
    relatedService: { id: 'crown-reduction', title: 'Crown Reduction & Canopy Thinning' }
  },

  'post-2': {
    id: 'post-2',
    title: 'Early Detection Protocols for Invasive Stem Borers',
    category: 'Disease & Pests',
    categorySlug: 'disease',
    date: 'October 10, 2026',
    readTime: '8 min read',
    author: {
      name: 'Sarah Miller',
      role: 'ISA Certified Arborist & Forest Entomologist',
      initials: 'SM',
      avatarColor: 'bg-tertiary-container text-on-tertiary-container',
      bio: 'Sarah leads our plant healthcare division specializing in integrated pest management (IPM) and vascular micro-injection treatments.'
    },
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBpuRcVhdHam2z1h4wc0IlJkNqNYrV4YMBn2JBjUAXxkGJULPe6lamb1xMv5mxTtSheEIR0ntZ4UZHLNKFsDya80jfZScnfzl_77srNC4F6k-UP5JVOQC9wX-yAPzjM7_I1c5r4C3AtrlkMcJ76hivGb_79_fM7pWc7YaW4sa2Q4VTG00qwCV_aprLkZBa4waUlFirB9TdFv7RKBqaR0A05XLmuRysTJDF4rRWLogjWiVD4uW7lK3Pd',
    summary: 'Identifying early canopy dieback, D-shaped exit holes, and larval galleries to save high-value urban tree populations before vascular collapse.',
    contentHtml: `
      <p class="lead text-base md:text-lg text-on-surface-variant font-medium leading-relaxed mb-6">
        Invasive xylem and phloem-boring insects—including the Emerald Ash Borer (EAB), Goldspotted Oak Borer, and Asian Longhorned Beetle—are decimating urban forests across North America at an unprecedented velocity.
      </p>

      <h2 class="text-2xl font-bold font-headline text-on-surface mt-8 mb-4">1. The Biological Threat: Disrupted Sap Flow</h2>
      <p class="text-sm md:text-base text-on-surface-variant leading-relaxed mb-4">
        While adult beetles chew minimally on leaves, the true destruction happens invisibly beneath the bark. Female beetles lay eggs in bark crevices; once hatched, larvae bore directly into the inner phloem and cambium layer. They feed in serpentine galleries, girdling the vascular pipeline that carries water and nutrients from roots to leaves.
      </p>

      <div class="my-6 p-5 rounded-2xl bg-surface-container border border-surface-container-high">
        <h3 class="text-base font-bold text-on-surface mb-3 flex items-center gap-2">
          <span class="material-symbols-outlined text-secondary">warning</span> The 4 Telltale Signs of Borer Attack
        </h3>
        <ul class="text-xs md:text-sm text-on-surface-variant space-y-2">
          <li><strong>1. Thinning Crown:</strong> Canopy dieback starts in the upper third of the tree and progresses downward over 1 to 2 years.</li>
          <li><strong>2. Epicormic Sprouts:</strong> Vigorous suckers sprout unnaturally along the lower trunk—the tree’s desperate survival response to upper vascular blockage.</li>
          <li><strong>3. D-Shaped Exit Holes:</strong> Emerging adult beetles chew distinctive 1/8-inch D-shaped or round exit holes through the bark surface.</li>
          <li><strong>4. Woodpecker "Flecking":</strong> Woodpeckers strip outer grey bark to hunt larvae, leaving conspicuous blonde patches across the upper bole.</li>
        </ul>
      </div>

      <h2 class="text-2xl font-bold font-headline text-on-surface mt-8 mb-4">2. The 30% Canopy Threshold</h2>
      <p class="text-sm md:text-base text-on-surface-variant leading-relaxed mb-4">
        Timing is everything. Arboricultural studies demonstrate that once a tree loses more than <strong>30% of its canopy foliage</strong> to borer damage, its vascular system is too severely compromised to circulate systemic insecticides effectively. At that stage, hazardous tree removal becomes the only safe recourse.
      </p>

      <h2 class="text-2xl font-bold font-headline text-on-surface mt-8 mb-4">3. Direct Trunk Micro-Injection Therapy</h2>
      <p class="text-sm md:text-base text-on-surface-variant leading-relaxed mb-4">
        Evergreen Arbor Care does not spray toxic chemical clouds into the air. Instead, we utilize closed-system Arborjet TREE I.V. micro-infusion technology. Emamectin Benzoate is injected directly into active xylem sap channels at the root flare, sealing inside the tree and providing <strong>two full years of 99%+ protection</strong> against wood borers with zero off-target environmental drift.
      </p>
    `,
    relatedService: { id: 'health-assessment', title: 'Certified ISA Arborist Health Assessment' }
  },

  'post-3': {
    id: 'post-3',
    title: 'Scaling Municipal Canopy Inventories with GIS Mapping',
    category: 'Municipal Forestry',
    categorySlug: 'municipal',
    date: 'September 28, 2026',
    readTime: '6 min read',
    author: {
      name: 'Alan Ross',
      role: 'Senior Urban Forester & GIS Spatial Analyst',
      initials: 'AR',
      avatarColor: 'bg-secondary-container text-on-secondary-container',
      bio: 'Alan specializes in enterprise geospatial canopy modeling, urban heat island mitigation, and municipal asset management systems.'
    },
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBAnV35FBVa989FckjU_19tu9I322zj1BvZBDXGsByOi1nWzRgrAGJ0SxLshfyfu7LD9WOcq8mlRYQCOnCczf7QrLG-bjPXo6TPozMbv7XTPexNaq91SYQrAEjgA6XvrxNccws1WtTeUqeY0wU9yhzwt1Vx7yiSSWpQxaDj8MCJIJrltTuzw9wJ78762sqe0WYCD4yJFEZq2wbaKXdnsb1VVTex3txBxGZ5S17TLgvsdq1maSPRgrsH',
    summary: 'How city forestry departments leverage mobile LiDAR, satellite NDVI indexing, and high-accuracy GPS tagging to manage tens of thousands of urban trees.',
    contentHtml: `
      <p class="lead text-base md:text-lg text-on-surface-variant font-medium leading-relaxed mb-6">
        Managing 50,000 street and park trees on paper spreadsheets is a recipe for missed hazard deadlines and catastrophic municipal liability. Modern smart cities are shifting to geospatial cloud inventories.
      </p>

      <h2 class="text-2xl font-bold font-headline text-on-surface mt-8 mb-4">1. Sub-Meter GPS Tagging & Asset IDs</h2>
      <p class="text-sm md:text-base text-on-surface-variant leading-relaxed mb-4">
        Every individual public tree receives an anodized QR-coded brass tag anchored to its root flare and a corresponding sub-meter GPS coordinate in our cloud database. Field inspectors log species botanical name, DBH (Diameter at Breast Height), structural health score (1 to 5), and immediate work requirements directly on ruggedized tablets.
      </p>

      <h2 class="text-2xl font-bold font-headline text-on-surface mt-8 mb-4">2. LiDAR & Multispectral Canopy Density</h2>
      <p class="text-sm md:text-base text-on-surface-variant leading-relaxed mb-4">
        Combining drone-mounted LiDAR with satellite Normalized Difference Vegetation Index (NDVI) telemetry allows cities to detect localized canopy decline before it becomes visible from street level. Municipalities can predict utility conflicts and prioritize pruning corridors along school bus routes.
      </p>
    `,
    relatedService: { id: 'commercial-fleet', title: 'Commercial Fleet & Multi-Property Arbor Care' }
  },

  'post-4': {
    id: 'post-4',
    title: 'Rigging Safety: Tensile Ratings & Dynamic Load Calculations',
    category: 'Safety & Equipment',
    categorySlug: 'safety',
    date: 'September 20, 2026',
    readTime: '4 min read',
    author: {
      name: 'Thomas Kelly',
      role: 'Director of Safety & Heavy Rigging Specialist',
      initials: 'TK',
      avatarColor: 'bg-surface-container-highest text-on-surface',
      bio: 'Thomas has 18 years of high-angle rope access experience and oversees OSHA 1910 safety compliance for our industrial fleet operations.'
    },
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBb7DQvUve_JT6j5eH6LSdnavtn1S2wHocU6ilZbYfWyPAeB0ocqKYe8nPaoi9bbdHEbQkkbpqHKXPLEthRezIuYAVc0izSRy4oMvRrOxS5xEmEdC85LVYP9f9nMuY_U8SLA2J2M1lhTfQ8u-gAr3xxdoNPtfYYs1VS-wKZEn9IDpboILUeUuck_kj9ZaN2oMBnTLqAGQcTW3RVG09JLzEQOZceKDCeR67kJQCm2vJftEuW4TKkzp0t',
    summary: 'The physics of sectional timber lowering: managing friction coefficients, shock loads, and equipment safety factors during high-consequence tree removals.',
    contentHtml: `
      <p class="lead text-base md:text-lg text-on-surface-variant font-medium leading-relaxed mb-6">
        When an arborist severs a 1,500 lb oak limb suspended 80 feet above a glass sunroom, physics allows zero margin for calculation error.
      </p>

      <h2 class="text-2xl font-bold font-headline text-on-surface mt-8 mb-4">Static Weight vs. Dynamic Impact Shock</h2>
      <p class="text-sm md:text-base text-on-surface-variant leading-relaxed mb-4">
        A static log weighing 1,000 lbs dropped even 3 feet before the rigging rope catches generates dynamic shock forces exceeding <strong>3,500 to 5,000 lbs of force</strong> on the rigging block and tree crotch anchor. If an anchor point fails under dynamic shock, the entire tree can hinge and collapse into the house.
      </p>

      <h2 class="text-2xl font-bold font-headline text-on-surface mt-8 mb-4">The 10:1 Arborist Safety Factor</h2>
      <p class="text-sm md:text-base text-on-surface-variant leading-relaxed mb-4">
        Industrial lifting standards require a minimum 5:1 safety factor; Evergreen Arbor Care enforces a strict <strong>10:1 safety ratio</strong> on all dynamic lowering lines. Our 3/4-inch Samson Stable Braid rigging lines boast a minimum breaking strength of 20,400 lbs, paired with Good Rigging Control System (GRCS) friction cylinders for feather-soft descents.
      </p>
    `,
    relatedService: { id: 'crane-rigging', title: '60-Ton Crane Precision Pick & Heavy Rigging' }
  },

  'post-5': {
    id: 'post-5',
    title: 'Root Flare Excavation: Diagnosing and Correcting Girdling Roots',
    category: 'Tree Care',
    categorySlug: 'tree-care',
    date: 'September 12, 2026',
    readTime: '7 min read',
    author: {
      name: 'Marcus Vance',
      role: 'ISA Board-Certified Master Arborist (BCMA)',
      initials: 'MV',
      avatarColor: 'bg-primary-container text-on-primary-container',
      bio: 'Marcus has published extensive research on sub-surface rhizosphere decompaction and supersonic air excavation.'
    },
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAxSfFYwFI8ytdoxG8zHoS7_izRXFEBYLtedUQHWR8ofGbXc7-7raTlv_vVnaftBDzkgRkyRkxiPl_XDoajKA2wi55WyLUw0InzHjBB_4O3VcjfNOlxTIfWWRA5C5zBUSse6RD-GPg80TzccuXfiHZciizV79xwnWKg7RBg_dARk_BwEz9mN2Wn1XQ8NhjRu6L303ec8yOs9thZXn2lITz9DGdtXzsToBLmlbgG4g2tgAPrkrkPI7JO',
    summary: 'How deeply buried root flares choke oxygen transfer and cause trunk strangulation, and how supersonic air excavation safely restores root vigor.',
    contentHtml: `
      <p class="lead text-base md:text-lg text-on-surface-variant font-medium leading-relaxed mb-6">
        Walk through almost any suburban development and you will see "volcano mulching"—massive cones of bark mulch piled up against tree trunks like telephone poles. This single landscaping blunder kills more urban trees than all insect pests combined.
      </p>

      <h2 class="text-2xl font-bold font-headline text-on-surface mt-8 mb-4">The Danger of Girdling Roots</h2>
      <p class="text-sm md:text-base text-on-surface-variant leading-relaxed mb-4">
        A tree’s trunk bark is biologically adapted to open air; its roots are adapted to soil moisture. When wet soil and mulch bury the root flare, adventitious roots grow in tight circles around the trunk. As both the trunk and circling roots expand each year, the roots choke the trunk vascular channels, suffocating sap flow and creating an unstable break point in high winds.
      </p>

      <h2 class="text-2xl font-bold font-headline text-on-surface mt-8 mb-4">Supersonic Air Excavation (AirSpade)</h2>
      <p class="text-sm md:text-base text-on-surface-variant leading-relaxed mb-4">
        Digging with metal shovels cuts and damages sensitive feeder roots. Our arborists utilize the <strong>AirSpade 2000</strong>, which discharges compressed air at Mach 2 speed. It fractures and blows compacted clay soil away in seconds without harming tree roots or underground utility wires. Once exposed, our arborists surgically excise girdling roots and establish proper soil grade.
      </p>
    `,
    relatedService: { id: 'deep-root-fertilization', title: 'Deep Root Fertilization & Pneumatic Aeration' }
  },

  'post-6': {
    id: 'post-6',
    title: 'Navigating Municipal Tree Protection Ordinances & Permitting',
    category: 'Municipal Forestry',
    categorySlug: 'municipal',
    date: 'September 02, 2026',
    readTime: '6 min read',
    author: {
      name: 'Alan Ross',
      role: 'Senior Urban Forester & Regulatory Consultant',
      initials: 'AR',
      avatarColor: 'bg-secondary-container text-on-secondary-container',
      bio: 'Alan advises developers and property owners on municipal tree codes, heritage tree designations, and TRAQ documentation.'
    },
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD-JOUq87oXjr1jQZB94ny82rtZNzz7AtVuKv03hYuouLBtLMqNUU2TQsBF2hgFgbXBLmuLj4iwC46gSDdjig67lqpyqGv6pcAVFqC_jqS0gMEttPqO577apcPjdAQVEucQgn7KtKx2FnxuOpq_JPMqO0187vzd3xp3qXSBG4iE1yyc_6UAkiAf7DvHzkhDT_cqFDklv_RgTjdRUejmf6qL8693YrOp2qUt39aWz6EycZtpqwRYwAk3',
    summary: 'A legal and arboricultural breakdown of urban canopy codes, replacement caliper ratios, and TRAQ documentation required to avoid hefty fines.',
    contentHtml: `
      <p class="lead text-base md:text-lg text-on-surface-variant font-medium leading-relaxed mb-6">
        Before cutting down a large tree on private or commercial property, understanding municipal tree preservation ordinances is vital. Unpermitted removals can incur fines exceeding $10,000 per heritage tree.
      </p>

      <h2 class="text-2xl font-bold font-headline text-on-surface mt-8 mb-4">What Constitutes a "Protected" Tree?</h2>
      <p class="text-sm md:text-base text-on-surface-variant leading-relaxed mb-4">
        Most cities classify trees by DBH (Diameter at Breast Height). Any native oak, maple, or redwood measuring above 12 to 24 inches DBH is typically designated as a "Protected" or "Heritage" specimen. Removing such a tree requires a formal permit backed by a certified arborist hazard assessment.
      </p>

      <h2 class="text-2xl font-bold font-headline text-on-surface mt-8 mb-4">The TRAQ Tree Risk Report</h2>
      <p class="text-sm md:text-base text-on-surface-variant leading-relaxed mb-4">
        City arborists will only approve removal permits if the tree presents an unacceptable risk rating under the ISA Tree Risk Assessment Qualification (TRAQ) standard. Evergreen Arbor Care prepares comprehensive permit packets, including sonic tomography cross-sections, decay measurements, and photographic evidence, ensuring smooth permit approval.
      </p>
    `,
    relatedService: { id: 'sonic-tomography', title: 'Sonic Tomography Acoustic Decay Mapping' }
  }
};
