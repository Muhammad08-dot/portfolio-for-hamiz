"use client";

import { useEffect, useState } from "react";
import { site } from "@/data/site";
import Container from "./Container";

export default function Footer() {
  const [year, setYear] = useState<number>(2026);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="w-full border-t border-[#D9D4C7] mt-24 py-12 text-sm">
      <Container className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between font-mono text-xs text-[#5C5A52]">
        <div className="flex items-center gap-2">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#D9480F]" />
          <span>
            {site.name} · {site.role}
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-6">
          {site.socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="text-[#5C5A52] hover:text-[#D9480F] underline underline-offset-4 decoration-[#D9D4C7] hover:decoration-[#D9480F] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D9480F]"
            >
              {s.label.toLowerCase()}
            </a>
          ))}
          <span>© {year}</span>
        </div>
      </Container>
    </footer>
  );
}

