"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

/**
 * SplashScreen
 *
 * Shows once per browser session (tracked via sessionStorage).
 * Timeline (≤ 2 s total visible duration):
 *   0 ms        — overlay mounts at opacity 0
 *   50 ms       — fade IN starts  (550 ms ease)
 *   ~600 ms     — fully visible
 *   1 250 ms    — fade OUT starts (700 ms ease)
 *   ~1 950 ms   — fully transparent → removed from DOM
 */
export default function SplashScreen() {
  // null = "deciding", true = show, false = hide
  const [show, setShow] = useState<boolean | null>(null);
  const [opacity, setOpacity] = useState(0);
  const [scale, setScale] = useState(0.94);

  useEffect(() => {
    // Only run on the client side
    if (sessionStorage.getItem("splashShown")) {
      setShow(false);
      return;
    }
    sessionStorage.setItem("splashShown", "1");
    setShow(true);

    // Trigger fade-in on next paint
    const tIn = setTimeout(() => {
      setOpacity(1);
      setScale(1);
    }, 60);

    // Start fade-out
    const tOut = setTimeout(() => {
      setOpacity(0);
    }, 1250);

    // Remove from DOM after fade-out completes
    const tGone = setTimeout(() => {
      setShow(false);
    }, 2000);

    return () => {
      clearTimeout(tIn);
      clearTimeout(tOut);
      clearTimeout(tGone);
    };
  }, []);

  // Don't render anything until we know whether to show
  if (show === null || show === false) return null;

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
        opacity,
        pointerEvents: opacity < 1 ? "none" : "all",
        transition:
          opacity === 1
            ? "opacity 0.55s cubic-bezier(0.4, 0, 0.2, 1)"
            : "opacity 0.75s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      <div
        style={{
          transform: `scale(${scale})`,
          transition: "transform 0.85s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        <Image
          src="/images/logo-splash.png"
          alt="Panorama 270°"
          width={210}
          height={126}
          priority
          style={{
            // Render the logo in pure white so it reads clearly on the navy bg
            filter: "brightness(0) invert(1)",
            width: "clamp(140px, 18vw, 210px)",
            height: "auto",
          }}
        />
      </div>
    </div>
  );
}
