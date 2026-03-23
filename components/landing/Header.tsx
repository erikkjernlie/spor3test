"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  {
    label: "Meny",
    href: "https://cdn.prod.website-files.com/63a2161950ebce0ce95268f9/6985d7bce3b0bcfd13203048_meny2026%20korrektur2.pdf",
    external: true,
  },
  { label: "Bildegalleri", href: "/bildegalleri", external: false },
  { label: "Kontakt oss", href: "#kontakt", external: false },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 flex items-center justify-center px-6 py-6 md:px-8">
      <div className="flex w-full max-w-6xl items-center justify-end">
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              className="font-sans text-sm font-semibold tracking-wide text-white/80 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="https://spor3sandnes.no/booking"
            target="_blank"
            className="rounded border-2 border-white px-5 py-2 font-sans text-sm font-semibold text-white transition-colors hover:bg-white hover:text-black"
          >
            Book bord
          </Link>
        </nav>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-white md:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="absolute top-full left-0 right-0 z-50 border-t border-white/10 bg-black/95 backdrop-blur-md md:hidden">
          <nav className="flex flex-col items-center gap-6 py-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                onClick={() => setMobileOpen(false)}
                className="font-sans text-base font-semibold text-white/80 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="https://spor3sandnes.no/booking"
              target="_blank"
              onClick={() => setMobileOpen(false)}
              className="w-3/4 rounded border-2 border-white py-3 text-center font-sans text-base font-semibold text-white transition-colors hover:bg-white hover:text-black"
            >
              Book bord
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
