import { Container } from "@/components/ui/Container";
import { FadeInView } from "@/components/ui/FadeInView";

const schedule = [
  {
    date: "Воскресенье, 15.02 — 18:00",
    title: "Установочная сессия в Zoom.",
    description:
      "Формирование группы и ключевые настройки. Ваша включённость определяет общий результат.",
  },
  {
    date: "Следующие 6 дней",
    title: "Практика в ритме жизни.",
    description:
      "Ежедневные короткие видео и задания. Работа с вниманием, энергией и телом. Запланируйте 1,5–2 часа в день для фокусированной практики.",
  },
  {
    date: "Финальный 7-й день",
    title: "Завершение и итоги.",
    description:
      "Общая встреча, подведение итогов и закрепление состояния «внутреннего лада».",
  },
] as const;

export function Logistics() {
  return (
    <section className="bg-gradient-to-b from-cream to-[#1e2d42] py-24 md:py-32">
      <Container>
        <FadeInView>
          <h2 className="mb-12 text-center text-3xl font-bold text-gold-600 md:text-4xl">
            Как это будет проходить
          </h2>
        </FadeInView>

        <div className="space-y-8">
          {schedule.map((item) => (
            <FadeInView key={item.date}>
              <div className="flex flex-col gap-3 md:flex-row md:gap-8">
                <div className="shrink-0 text-sm font-bold uppercase tracking-wider text-gold-600 md:w-48 md:pt-1">
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
            Важно понимать: вам потребуется внимание, время и энергия на
            выполнение заданий и их проживание. Практика не будет вырывать вас из
            повседневной жизни, но потребует серьёзного отношения и дисциплины.
          </p>
        </FadeInView>
      </Container>
    </section>
  );
}
