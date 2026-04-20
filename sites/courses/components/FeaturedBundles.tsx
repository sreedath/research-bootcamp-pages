"use client";

import { motion } from "framer-motion";
import type { Bundle } from "@/types/marketplace";
import { getThumbnail } from "@/thumbnails";
import { formatPrice } from "@/utils/format-price";
import { Star, Package } from "lucide-react";

const featuredCourseCounts: Record<string, number> = {
  "math-ml-dl-genai-gpt-rag-finetuning-agents-vision": 11,
  "genai-gpt-rag-finetuning-agents-vision": 8,
  "language-reasoning-vision-rag-finetuning-agents": 6,
};

interface FeaturedBundlesProps {
  bundles: Bundle[];
}

export default function FeaturedBundles({ bundles }: FeaturedBundlesProps) {
  return (
    <section className="py-16" id="bundles">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="mb-2 inline-block rounded-full bg-secondary/10 px-3 py-1 text-xs font-medium text-secondary">
            Best Value
          </span>
          <h2 className="font-serif text-3xl font-bold italic text-foreground sm:text-4xl">
            Featured Bundles
          </h2>
          <p className="mt-2 text-muted-foreground">
            Save more when you learn more. Our most popular course bundles.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {bundles.map((bundle, i) => {
            const Thumbnail = getThumbnail(bundle.category, bundle.id, "bundle");
            return (
              <motion.a
                key={bundle.id}
                href={bundle.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col overflow-hidden rounded-2xl border-2 border-border bg-card transition-all duration-300 hover:border-secondary/60 hover:shadow-xl hover:shadow-secondary/10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -6 }}
              >
                {i === 0 && (
                  <div className="absolute top-0 left-0 right-0 bg-amber-500 py-1.5 text-center text-xs font-bold text-white z-10 tracking-wide shadow-md">
                    MOST POPULAR
                  </div>
                )}
                <div className="aspect-video w-full overflow-hidden bg-white relative">
                  <Thumbnail />
                </div>
                <div className="flex flex-1 flex-col gap-3 p-5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <Star
                          key={j}
                          className="h-3 w-3 fill-secondary text-secondary"
                        />
                      ))}
                      <span className="ml-1 text-xs text-muted-foreground">
                        {i === 0 ? "4.97" : i === 1 ? "4.93" : "4.91"}
                      </span>
                    </div>
                    {featuredCourseCounts[bundle.id] && (
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Package className="h-3.5 w-3.5" />
                        {featuredCourseCounts[bundle.id]} courses
                      </span>
                    )}
                  </div>
                  <h3 className="text-base font-semibold leading-tight text-foreground group-hover:text-secondary transition-colors">
                    {bundle.name}
                  </h3>
                  {bundle.hasMentorship && (
                    <span className="inline-block w-fit rounded-full bg-secondary/10 px-2 py-0.5 text-[10px] font-medium text-secondary">
                      With Team Vizuara Active Mentorship
                    </span>
                  )}
                  <div className="mt-auto flex items-end justify-between pt-2">
                    <span className="text-2xl font-bold text-primary">
                      {formatPrice(bundle.price)}
                    </span>
                    <span className="rounded-lg bg-primary/10 px-2 py-1 text-xs font-semibold text-primary">
                      Enroll Now
                    </span>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
