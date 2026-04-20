import type { BootcampConfig } from "@vizuara/ui";
import type { ShowcaseSectionConfig, CertificateSectionConfig } from "@vizuara/ui";
import type { VenuesMarqueeConfig, MarketStatsSectionConfig, NextCohortPopupConfig, ContactSectionConfig } from "@vizuara/ui";
import {
  INSTRUCTOR_SREEDATH,
  INSTRUCTOR_RAJ,
  INSTRUCTOR_RAJAT,
  DEEPSEEK_BOOK,
} from "@vizuara/ui";

export const showcaseConfig: ShowcaseSectionConfig = {
  label: "Applications",
  title: "What You Can Build with ML and Deep Learning",
  subtitle:
    "From building neural networks from scratch to training production-grade classifiers, this bootcamp gives you the foundational skills to tackle any machine learning challenge.",
  items: [
    {
      src: "/ml-dl/ml-dl-hero.gif",
      alt: "ML-DL Research Bootcamp Overview",
      title: "ML-DL Research Projects",
    },
  ],
};

export const certificateConfig: CertificateSectionConfig = {
  label: "Credentials",
  title: "Learn from MIT PhD Researchers",
  subtitle:
    "Our lead instructor Dr. Sreedath Panat holds a PhD from MIT, where he conducted research in applied AI and scientific computing. Our team brings deep expertise in machine learning, neural networks, and applied AI research.",
  imageSrc: "/sciml/mit-certificate.jpeg",
  imageAlt: "MIT Certificate of Dr. Raj Dandekar",
};

export const bootcampConfig: BootcampConfig = {
  meta: {
    title: "Machine Learning and Deep Learning Research Bootcamp | Vizuara AI Labs",
    description:
      "Master Machine Learning and Deep Learning in a 6-week research bootcamp. Learn Python for ML, regression, decision trees, neural networks from scratch, backpropagation, and optimization. Work on impactful research projects and publish papers. Taught by MIT and Purdue AI PhDs.",
    keywords: [
      "machine learning",
      "deep learning",
      "neural networks",
      "backpropagation",
      "gradient descent",
      "decision trees",
      "regression",
      "Python for ML",
      "NumPy",
      "scikit-learn",
      "research bootcamp",
      "Vizuara AI Labs",
    ],
    ogTitle: "Machine Learning and Deep Learning Research Bootcamp | Vizuara AI Labs",
    ogDescription:
      "Master ML and DL foundations. Build neural networks from scratch, train classifiers, and publish research with MIT and Purdue PhDs.",
  },

  navbar: {
    links: [
      { label: "Why ML-DL", href: "#why" },
      { label: "Curriculum", href: "#curriculum" },
      { label: "Research", href: "#research" },
      { label: "Instructors", href: "#instructors" },
      { label: "Pricing", href: "#pricing" },
    ],
    ctaLabel: "Enroll Now",
    ctaHref: "#pricing",
  },

  hero: {
    badge: "ML-DL Research Bootcamp",
    headline: "ML and DL",
    headlineHighlight: "Research Bootcamp",
    headlineSuffix: "",
    subtitle:
      "Work on impactful ML/DL research. Present at top-tier conferences. Publish impactful research papers. Build neural networks from scratch using Python, NumPy, and scikit-learn.",
    scheduleItems: [
      { iconName: "Clock", text: "30 Topics", color: "text-secondary" },
      { iconName: "Code2", text: "Python", color: "text-primary" },
      { iconName: "Brain", text: "Research Projects", color: "text-secondary" },
    ],
    stats: [
      { value: "25+", label: "Students Trained" },
      { value: "15+", label: "Hands-on Sessions" },
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
    badge: "Hear From Our Co-Founder",
    badgeIconName: "Play",
    label: "Watch",
    heading: "Hear From",
    headingHighlight: "Dr. Sreedath Panat",
    headingSuffix: "(MIT PhD)",
    youtubeUrl: "https://www.youtube.com/embed/QYPvx3nXY94",
    youtubeTitle: "Hear From Our Co-Founder Dr. Sreedath Panat (MIT PhD)",
  },

  why: {
    label: "Three Core Objectives",
    title: "The Foundations of ML and Deep Learning",
    subtitle:
      "We teach three interconnected objectives that take you from Python fundamentals to building and training neural networks from scratch. Each builds on the previous, creating a rigorous foundation for ML research.",
    items: [
      {
        iconName: "Code2",
        title: "Python Foundations for ML",
        description:
          "Start with Python fundamentals tailored for machine learning: variables, data types, matrix multiplication from scratch, object-oriented programming, and data visualization with Matplotlib, Seaborn, and Plotly. Build a solid coding foundation using NumPy and Pandas.",
        color: "text-primary",
      },
      {
        iconName: "BarChart3",
        title: "Classical Machine Learning",
        description:
          "Master the core algorithms that power modern ML: linear classifiers, the perceptron, logistic regression with cross-entropy loss, gradient descent optimization, L1/L2 regularization, and decision trees with Gini impurity. Build every algorithm from scratch before using scikit-learn.",
        color: "text-secondary",
      },
      {
        iconName: "Brain",
        title: "Neural Networks from Scratch",
        description:
          "Build neural networks layer by layer using only NumPy: code neurons, forward passes, activation functions, cross-entropy loss, and full backpropagation. Master optimizers (SGD, RMSProp, Adam), regularization (dropout, K-fold CV), and train on real datasets like MNIST Fashion and California Housing.",
        color: "text-primary",
      },
      {
        iconName: "TrendingUp",
        title: "Optimization and Training",
        description:
          "Understand gradient descent at a deep mathematical level: the chain rule, matrix gradients, and how weights are updated during backpropagation. Learn to diagnose overfitting, apply regularization strategies, and build complete training pipelines.",
        color: "text-secondary",
      },
      {
        iconName: "Target",
        title: "Hands-on Projects and Interviews",
        description:
          "Each module includes hands-on projects and interview-oriented recaps. Build classifiers, regression models, decision trees, and neural networks on real datasets. The bootcamp is designed to prepare you for both research and industry ML roles.",
        color: "text-primary",
      },
      {
        iconName: "Layers",
        title: "Research and Publication",
        description:
          "Work on industry-level ML/DL research projects aimed at publication. Learn to formulate research problems, design experiments, validate hypotheses, and write scientific papers for conferences and journals.",
        color: "text-secondary",
      },
    ],
  },

  diagrams: {
    label: "Visual Framework",
    title: "How Machine Learning and Deep Learning Work",
    subtitle:
      "Publication-quality diagrams illustrating the core algorithms and architectures you will master in this bootcamp.",
    diagrams: [
      {
        src: "/diagrams/ml-dl-landscape.png",
        alt: "ML-DL curriculum landscape showing Python foundations, classical ML algorithms, and neural networks",
        title: "The ML-DL Landscape",
        description:
          "A high-level overview of the bootcamp curriculum: from Python foundations and data visualization, through classical ML algorithms (regression, decision trees), to building neural networks from scratch with backpropagation and optimizers.",
      },
      {
        src: "/diagrams/neural-network-training.png",
        alt: "Neural network training pipeline with forward pass, backpropagation, and optimizer comparison",
        title: "Neural Network Training Pipeline",
        description:
          "The complete training loop: forward pass through multiple layers with activation functions, cross-entropy loss computation, backward pass with gradient propagation via the chain rule, and weight updates using SGD, RMSProp, or Adam optimizers.",
      },
      {
        src: "/diagrams/decision-tree-construction.png",
        alt: "Decision tree construction with Gini impurity and decision boundaries",
        title: "Decision Tree Construction",
        description:
          "Decision tree construction using Gini impurity for feature selection, recursive binary splitting, pruning strategies, and the resulting rectangular decision boundaries for classification and regression tasks.",
      },
    ],
  },

  audience: {
    label: "Who Is This For",
    title: "Designed for Beginners, Engineers, and Researchers",
    subtitle:
      "Whether you are new to programming or an experienced developer looking to build a rigorous ML foundation, this bootcamp teaches you to implement every algorithm from scratch before using libraries.",
    items: [
      {
        iconName: "GraduationCap",
        title: "Students and Beginners",
        description:
          "Undergraduate and graduate students who want a rigorous, ground-up understanding of machine learning and deep learning. No prior ML experience required: we start from Python basics.",
        tags: ["Undergrads", "Graduate Students", "Career Changers"],
      },
      {
        iconName: "Wrench",
        title: "Software Engineers",
        description:
          "Developers looking to transition into ML/AI roles. Build every algorithm from scratch before using frameworks, giving you the deep understanding that separates ML engineers from API callers.",
        tags: ["Backend Engineers", "Full-Stack Developers", "DevOps"],
      },
      {
        iconName: "BarChart3",
        title: "Data Scientists",
        description:
          "Analysts and data practitioners who use ML libraries but want to understand what happens under the hood. Master the mathematics and implementation behind regression, trees, and neural networks.",
        tags: ["Data Analysts", "Business Analysts", "Applied Scientists"],
      },
      {
        iconName: "BookOpen",
        title: "Aspiring Researchers",
        description:
          "Students aiming for graduate programs or research careers in AI. The research project component and publication pathway strengthen applications to top PhD programs.",
        tags: ["PhD Aspirants", "Research Scholars", "Academic Professionals"],
      },
    ],
  },

  curriculum: {
    label: "Curriculum",
    title: "A Guided Journey from Python to Neural Networks",
    subtitle:
      "30 topics across 6 weeks, covering Python foundations, machine learning algorithms, and deep learning from scratch. Phase 1 (Weeks 1 through 6) is entirely self-paced: all lectures are pre-recorded and available for lifetime access, so you learn at your own speed.",
    days: [
      // Week 1: Python Foundations
      {
        day: 1,
        week: 1,
        title: "Python Basics, Variables, Data Types",
        iconName: "Code2",
        topics: [
          "Python fundamentals for machine learning: variables, data types, control flow, and functions",
        ],
        exercise: "Write basic Python programs for data manipulation",
        instructor: "",
      },
      {
        day: 2,
        week: 1,
        title: "Matrix Multiplication from Scratch",
        iconName: "Layers",
        topics: [
          "Implementing matrix multiplication using pure Python, understanding computational foundations of ML",
        ],
        exercise: "Build matrix multiplication without NumPy",
        instructor: "",
      },
      {
        day: 3,
        week: 1,
        title: "Classes and Objects in ML",
        iconName: "Wrench",
        topics: [
          "Object-oriented programming patterns used in ML codebases: classes, inheritance, and encapsulation",
        ],
        exercise: "Build a reusable ML model class structure",
        instructor: "",
      },
      {
        day: 4,
        week: 1,
        title: "Intro to NumPy and Pandas",
        iconName: "Database",
        topics: [
          "NumPy arrays, vectorized operations, broadcasting, and Pandas DataFrames for data loading and exploration",
        ],
        exercise: "Load, clean, and explore a real-world dataset",
        instructor: "",
      },
      {
        day: 5,
        week: 1,
        title: "Data Visualization: Matplotlib, Seaborn, Plotly",
        iconName: "BarChart3",
        topics: [
          "Creating publication-quality visualizations: line plots, histograms, scatter plots, heatmaps, and interactive charts",
        ],
        exercise: "Visualize dataset distributions and correlations",
        instructor: "",
      },
      // Week 2: ML Foundations
      {
        day: 6,
        week: 2,
        title: "What is ML, Types of ML Models",
        iconName: "BookOpen",
        topics: [
          "Supervised, unsupervised, and reinforcement learning paradigms, with real-world examples of each",
        ],
        exercise: "Classify ML problems by type from real-world scenarios",
        instructor: "",
      },
      {
        day: 7,
        week: 2,
        title: "The 6 Steps of an ML Project",
        iconName: "Target",
        topics: [
          "End-to-end ML workflow: data collection, preprocessing, feature engineering, model selection, training, and evaluation",
        ],
        exercise: "Design an ML pipeline for a given problem statement",
        instructor: "",
      },
      {
        day: 8,
        week: 2,
        title: "Linear Classifiers and the Perceptron",
        iconName: "Zap",
        topics: [
          "Decision boundaries, the perceptron algorithm, convergence theorem, and limitations of linear classifiers",
        ],
        exercise: "Implement the perceptron from scratch on a 2D dataset",
        instructor: "",
      },
      {
        day: 9,
        week: 2,
        title: "NumPy, Scikit-learn, Jupyter",
        iconName: "Code2",
        topics: [
          "Setting up the ML development environment: Jupyter notebooks, scikit-learn API patterns, and NumPy for computation",
        ],
        exercise: "Train a scikit-learn model end-to-end in a Jupyter notebook",
        instructor: "",
      },
      {
        day: 10,
        week: 2,
        title: "Build Random Linear Classifier",
        iconName: "Layers",
        topics: [
          "Building a random linear classifier from scratch, understanding decision boundaries and classification accuracy",
        ],
        exercise: "Implement and visualize a random linear classifier",
        instructor: "",
      },
      // Week 3: Regression
      {
        day: 11,
        week: 3,
        title: "Logistic Regression Intuition and Coding",
        iconName: "TrendingUp",
        topics: [
          "Sigmoid function, probability interpretation, decision boundaries, and implementing logistic regression from scratch",
        ],
        exercise: "Build logistic regression from scratch with gradient descent",
        instructor: "",
      },
      {
        day: 12,
        week: 3,
        title: "Cross Entropy Loss and Gradient Descent",
        iconName: "Zap",
        topics: [
          "Deriving cross-entropy loss, gradient computation, learning rate selection, and convergence analysis",
        ],
        exercise: "Implement gradient descent optimization step by step",
        instructor: "",
      },
      {
        day: 13,
        week: 3,
        title: "Regularization: L1/L2",
        iconName: "Shield",
        topics: [
          "Lasso (L1) and Ridge (L2) regularization: mathematical formulation, effect on weights, and preventing overfitting",
        ],
        exercise: "Compare L1 and L2 regularization on an overfitting dataset",
        instructor: "",
      },
      {
        day: 14,
        week: 3,
        title: "Linear and Ridge Regression",
        iconName: "BarChart3",
        topics: [
          "Ordinary least squares, closed-form solution, Ridge regression with regularization, and model evaluation metrics",
        ],
        exercise: "Implement linear and Ridge regression from scratch",
        instructor: "",
      },
      {
        day: 15,
        week: 3,
        title: "Interview-Oriented Recap",
        iconName: "MessageSquare",
        topics: [
          "Comprehensive review of regression concepts with ML interview-style questions and problem-solving strategies",
        ],
        exercise: "Solve ML interview problems on regression topics",
        instructor: "",
      },
      // Week 4: Decision Trees
      {
        day: 16,
        week: 4,
        title: "Gini Impurity and Tree Construction",
        iconName: "GitBranch",
        topics: [
          "Gini impurity measure, information gain, recursive tree construction, and feature selection for splits",
        ],
        exercise: "Compute Gini impurity by hand and implement tree splitting",
        instructor: "",
      },
      {
        day: 17,
        week: 4,
        title: "Pruning Trees, Full Code Walkthrough",
        iconName: "Scissors",
        topics: [
          "Pre-pruning and post-pruning strategies, cost-complexity pruning, and complete decision tree implementation",
        ],
        exercise: "Build a pruned decision tree from scratch",
        instructor: "",
      },
      {
        day: 18,
        week: 4,
        title: "Regression Trees with Multiple Features",
        iconName: "BarChart3",
        topics: [
          "Extending decision trees to regression problems, handling continuous features, and multi-feature splitting",
        ],
        exercise: "Build a regression tree for a multi-feature dataset",
        instructor: "",
      },
      {
        day: 19,
        week: 4,
        title: "Hands-on: Build Regression and Classification Trees",
        iconName: "Code2",
        topics: [
          "End-to-end project building both regression and classification trees on real-world datasets",
        ],
        exercise: "Train and evaluate trees on real datasets",
        instructor: "",
      },
      {
        day: 20,
        week: 4,
        title: "Interview Prep: Trees Summary",
        iconName: "MessageSquare",
        topics: [
          "Decision tree interview questions, comparison with other algorithms, and when to use trees vs. other methods",
        ],
        exercise: "Solve ML interview problems on tree-based methods",
        instructor: "",
      },
      // Week 5: Neural Networks Part I
      {
        day: 21,
        week: 5,
        title: "Coding Neurons and Layers using NumPy",
        iconName: "Brain",
        topics: [
          "Implementing single neurons, dense layers, and multi-layer architectures using only NumPy arrays",
        ],
        exercise: "Build a 2-layer neural network from scratch",
        instructor: "",
      },
      {
        day: 22,
        week: 5,
        title: "Forward Pass, Activation Functions",
        iconName: "Zap",
        topics: [
          "Computing forward passes through layers, ReLU, sigmoid, tanh, and softmax activation functions",
        ],
        exercise: "Implement and visualize different activation functions",
        instructor: "",
      },
      {
        day: 23,
        week: 5,
        title: "Loss Functions: Cross Entropy",
        iconName: "Target",
        topics: [
          "Binary and categorical cross-entropy, MSE loss, and choosing the right loss function for your problem",
        ],
        exercise: "Implement multiple loss functions and compare gradients",
        instructor: "",
      },
      {
        day: 24,
        week: 5,
        title: "Backpropagation (Single Neuron + Full Layer)",
        iconName: "ArrowUpDown",
        topics: [
          "Deriving backpropagation for a single neuron, extending to full layers, and computing weight gradients",
        ],
        exercise: "Implement backpropagation step by step on a toy network",
        instructor: "",
      },
      {
        day: 25,
        week: 5,
        title: "Chain Rule and Matrix Gradients",
        iconName: "Layers",
        topics: [
          "The chain rule for composite functions, Jacobian matrices, and efficient matrix gradient computation for deep networks",
        ],
        exercise: "Derive and verify gradients using numerical differentiation",
        instructor: "",
      },
      // Week 6: Neural Networks Part II
      {
        day: 26,
        week: 6,
        title: "Complete Backprop Pipeline",
        iconName: "Zap",
        topics: [
          "Assembling the full training loop: forward pass, loss computation, backward pass, and weight update in a unified pipeline",
        ],
        exercise: "Build an end-to-end training loop for a multi-layer network",
        instructor: "",
      },
      {
        day: 27,
        week: 6,
        title: "Optimizers: GD, RMSProp, Adam",
        iconName: "TrendingUp",
        topics: [
          "Vanilla gradient descent, momentum, RMSProp adaptive learning rates, and Adam optimizer implementation",
        ],
        exercise: "Implement and compare three optimizers on the same dataset",
        instructor: "",
      },
      {
        day: 28,
        week: 6,
        title: "Overfitting: Dropout, Regularization, K-fold CV",
        iconName: "Shield",
        topics: [
          "Diagnosing overfitting with learning curves, dropout regularization, weight decay, and K-fold cross-validation",
        ],
        exercise: "Apply dropout and K-fold CV to reduce overfitting on a real dataset",
        instructor: "",
      },
      {
        day: 29,
        week: 6,
        title: "Projects: MNIST Fashion + California Housing",
        iconName: "FlaskConical",
        mega: true,
        accentColor: "amber",
        topics: [
          "End-to-end classification on Fashion MNIST using your neural network from scratch",
          "Regression on the California Housing dataset with your custom training pipeline",
          "Model evaluation, hyperparameter tuning, and results visualization",
        ],
        exercise: "Train and evaluate neural networks on both datasets",
        instructor: "",
      },
      {
        day: 30,
        week: 6,
        title: "Final Recap: Neural Network in 100 Minutes",
        iconName: "Flag",
        mega: true,
        accentColor: "violet",
        topics: [
          "Comprehensive review: from a single neuron to a full deep network",
          "Key concepts consolidated: forward pass, loss, backprop, optimizers, regularization",
          "Interview preparation and next steps for advanced deep learning",
        ],
        exercise: "Build a complete neural network from scratch in one session",
        instructor: "",
      },
    ],
    weekLabels: {
      1: { label: "Python Foundations", sessions: "Topics 1-5" },
      2: { label: "ML Foundations", sessions: "Topics 6-10" },
      3: { label: "Regression", sessions: "Topics 11-15" },
      4: { label: "Decision Trees", sessions: "Topics 16-20" },
      5: { label: "Neural Networks: Part I", sessions: "Topics 21-25" },
      6: { label: "Neural Networks: Part II", sessions: "Topics 26-30" },
    },
  },

  deliverables: {
    label: "What You Get",
    title: "Research-Grade Deliverables",
    subtitle:
      "Everything you need to go from ML beginner to building neural networks from scratch and publishing research.",
    items: [
      {
        iconName: "Code2",
        title: "Complete Python Codebase",
        description:
          "Production-ready Python code for every session, including from-scratch implementations of every algorithm: regression, decision trees, and neural networks.",
        features: [
          "All lecture code files and Jupyter notebooks",
          "Homework assignments with solutions",
          "Research project starter templates",
          "Fully documented ML pipelines",
        ],
        gradient: "from-primary/20 to-secondary/20",
      },
      {
        iconName: "FileText",
        title: "Lecture Notes and Videos",
        description:
          "Lifetime access to all session recordings and comprehensive lecture notes covering every ML and DL concept from Python basics to neural networks.",
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
          "Industry-level ML/DL projects including neural network classifiers, regression models, and decision tree systems ready for your portfolio or publication.",
        features: [
          "Neural network trained on Fashion MNIST",
          "Regression pipeline for California Housing",
          "Decision tree classifier implementation",
          "Publication-ready research results",
        ],
        gradient: "from-primary/20 to-secondary/20",
      },
      {
        iconName: "MessageSquare",
        title: "Community and Mentorship",
        description:
          "Join the Vizuara ML-DL community on Discord for ongoing collaboration, doubt clearance, and research partnerships.",
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
      "Our instructors are co-founders of Vizuara AI Labs and published researchers in Machine Learning and Deep Learning, with expertise spanning neural networks, optimization, and applied ML.",
    items: [
      {
        ...INSTRUCTOR_SREEDATH,
        session: "Python Foundations, Neural Network Training, Optimizers, and Regularization",
      },
      {
        ...INSTRUCTOR_RAJ,
        session: "ML Foundations, Linear Classifiers, Decision Trees, and Interview Prep",
      },
      {
        ...INSTRUCTOR_RAJAT,
        session: "Regression, Backpropagation, Neural Network Architecture, and Loss Functions",
      },
    ],
    bookCallout: DEEPSEEK_BOOK,
  },

  researchPapers: {
    label: "Our Research",
    title: "Recent Papers From Our Research",
    subtitle:
      "A selected few papers from our research over the past years. Students in the Industry Professional plan work on similar projects aimed at publication.",
    papers: [
      {
        title:
          "Beyond Passive Viewing: A Hybrid Learning Platform Augmenting Video Lectures with Conversational AI",
        authors:
          "Mohammed Abraar, Raj Dandekar, Rajat Dandekar, Sreedath Panat",
        venue: "TeachNLP Workshop",
        year: 2026,
        abstract:
          "Proposes a hybrid platform combining video lectures with conversational AI tutors. In a controlled study with 58 participants, AI-augmented instruction yielded 8.3 points higher post-test scores and 71.1% longer engagement duration compared to standard video.",
        thumbnail: "/papers/teachnlp-ai-tutor.png",
        tags: ["AI Education", "NLP", "Conversational AI"],
      },
      {
        title:
          "Multilingual Evaluation of Human vs. AI Text Classification with Zero-Shot Analysis of Contemporary LLM Architectures",
        authors:
          "Pranamya Nilesh Deshpande, Raj Dandekar, Rajat Dandekar, Sreedath Panat",
        venue: "LM4UC Workshop",
        year: 2026,
        abstract:
          "Compares traditional ML with transformer models for human vs AI text detection across English, Hindi, and Spanish. Finds that classical models like XGBoost outperform transformers in cross-lingual scenarios, while commercial LLMs are detected consistently but smaller open-source models go undetected.",
        thumbnail: "/papers/multilingual-detection.png",
        tags: ["NLP", "Multilingual", "AI Detection"],
      },
      {
        title:
          "Regional-TinyStories: A Small Language Model Framework for Evaluating Language Learning, Tokenizers, and Datasets",
        authors:
          "Nirvan Patil, Malhar Abhay Inamdar, Agnivo Gosai, Guruprasad Pathak, Anish Joshi, Anish Joshirao, Raj Dandekar, Rajat Dandekar, Sreedath Panat",
        venue: "AACL-IJCNLP",
        year: 2025,
        abstract:
          "Extends TinyStories to Hindi, Marathi, and Bangla with 2 million stories per language and 20+ trained models. Reveals that Indic-specific tokenizers outperform generic ones and that dataset semantic quality strongly governs downstream generation quality.",
        thumbnail: "/papers/regional-tinystories.png",
        tags: ["SLMs", "Multilingual", "Low-Resource NLP"],
      },
      {
        title:
          "Simulating Misinformation Propagation in Social Networks using Large Language Models",
        authors:
          "Raj Gaurav Maurya, Vaibhav Shukla, Raj Abhijit Dandekar, Rajat Dandekar, Sreedath Panat",
        venue: "ACM CIKM",
        year: 2025,
        abstract:
          "Uses LLM-based synthetic agents with distinct personas to investigate how false claims spread through networks. Demonstrates that identity- and ideology-based personas act as misinformation accelerators, while expert personas maintain factual consistency.",
        arxivUrl: "https://arxiv.org/abs/2511.10384",
        thumbnail: "/papers/misinfo-propagation.png",
        badge: "Outstanding Paper Award at ACM CIKM 25",
        tags: ["LLMs", "Misinformation", "Social Networks"],
      },
      {
        title: "Latent Multi-Head Attention for Small Language Models",
        authors: "Vizuara AI Labs Research Team",
        venue: "arXiv",
        year: 2025,
        abstract:
          "Investigates latent multi-head attention mechanisms for Small Language Models, enabling efficient inference while maintaining strong performance on downstream tasks.",
        arxivUrl: "https://arxiv.org/abs/2501.17781",
        thumbnail: "/papers/latent-attention-new.png",
        tags: ["Deep Learning", "Attention", "Efficiency"],
      },
      {
        title: "Decoders Laugh as Loud as Encoders",
        authors:
          "Eli Borodach, Raj Dandekar, Rajat Dandekar, Sreedath Panat",
        venue: "arXiv",
        year: 2025,
        abstract:
          "Investigates whether LLMs genuinely comprehend humor. A fine-tuned decoder (GPT-4o) achieved a Mean F1-macro score of 0.85, matching the best fine-tuned encoder (RoBERTa at 0.86), demonstrating comparable performance between decoder and encoder approaches for humor understanding.",
        arxivUrl: "https://arxiv.org/abs/2509.04779",
        thumbnail: "/papers/decoders-new.png",
        tags: ["Deep Learning", "Classification", "Humor Detection"],
      },
      {
        title:
          "Unifying Mixture of Experts and Multi-Head Latent Attention for Efficient Language Models",
        authors:
          "Sushant Mehta, Raj Dandekar, Rajat Dandekar, Sreedath Panat",
        venue: "BabyLM Workshop",
        year: 2025,
        abstract:
          "Introduces MoE-MLA-RoPE combining Mixture of Experts with Multi-Head Latent Attention. Achieves 68% KV cache memory reduction and 3.2x inference speedup while improving validation loss by 6.9% using 42% fewer active parameters per forward pass.",
        thumbnail: "/papers/moe-mla.png",
        tags: ["Deep Learning", "MoE", "Efficient LLMs"],
      },
      {
        title:
          "Muon: Training and Trade-offs with Latent Attention and MoE",
        authors:
          "Sushant Mehta, Raj Dandekar, Rajat Dandekar, Sreedath Panat",
        venue: "arXiv",
        year: 2025,
        abstract:
          "Investigates the Muon optimizer for transformer training at medium scales (30M-200M parameters). Muon reaches the target loss with 48-52% of the training compute of AdamW while maintaining or improving final perplexity, with 68% memory reduction and 3.2x inference speedup.",
        arxivUrl: "https://arxiv.org/abs/2509.24406",
        thumbnail: "/papers/muon-optimizer.png",
        tags: ["Deep Learning", "Optimization", "Transformers"],
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
        name: "Raj Gaurav Maurya",
        role: "Incoming Student at Cambridge University",
        fullPost: `Outstanding Paper Award | ACM CIKM 2025 (Seoul)

Thrilled to share that our work on simulating misinformation propagation with LLMs received the Outstanding Paper Award at CIKM 2025!

After months of iteration and 31,500+ API calls, we pushed persona-based LLM agents to their limits.

What we built:
A novel Auditor-Node framework with persona-conditioned LLM agents
630 sequential rewrites to simulate real-world information decay
Claim-level factual tracking via a QA-based auditor

Key findings:
Identity-driven personas distort information 400%+ faster
Mixed persona interactions escalate 85% of cases to propaganda-level changes
Expert personas preserve 90%+ factual stability

This shows LLMs are not just generators, they are tools to understand human behavior at scale.

A huge thank you to the Technical University of Munich (TUM) for the freedom to explore bold ideas, and special thanks to Juergen Pfeffer for fostering a culture of cutting-edge research. Grateful to Dr. Sreedath Panat (for making research accessible across India), Vaibhav Shukla (soon-to-be Dr. Vaibhav!), Dr. Raj, Dr. Rajat, and my incredible mentors at TUM for their constant guidance and support.`,
        linkedinUrl:
          "https://www.linkedin.com/posts/rajgm29_outstanding-paper-award-acm-cikm-2025-activity-7405923726657310721-i_ei/",
        embedUrl:
          "https://www.linkedin.com/embed/feed/update/urn:li:activity:7405923726657310721",
      },
      {
        name: "Dr. Sreedath Panat",
        role: "Co-founder, Vizuara AI Labs · MIT PhD",
        fullPost: `6 Papers Accepted Across NeurIPS, ICCV, and EMNLP Workshops 2025

Vizuara's Research Wing has achieved a significant milestone with six workshop paper acceptances across major AI conferences in 2025.

1. EARS-UDE: Evaluating Auditory Response in Sensory Overload with Universal Differential Equations (AI for Science, NeurIPS 2025)
Authors: Miheer Salunke, Prathamesh Joshi, Dr. Raj Abhijit Dandekar, Dr. Rajat Dandekar, Dr. Sreedath Panat

2. Physics-Informed Learning Near Critical Transitions: A Comparative Study of UDEs and Neural ODEs (AI for Science, NeurIPS 2025)
Authors: Urvi Bora, Prathamesh Joshi, and others

3. Scientific Machine Learning for Symbolic Recovery of Relativistic Effects in Black Hole Orbits (AI for Science, NeurIPS 2025)
Authors: Pothuraju Naveen Yadav, Prathamesh Joshi, and others

4. PI-NAV: Physics-Informed Universal Differential Equations for Nanorobot Navigation (ML for Physical Sciences, NeurIPS 2025)

5. VLMs Display a Strong Gender Bias (ICCV 2025, 2 workshops)
Authors: Aiswarya K, Dr. Raj Abhijit Dandekar, Dr. Rajat Dandekar, Dr. Sreedath Panat

6. Unifying Mixture of Experts and Multi-Head Latent Attention for Efficient Language Models (EMNLP 2025 workshop)
Authors: Sushant Mehta and collaborators

These achievements reflect collaboration between researchers and bootcamp participants, where theory meets real-world application and produces publishable contributions.`,
        linkedinUrl:
          "https://www.linkedin.com/posts/sreedath-panat_6-papers-accepted-across-neurips-iccv-and-activity-7376554466747191296-2o9O/",
        embedUrl:
          "https://www.linkedin.com/embed/feed/update/urn:li:activity:7376554466747191296",
      },
      {
        name: "Pranav Ramanathan",
        role: "Incoming Intern, Amazon · Queen Mary University of London",
        fullPost: `This summer, I set out to see if modern AI could crack the No-Three-in-Line problem, a combinatorial challenge that's remained open since 1917.

Today, I'm excited to share that our research is now live on arXiv.

The No-Three-in-Line problem asks a deceptively simple question: given an n*n grid, what's the maximum number of points you can place such that no three are collinear? The theoretical upper bound is 2n points, but finding configurations that achieve this becomes increasingly difficult as grids grow larger.

We tested three approaches head-to-head. Integer Linear Programming (Gurobi) achieved provably optimal solutions up to 19x19. PatternBoost, using transformer-based pattern learning, matched the 2n upper bound up to 14x14 despite never seeing optimal examples during training. Reinforcement learning (PPO) cracked 10x10 grids perfectly but stumbled at 11x11, making one fatal violation.

This paper wouldn't exist without the incredible people who believed in this work:

Thomas Prellberg and Matthew Lewis at QMUL School of Mathematical Sciences, whose guidance shaped every aspect of this research.

The team at Vizuara Technologies Private Limited: PRATHAMESH JOSHI, Raj Abhijit Dandekar, Rajat Dandekar, Sreedath Panat, for their collaboration and expertise in Scientific Machine Learning.

Paper: https://lnkd.in/e8GKqGBs`,
        linkedinUrl:
          "https://www.linkedin.com/posts/pranav-ramanathan_machinelearning-reinforcementlearning-transformers-ugcPost-7409888251085373440-Dnv-",
        embedUrl:
          "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7409888251085373440",
      },
      {
        name: "Ashutosh Shukla",
        role: "Software Engineer at Optum",
        fullPost: `I am excited to share that last week from August 4th-8th, I had the opportunity of presenting a poster at the Mathematical and Scientific Machine Learning (MSML) 2025 conference held in Naples, Italy.

I had the pleasure of presenting my research "Modeling Stellar Structure with Scientific Machine Learning".

I am deeply grateful to my mentors, Raj Abhijit Dandekar, Rajat Dandekar, Sreedath Panat, and PRATHAMESH JOSHI, for introducing me to the world of Scientific Machine Learning and for their constant guidance throughout this journey.`,
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
        fullPost: `I'm happy to share that I'll be presenting my research on Physics-Informed Neural Networks (PINNs) for Ocean Pollutant Modeling at JuliaCon 2026, where researchers and developers collaborate to push Scientific Computing forward!

Using Julia's powerful ecosystem, I developed a PINN-based framework to solve the 2D advection-diffusion equation, enabling fast and accurate predictions of oceanic pollution hotspots. Key highlights include:
Hyperparameter optimization for robust performance
Computational efficiency (PINNs vs. traditional solvers)

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
        name: "Researcher Plan",
        price: "Rs 95,000",
        description:
          "Save 24%. Originally Rs 1,25,000. MIT and Purdue PhDs as your research mentors.",
        features: [
          "Lifetime access to all videos, code files, and homework assignments",
          "Access to bootcamp community on Discord",
          "Assignment checking and doubt clearance",
          "Free access to all ML webinars throughout the year",
          "Access to open list of research problems in ML/DL",
          "4-month personalized guidance in doing research",
          "Publishing the research in conferences/journals",
          "How ML and DL can be applied to real-world industries",
        ],
        href: "https://vizuara.ai/courses/ml-dl-research",
        cta: "Enroll Now",
        popular: true,
        variant: "primary",
      },
    ],
  },

  faq: {
    label: "FAQ",
    title: "Frequently Asked Questions",
    subtitle: "Everything you need to know about the ML-DL Research Bootcamp.",
    items: [
      {
        question: "What programming language is used in this bootcamp?",
        answer:
          "The bootcamp uses Python exclusively. You will implement algorithms from scratch using NumPy and then use scikit-learn for production workflows. We also use Matplotlib, Seaborn, and Plotly for visualization. No prior Python experience is required.",
      },
      {
        question: "Do I need prior experience with machine learning?",
        answer:
          "No prior knowledge is needed. This bootcamp starts from Python basics and builds up systematically. It is designed for students, researchers, and working professionals who want a rigorous, ground-up understanding of ML and deep learning.",
      },
      {
        question: "What makes this different from other ML courses?",
        answer:
          "Three things set this bootcamp apart: you implement every algorithm from scratch before using libraries, the curriculum is taught by MIT and Purdue PhDs with research-grade depth, and the Industry Professional plan includes personalized research mentorship aimed at publishing in conferences and journals.",
      },
      {
        question: "What are the hands-on projects?",
        answer:
          "You will build multiple projects: matrix multiplication from scratch, a perceptron classifier, logistic regression with gradient descent, decision trees with pruning, and a complete neural network trained on Fashion MNIST and California Housing datasets. Every algorithm is implemented from scratch before using any library.",
      },
      {
        question: "How is the bootcamp structured?",
        answer:
          "The bootcamp covers 30 topics across 6 weeks: Python Foundations, ML Foundations, Regression, Decision Trees, Neural Networks Part I (architecture and backprop), and Neural Networks Part II (optimization and projects). All lecture material is available for lifetime access.",
      },
      {
        question: "Will this prepare me for ML interviews?",
        answer:
          "Yes. Each module includes interview-oriented recap sessions covering the most common ML interview questions for that topic. The from-scratch approach gives you the deep understanding that interviewers test for, going beyond what framework-only courses provide.",
      },
      {
        question: "Do I get a certificate?",
        answer:
          "Yes. Students who complete the bootcamp and submit all assignments receive a certificate of completion from Vizuara AI Labs.",
      },
      {
        question: "What is the refund policy?",
        answer:
          "We do not offer refunds. Please review the curriculum, watch the free introduction video, and explore the Student Plan before purchasing a paid plan to ensure the bootcamp is right for you.",
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
    ],
  },

  cta: {
    heading: "Ready to Master",
    headingHighlight: "Machine Learning",
    headingSuffix: "?",
    subtitle:
      "Join hundreds of students and engineers who have built neural networks from scratch and launched ML research careers. Start building every algorithm from the ground up.",
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
    "Research from our cohorts has been accepted, presented, and archived across leading venues in machine learning, scientific computing, and applied AI.",
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
  label: "The ML/DL Boom",
  title: "Machine Learning Is Moving From Research to Infrastructure",
  subtitle:
    "ML and Deep Learning are the foundation of modern AI. Understanding these algorithms from scratch is the key differentiator for researchers and engineers in 2024-2026.",
  items: [
    {
      iconName: "TrendingUp",
      value: "$280B+",
      description:
        "Projected ML market by 2030, up from ~$55-75B in 2024 (CAGR above 30%), with foundational ML skills in unprecedented demand.",
      source: "Market Research",
      sourceHref: "https://grandviewresearch.com/industry-analysis/machine-learning-market",
    },
    {
      iconName: "Zap",
      value: "PyTorch + scikit-learn",
      description:
        "PyTorch and scikit-learn remain the standard tools for ML research and production, powering models from startups to Fortune 500 companies.",
      source: "PyTorch",
      sourceHref: "https://pytorch.org/",
    },
    {
      iconName: "Database",
      value: "From Scratch = Deep Understanding",
      description:
        "Engineers who implement algorithms from scratch consistently outperform those who only use high-level APIs, according to hiring managers at top tech companies.",
      source: "ML Engineering",
      sourceHref: "https://en.wikipedia.org/wiki/Machine_learning",
    },
    {
      iconName: "Building2",
      value: "Jobs at High-Tech Companies",
      description:
        "Companies like Google, Amazon, and Meta have thousands of ML engineer positions, with strong demand for candidates who understand algorithms at a fundamental level.",
      source: "LinkedIn ML Jobs",
      sourceHref: "https://www.linkedin.com/jobs/machine-learning-engineer-jobs/",
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
    title: "Lead AI Scientist, Vizuara AI Labs",
    intro:
      "If the email discussion goes well and we find the candidate genuinely interested in research, we also provide a 1-on-1 15-minute talk with our Lead AI Scientist, Prathamesh Joshi.",
    bio: "Prathamesh Joshi is a Lead AI Scientist at Vizuara AI Labs, with prior experience at the Max Planck Institute, Germany. His expertise spans Generative AI and Scientific Machine Learning, with a strong publication record across ICLR Workshops, IEEE conferences, and other top venues. He has also mentored students through intensive bootcamps, guiding them toward publications at NeurIPS Workshops, ICLR, JuliaCon, and AAAI Workshops.",
    photo: "/team/prathamesh-joshi.png",
  },
};

export const nextCohortConfig: NextCohortPopupConfig = {
  startDate: "2026-04-27",
  cadenceDays: 15,
  message: "Join the next batch of the ML-DL Research Bootcamp",
  ctaLabel: "Enroll Now",
  ctaHref: "https://ml-dl-research.vizuara.ai/#pricing",
  delayMs: 2500,
};
