"use client";

import { useMemo, useState } from "react";
import { site, type Project } from "@/data/site";
import ProjectCard from "./ProjectCard";

type Filter = (typeof site.projectFilters)[number];

export default function ProjectsGrid({
  projects,
  limit,
}: {
  projects: Project[];
  limit?: number;
}) {
  const [active, setActive] = useState<Filter>("All");

  const filtered = useMemo(() => {
    const list =
      active === "All"
        ? projects
        : projects.filter((p) => p.category === active);
    return limit ? list.slice(0, limit) : list;
  }, [projects, active, limit]);

  const hasMultipleCategories = useMemo(() => {
    const categories = new Set(filtered.map((p) => p.category));
    return categories.size > 1;
  }, [filtered]);

  return (
    <div>
      {/* Editorial filter tags in mono - only show if there are multiple filter options & no limit */}
      {!limit && (
        <div className="mb-8 flex flex-wrap gap-2 border-b border-[#D9D4C7] pb-4 font-mono text-xs uppercase tracking-wider">
          {site.projectFilters.map((filter) => {
            const isActive = active === filter;
            return (
              <button
                key={filter}
                onClick={() => setActive(filter)}
                className={`px-3 py-1.5 rounded-[2px] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D9480F] ${
                  isActive
                    ? "bg-[#1A1A17] text-[#F4F0E6] border border-[#1A1A17]"
                    : "bg-transparent text-[#5C5A52] border border-transparent hover:text-[#1A1A17] hover:border-[#D9D4C7] hover:bg-[#ECE7DA]"
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>
      )}

      {/* Grid: 2 columns on desktop, 1 on mobile */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map((project, idx) => (
          <ProjectCard
            key={project.title || idx}
            project={project}
            showCategory={hasMultipleCategories}
          />
        ))}
      </div>
    </div>
  );
}
