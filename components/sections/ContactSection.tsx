import { site } from "@/data/site";
import { ArrowUpRight, MessageSquare, Mail } from "lucide-react";

export default function ContactSection() {
  return (
    <div className="border border-[#D9D4C7] bg-[#F6F3EC] p-6 sm:p-8 rounded-[3px] max-w-[65ch]">
      <p className="text-base text-[#1A1A17] leading-relaxed">
        {site.contact.subtitle}
      </p>

      <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-3">
        {/* WhatsApp Direct Chat Button */}
        <a
          href={site.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-10 items-center justify-center gap-2 rounded-[2px] border border-[#D9D4C7] bg-[#1A1A17] px-4 font-mono text-xs uppercase tracking-wider text-[#F6F3EC] transition-colors duration-150 hover:bg-[#D9480F] hover:border-[#D9480F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D9480F]"
        >
          <MessageSquare size={14} />
          <span>Chat on WhatsApp</span>
          <ArrowUpRight size={13} />
        </a>

        {/* Email Direct Button */}
        <a
          href={`mailto:${site.email}?subject=Inquiry%20via%20Portfolio`}
          className="inline-flex h-10 items-center justify-center gap-2 rounded-[2px] border border-[#D9D4C7] bg-transparent px-4 font-mono text-xs uppercase tracking-wider text-[#1A1A17] transition-colors duration-150 hover:border-[#D9480F] hover:text-[#D9480F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D9480F]"
        >
          <Mail size={14} />
          <span>Send Email</span>
          <ArrowUpRight size={13} />
        </a>
      </div>

      <div className="mt-6 pt-4 border-t border-[#D9D4C7]/60 flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs">
        <a
          href={site.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#5C5A52] hover:text-[#D9480F] underline underline-offset-4 decoration-[#D9D4C7] hover:decoration-[#D9480F] transition-colors duration-150"
        >
          WhatsApp: {site.whatsapp}
        </a>
        <a
          href={`mailto:${site.email}`}
          className="text-[#5C5A52] hover:text-[#D9480F] underline underline-offset-4 decoration-[#D9D4C7] hover:decoration-[#D9480F] transition-colors duration-150"
        >
          Email: {site.email}
        </a>
      </div>
    </div>
  );
}
