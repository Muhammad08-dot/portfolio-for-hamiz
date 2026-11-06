import type { Metadata } from "next";
import Image from "next/image";
import { site } from "@/data/site";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import SkillCard from "@/components/sections/SkillCard";

export const metadata: Metadata = {
  title: "About",
  description: `About ${site.name} — ${site.role}. ${site.shortBio}`,
};

export default function AboutPage() {
  return (
    <Container className="py-12 sm:py-20">
      <SectionHeading
        number="01 / about"
        title="Background & Approach"
        description={`${site.name} · ${site.role}`}
      />

      <div className="grid gap-12 md:grid-cols-[240px_1fr] items-start">
        {/* Profile portrait - Full uncropped */}
        <div className="border border-[#D9D4C7] p-2 bg-[#F6F3EC] rounded-[3px] shadow-[0_4px_16px_rgba(26,26,23,0.04)]">
          <div className="relative aspect-[536/1024] w-full overflow-hidden bg-[#D9D4C7]/20 rounded-[2px]">
            <Image
              src={site.about.profileImage}
              alt={`Portrait of ${site.name}`}
              fill
              sizes="240px"
              priority
              className="object-contain"
            />
          </div>
          <div className="mt-2 font-mono text-[11px] uppercase tracking-wider text-[#5C5A52] text-center border-t border-[#D9D4C7]/50 pt-1.5">
            {site.name} — {site.about.location}
          </div>
        </div>

        {/* Bio text */}
        <div className="space-y-6 text-[#1A1A17] text-base sm:text-lg leading-relaxed">
          {site.about.bio.map((para, i) => (
            <p key={i} className="max-w-[65ch]">
              {para}
            </p>
          ))}

          {/* Quick facts in clean mono table style - 2x2 grid on desktop, 1-col on mobile */}
          <div className="pt-6 border-t border-[#D9D4C7] mt-8">
            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-6 font-mono text-xs">
              <div>
                <dt className="text-[#5C5A52] uppercase tracking-wider">Location</dt>
                <dd className="mt-1 text-[#1A1A17] font-medium">{site.about.location}</dd>
              </div>

              <div>
                <dt className="text-[#5C5A52] uppercase tracking-wider">Education</dt>
                <dd className="mt-1 text-[#1A1A17] font-medium">
                  {site.education.degree}, {site.education.shortInstitution}
                </dd>
              </div>

              <div>
                <dt className="text-[#5C5A52] uppercase tracking-wider">Status</dt>
                <dd className="mt-1 text-[#1A1A17] font-medium">{site.about.availability}</dd>
              </div>

              <div>
                <dt className="text-[#5C5A52] uppercase tracking-wider">Currently</dt>
                <dd className="mt-1 text-[#1A1A17] font-medium">
                  {site.education.semester} · {site.about.currentlyBuilding}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {/* Skills breakdown */}
      <div className="mt-20 border-t border-[#D9D4C7] pt-14">
        <SectionHeading
          number="02 / skills"
          title="Technical Capabilities"
          description="A breakdown of tools and domains I actively practice in."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {site.skillCategories.map((category) => (
            <SkillCard key={category.title} category={category} />
          ))}
        </div>
      </div>
    </Container>
  );
}
