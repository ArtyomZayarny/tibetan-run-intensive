import { Container } from "@/components/ui/Container";
import { FadeInView } from "@/components/ui/FadeInView";

const schedule = [
  {
    date: "15.02 | 18:00",
    title: "Установочная сессия в Zoom.",
    description:
      "Формирование группы и ключевые настройки. Вклад каждого ценен, поэтому курс нельзя купить — только получить в Дар.",
  },
  {
    date: "6 дней",
    title: "Практика в ритме жизни.",
    description:
      "Короткие видео-месседжи и задания на день (1-2 часа). Тренировка внимания и осознанности в потоке ваших обычных дел.",
  },
  {
    date: "День 7",
    title: "Завершение и итоги.",
    description:
      "Финальная встреча и фиксация нового состояния. Каждый день мы ждем от вас обратную связь для продолжения пути.",
  },
] as const;

export function Logistics() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <FadeInView>
          <h2 className="mb-12 text-center text-3xl font-bold text-gold-600 md:text-4xl">
            Как проходит интенсив
          </h2>
        </FadeInView>

        <div className="space-y-8">
          {schedule.map((item) => (
            <FadeInView key={item.date}>
              <div className="flex flex-col gap-3 md:flex-row md:gap-8">
                <div className="shrink-0 text-sm font-bold uppercase tracking-wider text-gold-600 md:w-32 md:pt-1">
                  {item.date}
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-brown">
                    {item.title}
                  </h3>
                  <p className="leading-relaxed text-brown-light">
                    {item.description}
                  </p>
                </div>
              </div>
            </FadeInView>
          ))}
        </div>

        <FadeInView>
          <p className="mt-12 text-center text-sm text-brown-lighter">
            Это не будет просто. Но мы будем поддерживать друг друга.
          </p>
        </FadeInView>
      </Container>
    </section>
  );
}
