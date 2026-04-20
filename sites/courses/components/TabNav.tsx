"use client";

import type { ActiveTab } from "@/types/marketplace";

interface TabNavProps {
  activeTab: ActiveTab;
  onTabChange: (tab: ActiveTab) => void;
  courseCount: number;
  bundleCount: number;
  researchCount: number;
}

export default function TabNav({
  activeTab,
  onTabChange,
  courseCount,
  bundleCount,
  researchCount,
}: TabNavProps) {
  const tabs: { id: ActiveTab; label: string; count: number }[] = [
    { id: "courses", label: "Courses", count: courseCount },
    { id: "bundles", label: "Bundles", count: bundleCount },
    { id: "research", label: "Research", count: researchCount },
  ];

  return (
    <div className="flex gap-1 rounded-lg border border-border bg-card p-1">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`flex-1 rounded-md px-3 py-2 text-xs sm:text-sm font-medium transition-all cursor-pointer text-center whitespace-nowrap ${
            activeTab === tab.id
              ? "bg-primary text-primary-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          {tab.label} ({tab.count})
        </button>
      ))}
    </div>
  );
}
