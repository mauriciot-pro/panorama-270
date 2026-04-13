"use client";

import { useEffect, useRef } from "react";

// ─────────────────────────────────────────────────────────────────────────────
// HERO VIDEO SOURCE
// Replace with your own hosted video once you upload it to /public/videos/
// or keep the Wix CDN URL while you migrate assets.
// ─────────────────────────────────────────────────────────────────────────────
const HERO_VIDEO_SRC =
  "/videos/hero.mp4"; // local (place your file here)
const HERO_VIDEO_FALLBACK =
  "https://video.wixstatic.com/video/53ff5e_fccaea1ced2d4d3393d94e5cb399c8cb/1080p/mp4/file.mp4";

// Poster image (first frame) – shown while video loads
const HERO_POSTER =
  "https://static.wixstatic.com/media/53ff5e_fccaea1ced2d4d3393d94e5cb399c8cbf000.jpg/v1/fill/w_1440,h_782,al_c,q_85,usm_0.33_1.00_0.00,enc_avif,quality_auto/53ff5e_fccaea1ced2d4d3393d94e5cb399c8cbf000.jpg";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // If local file not found, fall back to the CDN URL
    const video = videoRef.current;
    if (!video) return;

    const handleError = () => {
      if (video.src !== HERO_VIDEO_FALLBACK) {
        video.src = HERO_VIDEO_FALLBACK;
        video.load();
        video.play().catch(() => {});
      }
    };

    video.addEventListener("error", handleError);
    return () => video.removeEventListener("error", handleError);
  }, []);

  return (
    <section
      id="home"
      className="relative w-full h-screen min-h-[600px] overflow-hidden"
    >
      {/* ── Full-screen video ── */}
      <video
        ref={videoRef}
        src={HERO_VIDEO_SRC}
        poster={HERO_POSTER}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* ── Dark overlay for legibility ── */}
      <div className="absolute inset-0 bg-black/30" />

      {/* ── Hero text overlay ── */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <h1 className="text-white font-display text-5xl md:text-7xl lg:text-8xl font-light leading-tight tracking-wide">
          Panorama
          <br />
          <span className="italic">270°</span>
        </h1>
        <div className="mt-6 w-12 h-px bg-white/60 mx-auto" />
        <p className="mt-6 text-white/80 text-sm md:text-base tracking-[0.12em] font-body font-light max-w-md">
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
