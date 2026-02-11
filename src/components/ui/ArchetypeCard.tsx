import Image from "next/image";
import { cn } from "@/lib/utils";

export function ArchetypeCard({
  image,
  title,
  description,
  className,
}: {
  image: string;
  title: string;
  description: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-gold-200/30 border-l-4 border-l-gold-400 bg-sand shadow-[0_0_20px_rgba(228,181,68,0.08)] hover:shadow-[0_0_30px_rgba(228,181,68,0.15)] transition-shadow",
        className
      )}
    >
      <div className="relative h-48 w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(min-width: 640px) 50vw, 100vw"
        />
      </div>
      <div className="p-6">
        <h4 className="mb-2 font-heading text-lg font-bold text-gold-600">
          {title}
        </h4>
        <p className="text-sm leading-relaxed text-brown-light">{description}</p>
      </div>
    </div>
  );
}
