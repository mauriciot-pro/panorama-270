"use client";

import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import type { LatLngExpression } from "leaflet";

// ── Coordinates for WRFV+RX  (C. El Poró, Escazú) ──────────────────────────
const POSITION: LatLngExpression = [9.924563, -84.155062];
const ZOOM = 17;

// ── Google Maps deep-link for the "Open in Google Maps" button ───────────────
const GMAPS_LINK =
  "https://www.google.com/maps/place/WRFV%2BRX+Escazu,+San+Jos%C3%A9+Province,+Costa+Rica";

export default function LeafletMap() {
  // Fix default marker icon paths broken by Next.js / webpack
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const L = require("leaflet");
    delete (L.Icon.Default.prototype as unknown as Record<string, unknown>)._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconUrl:       "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
      iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
      shadowUrl:     "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
    });
  }, []);

  return (
    <MapContainer
      center={POSITION}
      zoom={ZOOM}
      scrollWheelZoom={false}
      style={{ width: "100%", height: "100%" }}
      className="z-0"
    >
      {/* Base map tiles — OpenStreetMap */}
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* Custom pin — popup shows "Panorama 270" */}
      <Marker position={POSITION}>
        <Popup
          offset={[0, -10]}
          className="panorama-popup"
        >
          <div style={{ minWidth: 160 }}>
            <p style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "16px",
              fontWeight: 400,
              color: "#091235",
              margin: "0 0 4px 0",
              letterSpacing: "0.04em",
            }}>
              Panorama 270°
            </p>
            <p style={{
              fontFamily: "'Lato', Arial, sans-serif",
              fontSize: "12px",
              color: "#666",
              margin: "0 0 10px 0",
              lineHeight: 1.4,
            }}>
              C. El Poró, Escazú<br />
              San José, Costa Rica
            </p>
            <a
              href={GMAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "'Lato', Arial, sans-serif",
                fontSize: "11px",
                color: "#091235",
                textDecoration: "none",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                borderBottom: "1px solid #091235",
                paddingBottom: "1px",
              }}
            >
              Open in Google Maps →
            </a>
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  );
}
