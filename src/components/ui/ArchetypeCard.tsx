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
        "rounded-xl border border-gold-200/30 border-l-4 border-l-gold-400 bg-sand p-6 shadow-[0_0_20px_rgba(228,181,68,0.08)] hover:shadow-[0_0_30px_rgba(228,181,68,0.15)] transition-shadow",
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
