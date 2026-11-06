import type { Metadata } from "next";
import { site } from "@/data/site";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import TimelineItem from "@/components/sections/TimelineItem";

export const metadata: Metadata = {
  title: "Experience",
  description: `Education, internships, and roadmap of ${site.name}.`,
};

export default function ExperiencePage() {
  return (
    <Container className="py-12 sm:py-20">
      {/* 01 / Education (Starting with Education as requested) */}
      <section className="mb-16">
        <SectionHeading
          number="01 / education"
          title="Education"
          description="Academic foundation in Artificial Intelligence and computer science theory."
        />
        <ol className="mt-6 space-y-6">
          {site.educationHistory.map((item, i) => (
            <TimelineItem
              key={item.company}
              item={item}
              isLast={i === site.educationHistory.length - 1}
            />
          ))}
        </ol>
      </section>

      {/* 02 / Practical Experience & Internships */}
      <section className="border-t border-[#D9D4C7] pt-14 mb-16">
        <SectionHeading
          number="02 / experience"
          title="Practical Experience"
          description="Internships and hands-on software development training."
        />
        <ol className="mt-6 space-y-6">
          {site.experienceHistory.map((item, i) => (
            <TimelineItem
              key={item.company + item.role}
              item={item}
              isLast={i === site.experienceHistory.length - 1}
            />
          ))}
        </ol>
      </section>

      {/* 03 / Future Plans & Roadmap */}
      <section className="border-t border-[#D9D4C7] pt-14">
        <SectionHeading
          number="03 / roadmap"
          title="Future Plans & Goals"
          description="What I am targeting next in technology, academic research, and engineering."
        />
        <ol className="mt-6 space-y-6">
          {site.futurePlans.map((item, i) => (
            <TimelineItem
              key={item.company}
              item={item}
              isLast={i === site.futurePlans.length - 1}
            />
          ))}
        </ol>
      </section>
    </Container>
  );
}
