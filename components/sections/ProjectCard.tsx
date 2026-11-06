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
    <article className="group white-card p-6 flex flex-col justify-between transition-all duration-200">
      <div>
        {/* Top row: only Title and optional Category label (when multiple categories exist) */}
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-heading text-xl font-semibold text-[#0B1020] group-hover:text-[#1FA3B3] transition-colors duration-150">
            {project.title}
          </h3>
          {showCategory && (
            <span className="font-mono text-xs uppercase tracking-wider text-[#1FA3B3] font-medium shrink-0 border border-[#E3E7EE] px-2 py-1 rounded-md bg-[#F7F9FC]">
              {project.category}
            </span>
          )}
        </div>

        {/* Summary */}
        <p className="mt-3 text-sm text-[#5B6577] leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {/* Tech stack tags */}
        <div className="mt-4 flex flex-wrap gap-1.5 font-mono text-xs text-[#5B6577]">
          {project.tech.map((t) => (
            <span
              key={t}
              className="border border-[#E3E7EE] px-2 py-1 rounded-md bg-[#F7F9FC]"
            >
              #{t}
            </span>
          ))}
        </div>
      </div>

      {/* Footer: Light 1px outline button + outline square GitHub button with equal height and focus styles */}
      <div className="mt-6 pt-4 border-t border-[#E3E7EE] flex items-center justify-between">
        {project.live ? (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-9 items-center gap-1.5 rounded-md border border-[#E3E7EE] bg-transparent px-3 font-body text-sm font-medium text-[#0B1020] transition-colors duration-150 hover:border-[#1FA3B3] hover:text-[#1FA3B3] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1FA3B3]"
          >
            <span>Live Demo</span>
            <ArrowUpRight size={14} />
          </a>
        ) : (
          <span className="font-body text-sm text-[#5B6577]">In Development</span>
        )}

        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-[#E3E7EE] bg-transparent text-[#5B6577] transition-colors duration-150 hover:border-[#1FA3B3] hover:text-[#1FA3B3] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1FA3B3]"
            title="View Code on GitHub"
            aria-label="View Code on GitHub"
          >
            <GithubIcon size={16} />
          </a>
        )}
      </div>
    </article>
  );
}

