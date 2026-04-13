"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";

interface PeekCarouselProps {
  images: { src: string; alt: string }[];
  autoPlayInterval?: number;
}

// ─────────────────────────────────────────────────────────────────────────────
// PeekCarousel — elegant center-focus carousel.
// The active image is shown full-size and sharp in the center.
// Adjacent images are visible at the edges, dimmed and blurred.
// Matches the Panorama 270° site aesthetic (dark navy, clean lines).
// ─────────────────────────────────────────────────────────────────────────────
export default function PeekCarousel({ images, autoPlayInterval = 6000 }: PeekCarouselProps) {
  const [current, setCurrent] = useState(0);
  const n = images.length;

  const next = useCallback(() => setCurrent((c) => (c + 1) % n), [n]);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + n) % n), [n]);

  useEffect(() => {
    if (n <= 1) return;
    const t = setInterval(next, autoPlayInterval);
    return () => clearInterval(t);
  }, [next, n, autoPlayInterval]);

  // Normalised distance from current (–1, 0, +1 with wrap-around)
  function getOffset(i: number) {
    let d = i - current;
    if (d > n / 2) d -= n;
    if (d < -n / 2) d += n;
    return d;
  }

  // Slide is 65% wide; adjacent peek offset = 70% of container (leaves ~12% peeking in)
  const SLIDE_W = 65;      // % of container
  const STEP    = 70;      // % offset per position
  const LEFT_CENTER = (100 - SLIDE_W) / 2; // 17.5%

  return (
    <div className="w-full bg-[#091235] py-12 md:py-16">
      {/* ── Slide track ─────────────────────────────────────────── */}
      <div className="relative w-full overflow-hidden" style={{ height: "clamp(280px, 50vw, 620px)" }}>
        {images.map((img, i) => {
          const d = getOffset(i);
          const isCenter    = d === 0;
          const isAdjacent  = Math.abs(d) === 1;
          const isVisible   = isCenter || isAdjacent;

          const left    = LEFT_CENTER + d * STEP;            // % from container left
          const scale   = isCenter ? 1 : 0.82;
          const opacity = isCenter ? 1 : isAdjacent ? 0.45 : 0;
          const blur    = isCenter ? 0 : 5;
          const zIndex  = isCenter ? 10 : 5;

          return (
            <div
              key={i}
              aria-hidden={!isVisible}
              onClick={() => { if (d < 0) prev(); else if (d > 0) next(); }}
              className="absolute top-0 h-full transition-all duration-500 ease-in-out"
              style={{
                left:           `${left}%`,
                width:          `${SLIDE_W}%`,
                transform:      `scale(${scale})`,
                transformOrigin:"center center",
                opacity,
                filter:         blur ? `blur(${blur}px) brightness(0.55)` : "none",
                zIndex,
                cursor:         isCenter ? "default" : "pointer",
                pointerEvents:  isVisible ? "auto" : "none",
              }}
            >
              <div className="relative w-full h-full overflow-hidden shadow-2xl bg-[#091235]">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 90vw, 65vw"
                  priority={isCenter}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* ── Navigation arrows ───────────────────────────────────── */}
      <div className="relative max-w-screen-xl mx-auto px-6">
        {/* Prev */}
        <button
          onClick={prev}
          aria-label="Previous image"
          className="
            absolute left-6 md:left-10
            -top-[clamp(160px,25vw,320px)]
            z-20 flex items-center justify-center
            w-10 h-10 border border-white/30 text-white/60
            hover:border-white hover:text-white
            transition-all duration-300
          "
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Next */}
        <button
          onClick={next}
          aria-label="Next image"
          className="
            absolute right-6 md:right-10
            -top-[clamp(160px,25vw,320px)]
            z-20 flex items-center justify-center
            w-10 h-10 border border-white/30 text-white/60
            hover:border-white hover:text-white
            transition-all duration-300
          "
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* ── Dot indicators ──────────────────────────────────────── */}
      <div className="flex items-center justify-center gap-3 mt-8">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to image ${i + 1}`}
            className="transition-all duration-300"
            style={{
              width:        i === current ? "24px" : "6px",
              height:       "6px",
              borderRadius: "3px",
              background:   i === current ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.3)",
            }}
          />
        ))}
      </div>
    </div>
  );
}
