"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { Course } from "@/types/marketplace";
import { getThumbnail } from "@/thumbnails";
import { formatPrice } from "@/utils/format-price";
import { getCourseInstructors } from "@/utils/instructor-map";
import { categories } from "@/data/categories";
import { researchCourseIds } from "@/utils/research-ids";

const popularIds = new Set([
  "genai-industry-professional",
  "ml-dl-research",
  "rl-research-bootcamp",
  "cv-research-bootcamp",
  "ai-agents-pro",
  "build-gpt-from-scratch",
  "industry-rag-workshop",
  "vla-researcher",
]);

const newIds = new Set([
  "genai-fundamentals-jan-2026",
  "build-llm-jan-2026",
  "llm-deployment-production-jan-2026",
  "llm-capstone-jan-2026",
  "math-foundations-jan-2026",
  "ml-dl-mastery-jan-2026",
  "ml-dl-capstone-jan-2026",
  "nlp-cv-mastery-jan-2026",
  "context-engineering-industry",
  "context-engineering-engineer",
  "vla-autonomous-driving-research",
]);

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  const Thumbnail = getThumbnail(course.category, course.id, "course");
  const categoryLabel =
    categories.find((c) => c.id === course.category)?.label ?? course.category;
  const isPopular = popularIds.has(course.id);
  const isNew = newIds.has(course.id);
  const isResearch = researchCourseIds.has(course.id);
  const isArchive = course.cohort?.includes("2025") ?? false;
  const instructors = getCourseInstructors(course.category, course.hasMentorship, course.id);

  return (
    <motion.a
      href={course.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
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

        {/* Top-left: badges */}
        <div className="absolute top-2 left-2 flex items-center gap-1.5 z-10">
          {course.cohort && (
            <span className="rounded-md bg-white/90 px-2 py-0.5 text-[10px] font-semibold text-gray-700 shadow-sm backdrop-blur-sm">
              {course.cohort}
            </span>
          )}
        </div>

        {/* Top-right: status badges */}
        <div className="absolute top-2 right-2 flex flex-col items-end gap-1 z-10">
          {isResearch && (
            <span className="rounded-md bg-primary px-2 py-0.5 text-[10px] font-bold text-primary-foreground shadow-sm">
              Research Bootcamp
            </span>
          )}
          {isPopular && (
            <span className="rounded-md bg-white/90 px-2 py-0.5 text-[10px] font-bold text-gray-700 shadow-sm backdrop-blur-sm">
              Bestseller
            </span>
          )}
          {isNew && (
            <span className="rounded-md bg-white/90 px-2 py-0.5 text-[10px] font-bold text-primary shadow-sm backdrop-blur-sm">
              New
            </span>
          )}
          {isArchive && (
            <span className="rounded-md bg-gray-500/90 px-2 py-0.5 text-[10px] font-bold text-white shadow-sm">
              Archive
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-2 p-4">
        <span className="inline-block w-fit rounded-full bg-muted px-2.5 py-0.5 text-[10px] font-medium text-muted-foreground">
          {categoryLabel}
        </span>
        <h3 className="line-clamp-2 text-sm font-semibold leading-tight text-foreground group-hover:text-primary transition-colors">
          {course.name}
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
            {formatPrice(course.price)}
          </span>
        </div>
      </div>
    </motion.a>
  );
}
