"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      className="fixed bottom-6 right-6 z-50 inline-flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-[3px] border border-[#D9D4C7] bg-[#F4F0E6] text-[#1A1A17] shadow-[0_4px_14px_rgba(26,26,23,0.12)] transition-all duration-200 hover:bg-[#D9480F] hover:text-[#F4F0E6] hover:border-[#D9480F] hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D9480F]"
      title="Back to top"
    >
      <ArrowUp size={18} />
    </button>
  );
}
