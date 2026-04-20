import type { BootcampConfig } from "@vizuara/ui";
import type {
  ShowcaseSectionConfig,
  CertificateSectionConfig,
  VenuesMarqueeConfig,
  MarketStatsSectionConfig,
  NextCohortPopupConfig,
  ContactSectionConfig,
} from "@vizuara/ui";
import {
  INSTRUCTOR_SREEDATH,
  INSTRUCTOR_RAJ,
  INSTRUCTOR_RAJAT,
  DEEPSEEK_BOOK,
} from "@vizuara/ui";

export const showcaseConfig: ShowcaseSectionConfig = {
  label: "Applications",
  title: "What You Can Do with SciML",
  subtitle:
    "From modeling pandemics to discovering equations, SciML enables research-grade applications across every scientific domain.",
  items: [
    {
      src: "/sciml/covid-gif.gif",
      alt: "COVID-19 Forecasting with SciML",
      title: "COVID-19 Forecasting with SciML",
    },
    {
      src: "/sciml/pinn.jpg",
      alt: "Physics Informed Neural Network",
      title: "Physics Informed Neural Network",
    },
    {
      src: "/sciml/ude-graph.jpg",
      alt: "Universal Differential Equations",
      title: "Universal Differential Equations",
    },
    {
      src: "/sciml/tumor-ude.gif",
      alt: "Cancer Tumor: growth or death modeling using UDEs",
      title: "Cancer Tumor: Growth or Death",
    },
    {
      src: "/sciml/discovering-equations.gif",
      alt: "Discovering equations using Machine Learning",
      title: "Discovering Equations Using ML",
    },
  ],
};

export const certificateConfig: CertificateSectionConfig = {
  label: "Credentials",
  title: "Learn from MIT PhD Researchers",
  subtitle:
    "Our lead instructor Dr. Raj Dandekar holds a PhD from MIT, where he conducted research at the Julia Lab under Prof. Alan Edelman and Chris Rackauckas, the creators of the SciML ecosystem.",
  imageSrc: "/sciml/mit-certificate.jpeg",
  imageAlt: "MIT Certificate of Dr. Raj Dandekar",
};

export const bootcampConfig: BootcampConfig = {
  meta: {
    title: "Scientific Machine Learning Research Bootcamp | Vizuara AI Labs",
    description:
      "The world's first Scientific ML research bootcamp. Learn Physics-Informed Neural Networks, Neural ODEs, and Universal Differential Equations using Julia. Taught by MIT and Purdue AI PhDs.",
    keywords: [
      "scientific machine learning",
      "SciML",
      "physics-informed neural networks",
      "PINNs",
      "neural ODEs",
      "universal differential equations",
      "Julia programming",
      "research bootcamp",
      "Vizuara AI Labs",
    ],
    ogTitle: "Scientific ML Research Bootcamp | Vizuara AI Labs",
    ogDescription:
      "Learn to combine physics and machine learning. Master PINNs, Neural ODEs, and UDEs with hands-on research projects in Julia.",
  },

  navbar: {
    links: [
      { label: "Frameworks", href: "#why" },
      { label: "Curriculum", href: "#curriculum" },
      { label: "Research", href: "#research" },
      { label: "Instructors", href: "#instructors" },
      { label: "Pricing", href: "#pricing" },
    ],
    ctaLabel: "Enroll Now",
    ctaHref: "#pricing",
  },

  hero: {
    badge: "World's First Scientific ML Bootcamp",
    headline: "Scientific Machine Learning",
    headlineHighlight: "Research Bootcamp",
    headlineSuffix: "",
    subtitle:
      "Work on impactful SciML research projects. Present at top-tier venues. Convert projects into publications. Build physics-grounded ML models using Julia and the SciML ecosystem.",
    scheduleItems: [
      { iconName: "Users", text: "100+ Participants", color: "text-primary" },
      { iconName: "BookOpen", text: "20+ Publications", color: "text-secondary" },
      { iconName: "Clock", text: "15+ Topics", color: "text-primary" },
      { iconName: "Code2", text: "Julia Programming", color: "text-secondary" },
      { iconName: "FlaskConical", text: "Research Projects", color: "text-primary" },
    ],
    stats: [
      { value: "100+", label: "Students Trained" },
      { value: "8+", label: "Hands-on Sessions" },
      { value: "3", label: "MIT/Purdue PhDs" },
      { value: "100%", label: "Research-Grade Content" },
    ],
    ctaPrimary: { label: "Enroll Now", href: "#pricing" },
    ctaSecondary: { label: "Watch Intro", href: "#video" },
    universityLogos: [
      { src: "/logos/mit-logo.png", alt: "MIT", width: 80 },
      { src: "/logos/iitmadras-logo.png", alt: "IIT Madras", width: 120 },
      { src: "/logos/purdue-logo.png", alt: "Purdue University", width: 100 },
    ],
    universityLabel: "Instructors from",
  },

  video: {
    badge: "Hear From Our Co-founder",
    badgeIconName: "Play",
    label: "Watch",
    heading: "Hear From",
    headingHighlight: "Dr. Raj Dandekar",
    headingSuffix: "(MIT PhD)",
    youtubeUrl: "https://player.vimeo.com/video/903949679?title=0&byline=0&portrait=0",
    youtubeTitle: "Hear From Our Co-founder Dr. Raj Dandekar (MIT PhD)",
  },

  why: {
    label: "Three Core Frameworks",
    title: "The Pillars of Scientific Machine Learning",
    subtitle:
      "We teach three interconnected frameworks that form the foundation of modern Scientific ML. Each represents a different way to combine physics with neural networks, from embedding constraints in loss functions to replacing unknowns in differential equations.",
    items: [
      {
        iconName: "FlaskConical",
        title: "Scientific Machine Learning",
        description:
          "The overarching paradigm that integrates domain knowledge with data-driven learning. SciML models achieve great forecasting with just 20% of the data traditional ML requires, because they leverage structural knowledge from physics, biology, and engineering.",
        color: "text-primary",
      },
      {
        iconName: "Brain",
        title: "Physics-Informed Neural Networks",
        description:
          "PINNs embed differential equations, conservation laws, and boundary conditions directly into the neural network's loss function. The network learns to satisfy both the data and the governing physics simultaneously, producing solutions that are physically consistent by construction.",
        color: "text-secondary",
      },
      {
        iconName: "TrendingUp",
        title: "Neural ODEs and Universal Differential Equations",
        description:
          "Neural ODEs replace ODE right-hand sides with neural networks for fully data-driven dynamics. UDEs go further: they keep known physics terms intact while using neural networks only for unknown components, enabling symbolic recovery of closed-form equations.",
        color: "text-primary",
      },
      {
        iconName: "Code2",
        title: "Julia + SciML Ecosystem",
        description:
          "Julia's composable ecosystem (DifferentialEquations.jl, Lux.jl, Optimization.jl) integrates ODE solvers and neural networks seamlessly. Julia is as fast as C, as readable as Python, and has native support for automatic differentiation.",
        color: "text-secondary",
      },
      {
        iconName: "Brain",
        title: "Interpretable and Symbolic Recovery",
        description:
          "Unlike black-box ML, SciML produces models grounded in physical laws. After training, use symbolic regression to recover closed-form equations from neural networks, achieving full interpretability of learned dynamics.",
        color: "text-primary",
      },
      {
        iconName: "Target",
        title: "Cross-Domain Applications",
        description:
          "Apply these frameworks to computational physics, ecology, economics, health, fluid dynamics, climate science, and more. Any domain with partially known governing equations benefits from this hybrid approach.",
        color: "text-secondary",
      },
    ],
  },

  diagrams: {
    label: "Visual Framework",
    title: "How Scientific ML Works",
    subtitle:
      "Publication-quality diagrams illustrating the core frameworks you will master in this bootcamp.",
    diagrams: [
      {
        src: "/diagrams/sciml-overview.png",
        alt: "Scientific Machine Learning overview showing PINNs, Neural ODEs, and UDEs",
        title: "The SciML Landscape",
        description:
          "Input data flows through three complementary frameworks: Physics-Informed Neural Networks embed constraints in loss functions, Neural ODEs learn continuous dynamics, and Universal Differential Equations combine known physics with neural networks for unknown terms.",
      },
      {
        src: "/diagrams/ude-architecture.png",
        alt: "Universal Differential Equation architecture and training loop",
        title: "Universal Differential Equations",
        description:
          "The UDE training pipeline: known physics is preserved while neural networks approximate unknown dynamics. The ODE solver produces predictions, the loss function compares against data, adjoint methods compute gradients, and symbolic regression recovers closed-form equations.",
      },
      {
        src: "/diagrams/pinn-training.png",
        alt: "PINN training process with physics, data, and boundary condition losses",
        title: "Physics-Informed Neural Network Training",
        description:
          "A neural network takes spatiotemporal coordinates as input and outputs the solution. Three weighted loss terms enforce data fidelity, PDE residuals, and boundary/initial conditions, ensuring physically consistent predictions.",
      },
    ],
  },

  audience: {
    label: "Who Is This For",
    title: "Designed for Researchers, Engineers, and Scientists",
    subtitle:
      "Whether you come from physics, engineering, economics, or biology, this bootcamp teaches you to integrate machine learning with your existing domain expertise.",
    items: [
      {
        iconName: "GraduationCap",
        title: "Graduate Researchers",
        description:
          "PhD students and postdocs who want to apply ML to their domain (physics, biology, chemistry, ecology) while preserving theoretical rigor.",
        tags: ["PhD Students", "Postdocs", "Research Scholars"],
      },
      {
        iconName: "Wrench",
        title: "Engineers",
        description:
          "Mechanical, chemical, civil, and aerospace engineers looking to augment traditional simulation methods with data-driven hybrid approaches.",
        tags: ["Mechanical", "Chemical", "Aerospace", "Civil"],
      },
      {
        iconName: "BarChart3",
        title: "Data Scientists",
        description:
          "ML practitioners who want to move beyond black-box models and build physics-constrained systems that generalize better with less data.",
        tags: ["ML Engineers", "Applied Scientists", "Analysts"],
      },
      {
        iconName: "BookOpen",
        title: "Domain Experts",
        description:
          "Economists, biologists, climate scientists, and other domain specialists looking to incorporate ML into their mathematical models.",
        tags: ["Economists", "Biologists", "Climate Scientists"],
      },
    ],
  },

  curriculum: {
    label: "Curriculum",
    title: "A Guided Journey from Foundations to Research",
    subtitle:
      "15 topics spanning Julia programming, ODE/PDE modeling, PINNs, Neural ODEs, UDEs, and hands-on research projects aimed at publication.",
    days: [
      {
        day: 1,
        week: 1,
        title: "Intro and Transition to ML",
        iconName: "BookOpen",
        topics: [
          "Introduction to the course",
          "How traditional ML is taught",
          "How SciML offers a better path for domain experts",
        ],
        exercise: "Map your domain expertise to potential SciML applications",
        instructor: "Dr. Raj Dandekar",
      },
      {
        day: 2,
        week: 1,
        title: "SciML Technical Overview",
        iconName: "Brain",
        topics: [
          "Introduction to Scientific Machine Learning",
          "Basics of SciML and core concepts",
          "Problems which can be solved using SciML",
          "How you can transition to ML from any field",
        ],
        exercise: "Identify three problems in your domain that SciML can solve",
        instructor: "Dr. Raj Dandekar",
      },
      {
        day: 3,
        week: 1,
        title: "The Julia Programming Language",
        iconName: "Code2",
        topics: [
          "What is Julia and why it is the coolest new language",
          "Installing and setting up Julia",
          "Julia fundamentals for scientific computing",
          "The SciML ecosystem overview",
        ],
        exercise: "Write your first Julia program and explore the REPL",
        instructor: "Dr. Raj Dandekar",
      },
      {
        day: 4,
        week: 2,
        title: "Running ODEs in Julia",
        iconName: "Layers",
        topics: [
          "What are ODEs and PDEs?",
          "Differential equations in Julia with DifferentialEquations.jl",
          "Building your first ODE in Julia using hands-on examples",
          "Numerical solvers and sensitivity analysis",
        ],
        exercise: "Model a SIR epidemiology equations in Julia",
        instructor: "Dr. Raj Dandekar",
      },
      {
        day: 5,
        week: 2,
        title: "Running PDEs in Julia",
        iconName: "Layers",
        topics: [
          "Introduction to partial differential equations",
          "Building your first PDE in Julia using hands-on examples",
          "Numerical discretization methods",
          "Boundary and initial conditions",
        ],
        exercise: "Solve a 1D Schrodinger equation numerically in Julia",
        instructor: "Dr. Raj Dandekar",
      },
      {
        day: 6,
        week: 2,
        title: "Neural Networks, Gradient Descent, and Backpropagation",
        iconName: "Brain",
        topics: [
          "What are weights, biases, and activation functions?",
          "What is gradient descent optimization?",
          "How are weights of neural networks optimized?",
          "Building neural networks in Julia with Lux.jl",
        ],
        exercise: "Train a neural network to approximate a known physical function",
        instructor: "Dr. Raj Dandekar",
      },
      {
        day: 7,
        week: 3,
        title: "PINNs: Theory",
        iconName: "Shield",
        topics: [
          "What are Physics-Informed Neural Networks (PINNs)?",
          "The PINN framework: embedding physics in the loss function",
          "Data loss, physics loss, and boundary condition loss terms",
          "Weighted loss balancing strategies",
        ],
        exercise: "Derive the PINN loss function for a simple ODE problem",
        instructor: "Dr. Raj Dandekar",
      },
      {
        day: 8,
        week: 3,
        title: "PINNs: Practical",
        iconName: "FlaskConical",
        topics: [
          "Building your first PINN in Julia",
          "Applications of PINNs to real-world problems",
          "Solving forward and inverse problems with PINNs",
          "Debugging and optimizing PINN training",
        ],
        exercise: "Build a PINN to solve a 1D wave equation",
        instructor: "Dr. Raj Dandekar",
      },
      {
        day: 9,
        week: 3,
        title: "Neural ODEs: Theory",
        iconName: "Zap",
        topics: [
          "The 3 Pillars of Scientific Machine Learning",
          "What are Neural ODEs?",
          "Adjoint sensitivity methods for efficient backpropagation",
          "Comparison with discrete residual networks",
        ],
        exercise: "Understand the adjoint method on a toy dynamical system",
        instructor: "Dr. Raj Dandekar",
      },
      {
        day: 10,
        week: 4,
        title: "Neural ODEs: Practical",
        iconName: "Zap",
        topics: [
          "Building your first Neural ODE in Julia",
          "Applications of Neural ODEs",
          "Implementing a Neural ODE model end-to-end",
          "Training on time-series data",
        ],
        exercise: "Train a Neural ODE on SIR system data",
        instructor: "Dr. Raj Dandekar",
      },
      {
        day: 11,
        week: 4,
        title: "UDEs: Theory",
        iconName: "Target",
        topics: [
          "What are Universal Differential Equations (UDEs)?",
          "Known physics + neural network for unknown terms",
          "Training strategies: Adam + LBFGS two-phase optimization",
          "Symbolic regression to recover closed-form equations",
        ],
        exercise: "Derive the UDE formulation for the Lotka-Volterra system",
        instructor: "Dr. Raj Dandekar",
      },
      {
        day: 12,
        week: 4,
        title: "UDEs: Practical",
        iconName: "Target",
        topics: [
          "Building your first UDE in Julia",
          "Applications of UDEs across domains",
          "Recovering symbolic equations from trained neural networks",
          "End-to-end UDE pipeline",
        ],
        exercise: "Build a UDE for the Lotka-Volterra system with unknown interaction terms",
        instructor: "Dr. Raj Dandekar",
      },
      {
        day: 13,
        week: 5,
        title: "Research Project: COVID-19 Forecasting with SciML",
        iconName: "FlaskConical",
        mega: true,
        accentColor: "amber",
        topics: [
          "SIR/SEIR compartmental models for disease spread",
          "Applying UDEs to learn unknown transmission dynamics",
          "Incorporating real-world COVID-19 data",
          "Converting project results into a research publication",
        ],
        exercise: "Build a UDE-augmented epidemic model and validate on real data",
        instructor: "Dr. Raj Dandekar",
      },
      {
        day: 14,
        week: 5,
        title: "Research Project: Black Hole Dynamics",
        iconName: "Star",
        mega: true,
        accentColor: "violet",
        topics: [
          "Discovering equations using ML",
          "Geodesic equations in general relativity",
          "SciML for astrophysics: combining known spacetime geometry with learned corrections",
          "Scientific visualization and publication-ready figures",
        ],
        exercise: "Simulate and visualize particle orbits near a Schwarzschild black hole using SciML",
        instructor: "Dr. Raj Dandekar",
      },
      {
        day: 15,
        week: 5,
        title: "Research Project: Cancer Tumor Modeling",
        iconName: "FlaskConical",
        mega: true,
        accentColor: "amber",
        topics: [
          "Modeling tumor growth and treatment response with SciML",
          "Physics-informed approaches to biological systems",
          "UDEs for partially known biological dynamics",
          "Preparing results for publication in top-tier venues",
        ],
        exercise: "Build a SciML model for cancer tumor growth or death dynamics",
        instructor: "Dr. Sreedath Panat",
      },
    ],
    weekLabels: {
      1: { label: "Week 1: Introduction", sessions: "Topics 1-3" },
      2: { label: "Week 2: Julia and Differential Equations", sessions: "Topics 4-6" },
      3: { label: "Week 3: PINNs and Neural ODEs Theory + Practice", sessions: "Topics 7-9" },
      4: { label: "Week 4: Neural ODEs and UDEs Practice", sessions: "Topics 10-12" },
      5: { label: "Research and Publication", sessions: "Topics 13-15" },
    },
  },

  deliverables: {
    label: "What You Get",
    title: "Research-Grade Deliverables",
    subtitle:
      "Everything you need to go from SciML beginner to publishing research-quality results in your domain.",
    items: [
      {
        iconName: "Code2",
        title: "Complete Julia Codebase",
        description:
          "Production-ready Julia code for every session, including PINNs, Neural ODEs, UDEs, and research projects.",
        features: [
          "All lecture code files and notebooks",
          "Homework assignments with solutions",
          "Research project starter templates",
          "Fully documented SciML pipelines",
        ],
        gradient: "from-primary/20 to-secondary/20",
      },
      {
        iconName: "FileText",
        title: "Lecture Notes and Videos",
        description:
          "Lifetime access to all session recordings and comprehensive lecture notes covering every SciML concept.",
        features: [
          "HD video recordings of all sessions",
          "Detailed lecture notes in PDF format",
          "Annotated code walkthroughs",
          "Reference material and reading lists",
        ],
        gradient: "from-secondary/20 to-primary/20",
      },
      {
        iconName: "FlaskConical",
        title: "Research Project Portfolio",
        description:
          "Two complete research projects (COVID-19 modeling and black hole dynamics) ready for your portfolio or publication.",
        features: [
          "COVID-19 epidemic modeling with UDEs",
          "Black hole dynamics visualization",
          "Reproducible research notebooks",
          "Publication-ready figures and results",
        ],
        gradient: "from-primary/20 to-secondary/20",
      },
      {
        iconName: "MessageSquare",
        title: "Community and Mentorship",
        description:
          "Join the Vizuara SciML community on Discord for ongoing collaboration, doubt clearance, and research partnerships.",
        features: [
          "Discord community access",
          "Student collaboration opportunities",
          "Assignment checking and doubt clearance",
          "Free access to all ML webinars",
        ],
        gradient: "from-secondary/20 to-primary/20",
      },
    ],
  },

  instructors: {
    label: "Your Instructors",
    title: "Learn from MIT and Purdue AI PhDs",
    subtitle:
      "Our instructors are co-founders of Vizuara AI Labs and published researchers in Scientific Machine Learning, with expertise spanning physics-informed methods, neural differential equations, and applied ML.",
    items: [
      {
        ...INSTRUCTOR_RAJ,
        session: "PINNs, Neural ODEs, UDEs, and COVID-19 Research Project",
      },
      {
        ...INSTRUCTOR_RAJAT,
        session: "Neural ODEs, Black Hole Dynamics Research Project",
      },
      {
        ...INSTRUCTOR_SREEDATH,
        session: "Neural Networks for SciML, PDEs, and Advanced Topics",
      },
    ],
    bookCallout: DEEPSEEK_BOOK,
  },

  researchPapers: {
    label: "Our Research",
    title: "Recent Papers From Our Research",
    subtitle:
      "A few recent SciML papers from our research over the past years. Students in the Researcher and Industry Professional plans work on similar projects aimed at publication.",
    papers: [
      {
        title:
          "Cross-Country Macroeconomic Forecasting Using Physics-Informed Neural Networks and Universal Differential Equations in Julia",
        authors:
          "Vrishank Sai Anand, Prathamesh Dinesh Joshi, Rajat Dandekar, Raj Dandekar, Sreedath Panat",
        venue: "JuliaCon",
        year: 2026,
        abstract:
          "A Julia-based study applying Physics-Informed Neural Networks and Universal Differential Equations to cross-country macroeconomic forecasting, combining economic theory with data-driven SciML methods.",
        thumbnail: "/papers/macroeconomic-pinn.png",
        tags: ["PINNs", "UDEs", "Macroeconomics"],
      },
      {
        title:
          "Fourier Feature Preconditioning of PINNs for High-Frequency Nonlinear Reaction-Diffusion Dynamics",
        authors:
          "Bramha Nimbalkar, Prathamesh Dinesh Joshi, Raj Dandekar, Rajat Dandekar, Sreedath Panat",
        venue: "JuliaCon",
        year: 2026,
        abstract:
          "Introduces Fourier feature preconditioning for Physics-Informed Neural Networks, improving learning of high-frequency nonlinear reaction-diffusion dynamics where standard PINNs struggle.",
        thumbnail: "/papers/fourier-pinn.png",
        tags: ["PINNs", "Fourier Features", "Reaction-Diffusion"],
      },
      {
        title:
          "When Does Physics Help? A Systematic Study of Physics-Guided Learning for Robotic Contact Dynamics",
        authors:
          "Chinmayee Prabhakar, Prathamesh Dinesh Joshi, Raj Dandekar, Rajat Dandekar, Sreedath Panat",
        venue: "ICLR Workshop on AI and Partial Differential Equations",
        year: 2026,
        abstract:
          "A systematic study of physics-guided learning for robotic contact dynamics, analyzing when embedding physical priors into neural network models yields measurable gains over purely data-driven baselines.",
        arxivUrl: "https://openreview.net/pdf?id=NsDwAHwNLB",
        thumbnail: "/papers/physics-guided-robotics.png",
        tags: ["PINNs", "Robotics", "Contact Dynamics"],
      },
      {
        title:
          "A Study of Universal ODE Approaches to Predicting Soil Organic Carbon",
        authors:
          "Satyanarayana Raju G V V, Prathamesh Dinesh Joshi, Raj Abhijit Dandekar, Rajat Dandekar, Sreedath Panat",
        venue: "EGU",
        year: 2026,
        abstract:
          "Applies Universal Differential Equations to predict soil organic carbon dynamics, combining known soil chemistry with data-driven learning of unknown processes for environmental science.",
        arxivUrl: "https://arxiv.org/pdf/2509.24306",
        thumbnail: "/papers/soil-carbon.png",
        tags: ["UDEs", "Environmental Science", "Soil Carbon"],
      },
      {
        title: "CLIMASIM — Climate Simulation with Scientific Machine Learning",
        authors:
          "Tirtha Tilak Pani, Prathamesh Dinesh Joshi, Raj Dandekar, Sreedath Panat, Rajat Dandekar",
        venue:
          "Second Workshop on XAI4Science: From Understanding Model Behavior to Discovering New Scientific Knowledge",
        year: 2025,
        abstract:
          "Climate simulation driven by Scientific Machine Learning, combining physics-based climate models with neural network components to enable scalable and interpretable climate forecasting.",
        arxivUrl: "https://openreview.net/pdf?id=snAnszFhzv",
        thumbnail: "/papers/climasim.png",
        tags: ["SciML", "Climate", "XAI4Science"],
      },
      {
        title:
          "Forecasting N-Body Dynamics: A Comparative Study of Neural Ordinary Differential Equations and Universal Differential Equations",
        authors:
          "RS Suriya, Prathamesh Dinesh Joshi, Rajat Dandekar, Raj Dandekar, Sreedath Panat",
        venue:
          "Second Workshop on XAI4Science: From Understanding Model Behavior to Discovering New Scientific Knowledge",
        year: 2025,
        abstract:
          "A comparative study of Neural ODEs and Universal Differential Equations for forecasting N-body dynamics, evaluating how each approach captures gravitational interactions and long-horizon stability.",
        arxivUrl: "https://openreview.net/pdf?id=nTCbEqff7e",
        thumbnail: "/papers/nbody-dynamics.png",
        tags: ["Neural ODEs", "UDEs", "N-Body Dynamics"],
      },
      {
        title:
          "EARS-UDE: Evaluating Auditory Response in Sensory Overload with Universal Differential Equations",
        authors:
          "Miheer Salunke, Prathamesh Dinesh Joshi, Raj Abhijit Dandekar, Rajat Dandekar, Sreedath Panat",
        venue: "NeurIPS Workshop",
        year: 2025,
        abstract:
          "Uses Universal Differential Equations to model auditory response under sensory overload, combining known neural dynamics with learned components to characterize perceptual thresholds.",
        arxivUrl: "https://arxiv.org/abs/2510.26804",
        thumbnail: "/papers/ears-ude.png",
        badge: "Spotlight",
        tags: ["UDEs", "Auditory", "Neuroscience"],
      },
      {
        title:
          "Physics-Informed Learning Near Critical Transitions: A Comparative Study of UDEs and Neural ODEs",
        authors:
          "Urvi Mahendra Bora, Prathamesh Dinesh Joshi, Raj Dandekar, Rajat Dandekar, Sreedath Panat",
        venue: "NeurIPS AI for Science Workshop",
        year: 2025,
        abstract:
          "A comparative study of Universal Differential Equations and Neural ODEs in modeling systems near critical transitions, analyzing how physics-informed priors improve stability and forecasting near tipping points.",
        arxivUrl: "https://openreview.net/pdf?id=kG26ovLE9l",
        thumbnail: "/papers/critical-transitions.png",
        tags: ["UDEs", "Neural ODEs", "Critical Transitions"],
      },
      {
        title:
          "Physics-Informed Neural Networks for Modeling Ocean Pollutant",
        authors:
          "Karishma Battina, Prathamesh Dinesh Joshi, Raj Abhijit Dandekar, Rajat Dandekar, Sreedath Panat",
        venue: "JuliaCon",
        year: 2025,
        abstract:
          "Applies PINNs to simulate ocean pollutant dispersion governed by the 2D advection-diffusion equation, embedding physical laws directly into neural network training for scalable oceanographic modeling.",
        arxivUrl: "https://arxiv.org/pdf/2507.08834",
        thumbnail: "/papers/ocean-pinn.png",
        tags: ["PINNs", "Oceanography", "PDEs"],
      },
    ],
  },

  testimonials: {
    label: "From the Community",
    title: "Stories from our researchers",
    subtitle:
      "Milestones, acceptances, and moments shared by Vizuara students and alumni on LinkedIn.",
    items: [
      {
        name: "Pranav Ramanathan",
        role: "Incoming Intern, Amazon · Queen Mary University of London",
        fullPost: `This summer, I set out to see if modern AI could crack the No-Three-in-Line problem, a combinatorial challenge that's remained open since 1917.

Today, I'm excited to share that our research is now live on arXiv.

The No-Three-in-Line problem asks a deceptively simple question: given an n×n grid, what's the maximum number of points you can place such that no three are collinear? The theoretical upper bound is 2n points, but finding configurations that achieve this becomes increasingly difficult as grids grow larger.

We tested three approaches head-to-head. Integer Linear Programming (Gurobi) achieved provably optimal solutions up to 19×19. PatternBoost, using transformer-based pattern learning, matched the 2n upper bound up to 14×14 despite never seeing optimal examples during training. Reinforcement learning (PPO) cracked 10×10 grids perfectly but stumbled at 11×11, making one fatal violation. You can watch it unfold below. The verdict? Classical optimisation still wins, but AI is catching up.

This paper wouldn't exist without the incredible people who believed in this work:

Thomas Prellberg and Matthew Lewis at QMUL School of Mathematical Sciences, whose guidance shaped every aspect of this research.

The team at Vizuara Technologies Private Limited: PRATHAMESH JOSHI, Raj Abhijit Dandekar, Rajat Dandekar, Sreedath Panat, for their collaboration and expertise in Scientific Machine Learning. More to come on that in 2026!

Caroline B. and the Broad Associates team, for the professional development that made STRIDE such a formative experience. And to the entire STRIDE programme team, thank you for making this possible.

As 2025 comes to a close, I'm grateful for a year of learning, building, and discovering. Here's to pushing the boundaries of what AI can do for mathematics in 2026.

Paper: https://lnkd.in/e8GKqGBs

#MachineLearning #ReinforcementLearning #Transformers #DeepLearning #Research #Mathematics #CombinatorialOptimisation`,
        linkedinUrl:
          "https://www.linkedin.com/posts/pranav-ramanathan_machinelearning-reinforcementlearning-transformers-ugcPost-7409888251085373440-Dnv-",
        embedUrl:
          "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7409888251085373440",
      },
      {
        name: "GVV Satyanarayana Raju",
        role: "ex Chief Project Manager · IIIT Hyderabad",
        fullPost: `The SciML is an amazing area and I liked it very much. Started the bootcamp by Vizuara AI Labs without any knowledge about the SciML and the bootcamp gave me enough confidence to apply to my research domain. I had applied SciML in Sustainable Agriculture for prediction of SOC using UDE, and it was published in arXiv and the abstract was accepted in EGU26. The course material, videos and assignments were very helpful. Dr. Raj Dandekar and Mr. Prathamesh were very helpful through out the journey, but the heavy lifting has to be done by the participants. The curiosity of the participant in learning SciML keeps him/her in good stead. The bootcamp is highly recommended for the participants to build a great graduate/researcher profile.`,
      },
      {
        name: "Kavya Subramanian",
        role: "Boston University",
        fullPost: `The Vizuara SciML Research Bootcamp gave me a strong foundation in Scientific Machine Learning and, more importantly, taught me how to think and operate like a researcher. It strikes a balance between leading your work and developing ideas independently, while receiving timely, constructive guidance from deeply knowledgeable mentors.

The structured coursework and assignments at the beginning gave me a deep understanding of core SciML concepts. As the program progressed, that foundation translated directly into original research which resulted in a first-author preprint as well as a talk and a poster presentation at multiple conferences.

I'm really grateful for the mentorship I received throughout, and would like to thank Dr. Raj, Dr. Rajat, Dr. Sreedath, and especially Prathamesh for their continued support and encouragement.`,
      },
      {
        name: "Ashutosh Shukla",
        role: "Software Engineer at Optum",
        fullPost: `I am excited to share that last week from August 4th-8th, I had the opportunity of presenting a poster at the Mathematical and Scientific Machine Learning (MSML) 2025 conference held in Naples, Italy.

I had the pleasure of presenting my research "Modeling Stellar Structure with Scientific Machine Learning".

I am deeply grateful to my mentors — Raj Abhijit Dandekar, Rajat Dandekar, Sreedath Panat, and PRATHAMESH JOSHI — for introducing me to the world of Scientific Machine Learning and for their constant guidance throughout this journey.`,
        linkedinUrl:
          "https://www.linkedin.com/posts/ashutosh-shukla15_i-am-excited-to-share-that-last-week-from-activity-7362048966315659264-6IGm",
        embedUrl:
          "https://www.linkedin.com/embed/feed/update/urn:li:activity:7362048966315659264",
      },
      {
        name: "Miheer Salunke",
        role: "Principal Software Engineer at Red Hat · Australia",
        fullPost: `I just had a very nice spotlight poster session for our research paper at AI For Science workshop at NeurIPS 2025. People were amazed to see our innovation where training some parts of the mathematical equations we curated referring exisiting literature can evaluate individual specific sensory parameters and thereby predict auditory overload of the individual and how the response calculated matched with the ground truth.

People understood that we dont always complex models and that we can start from basics and then evolve our models as per the use case.

Our Universal Differential Equation model used very low resources.
For example: 5mb of memory was used throughout the training which allows us this model to be used on wearables.

I felt very happy when people called this as an interesting innovation.
I hope this research helps autistic people and neurodivergent people. I sincerely hope people start researching AI more for the benefit of disabled people.

Research paper: https://lnkd.in/gq6dgnpb

More work is to be done to get this implemented for real world but we will make it happen.

Special Thanks to Raj Abhijit Dandekar and PRATHAMESH JOSHI for the guidance and review of the paper.

Also met an AI industry expert and entrepreneur Javier A. Garcia Sedano who gave me a very valuable guidance.`,
        linkedinUrl:
          "https://www.linkedin.com/posts/miheer-salunke-377a9428_i-just-had-a-very-nice-spotlight-poster-session-activity-7403554568787406848-az77",
        embedUrl:
          "https://www.linkedin.com/embed/feed/update/urn:li:activity:7403554568787406848",
      },
      {
        name: "Karishma Battina",
        role: "Senior DevOps Engineer · Commerce, United States",
        fullPost: `I'm happy to share that I'll be presenting my research on Physics-Informed Neural Networks (PINNs) for Ocean Pollutant Modeling at JuliaCon 2026 — where researchers and developers collaborate to push Scientific Computing forward!

Using Julia's powerful ecosystem, I developed a PINN-based framework to solve the 2D advection-diffusion equation, enabling fast and accurate predictions of oceanic pollution hotspots. Key highlights include:
• Hyperparameter optimization for robust performance
• Computational efficiency (PINNs vs. traditional solvers)

When I initially explored Scientific Machine Learning, my goal was to work on solutions with real-world impact and tangible benefits. Huge thanks to my mentors, PRATHAMESH JOSHI, Raj Abhijit Dandekar, Rajat Dandekar, Sreedath Panat, Vizuara Technologies Private Limited team, who have been instrumental in shaping this research.

Looking forward to sharing our findings and connecting with fellow researchers at JuliaCon 2025!

#SciML #JuliaLang #JuliaCon2025 #PINNs`,
        linkedinUrl:
          "https://www.linkedin.com/posts/karishma-battina-071589ab_physics-informed-neural-network-for-ocean-activity-7338693187625959427-nbrH",
        embedUrl:
          "https://www.linkedin.com/embed/feed/update/urn:li:activity:7338693187625959427",
      },
    ],
  },

  pricing: {
    label: "Pricing",
    title: "Enroll in the Bootcamp",
    subtitle:
      "Choose the plan that matches your goals, from self-paced learning to intensive research mentorship with MIT PhDs.",
    plans: [
      {
        name: "Student Plan",
        price: "Rs 17,000",
        description:
          "Save 43%. Originally Rs 30,000.",
        features: [
          "Lifetime access to all videos, code files, and homework assignments",
        ],
        href: "https://flyvidesh.online/courses/sciml-3/",
        cta: "Enroll Now",
        popular: false,
        variant: "secondary",
      },
      {
        name: "Community Plan",
        price: "Rs 37,500",
        description:
          "Save 38%. Originally Rs 60,000.",
        features: [
          "Lifetime access to all videos, code files, and homework assignments",
          "Access to bootcamp community on Discord",
          "Student collaborations on Discord for potential publications",
          "Assignment checking and doubt clearance",
          "Free access to all ML webinars throughout the year",
        ],
        href: "https://flyvidesh.online/courses/sciml-3-2/",
        cta: "Enroll Now",
        popular: false,
        variant: "secondary",
      },
      {
        name: "Researcher Plan",
        price: "Rs 95,000",
        description:
          "Save 24%. Originally Rs 1,25,000. Publish a paper in SciML with MIT and Purdue PhDs.",
        features: [
          "Lifetime access to all videos, code files, and homework assignments",
          "Assignment checking and doubt clearance",
          "Free access to all ML webinars throughout the year",
          "Access to open list of research problems in SciML",
          "Selection of research topic",
          "3-4 month personalized guidance in doing research",
          "Publishing the research in conferences/journals",
        ],
        href: "https://flyvidesh.online/courses/sciml",
        cta: "Enroll Now",
        popular: true,
        variant: "primary",
      },
      {
        name: "Industry Professional",
        price: "Rs 1,20,000",
        description:
          "Save 20%. Originally Rs 1,50,000. MIT and Purdue PhDs as your industry advisors.",
        features: [
          "Lifetime access to all videos, code files, and homework assignments",
          "Access to bootcamp community on Discord",
          "Assignment checking and doubt clearance",
          "Free access to all ML webinars throughout the year",
          "Access to open list of research problems in SciML",
          "4-month personalized guidance in doing research",
          "Publishing the research in conferences/journals",
          "How GenAI and LLMs can be integrated in industries",
        ],
        href: "https://flyvidesh.online/courses/sciml-4",
        cta: "Enroll Now",
        popular: false,
        variant: "secondary",
      },
    ],
  },

  faq: {
    label: "FAQ",
    title: "Frequently Asked Questions",
    subtitle: "Everything you need to know about the SciML Research Bootcamp.",
    items: [
      {
        question: "What programming language is used in this bootcamp?",
        answer:
          "The bootcamp uses Julia, which is the language of choice for the global SciML ecosystem. Julia offers unique advantages for scientific computing: it is as fast as C, as readable as Python, and has native support for automatic differentiation and differential equation solvers. No prior Julia experience is required.",
      },
      {
        question: "Do I need a background in physics or differential equations?",
        answer:
          "A basic understanding of calculus and differential equations is helpful but not strictly required. The bootcamp starts from the foundations and builds up. If you have taken an introductory engineering mathematics or physics course, you will be well prepared.",
      },
      {
        question: "How is SciML different from regular machine learning?",
        answer:
          "Traditional ML treats data as purely statistical and requires large datasets. SciML integrates known physical laws and domain knowledge directly into the model, requiring far less data and producing predictions that are physically consistent. It is especially powerful when you have partial knowledge of the governing equations.",
      },
      {
        question: "What are the research projects about?",
        answer:
          "The bootcamp includes two hands-on research projects. The first uses Universal Differential Equations to model COVID-19 epidemic dynamics by combining known SIR model structure with neural networks for unknown transmission dynamics. The second applies SciML to visualize and simulate particle trajectories near black holes using geodesic equations from general relativity.",
      },
      {
        question: "Can I use SciML in my own research domain?",
        answer:
          "Absolutely. SciML is domain-agnostic. The techniques taught in this bootcamp (PINNs, Neural ODEs, UDEs) apply to any field where differential equations or physical constraints are relevant: fluid dynamics, ecology, economics, climate science, materials science, drug discovery, and more.",
      },
      {
        question: "What is the time commitment?",
        answer:
          "The bootcamp runs over 4 weeks with approximately 2-3 sessions per week. Each session is about 1.5 to 3 hours. Additionally, homework assignments and projects will require a few hours per week. The self-paced community plan allows you to go at your own speed.",
      },
      {
        question: "Do I get a certificate?",
        answer:
          "Yes. Students who complete the Researcher Plan or Industry Professional Plan and submit all assignments receive a certificate of completion from Vizuara AI Labs.",
      },
      {
        question: "Does Vizuara cover conference registration or journal publication fees?",
        answer:
          "No. Vizuara does not cover conference registration fees or journal publication charges. If a participant chooses to attend a conference in person or publish in an open-access journal, the participant is responsible for bearing these costs themselves.",
      },
      {
        question: "Does the bootcamp cover computational costs?",
        answer:
          "No. Compute costs are not included in the bootcamp fee. We recommend participants use free resources such as Google Colab or Kaggle free GPUs. If a participant's research project requires additional compute, they are free to switch to a paid platform of their choice, but the associated cost must be borne by the participant.",
      },
      {
        question: "What is the refund policy?",
        answer:
          "We do not offer refunds. Please review the curriculum, watch the free introduction video, and explore the Community Plan before purchasing a paid plan to ensure the bootcamp is right for you.",
      },
    ],
  },

  cta: {
    heading: "Ready to Bring",
    headingHighlight: "Physics into Your ML",
    headingSuffix: "?",
    subtitle:
      "Join hundreds of researchers and engineers who have transformed their work with Scientific Machine Learning. Start building models that respect known science while discovering the unknown.",
    ctaPrimary: { label: "Enroll Now", href: "#pricing" },
    ctaSecondary: { label: "Watch Video", href: "#video" },
  },

  footer: {
    tagline:
      "Vizuara AI Labs: Making AI accessible through research-grade education. Founded by MIT and Purdue AI PhDs.",
    email: "research@vizuara.com",
    socialLinks: [
      {
        iconName: "Linkedin",
        href: "https://www.linkedin.com/company/vizuara",
        label: "LinkedIn",
      },
      {
        iconName: "Github",
        href: "https://github.com/vizuara",
        label: "GitHub",
      },
      {
        iconName: "Mail",
        href: "mailto:research@vizuara.com",
        label: "Email",
      },
    ],
  },
};

export const venuesConfig: VenuesMarqueeConfig = {
  label: "Accepted Venues",
  title: "Where Our Researchers Publish & Present",
  subtitle:
    "SciML research from our cohorts has been accepted, presented, and archived across leading venues in machine learning, scientific computing, and applied AI.",
  venues: [
    { name: "NeurIPS", logo: "/venues/neurips.png" },
    { name: "ICLR", logo: "/venues/iclr.png" },
    { name: "AAAI", logo: "/venues/aaai.png" },
    { name: "ACM", logo: "/venues/acm.png" },
    { name: "JuliaCon", logo: "/venues/juliacon.png" },
    { name: "IEEE eScience", logo: "/venues/escience.png" },
    { name: "EGU General Assembly", logo: "/venues/egu.png" },
    { name: "FastML", logo: "/venues/fastml.png" },
    { name: "MIT URTC", logo: "/venues/mit-urtc.png" },
    { name: "arXiv", logo: "/venues/arxiv.png" },
    { name: "EMNLP", logo: "/venues/emnlp.png" },
  ],
};

export const marketStatsConfig: MarketStatsSectionConfig = {
  label: "The SciML Boom",
  title: "Scientific ML Is Moving From Research to Infrastructure",
  subtitle:
    "Physics-Informed AI and SciML are shifting from academic papers to foundational infrastructure for engineering and science. Here is why the 2024-2026 window matters.",
  items: [
    {
      iconName: "TrendingUp",
      value: "$280B+",
      description:
        "Projected ML market by 2030, up from ~$55-75B in 2024 (CAGR above 30%), with SciML emerging as a key industrial segment.",
      source: "Market Research",
      sourceHref: "https://grandviewresearch.com/industry-analysis/machine-learning-market",
    },
    {
      iconName: "Zap",
      value: "NVIDIA Modulus",
      description:
        "Standardized SciML infrastructure for Physics-Informed Neural Networks and neural operators, accelerating industrial adoption.",
      source: "NVIDIA",
      sourceHref: "https://developer.nvidia.com/modulus",
    },
    {
      iconName: "Database",
      value: "Less Data, More Physics",
      description:
        "SciML models embed conservation laws and physical constraints directly, cutting data requirements drastically versus traditional ML.",
      source: "Physics-Informed Neural Networks",
      sourceHref: "https://en.wikipedia.org/wiki/Physics-informed_neural_networks",
    },
    {
      iconName: "Building2",
      value: "Jobs at High-Tech Companies",
      description:
        "Companies like Amazon and Microsoft have dedicated AI-for-Science divisions, and firms such as HCLTech are actively hiring specialists in PINNs and SciML.",
      source: "View HCLTech PINN Role",
      sourceHref: "https://www.linkedin.com/jobs/view/physics-informed-neural-network-at-hcltech-4382890332/",
    },
  ],
};

export const contactConfig: ContactSectionConfig = {
  heading: "Have more queries?",
  subtitle:
    "Reach out to our team on email for any questions about the bootcamp, curriculum, or application process.",
  email: "research@vizuara.com",
  leadScientist: {
    name: "Prathamesh Joshi",
    title: "Lead AI Scientist · Vizuara AI Labs",
    intro:
      "If the email discussion goes well and we find the candidate genuinely interested in research, we also provide a 1-on-1 15-minute talk with our Lead AI Scientist, Prathamesh Joshi.",
    bio: "Prathamesh Joshi is a Lead AI Scientist at Vizuara AI Labs, with prior experience at the Max Planck Institute, Germany. His expertise spans Generative AI and Scientific Machine Learning, with a strong publication record across ICLR Workshops, IEEE conferences, and other top venues. He has also mentored students through intensive bootcamps, guiding them toward publications at NeurIPS Workshops, ICLR, JuliaCon, and AAAI Workshops.",
    photo: "/team/prathamesh-joshi.png",
  },
};

export const nextCohortConfig: NextCohortPopupConfig = {
  startDate: "2026-04-27",
  cadenceDays: 15,
  message: "Join the next batch of the SciML Research Bootcamp",
  ctaLabel: "Enroll Now",
  ctaHref: "https://sciml-research.vizuara.ai/#pricing",
  delayMs: 2500,
};
