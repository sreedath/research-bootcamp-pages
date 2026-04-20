import type { CourseCategory } from "@/types/marketplace";

interface CategoryStyle {
  bg: string;           // solid bg for pills/bars
  border: string;       // border color for card
  gradient: string;     // gradient overlay on image (top-to-bottom tint)
  ring: string;         // hover ring color
  leftBar: string;      // left accent bar
}

export const categoryStyles: Record<CourseCategory | "multi-category", CategoryStyle> = {
  foundations: {
    bg: "bg-blue-500",
    border: "border-l-blue-500",
    gradient: "from-blue-500/25 via-transparent to-blue-500/5",
    ring: "hover:ring-blue-500/30",
    leftBar: "bg-blue-500",
  },
  "ml-dl": {
    bg: "bg-indigo-500",
    border: "border-l-indigo-500",
    gradient: "from-indigo-500/25 via-transparent to-indigo-500/5",
    ring: "hover:ring-indigo-500/30",
    leftBar: "bg-indigo-500",
  },
  genai: {
    bg: "bg-violet-500",
    border: "border-l-violet-500",
    gradient: "from-violet-500/25 via-transparent to-violet-500/5",
    ring: "hover:ring-violet-500/30",
    leftBar: "bg-violet-500",
  },
  "build-from-scratch": {
    bg: "bg-orange-500",
    border: "border-l-orange-500",
    gradient: "from-orange-500/25 via-transparent to-orange-500/5",
    ring: "hover:ring-orange-500/30",
    leftBar: "bg-orange-500",
  },
  "nlp-cv": {
    bg: "bg-purple-500",
    border: "border-l-purple-500",
    gradient: "from-purple-500/25 via-transparent to-purple-500/5",
    ring: "hover:ring-purple-500/30",
    leftBar: "bg-purple-500",
  },
  "reinforcement-learning": {
    bg: "bg-green-500",
    border: "border-l-green-500",
    gradient: "from-green-500/25 via-transparent to-green-500/5",
    ring: "hover:ring-green-500/30",
    leftBar: "bg-green-500",
  },
  agents: {
    bg: "bg-amber-500",
    border: "border-l-amber-500",
    gradient: "from-amber-500/25 via-transparent to-amber-500/5",
    ring: "hover:ring-amber-500/30",
    leftBar: "bg-amber-500",
  },
  robotics: {
    bg: "bg-cyan-500",
    border: "border-l-cyan-500",
    gradient: "from-cyan-500/25 via-transparent to-cyan-500/5",
    ring: "hover:ring-cyan-500/30",
    leftBar: "bg-cyan-500",
  },
  "rag-finetuning": {
    bg: "bg-teal-500",
    border: "border-l-teal-500",
    gradient: "from-teal-500/25 via-transparent to-teal-500/5",
    ring: "hover:ring-teal-500/30",
    leftBar: "bg-teal-500",
  },
  sciml: {
    bg: "bg-rose-500",
    border: "border-l-rose-500",
    gradient: "from-rose-500/25 via-transparent to-rose-500/5",
    ring: "hover:ring-rose-500/30",
    leftBar: "bg-rose-500",
  },
  "software-dev": {
    bg: "bg-sky-500",
    border: "border-l-sky-500",
    gradient: "from-sky-500/25 via-transparent to-sky-500/5",
    ring: "hover:ring-sky-500/30",
    leftBar: "bg-sky-500",
  },
  workshops: {
    bg: "bg-yellow-500",
    border: "border-l-yellow-500",
    gradient: "from-yellow-500/25 via-transparent to-yellow-500/5",
    ring: "hover:ring-yellow-500/30",
    leftBar: "bg-yellow-500",
  },
  "inference-engineering": {
    bg: "bg-red-500",
    border: "border-l-red-500",
    gradient: "from-red-500/25 via-transparent to-red-500/5",
    ring: "hover:ring-red-500/30",
    leftBar: "bg-red-500",
  },
  "research-mentorship": {
    bg: "bg-emerald-500",
    border: "border-l-emerald-500",
    gradient: "from-emerald-500/25 via-transparent to-emerald-500/5",
    ring: "hover:ring-emerald-500/30",
    leftBar: "bg-emerald-500",
  },
  "multi-category": {
    bg: "bg-fuchsia-500",
    border: "border-l-fuchsia-500",
    gradient: "from-fuchsia-500/25 via-transparent to-fuchsia-500/5",
    ring: "hover:ring-fuchsia-500/30",
    leftBar: "bg-fuchsia-500",
  },
};

// Backwards compat
export const categoryColors: Record<CourseCategory | "multi-category", string> = Object.fromEntries(
  Object.entries(categoryStyles).map(([k, v]) => [k, v.bg])
) as Record<CourseCategory | "multi-category", string>;
