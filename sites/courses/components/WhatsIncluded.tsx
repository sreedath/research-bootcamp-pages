"use client";

import { motion } from "framer-motion";
import {
  PlayCircle,
  FileText,
  Code2,
  ClipboardList,
  BookOpen,
  Infinity,
} from "lucide-react";

const features = [
  {
    icon: PlayCircle,
    title: "Full Lecture Videos",
    description: "HD recordings of every session, structured for self-paced learning",
  },
  {
    icon: FileText,
    title: "Handwritten Notes",
    description: "Detailed notes from each lecture for quick reference and revision",
  },
  {
    icon: Code2,
    title: "Code Files and Projects",
    description: "Production-quality code repositories with hands-on projects",
  },
  {
    icon: ClipboardList,
    title: "Assignments and Quizzes",
    description: "Practice problems and assessments to reinforce your learning",
  },
  {
    icon: BookOpen,
    title: "PDF Books and Resources",
    description: "Comprehensive study materials and curated reading lists",
  },
  {
    icon: Infinity,
    title: "Lifetime Access",
    description: "No expiry dates. Learn at your own pace, revisit anytime",
  },
];

export default function WhatsIncluded() {
  return (
    <section className="py-16 bg-card/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-3xl font-bold italic text-foreground sm:text-4xl">
            What is Included
          </h2>
          <p className="mt-2 text-muted-foreground">
            Every course comes packed with everything you need to succeed
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              className="flex gap-4 rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/30"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <feature.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
