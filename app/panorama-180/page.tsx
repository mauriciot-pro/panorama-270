import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Panorama 180° | Escazú, Costa Rica",
  description:
    "The first phase of the Panorama project — Panorama 180° — is completed. Luxury residences in Escazú, Costa Rica.",
};

export default function Panorama180Page() {
  return (
    <main>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative w-full min-h-[60vh] bg-[#091235] flex items-center justify-center overflow-hidden">
        {/* Background image placeholder – replace src with your Panorama 180 hero image */}
        {/* <Image src="/images/panorama180-hero.jpg" alt="Panorama 180°" fill className="object-cover opacity-40" /> */}

        <div className="relative z-10 text-center px-6 py-20">
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

      {/* ── CONTENT PLACEHOLDER ──────────────────────────────────────────── */}
      {/*
        TODO: Add your Panorama 180 content below.
        This should include:
          - Project description
          - Gallery of completed units / building
          - Floor plans / models
          - Location
      */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-[#091235] font-display text-4xl font-light tracking-wide mb-6">
            A Completed Vision
          </h2>
          <div className="w-10 h-px bg-[#C8C8C8] mx-auto mb-10" />
          <p className="text-gray-600 font-body text-base md:text-lg leading-relaxed">
            Panorama 180° represents the first chapter of a landmark residential
            development in Jaboncillo, Escazú. With its stunning panoramic views
            and meticulous design, the building stands as a testament to
            architectural excellence.
          </p>
        </div>
      </section>

      {/* ── BACK LINK ────────────────────────────────────────────────────── */}
      <section className="bg-[#F5F5F5] py-16 text-center">
        <Link
          href="/"
          className="
            inline-block px-10 py-4
            border border-[#091235] text-[#091235] text-xs tracking-[0.25em] uppercase font-body font-light
            hover:bg-[#091235] hover:text-white transition-all duration-300
          "
        >
          ← Back to Panorama 270°
        </Link>
      </section>
    </main>
  );
}
