import Image from "next/image";

// ─────────────────────────────────────────────────────────────────────────────
// HERO IMAGE SOURCE
// Replace the file at /public/images/hero.png to swap the background.
// ─────────────────────────────────────────────────────────────────────────────
const HERO_IMAGE = "/images/hero.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full h-screen min-h-[600px] overflow-hidden"
    >
      {/* ── Full-screen background image ── */}
      <Image
        src={HERO_IMAGE}
        alt="Panorama 270° – Jaboncillo, Escazú"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      {/* ── Dark overlay for legibility ── */}
      <div className="absolute inset-0 bg-black/30" />

      {/* ── Hero text overlay ── */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <h1 className="text-white font-display text-5xl md:text-7xl lg:text-8xl font-light leading-tight tracking-wide">
          Panorama
          <br />
          270°
        </h1>
        <div className="mt-6 w-12 h-px bg-white/60 mx-auto" />
        <p className="mt-6 text-white text-base md:text-lg tracking-[0.12em] font-body font-light max-w-md drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
          A vertical residential project in Jaboncillo, Escazú
        </p>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-white/50 text-[10px] tracking-[0.2em] uppercase font-body">
            Scroll
          </span>
          <svg
            className="w-4 h-4 text-white/50"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
