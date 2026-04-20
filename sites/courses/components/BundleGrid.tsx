"use client";

import type { Bundle } from "@/types/marketplace";
import BundleCard from "./BundleCard";

interface BundleGridProps {
  bundles: Bundle[];
}

export default function BundleGrid({ bundles }: BundleGridProps) {
  if (bundles.length === 0) {
    return (
      <div className="py-16 text-center">
        <p className="text-lg text-muted-foreground">
          No bundles match your search. Try adjusting your filters.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {bundles.map((bundle) => (
        <BundleCard key={bundle.id} bundle={bundle} />
      ))}
    </div>
  );
}
