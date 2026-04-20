export type CourseCategory =
  | "foundations"
  | "ml-dl"
  | "genai"
  | "build-from-scratch"
  | "nlp-cv"
  | "reinforcement-learning"
  | "agents"
  | "robotics"
  | "rag-finetuning"
  | "sciml"
  | "software-dev"
  | "workshops"
  | "inference-engineering"
  | "research-mentorship";

export interface Course {
  id: string;
  name: string;
  url: string;
  price: number;
  category: CourseCategory;
  cohort?: string;
  hasMentorship: boolean;
}

export interface Bundle {
  id: string;
  name: string;
  url: string;
  price: number;
  hasMentorship: boolean;
  category: CourseCategory | "multi-category";
}

export interface CategoryDef {
  id: CourseCategory | "all";
  label: string;
  icon: string;
}

export type SortOption = "default" | "price-asc" | "price-desc" | "name";
export type ActiveTab = "courses" | "bundles" | "research";
