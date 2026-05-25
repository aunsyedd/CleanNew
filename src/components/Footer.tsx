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

        {/* Instagram Link */}
        <a
          href="https://www.instagram.com/cleannew.sa/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gold hover:text-gold-light transition-colors duration-300"
        >
          {/* Instagram SVG Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <path d="M16 11.37a4 4 0 1 1-4.74-4.74A4 4 0 0 1 16 11.37z" />
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
          </svg>

          <span className="text-sm tracking-wide">Instagram</span>
        </a>

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