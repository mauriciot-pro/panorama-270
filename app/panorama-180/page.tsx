import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PeekCarousel from "@/components/PeekCarousel";

export const metadata: Metadata = {
  title: "Panorama 180° | Escazú, Costa Rica",
  description:
    "The first phase of the Panorama project — Panorama 180° — is completed. Luxury residences in Escazú, Costa Rica.",
};

const galleryImages = [
  { src: "/images/panorama180/building.jpg", alt: "Panorama 180° – Completed building" },
  { src: "/images/panorama180/view-1.jpg",   alt: "Panorama 180° – Valley view" },
  { src: "/images/panorama180/view-2.jpg",   alt: "Panorama 180° – City view" },
];

export default function Panorama180Page() {
  return (
    <main>

      {/* ── HERO — building photo as background ──────────────────────────── */}
      <section className="relative w-full min-h-[75vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/panorama180/building.jpg"
          alt="Panorama 180° building"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-[#091235]/60" />

        <div className="relative z-10 text-center px-6 py-24">
          <p className="text-[#C8C8C8] text-xs tracking-[0.35em] uppercase font-body mb-4">
            Phase One · Completed
          </p>
          <h1 className="text-white font-display text-6xl md:text-8xl font-light tracking-wide leading-tight">
            Panorama
            <br />
            <span className="italic">180°</span>
          </h1>
          <div className="mt-8 w-10 h-px bg-white/30 mx-auto" />
          <p className="mt-8 text-[#C8C8C8] font-body text-base leading-relaxed tracking-wider max-w-lg mx-auto">
            The first phase of the Panorama project is completed.
            Panorama 180° offers a refined living experience in the heart of Escazú.
          </p>
        </div>
      </section>

      {/* ── DESCRIPTION ──────────────────────────────────────────────────── */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="w-10 h-px bg-[#C8C8C8] mx-auto mb-10" />

          <p className="text-gray-600 font-body text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Panorama 180° represents the first chapter of a landmark residential
            development in Jaboncillo, Escazú. With its stunning panoramic views
            and meticulous design, the building stands as a testament to
            architectural excellence.
          </p>

          <p className="mt-6 text-gray-600 font-body text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            With a height of{" "}
            <strong className="text-[#091235] font-medium">7 levels</strong> and
            a total of{" "}
            <strong className="text-[#091235] font-medium">
              19 residential units
            </strong>
            , the building features two apartment models with total areas ranging
            from{" "}
            <strong className="text-[#091235] font-medium">320 m²</strong> to{" "}
            <strong className="text-[#091235] font-medium">445 m²</strong>.
            Located in the most privileged area of Escazú, the land offers the
            most favorable characteristics for providing spectacular views of
            over{" "}
            <strong className="text-[#091235] font-medium">180°</strong>.
          </p>

          {/* Key specs */}
          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            {[
              { value: "7",         label: "Levels" },
              { value: "19",        label: "Residential Units" },
              { value: "320–445 m²", label: "Unit Area" },
              { value: "180°",      label: "Panoramic Views" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center gap-2">
                <span className="text-[#091235] font-display text-2xl md:text-3xl font-light tracking-wide">
                  {stat.value}
                </span>
                <div className="w-6 h-px bg-[#C8C8C8]" />
                <span className="text-gray-500 font-body text-xs tracking-[0.15em] uppercase">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PHOTO CAROUSEL ───────────────────────────────────────────────── */}
      <PeekCarousel images={galleryImages} autoPlayInterval={6000} />

      {/* ── CTA — link back to Panorama 270 ──────────────────────────────── */}
      <section className="bg-[#091235] py-24 md:py-32 text-center">
        <p className="text-[#C8C8C8] text-xs tracking-[0.3em] uppercase font-body mb-4">
          Phase Two
        </p>
        <h2 className="text-white font-display text-5xl md:text-6xl font-light tracking-wide leading-tight">
          Panorama 270°
        </h2>
        <div className="mt-6 w-10 h-px bg-white/30 mx-auto" />
        <p className="mt-8 text-[#C8C8C8] font-body text-base leading-relaxed tracking-wider max-w-md mx-auto">
          The second phase is now underway — raising the bar even further.
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
