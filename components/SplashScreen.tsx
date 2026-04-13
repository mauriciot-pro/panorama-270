"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

/**
 * SplashScreen
 *
 * Renders at full opacity in the initial server HTML so the overlay is
 * present before any page content is visible — no hero flash.
 *
 * Timeline (first visit, ≤ 2 s):
 *   SSR / mount  — overlay covers page at opacity 1
 *   ~1 350 ms    — fade OUT starts  (750 ms ease)
 *   ~2 100 ms    — fully transparent → removed from DOM
 *
 * Repeat visits: sessionStorage check runs immediately in useEffect,
 * overlay is removed before the user perceives it.
 */

type Phase = "cover" | "fadeOut" | "gone";

export default function SplashScreen() {
  // "cover" is the SSR default — ensures the page is hidden on first paint
  const [phase, setPhase] = useState<Phase>("cover");

  useEffect(() => {
    // Repeat visit — hide instantly, no animation
    if (sessionStorage.getItem("splashShown")) {
      setPhase("gone");
      return;
    }
    sessionStorage.setItem("splashShown", "1");

    // First visit — hold, then fade out
    const tFade = setTimeout(() => setPhase("fadeOut"), 2350);
    const tGone = setTimeout(() => setPhase("gone"), 3150);

    return () => {
      clearTimeout(tFade);
      clearTimeout(tGone);
    };
  }, []);

  if (phase === "gone") return null;

  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        backgroundColor: "#091235",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        opacity: phase === "fadeOut" ? 0 : 1,
        transition:
          phase === "fadeOut"
            ? "opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1)"
            : "none",
        pointerEvents: phase === "fadeOut" ? "none" : "all",
      }}
    >
      {/* Logo in its original grey/gold palette — no colour filter */}
      <div
        style={{
          transform: "scale(1)",
          animation: phase === "cover" ? "splashIn 0.9s cubic-bezier(0.16,1,0.3,1) forwards" : "none",
        }}
      >
        <style>{`
          @keyframes splashIn {
            from { opacity: 0; transform: scale(0.92); }
            to   { opacity: 1; transform: scale(1); }
          }
        `}</style>
        <Image
          src="/images/logo-splash.png"
          alt="Panorama 270°"
          width={210}
          height={126}
          priority
          style={{
            width: "clamp(150px, 20vw, 220px)",
            height: "auto",
          }}
        />
      </div>
    </div>
  );
}
