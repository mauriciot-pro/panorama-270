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

      {/* ── Gradient overlay — matches Panorama 180 style ── */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#091235]/50 via-[#091235]/30 to-[#091235]/70" />

      {/* ── Hero text overlay ── */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <p className="text-white/70 text-xs tracking-[0.35em] uppercase font-body mb-5">
          Phase Two · Now Underway
        </p>
        <h1 className="text-white font-display text-6xl md:text-8xl lg:text-9xl font-light tracking-wide leading-tight">
          Panorama
          <br />
          270°
        </h1>
        <div className="mt-8 w-12 h-px bg-white/40 mx-auto" />
        <p className="mt-7 text-white/75 font-body text-sm md:text-base leading-relaxed tracking-widest max-w-sm mx-auto">
          Jaboncillo, Escazú · Costa Rica
        </p>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-white/40 text-[10px] tracking-[0.2em] uppercase font-body">
            Scroll
          </span>
          <svg
            className="w-4 h-4 text-white/40"
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
