import { Container } from "@/components/ui/Container";
import { FadeInView } from "@/components/ui/FadeInView";

export function Problem() {
  return (
    <section id="problem" className="bg-gradient-to-b from-cream to-[#1e2d42] py-24 md:py-32">
      <Container>
        <FadeInView>
          <h2 className="mb-10 text-center text-3xl font-bold text-gold-600 md:text-4xl">
            Вы чувствуете себя хозяином своей жизни или её гостем?
          </h2>
        </FadeInView>

        <FadeInView>
          <p className="mb-6 text-lg leading-relaxed text-brown-light">
            Многие привыкли к состоянию{" "}
            <span className="font-semibold text-brown">
              «хронического разряда»
            </span>
            : когда усталость стала нормой, а жизнь превратилась в бег в колесе
            ради чужих задач. Это —{" "}
            <strong className="text-gold-600">РазЛАД</strong>. Состояние, в
            котором тело, ум и душа действуют вразнобой, а энергия утекает через
            микротрещины страхов и суеты.
          </p>
        </FadeInView>

        <FadeInView>
          <p className="text-lg leading-relaxed text-brown-light">
            Когда душа отстранена от управления, мы попадаем в «энергетический
            тупик». Мы ищем выходы с помощью логики, но её потолок слишком
            низок. Ответы лежат выше — там, где звучит мелодия Любви и
            открывается истинный Путь.
          </p>
        </FadeInView>
      </Container>
    </section>
  );
}
