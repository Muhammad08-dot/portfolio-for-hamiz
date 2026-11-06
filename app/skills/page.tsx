import type { Metadata } from "next";
import { site } from "@/data/site";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import SkillCard from "@/components/sections/SkillCard";

export const metadata: Metadata = {
  title: "Skills",
  description: `Technical competencies and tools used by ${site.name}.`,
};

export default function SkillsPage() {
  return (
    <Container className="py-12 sm:py-20">
      <SectionHeading
        number="01 / skills"
        title="Technical Arsenal"
        description="Tools, languages, and frameworks used in building production software."
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {site.skillCategories.map((category) => (
          <SkillCard key={category.title} category={category} />
        ))}
      </div>
    </Container>
  );
}
