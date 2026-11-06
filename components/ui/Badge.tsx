import { cn } from "@/lib/utils";

export function Badge({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-[2px] border border-[#D9D4C7] bg-[#F6F3EC] px-2 py-0.5 font-mono text-[11px] uppercase tracking-wider text-[#5C5A52]",
        className,
      )}
    >
      {children}
    </span>
  );
}
