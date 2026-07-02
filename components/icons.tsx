import { cn } from "@/lib/cn";

type IconProps = { className?: string };

export function ArrowUpRight({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className={cn("h-4 w-4", className)}
    >
      <path
        d="M4.5 11.5l7-7M5.5 4.5h6v6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ArrowLeft({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className={cn("h-4 w-4", className)}
    >
      <path
        d="M9.5 3.5L5 8l4.5 4.5M5 8h7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ImageGlyph({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={cn("h-6 w-6", className)}
    >
      <rect
        x="3"
        y="4"
        width="18"
        height="16"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <circle cx="8.5" cy="9" r="1.6" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M4 17l4.5-4.5 3.5 3.5 3-3L20 16"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
