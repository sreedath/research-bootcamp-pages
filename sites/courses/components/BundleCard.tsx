"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Package } from "lucide-react";
import type { Bundle } from "@/types/marketplace";
import { getThumbnail } from "@/thumbnails";
import { formatPrice } from "@/utils/format-price";
import { getBundleInstructors } from "@/utils/instructor-map";
import { categories } from "@/data/categories";
import { researchBundleIds } from "@/utils/research-ids";

const bestValueIds = new Set([
  "math-ml-dl-genai-gpt-rag-finetuning-agents-vision",
  "genai-gpt-rag-finetuning-agents-vision",
  "language-reasoning-vision-rag-finetuning-agents",
  "minor-ai-genai-robotics",
  "ai-genai-minors",
]);

const bundleCourseCounts: Record<string, number> = {
  "inference-entire-bundle": 7,
  "inference-p1-p2-roadmap-mentorship": 5,
  "inference-p1-p2-mentorship": 4,
  "inference-p1-p2-speaker-roadmap": 5,
  "inference-p1-p2-speaker": 4,
  "inference-p2-roadmap-mentorship": 4,
  "inference-p1-roadmap-mentorship": 4,
  "inference-p2-mentorship": 3,
  "inference-p1-p2-roadmap": 4,
  "inference-p1-mentorship": 3,
  "inference-p2-speaker": 3,
  "inference-p1-speaker": 3,
  "inference-p2-roadmap": 3,
  "inference-p1-roadmap": 3,
  "minor-ai-genai-robotics": 8,
  "minor-genai-rl-research": 6,
  "ai-genai-minors": 6,
  "math-ml-dl-genai-gpt-rag-finetuning-agents-vision": 11,
  "genai-gpt-rag-finetuning-agents-vision": 8,
  "language-reasoning-vision-rag-finetuning-agents": 6,
  "minor-genai-july-2025": 4,
  "minor-ai-july-2025": 4,
  "ai-bootcamp-bundle": 4,
  "programmed-electives-genai": 4,
  "minor-ai": 4,
  "minor-ai-jan-2026": 4,
  "minor-genai-jan-2026": 4,
  "vla-robotlearning-softwaredev": 3,
  "vla-worldmodels-softwaredev": 3,
  "hands-on-rl-cv-transformers": 3,
  "language-reasoning-vision-agents": 4,
  "transition-ml-july-2025": 3,
  "transition-ml": 3,
  "context-engineering-rag": 2,
  "llm-gpt-slm-rl": 4,
  "slm-hands-on-rl": 2,
  "slm-rag-finetuning-agents": 4,
  "language-reasoning-vision": 3,
  "ml-dl-nlp-cv-july-2025": 4,
  "ml-dl-nlp-cv": 4,
  "archive-ai-genai-jan-2025": 4,
  "foundations-ml-dl-sciml": 4,
  "agents-rag-finetuning": 3,
  "archive-genai-jan-2025": 2,
  "archive-ai-jan-2025": 2,
  "vit-nanovlm-deit": 3,
};

const newBundleIds = new Set([
  "minor-ai-jan-2026",
  "minor-genai-jan-2026",
  "context-engineering-rag",
]);

interface BundleCardProps {
  bundle: Bundle;
}

export default function BundleCard({ bundle }: BundleCardProps) {
  const Thumbnail = getThumbnail(bundle.category, bundle.id, "bundle");
  const categoryLabel =
    bundle.category === "multi-category"
      ? "Multi-Course"
      : categories.find((c) => c.id === bundle.category)?.label ??
        bundle.category;
  const isBestValue = bestValueIds.has(bundle.id);
  const isNew = newBundleIds.has(bundle.id);
  const courseCount = bundleCourseCounts[bundle.id];
  const instructors = getBundleInstructors(bundle.category, bundle.id);

  return (
    <motion.a
      href={bundle.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:border-secondary/40 hover:shadow-lg hover:shadow-secondary/5"
      whileHover={{ y: -4 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {/* Thumbnail */}
      <div className="relative aspect-video w-full overflow-hidden bg-white">
        <Thumbnail />

        {/* Subtle hover darken */}
        <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/5 pointer-events-none" />

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />

        {/* Top-left: Bundle + course count */}
        <div className="absolute top-2 left-2 flex items-center gap-1.5 z-10">
          <span className="rounded-md bg-secondary px-2 py-0.5 text-[10px] font-bold text-secondary-foreground shadow-sm">
            Bundle
          </span>
          {courseCount && (
            <span className="flex items-center gap-1 rounded-md bg-white/90 px-2 py-0.5 text-[10px] font-semibold text-gray-700 shadow-sm backdrop-blur-sm">
              <Package className="h-3 w-3" />
              {courseCount} courses
            </span>
          )}
        </div>

        {/* Top-right: status badges */}
        <div className="absolute top-2 right-2 flex flex-col items-end gap-1 z-10">
          {researchBundleIds.has(bundle.id) && (
            <span className="rounded-md bg-primary px-2 py-0.5 text-[10px] font-bold text-primary-foreground shadow-sm">
              Research Bootcamp
            </span>
          )}
          {isBestValue && (
            <span className="rounded-md bg-white/90 px-2 py-0.5 text-[10px] font-bold text-gray-700 shadow-sm backdrop-blur-sm">
              Best Value
            </span>
          )}
          {isNew && (
            <span className="rounded-md bg-white/90 px-2 py-0.5 text-[10px] font-bold text-primary shadow-sm backdrop-blur-sm">
              New
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-2 p-4">
        <span className="inline-block w-fit rounded-full bg-muted px-2.5 py-0.5 text-[10px] font-medium text-muted-foreground">
          {categoryLabel}
        </span>
        <h3 className="line-clamp-2 text-sm font-semibold leading-tight text-foreground group-hover:text-secondary transition-colors">
          {bundle.name}
        </h3>
        <div className="mt-auto flex items-center justify-between pt-2 border-t border-border/50">
          {/* Instructor */}
          <div className="flex items-center gap-1.5">
            <div className="flex -space-x-1.5">
              {instructors.map((inst) => (
                <Image
                  key={inst.name}
                  src={inst.photo}
                  alt={inst.name}
                  width={22}
                  height={22}
                  className="h-[22px] w-[22px] rounded-full border-2 border-card object-cover"
                  unoptimized
                />
              ))}
            </div>
            <span className="text-[10px] text-muted-foreground truncate max-w-[90px]">
              {instructors.length === 1
                ? instructors[0].name
                : instructors.map((i) => i.name.split(" ")[1]).join(", ")}
            </span>
          </div>
          {/* Price */}
          <span className="text-sm font-bold text-primary whitespace-nowrap">
            {formatPrice(bundle.price)}
          </span>
        </div>
      </div>
    </motion.a>
  );
}
