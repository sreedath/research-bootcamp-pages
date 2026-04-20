import type { CourseCategory } from "@/types/marketplace";

export interface Instructor {
  name: string;
  photo: string;
}

const RAJ: Instructor = { name: "Dr. Raj Dandekar", photo: "/instructors/Raj.jpeg" };
const SREEDATH: Instructor = { name: "Dr. Sreedath Panat", photo: "/instructors/SreedathP.png" };
const RAJAT: Instructor = { name: "Dr. Rajat Dandekar", photo: "/instructors/Rajat.png" };

/** Per-course instructor overrides (by course/bundle ID) */
const courseOverrides: Record<string, Instructor[]> = {
  // Vision/multimodal courses -> Sreedath
  "transformers-vision-multimodal-pro": [SREEDATH],
  "vla-autonomous-driving-research": [SREEDATH],
  "vla-autonomous-driving-pro": [SREEDATH],
  "build-vit-from-scratch": [SREEDATH],
  "build-vit-from-scratch-2": [SREEDATH],
  "build-nanovlm": [SREEDATH],
  "build-deit": [SREEDATH],

  // VLA with world models -> Rajat
  "vla-researcher": [RAJAT],
  "vla-engineer": [RAJAT],

  // Minor in robotics -> Sreedath + Rajat
  "minor-in-robotics": [SREEDATH, RAJAT],

  // SciML bootcamp -> Raj only
  "sciml-industry-professional": [RAJ],
  "sciml-researcher": [RAJ],
  "sciml-community": [RAJ],
  "sciml-student": [RAJ],
  "sciml-july-2025": [RAJ],
  "sciml-jan-2025-archive": [RAJ],

  // Inference Engineering -> Raj only
  "inference-phase1-phase2": [RAJ],
  "5d-parallelism-industry": [RAJ],
  "inference-mentorship": [RAJ],
  "inference-phase2": [RAJ],
  "inference-guest-speaker": [RAJ],
  "inference-phase1": [RAJ],
  "5d-parallelism-engineer": [RAJ],
  "inference-roadmap-starter": [RAJ],

  // ML-DL self-paced -> Raj only
  "ml-dl-mastery": [RAJ],
  "ml-dl-mastery-july-2025": [RAJ],
  "ml-dl-mastery-jan-2026": [RAJ],
  "ml-dl-capstone-jan-2026": [RAJ],
  "ml-dl-jan-2025-archive": [RAJ],

  // RLHF -> Rajat
  "rlhf-from-scratch": [RAJAT],

  // Hands-on RL -> Rajat
  "hands-on-rl-pro": [RAJAT],
};

/** Bundle overrides */
const bundleOverrides: Record<string, Instructor[]> = {
  "vla-robotlearning-softwaredev": [SREEDATH, RAJAT],
  "vla-worldmodels-softwaredev": [RAJAT],
  "hands-on-rl-cv-transformers": [RAJAT, SREEDATH],
  "slm-hands-on-rl": [RAJ, RAJAT],
  "vit-nanovlm-deit": [SREEDATH],
  "archive-ai-genai-jan-2025": [SREEDATH, RAJ],
  "foundations-ml-dl-sciml": [SREEDATH, RAJ],
};

/** Default instructor per category */
const categoryInstructors: Record<CourseCategory, Instructor[]> = {
  genai: [RAJ],
  agents: [RAJ],
  "rag-finetuning": [RAJ],
  "build-from-scratch": [RAJ],
  workshops: [RAJ],
  "software-dev": [RAJ],
  "inference-engineering": [RAJ],
  foundations: [SREEDATH],
  "nlp-cv": [SREEDATH],
  sciml: [SREEDATH],
  robotics: [SREEDATH],
  "ml-dl": [SREEDATH, RAJ],
  "reinforcement-learning": [RAJAT],
  "research-mentorship": [SREEDATH, RAJ, RAJAT],
};

export function getCourseInstructors(
  category: CourseCategory,
  hasMentorship: boolean,
  courseId?: string
): Instructor[] {
  // Check per-course overrides first
  if (courseId && courseOverrides[courseId]) {
    return courseOverrides[courseId];
  }
  // Research bootcamps with mentorship have all 3
  if (hasMentorship) {
    return [SREEDATH, RAJ, RAJAT];
  }
  return categoryInstructors[category] ?? [RAJ];
}

export function getBundleInstructors(
  category: CourseCategory | "multi-category",
  bundleId?: string
): Instructor[] {
  if (bundleId && bundleOverrides[bundleId]) {
    return bundleOverrides[bundleId];
  }
  if (category === "multi-category") {
    return [SREEDATH, RAJ, RAJAT];
  }
  return categoryInstructors[category] ?? [RAJ];
}
