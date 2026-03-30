import type { BootcampConfig } from "@vizuara/ui";
import type { ShowcaseSectionConfig, CertificateSectionConfig } from "@vizuara/ui";
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
      { iconName: "Clock", text: "15 Topics", color: "text-secondary" },
      { iconName: "Code2", text: "Julia Programming", color: "text-primary" },
      { iconName: "FlaskConical", text: "Research Projects", color: "text-secondary" },
    ],
    stats: [
      { value: "500+", label: "Students Trained" },
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
        iconName: "Shield",
        title: "Physics-Informed Neural Networks",
        description:
          "PINNs embed differential equations, conservation laws, and boundary conditions directly into the neural network's loss function. The network learns to satisfy both the data and the governing physics simultaneously, producing solutions that are physically consistent by construction.",
        color: "text-secondary",
      },
      {
        iconName: "Zap",
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
        instructor: "Dr. Sreedath Panat",
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
        exercise: "Model a predator-prey system (Lotka-Volterra equations) in Julia",
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
        exercise: "Solve a 1D heat equation numerically in Julia",
        instructor: "Dr. Sreedath Panat",
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
        instructor: "Dr. Rajat Dandekar",
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
        exercise: "Build a PINN to solve a 1D heat equation with noisy data",
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
        instructor: "Dr. Rajat Dandekar",
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
        exercise: "Train a Neural ODE on synthetic dynamical system data",
        instructor: "Dr. Rajat Dandekar",
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
        instructor: "Dr. Rajat Dandekar",
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
    title: "Sample Papers From Our Research",
    subtitle:
      "A selected few SciML papers from our research over the past years. Students in the Researcher and Industry Professional plans work on similar projects aimed at publication.",
    papers: [
      {
        title:
          "A Machine Learning Aided Global Diagnostic and Comparative Tool to Assess Effect of Quarantine Control in COVID-19 Spread",
        authors:
          "Raj Dandekar, Chris Rackauckas, George Barbastathis",
        venue: "Cell Patterns",
        year: 2020,
        abstract:
          "Developed a globally applicable diagnostic COVID-19 model by augmenting the classical SIR epidemiological model with a neural network module. All parameters were optimized via machine learning algorithms, creating a hybrid physics-ML approach to pandemic modeling.",
        arxivUrl: "https://arxiv.org/abs/2003.14077",
        codeUrl: "https://github.com/RajDandekar/MIT-Global-COVID-Modelling-Project-1",
        tags: ["UDEs", "Epidemiology", "COVID-19"],
      },
      {
        title: "Bayesian Neural Ordinary Differential Equations",
        authors:
          "Raj Dandekar, Vaibhav Dixit, Mohamed Tarek, Aslan Garcia-Valadez, Chris Rackauckas",
        venue: "Languages for Inference (LAF1)",
        year: 2021,
        abstract:
          "Integrates Bayesian learning frameworks with Neural ODEs to robustly quantify uncertainty. Demonstrates probabilistic identification of model specification in partially-described dynamical systems using universal ordinary differential equations.",
        arxivUrl: "https://arxiv.org/abs/2012.07244",
        codeUrl: "https://github.com/RajDandekar/MSML21_BayesianNODE",
        tags: ["Neural ODEs", "Bayesian ML", "Uncertainty"],
      },
      {
        title:
          "A Study of Universal ODE Approaches to Predicting Soil Organic Carbon",
        authors:
          "Satyanarayana Raju G V V, Prathamesh Dinesh Joshi, Raj Abhijit Dandekar, Rajat Dandekar, Sreedath Panat",
        venue: "arXiv",
        year: 2025,
        abstract:
          "Applies Universal Differential Equations to predict soil organic carbon dynamics, demonstrating how SciML methods can be used in environmental science to combine known soil chemistry with data-driven learning of unknown processes.",
        arxivUrl: "https://arxiv.org/abs/2509.24306",
        thumbnail: "/papers/soil-carbon.png",
        tags: ["UDEs", "Environmental Science", "Soil Carbon"],
      },
      {
        title:
          "BULL-ODE: Bullwhip Learning with Neural ODEs and Universal Differential Equations under Stochastic Demand",
        authors:
          "Nachiket N Naik, Prathamesh Dinesh Joshi, Raj Abhijit Dandekar, Rajat Dandekar, Sreedath Panat",
        venue: "arXiv",
        year: 2025,
        abstract:
          "Compares a fully learned Neural ODE against a physics-informed Universal Differential Equation that preserves conservation and order-up-to structure in supply chain dynamics, demonstrating SciML applications in operations research.",
        arxivUrl: "https://arxiv.org/abs/2509.18105",
        thumbnail: "/papers/bull-ode.png",
        tags: ["Neural ODEs", "UDEs", "Supply Chain"],
      },
      {
        title:
          "Forecasting N-Body Dynamics: A Comparative Study of Neural ODEs and Universal Differential Equations",
        authors:
          "Suriya R S, Prathamesh Dinesh Joshi, Rajat Dandekar, Raj Dandekar, Sreedath Panat",
        venue: "arXiv",
        year: 2025,
        abstract:
          "Compares Neural ODEs and UDEs for predicting gravitational n-body systems. Key finding: the UDE model is much more data efficient, needing only 20% of data for a correct forecast, whereas the Neural ODE requires 90%.",
        arxivUrl: "https://arxiv.org/abs/2512.20643",
        tags: ["Neural ODEs", "UDEs", "N-Body Physics"],
      },
      {
        title:
          "Modeling Chaotic Lorenz ODE System Using Scientific Machine Learning",
        authors:
          "Sameera S Kashyap, Raj Abhijit Dandekar, Rajat Dandekar, Sreedath Panat",
        venue: "arXiv",
        year: 2024,
        abstract:
          "Applies SciML methods to foundational weather models. Demonstrates that combining neural networks with physics-informed modeling enables high accuracy with reduced data in climate applications, moving from black-box approaches toward physics-informed decision-making.",
        arxivUrl: "https://arxiv.org/abs/2410.06452",
        thumbnail: "/papers/lorenz.png",
        tags: ["SciML", "Chaos Theory", "Climate"],
      },
      {
        title:
          "Scientific Machine Learning in Ecological Systems: A Study on the Predator-Prey Dynamics",
        authors:
          "Ranabir Devgupta, Raj Abhijit Dandekar, Rajat Dandekar, Sreedath Panat",
        venue: "arXiv",
        year: 2024,
        abstract:
          "Applied Neural ODEs and UDEs to the Lotka-Volterra predator-prey model. UDEs outperform Neural ODEs by effectively recovering underlying dynamics and achieving accurate forecasting with significantly less training data. Introduces the forecasting breakdown point concept.",
        arxivUrl: "https://arxiv.org/abs/2411.06858",
        thumbnail: "/papers/predator-prey.png",
        tags: ["UDEs", "Ecology", "Predator-Prey"],
      },
      {
        title:
          "A Comparative Study of NeuralODE and Universal ODE Approaches to Solving Chandrasekhar White Dwarf Equation",
        authors:
          "Raymundo Vazquez Martinez, Raj Abhijit Dandekar, Rajat Dandekar, Sreedath Panat",
        venue: "arXiv",
        year: 2024,
        abstract:
          "Applied Neural ODEs and UDEs to model the Chandrasekhar White Dwarf Equation using Julia. Identified the forecasting breakdown point and optimized neural network architectures, opening pathways for SciML applications across astrophysics.",
        arxivUrl: "https://arxiv.org/abs/2410.14998",
        tags: ["Neural ODEs", "UDEs", "Astrophysics"],
      },
      {
        title:
          "EARS-UDE: Evaluating Auditory Response in Sensory Overload with Universal Differential Equations",
        authors:
          "Miheer Salunke, Prathamesh Dinesh Joshi, Raj Abhijit Dandekar, Rajat Dandekar, Sreedath Panat",
        venue: "arXiv",
        year: 2025,
        abstract:
          "A SciML framework using UDEs to model sensory adaptation dynamics in autism. Demonstrates 90.8% improvement over pure Neural ODEs while using 73.5% fewer parameters, recovering physiological parameters with minimal error.",
        arxivUrl: "https://arxiv.org/abs/2510.26804",
        thumbnail: "/papers/ears-ude.png",
        tags: ["UDEs", "Biophysics", "Healthcare"],
      },
      {
        title:
          "Physical Informed Neural Networks for Modeling Ocean Pollutant",
        authors:
          "Karishma Battina, Prathamesh Dinesh Joshi, Raj Abhijit Dandekar, Rajat Dandekar, Sreedath Panat",
        venue: "arXiv",
        year: 2025,
        abstract:
          "Applies PINNs to simulate pollutant dispersion governed by the 2D advection-diffusion equation. Embeds physical laws directly into neural network training while fitting synthetic noisy data, providing a scalable alternative to traditional solvers for oceanographic modeling.",
        arxivUrl: "https://arxiv.org/abs/2507.08834",
        thumbnail: "/papers/ocean-pinn.png",
        tags: ["PINNs", "Oceanography", "PDEs"],
      },
    ],
  },

  testimonials: {
    label: "Student Testimonials",
    title: "What Our Students Say",
    subtitle:
      "Hear from researchers, engineers, and scientists who have transformed their work with Scientific ML.",
    items: [
      {
        quote:
          "This bootcamp was one of the most complete and intuition-building journeys I have taken. The way PINNs and UDEs were explained with hands-on Julia code made the concepts click instantly.",
        name: "Priya Sharma",
        role: "PhD Student, Computational Physics",
      },
      {
        quote:
          "A rare combo of research-grade depth and crystal-clear teaching. I went from knowing nothing about Julia to building Neural ODE models for my chemical engineering research in just four weeks.",
        name: "Arun Venkatesh",
        role: "Chemical Engineer, R&D",
      },
      {
        quote:
          "The COVID-19 modeling project was a game-changer for my understanding of how to combine data with domain knowledge. I now use UDEs in my ecology research to model population dynamics.",
        name: "Maria Gonzalez",
        role: "Postdoctoral Researcher, Ecology",
      },
      {
        quote:
          "As a data scientist, I was used to black-box models. This bootcamp taught me how to build models that actually respect physical constraints, and the results are far more reliable.",
        name: "Daniel Kim",
        role: "Senior Data Scientist, Energy Sector",
      },
      {
        quote:
          "The instructors are genuine experts. Their explanations of adjoint methods and symbolic regression were the best I have encountered. Worth every rupee.",
        name: "Rohan Kapoor",
        role: "MS Student, Applied Mathematics",
      },
      {
        quote:
          "I attended the SciML bootcamp and then got admitted to CMU for my PhD. The research projects in this bootcamp gave me concrete examples to discuss in my interviews.",
        name: "Sneha Iyer",
        role: "PhD Admit, Carnegie Mellon University",
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
    email: "sreedath@vizuara.ai",
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
        href: "mailto:sreedath@vizuara.ai",
        label: "Email",
      },
    ],
  },
};
