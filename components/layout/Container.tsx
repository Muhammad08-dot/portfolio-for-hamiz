// Consistent single-column container max-width ~960px with generous whitespace
export default function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[960px] px-6 sm:px-10 ${className}`}>
      {children}
    </div>
  );
}

