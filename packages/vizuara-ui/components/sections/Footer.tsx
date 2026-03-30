"use client";

import { resolveIcon } from "../../utils/icon-resolver";
import type { FooterConfig } from "../../types/bootcamp";

interface FooterProps {
  config: FooterConfig;
}

export default function Footer({ config }: FooterProps) {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          <div className="text-center sm:text-left">
            <span className="text-lg font-bold text-foreground">
              Vizuara<span className="text-primary">.</span>
            </span>
            <p className="mt-1 text-sm text-muted-foreground">
              {config.tagline}
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href={`mailto:${config.email}`}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {config.email}
            </a>
            <div className="flex gap-3">
              {config.socialLinks.map((social) => {
                const Icon = resolveIcon(social.iconName);
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-muted text-muted-foreground transition-colors hover:text-foreground hover:border-primary/30"
                    aria-label={social.label}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-6 text-center">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Vizuara AI Labs. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
