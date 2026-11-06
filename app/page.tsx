import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/data/site";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Hero from "@/components/sections/Hero";
import ProjectsGrid from "@/components/sections/ProjectsGrid";
import TimelineItem from "@/components/sections/TimelineItem";
import SkillCard from "@/components/sections/SkillCard";
import ContactSection from "@/components/sections/ContactSection";
import ClientWorkCard from "@/components/sections/ClientWorkCard";

export const metadata: Metadata = {
  title: "Home",
  description: site.description,
};

export default function HomePage() {
  const featured = site.projects.filter((p) => p.featured);
  const recentTimeline = [
    ...site.educationHistory,
    ...site.experienceHistory,
  ].slice(0, 3);
  const clientWorkPreview = site.previousWork.slice(0, 2);
  const skillPreview = site.skillCategories.slice(0, 3);

  return (
    <Container className="py-4">
      {/* Hero Section */}
      <Hero />

      {/* 01 / Projects (AI & Systems) */}
      <section className="py-14 border-b border-[#D9D4C7]">
        <SectionHeading
          number="01 / projects"
          title="Selected Work"
          description="A selection of recent applications, systems, and open tools."
        />
        <ProjectsGrid projects={featured} limit={4} />
        <div className="mt-8">
          <Link
            href="/projects"
            className="font-mono text-xs uppercase tracking-wider text-[#1A1A17] hover:text-[#D9480F] underline underline-offset-4 decoration-[#D9D4C7] hover:decoration-[#D9480F] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D9480F]"
          >
            All projects ({site.projects.length}) →
          </Link>
        </div>
      </section>

      {/* 02 / Client & Production Work */}
      <section className="py-14 border-b border-[#D9D4C7]">
        <SectionHeading
          number="02 / client work"
          title="Client &amp; Production Deployments"
          description="Commercial web applications shipped to production across e-commerce, SaaS, and corporate domains."
        />
        <div className="grid gap-6 sm:grid-cols-2">
          {clientWorkPreview.map((work) => (
            <ClientWorkCard key={work.title} work={work} />
          ))}
        </div>
        <div className="mt-8">
          <Link
            href="/previous-work"
            className="font-mono text-xs uppercase tracking-wider text-[#1A1A17] hover:text-[#D9480F] underline underline-offset-4 decoration-[#D9D4C7] hover:decoration-[#D9480F] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D9480F]"
          >
            View all client work ({site.previousWork.length}) →
          </Link>
        </div>
      </section>

      {/* 03 / Experience & Education */}
      <section className="py-14 border-b border-[#D9D4C7]">
        <SectionHeading
          number="03 / journey"
          title="Education & Experience"
          description="My academic background at NUML and industry internship experience."
        />
        <ol className="mt-6 space-y-6">
          {recentTimeline.map((item, i) => (
            <TimelineItem
              key={item.company + item.role}
              item={item}
              isLast={i === recentTimeline.length - 1}
            />
          ))}
        </ol>
        <div className="mt-8">
          <Link
            href="/experience"
            className="font-mono text-xs uppercase tracking-wider text-[#1A1A17] hover:text-[#D9480F] underline underline-offset-4 decoration-[#D9D4C7] hover:decoration-[#D9480F] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D9480F]"
          >
            Full timeline, internships &amp; roadmap →
          </Link>
        </div>
      </section>

      {/* 04 / Capabilities */}
      <section className="py-14 border-b border-[#D9D4C7]">
        <SectionHeading
          number="04 / capabilities"
          title="Technical Focus"
          description="Core technologies and toolchains I reach for day-to-day."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {skillPreview.map((category) => (
            <SkillCard key={category.title} category={category} />
          ))}
        </div>
        <div className="mt-8">
          <Link
            href="/skills"
            className="font-mono text-xs uppercase tracking-wider text-[#1A1A17] hover:text-[#D9480F] underline underline-offset-4 decoration-[#D9D4C7] hover:decoration-[#D9480F] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D9480F]"
          >
            View all capabilities →
          </Link>
        </div>
      </section>

      {/* 05 / Contact */}
      <section className="py-14">
        <SectionHeading
          number="05 / contact"
          title="Get in Touch"
          description="Have an inquiry, project, or role to discuss? Write directly to my inbox."
        />
        <ContactSection />
      </section>
    </Container>
  );
}