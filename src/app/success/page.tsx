import { Container } from "@/components/ui/Container";
import { TELEGRAM_URL } from "@/lib/constants";

export const metadata = {
  title: "Регистрация завершена — Восстановление внутреннего ЛАДа",
};

export default function SuccessPage() {
  const telegramUrl = TELEGRAM_URL;

  return (
    <main className="flex min-h-screen items-center justify-center bg-cream">
      <Container className="py-24 text-center">
        <div className="mx-auto max-w-lg">
          <div className="mb-6 text-5xl">✨</div>

          <h1 className="mb-4 font-heading text-3xl font-bold text-gold-600 md:text-4xl">
            Добро пожаловать!
          </h1>

          <p className="mb-8 text-lg leading-relaxed text-brown-light">
            Ваша регистрация принята. Теперь присоединяйтесь к нашей группе,
            чтобы получить все материалы и быть на связи.
          </p>

          <a
            href={telegramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-lg bg-gold-400 px-12 py-4 font-semibold uppercase tracking-widest text-dark-text transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-300 hover:shadow-[0_4px_20px_rgba(228,181,68,0.3)]"
          >
            Войти в группу
          </a>

          <p className="mt-6 text-sm text-brown-lighter">
            Ссылка откроется в Telegram
          </p>
        </div>
      </Container>
    </main>
  );
}
