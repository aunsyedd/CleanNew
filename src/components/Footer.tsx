import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-gold/10 py-12 px-6">
      <div className="mx-auto max-w-6xl flex flex-col items-center text-center gap-6">
        {/* Logo */}
        <div className="relative w-20 h-20 rounded-full overflow-hidden ring-1 ring-gold/25">
          <Image
            src="/logo.png"
            alt="CleanNew"
            fill
            className="object-cover"
          />
        </div>

        {/* Brand */}
        <div className="space-y-2">
          <p className="font-display text-2xl gold-text font-semibold tracking-wide">
            CleanNew
          </p>

          <p className="text-xs uppercase tracking-[0.35em] text-gold-mid">
            Cleaning • Caring • Protecting
          </p>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-500 max-w-md leading-relaxed">
          Premium sofa cleaning services. Professional, eco-friendly, and
          trusted across your local area.
        </p>

        <div className="section-divider w-full max-w-xs" />

        {/* Copyright */}
        <div className="flex flex-col items-center gap-2">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} CleanNew. All rights reserved.
          </p>

          <p className="text-xs text-gray-500 tracking-wide">
            Engineered & Developed by{" "}
            <a
              href="https://www.nexoratech.info/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:text-gold-light transition-colors duration-300"
            >
              Nexora Tech
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}