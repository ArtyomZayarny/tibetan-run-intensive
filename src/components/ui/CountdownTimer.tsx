"use client";

import { useEffect, useState } from "react";
import { TARGET_DATE } from "@/lib/constants";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function calculateTimeLeft(): TimeLeft | null {
  const diff = TARGET_DATE.getTime() - Date.now();
  if (diff <= 0) return null;

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function pad(n: number) {
  return String(n).padStart(2, "0");
}

const labels = ["дней", "часов", "минут", "секунд"] as const;

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTimeLeft(calculateTimeLeft());

    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Hydration-safe: show nothing until mounted on client
  if (!mounted) {
    return (
      <div className="mt-8 flex justify-center gap-4" aria-hidden>
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="flex flex-col items-center">
            <span className="text-3xl font-bold tabular-nums text-white md:text-4xl">
              --
            </span>
            <span className="mt-1 text-xs uppercase tracking-wider text-white/60">
              {labels[i]}
            </span>
          </div>
        ))}
      </div>
    );
  }

  if (!timeLeft) {
    return (
      <p className="mt-8 text-lg font-semibold text-gold-400">
        Интенсив начался!
      </p>
    );
  }

  const values = [timeLeft.days, timeLeft.hours, timeLeft.minutes, timeLeft.seconds];

  return (
    <div className="mt-8 flex justify-center gap-4" role="timer" aria-label="Обратный отсчёт до начала интенсива">
      {values.map((value, i) => (
        <div key={i} className="flex flex-col items-center">
          <span className="text-3xl font-bold tabular-nums text-white md:text-4xl">
            {pad(value)}
          </span>
          <span className="mt-1 text-xs uppercase tracking-wider text-white/60">
            {labels[i]}
          </span>
        </div>
      ))}
    </div>
  );
}
