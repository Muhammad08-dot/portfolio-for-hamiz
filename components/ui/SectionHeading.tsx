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
      <div className="flex items-baseline gap-4 border-b border-[#D9D4C7] pb-4">
        {number && (
          <span className="font-mono text-xs uppercase tracking-wider text-[#D9480F]">
            {number}
          </span>
        )}
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#1A1A17]">
          {title}
        </h2>
      </div>
      {description && (
        <p className="mt-4 text-base text-[#5C5A52] max-w-[65ch] leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
