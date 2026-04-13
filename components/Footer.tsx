import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#091235]">

      {/* ── Three-column grid ─────────────────────────────────────────────── */}
      <div className="max-w-screen-xl mx-auto px-8 lg:px-16 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">

          {/* ── Contact ── */}
          <div>
            <div className="w-full h-px bg-white/20 mb-6" />
            <p className="text-white/50 font-body text-[10px] tracking-[0.28em] uppercase mb-6">
              Contact
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:rtovarc@gmail.com"
                className="text-[#C8C8C8] font-body text-sm tracking-wide hover:text-white transition-colors"
              >
                rtovarc@gmail.com
              </a>
              <a
                href="https://wa.me/50688602441"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C8C8C8] font-body text-sm tracking-wide hover:text-white transition-colors"
              >
                +506 8860-2441
              </a>
            </div>
          </div>

          {/* ── Social ── */}
          <div>
            <div className="w-full h-px bg-white/20 mb-6" />
            <p className="text-white/50 font-body text-[10px] tracking-[0.28em] uppercase mb-6">
              Social
            </p>
            <div className="flex items-center gap-5">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/panorama_escazu/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-[#C8C8C8] hover:text-white transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
                </svg>
              </a>
              {/* Facebook */}
              <a
                href="https://www.facebook.com/PanoramaEscazu"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-[#C8C8C8] hover:text-white transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
                </svg>
              </a>
              {/* WhatsApp */}
              <a
                href="https://wa.me/50688602441"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="text-[#C8C8C8] hover:text-white transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>
          </div>

          {/* ── Location ── */}
          <div>
            <div className="w-full h-px bg-white/20 mb-6" />
            <p className="text-white/50 font-body text-[10px] tracking-[0.28em] uppercase mb-6">
              Location
            </p>
            <address className="not-italic">
              <p className="text-[#C8C8C8] font-body text-sm tracking-wide leading-relaxed">
                Calle El Poró,<br />
                Jaboncillo, Escazú,<br />
                San José, Costa Rica
              </p>
              <a
                href="https://maps.app.goo.gl/RAyeCR2aQAt9xXpQ8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-white/40 font-body text-[10px] tracking-[0.2em] uppercase hover:text-white/70 transition-colors"
              >
                Open in Maps ↗
              </a>
            </address>
          </div>

        </div>
      </div>

      {/* ── Bottom bar: logo + copyright ─────────────────────────────────── */}
      <div className="border-t border-white/10">
        <div className="max-w-screen-xl mx-auto px-8 lg:px-16 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="Panorama 270° Logo"
              width={70}
              height={44}
              className="object-contain opacity-60 hover:opacity-90 transition-opacity"
            />
          </Link>
          <p className="text-white/30 font-body text-[11px] tracking-[0.15em]">
            © {new Date().getFullYear()} Panorama 270°. All rights reserved.
          </p>
        </div>
      </div>

    </footer>
  );
}
