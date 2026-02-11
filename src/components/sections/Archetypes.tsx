import { Container } from "@/components/ui/Container";
import { ArchetypeCard } from "@/components/ui/ArchetypeCard";
import { FadeInView } from "@/components/ui/FadeInView";

const archetypes = [
  {
    image: "/images/lion.png",
    title: "Лев",
    description: "Опора, благородство, аристократизм тела и духа.",
  },
  {
    image: "/images/swan.png",
    title: "Лебедь",
    description: "Чистота, артистизм, тонкость восприятия.",
  },
  {
    image: "/images/tiger.png",
    title: "Тигр",
    description: "Внутренняя динамика и сила пути.",
  },
  {
    image: "/images/eagle.png",
    title: "Орёл",
    description: "Альтруизм, совесть, свобода.",
  },
] as const;

export function Archetypes() {
  return (
    <section className="bg-gradient-to-b from-[#1e2d42] to-cream py-24 md:py-32">
      <Container>
        <FadeInView>
          <h2 className="mb-4 text-center text-3xl font-bold text-gold-600 md:text-4xl">
            Четыре архетипа силы
          </h2>
          <p className="mx-auto mb-12 max-w-xl text-center text-brown-light">
            Мы приглашаем в свою жизнь фундаментальные силы природы
          </p>
        </FadeInView>

        <div className="grid gap-6 sm:grid-cols-2">
          {archetypes.map((a) => (
            <FadeInView key={a.title} className="h-full">
              <ArchetypeCard
                className="h-full"
                image={a.image}
                title={a.title}
                description={a.description}
              />
            </FadeInView>
          ))}
        </div>
      </Container>
    </section>
  );
}
