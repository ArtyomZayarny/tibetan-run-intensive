import { Container } from "@/components/ui/Container";
import { FadeInView } from "@/components/ui/FadeInView";

export function Problem() {
  return (
    <section id="problem" className="bg-gradient-to-b from-cream to-[#1e2d42] py-24 md:py-32">
      <Container>
        <FadeInView>
          <h2 className="mb-10 text-center text-3xl font-bold text-gold-600 md:text-4xl">
            Вы чувствуете себя хозяином своей жизни?
          </h2>
        </FadeInView>

        <FadeInView>
          <p className="mb-6 text-lg leading-relaxed text-brown-light">
            Большинство людей, психологически готовых к качественным изменениям,
            сталкиваются с невидимым барьером — недостатком энергии для выхода на
            «новую орбиту». Это происходит из-за привычной рассинхронизации трёх
            основ человеческого бытия: тела, энергии и разума.
          </p>
        </FadeInView>

        <FadeInView>
          <p className="mb-6 text-lg leading-relaxed text-brown-light">
            Когда они разобщены — как в басне про Лебедя, Рака и Щуку —
            возникает «энергетический тупик». Есть действия, но нет энергии для
            глубинного осознания их результатов. Есть идеи, но нет понимания, как
            воплотить их в жизнь. Поток энергии нестабилен, а всплески эмоций
            приводят к её постоянному распылению.
          </p>
        </FadeInView>

        <FadeInView>
          <p className="text-lg leading-relaxed text-brown-light">
            Эту проблему невозможно решить внутри «замкнутого круга». Нужна
            помощь извне.
          </p>
        </FadeInView>
      </Container>
    </section>
  );
}
