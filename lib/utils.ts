// Tiny className joiner (no external deps).
export function cn(
  ...classes: Array<string | false | null | undefined>
): string {
  return classes.filter(Boolean).join(" ");
}

// Map accent token names to Tailwind text/bg classes.
export const accentText: Record<string, string> = {
  mint: "text-mint",
  lavender: "text-lavender",
  peach: "text-peach",
};

export const accentBg: Record<string, string> = {
  mint: "bg-mint",
  lavender: "bg-lavender",
  peach: "bg-peach",
};

export const accentRing: Record<string, string> = {
  mint: "ring-mint/40",
  lavender: "ring-lavender/40",
  peach: "ring-peach/40",
};
