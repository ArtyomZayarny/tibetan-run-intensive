import { Container } from "@/components/ui/Container";
import { ArchetypeCard } from "@/components/ui/ArchetypeCard";
import { FadeInView } from "@/components/ui/FadeInView";

const archetypes = [
  {
    image: "/images/lion.png",
    title: "Лев",
    description:
      "Мощное присутствие в физической реальности. Ощущение защищённости, устойчивости, благородства. Это фундамент, опора.",
  },
  {
    image: "/images/swan.png",
    title: "Лебедь",
    description:
      "Чистота потока жизненной энергии. Ощущение гармонии, тонкость восприятия, вдохновение красотой окружающего мира. Это наши окна и двери в «божественное измерение».",
  },
  {
    image: "/images/tiger.png",
    title: "Тигр",
    description:
      "Пробуждённый разум. Состояние ясности, способность видеть различные аспекты происходящего. Свобода от страхов и сомнений. Внутренняя динамика и сила мысли. Это инструмент развития и самосовершенствования.",
  },
] as const;

const benefits = [
  "полноценное присутствие в каждом моменте жизни",
  "состояние «потока», где усилия не съедают энергию, а генерируют её",
  "когерентность — способность направлять свой ресурс точно в цель, реализуя истинный потенциал",
  "устойчивость — внешний хаос перестаёт быть разрушительным и становится материалом для роста",
] as const;

export function Solution() {
  return (
    <section className="bg-gradient-to-b from-cream-dark via-[#182540] to-cream-dark py-24 md:py-32">
      <Container>
        <FadeInView>
          <h2 className="mb-6 text-center text-3xl font-bold text-gold-600 md:text-4xl">
            Союз с изначальными силами природы
          </h2>
          <p className="mx-auto mb-16 max-w-2xl text-center text-lg text-brown-light">
            Наш 7-дневный интенсив — это возможность пригласить в свою жизнь
            мудрые силы первозданной природы, представленные в тибетской традиции
            архетипами Льва, Лебедя и Тигра.
          </p>
        </FadeInView>

        <div className="mb-16 grid gap-6 md:grid-cols-3">
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

        <FadeInView>
          <p className="mb-8 text-lg leading-relaxed text-brown-light">
            Задача интенсива — превратить эти архетипы в живые внутренние
            состояния. Когда три основы — тело, энергия и разум —
            восстанавливаются и синхронизируются, возникает удивительное
            состояние, открывающее новые горизонты. Это состояние мы назвали{" "}
            <strong className="text-gold-600">Внутренний ЛАД</strong>.
          </p>
        </FadeInView>

        <FadeInView>
          <div className="rounded-xl border border-gold-200/30 bg-sand p-8 shadow-[0_0_20px_rgba(228,181,68,0.06)]">
            <h3 className="mb-4 text-xl font-bold text-gold-600 md:text-2xl">
              Восстановленный внутренний ЛАД порождает:
            </h3>
            <ul className="space-y-3 text-lg leading-relaxed text-brown-light">
              {benefits.map((b) => (
                <li key={b} className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-gold-400" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </FadeInView>
      </Container>
    </section>
  );
}
