"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "./Lightbox";

interface UnitSpec {
  label: string;
  value: string;
}

interface UnitCardProps {
  name: string;
  imageSrc: string;   // floor plan image
  specs: UnitSpec[];
  extras?: string[];
  plainExtras?: boolean; // when true, render extras as plain text (no border box)
}

export default function UnitCard({ name, imageSrc, specs, extras = [], plainExtras = false }: UnitCardProps) {
  const [expanded, setExpanded] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <>
      {/* ── Lightbox overlay ────────────────────────────────────────────── */}
      {lightboxOpen && (
        <Lightbox
          src={imageSrc}
          alt={`${name} floor plan`}
          onClose={() => setLightboxOpen(false)}
        />
      )}

      {/* ── Accordion card ──────────────────────────────────────────────── */}
      <div className="border border-[#D7D7D8] bg-white">
        {/* ── Header / trigger ──────────────────────────────────────────── */}
        <button
          className="w-full flex items-center justify-between px-8 py-6 text-left group"
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
        >
          <div>
            <p className="text-[#999] text-[11px] tracking-[0.22em] uppercase font-body mb-1">
              {expanded ? "Click to collapse" : "Click the unit to expand"}
            </p>
            <h3 className="text-[#091235] font-display text-2xl md:text-3xl font-light tracking-wide">
              {name}
            </h3>
          </div>

          {/* Animated +/– icon */}
          <span className="relative flex-shrink-0 w-7 h-7 ml-6">
            <span className="absolute top-1/2 left-0 w-full h-px bg-[#091235] -translate-y-1/2 transition-all duration-300" />
            <span
              className={`absolute top-0 left-1/2 h-full w-px bg-[#091235] -translate-x-1/2 transition-all duration-300 origin-center ${
                expanded ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
              }`}
            />
          </span>
        </button>

        {/* ── Expandable body ───────────────────────────────────────────── */}
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            expanded ? "max-h-[900px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="border-t border-[#D7D7D8] px-8 py-8 flex flex-col md:flex-row gap-8">
            {/* Floor plan image — click to open lightbox */}
            <div
              className="
                relative flex-shrink-0 w-full md:w-[55%] aspect-[4/3]
                cursor-zoom-in overflow-hidden group/img
              "
              onClick={() => setLightboxOpen(true)}
              title="Click to enlarge"
            >
              <Image
                src={imageSrc}
                alt={`${name} floor plan`}
                fill
                className="object-contain bg-[#fafafa] group-hover/img:scale-[1.03] transition-transform duration-400"
                sizes="(max-width: 768px) 100vw, 55vw"
              />
              {/* Zoom hint overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity duration-200 bg-black/10">
                <div className="bg-white/90 rounded-full p-3 shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    strokeWidth={1.5} stroke="#091235" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Unit specs */}
            <div className="flex-1">
              <div className="grid grid-cols-2 gap-x-6 gap-y-6">
                {specs.map((spec) => (
                  <div key={spec.label}>
                    <p className="text-[#999] text-[11px] tracking-[0.18em] uppercase font-body mb-1">
                      {spec.label}
                    </p>
                    <p className="text-[#091235] font-display text-2xl font-light">
                      {spec.value}
                    </p>
                  </div>
                ))}
              </div>

              {extras.length > 0 && (
                <div className={`mt-6 pt-6 border-t border-[#D7D7D8] ${plainExtras ? "flex flex-col gap-2" : "flex flex-wrap gap-3"}`}>
                  {extras.map((item) => (
                    plainExtras ? (
                      <span
                        key={item}
                        className="text-[#666] text-[11px] tracking-[0.15em] uppercase font-body"
                      >
                        {item}
                      </span>
                    ) : (
                      <span
                        key={item}
                        className="text-[#666] text-[11px] tracking-[0.15em] uppercase font-body border border-[#D7D7D8] px-4 py-2"
                      >
                        {item}
                      </span>
                    )
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
