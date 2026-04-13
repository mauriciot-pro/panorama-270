"use client";

import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import Carousel from "@/components/Carousel";
import UnitCard from "@/components/UnitCard";
import Image from "next/image";
import Link from "next/link";

// Load Leaflet map only on the client — it uses browser APIs unavailable in SSR
const LeafletMap = dynamic(() => import("@/components/LeafletMap"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-[#eee] flex items-center justify-center">
      <p className="text-[#999] text-xs tracking-widest uppercase font-body">Loading map…</p>
    </div>
  ),
});

// ─────────────────────────────────────────────────────────────────────────────
// SECTION 1 — PROJECT OVERVIEW IMAGES
// Photos are served from /public/images/section1/ and displayed in numeric order.
// To add a new photo: drop it in that folder and name it with the next number
// (e.g. 10.jpg), then add an entry below.
// ─────────────────────────────────────────────────────────────────────────────
const section1Images = [
  { src: "/images/section1/1.jpeg", alt: "Panorama 270° – Render 1" },
  { src: "/images/section1/2.jpeg", alt: "Panorama 270° – Render 2" },
  { src: "/images/section1/3.jpeg", alt: "Panorama 270° – Render 3" },
  { src: "/images/section1/4.jpeg", alt: "Panorama 270° – Render 4" },
  { src: "/images/section1/5.png",  alt: "Panorama 270° – Photo 1" },
  { src: "/images/section1/6.png",  alt: "Panorama 270° – Photo 2" },
  { src: "/images/section1/7.png",  alt: "Panorama 270° – Photo 3" },
  { src: "/images/section1/8.jpg",  alt: "Panorama 270° – Photo 4" },
  { src: "/images/section1/9.jpeg", alt: "Panorama 270° – Photo 5" },
];

// ─────────────────────────────────────────────────────────────────────────────
// CONSTRUCTION PROGRESS IMAGES
// Photos are served from /public/images/progress/ and displayed in numeric order.
// To add a new photo: drop it in that folder and name it with the next number
// (e.g. 7.png), then add an entry below.
// To reorder: just rename the files (1, 2, 3…) — the array order here controls
// the on-screen sequence.
// ─────────────────────────────────────────────────────────────────────────────
const progressImages = [
  { src: "/images/progress/1.png",  alt: "Construction progress – photo 1" },
  { src: "/images/progress/2.jpeg", alt: "Construction progress – photo 2" },
  { src: "/images/progress/3.png",  alt: "Construction progress – photo 3" },
  { src: "/images/progress/4.png",  alt: "Construction progress – photo 4" },
  { src: "/images/progress/5.png",  alt: "Construction progress – photo 5" },
  { src: "/images/progress/6.png",  alt: "Construction progress – photo 6" },
  // ── To add more photos, drop them in public/images/progress/ and add a line:
  // { src: "/images/progress/7.png", alt: "Construction progress – photo 7" },
];

// ─────────────────────────────────────────────────────────────────────────────
// RESIDENTIAL UNIT MODELS
// Floor plan images live in /public/images/units/
// ─────────────────────────────────────────────────────────────────────────────
const units = [
  {
    name: "Center Unit A",
    image: "/images/units/unit-a.jpg",
    specs: [
      { label: "Total area", value: "320 m²" },
      { label: "Bedrooms",   value: "3" },
      { label: "Bathrooms",  value: "3 ½" },
      { label: "Parking",    value: "2" },
    ],
    extras: ["Maid's room", "Storage room"],
  },
  {
    name: "Center Unit B",
    image: "/images/units/unit-b.jpg",
    specs: [
      { label: "Total area", value: "320 m²" },
      { label: "Bedrooms",   value: "2" },
      { label: "Bathrooms",  value: "2 ½" },
      { label: "Parking",    value: "2" },
    ],
    extras: ["Maid's room", "Storage room"],
  },
  {
    name: "Corner Unit",
    image: "/images/units/unit-corner.jpg",
    specs: [
      { label: "Total area", value: "366 m²" },
      { label: "Bedrooms",   value: "3" },
      { label: "Bathrooms",  value: "3 ½" },
      { label: "Parking",    value: "3" },
    ],
    extras: ["Maid's room", "Storage room"],
  },
];

export default function HomePage() {
  return (
    <main>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <Hero />

      {/* ── ABOUT / INTRO — two-column: left carousel, right text ────────── */}
      <section id="about" className="bg-white">
        <div className="flex flex-col md:flex-row min-h-[560px] md:min-h-[640px]">

          {/* Left: image carousel (full height of the section) */}
          <div className="relative w-full md:w-1/2 min-h-[400px] md:min-h-[640px]">
            <Carousel
              images={section1Images}
              autoPlayInterval={5000}
              className="absolute inset-0 w-full h-full"
            />
          </div>

          {/* Right: text content */}
          <div className="w-full md:w-1/2 flex items-center px-8 lg:px-16 py-16 md:py-20">
            <div className="max-w-xl">
              <p className="text-[#091235] font-display text-3xl md:text-4xl font-light leading-relaxed tracking-wide">
                Panorama 270° is a vertical residential project in{" "}
                <span className="italic">Jaboncillo, Escazú.</span>
              </p>

              <div className="mt-10 w-10 h-px bg-[#C8C8C8]" />

              <p className="mt-10 text-gray-600 font-body text-base md:text-lg leading-relaxed">
                The second phase of the project includes the development of Panorama
                270°, with a height of{" "}
                <strong className="text-[#091235] font-medium">7 stories</strong>{" "}
                and a total of{" "}
                <strong className="text-[#091235] font-medium">
                  19 residential units
                </strong>
                .
              </p>
              <p className="mt-5 text-gray-600 font-body text-base md:text-lg leading-relaxed">
                The building features three apartment models with total areas ranging
                from{" "}
                <strong className="text-[#091235] font-medium">320 m²</strong> to{" "}
                <strong className="text-[#091235] font-medium">510 m²</strong>.
              </p>
              <p className="mt-5 text-gray-600 font-body text-base md:text-lg leading-relaxed">
                Located in the most privileged area of Escazú, the location offers
                the most favorable conditions for spectacular views of over{" "}
                <strong className="text-[#091235] font-medium">270°</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── RENDER IMAGE ─────────────────────────────────────────────────── */}
      <section className="w-full">
        <div className="relative w-full aspect-[16/9] max-h-[700px] overflow-hidden">
          <Image
            src="https://static.wixstatic.com/media/53ff5e_a984563841934555bcfd564b3e452424~mv2.jpeg/v1/fill/w_1101,h_852,al_c,q_85,enc_avif,quality_auto/53ff5e_a984563841934555bcfd564b3e452424~mv2.jpeg"
            alt="Panorama 270° Render"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* ── RESIDENTIAL UNITS / MODELS ───────────────────────────────────── */}
      <section id="models" className="bg-[#F5F5F5] py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-center text-[#091235] font-display text-4xl md:text-5xl font-light tracking-wide mb-4">
            Panorama 270° Residential Units
          </h2>
          <div className="w-10 h-px bg-[#C8C8C8] mx-auto mb-16" />

          {/* Accordion unit cards — one per unit, stacked vertically */}
          <div className="flex flex-col gap-3">
            {units.map((unit) => (
              <UnitCard
                key={unit.name}
                name={unit.name}
                imageSrc={unit.image}
                specs={unit.specs}
                extras={unit.extras}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── WHATSAPP CTA ─────────────────────────────────────────────────── */}
      <section id="contact" className="bg-[#091235] py-20 md:py-24">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <p className="text-[#C8C8C8] font-display text-3xl md:text-4xl font-light leading-relaxed tracking-wide">
            For more information, contact us directly via
          </p>
          <h2 className="text-white font-display text-4xl md:text-5xl font-light tracking-widest mt-2">
            WhatsApp.
          </h2>
          <div className="mt-8 w-10 h-px bg-white/30 mx-auto" />
          <a
            href="https://wa.me/50688602441"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center gap-3 mt-10 px-8 py-4
              border border-white/40 text-white text-xs tracking-[0.2em] uppercase font-body font-light
              hover:bg-white hover:text-[#091235] transition-all duration-300
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4 text-[#25D366]"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp
          </a>
        </div>
      </section>

      {/* ── CONSTRUCTION PROGRESS — carousel ─────────────────────────────── */}
      <section id="progress" className="bg-white py-20 md:py-28">
        <div className="max-w-screen-xl mx-auto px-6">
          <h2 className="text-center text-[#091235] font-display text-4xl md:text-5xl font-light tracking-wide mb-4">
            Construction Progress
          </h2>
          <div className="w-10 h-px bg-[#C8C8C8] mx-auto mb-16" />

          {progressImages.length > 0 ? (
            /* Carousel — full-width, fixed height */
            <div className="relative w-full h-[420px] md:h-[560px] lg:h-[640px]">
              <Carousel
                images={progressImages}
                autoPlayInterval={4500}
                className="w-full h-full"
              />
            </div>
          ) : (
            <p className="text-center text-gray-400 font-body tracking-wider text-sm">
              Progress photos coming soon.
            </p>
          )}
        </div>
      </section>

      {/* ── LOCATION ─────────────────────────────────────────────────────── */}
      <section id="location" className="bg-[#F5F5F5] py-20 md:py-28">
        <div className="max-w-screen-xl mx-auto px-6">
          <h2 className="text-center text-[#091235] font-display text-4xl md:text-5xl font-light tracking-wide mb-4">
            Location
          </h2>
          <div className="w-10 h-px bg-[#C8C8C8] mx-auto mb-16" />

          {/* Leaflet map — pin labelled "Panorama 270°" at exact coordinates */}
          <div className="w-full aspect-[16/9] max-h-[520px] shadow-sm overflow-hidden">
            <LeafletMap />
          </div>

          {/* Address block + open-in-maps link */}
          <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="text-[#091235] font-body text-sm tracking-wide">
                C. El Poró, San José, Escazú, Costa Rica
              </p>
            </div>
            <a
              href="https://www.google.com/maps/place/WRFV%2BRX+Escazu,+San+Jos%C3%A9+Province,+Costa+Rica"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center gap-2
                border border-[#091235] text-[#091235] text-xs tracking-[0.18em] uppercase
                font-body font-light px-6 py-3
                hover:bg-[#091235] hover:text-white transition-all duration-300 flex-shrink-0
              "
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              Open in Google Maps
            </a>
          </div>
        </div>
      </section>

      {/* ── COMPANIES MAKING THIS A REALITY ──────────────────────────────── */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-screen-xl mx-auto px-6">
          <h2 className="text-center text-[#091235] font-display text-3xl md:text-4xl font-light tracking-wide mb-12">
            Companies Making This a Reality
          </h2>
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-3xl">
              <Image
                src="/images/companies/companias.png"
                alt="Companies making Panorama 270° a reality"
                width={1200}
                height={400}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── PANORAMA 180 PROMO ───────────────────────────────────────────── */}
      <section className="relative bg-[#091235] py-24 md:py-32 overflow-hidden">
        <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
          <p className="text-[#C8C8C8] text-xs tracking-[0.3em] uppercase font-body mb-4">
            Phase One
          </p>
          <h2 className="text-white font-display text-5xl md:text-6xl font-light tracking-wide leading-tight">
            Panorama 180°
          </h2>
          <div className="mt-6 w-10 h-px bg-white/30 mx-auto" />
          <p className="mt-8 text-[#C8C8C8] font-body text-base leading-relaxed tracking-wider">
            The first phase, Panorama 180°, is completed.
          </p>
          <Link
            href="/panorama-180"
            className="
              inline-block mt-10 px-10 py-4
              border border-white/40 text-white text-xs tracking-[0.25em] uppercase font-body font-light
              hover:bg-white hover:text-[#091235] transition-all duration-300
            "
          >
            Explore
          </Link>
        </div>
      </section>
    </main>
  );
}
