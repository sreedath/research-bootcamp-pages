import type { Metadata } from "next";
import { ThemeProvider } from "@vizuara/ui";
import { bootcampConfig } from "@/data/bootcamp";
import "./globals.css";

export const metadata: Metadata = {
  title: bootcampConfig.meta.title,
  description: bootcampConfig.meta.description,
  keywords: bootcampConfig.meta.keywords,
  icons: {
    icon: "/logos/vizuara-logo.png",
  },
  openGraph: {
    title: bootcampConfig.meta.ogTitle,
    description: bootcampConfig.meta.ogDescription,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
