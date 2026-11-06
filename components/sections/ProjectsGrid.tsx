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

  // Fix 2: Check if displayed projects have more than one distinct category
  const hasMultipleCategories = useMemo(() => {
    const categories = new Set(filtered.map((p) => p.category));
    return categories.size > 1;
  }, [filtered]);

  return (
    <div>
      {/* Editorial filter tags in mono - only show if there are multiple filter options & no limit */}
      {!limit && (
        <div className="mb-8 flex flex-wrap gap-2 border-b border-[#E3E7EE] pb-4 font-mono text-xs uppercase tracking-wider">
          {site.projectFilters.map((filter) => {
            const isActive = active === filter;
            return (
              <button
                key={filter}
                onClick={() => setActive(filter)}
                className={`px-3 py-1.5 rounded-md transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1FA3B3] ${
                  isActive
                    ? "bg-[#0B1020] text-[#FFFFFF]"
                    : "bg-transparent text-[#5B6577] hover:text-[#0B1020] hover:bg-[#E3E7EE]"
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>
      )}

      {/* Grid */}
      <div className="grid gap-6 sm:grid-cols-2">
        {filtered.map((project) => (
          <ProjectCard
            key={project.title}
            project={project}
            showCategory={hasMultipleCategories}
          />
        ))}
      </div>
    </div>
  );
}

