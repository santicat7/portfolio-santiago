import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary";

type BaseProps = {
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
};

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors duration-300 ease-out-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fg focus-visible:ring-offset-2 focus-visible:ring-offset-bg";

const variants: Record<Variant, string> = {
  primary: "bg-fg text-bg hover:bg-fg/90",
  secondary: "border border-line text-fg hover:border-fg hover:bg-fg/[0.03]",
};

type LinkButtonProps = BaseProps & {
  href: string;
  external?: boolean;
};

export function ButtonLink({
  children,
  href,
  variant = "primary",
  external = false,
  className,
}: LinkButtonProps) {
  const classes = cn(base, variants[variant], className);

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
