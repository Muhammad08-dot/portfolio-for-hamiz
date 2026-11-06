import type { Metadata } from "next";
import { site } from "@/data/site";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactSection from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Contact",
  description: site.contact.subtitle,
};

export default function ContactPage() {
  return (
    <Container className="py-12 sm:py-20">
      <SectionHeading
        number="01 / contact"
        title="Get in Touch"
        description="Whether you have an inquiry, project, or want to discuss ideas, write directly via WhatsApp or email."
      />

      <div className="grid gap-12 lg:grid-cols-[1fr_320px] items-start">
        {/* Contact direct action section */}
        <ContactSection />

        {/* Direct contact info card */}
        <div className="border border-[#D9D4C7] bg-[#F6F3EC] p-6 rounded-[3px] space-y-6">
          <div>
            <span className="font-mono text-xs uppercase tracking-wider text-[#5C5A52] block mb-2">
              WhatsApp Direct
            </span>
            <a
              href={site.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-base font-medium text-[#1A1A17] hover:text-[#D9480F] underline underline-offset-4 decoration-[#D9D4C7] hover:decoration-[#D9480F] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D9480F]"
            >
              {site.whatsapp} ↗
            </a>
          </div>

          <div className="pt-6 border-t border-[#D9D4C7]">
            <span className="font-mono text-xs uppercase tracking-wider text-[#5C5A52] block mb-2">
              Email
            </span>
            <a
              href={`mailto:${site.email}`}
              className="text-base text-[#1A1A17] hover:text-[#D9480F] underline underline-offset-4 decoration-[#D9D4C7] hover:decoration-[#D9480F] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D9480F]"
            >
              {site.email}
            </a>
          </div>

          <div className="pt-6 border-t border-[#D9D4C7]">
            <span className="font-mono text-xs uppercase tracking-wider text-[#5C5A52] block mb-2">
              Location &amp; Availability
            </span>
            <p className="text-sm text-[#1A1A17]">{site.about.location}</p>
            <p className="text-xs text-[#5C5A52] mt-1">{site.about.availability}</p>
          </div>

          <div className="pt-6 border-t border-[#D9D4C7]">
            <span className="font-mono text-xs uppercase tracking-wider text-[#5C5A52] block mb-2">
              Online Profiles
            </span>
            <ul className="space-y-2 font-mono text-xs uppercase tracking-wider">
              {site.socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#5C5A52] hover:text-[#D9480F] underline underline-offset-4 decoration-[#D9D4C7] hover:decoration-[#D9480F] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D9480F]"
                  >
                    {s.label} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
}
