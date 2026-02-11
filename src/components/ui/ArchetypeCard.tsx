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
        "rounded-lg border-l-4 border-gold-600 bg-gold-50/50 p-6",
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
