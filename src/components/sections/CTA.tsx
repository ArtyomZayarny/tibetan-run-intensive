import { Container } from "@/components/ui/Container";
import { FadeInView } from "@/components/ui/FadeInView";
import { RegistrationForm } from "@/components/ui/RegistrationForm";

export function CTA() {
  return (
    <section className="bg-cream-dark py-24 md:py-32">
      <Container>
        <FadeInView>
          <h2 className="mb-4 text-center text-3xl font-bold text-gold-600 md:text-4xl">
            Принять Дар
          </h2>
          <p className="mx-auto mb-10 max-w-md text-center text-brown-light">
            Заполните форму, чтобы зарегистрироваться на интенсив
          </p>
        </FadeInView>
        <FadeInView>
          <RegistrationForm />
        </FadeInView>
      </Container>
    </section>
  );
}
