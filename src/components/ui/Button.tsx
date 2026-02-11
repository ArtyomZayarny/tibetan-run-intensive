import { cn } from "@/lib/utils";

export function Button({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-block rounded bg-gold-400 px-12 py-5 text-center font-semibold uppercase tracking-widest text-dark-text",
        "transition-all duration-300 hover:-translate-y-1 hover:bg-gold-300 hover:shadow-[0_8px_30px_rgba(228,181,68,0.3)]",
        className
      )}
    >
      {children}
    </a>
  );
}
