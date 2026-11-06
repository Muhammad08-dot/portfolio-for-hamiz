import Image from "next/image";
import { site } from "@/data/site";

export default function Hero() {
  return (
    <section className="pt-12 pb-10 sm:pt-16 sm:pb-12 border-b border-[#D9D4C7]">
      <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-8 lg:gap-12">
        <div className="max-w-[580px] flex-1">
          {/* Availability label */}
          <div className="mb-4 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#5C5A52]">
            <span className="inline-block h-2 w-2 rounded-full bg-[#D9480F]" />
            <span>{site.about.availability}</span>
          </div>

          {/* Big confident modern hero */}
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-[#1A1A17]">
            {site.name}
          </h1>

          {/* One headline sentence */}
          <p className="mt-4 text-xl sm:text-2xl font-normal text-[#1A1A17] leading-snug">
            {site.role}, {site.locationDisplay}.
          </p>

          {/* Fix 5: Small mono line under the hero text */}
          <p className="mt-2 font-mono text-xs uppercase tracking-wider text-[#D9480F]">
            {site.studentTagline}
          </p>

          <p className="mt-3 text-base text-[#5C5A52] leading-relaxed max-w-[65ch]">
            {site.shortBio}
          </p>

          {/* Links: GitHub, Email, Resume */}
          <div className="mt-6 flex flex-wrap items-center gap-6 font-mono text-xs uppercase tracking-wider">
            <a
              href={site.socials.find((s) => s.icon === "github")?.href || "https://github.com"}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1A1A17] hover:text-[#D9480F] underline underline-offset-4 decoration-[#D9D4C7] hover:decoration-[#D9480F] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D9480F]"
            >
              GitHub ↗
            </a>
            <a
              href={`mailto:${site.email}`}
              className="text-[#1A1A17] hover:text-[#D9480F] underline underline-offset-4 decoration-[#D9D4C7] hover:decoration-[#D9480F] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D9480F]"
            >
              Email ↗
            </a>
            {/* TODO: Link to real resume PDF when available */}
            <a
              href="#resume"
              className="text-[#1A1A17] hover:text-[#D9480F] underline underline-offset-4 decoration-[#D9D4C7] hover:decoration-[#D9480F] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D9480F]"
            >
              Resume (PDF) ↗
            </a>
          </div>
        </div>

        {/* Developer portrait - full uncropped */}
        <div className="shrink-0 w-40 sm:w-48 md:w-56 self-start md:self-center">
          <div className="border border-[#D9D4C7] p-2 bg-[#F6F3EC] rounded-[3px] shadow-[0_4px_16px_rgba(26,26,23,0.04)]">
            <div className="relative aspect-[536/1024] w-full overflow-hidden bg-[#D9D4C7]/20 rounded-[2px]">
              <Image
                src={site.about.profileImage}
                alt={`Portrait of ${site.name}`}
                fill
                sizes="(max-width: 640px) 160px, (max-width: 768px) 192px, 224px"
                priority
                className="object-contain"
              />
            </div>
            <div className="mt-2 font-mono text-[11px] uppercase tracking-wider text-[#5C5A52] text-center border-t border-[#D9D4C7]/50 pt-1.5">
              {site.name} · Engineer
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
