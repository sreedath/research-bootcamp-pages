"use client";

import { useRef, useEffect, useState } from "react";

interface AnimatedThumbnailProps {
  seed: number;
  category: string;
  children: React.ReactNode;
}

export default function AnimatedThumbnail({
  children,
}: AnimatedThumbnailProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="h-full w-full overflow-hidden"
      style={{
        // Pause animations when not visible
        animationPlayState: isVisible ? "running" : "paused",
      }}
    >
      <svg
        viewBox="0 0 280 180"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full"
        style={{
          animationPlayState: isVisible ? "running" : "paused",
        }}
      >
        <style>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-6px); }
          }
          @keyframes pulse {
            0%, 100% { opacity: 0.3; }
            50% { opacity: 0.8; }
          }
          @keyframes rotate {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          @keyframes dash {
            to { stroke-dashoffset: -20; }
          }
          @keyframes fadeInOut {
            0%, 100% { opacity: 0.2; }
            50% { opacity: 0.7; }
          }
          @keyframes grow {
            0%, 100% { r: 3; }
            50% { r: 6; }
          }
          @keyframes slideRight {
            from { transform: translateX(-10px); opacity: 0; }
            to { transform: translateX(0px); opacity: 1; }
          }
        `}</style>
        {children}
      </svg>
    </div>
  );
}
