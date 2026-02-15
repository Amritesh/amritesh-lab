export interface Project {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  description: string;
  tags: string[];
  domain: "Physics" | "Finance" | "Behavior" | "Games" | "Tools";
  tech: ("Three.js" | "React" | "Node" | "Python" | "ML")[];
  interactionType: "Simulator" | "Game" | "Visualizer" | "Evaluator";
  thumbnail: string; // Gradient placeholder for now
  thumbnailImg?: string; // Image path
  images: string[];
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
  year: string;
  details: {
    whatYouInteractWith: string[];
    coreModel: string;
    engineering: string;
    results: string;
  };
}

export const projects: Project[] = [
  {
    id: "rose-sim",
    title: "Rose Simulator",
    slug: "rose-simulator",
    shortDescription: "Procedural 3D rose generation based on mathematical phyllotaxis.",
    description: "An interactive botanical simulation that generates realistic rose structures using polar coordinate mathematics. It explores how simple algorithmic rules can give rise to organic complexity.",
    domain: "Physics",
    tech: ["Three.js", "React"],
    interactionType: "Visualizer",
    tags: ["Procedural Generation", "Math", "Botany"],
    thumbnail: "bg-gradient-to-br from-rose-500 to-pink-900",
    images: [],
    demoUrl: "https://amritesh.github.io/Physics/rose",
    githubUrl: "https://github.com/Amritesh/Physics/tree/main/rose",
    featured: true,
    year: "7th Feb 2026",
    details: {
      whatYouInteractWith: ["Petal density", "Bloom stage", "Color genetics", "Wind simulation"],
      coreModel: "Based on the Rose (mathematics) polar equation r = cos(kθ) adapted for 3D surfaces with phyllotaxis positioning.",
      engineering: "Custom shader material for petal velvet texture; instanced mesh rendering for performance at high petal counts.",
      results: "Successfully models 90% of rose varieties found in nature through parameter tweaking alone."
    }
  },
  {
    id: "schrodinger-wave",
    title: "Schrödinger Wave Orbital",
    slug: "schrodinger-wave",
    shortDescription: "Real-time visualization of quantum wave functions.",
    description: "A visually stunning simulation of hydrogen atom orbitals derived from the Schrödinger equation. It bridges the gap between abstract quantum mechanics and visual intuition.",
    domain: "Physics",
    tech: ["Three.js", "React"],
    interactionType: "Simulator",
    tags: ["Quantum Mechanics", "Volumetric", "Science"],
    thumbnail: "bg-gradient-to-br from-blue-600 to-cyan-900",
    images: [],
    demoUrl: "https://amritesh.github.io/Physics/single.html",
    githubUrl: "https://github.com/Amritesh/Physics",
    featured: true,
    year: "8th Feb 2026",
    details: {
      whatYouInteractWith: ["Quantum numbers (n, l, m)", "Probability density threshold", "Slice planes"],
      coreModel: "Direct volumetric raymarching of the hydrogen wavefunction ψ(r,θ,φ).",
      engineering: "Implemented via custom GLSL raymarcher in a single R3F canvas; optimized with empty-space skipping.",
      results: "Provides an intuitive understanding of probability clouds vs classical orbits."
    }
  },
  {
    id: "chocolate-game",
    title: "Chocolate",
    slug: "chocolate-game",
    shortDescription: "Mathematical strategy game based on poset theory.",
    description: "A digital implementation of the impartial game played on a grid of chocolate bars. Features an AI opponent that uses minimax to demonstrate solving finite games.",
    domain: "Games",
    tech: ["React"],
    interactionType: "Game",
    tags: ["Game Theory", "AI", "Strategy"],
    thumbnail: "bg-gradient-to-br from-amber-600 to-orange-900",
    images: [],
    demoUrl: "https://amritesh.github.io/Games/",
    githubUrl: "https://github.com/Amritesh/Games",
    featured: false,
    year: "9th Feb 2026",
    details: {
      whatYouInteractWith: ["Grid dimensions", "AI difficulty", "Move history"],
      coreModel: "Implements the Sprague-Grundy theorem for combinatorial game theory.",
      engineering: "React state for grid management; Web Worker for AI calculation to prevent UI freeze.",
      results: "Visual proof that the first player has a winning strategy in rectangular grids."
    }
  },
  {
    id: "atom-sim",
    title: "Fine-Structure Atom",
    slug: "atom-simulation",
    shortDescription: "Interactive atom model with variable physical constants.",
    description: "A sandbox simulation that lets you tweak the fine-structure constant (α) and observe how it impacts electron velocity and orbital stability in a relativistic model.",
    domain: "Physics",
    tech: ["Three.js", "React"],
    interactionType: "Simulator",
    tags: ["Physics", "Education", "Interactive"],
    thumbnail: "bg-gradient-to-br from-violet-600 to-purple-900",
    images: [],
    demoUrl: "https://amritesh.github.io/Physics/",
    githubUrl: "https://github.com/Amritesh/Physics",
    featured: false,
    year: "10th Feb 2026",
    details: {
      whatYouInteractWith: ["Fine-structure constant", "Electron count", "Nucleus size"],
      coreModel: "Bohr-Sommerfeld model extended with relativistic corrections.",
      engineering: "Uses a hybrid particle system for electrons and instanced geometry for the nucleus.",
      results: "Demonstrates why a universe with slightly different constants might not support chemistry."
    }
  },
  {
    id: "planet-finder",
    title: "Stars",
    slug: "planet-finder",
    shortDescription: "AR-lite mobile astronomy tool.",
    description: "A mobile-first web app that helps users locate planets in the night sky based on their geolocation and device orientation.",
    domain: "Tools",
    tech: ["React"],
    interactionType: "Visualizer",
    tags: ["Astronomy", "Mobile", "Sensors"],
    thumbnail: "bg-gradient-to-br from-indigo-600 to-blue-950",
    images: [],
    demoUrl: "https://amritesh.github.io/Stars/",
    githubUrl: "https://github.com/Amritesh/Stars",
    featured: false,
    year: "11th Feb 2026",
    details: {
      whatYouInteractWith: ["Time slider", "Location override", "Device orientation"],
      coreModel: "Keplerian orbital elements calculation to determine RA/Dec relative to observer.",
      engineering: "Accesses DeviceOrientation API and Geolocation API; uses Three.js for the celestial sphere.",
      results: "Functional MVP for backyard astronomy without installing native apps."
    }
  },
  {
    id: "income-guesser",
    title: "LifeStyleIQ",
    slug: "income-guesser",
    shortDescription: "Bias-checking game based on Dollar Street.",
    description: "A game that challenges your preconceptions about global living standards. Can you guess a family's income just by looking at their toothbrush or front door?",
    domain: "Behavior",
    tech: ["React", "Node"],
    interactionType: "Game",
    tags: ["Sociology", "Data", "Quiz"],
    thumbnail: "bg-gradient-to-br from-teal-600 to-teal-900",
    images: [],
    demoUrl: "https://amritesh.github.io/LifestyleIQ/",
    githubUrl: "https://github.com/Amritesh/LifestyleIQ",
    featured: true,
    year: "12th Feb 2026",
    details: {
      whatYouInteractWith: ["Multiple choice selection", "Category filters", "Region filters"],
      coreModel: "Statistical comparison of user guesses vs actual Gapminder data.",
      engineering: "Next.js for static site generation of quiz pages; localized storage for score tracking.",
      results: "Reveals that most users underestimate the similarities in middle-income lifestyles globally."
    }
  },
  {
    id: "sheep-asmr",
    title: "Nature",
    slug: "sheep-grazing",
    shortDescription: "Behavior-driven herding simulation.",
    description: "A relaxing 'game' where you influence a flock of sheep not by direct control, but by modifying the behavior of their sheepdogs. A study in emergent flocking dynamics.",
    domain: "Behavior",
    tech: ["Three.js", "React", "ML"],
    interactionType: "Game",
    tags: ["Boids", "AI", "Relaxation"],
    thumbnail: "bg-gradient-to-br from-emerald-600 to-green-900",
    thumbnailImg: "/nature.png",
    images: [],
    demoUrl: "https://amritesh.github.io/Nature/",
    githubUrl: "https://github.com/Amritesh/Nature",
    featured: true,
    year: "13th Feb 2026",
    details: {
      whatYouInteractWith: ["Dog aggression/radius", "Grass growth rate", "Flock cohesion"],
      coreModel: "Reynolds' Boids algorithm modified with predatory avoidance and resource seeking.",
      engineering: "Spatial hashing for efficient neighbor lookup in large flocks (1000+ entities).",
      results: "Creates organic, unpredictable patterns that mimic real biological systems."
    }
  },
  {
    id: "stock-eval",
    title: "Stocks",
    slug: "stock-evaluator",
    shortDescription: "Monte Carlo & LSMC options pricer with real-time data.",
    description: "A comprehensive financial analysis tool that fetches real-time stock data (like HDFCBANK.NS) and performs Monte Carlo simulations to evaluate trade risks and value options. It features a calibrated engine for precise market modeling.",
    domain: "Finance",
    tech: ["Python", "React", "Node"],
    interactionType: "Evaluator",
    tags: ["FinTech", "Data Viz", "Statistics", "Monte Carlo"],
    thumbnail: "bg-gradient-to-br from-slate-600 to-slate-900",
    thumbnailImg: "/stocks.png",
    images: ["/stock-evaluator-screenshot.png", "/github-repo.png"],
    demoUrl: "https://amritesh.github.io/Stocks/",
    githubUrl: "https://github.com/Amritesh/Stocks",
    featured: true,
    year: "14th-15th Feb 2026",
    details: {
      whatYouInteractWith: ["Real-time Stock Ticker", "Simulation Parameters", "Risk Analysis Visualization"],
      coreModel: "Advanced Monte Carlo simulation engine calibrated with real-time market data.",
      engineering: "Modern full-stack architecture with React frontend, Node.js/Python backend, and Three.js for immersive data visualization.",
      results: "Provides actionable insights into stock trends and option pricing through rigorous statistical modeling."
    }
  },
  {
    id: "portfolio-site",
    title: "Portfolio",
    slug: "portfolio",
    shortDescription: "The website you are currently visiting.",
    description: "My personal portfolio website built with Next.js, Three.js, and Tailwind CSS. It showcases my projects and skills in an interactive and visually appealing way.",
    domain: "Tools",
    tech: ["React", "Three.js", "Node"],
    interactionType: "Visualizer",
    tags: ["Portfolio", "Web Dev", "Design"],
    thumbnail: "bg-gradient-to-br from-gray-600 to-gray-900",
    images: [],
    demoUrl: "https://amritesh.github.io/",
    githubUrl: "https://github.com/Amritesh/portfolio",
    featured: true,
    year: "16th Feb 2026",
    details: {
      whatYouInteractWith: ["Project Cards", "3D Scene", "Contact Form"],
      coreModel: "Interactive web application structure.",
      engineering: "Next.js App Router, Tailwind CSS for styling, Three.js for 3D elements.",
      results: "A modern, responsive portfolio that effectively communicates my skills and experience."
    }
  }
];
