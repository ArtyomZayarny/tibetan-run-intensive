import { Container } from "@/components/ui/Container";
import { CountdownTimer } from "@/components/ui/CountdownTimer";
import { ScrollArrow } from "@/components/ui/ScrollArrow";

export function Hero() {
  return (
    <section className="relative flex h-screen items-center justify-center overflow-hidden">
      {/* Gradient fallback (behind video, visible until video loads) */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-stone-900 via-stone-800 to-stone-900" />

      {/* Video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="/images/hero-poster.jpg"
        className="absolute inset-0 z-[1] h-full w-full object-cover"
      >
        <source src="/videos/hero-mountains.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 z-[2] bg-gradient-to-b from-black/60 via-black/40 to-[#1a2535]" />

      {/* Content */}
      <Container className="relative z-10 text-center">
        <h1 className="text-4xl font-bold uppercase leading-tight tracking-wider text-white md:text-6xl lg:text-7xl">
          Восстановление
          <br />
          внутреннего <span className="text-gold-400">ЛАДа</span>
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-lg text-white/90 md:text-xl">
          7-дневное путешествие в архетипические слои тибетской мудрости
        </p>

        <CountdownTimer />

        <ScrollArrow targetId="problem" />
      </Container>
    </section>
  );
}
