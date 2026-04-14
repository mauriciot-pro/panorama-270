import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PeekCarousel from "@/components/PeekCarousel";

export const metadata: Metadata = {
  title: "Panorama 180° | Escazú, Costa Rica",
  description:
    "The first phase of the Panorama project — Panorama 180° — is completed. Luxury residences in Jaboncillo, Escazú, Costa Rica.",
};

// ─────────────────────────────────────────────────────────────────────────────
// GALLERY — all 7 images, displayed in numeric order in the carousel.
// To add a new photo: optimize and drop it in public/images/panorama180/,
// then add a new entry below.
// ─────────────────────────────────────────────────────────────────────────────
const galleryImages = [
  { src: "/images/panorama180/2.jpg", alt: "Panorama 180° – Aerial view" },
  { src: "/images/panorama180/4.jpg", alt: "Panorama 180° – Building facade" },
  { src: "/images/panorama180/7.jpg", alt: "Panorama 180° – Building through trees" },
  { src: "/images/panorama180/1.jpg", alt: "Panorama 180° – Building and greenery" },
  { src: "/images/panorama180/6.jpg", alt: "Panorama 180° – Landscaping" },
  { src: "/images/panorama180/5.jpg", alt: "Panorama 180° – Valley view" },
  { src: "/images/panorama180/3.jpg", alt: "Panorama 180° – City panoramic" },
];

export default function Panorama180Page() {
  return (
    <main>

      {/* ── HERO — aerial drone shot (image 2) ───────────────────────────── */}
      <section className="relative w-full h-screen min-h-[600px] overflow-hidden">
        <Image
          src="/images/panorama180/2.jpg"
          alt="Panorama 180° – aerial view"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Gradient overlay — darker at bottom for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#091235]/50 via-[#091235]/30 to-[#091235]/70" />

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <p className="text-white/70 text-xs tracking-[0.35em] uppercase font-body mb-5">
            Phase One · Completed
          </p>
          <h1 className="text-white font-display text-6xl md:text-8xl lg:text-9xl font-light tracking-wide leading-tight">
            Panorama
            <br />
            <span className="italic">180°</span>
          </h1>
          <div className="mt-8 w-12 h-px bg-white/40 mx-auto" />
          <p className="mt-7 text-white/75 font-body text-sm md:text-base leading-relaxed tracking-widest max-w-sm mx-auto">
            Jaboncillo, Escazú · Costa Rica
          </p>

          {/* Scroll indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
            <span className="text-white/40 text-[10px] tracking-[0.2em] uppercase font-body">Scroll</span>
            <svg className="w-4 h-4 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </section>

      {/* ── DESCRIPTION — Turnberry-inspired: image left, text right ─────── */}
      <section className="bg-white">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex flex-col md:flex-row min-h-[560px] md:min-h-[640px]">

            {/* Left: building photo with whitespace padding */}
            <div className="w-full md:w-[45%] min-h-[420px] md:min-h-[640px] flex items-center justify-center p-8 md:p-10 bg-white">
              <div className="relative w-full h-full min-h-[360px]">
                <Image
                  src="/images/panorama180/1.jpg"
                  alt="Panorama 180° – building and greenery"
                  fill
                  className="object-contain object-center"
                />
              </div>
            </div>

            {/* Right: text */}
            <div className="w-full md:w-[55%] flex items-center px-8 lg:px-16 xl:px-20 py-16 md:py-20">
              <div className="max-w-lg">
                <p className="text-[#091235] font-body text-xs tracking-[0.3em] uppercase mb-6">
                  Phase One · Completed
                </p>
                <div className="w-10 h-px bg-[#C8C8C8] mb-8" />

                <p className="text-gray-900 font-body font-light text-lg md:text-xl leading-relaxed">
                  Panorama 180° is the first completed phase of a landmark
                  residential development in Jaboncillo, Escazú — setting the
                  benchmark for elevated living in Costa Rica's most
                  sought-after neighborhood.
                </p>
                <p className="mt-5 text-gray-900 font-body font-light text-lg md:text-xl leading-relaxed">
                  Rising 7 levels with 19 exclusive residences, the building
                  offers two distinct apartment models ranging from 320 m² to
                  445 m². Positioned on Escazú's most privileged hillside, every
                  unit commands sweeping views stretching over 180° of the
                  Central Valley.
                </p>

                {/* Stats row */}
                <div className="mt-10 grid grid-cols-2 gap-6">
                  {[
                    { value: "7",          label: "Levels" },
                    { value: "19",         label: "Residences" },
                    { value: "320–445 m²", label: "Unit Area" },
                    { value: "180°",       label: "Panoramic Views" },
                  ].map((s) => (
                    <div key={s.label} className="flex flex-col gap-1.5">
                      <span className="text-[#091235] font-display text-2xl font-light tracking-wide">
                        {s.value}
                      </span>
                      <div className="w-6 h-px bg-[#C8C8C8]" />
                      <span className="text-gray-400 font-body text-xs tracking-[0.15em] uppercase">
                        {s.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── PHOTO CAROUSEL — all 7 images ────────────────────────────────── */}
      <PeekCarousel images={galleryImages} autoPlayInterval={5500} />

      {/* ── PHASE TWO CTA ────────────────────────────────────────────────── */}
      <section className="bg-[#091235] py-24 md:py-32 text-center">
        <p className="text-[#C8C8C8] text-xs tracking-[0.3em] uppercase font-body mb-4">
          Phase Two · Now Underway
        </p>
        <h2 className="text-white font-display text-5xl md:text-6xl font-light tracking-wide leading-tight">
          Panorama 270°
        </h2>
        <div className="mt-6 w-10 h-px bg-white/30 mx-auto" />
        <p className="mt-8 text-[#C8C8C8] font-body text-base leading-relaxed tracking-wider max-w-md mx-auto">
          The second phase is raising the bar even further — 19 residences
          with views stretching over 270° of the valley.
        </p>
        <Link
          href="/"
          className="
            inline-block mt-10 px-10 py-4
            border border-white/40 text-white text-xs tracking-[0.25em] uppercase font-body font-light
            hover:bg-white hover:text-[#091235] transition-all duration-300
          "
        >
          Explore Panorama 270°
        </Link>
      </section>

    </main>
  );
}
