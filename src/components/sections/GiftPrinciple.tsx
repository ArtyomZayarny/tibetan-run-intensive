import { Container } from "@/components/ui/Container";
import { FadeInView } from "@/components/ui/FadeInView";

export function GiftPrinciple() {
  return (
    <section className="bg-gradient-to-b from-cream-dark to-[#182540] py-24 md:py-32">
      <Container>
        <FadeInView>
          <div className="rounded-2xl border border-gold-300/30 bg-gradient-to-br from-sand to-cream p-8 md:p-12 shadow-[0_0_30px_rgba(228,181,68,0.08)]">
            <h2 className="mb-8 text-center text-3xl font-bold text-gold-600 md:text-4xl">
              Принцип Дара
            </h2>

            <div className="space-y-5 text-lg leading-relaxed text-brown-light">
              <p>
                Этот курс не имеет «рыночной цены». Его нельзя купить. Он
                передаётся по{" "}
                <strong className="text-gold-600">Принципу Дара</strong>.
              </p>
              <p>
                Мы, как создатели, дарим этот опыт вам. А вы можете стать звеном
                в цепи передачи, подарив участие тем, чью жизнь хотите видеть
                усиленной и обновлённой. Акт дарения — это признание ценности
                другого и одновременно акт доверия.
              </p>
              <p>
                В серьёзное путешествие берут лишь тех, кому действительно
                доверяют.
              </p>
              <p className="font-medium text-brown">
                Если на всё вышесказанное вы чувствуете отклик — примите этот Дар
                и начните путь к состоянию внутреннего ЛАДа.
              </p>
            </div>
          </div>
        </FadeInView>
      </Container>
    </section>
  );
}
