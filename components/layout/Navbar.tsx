"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/data/site";
import Container from "./Container";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#D9D4C7] bg-[#F4F0E6]/95 backdrop-blur-[6px]">
      <Container className="flex items-center justify-between py-3.5 sm:py-4">
        {/* Brand Name */}
        <Link
          href="/"
          className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-[#1A1A17] hover:text-[#D9480F] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D9480F]"
          onClick={() => setMobileMenuOpen(false)}
        >
          {site.name}
        </Link>

        {/* Desktop Navigation */}
        <nav
          aria-label="Main Navigation"
          className="hidden md:flex items-center gap-6 font-mono text-xs uppercase tracking-wider text-[#5C5A52]"
        >
          {site.nav.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors duration-150 hover:text-[#1A1A17] hover:underline underline-offset-4 decoration-[#D9D4C7] hover:decoration-[#D9480F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D9480F] ${
                  isActive ? "text-[#D9480F] font-semibold underline decoration-[#D9480F]" : ""
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-[3px] border border-[#D9D4C7] bg-[#ECE7DA]/60 text-[#1A1A17] transition-colors hover:bg-[#D9480F] hover:text-[#F4F0E6] hover:border-[#D9480F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D9480F]"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </Container>

      {/* Mobile Horizontal Scrolling Tabs Bar (Always visible while scrolling on mobile) */}
      <div className="md:hidden border-t border-[#D9D4C7]/80 bg-[#ECE7DA]/75 backdrop-blur-[6px] px-4 py-2 overflow-x-auto scrollbar-none flex items-center gap-2">
        {site.nav.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`shrink-0 px-3 py-1.5 rounded-[3px] font-mono text-[11px] uppercase tracking-wider transition-all duration-150 ${
                isActive
                  ? "bg-[#1A1A17] text-[#F4F0E6] shadow-sm font-semibold"
                  : "bg-[#F4F0E6]/80 text-[#5C5A52] border border-[#D9D4C7]/70 hover:text-[#1A1A17] hover:bg-[#F4F0E6]"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </div>

      {/* Mobile Drawer Menu (When user clicks Hamburger button) */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#D9D4C7] bg-[#F4F0E6] px-6 py-4 shadow-xl animate-fade-in">
          <nav className="flex flex-col space-y-3 font-mono text-xs uppercase tracking-wider">
            {site.nav.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`py-2 border-b border-[#D9D4C7]/40 last:border-b-0 flex items-center justify-between transition-colors ${
                    isActive ? "text-[#D9480F] font-semibold" : "text-[#5C5A52] hover:text-[#D9480F]"
                  }`}
                >
                  <span>{item.label}</span>
                  <span>→</span>
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
