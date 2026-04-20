"use client";

import { Search, SlidersHorizontal } from "lucide-react";
import type { CourseCategory, SortOption } from "@/types/marketplace";
import { categories } from "@/data/categories";
import { resolveIcon } from "@vizuara/ui";

interface SearchAndFilterProps {
  query: string;
  onQueryChange: (q: string) => void;
  selectedCategory: CourseCategory | "all";
  onCategoryChange: (c: CourseCategory | "all") => void;
  sortBy: SortOption;
  onSortChange: (s: SortOption) => void;
  resultCount: number;
}

export default function SearchAndFilter({
  query,
  onQueryChange,
  selectedCategory,
  onCategoryChange,
  sortBy,
  onSortChange,
  resultCount,
}: SearchAndFilterProps) {
  return (
    <div className="space-y-4">
      {/* Search + Sort Row */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search courses and bundles..."
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
            className="w-full rounded-lg border border-border bg-card py-2.5 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="h-4 w-4 text-muted-foreground" />
            <select
              value={sortBy}
              onChange={(e) => onSortChange(e.target.value as SortOption)}
              className="rounded-lg border border-border bg-card px-3 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            >
              <option value="default">Shuffle</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="name">Name: A to Z</option>
            </select>
          </div>
          <span className="whitespace-nowrap text-sm text-muted-foreground">
            {resultCount} results
          </span>
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => {
          const isSelected = selectedCategory === cat.id;
          const Icon = resolveIcon(cat.icon);
          return (
            <button
              key={cat.id}
              onClick={() =>
                onCategoryChange(cat.id as CourseCategory | "all")
              }
              className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium transition-all cursor-pointer ${
                isSelected
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "border border-border bg-card text-muted-foreground hover:border-primary/50 hover:text-foreground"
              }`}
            >
              {Icon && <Icon className="h-3 w-3" />}
              {cat.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
