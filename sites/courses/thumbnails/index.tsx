"use client";

import Image from "next/image";
import type { CourseCategory } from "@/types/marketplace";
import type { ComponentType } from "react";
import NeuralNetAnim from "./animated/NeuralNetAnim";

/**
 * Get thumbnail for a course or bundle.
 * Each course has a unique PNG at /thumbnails/courses/{id}.png
 * Each bundle has a unique PNG at /thumbnails/bundles/{id}.png
 * Falls back to animated SVG if PNG doesn't exist.
 */
export function getThumbnail(
  category: CourseCategory | "multi-category",
  id: string,
  type: "course" | "bundle" = "course"
): ComponentType {
  const pngSrc = `/thumbnails/${type}s/${id}.png`;

  return function PngThumbnail() {
    return (
      <Image
        src={pngSrc}
        alt={id}
        fill
        className="object-contain"
        style={{ filter: "grayscale(70%)" }}
        unoptimized
        onError={(e) => {
          // Hide broken image, parent bg will show
          (e.target as HTMLImageElement).style.display = "none";
        }}
      />
    );
  };
}

/**
 * Fallback animated thumbnail (used if PNG loading fails).
 */
export function getAnimatedThumbnail(id: string): ComponentType {
  let hash = 0;
  for (let i = 0; i < id.length; i++) {
    hash = ((hash << 5) - hash + id.charCodeAt(i)) | 0;
  }
  const seed = Math.abs(hash);

  return function AnimThumbnail() {
    return <NeuralNetAnim seed={seed} />;
  };
}
