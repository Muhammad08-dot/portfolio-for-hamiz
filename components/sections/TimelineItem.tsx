import type { ExperienceItem } from "@/data/site";

export default function TimelineItem({
  item,
}: {
  item: ExperienceItem;
  isLast?: boolean;
}) {
  return (
    <li className="pb-8 last:pb-0 border-b border-[#D9D4C7]/60 last:border-b-0">
      {/* 2-column layout: Desktop left narrow column (dates), right column (content). Stacked on mobile */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:gap-8">
        {/* Left column: dates in mono, accent color, ~160px width */}
        <div className="sm:w-40 sm:shrink-0 font-mono text-xs uppercase tracking-wider text-[#D9480F] pt-1">
          {item.duration}
        </div>

        {/* Right column: role + company + achievements */}
        <div className="flex-1 mt-1 sm:mt-0">
          <h3 className="font-heading text-xl font-bold text-[#1A1A17]">{item.role}</h3>
          <p className="mt-0.5 font-mono text-xs text-[#5C5A52] tracking-wide">
            {item.company}
          </p>

          <ul className="mt-3 space-y-2 text-sm text-[#5C5A52]">
            {item.achievements.map((a, i) => (
              <li key={i} className="flex items-start gap-2 max-w-[70ch] leading-[1.6]">
                <span className="text-[#D9480F] font-mono text-xs select-none mt-0.5">›</span>
                <span>{a}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </li>
  );
}

