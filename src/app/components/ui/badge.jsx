import { cn } from "./utils";

export function Badge({ className = "", variant = "default", ...props }) {
  const variantClass =
    variant === "secondary"
      ? "bg-secondary/10 text-secondary border-secondary/20"
      : "bg-primary/10 text-primary border-primary/20";

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors",
        variantClass,
        className,
      )}
      {...props}
    />
  );
}
