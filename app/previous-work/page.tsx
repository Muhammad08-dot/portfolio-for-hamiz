import type { Metadata } from "next";
import { site } from "@/data/site";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ClientWorkCard from "@/components/sections/ClientWorkCard";

export const metadata: Metadata = {
  title: "Client & Production Work",
  description: `Live deployed commercial and client web applications built by ${site.name}.`,
};

export default function PreviousWorkPage() {
  return (
    <Container className="py-12 sm:py-20">
      <SectionHeading
        number="01 / client work"
        title="Production & Client Work"
        description="A selection of live deployed web applications across e-commerce, SaaS, corporate, portfolio, and hospitality domains."
      />

      <div className="grid gap-8 sm:grid-cols-2">
        {site.previousWork.map((work) => (
          <ClientWorkCard key={work.title} work={work} />
        ))}
      </div>
    </Container>
  );
}

