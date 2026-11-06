"use client";

import { useState } from "react";
import Link from "next/link";
import { site } from "@/data/site";
import Container from "./Container";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#D9D4C7] bg-[#F6F3EC]/95 backdrop-blur-[4px]">
      <Container className="flex items-center justify-between py-4 sm:py-5">
        <Link
          href="/"
          className="font-serif text-2xl tracking-tight text-[#1A1A17] hover:text-[#D9480F] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D9480F]"
          onClick={() => setMobileMenuOpen(false)}
        >
          {site.name}
        </Link>

        {/* Desktop Navigation */}
        <nav
          aria-label="Main Navigation"
          className="hidden md:flex items-center gap-6 font-mono text-xs uppercase tracking-wider text-[#5C5A52]"
        >
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors duration-150 hover:text-[#1A1A17] hover:underline underline-offset-4 decoration-[#D9D4C7] hover:decoration-[#D9480F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D9480F]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-[2px] border border-[#D9D4C7] text-[#1A1A17] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D9480F]"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </Container>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#D9D4C7] bg-[#F6F3EC] px-6 py-4 shadow-lg animate-fade-in">
          <nav className="flex flex-col space-y-3 font-mono text-xs uppercase tracking-wider">
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 text-[#5C5A52] hover:text-[#D9480F] border-b border-[#D9D4C7]/40 last:border-b-0"
              >
                {item.label} →
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
