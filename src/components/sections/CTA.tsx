import { Container } from "@/components/ui/Container";
import { FadeInView } from "@/components/ui/FadeInView";
import { RegistrationForm } from "@/components/ui/RegistrationForm";

export function CTA() {
  return (
    <section className="bg-gradient-to-b from-[#182540] to-cream-dark py-24 md:py-32">
      <Container>
        <FadeInView>
          <h2 className="mb-4 text-center text-3xl font-bold text-gold-600 md:text-4xl">
            Готовы ли вы принять этот путь?
          </h2>
          <p className="mx-auto mb-10 max-w-md text-center text-brown-light">
            Регистрируясь, вы подтверждаете готовность быть внимательным к себе и
            группе в течение всех 7 дней.
          </p>
        </FadeInView>
        <FadeInView>
          <RegistrationForm />
        </FadeInView>
        <FadeInView>
          <p className="mt-8 text-center text-sm text-brown-lighter">
            После регистрации вы получите доступ к закрытой Telegram-группе, где
            будет публиковаться вся дополнительная информация.
          </p>
        </FadeInView>
      </Container>
    </section>
  );
}
