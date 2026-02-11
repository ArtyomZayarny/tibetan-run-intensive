// Target date: 15 February 2026, 18:00 Moscow time (UTC+3)
export const TARGET_DATE = new Date("2026-02-15T18:00:00+03:00");

export const TELEGRAM_URL =
  process.env.NEXT_PUBLIC_TELEGRAM_URL || "https://t.me/YOUR_BOT_OR_CHANNEL";

export const SITE_METADATA = {
  title: "Восстановление внутреннего ЛАДа — 7-дневный интенсив",
  description:
    "7-дневное путешествие в архетипические слои тибетской мудрости. Восстановите внутренний лад через пробуждение души, настройку тела и духа, и память о главном.",
  url: "https://tibetan-run.vercel.app",
} as const;
