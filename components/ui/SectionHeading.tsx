export default function SectionHeading({
  number,
  title,
  description,
}: {
  number?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-10 pt-2">
      <div className="flex items-baseline gap-4 border-b border-[#E3E7EE] pb-4">
        {number && (
          <span className="font-mono text-xs uppercase tracking-wider text-[#1FA3B3]">
            {number}
          </span>
        )}
        <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-[#0B1020]">
          {title}
        </h2>
      </div>
      {description && (
        <p className="mt-4 text-base text-[#5B6577] max-w-[65ch]">
          {description}
        </p>
      )}
    </div>
  );
}

