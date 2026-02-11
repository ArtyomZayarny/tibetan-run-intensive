import { Container } from "@/components/ui/Container";
import { FadeInView } from "@/components/ui/FadeInView";

export function GiftPrinciple() {
  return (
    <section className="bg-cream-dark py-24 md:py-32">
      <Container>
        <FadeInView>
          <div className="rounded-2xl border border-gold-300/30 bg-gradient-to-br from-sand to-cream p-8 md:p-12 shadow-[0_0_30px_rgba(228,181,68,0.08)]">
            <h2 className="mb-8 text-center text-3xl font-bold text-gold-600 md:text-4xl">
              Принцип Дара
            </h2>

            <div className="space-y-5 text-lg leading-relaxed text-brown-light">
              <p>
                Этот курс не бесплатный — но он передаётся в{" "}
                <strong className="text-gold-600">Дар</strong>.
              </p>
              <p>
                Мы, как создатели, дарим этот интенсив всем участникам. А каждый
                участник может подарить его дальше — тем людям, чью жизнь он
                хотел бы сделать живее, яснее, гармоничнее. Друзьям. Близким.
                Родным.
              </p>
              <p>
                Это подарок, как на день рождения — знак внимания и признание
                ценности. Приглашение прожить вместе очень красивый и целостный
                этап жизни.
              </p>
              <p>
                Дар — это всегда больше, чем деньги. Он создаёт связь. Он
                говорит: «Я вижу тебя. Я хочу разделить с тобой этот путь».
              </p>
              <p>
                Это и акт доверия — ведь в поход берут не всех. И радость —
                потому что возможность подарить часто наполняет сильнее, чем
                возможность получить.
              </p>
              <p className="font-medium text-brown">
                Мы верим, что именно так рождается живое сообщество — через
                осознанный выбор быть вместе.
              </p>
            </div>
          </div>
        </FadeInView>
      </Container>
    </section>
  );
}
