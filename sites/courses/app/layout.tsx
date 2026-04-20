import type { Metadata } from "next";
import { ThemeProvider } from "@vizuara/ui";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vizuara AI Labs | Self-Paced Courses and Bundles",
  description:
    "Master Machine Learning, Deep Learning, Generative AI, and more with self-paced courses from MIT, IIT Madras, and Purdue alumni. Lifetime access, hands-on projects, and expert instruction.",
  keywords: [
    "machine learning",
    "deep learning",
    "generative AI",
    "LLM",
    "computer vision",
    "reinforcement learning",
    "AI courses",
    "Vizuara",
  ],
  icons: { icon: "/logos/vizuara-logo.png" },
  openGraph: {
    title: "Vizuara AI Labs | Self-Paced Courses and Bundles",
    description:
      "Master AI with courses from MIT, IIT Madras, and Purdue alumni. 70+ courses, lifetime access.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
