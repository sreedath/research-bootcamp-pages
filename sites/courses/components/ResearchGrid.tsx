"use client";

import type { Course, Bundle } from "@/types/marketplace";
import CourseCard from "./CourseCard";
import BundleCard from "./BundleCard";

interface ResearchItem {
  itemType: "course" | "bundle";
}

type ResearchCourse = Course & { itemType: "course" };
type ResearchBundle = Bundle & { itemType: "bundle" };

interface ResearchGridProps {
  items: (ResearchCourse | ResearchBundle)[];
}

export default function ResearchGrid({ items }: ResearchGridProps) {
  if (items.length === 0) {
    return (
      <div className="py-16 text-center">
        <p className="text-lg text-muted-foreground">
          No research programs match your search. Try adjusting your filters.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {items.map((item) =>
        item.itemType === "course" ? (
          <CourseCard key={`c-${item.id}`} course={item} />
        ) : (
          <BundleCard key={`b-${item.id}`} bundle={item} />
        )
      )}
    </div>
  );
}
