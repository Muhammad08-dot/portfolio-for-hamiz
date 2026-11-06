import type { Project } from "@/data/site";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/ui/SocialIcons";

export default function ProjectCard({
  project,
  showCategory = true,
}: {
  project: Project;
  showCategory?: boolean;
}) {
  return (
    <article className="group flex flex-col justify-between border border-[#D9D4C7] bg-[#ECE7DA]/50 p-6 rounded-[3px] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#1A1A17] hover:bg-[#ECE7DA] hover:shadow-[0_6px_18px_rgba(26,26,23,0.05)]">
      <div>
        {/* Top row: Title and optional Category badge */}
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-serif text-xl sm:text-2xl text-[#1A1A17] group-hover:text-[#D9480F] transition-colors duration-150">
            {project.title}
          </h3>
          {showCategory && (
            <span className="font-mono text-[11px] uppercase tracking-wider text-[#D9480F] shrink-0 border border-[#D9D4C7] px-2 py-0.5 rounded-[2px] bg-[#F4F0E6]">
              {project.category}
            </span>
          )}
        </div>

        {/* Summary */}
        <p className="mt-3 text-sm text-[#5C5A52] leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {/* Tech stack tags */}
        <div className="mt-4 flex flex-wrap gap-1.5 font-mono text-[11px] text-[#5C5A52]">
          {project.tech.map((t) => (
            <span
              key={t}
              className="border border-[#D9D4C7] px-2 py-0.5 rounded-[2px] bg-[#F4F0E6]"
            >
              #{t}
            </span>
          ))}
        </div>
      </div>

      {/* Footer: Live Demo & GitHub button */}
      <div className="mt-6 pt-4 border-t border-[#D9D4C7]/60 flex items-center justify-between">
        {project.live ? (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-8 items-center gap-1.5 rounded-[2px] border border-[#D9D4C7] bg-[#F4F0E6] px-3 font-mono text-xs uppercase tracking-wider text-[#1A1A17] transition-colors duration-150 hover:bg-[#D9480F] hover:text-[#F4F0E6] hover:border-[#D9480F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D9480F]"
          >
            <span>Live Demo</span>
            <ArrowUpRight size={13} />
          </a>
        ) : (
          <span className="font-mono text-xs text-[#5C5A52]">In Development</span>
        )}

        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-8 w-8 items-center justify-center rounded-[2px] border border-[#D9D4C7] bg-[#F4F0E6] text-[#5C5A52] transition-colors duration-150 hover:border-[#D9480F] hover:text-[#D9480F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D9480F]"
            title="View Code on GitHub"
            aria-label="View Code on GitHub"
          >
            <GithubIcon size={15} />
          </a>
        )}
      </div>
    </article>
  );
}
