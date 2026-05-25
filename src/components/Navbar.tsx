"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#why-us", label: "Why Us" },

];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "py-3"
          : "py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <nav
          className={`flex items-center justify-between rounded-2xl border transition-all duration-500 ${
            scrolled
              ? "border-white/10 bg-black/75 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.35)]"
              : "border-transparent bg-white/[0.03]"
          } px-6 py-4`}
        >
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-3 transition-opacity hover:opacity-90"
          >
            <div className="relative">
              <Image
                src="/logo.png"
                alt="CleanNew"
                width={46}
                height={46}
                className="rounded-full border border-gold/20 object-cover"
              />

              <div className="absolute inset-0 rounded-full ring-2 ring-gold/10" />
            </div>

            <div className="hidden sm:block">
              <p className="text-[11px] uppercase tracking-[0.3em] text-gold/70">
                Premium Detailing
              </p>
              <h2 className="text-base font-semibold text-white">
                CleanNew
              </h2>
            </div>
          </a>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-10">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="group relative text-sm font-medium tracking-wide text-gray-300 transition-colors hover:text-white"
                >
                  {link.label}

                  <span className="absolute -bottom-2 left-0 h-[1px] w-0 bg-gold transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold px-5 py-2.5 text-sm font-medium text-black transition-all duration-300 hover:scale-[1.03] hover:bg-[#f5d27a]"
            >
              Book Now

              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            type="button"
            aria-label="Toggle Menu"
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10 md:hidden"
          >
            {menuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`overflow-hidden transition-all duration-500 md:hidden ${
            menuOpen
              ? "max-h-[400px] opacity-100 mt-3"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="rounded-2xl border border-white/10 bg-black/90 backdrop-blur-xl p-6 shadow-2xl">
            <ul className="flex flex-col gap-5">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center justify-between text-sm font-medium tracking-wide text-gray-300 transition hover:text-white"
                  >
                    {link.label}

                    <ArrowUpRight className="h-4 w-4 text-gold" />
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-6 border-t border-white/10 pt-6">
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-semibold text-black transition hover:bg-[#f5d27a]"
              >
                Book Appointment

                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}