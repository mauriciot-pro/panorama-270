"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "/#home" },
  { label: "Models", href: "/#models" },
  { label: "Contact", href: "/#contact" },
  { label: "Progress", href: "/#progress" },
  { label: "Location", href: "/#location" },
  { label: "Panorama 180°", href: "/panorama-180" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    setMenuOpen(false);
    // Smooth scroll for anchor links on the same page
    if (href.startsWith("/#")) {
      e.preventDefault();
      const id = href.replace("/#", "");
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#091235] shadow-lg"
          : "bg-[#091235]"
      }`}
    >
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 flex items-center justify-between h-[90px]">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/images/logo.png"
            alt="Panorama 270° Logo"
            width={88}
            height={55}
            priority
            className="object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="
                relative text-[#C8C8C8] text-xs tracking-[0.18em] uppercase
                font-light transition-colors duration-200 hover:text-white
                after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-px
                after:bg-white after:transition-all after:duration-300
                hover:after:w-full
              "
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-2 group"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-px bg-[#C8C8C8] transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-[6px]" : ""
            }`}
          />
          <span
            className={`block w-6 h-px bg-[#C8C8C8] transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-px bg-[#C8C8C8] transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-[6px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-[#091235] overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-[400px] border-t border-white/10" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col items-center gap-6 py-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-[#C8C8C8] text-xs tracking-[0.18em] uppercase font-light hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
