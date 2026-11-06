import type { Metadata } from "next";
import { site } from "@/data/site";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/sections/ProjectCard";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A collection of web, mobile and AI/ML projects built by " + site.name + ".",
};

export default function ProjectsPage() {
  return (
    <Container className="py-12 sm:py-20">
      <SectionHeading
        number="01 / projects"
        title="Engineering Projects"
        description="A categorized catalogue of research systems, multi-agent workflows, computer vision, and full-stack software built by Hamiz."
      />

      <div className="space-y-16 mt-12">
        {site.projectGroups.map((group) => (
          <section
            key={group.id}
            id={group.id}
            className="border-t border-[#D9D4C7] pt-10 first:border-t-0 first:pt-0"
          >
            {/* Category Section Heading */}
            <div className="mb-6">
              <span className="font-mono text-xs uppercase tracking-wider text-[#D9480F]">
                {group.number}
              </span>
              <h2 className="mt-1 font-heading text-xl sm:text-2xl font-bold text-[#1A1A17]">
                {group.title}
              </h2>
              <p className="mt-1.5 text-sm text-[#5C5A52] max-w-[70ch]">
                {group.description}
              </p>
            </div>

            {/* Projects in this Category */}
            <div className="grid gap-6 sm:grid-cols-2">
              {group.projects.map((project) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  showCategory={false}
                />
              ))}
            </div>
          </section>
        ))}
      </div>
    </Container>
  );
}
