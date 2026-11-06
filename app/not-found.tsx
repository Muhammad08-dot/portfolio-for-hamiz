import Link from "next/link";
import Container from "@/components/layout/Container";

export default function NotFound() {
  return (
    <Container className="py-24 sm:py-32">
      <div className="max-w-[65ch] border border-[#D9D4C7] bg-[#F6F3EC] p-8 sm:p-12 rounded-[3px]">
        <span className="font-mono text-xs uppercase tracking-wider text-[#D9480F]">
          [error: 404]
        </span>
        <h1 className="mt-4 font-heading text-3xl sm:text-4xl font-bold text-[#1A1A17]">
          Page Not Found
        </h1>
        <p className="mt-3 text-base text-[#5C5A52] leading-relaxed">
          The requested document or reference does not exist on this server.
        </p>

        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex h-9 items-center rounded-[2px] border border-[#D9D4C7] bg-[#1A1A17] px-4 font-mono text-xs uppercase tracking-wider text-[#F6F3EC] transition-colors duration-150 hover:bg-[#D9480F] hover:border-[#D9480F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D9480F]"
          >
            ← Return Home
          </Link>
        </div>
      </div>
    </Container>
  );
}

