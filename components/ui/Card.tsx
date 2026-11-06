import { cn } from "@/lib/utils";

export function Card({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "white-card p-6",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
