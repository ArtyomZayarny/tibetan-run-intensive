import { cn } from "@/lib/utils";

export function ArchetypeCard({
  icon,
  title,
  description,
  className,
}: {
  icon: string;
  title: string;
  description: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-xl border border-gold-200 border-l-4 border-l-gold-600 bg-white/80 p-6 shadow-md shadow-gold-100/50",
        className
      )}
    >
      <div className="mb-2 text-2xl">{icon}</div>
      <h4 className="mb-2 font-heading text-lg font-bold text-gold-600">
        {title}
      </h4>
      <p className="text-sm leading-relaxed text-brown-light">{description}</p>
    </div>
  );
}
