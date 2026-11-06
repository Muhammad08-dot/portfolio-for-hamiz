import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "primary-outline" | "secondary-outline";

const base =
  "btn font-body font-medium transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1FA3B3]";

const variants: Record<Variant, string> = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  "primary-outline": "btn-primary-outline",
  "secondary-outline": "btn-secondary-outline",
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
  } = props as ButtonAsButton;

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
