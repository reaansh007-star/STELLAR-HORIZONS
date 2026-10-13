import heroCosmicSpace from '@/src/assets/images/hero_cosmic_space_1791912335014.jpg';
import marsColonyBase from '@/src/assets/images/mars_colony_base_1791912357770.jpg';
import jwstDeepField from '@/src/assets/images/jwst_deep_field_1791912358086.jpg';
import blackHoleAccretion from '@/src/assets/images/black_hole_accretion_1791912357818.jpg';

export interface Article {
  id: number;
  title: string;
  category: string;
  author: string;
  authorRole: string;
  date: string;
  readTime: string;
  image: string;
  fallbackGradient: string;
  featured?: boolean;
  excerpt: string;
  takeaways: string[];
  sections: {
    heading?: string;
    paragraphs: string[];
  }[];
}

export const ARTICLES: Article[] = [
  {
    id: 1,
    title: "Unraveling Dark Matter: The Missing 85% of the Cosmic Mass",
    category: "Deep Space & Cosmology",
    author: "Dr. Alistair Vance",
    authorRole: "Senior Cosmologist & Lead Writer",
    date: "October 12, 2026",
    readTime: "7 min read",
    image: heroCosmicSpace,
    fallbackGradient: "from-blue-900 to-indigo-950",
    featured: true,
    excerpt: "Galactic rotation curves and gravitational lensing reveal an invisible scaffold holding galaxies together against centrifugal disintegration.",
    takeaways: [
      "Baryonic (normal) matter accounts for under 5% of the total mass-energy budget of the observable universe.",
      "Galactic rotation velocities remain flat at outer margins, proving the existence of unseen gravitational mass halos.",
      "WIMPs and Axions remain the leading elementary particle candidates undergoing underground detection."
    ],
    sections: [
      {
        paragraphs: [
          "Every star, planet, glowing gas nebula, and galaxy combined accounts for less than five percent of the mass-energy budget of the observable universe. The overwhelming majority of cosmic structure remains shrouded in total darkness—an invisible substance known as dark matter that exerts profound gravitational force without emitting, absorbing, or reflecting electromagnetic radiation.",
          "First hypothesized in the 1930s by Swiss astronomer Fritz Zwicky through orbital velocity anomalies in the Coma Cluster, dark matter has evolved from a theoretical curiosity into the cornerstone of modern cosmological models."
        ]
      },
      {
        heading: "1. The Galactic Rotation Anomaly",
        paragraphs: [
          "In the 1970s, pioneering astronomer Vera Rubin observed that stars situated at the outermost spiral boundaries of galaxies were orbiting at virtually identical velocities to stars huddled near the dense galactic core.",
          "According to classical Newtonian mechanics and Keplerian laws, outer stars should orbit significantly slower as distance from the visible center increases. Without massive, spherical halos of non-luminous matter enveloping each galaxy, centrifugal forces would rip spiral structures apart within a few galactic rotations."
        ]
      },
      {
        heading: "2. Gravitational Lensing & Spacetime Curvature",
        paragraphs: [
          "Einstein's General Theory of Relativity posits that mass curves spacetime geometry. When light from distant background galaxies traverses the space near a massive foreground galaxy cluster, dark matter distorts the path of passing photons like a titanic glass lens.",
          "By analyzing these Einstein rings and distorted light arcs, astrophysicists can map the filamentary distribution of dark matter across cosmic time, revealing a vast cosmic web along which normal matter precipitates."
        ]
      },
      {
        heading: "3. Candidate Particles: WIMPs vs. Axions",
        paragraphs: [
          "Deep underground detection laboratories, such as LZ in South Dakota and XENONnT in Gran Sasso, employ liquid xenon reservoirs buried beneath kilometers of shielding rock to detect the minuscule nuclear recoil of Weakly Interacting Massive Particles (WIMPs).",
          "Concurrently, microwave cavity haloscopes seek Axions—ultralight bosons predicted by quantum chromodynamics that could convert into detectable radio photons inside intense magnetic fields."
        ]
      },
      {
        heading: "Conclusion",
        paragraphs: [
          "Dark matter represents the primordial architectural scaffolding of the cosmos. Without its early gravitational collapse creating gravitational wells, baryonic hydrogen and helium gas would never have accumulated densely enough to ignite the first stars and seed planetary systems."
        ]
      }
    ]
  },
  {
    id: 2,
    title: "James Webb Space Telescope: Piercing Cosmic Dawn",
    category: "Deep Space & Cosmology",
    author: "Dr. Alistair Vance",
    authorRole: "Senior Cosmologist & Lead Writer",
    date: "October 10, 2026",
    readTime: "6 min read",
    image: jwstDeepField,
    fallbackGradient: "from-amber-950 to-indigo-950",
    excerpt: "JWST's cryogenic infrared instruments capture redshifted photons from primordial star clusters formed just 300 million years after the Big Bang.",
    takeaways: [
      "JWST operates at the Sun-Earth L2 Lagrange point at cryogenic temperatures below 40 Kelvin.",
      "Infrared optics pierce interstellar obscuration to reveal early protogalaxy structures.",
      "Observations demonstrate high stellar masses in early galaxies earlier than classical simulations predicted."
    ],
    sections: [
      {
        paragraphs: [
          "Stationed 1.5 million kilometers from Earth at the Second Lagrange Point (L2), the James Webb Space Telescope represents the pinnacle of modern astronomical engineering. Its 6.5-meter gold-plated beryllium primary mirror captures infrared photons that have travelled through expanding space for over 13.5 billion years.",
          "Unlike Hubble, which observes primarily in visible and ultraviolet spectra, JWST is custom-designed for the infrared domain, where the redshifted light of the infant cosmos resides."
        ]
      },
      {
        heading: "1. Cosmological Redshift & Infrared Vision",
        paragraphs: [
          "As the fabric of space expands, light waves emitted by the first generations of Population III stars are stretched into longer, infrared wavelengths. JWST's Near-Infrared Camera (NIRCam) and Mid-Infrared Instrument (MIRI) can resolve these ultra-faint heat emissions with unprecedented clarity.",
          "Infrared wavelengths also slip past dense cosmic dust lanes that normally obscure active star-forming stellar nurseries in deep space."
        ]
      },
      {
        heading: "2. Challenging Early Universe Evolutionary Models",
        paragraphs: [
          "Recent deep-field surveys with JWST have uncovered massive, well-organized spiral and disc galaxies existing barely 350 million years after the Big Bang. Theoretical models had anticipated finding only chaotic, fragmented proto-clusters at such early epochs.",
          "These observations indicate that star formation efficiency and supermassive black hole seeding took place with startling speed in the primordial cosmos."
        ]
      },
      {
        heading: "Conclusion",
        paragraphs: [
          "JWST is actively revising core textbooks in observational astrophysics, opening a direct visual window onto the cosmic dawn when the universe first transitioned from darkness to illumination."
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Mars Colonization: Closed-Loop Life Support & ISRU",
    category: "Space Exploration & Rockets",
    author: "Cmdr. Sarah Jenkins",
    authorRole: "Aerospace Systems Analyst",
    date: "October 08, 2026",
    readTime: "8 min read",
    image: marsColonyBase,
    fallbackGradient: "from-red-950 to-amber-950",
    excerpt: "Establishing a permanent human settlement on Mars demands Sabatier propellant synthesis and regolith perchlorate remediation.",
    takeaways: [
      "In-Situ Resource Utilization (ISRU) harvests Martian carbon dioxide and subsurface water ice to produce fuel.",
      "Toxic perchlorate salts in Martian regolith must be biologically neutralized for greenhouse farming.",
      "Subsurface lava tube habitats provide radiation shielding equivalent to meters of lead."
    ],
    sections: [
      {
        paragraphs: [
          "Sustaining permanent human crews on the surface of Mars presents extreme thermodynamic and bio-regenerative challenges: an ambient atmosphere under 1% of Earth's sea-level pressure consisting of 95% carbon dioxide, surface temperatures plunging to -125°C, and unshielded galactic cosmic radiation.",
          "Survival depends not on continuous supply chains from Earth, but on turning local Martian volatile elements into lifelines and propulsion fuels."
        ]
      },
      {
        heading: "1. Sabatier Fuel Synthesis via ISRU",
        paragraphs: [
          "Launching return propellant across the interplanetary transit is energetically prohibitive. Automated In-Situ Resource Utilization (ISRU) reactors will extract subsurface glacial ice, electrolyze it into oxygen and hydrogen, and combine hydrogen with atmospheric CO2 via the Sabatier reaction at 400°C.",
          "This catalytic reaction produces pure liquid methane (CH4) and liquid oxygen (LOX), providing dense chemical propellants for return transport back to Earth orbit."
        ]
      },
      {
        heading: "2. Soil Remediation & Controlled Environment Agriculture",
        paragraphs: [
          "Martian regolith contains 0.5% to 1.0% toxic perchlorate salts, which are hazardous to human thyroid function and plant biology. Soil bioremediation facilities utilize perchlorate-reducing bacteria (such as Dechloromonas agitata) to decompose perchlorates into harmless chloride ions and elemental oxygen.",
          "Remediated regolith is then enriched with biological compost inside pressurized aeroponic and hydroponic food production domes."
        ]
      },
      {
        heading: "Conclusion",
        paragraphs: [
          "Mars colonization serves as humanity's crucible: a harsh testing ground where extreme ecological circularity and closed-loop thermodynamic efficiency become matters of immediate survival."
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Next-Generation Rocketry: Fusion Drives & Reusability",
    category: "Space Exploration & Rockets",
    author: "Cmdr. Sarah Jenkins",
    authorRole: "Aerospace Systems Analyst",
    date: "October 05, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&w=800&q=80",
    fallbackGradient: "from-cyan-950 to-slate-900",
    excerpt: "Chemical rockets have reached their thermodynamic limits; direct magnetic fusion drives offer specific impulses exceeding 10,000 seconds.",
    takeaways: [
      "Rapid reusability has dropped payload launch costs from $20,000/kg down to under $1,500/kg.",
      "Direct Fusion Drives (DFD) utilize magnetic mirror confinement to produce relativistic plasma thrust.",
      "High exhaust velocity cuts transit times to Jupiter and Saturn from years to mere months."
    ],
    sections: [
      {
        paragraphs: [
          "The governing physics of the Tsiolkovsky rocket equation imposes severe exponential penalties on chemical rockets: chemical bonds release finite energy per unit mass, forcing launch vehicles to be over 90% fuel by weight at liftoff.",
          "Breaking free from planetary gravity wells and enabling true interplanetary trade routes demands nuclear and magnetic plasma propulsion technologies."
        ]
      },
      {
        heading: "1. Full Booster & Second-Stage Reusability",
        paragraphs: [
          "Rapid retro-propulsive booster recovery and thermal heat-shield refurbishment have transformed space transport into routine logistics infrastructure. High-cadence orbital launches now support satellite mega-constellations and massive orbital fuel depot architectures."
        ]
      },
      {
        heading: "2. Magnetic Confinement Direct Fusion Propulsion",
        paragraphs: [
          "Direct Fusion Drives currently under prototype development heat a deuterium and helium-3 mixture to thermonuclear temperatures within rotating magnetic mirror fields. Radiofrequency waves heat plasma to 100 million Kelvin.",
          "Directing the energetic charged exhaust through a magnetic divergence nozzle produces specific impulses of 10,000 seconds—reducing travel times to Mars to less than 60 days."
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Exoplanet Biosignatures: Searching for Atmospheric Life",
    category: "Astronomy & Astrophysics",
    author: "Dr. Maya Lin",
    authorRole: "Astrobiology Specialist",
    date: "October 03, 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&w=800&q=80",
    fallbackGradient: "from-emerald-950 to-slate-900",
    excerpt: "Transmission spectroscopy analyzes starlight filtering through exoplanetary atmospheres to detect oxygen, methane, and water vapor disequilibrium.",
    takeaways: [
      "Transmission spectroscopy detects optical absorption fingerprints as planets transit their stars.",
      "Atmospheric disequilibrium (coexistence of reducing and oxidizing gases) indicates biological activity.",
      "Advanced coronagraphs cancel host star glare by a factor of 10 billion for direct spectroscopic imaging."
    ],
    sections: [
      {
        paragraphs: [
          "With over 5,500 exoplanets confirmed by Kepler, TESS, and ground-based velocity surveys, the primary objective of astrobiology has transitioned from detection to atmospheric chemical characterization.",
          "Scientists are searching for planets orbiting in the circumstellar habitable zone where liquid surface water can persist."
        ]
      },
      {
        heading: "1. Transmission Spectroscopy Fingerprints",
        paragraphs: [
          "When an exoplanet passes directly between Earth and its host star, a tiny fraction of starlight passes through the thin atmospheric envelope. Specific gas molecules absorb precise wavelengths of light, creating distinctive spectral absorption dips.",
          "By analyzing these absorption notches, astronomers identify chemical species such as carbon dioxide, water vapor, sulfur dioxide, and methane."
        ]
      },
      {
        heading: "2. Atmospheric Disequilibrium as a Biosignature",
        paragraphs: [
          "In planetary atmospheres governed purely by abiotic chemical equilibrium, methane (a reducing agent) and oxygen (a strong oxidizer) react quickly and neutralize each other. On Earth, both gases coexist because living organisms continuously replenish them.",
          "Detecting simultaneous oxygen/ozone and methane in the atmosphere of a rocky world like TRAPPIST-1e would represent compelling evidence for extraterrestrial biochemistry."
        ]
      }
    ]
  },
  {
    id: 6,
    title: "Supermassive Black Holes and Event Horizon Imaging",
    category: "Astronomy & Astrophysics",
    author: "Dr. Alistair Vance",
    authorRole: "Senior Cosmologist & Lead Writer",
    date: "September 28, 2026",
    readTime: "6 min read",
    image: blackHoleAccretion,
    fallbackGradient: "from-orange-950 to-neutral-950",
    excerpt: "Global radio telescope arrays combine signals through VLBI to resolve accretion disk shadows at event horizons millions of light-years away.",
    takeaways: [
      "Very Long Baseline Interferometry (VLBI) synthesizes an Earth-diameter virtual aperture.",
      "Light bends around event horizons forming photon rings and asymmetric Doppler-boosted crescents.",
      "Relativistic polar jets inject kinetic energy into intergalactic clusters, regulating galaxy growth."
    ],
    sections: [
      {
        paragraphs: [
          "At the barycenters of almost all massive galaxies dwell supermassive black holes harboring millions to billions of solar masses compressed within an event horizon—the boundary beyond which nothing, not even light, can escape.",
          "In galaxies like M87 and our own Milky Way (Sagittarius A*), these extreme gravitational wells pull in surrounding gas and plasma, generating temperatures exceeding trillions of degrees."
        ]
      },
      {
        heading: "1. Very Long Baseline Interferometry (VLBI)",
        paragraphs: [
          "The Event Horizon Telescope (EHT) links radio observatories synchronized with atomic hydrogen maser clocks spanning Antarctica, Hawaii, the Chilean Andes, and Europe. Combining these incoming waveforms creates an Earth-sized aperture capable of micro-arcsecond angular resolution.",
          "This resolution is equivalent to spotting an individual golf ball on the surface of the Moon from the surface of Earth."
        ]
      },
      {
        heading: "2. The Event Horizon Shadow & Doppler Beaming",
        paragraphs: [
          "Photons traveling close to the Schwarzschild radius are captured or deflected along unstable orbits. The dark central shadow is framed by a luminous ring of plasma spinning at fractions of the speed of light.",
          "Relativistic Doppler boosting causes the portion of the plasma disk moving toward our line of sight to shine dramatically brighter than the receding edge."
        ]
      }
    ]
  },
  {
    id: 7,
    title: "The Lunar Economy: Helium-3, Water Ice, and Base Camp Artemis",
    category: "Space Tech & Future Science",
    author: "Cmdr. Sarah Jenkins",
    authorRole: "Aerospace Systems Analyst",
    date: "September 24, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1532693322450-2cb5c511067d?auto=format&fit=crop&w=800&q=80",
    fallbackGradient: "from-slate-900 to-indigo-950",
    excerpt: "Permanently shadowed craters at the lunar south pole hold billions of metric tons of water ice essential for life support and cislunar refuelling.",
    takeaways: [
      "Shackleton and Faustini craters conceal pristine cryogenic volatiles preserved over four billion years.",
      "Lunar regolith 3D sintering provides passive radiation barriers against solar proton storms.",
      "Helium-3 deposits embedded by solar wind present aneutronic fuel for future fusion reactors."
    ],
    sections: [
      {
        paragraphs: [
          "The Moon is no longer merely a symbolic destination for scientific flags and footprints. It has become an essential industrial stepping stone and economic logistics hub for permanent cislunar exploration.",
          "Due to the Moon's shallow gravity well—only 1/6th of Earth's—launching materials and propellant refined on the lunar surface into deep space requires over 95% less energy."
        ]
      },
      {
        heading: "1. South Pole Volatiles & Cryogenic Craters",
        paragraphs: [
          "Because the Moon has an axial tilt of only 1.5 degrees, crater floors at the lunar poles remain in permanent shadow, with temperatures lingering at 30 Kelvin (-243°C). Robotic neutron spectrometers have confirmed massive reservoirs of water ice locked within the regolith.",
          "Cracking this water into cryogenic liquid oxygen and hydrogen provides propellant to refuel reusable landers and deep-space transport vehicles."
        ]
      }
    ]
  },
  {
    id: 8,
    title: "Asteroid Mining: Resource Abundance in the Solar System",
    category: "Space Tech & Future Science",
    author: "Cmdr. Sarah Jenkins",
    authorRole: "Aerospace Systems Analyst",
    date: "September 20, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=800&q=80",
    fallbackGradient: "from-zinc-900 to-stone-900",
    excerpt: "Metallic M-type asteroids hold trillions of dollars in platinum group metals, nickel, and iron, eliminating planetary mining extraction.",
    takeaways: [
      "A single 500-meter platinum-rich asteroid contains more rare metals than all historical terrestrial mining.",
      "Optical mining concentrates focused sunlight to desorb water and volatile gases from rubble-pile asteroids.",
      "Off-world resource refinement protects Earth's biosphere from destructive open-pit mining operations."
    ],
    sections: [
      {
        paragraphs: [
          "Industrial civilization on Earth faces resource constraints and environmental degradation resulting from terrestrial open-pit mining. The asteroid belt and near-Earth asteroids contain virtually limitless reserves of structural metals and precious elements.",
          "Asteroids like 16 Psyche and Ryugu represent ancient shattered planetesimals where dense metals concentrated in natural metallic cores."
        ]
      },
      {
        heading: "1. Mineralogy of M-Type Asteroids",
        paragraphs: [
          "M-type asteroids are composed predominantly of metallic iron and nickel, enriched with rare platinum-group metals: ruthenium, rhodium, palladium, osmium, iridium, and platinum.",
          "Utilizing autonomous robotic metallurgical smelters powered by solar concentrators, these elements can be refined directly into orbital structural trusses and electronic conductors."
        ]
      }
    ]
  },
  {
    id: 9,
    title: "Astrobiology in Ice Oceans: Europa and Enceladus",
    category: "Astronomy & Astrophysics",
    author: "Dr. Maya Lin",
    authorRole: "Astrobiology Specialist",
    date: "September 15, 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1507499739999-097706ad8914?auto=format&fit=crop&w=800&q=80",
    fallbackGradient: "from-cyan-950 to-blue-950",
    excerpt: "Subsurface oceans beneath icy crusts are kept liquid by tidal heating and may host chemosynthetic ecosystems around hydrothermal vents.",
    takeaways: [
      "Orbital resonance with Jupiter and Saturn drives tidal flexing, heating rocky moon cores.",
      "Cryovolcanic geysers erupting from Enceladus's south pole contain molecular hydrogen and complex organics.",
      "Thermal melt probes (cryobots) are being engineered to penetrate tens of kilometers of ice shells."
    ],
    sections: [
      {
        paragraphs: [
          "For decades, the search for extraterrestrial life focused narrowly on Earth-like worlds orbiting close to stars. However, some of the most habitable habitats in the solar system reside in the outer realm beneath thick ice crusts.",
          "Gravitational tidal friction from massive gas giants flexes and kneads the rocky interiors of ocean worlds, generating internal geothermal heat independent of solar radiation."
        ]
      },
      {
        heading: "1. Hydrothermal Plumes on Enceladus",
        paragraphs: [
          "The Cassini spacecraft flew directly through active cryovolcanic plumes spewing from Enceladus's south polar tiger stripes. Mass spectrometry confirmed water vapor, salts, silica nanoparticles, methane, and molecular hydrogen (H2).",
          "Molecular hydrogen indicates active serpentinization reactions occurring on the sea floor, providing the chemical energy gradients necessary to sustain methanogenic microbial ecosystems."
        ]
      }
    ]
  },
  {
    id: 10,
    title: "Space Weather & Solar Storms: Safeguarding Earth's Grid",
    category: "Space Tech & Future Science",
    author: "Dr. Alistair Vance",
    authorRole: "Senior Cosmologist & Lead Writer",
    date: "September 10, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?auto=format&fit=crop&w=800&q=80",
    fallbackGradient: "from-purple-950 to-slate-900",
    excerpt: "Coronal mass ejections unleash magnetic shockwaves capable of knocking out satellite constellations and high-voltage terrestrial power grids.",
    takeaways: [
      "Coronal Mass Ejections (CMEs) propel billions of tons of magnetized plasma across interplanetary space.",
      "Geomagnetically Induced Currents (GIC) penetrate electrical grids and burn high-voltage transformer cores.",
      "Early warning satellites at the Sun-Earth L1 point afford electrical grid operators 30 to 60 minutes to mitigate damage."
    ],
    sections: [
      {
        paragraphs: [
          "Our modern technological civilization is suspended in an active space weather environment driven by the solar dynamo. The Sun's magnetic cycles produce explosive solar flares and coronal mass ejections (CMEs) that can severely disturb Earth's magnetosphere.",
          "A major event on par with the 1859 Carrington Event could inflict widespread disruptions on satellite constellations, GPS positioning, aviation avionics, and electrical transmission systems."
        ]
      },
      {
        heading: "1. Magnetic Reconnection & Space Storm Dynamics",
        paragraphs: [
          "When magnetic field lines on the solar corona twist under stress, they abruptly snap and reconnect, releasing immense kinetic energy. Billions of tons of ionized hydrogen and helium plasma speed across the solar system at speeds exceeding 2,000 km/s.",
          "Upon collision with Earth's protective magnetic field, these charged particles induce powerful geomagnetic currents in long-distance electrical cables, inducing transformer saturation and thermal failure."
        ]
      }
    ]
  }
];

export const CATEGORIES = [
  "All",
  "Deep Space & Cosmology",
  "Space Exploration & Rockets",
  "Astronomy & Astrophysics",
  "Space Tech & Future Science"
];
