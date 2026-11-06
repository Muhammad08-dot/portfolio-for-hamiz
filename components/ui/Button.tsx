import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "outline";

const base =
  "inline-flex items-center justify-center h-10 px-4 rounded-[2px] font-mono text-xs uppercase tracking-wider transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D9480F]";

const variants: Record<Variant, string> = {
  primary: "bg-[#1A1A17] text-[#F4F0E6] border border-[#1A1A17] hover:bg-[#D9480F] hover:border-[#D9480F]",
  secondary: "bg-[#ECE7DA] text-[#1A1A17] border border-[#D9D4C7] hover:bg-[#D9480F] hover:text-[#F4F0E6] hover:border-[#D9480F]",
  outline: "bg-transparent text-[#1A1A17] border border-[#D9D4C7] hover:border-[#D9480F] hover:text-[#D9480F]",
};

interface CommonProps {
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
}

type ButtonAsButton = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = CommonProps & {
  href: string;
  external?: boolean;
};

export function Button(props: ButtonAsButton | ButtonAsLink) {
  const { variant = "primary", className, children } = props;
  const classes = cn(base, variants[variant], className);

  if (props.href !== undefined) {
    const isExternal = props.href.startsWith("http");
    return (
      <a
        href={props.href}
        className={classes}
        target={isExternal || props.external ? "_blank" : undefined}
        rel={isExternal || props.external ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }

  const {
    variant: _variant,
    className: _className,
    children: _children,
    ...rest
  } = props;

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
export default Button;
