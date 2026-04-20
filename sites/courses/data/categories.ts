import type { CategoryDef } from "@/types/marketplace";

export const categories: CategoryDef[] = [
  { id: "all", label: "All", icon: "LayoutGrid" },
  { id: "foundations", label: "Foundations and Math", icon: "Calculator" },
  { id: "ml-dl", label: "ML and DL", icon: "Brain" },
  { id: "genai", label: "GenAI and LLMs", icon: "Sparkles" },
  { id: "build-from-scratch", label: "Build from Scratch", icon: "Hammer" },
  { id: "nlp-cv", label: "NLP and CV", icon: "Eye" },
  { id: "reinforcement-learning", label: "Reinforcement Learning", icon: "Gamepad2" },
  { id: "agents", label: "AI Agents", icon: "Bot" },
  { id: "robotics", label: "Robotics", icon: "Cpu" },
  { id: "rag-finetuning", label: "RAG and Finetuning", icon: "Database" },
  { id: "sciml", label: "Scientific ML", icon: "FlaskConical" },
  { id: "software-dev", label: "Software Dev", icon: "Code" },
  { id: "workshops", label: "Workshops", icon: "Wrench" },
  { id: "inference-engineering", label: "Inference Engineering", icon: "Zap" },
  { id: "research-mentorship", label: "Research Mentorship", icon: "GraduationCap" },
];
