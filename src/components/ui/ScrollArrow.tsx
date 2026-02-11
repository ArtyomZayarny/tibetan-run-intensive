"use client";

export function ScrollArrow({ targetId }: { targetId: string }) {
  const handleClick = () => {
    document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button
      onClick={handleClick}
      aria-label="Прокрутить вниз"
      className="mt-12 animate-bounce-gentle cursor-pointer text-gold-400 transition-transform hover:scale-110"
    >
      <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
        <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
      </svg>
    </button>
  );
}
