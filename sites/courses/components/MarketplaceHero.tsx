"use client";

import { motion } from "framer-motion";
import { Search, BookOpen, Users, Clock, Award, PlayCircle, FileText, Code2, ClipboardList, Infinity } from "lucide-react";
import Image from "next/image";

interface MarketplaceHeroProps {
  query: string;
  onQueryChange: (q: string) => void;
  totalCourses: number;
  totalBundles: number;
}

const stats = [
  { icon: BookOpen, label: "Self-Paced Courses", value: "60+" },
  { icon: Users, label: "Students Enrolled", value: "11,800+" },
  { icon: Clock, label: "Lifetime Access", value: "Always" },
  { icon: Award, label: "4.9/5 from 600+ Reviews", value: "4.9/5" },
];

export default function MarketplaceHero({
  query,
  onQueryChange,
  totalCourses,
  totalBundles,
}: MarketplaceHeroProps) {
  return (
    <section className="relative overflow-hidden pb-16 pt-28">
      {/* Background pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* University logos */}
          <div className="mb-8 flex flex-col items-center gap-4">
            <span className="text-sm text-muted-foreground">
              Created by alumni from
            </span>
            <div className="flex items-center gap-8 rounded-xl bg-white px-8 py-4">
              <Image
                src="/logos/mit-logo.png"
                alt="MIT"
                width={100}
                height={40}
                unoptimized
              />
              <Image
                src="/logos/iitmadras-logo.png"
                alt="IIT Madras"
                width={60}
                height={60}
                unoptimized
              />
              <Image
                src="/logos/purdue-logo.png"
                alt="Purdue"
                width={50}
                height={27}
                unoptimized
              />
            </div>
          </div>

          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            The most comprehensive AI course library in the world
          </p>
          <h1 className="mb-4 font-serif text-4xl font-bold italic tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Master Every Single AI Concept with{" "}
            <span className="gradient-text">Vizuara</span>
          </h1>
          <p className="mb-8 text-lg text-muted-foreground sm:text-xl">
            {totalCourses} courses and {totalBundles} curated bundles spanning
            every layer of the AI stack, from mathematical foundations to
            production deployment. Built by MIT, IIT Madras, and Purdue researchers.
            Self-paced with lifetime access.
          </p>

          {/* What you get */}
          <div className="mb-8 flex flex-wrap items-center justify-center gap-3">
            {[
              { icon: PlayCircle, label: "Full Lecture Videos" },
              { icon: FileText, label: "Handwritten Notes" },
              { icon: Code2, label: "Code and Projects" },
              { icon: ClipboardList, label: "Assignments" },
              { icon: BookOpen, label: "PDF Resources" },
              { icon: Infinity, label: "Lifetime Access" },
            ].map((item) => (
              <span
                key={item.label}
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card/60 px-3 py-1.5 text-xs text-muted-foreground backdrop-blur-sm"
              >
                <item.icon className="h-3.5 w-3.5 text-primary" />
                {item.label}
              </span>
            ))}
          </div>

          {/* Search bar */}
          <div className="relative mx-auto max-w-xl">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search courses, bundles, or topics..."
              value={query}
              onChange={(e) => onQueryChange(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  document.getElementById("courses")?.scrollIntoView({ behavior: "smooth", block: "start" });
                }
              }}
              className="w-full rounded-xl border border-border bg-card py-3.5 pl-12 pr-12 text-base text-foreground shadow-lg placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
            <button
              onClick={() => document.getElementById("courses")?.scrollIntoView({ behavior: "smooth", block: "start" })}
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-lg bg-primary p-2 sm:px-3 sm:py-1.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 cursor-pointer"
              aria-label="Search"
            >
              <Search className="h-4 w-4 sm:hidden" />
              <span className="hidden sm:inline">Search</span>
            </button>
          </div>

          <p className="mt-4 text-sm text-muted-foreground">
            Not sure where to start?{" "}
            <a
              href="https://roadmap.vizuara.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-primary underline underline-offset-2 hover:text-primary/80 transition-colors"
            >
              Get a personalized AI learning roadmap
            </a>
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="mx-auto mt-12 grid max-w-2xl grid-cols-2 gap-4 sm:grid-cols-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center gap-1 rounded-lg border border-border/50 bg-card/50 p-3 backdrop-blur-sm"
            >
              <stat.icon className="mb-1 h-4 w-4 text-primary" />
              <span className="text-lg font-bold text-foreground">
                {stat.value}
              </span>
              <span className="text-[10px] text-muted-foreground">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
