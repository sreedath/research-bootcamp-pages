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
  title: "What You Can Build with Generative AI",
  subtitle:
    "From RAG-powered chatbots to multimodal vision-language systems, this bootcamp equips you to build production-grade GenAI applications across industries.",
  items: [
    {
      src: "/genai/rag-chatbot.gif",
      alt: "RAG-powered Chatbot System",
      title: "RAG-Powered Chatbot",
    },
    {
      src: "/genai/agents.gif",
      alt: "LLM Agent with LangChain",
      title: "LLM Agents with LangChain",
    },
    {
      src: "/genai/genai-hero.gif",
      alt: "Generative AI Research Bootcamp Overview",
      title: "GenAI Research Projects",
    },
  ],
};

export const certificateConfig: CertificateSectionConfig = {
  label: "Credentials",
  title: "Learn from MIT PhD Researchers",
  subtitle:
    "Our lead instructor Dr. Raj Dandekar holds a PhD from MIT, where he conducted research at the Julia Lab under Prof. Alan Edelman and Chris Rackauckas. Our team brings deep expertise in LLMs, scientific computing, and applied AI research.",
  imageSrc: "/sciml/mit-certificate.jpeg",
  imageAlt: "MIT Certificate of Dr. Raj Dandekar",
};

export const bootcampConfig: BootcampConfig = {
  meta: {
    title: "Generative AI Research Bootcamp | Vizuara AI Labs",
    description:
      "Master Generative AI and LLMs in a 6-week research bootcamp. Learn LLM foundations, prompt engineering, RAG systems, LangChain agents, and multimodal models. Work on industry-level projects and publish LLM research papers. Taught by MIT and Purdue AI PhDs.",
    keywords: [
      "generative AI",
      "large language models",
      "LLMs",
      "transformers",
      "RAG",
      "retrieval augmented generation",
      "LangChain",
      "prompt engineering",
      "BERT",
      "fine-tuning",
      "multimodal AI",
      "vision transformers",
      "research bootcamp",
      "Vizuara AI Labs",
    ],
    ogTitle: "Generative AI Research Bootcamp | Vizuara AI Labs",
    ogDescription:
      "Master LLMs, RAG, prompt engineering, and multimodal AI. Build industry-level projects and publish research with MIT and Purdue PhDs.",
  },

  navbar: {
    links: [
      { label: "Why GenAI", href: "#why" },
      { label: "Curriculum", href: "#curriculum" },
      { label: "Research", href: "#research" },
      { label: "Instructors", href: "#instructors" },
      { label: "Pricing", href: "#pricing" },
    ],
    ctaLabel: "Enroll Now",
    ctaHref: "#pricing",
  },

  hero: {
    badge: "Generative AI Professional Bootcamp",
    headline: "Generative AI",
    headlineHighlight: "Research Bootcamp",
    headlineSuffix: "",
    subtitle:
      "Master Generative AI and LLMs. Work on industry-level LLM projects. Publish LLM research papers. From foundations to RAG systems and multimodal models, build production-grade AI with Python and LangChain.",
    scheduleItems: [
      { iconName: "Clock", text: "30 Topics", color: "text-secondary" },
      { iconName: "Code2", text: "Python", color: "text-primary" },
      { iconName: "Brain", text: "Research Projects", color: "text-secondary" },
    ],
    stats: [
      { value: "85+", label: "Students Trained" },
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
    badge: "Tour the GenAI Bootcamp",
    badgeIconName: "Play",
    label: "Watch",
    heading: "Tour the",
    headingHighlight: "GenAI Bootcamp",
    headingSuffix: "",
    youtubeUrl: "https://www.youtube.com/embed/vb5z1Y0cHFw",
    youtubeTitle: "Tour the GenAI Professional Bootcamp",
  },

  why: {
    label: "Four Core Pillars",
    title: "The Foundations of Generative AI",
    subtitle:
      "We teach four interconnected pillars that form the foundation of modern Generative AI. Each represents a critical capability for building, deploying, and researching LLM-powered systems.",
    items: [
      {
        iconName: "Brain",
        title: "LLM Foundations and Fine-Tuning",
        description:
          "Understand the full LLM evolutionary tree, from BERT to GPT to Flan-T5. Learn to fine-tune models for classification, sentiment analysis, and topic modeling. Deploy models locally using Hugging Face and build practical pipelines with the ChatGPT API.",
        color: "text-primary",
      },
      {
        iconName: "MessageSquare",
        title: "Prompt Engineering and LangChain",
        description:
          "Master prompting fundamentals through advanced methods: in-context learning, Chain-of-Thought, and Tree-of-Thought reasoning. Build complex LLM applications using LangChain chains, memory modules, guardrails, and autonomous agents from scratch.",
        color: "text-secondary",
      },
      {
        iconName: "Search",
        title: "Semantic Search and RAG Systems",
        description:
          "Build end-to-end Retrieval Augmented Generation pipelines. Learn dense retrieval with LLM embeddings, chunking strategies, reranking methods, and evaluation metrics (MAP/nDCG). Create robust, production-grade RAG chatbots for real-world use cases.",
        color: "text-primary",
      },
      {
        iconName: "Eye",
        title: "Multimodal Language Models",
        description:
          "Explore Vision Transformers (ViTs), understand how they differ from CNNs, and learn vision-language models including CLIP, BLIP-2, and LLaVA. Build multimodal AI systems that bridge text, images, and structured data.",
        color: "text-secondary",
      },
      {
        iconName: "Shield",
        title: "LLM Safety and Guardrails",
        description:
          "Learn to set constraints and safety measures for LLM outputs. Implement guardrails for quality control, understand model quantization (8/4-bit, GPTQ/AWQ) for efficient deployment, and build responsible AI systems.",
        color: "text-primary",
      },
      {
        iconName: "Layers",
        title: "Research and Publication",
        description:
          "Work on industry-level LLM research projects aimed at publication. Learn to formulate research problems, design experiments, validate hypotheses, and write scientific papers for conferences and journals.",
        color: "text-secondary",
      },
    ],
  },

  diagrams: {
    label: "Visual Framework",
    title: "How Generative AI Works",
    subtitle:
      "Publication-quality diagrams illustrating the core systems you will master in this bootcamp.",
    diagrams: [
      {
        src: "/diagrams/genai-landscape.png",
        alt: "Generative AI landscape showing LLM foundations, prompt engineering, RAG, and multimodal models",
        title: "The GenAI Landscape",
        description:
          "A high-level overview of the four core pillars: LLM Foundations and Fine-Tuning, Prompt Engineering with LangChain, Semantic Search and RAG Systems, and Multimodal Language Models.",
      },
      {
        src: "/diagrams/rag-pipeline.png",
        alt: "RAG pipeline architecture from document ingestion to answer generation",
        title: "RAG Pipeline Architecture",
        description:
          "The complete Retrieval-Augmented Generation pipeline: document ingestion, chunking, embedding, vector storage, dense retrieval with cross-encoder reranking, and LLM-based answer generation.",
      },
      {
        src: "/diagrams/llm-agent.png",
        alt: "LLM Agent architecture with tools, memory, and reasoning loop",
        title: "LLM Agent Architecture",
        description:
          "An LLM Agent built with LangChain showing the central reasoning engine, tool calling, short-term and long-term memory, chain orchestration, and the Observe-Think-Act reasoning loop.",
      },
    ],
  },

  audience: {
    label: "Who Is This For",
    title: "Designed for Researchers, Engineers, and Professionals",
    subtitle:
      "Whether you come from computer science, engineering, data science, or any other field, this bootcamp teaches you to build and research with the latest Generative AI tools and techniques.",
    items: [
      {
        iconName: "GraduationCap",
        title: "Graduate Researchers",
        description:
          "PhD students and postdocs who want to apply LLMs to their research domain, build RAG systems for literature analysis, or publish papers on Generative AI topics.",
        tags: ["PhD Students", "Postdocs", "Research Scholars"],
      },
      {
        iconName: "Wrench",
        title: "Software Engineers",
        description:
          "Developers looking to integrate LLMs, RAG pipelines, and AI agents into production applications using LangChain, Hugging Face, and modern LLM APIs.",
        tags: ["Backend Engineers", "ML Engineers", "Full-Stack Developers"],
      },
      {
        iconName: "BarChart3",
        title: "Data Scientists",
        description:
          "ML practitioners who want to move beyond traditional models and build LLM-powered systems for text clustering, topic modeling, semantic search, and content generation.",
        tags: ["ML Engineers", "NLP Specialists", "Applied Scientists"],
      },
      {
        iconName: "BookOpen",
        title: "Industry Professionals",
        description:
          "Business leaders, product managers, and consultants who want to understand and leverage Generative AI for strategic decision-making and product development.",
        tags: ["Product Managers", "Consultants", "Technical Leaders"],
      },
    ],
  },

  curriculum: {
    label: "Curriculum",
    title: "A Guided Journey from Foundations to Research",
    subtitle:
      "30 topics spanning LLM foundations, prompt engineering, RAG systems, LangChain agents, and multimodal models.",
    days: [
      // Tab 1: LLM Foundations & Hands-on Projects (Topics 1-9)
      {
        day: 1,
        week: 1,
        title: "Hands-on LLMs: Series Intro",
        iconName: "BookOpen",
        topics: [
          "Overview of LLMs, applications, course structure",
        ],
        exercise: "",
        instructor: "",
      },
      {
        day: 2,
        week: 1,
        title: "The LLM Evolutionary Tree",
        iconName: "Brain",
        topics: [
          "History, milestones, architecture evolution",
        ],
        exercise: "",
        instructor: "",
      },
      {
        day: 3,
        week: 1,
        title: "Running Microsoft Phi-3 using Hugging Face",
        iconName: "Code2",
        topics: [
          "Practical deployment of Microsoft Phi-3 model locally using Hugging Face APIs",
        ],
        exercise: "",
        instructor: "",
      },
      {
        day: 4,
        week: 1,
        title: "Fine-tune BERT (Sentiment)",
        iconName: "Layers",
        topics: [
          "Hands-on session on fine-tuning BERT to perform sentiment analysis",
        ],
        exercise: "",
        instructor: "",
      },
      {
        day: 5,
        week: 1,
        title: "Flan-T5 for Classification",
        iconName: "Zap",
        topics: [
          "Prompt formatting, generative vs discriminative",
        ],
        exercise: "",
        instructor: "",
      },
      {
        day: 6,
        week: 1,
        title: "Using ChatGPT API for Movie Review Classification",
        iconName: "MessageSquare",
        topics: [
          "Utilize OpenAI's ChatGPT API to build a practical sentiment classification pipeline",
        ],
        exercise: "",
        instructor: "",
      },
      {
        day: 7,
        week: 1,
        title: "Text Clustering using Sentence-Transformers",
        iconName: "Target",
        topics: [
          "Implementing text clustering techniques on ArXiv research papers",
        ],
        exercise: "",
        instructor: "",
      },
      {
        day: 8,
        week: 1,
        title: "Topic Modeling with BERTopic",
        iconName: "BarChart3",
        topics: [
          "Hands-on project applying BERTopic to identify themes from ArXiv research papers",
        ],
        exercise: "",
        instructor: "",
      },
      {
        day: 9,
        week: 1,
        title: "LLMs for Text Clustering and Topic Modeling",
        iconName: "Brain",
        topics: [
          "Identification on textual datasets, LLM-assisted clustering",
        ],
        exercise: "",
        instructor: "",
      },
      // Tab 2: Prompt Engineering & LangChain (Topics 10-17)
      {
        day: 10,
        week: 2,
        title: "Intro to Prompt Engineering",
        iconName: "MessageSquare",
        topics: [
          "Fundamentals of crafting effective prompts for maximizing LLM outputs",
        ],
        exercise: "",
        instructor: "",
      },
      {
        day: 11,
        week: 2,
        title: "Advanced Prompt Engineering",
        iconName: "Zap",
        topics: [
          "Deep dive into in-context learning, Chain-of-Thought, and Tree-of-Thought methods",
        ],
        exercise: "",
        instructor: "",
      },
      {
        day: 12,
        week: 2,
        title: "LLM Guardrails",
        iconName: "Shield",
        topics: [
          "Techniques to set constraints, safety measures",
        ],
        exercise: "",
        instructor: "",
      },
      {
        day: 13,
        week: 2,
        title: "LangChain & Agents (Intro)",
        iconName: "Layers",
        topics: [
          "Intro to building complex LLM applications and Agents using LangChain",
        ],
        exercise: "",
        instructor: "",
      },
      {
        day: 14,
        week: 2,
        title: "LLM Quantization",
        iconName: "Cpu",
        topics: [
          "Understanding model quantization methods for efficient deployments of LLMs",
        ],
        exercise: "",
        instructor: "",
      },
      {
        day: 15,
        week: 2,
        title: "Coding Chains (LangChain)",
        iconName: "Code2",
        topics: [
          "Hands on demonstration of creating coding chains using LangChain",
        ],
        exercise: "",
        instructor: "",
      },
      {
        day: 16,
        week: 2,
        title: "How to give Memory to LLMs",
        iconName: "Database",
        topics: [
          "Techniques for implementing short-term and long-term memory in LLM applications",
        ],
        exercise: "",
        instructor: "",
      },
      {
        day: 17,
        week: 2,
        title: "Code your First LLM Agent using LangChain",
        iconName: "Bot",
        topics: [
          "Step-by-step project to build a functioning LLM-powered agent",
        ],
        exercise: "",
        instructor: "",
      },
      // Tab 3: Semantic Search & RAG (Topics 18-25)
      {
        day: 18,
        week: 3,
        title: "Semantic Search & RAG",
        iconName: "Search",
        topics: [
          "Basics of semantic search and RAG concepts",
        ],
        exercise: "",
        instructor: "",
      },
      {
        day: 19,
        week: 3,
        title: "Coding an LLM Dense Retrieval System",
        iconName: "Code2",
        topics: [
          "Build a practical dense retrieval system using LLM embeddings",
        ],
        exercise: "",
        instructor: "",
      },
      {
        day: 20,
        week: 3,
        title: "Chunking Strategies for LLM",
        iconName: "Scissors",
        topics: [
          "Effective strategies for breaking down text into meaningful chunks for retrieval and processing",
        ],
        exercise: "",
        instructor: "",
      },
      {
        day: 21,
        week: 3,
        title: "Reranking for Semantic Search",
        iconName: "ArrowUpDown",
        topics: [
          "Understand and implement reranking methods",
        ],
        exercise: "",
        instructor: "",
      },
      {
        day: 22,
        week: 3,
        title: "Evaluating Retrieval Systems",
        iconName: "BarChart3",
        topics: [
          "Measure retrieval effectiveness using MAP and nDCG",
        ],
        exercise: "",
        instructor: "",
      },
      {
        day: 23,
        week: 3,
        title: "RAG: Intro & Coding",
        iconName: "FileSearch",
        topics: [
          "Hands-on implementation of basic RAG systems",
        ],
        exercise: "",
        instructor: "",
      },
      {
        day: 24,
        week: 3,
        title: "Advanced RAG",
        iconName: "Zap",
        topics: [
          "Explore and apply advanced methodologies in RAG for improving accuracy and context management",
        ],
        exercise: "",
        instructor: "",
      },
      {
        day: 25,
        week: 3,
        title: "Evaluating RAG Systems",
        iconName: "CheckCircle",
        topics: [
          "Best practices and metrics for assessing the performance of RAGs",
        ],
        exercise: "",
        instructor: "",
      },
      // Tab 4: Multimodal Language Models (Topics 26-30)
      {
        day: 26,
        week: 4,
        title: "Vision Transformers: How and Why They Work?",
        iconName: "Eye",
        topics: [
          "Understand ViTs, how they differ from CNNs",
        ],
        exercise: "",
        instructor: "",
      },
      {
        day: 27,
        week: 4,
        title: "Intro to CLIP",
        iconName: "Link",
        topics: [
          "Explore how CLIP bridges vision and language",
        ],
        exercise: "",
        instructor: "",
      },
      {
        day: 28,
        week: 4,
        title: "Intro to BLIP",
        iconName: "ImageIcon",
        topics: [
          "Learn how BLIP enhances text generation",
        ],
        exercise: "",
        instructor: "",
      },
      {
        day: 29,
        week: 4,
        title: "Multimodal LLMs: 30-Minute Summary",
        iconName: "Sparkles",
        topics: [
          "A concise overview of Multimodal LLMs",
        ],
        exercise: "",
        instructor: "",
      },
      {
        day: 30,
        week: 4,
        title: "Series Summary",
        iconName: "Flag",
        topics: [
          "Reviewing the concepts covered, key takeaways",
        ],
        exercise: "",
        instructor: "",
      },
    ],
    weekLabels: {
      1: { label: "LLM Foundations & Hands-on Projects", sessions: "Topics 1-9" },
      2: { label: "Prompt Engineering & LangChain", sessions: "Topics 10-17" },
      3: { label: "Semantic Search & RAG", sessions: "Lectures 18-25" },
      4: { label: "Multimodal Language Models", sessions: "Lectures 26-30" },
    },
  },

  deliverables: {
    label: "What You Get",
    title: "Research-Grade Deliverables",
    subtitle:
      "Everything you need to go from GenAI beginner to building production-grade LLM systems and publishing research.",
    items: [
      {
        iconName: "Code2",
        title: "Complete Python Codebase",
        description:
          "Production-ready Python code for every session, including LLM fine-tuning, RAG pipelines, LangChain agents, and multimodal applications.",
        features: [
          "All lecture code files and Jupyter notebooks",
          "Homework assignments with solutions",
          "Research project starter templates",
          "Fully documented LLM pipelines",
        ],
        gradient: "from-primary/20 to-secondary/20",
      },
      {
        iconName: "FileText",
        title: "Lecture Notes and Videos",
        description:
          "Lifetime access to all session recordings and comprehensive lecture notes covering every Generative AI concept.",
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
          "Industry-level GenAI projects including RAG systems, LLM agents, and multimodal applications ready for your portfolio or publication.",
        features: [
          "End-to-end RAG chatbot system",
          "LLM agent with tool calling",
          "Multimodal AI application",
          "Publication-ready research results",
        ],
        gradient: "from-primary/20 to-secondary/20",
      },
      {
        iconName: "MessageSquare",
        title: "Community and Mentorship",
        description:
          "Join the Vizuara GenAI community on Discord for ongoing collaboration, doubt clearance, and research partnerships.",
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
      "Our instructors are co-founders of Vizuara AI Labs and published researchers in AI and Machine Learning, with expertise spanning LLMs, scientific computing, and applied Generative AI.",
    items: [
      {
        ...INSTRUCTOR_RAJ,
        session: "LLM Foundations, RAG Systems, LangChain Agents, and Advanced Prompt Engineering",
      },
      {
        ...INSTRUCTOR_RAJAT,
        session: "Fine-Tuning, LLM Quantization, Vision Transformers, and Multimodal Models",
      },
      {
        ...INSTRUCTOR_SREEDATH,
        session: "SLM Deployment, Semantic Search, Coding Chains, and CLIP",
      },
    ],
    bookCallout: DEEPSEEK_BOOK,
  },

  researchPapers: {
    label: "Our Research",
    title: "Recent Papers From Our Research",
    subtitle:
      "A few recent GenAI and LLM papers from our research over the past years. Students in the Industry Professional plan work on similar projects aimed at publication.",
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
        title:
          "NanoVLMs: How Small Can We Go and Still Make Coherent Vision Language Models?",
        authors:
          "Mukund Agarwalla, Himanshu Kumar, Raj Dandekar, Rajat Dandekar, Sreedath Panat",
        venue: "arXiv",
        year: 2025,
        abstract:
          "Investigates the minimum size threshold for vision-language models while preserving text generation quality. Introduces ShortDesc and LongDesc datasets and trains VLMs up to 10 times smaller than state-of-the-art small VLMs while maintaining coherent multimodal reasoning.",
        arxivUrl: "https://arxiv.org/abs/2502.07838",
        thumbnail: "/papers/nanovlms-new.png",
        tags: ["VLMs", "Multimodal", "Efficiency"],
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
        tags: ["SLMs", "Attention", "Efficiency"],
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
        tags: ["LLMs", "Classification", "Humor Detection"],
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
        tags: ["LLMs", "MoE", "Efficient LLMs"],
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
        tags: ["LLMs", "Optimization", "Transformers"],
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
2. Physics-Informed Learning Near Critical Transitions (AI for Science, NeurIPS 2025)
3. Scientific Machine Learning for Symbolic Recovery of Relativistic Effects in Black Hole Orbits (AI for Science, NeurIPS 2025)
4. PI-NAV: Physics-Informed Universal Differential Equations for Nanorobot Navigation (ML for Physical Sciences, NeurIPS 2025)
5. VLMs Display a Strong Gender Bias (ICCV 2025, 2 workshops)
6. Unifying Mixture of Experts and Multi-Head Latent Attention for Efficient Language Models (EMNLP 2025 workshop)

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

We tested three approaches head-to-head. Integer Linear Programming (Gurobi) achieved provably optimal solutions up to 19x19. PatternBoost, using transformer-based pattern learning, matched the 2n upper bound up to 14x14 despite never seeing optimal examples during training. Reinforcement learning (PPO) cracked 10x10 grids perfectly but stumbled at 11x11.

The team at Vizuara Technologies Private Limited: PRATHAMESH JOSHI, Raj Abhijit Dandekar, Rajat Dandekar, Sreedath Panat, for their collaboration and expertise in Scientific Machine Learning.

Paper: https://lnkd.in/e8GKqGBs`,
        linkedinUrl:
          "https://www.linkedin.com/posts/pranav-ramanathan_machinelearning-reinforcementlearning-transformers-ugcPost-7409888251085373440-Dnv-",
        embedUrl:
          "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7409888251085373440",
      },
      {
        name: "Miheer Salunke",
        role: "Principal Software Engineer at Red Hat · Australia",
        fullPost: `I just had a very nice spotlight poster session for our research paper at AI For Science workshop at NeurIPS 2025. People were amazed to see our innovation where training some parts of the mathematical equations we curated referring exisiting literature can evaluate individual specific sensory parameters and thereby predict auditory overload of the individual and how the response calculated matched with the ground truth.

Our Universal Differential Equation model used very low resources.
For example: 5mb of memory was used throughout the training which allows us this model to be used on wearables.

I felt very happy when people called this as an interesting innovation.

Special Thanks to Raj Abhijit Dandekar and PRATHAMESH JOSHI for the guidance and review of the paper.`,
        linkedinUrl:
          "https://www.linkedin.com/posts/miheer-salunke-377a9428_i-just-had-a-very-nice-spotlight-poster-session-activity-7403554568787406848-az77",
        embedUrl:
          "https://www.linkedin.com/embed/feed/update/urn:li:activity:7403554568787406848",
      },
      {
        name: "Karishma Battina",
        role: "Senior DevOps Engineer · Commerce, United States",
        fullPost: `I'm happy to share that I'll be presenting my research on Physics-Informed Neural Networks (PINNs) for Ocean Pollutant Modeling at JuliaCon 2026, where researchers and developers collaborate to push Scientific Computing forward!

Using Julia's powerful ecosystem, I developed a PINN-based framework to solve the 2D advection-diffusion equation, enabling fast and accurate predictions of oceanic pollution hotspots.

Huge thanks to my mentors, PRATHAMESH JOSHI, Raj Abhijit Dandekar, Rajat Dandekar, Sreedath Panat, Vizuara Technologies Private Limited team, who have been instrumental in shaping this research.`,
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
        price: "Rs 30,000",
        description:
          "Save 25%. Originally Rs 40,000.",
        features: [
          "Lifetime access to all videos, code files, and homework assignments",
        ],
        href: "https://vizuara.ai/courses/genai-student-plan",
        cta: "Enroll Now",
        popular: false,
        variant: "secondary",
      },
      {
        name: "Industry Professional",
        price: "Rs 1,25,000",
        description:
          "Save 17%. Originally Rs 1,50,000. MIT and Purdue PhDs as your research mentors.",
        features: [
          "Lifetime access to all videos, code files, and homework assignments",
          "Access to bootcamp community on Discord",
          "Assignment checking and doubt clearance",
          "Free access to all ML webinars throughout the year",
          "Access to open list of research problems in GenAI",
          "4-month personalized guidance in doing research",
          "Publishing the research in conferences/journals",
          "How GenAI and LLMs can be integrated in industries",
        ],
        href: "https://vizuara.ai/courses/genai-industry-professional-plan",
        cta: "Enroll Now",
        popular: true,
        variant: "primary",
      },
    ],
  },

  faq: {
    label: "FAQ",
    title: "Frequently Asked Questions",
    subtitle: "Everything you need to know about the Generative AI Research Bootcamp.",
    items: [
      {
        question: "What programming language is used in this bootcamp?",
        answer:
          "The bootcamp uses Python exclusively. All projects use standard Python libraries including Hugging Face Transformers, LangChain, Sentence Transformers, and the OpenAI API. No prior deep learning framework experience is required.",
      },
      {
        question: "Do I need prior experience with machine learning?",
        answer:
          "No prior knowledge is needed. This course starts right from the basics. It is made for students, researchers, and working professionals. We cover LLM foundations from the ground up before moving to advanced topics like RAG and multimodal models.",
      },
      {
        question: "What makes this different from other GenAI courses?",
        answer:
          "Three things set this bootcamp apart: research-grade depth taught by MIT and Purdue PhDs, hands-on projects using real datasets (ArXiv papers, production APIs), and a clear path from learning to publication. The Industry Professional plan includes personalized research mentorship aimed at publishing in conferences and journals.",
      },
      {
        question: "What are the hands-on projects?",
        answer:
          "You will build multiple industry-level projects: fine-tuning BERT and Flan-T5 for classification, building text clustering pipelines on ArXiv papers, creating LangChain agents with memory and tool use, constructing end-to-end RAG chatbots, and implementing multimodal AI with CLIP and BLIP-2.",
      },
      {
        question: "How is the bootcamp structured?",
        answer:
          "The bootcamp covers 30 pre-recorded topics across four pillars: LLM Foundations, Prompt Engineering and LangChain, Semantic Search and RAG, and Multimodal Language Models. All lecture material is available for lifetime access.",
      },
      {
        question: "Can I use these skills in my own domain?",
        answer:
          "Absolutely. The techniques taught in this bootcamp, including RAG systems, fine-tuning, semantic search, and LLM agents, are domain-agnostic. Students have applied them to healthcare, finance, legal tech, education, scientific research, and more.",
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
    headingHighlight: "Generative AI",
    headingSuffix: "?",
    subtitle:
      "Join hundreds of researchers and engineers who have built production-grade LLM systems and published AI research. Start building with the latest Generative AI tools and techniques.",
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
  label: "The GenAI Boom",
  title: "Generative AI Is Moving From Research to Infrastructure",
  subtitle:
    "Large Language Models and GenAI are shifting from academic papers to foundational infrastructure for every industry. Here is why the 2024-2026 window matters.",
  items: [
    {
      iconName: "TrendingUp",
      value: "$280B+",
      description:
        "Projected ML market by 2030, up from ~$55-75B in 2024 (CAGR above 30%), with GenAI emerging as a key industrial segment.",
      source: "Market Research",
      sourceHref: "https://grandviewresearch.com/industry-analysis/machine-learning-market",
    },
    {
      iconName: "Zap",
      value: "ChatGPT + LangChain",
      description:
        "OpenAI's ChatGPT and LangChain have become the standard infrastructure for building LLM-powered applications across industries.",
      source: "OpenAI",
      sourceHref: "https://openai.com/chatgpt",
    },
    {
      iconName: "Database",
      value: "RAG is the New Standard",
      description:
        "Retrieval-Augmented Generation has become the default architecture for enterprise AI, combining LLMs with domain-specific knowledge bases.",
      source: "RAG Architecture",
      sourceHref: "https://en.wikipedia.org/wiki/Retrieval-augmented_generation",
    },
    {
      iconName: "Building2",
      value: "Jobs at High-Tech Companies",
      description:
        "Companies like Google, Meta, and Amazon have dedicated GenAI divisions, and firms across industries are actively hiring LLM and prompt engineering specialists.",
      source: "LinkedIn GenAI Jobs",
      sourceHref: "https://www.linkedin.com/jobs/generative-ai-jobs/",
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
  message: "Join the next batch of the GenAI Research Bootcamp",
  ctaLabel: "Enroll Now",
  ctaHref: "https://genai-research.vizuara.ai/#pricing",
  delayMs: 2500,
};
