import { Container } from "@/components/ui/Container";
import { FadeInView } from "@/components/ui/FadeInView";

const steps = [
  {
    number: "1",
    title: "Пробуждаем Душу",
    text: "Мы выходим за рамки ограниченной логики эго и активируем разум души. Мы приглашаем в свою жизнь фундаментальные силы природы через четыре архетипа.",
  },
  {
    number: "2",
    title: "Настраиваем струны",
    text: "Мы убираем «перетяжки и провисания», восстанавливая синхронность тела и духа. Когда этот лад восстановлен, даже внешний хаос перестаёт разрушать и начинает «танцевать под нашу дудку».",
  },
  {
    number: "3",
    title: "Пробуждаем Смрити (память о главном)",
    text: "Это самая главная задача. Через воздействие высоких энергий вы не просто узнаете новое — вы вновь вспоминаете свой истинный Путь.",
  },
] as const;

export function Solution() {
  return (
    <section className="bg-cream-dark py-24 md:py-32">
      <Container>
        <FadeInView>
          <h2 className="mb-6 text-center text-3xl font-bold text-gold-600 md:text-4xl">
            7 дней для восстановления Внутреннего ЛАДа
          </h2>
          <p className="mx-auto mb-16 max-w-2xl text-center text-lg text-brown-light">
            Интенсив — это мост от механического выживания к живому
            взаимодействию с собственной жизненной энергией (собственным Духом).
          </p>
        </FadeInView>

        <div className="space-y-12">
          {steps.map((step) => (
            <FadeInView key={step.number}>
              <div className="rounded-xl border border-gold-200/50 bg-cream p-8">
                <h3 className="mb-4 text-xl font-bold text-gold-600 md:text-2xl">
                  <span className="mr-2 text-gold-400">{step.number}.</span>
                  {step.title}
                </h3>
                <p className="text-lg leading-relaxed text-brown-light">
                  {step.text}
                </p>
              </div>
            </FadeInView>
          ))}
        </div>

        <FadeInView>
          <p className="mt-16 text-center text-lg font-medium italic text-gold-600">
            Хватит просто функционировать. Пора пробудиться и вернуть себе право
            быть Хозяином своей судьбы.
          </p>
        </FadeInView>
      </Container>
    </section>
  );
}
