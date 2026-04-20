import { useState, useMemo } from "react";
import type {
  Course,
  Bundle,
  CourseCategory,
  SortOption,
  ActiveTab,
} from "@/types/marketplace";
import { researchCourseIds, researchBundleIds } from "@/utils/research-ids";

// Fisher-Yates shuffle with a seed generated once per page load
function shuffle<T>(arr: T[]): T[] {
  const result = [...arr];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

export function useSearch(courses: Course[], bundles: Bundle[]) {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<
    CourseCategory | "all"
  >("all");
  const [sortBy, setSortBy] = useState<SortOption>("default");

  // Shuffled order created once per mount (page load)
  const [shuffledCourses] = useState(() => shuffle(courses));
  const [shuffledBundles] = useState(() => shuffle(bundles));
  const [activeTab, setActiveTab] = useState<ActiveTab>("courses");

  const filteredCourses = useMemo(() => {
    const q = query.toLowerCase().trim();
    let filtered = shuffledCourses.filter((c) => c.price >= 1000);

    if (q) {
      filtered = filtered.filter(
        (c) =>
          c.name.toLowerCase().includes(q) ||
          c.category.toLowerCase().includes(q) ||
          (c.cohort && c.cohort.toLowerCase().includes(q))
      );
    }

    if (selectedCategory !== "all") {
      filtered = filtered.filter((c) => c.category === selectedCategory);
    }

    if (sortBy === "default") return filtered;
    return [...filtered].sort((a, b) => {
      if (sortBy === "price-asc") return a.price - b.price;
      if (sortBy === "price-desc") return b.price - a.price;
      return a.name.localeCompare(b.name);
    });
  }, [shuffledCourses, query, selectedCategory, sortBy]);

  const filteredBundles = useMemo(() => {
    const q = query.toLowerCase().trim();
    let filtered = shuffledBundles;

    if (q) {
      filtered = filtered.filter(
        (b) =>
          b.name.toLowerCase().includes(q) ||
          b.category.toLowerCase().includes(q)
      );
    }

    if (selectedCategory !== "all") {
      filtered = filtered.filter(
        (b) =>
          b.category === selectedCategory || b.category === "multi-category"
      );
    }

    if (sortBy === "default") return filtered;
    return [...filtered].sort((a, b) => {
      if (sortBy === "price-asc") return a.price - b.price;
      if (sortBy === "price-desc") return b.price - a.price;
      return a.name.localeCompare(b.name);
    });
  }, [shuffledBundles, query, selectedCategory, sortBy]);

  // Research tab: courses and bundles with mentorship (research bootcamp plans)
  const filteredResearch = useMemo(() => {
    const q = query.toLowerCase().trim();
    const researchCourses = shuffledCourses.filter((c) => c.price >= 1000 && researchCourseIds.has(c.id));
    const researchBundles = shuffledBundles.filter((b) => researchBundleIds.has(b.id));

    let filtered = shuffle([
      ...researchCourses.map((c) => ({ ...c, itemType: "course" as const })),
      ...researchBundles.map((b) => ({ ...b, itemType: "bundle" as const })),
    ]);

    if (q) {
      filtered = filtered.filter(
        (item) =>
          item.name.toLowerCase().includes(q) ||
          item.category.toLowerCase().includes(q)
      );
    }

    if (selectedCategory !== "all") {
      filtered = filtered.filter(
        (item) =>
          item.category === selectedCategory || item.category === "multi-category"
      );
    }

    if (sortBy === "default") return filtered;
    return [...filtered].sort((a, b) => {
      if (sortBy === "price-asc") return a.price - b.price;
      if (sortBy === "price-desc") return b.price - a.price;
      return a.name.localeCompare(b.name);
    });
  }, [shuffledCourses, shuffledBundles, query, selectedCategory, sortBy]);

  return {
    query,
    setQuery,
    selectedCategory,
    setSelectedCategory,
    sortBy,
    setSortBy,
    activeTab,
    setActiveTab,
    filteredCourses,
    filteredBundles,
    filteredResearch,
  };
}
