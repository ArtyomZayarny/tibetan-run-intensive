"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

const inputClass =
  "w-full rounded-lg border border-gold-200/40 bg-sand px-4 py-3 text-brown placeholder:text-brown-lighter/80 outline-none transition-colors focus:border-gold-400 focus:ring-2 focus:ring-gold-400/30";

export function RegistrationForm() {
  const router = useRouter();
  const [form, setForm] = useState({ firstName: "", lastName: "", country: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const isDev = process.env.NODE_ENV === "development";

  const fillTestData = () => {
    setForm({ firstName: "Иван", lastName: "Петров", country: "Украина" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const email = process.env.NEXT_PUBLIC_FORMSUBMIT_EMAIL;
      const res = await fetch(`https://formsubmit.co/ajax/${email}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          Имя: form.firstName,
          Фамилия: form.lastName,
          Страна: form.country,
          _subject: `Новая регистрация: ${form.firstName} ${form.lastName}`,
        }),
      });

      if (!res.ok) throw new Error("Ошибка отправки");

      router.push("/success");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Произошла ошибка");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-md space-y-4">
      <input
        type="text"
        placeholder="Имя"
        required
        value={form.firstName}
        onChange={(e) => setForm({ ...form, firstName: e.target.value })}
        className={inputClass}
      />
      <input
        type="text"
        placeholder="Фамилия"
        required
        value={form.lastName}
        onChange={(e) => setForm({ ...form, lastName: e.target.value })}
        className={inputClass}
      />
      <input
        type="text"
        placeholder="Страна проживания"
        required
        value={form.country}
        onChange={(e) => setForm({ ...form, country: e.target.value })}
        className={inputClass}
      />

      {isDev && (
        <button
          type="button"
          onClick={fillTestData}
          className="w-full rounded-lg border border-dashed border-brown-lighter/30 px-4 py-2 text-xs text-brown-lighter transition-colors hover:border-gold-400 hover:text-gold-600"
        >
          DEV: заполнить тестовыми данными
        </button>
      )}

      {error && (
        <p className="text-center text-sm text-red-500">{error}</p>
      )}

      <button
        type="submit"
        disabled={loading}
        className={cn(
          "w-full rounded-lg bg-gold-400 px-8 py-4 font-semibold uppercase tracking-widest text-dark-text",
          "transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-300 hover:shadow-[0_4px_20px_rgba(228,181,68,0.3)]",
          "disabled:pointer-events-none disabled:opacity-60"
        )}
      >
        {loading ? "Отправка..." : "Я принимаю Дар"}
      </button>
    </form>
  );
}
