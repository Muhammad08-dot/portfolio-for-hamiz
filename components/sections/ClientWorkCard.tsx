import type { ClientWork } from "@/data/site";
import { ArrowUpRight } from "lucide-react";

export default function ClientWorkCard({ work }: { work: ClientWork }) {
  return (
    <article className="group flex flex-col justify-between border border-[#D9D4C7] bg-[#F6F3EC] p-6 sm:p-8 rounded-[3px] transition-all duration-200 hover:-translate-y-1 hover:border-[#1A1A17] hover:shadow-[0_8px_20px_rgba(26,26,23,0.06)]">
      <div>
        {/* Category tag & Live URL indicator */}
        <div className="flex items-center justify-between gap-3 border-b border-[#D9D4C7]/60 pb-3">
          <span className="font-mono text-[11px] uppercase tracking-wider text-[#D9480F] font-semibold">
            {work.category}
          </span>
          <span className="font-mono text-[11px] text-[#5C5A52] tracking-wider truncate max-w-[200px]">
            {work.liveUrl.replace("https://", "").replace("/", "")}
          </span>
        </div>

        {/* Title & Tagline */}
        <h3 className="mt-4 font-heading text-xl sm:text-2xl font-bold text-[#1A1A17] group-hover:text-[#D9480F] transition-colors duration-150">
          {work.title}
        </h3>
        <p className="mt-1 font-mono text-xs uppercase tracking-wider text-[#5C5A52]">
          {work.tagline}
        </p>

        {/* Detailed summary */}
        <p className="mt-3 text-sm text-[#5C5A52] leading-relaxed">
          {work.description}
        </p>

        {/* Key Highlights */}
        <div className="mt-4 pt-3 border-t border-[#D9D4C7]/40 space-y-1.5">
          {work.highlights.map((h, i) => (
            <div key={i} className="flex items-start gap-2 text-xs text-[#1A1A17]">
              <span className="text-[#D9480F] font-mono select-none">›</span>
              <span>{h}</span>
            </div>
          ))}
        </div>

        {/* Tech tags */}
        <div className="mt-5 flex flex-wrap gap-1.5 font-mono text-[11px] text-[#5C5A52]">
          {work.tech.map((t) => (
            <span
              key={t}
              className="border border-[#D9D4C7] px-2 py-0.5 rounded-[2px] bg-transparent"
            >
              #{t}
            </span>
          ))}
        </div>
      </div>

      {/* Footer Action */}
      <div className="mt-6 pt-4 border-t border-[#D9D4C7] flex items-center justify-between">
        <a
          href={work.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-8 items-center gap-1.5 rounded-[2px] border border-[#D9D4C7] bg-[#1A1A17] px-3.5 font-mono text-xs uppercase tracking-wider text-[#F6F3EC] transition-colors duration-150 hover:bg-[#D9480F] hover:border-[#D9480F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D9480F]"
        >
          <span>Visit Live Site</span>
          <ArrowUpRight size={13} />
        </a>

        <span className="font-mono text-xs text-[#5C5A52]">
          Production Deployment
        </span>
      </div>
    </article>
  );
}

